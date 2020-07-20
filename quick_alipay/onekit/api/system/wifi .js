module.exports = {
/**wifi.connect */
connect(quick_object) {
  if(!quick_object){
    return;
  }
  var quick_SSID = quick_object.SSID;
  var quick_BSSID = quick_object.BSSID;
  var quick_password = quick_object.password;
  var quick_success = quick_object.success;
  var quick_fail = quick_object.fail;
  var quick_complete = quick_object.complete;
  //////////////////////////////////////////////
  var my_object = {};
  my_object.SSID = quick_SSID;
  my_object.BSSID = quick_BSSID;
  if(quick_password){
    my_object.password = quick_password;
  }

  my_object.success = function (my_res) {
    var quick_res = {};
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
    
    my.connectWifi(my_object)
  }
  /**
   * wifi.scan
   */
  , scan(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var my_object = {};
    my_object.success = function (my_res) {
      var quick_res = {};
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
    my.getWifiList(my_object)
  }
  /**
   * wifi.getConnectedWifi */

  , getConnectedWifi(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var my_object = {};
     
    my_object.success = function (my_res) {
      var quick_res = {};
      for (var my_res_key in my_res) {
        var my_res_value = my_res[my_res_key];
        switch (my_res_key) {
          case "wifi":
            quick_res.type = my_res_value
            break;
          case "errCode":
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
    my_object.fail = function (my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my.getConnectedWifi(my_object)
  }
  /**
   * wifi.onscanned */
  , onscanned(data){
    my.onGetWifiList(function (data){
      console.error("[quick2weixin] 暂不支持 onscanned");
    })
  }
  /**wifi.onstatechanged */
  , onstatechanged(data) {
    my.offWifiConnected(function (data) {
      console.error("[quick2weixin] 暂不支持 onstatechanged");
    })
  }
}