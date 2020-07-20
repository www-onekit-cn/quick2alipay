module.exports = {
/**
 * 支付宝app支付暂未开通
 * 
 */
 pay(quick_object){
    var my_object;
    if (!quick_object){
      return;
    }

    var quick_orderInfo = quick_object.orderInfo;
    var quick_callback = quick_object.callback;
    

    console.error("[quick2weixin]", "暂未开通支付宝app支付");

  }


}