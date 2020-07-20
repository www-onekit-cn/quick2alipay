module.exports = {
  /*
 battery.getStatus* */
  getStatus(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var my_object = {};
    my_object.success = function(my_res) {
      var quick_res = {};
      for (var my_res_key in my_res) {
        var my_res_value = my_res[my_res_key];
        switch (my_res_key) {
          case "level":
            quick_res.level = my_res_value / 100
            break;
          case "isCharging":
            quick_res.isCharging = my_res_value
            break;
          case "errMsg":
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
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my.getBatteryInfo(my_object)
  }
}