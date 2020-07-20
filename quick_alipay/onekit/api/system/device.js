module.exports = {
  getInfo(quick_object) {
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
        var quick_res = {
          osVersionCode: 29,
          platformVersionCode: 1062,
          platformVersionName: "1.0.6.2",
          product: "OnePlus7_CH",
          vendorOsName: "H2OS",
          vendorOsVersion: "Hydrogen OS 10.0.4.GM57",
        };
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "brand": //微信
              quick_res.brand = my_res_value //快应用
              quick_res.manufacturer = my_res_value
              break;
            case "language":
              quick_res.language = my_res_value.split("_")[0];
              quick_res.region = my_res_value.split("_")[1];
              break;
            case "safeArea":
              break;
            case "model":
              quick_res.model = my_res_value
              break;
            case "pixelRatio":
              quick_res.screenDensity = my_res_value
              break;
            case "platform":
              quick_res.osType = my_res_value
              break;
            case "system":
              quick_res.osVersionName = my_res_value.split(" ")[1]
              break;
            case "screenHeight":
              quick_res.screenHeight = my_res_value
              break;
            case "screenWidth":
              quick_res.screenWidth = my_res_value
              break;
            case "screenTop":
              quick_res.statusBarHeight = my_res_value
              break;
            case "windowHeight":
              quick_res.windowHeight = my_res_value
              break;
            case "windowWidth":
              quick_res.windowWidth = my_res_value
              break;
            case "SDKVersion":
            case "benchmarkLevel":
            case "bluetoothEnabled":
            case "cameraAuthorized":
            case "version":
            case "notificationAuthorized":
            case "microphoneAuthorized":
            case "locationEnabled":
            case "locationAuthorized":
            case "errMsg":
            case "deviceOrientation":
            case "devicePixelRatio":
            case "fontSizeSetting":
              break;
            default:
              quick_res[my_res_key] = my_res_value
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
      my.getSystemInfo(my_object)
  }
}