module.exports = {

//获取服务提供商
getProvider(){
    return "";
},

 share(quick_object){
  if (!quick_object){
    return;
  }
  var quick_shareType = quick_object.shareType;
  var quick_title = quick_object.title;
  var quick_summary = quick_object.summary;
  var quick_targetUrl = quick_object.targetUrl;
  var quick_imagePath = quick_object.imagePath;
  var quick_mediaUrl = quick_object.mediaUrl;
  var quick_platforms = quick_object.platforms;
  //////////////////////////////////////////
  
  if (quick_platforms) {
    var quick_temp = [];
    for (var platforms of quick_platforms) {
      console.log(platforms);
      if (["WEIXIN_CIRCLE", "WEIBO", "QQ", "SYSTEM"].indexOf(platforms) > 0) {
        quick_temp.push(platforms);
      }
    }

    if (quick_temp.lenght > 0) {
      console.warn("[quick2weixin] only support 'WEIXIN'");
    }
  }

  var my_object = {};
  var flag = [0, 2].indexOf(quick_shareType);
  if (flag == 0){
    //图文类型
    my_object.title = quick_title;
    if(quick_imagePath){
      my_object.imageUrl = quick_imagePath;
    }

  }else if(flag == 1){
    //纯图片
    my_object.imageUrl = quick_imagePath;

  }else{
    //其它类型暂不支持
    if (quick_object.fail) {
      quick_object.fail("[quick2weixin] only support 'quick_shareType: 0 or 2'", 203);
    }
    if (quick_object.complete) {
      quick_object.complete("[quick2weixin] only support 'quick_shareType: 0 or 2'", 203);
    }
    return;
  }
  var my_callback = {};
  if (quick_object.complete) {
    my_callback.complete = quick_object.complete;
  }
  if (quick_object.success) {
    my_callback.success = quick_object.success;
  }
  if (quick_object.fail) {
    my_callback.fail = quick_object.fail;
  }
  if (quick_object.cancel) {
    my_callback.cancel = quick_object.cancel;
  }

  my.navigateTo({
    url: `/onekit/page/share.share/share.share?param=${JSON.stringify(my_object)}`,
    events: my_callback,
  });

}

, getAvailablePlatforms(quick_object){
  var result = ["WEIXIN"];//, "WEIXIN_CIRCLE"
  if(quick_object.success){
    quick_object.success({
      platforms: result
    });
    
  }
  if(quick_object.complete){
    quick_object.complete({
      platforms : result
    });
  }
}

}