const qiniu = require('qiniu'); // qiniu SDK
const file = require('./readFile'); // 读取文件
const ProgressBar = require('./progress-bar');  // 进度条
const pb = new ProgressBar('正在上传至七牛云', 50); // 初始化进度条

let uploadToken = '';
let formUploader = null;
const extra = new qiniu.form_up.PutExtra();

// 构造上传函数
function uploadFile(uptoken, key, localFile) {
  let uploadResult = true;
  formUploader.putFile(uptoken, key, localFile, extra, (respErr, respBody, respInfo) => {
    if (respErr) {
      throw respErr;
    }
    if (respInfo.statusCode === 200) {
      uploadResult = true;
    } else {
      uploadResult = false;
    }
  });
  return uploadResult;
}

/**
 * 循环上传函数
 */
let num = 1;
function uploading(files) {
  if (num <= files.length) {
    // 更新进度条
    pb.render({ completed: num, total: files.length });

    // 上传
    const key = files[num - 1].fileName;
    const filePath = files[num - 1].filePath;
    const result = uploadFile(uploadToken, key, filePath);

    if (result) {

      num++;
      setTimeout(() => {
        uploading(files);
      }, 250)
      
    } else {
      console.log('\nupload fail!')
    }
  } else {
    console.log('\nupload finish!')
  }
}

/**
 * @param {要上传的文件路径} path 
 * @param {七牛云账户的accesskey} accessKey 
 * @param {七牛云账户的secretKey} secretKey 
 * @param {七牛云空间地址} zone
 * @param {七牛云空间名} bucket 
 */
module.exports = function(path, accessKey, secretKey, zone, bucket) {
  const files = file.getFiles(path); // 获取文件列表
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey); // 生成鉴权对象
  const config = new qiniu.conf.Config();
  
  config.zone = qiniu.zone[zone]; // 空间对应机房
  formUploader = new qiniu.form_up.FormUploader(config);
  
  const options = {
    scope: bucket,
    expires: 7200
  } 
  
  const putPolicy = new qiniu.rs.PutPolicy(options);
  uploadToken = putPolicy.uploadToken(mac);

  uploading(files);
}
