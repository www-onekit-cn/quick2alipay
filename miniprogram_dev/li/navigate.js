import{OnekitPage,tt} from '../toutiao2alipay/index'
OnekitPage({
    onShareAppMessage:function(){
      return {
        title:'navigatePage',
        path:'page/component/pages/navigator/navigate'
      }
    },
    onLoad:function(options){
      console.log(options)
      this.setData({
        title:options.title
      })
    }
  })