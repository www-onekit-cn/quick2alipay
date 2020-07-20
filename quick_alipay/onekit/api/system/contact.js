module.exports = {
  /*contact.pick*/
  pick(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object = null;
    /////////////////////////////
    var my_object = {};
    my_object.success = function (my_res) {
      var quick_res = {};
      for (var my_res_key in my_res) {
        switch (my_res_key) {
          case "name":
            quick_res.displayName = my_res.result
            break;
          case "mobile":
            quick_res.number = my_res.result
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
    my.choosePhoneContact(my_object)
  }
  /*contact.list*/
  ,
  list(quick_object) {
    console.log("contact.list暂不支持")
  }
}