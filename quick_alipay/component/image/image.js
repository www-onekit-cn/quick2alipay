import prompt from "../../onekit/api/system/prompt"
Page({
  data: {
    componentName: 'image',
    remoteURL: 'http://www.w3school.com.cn/svg/',
    inputImageURL: 'http://www.w3school.com.cn/svg/rect1.svg',
    requestImageURL: ''
  },
  onLoad() { },
  onInit () {
      this.$page.setTitleBar({text: 'Image'})
    },
    onImageUrlChange(data) {
      this.inputImageURL = data.value
    },
    onImageGetClick() {
      this.requestImageURL = this.inputImageURL
      prompt.showToast({
        message: '加载' + this.requestImageURL + '图片'
      })
    },
    onImageComplete(data) {
      prompt.showToast({
        message: '图片获取成功\n' + '高度：' + data.height + 'px  ' + '宽度：' + data.width + 'px'
      })
    },
    onImageError() {
      prompt.showToast({
        message: '图片获取失败'
      })
    }
});
