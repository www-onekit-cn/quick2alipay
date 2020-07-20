module.exports = {
  /*  clipboard.set/// */
  set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_text=quick_object.text;
    quick_object =null;
    /////////////////
      var my_object = {};
      if(quick_text){
        my_object.text = quick_text
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
        my.setClipboard(my_object)
    }

    /* clipboard.get/// */
    ,
  get(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////
    var my_object = {};
      my_object.success = function(my_res) {
        var quick_res = {};
        quick_res.text = my_res.text
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
      my.getClipboard(my_object)
  }
}