/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {

  // 获取服务提供商
  getProvider() {
    return wx.getSystemInfoSync().brand
  },

  share(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_shareType = quick_object.shareType
    const quick_title = quick_object.title
    // const quick_summary = quick_object.summary
    // const quick_targetUrl = quick_object.targetUrl
    const quick_imagePath = quick_object.imagePath
    // const quick_mediaUrl = quick_object.mediaUrl
    const quick_platforms = quick_object.platforms
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_cancel = quick_object.cancel
    // ////////////////////////////////////////
    const my_object = {}
    if (quick_platforms) {
      const quick_temp = []
      for (const platforms of quick_platforms) {
        console.log(platforms)
        if (['alipay_CIRCLE', 'WEIBO', 'QQ', 'SYSTEM'].indexOf(platforms) > 0) {
          quick_temp.push(platforms)
        }
      }

      if (quick_temp.lenght > 0) {
        console.warn("[quick2alipay] only support 'alipay'")
      }
    }

    const flag = [0, 2].indexOf(quick_shareType)
    if (flag === 0) {
      // 图文类型
      my_object.title = quick_title
      if (quick_imagePath) {
        my_object.imageUrl = quick_imagePath
      }
    } else if (flag === 1) {
      // 纯图片
      my_object.imageUrl = quick_imagePath
    } else {
      // 其它类型暂不支持
      if (quick_fail) {
        quick_fail("[quick2alipay] only support 'quick_shareType: 0 or 2'", 203)
      }
      return
    }
    const my_callback = {}
    if (quick_success) {
      my_callback.success = quick_success
    }
    if (quick_fail) {
      my_callback.fail = quick_fail
    }
    if (quick_cancel) {
      my_callback.cancel = quick_cancel
    }

    wx.navigateTo({
      url: `/onekit/page/share.share/share.share?param=${JSON.stringify(my_object)}`,
      events: my_callback,
    })
  },

  getAvailablePlatforms(quick_object) {
    if (!quick_object) {
      return
    }
    // /////////////////////////////////////////
    const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // //////////////////////////////////////
    const result = ['alipay'] // , "alipay_CIRCLE"
    if (quick_success) {
      quick_success({
        platforms: result
      })
    }
    if (quick_complete) {
      quick_complete({
        platforms: result
      })
    }
  }

}
