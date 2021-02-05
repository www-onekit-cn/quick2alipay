import quickapp2alipay from '../quickapp2alipay/index'
const router = quickapp2alipay["@system.router"]
const media = quickapp2alipay["@system.media"]
const configuration = quickapp2alipay["@system.configuration"]
const prompt = quickapp2alipay["@system.prompt"]
const request = quickapp2alipay["@system.request"]

const websocketfactory = quickapp2alipay["@system.websocketfactory"]
//const fetch = quickapp2alipay["@system.fetch"]

Page({
  onLoad(e) {
    //   console.log(my.canIUse('connectSocket'));
  //   my.connectSocket({
  //     url: 'wss://echo.websocket.org',
  //     success: res => {
  //       console.log(res)
  //     }
  //   })
  //   my.onSocketOpen(function (res) {
  //     my.sendSocketMessage({
  //     data: 'ssss',
  //     success: res => {
  //       console.log(res)
  //     },fail:res=>{
  //       console.log(res)
  //     }
  //   })
  //     console.log('WebSocket 连接已打开！');
  //   });
  // setTimeout(res=>{

  // },10000) 


        const ws = websocketfactory.create({
      url: 'wss://echo.websocket.org',
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol']
    })
    my.closeSocket({
      success:res=>{
        console.log(res)
      }
    })
   
    ws.send({
      data: 'send message',
      success: function() {
        console.log(`send success`)
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
    // fetch.fetch({
    //   url: 'https://www.onekit.cn',
    //   responseType: 'text',
    //   success: function (response) {
    //     console.log(response)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, errMsg = ${data}`)
    //     console.log(`handling fail, errCode = ${code}`)
    //   }
    // })

    //  const request =  my.downloadFile({
    //   url:'http://localhost/SVN.pdf',
    //   success:res=>{
    //     console.log(res)
    //   }
    //   })
    // request.onProgressUpdate(res=>{
    //     console.log(res)
    //   })
    //   console.log(request)




    // my.chooseImage({
    //   count: 0,
    //   sizeType: [],
    //   sourceType: [],
    //   success: (result) => {
    //     request.upload({
    //   url: 'https://www.onekit.cn',
    //   files: [
    //     {
    //       uri: result.apFilePaths[0],
    //       name: 'file1',
    //       filename: 'test.png'
    //     }
    //   ],
    //   data: [
    //     {
    //       name: 'param1',
    //       value: 'value1'
    //     }
    //   ],
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    //     console.log(result)
    //   },
    //   fail: () => {

    //   },
    //   complete: () => {

    //   }
    // });

    //     request.download({
    //   url: 'http://localhost/a.html',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // request.onDownloadComplete({
    //   token: '',
    //   success: function(data) {
    //     console.log(`handling success${data.uri}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })


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
