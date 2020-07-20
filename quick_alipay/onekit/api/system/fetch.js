module.exports = {
  fetch(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_url = quick_object.url;
    let quick_data = quick_object.data;
    let quick_header	= quick_object.header;
    let quick_method  = quick_object.method;
    let quick_responseType = quick_object.responseType;

    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////
    var my_object = {};
    if(quick_url){
      my_object.url = quick_url
    }
    if(quick_data){
      my_object.data=quick_data
    }
    if(quick_header){
      my_object.headers= quick_header
    }
    if(quick_method){
      my_object.method=quick_method
    }
    if(quick_responseType){
      my_object.dataType=quick_responseType
    }
      my_object.success = function(my_res) {
        var quick_res = {};
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "status": //支付宝
              quick_res.code = my_res_value //快应用
              break;
            case "headers":
              var my_res_headers = my_res_value;
              var quick_res_headers = {};
              for (var my_res_headers_key in my_res_headers) { // 循环header里面的属性 对cookies做处理
                var my_res_headers_value = my_res_headers[my_res_headers_key];
                //console.log(my_res_headers_key, my_res_headers_value);
                switch (my_res_headers_key) {
                  case "Set-Cookie":
                    var my_res_headers_cookies;
                    if (my_res_headers_value) {
                      my_res_headers_cookies = my_res_headers_value.split(",");
                    } else {
                      my_res_headers_cookies = "";
                    }
                    quick_res_headers[my_res_headers_key] = my_res_headers_cookies
                    break
                  default:
                    quick_res_headers[my_res_headers_key] = my_res_headers_value;
                    break;
                }
              };
              quick_res.header = quick_res_headers;
              break;
            case "cookies":
              break;
            case "errMsg":
              break;
            default:
              quick_res[my_res_key] = my_res_value;
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
      my.request(my_object);
  }
}