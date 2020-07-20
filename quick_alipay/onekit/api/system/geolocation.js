module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_timeout = quick_object.timeout;
    let quick_coordType = quick_object.coordType || "wgs84";
    quick_object = null;
    ////////////////////////////////
    var my_object = {};
    if (quick_timeout) {
      my_object.cacheTimeout = quick_timeout
    }
    if (quick_coordType) {
      my_object.type = quick_coordType
    }
    my_object.success = function (my_res) {
      var quick_res = {
      };
      for (var my_res_key in my_res) {
        var my_res_value = my_res[my_res_key];
        // console.log(my_res_key)
        switch (my_res_key) {
          case "accuracy":
            quick_res.accuracy = my_res_value
            break;
          case "latitude":
            quick_res.latitude = my_res_value
            break;
          case "longitude":
            quick_res.longitude = my_res_value
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
    my.getLocation(my_object)
  },
  /** getLocationType*/
  getLocationType(quick_object) {
    console.log("暂不支持！")
  },
  /**openLocation */
  openLocation(quick_object) {
    if (!quick_object) {
      return;
    }

    let quick_latitude = quick_object.latitude;
    let quick_longitude = quick_object.longitude;
    let quick_coordType = quick_object.coordType;
    let quick_scale = quick_object.scale;
    let quick_name = quick_object.name;
    let quick_address = quick_object.address;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object = null;
    ////////////////////////////////
    var my_object = {};
    if (quick_latitude) {
      my_object.latitude = quick_latitude
    }
    if (quick_longitude) {
      my_object.longitude = quick_longitude
    }
    if (quick_scale) {
      my_object.scale = quick_scale
    }
    if (quick_name) {
      my_object.name = quick_name
    }
    if (quick_address) {
      my_object.address = quick_address
    }
    my_object.success = function (my_res) {
      var quick_res = {
        coordType: my_res.latitude + "," + my_object.longitude
      };
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
    my.openLocation(my_object)
  }
  /** chooseLocation*/
  ,
  chooseLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_latitude = quick_object.latitude;
    let quick_longitude = quick_object.longitude;
    let quick_coordType = quick_object.coordType;
    quick_object = null;
    ////////////////////////////////
    var my_object = {};
    my_object.success = function (my_res) {
      var quick_res = {
        coordType: my_res.latitude + "," + my_object.longitude
      };
      for (var my_res_key in my_res) {
        var my_res_value = my_res[my_res_key];
        switch (my_res_key) {
          case "name":
            quick_res.name = my_res_value
            break;
          case "address":
            quick_res.address = my_res_value
            break;
          case "latitude":
            quick_res.latitude = my_res_value
            break;
          case "longitude":
            quick_res.longitude = my_res_value
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
    my.chooseLocation(my_object)
  }
  /** geolocation.subscribe*/
  ,
  subscribe(quick_object) {
    console.log("暂不支持！")
  }
  /**my.offLocationChange */
  , unsubscribe() {
    console.log("暂不支持！")
  }
  /**geolocation.getSupportedCoordTypes() */
  , getSupportedCoordTypes() {
    console.log("暂不支持！")
  }

}