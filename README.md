# uploadForQiniu

> 公司的项目会将所有静态资源托管到七牛云空间，每次打包之后手动上传极大对增加了工作负担，于是此插件诞生。

> 根据七牛云技术文档提供的上传API进行开发。

## How to use

``` bash
npm install kumi-upload -S
```

## 填写参数
| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| onRefresh | pull to refresh callback | N | - |
| onInfinite | infinite loading callback | N | - |
| onInfinite | infinite loading callback | N | - |
| refreshText | tips of `pull-to-refresh` | N | 下拉刷新 |
| noDataText | tips of `no-more-data` when `infinite-loading` finished | N | 没有更多数据 |
| width | scroller container width | N | `100%` |
| height | scroller container height | N | `100%` |
| snapping | enable snapping mode | N | `false` |
| snappingWidth | snapping width | N | 100 (stand for 100px) |
| snappingHeight | snapping height | N | 100 |
| refreshLayerColor | text color of `pull-to-refresh` layer | N | #AAA |
| loadingLayerColor | text color of `infinite-loading` layer | N | #AAA |
| minContentHeight | min content height (px) of `scroll-content` | N | 0 |
