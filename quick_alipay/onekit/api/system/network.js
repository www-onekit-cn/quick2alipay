module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object=null;
    ///////////////////////////
    var my_object = {};
      my_object.success = function (my_res) {
        var quick_res = {metered: false};
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "networkType":
              quick_res.type = my_res_value
              break;
          }
        }
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      my_object.fail = function (my_res) {
        if (quick_fail) {
          quick_fail(my_res);
        }
        if (quick_complete) {
          quick_complete(my_res);
        }
      };
      my.getNetworkType(my_object)
  }


  //////////////////////////
  , subscribe(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_reserved = quick_object.reserved ;
    let quick_callback = quick_object.callback;
    let quick_fail = quick_object.fail;
    quick_object=null;
    ///////////////////////////
    var my_callback={}
    my.onNetworkStatusChange(function(my_callback){
      quick_callback.type = my_callback.networkType
    })
  }
  /////////
  , unsubscribe(quick_object){
    my.offNetworkStatusChange(function(res){
    })
  }
  /**getSimOperator */
  ,getSimOperator(quick_object){
    console.log("暂不支持！")
  }
}