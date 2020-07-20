module.exports = {
  getType(){
    return "APP";
  }

  , pay(quick_object){
    if(!quick_object){
      return;
    }
    var quick_perpayid = quick_object.prepayid;
    var quick_referer = quick_object.referer;
    var quick_extra = quick_object.extra;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    ///////////////////////////////////
    var my_object = {
      signType : "MD5",
    };
    my_object.timeStamp = quick_extra.timeStamp;
    my_object.nonceStr = quick_extra.nonceStr;
    my_object.package = quick_extra.package;
    my_object.paySign = quick_extra.paySign;

    my_object.success = function (res) {
      console.log("wx-pay-success", res);
      if (quick_success) {
        quick_success({
          prepayid: my_object.prepayid
        });
      }
    }
      
    my_object.fail = function (res) {
      console.log("wx-pay-fail", res);
  
      if (res.errMsg.indexOf("cancel") > -1 && quick_cancel){
        //用户取消支付
        quick_cancel(res);
      }else{
        //支付失败
        quick_fail(res);
      }
    }

    console.log("支付参数", my_object);
    my.requestPayment(my_object);
  }


}