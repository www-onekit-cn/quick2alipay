import quickapp2alipay from '../quickapp2alipay/index'
const router = quickapp2alipay["@system.router"]
const media = quickapp2alipay["@system.media"]
const configuration = quickapp2alipay["@system.configuration"]
const prompt = quickapp2alipay["@system.prompt"]
const request = quickapp2alipay["@system.request"]

Page({
  onLoad(e) {
    request.download({
  url: 'http://localhost/a.html',
  success: function(data) {
    console.log(data)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
   
//     prompt.showContextMenu({
//   itemList: ['item1', 'item2'],
//   itemColor: '#ff33ff',
//   success: function(data) {
//     console.log(data)
//   },
//   cancel: function() {
//     console.log('handling cancel')
//   },
//   fail: function(data, code) {
//     console.log(`handling fail, code = ${code}`)
//   }
// })
//     prompt.showDialog({
//   title: 'title',
//   message: 'message',
//   buttons: [
//     {
//       text: 'btn',
//       color: '#33dd44'
//     }
//   ],
//   success: function(data) {
//     console.log(data)
//   },
//   cancel: function() {
//     console.log('handling cancel')
//   },
//   fail: function(data, code) {
//     console.log(`handling fail, code = ${code}`)
//   }
// })
//     prompt.showToast({
//   message: 'message'
// })
    // my.showActionSheet({
    //   title: '支付宝-ActionSheet',
    //   items: ['菜单一', '菜单二', '菜单三'],
    //   cancelButtonText: '取消好了',
    //   success: (res) => {
    //     const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
    //     my.alert({
    //       title: `你点了${btn}按钮`
    //     });
    //     console.log(res)
    //   },
    // });
//     const locale = configuration.getLocale()
// console.log(locale)
// const themeMode = configuration.getThemeMode()
// console.log(`Theme mode is ${themeMode} now~`)
    //     router.push({
    //   uri: '/',
    //   params: {
    //     body: 'message'
    //   }
    // })
    // router.replace({
    //   uri: '/',
    //   params: {
    //     testId: '1'
    //   }
    // })
    // router.clear()
    // router.back({
    //   path: '/'
    // })
  }
});
