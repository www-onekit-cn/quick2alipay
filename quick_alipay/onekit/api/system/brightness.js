module.exports = {
  /*
 brightness.setValue
 * */
  setValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_value=quick_object.value;
    quick_object =null;
    ///////////////////////////
    var my_object = {};
    if(quick_value){
      my_object.brightness = quick_value;
    }
      my_object.success = function(my_res) {
        var quick_res = {};
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
    return my.setScreenBrightness(my_object)
  }
  /*
 brightness.getValue
 * */
  ,
  getValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    ///////////////////////////
    var my_object = {};
      my_object.success = function(my_res) {
        var quick_res = {};
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "value":
              quick_res.value = my_res_value
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
      my.getScreenBrightness(my_object)
  }
  /**
   * brightness.setKeepScreenOn
   */
  ,
  setKeepScreenOn(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_keepScreenOn= quick_object.keepScreenOn;
    quick_object =null;
    ///////////////////////////
    var my_object = {};
    if(quick_keepScreenOn){
      my_object.keepScreenOn = quick_keepScreenOn
    }
      my_object.success = function(my_res) {
        var quick_res = {};
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
      my.setKeepScreenOn(my_object)
  }

  /**
     brightness.setMode
     */
  ,
  setMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }

  /**
   brightness.getMode
   */
  ,
  getMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }
}