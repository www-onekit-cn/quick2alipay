module.exports = {
  vibrate(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_mode = quick_object.mode;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {}
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
    if (quick_mode == 'long' || quick_mode == null) {
      my.vibrateLong(my_object, console.log('vibrateLong'))
    } else if (quick_mode == 'short') {
      my.vibrateShort(my_object, console.log('vibrateShort'))
    }
  }
}