# uploadForQiniu

> 公司的项目会将所有静态资源托管到七牛云空间，每次打包之后手动上传极大对增加了工作负担，于是此插件诞生。

> 根据七牛云技术文档提供的上传API进行开发。

## How to use

``` bash
npm install kumi-upload -S
```

``` bash
import uploadForQiniu from 'kumi-upload'
uploadForQiniu.upload(uploadPath, accessKey, secretKey, zone, bucket)
```

## Params
| param | Description |
|-----|-----|
| accessKey | 七牛云空间的accessKey |
| secreKey | 七牛云空间的secreKey |
| uploadPath | 文件的绝对路径 |
| zone | 空间区域，华东: Zone_z0; 华北: Zone_z1; 华南: Zone_z2; 北美: Zone_na0 |
| bucket | 空间名称 |
