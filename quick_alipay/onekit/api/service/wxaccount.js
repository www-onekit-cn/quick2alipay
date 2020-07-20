module.exports = {
  getType() {
    return "APP";
  },
  authorize(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////




  }

}