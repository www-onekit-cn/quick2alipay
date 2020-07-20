module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_value = quick_object.value;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {};
    if (quick_key) {
      my_object.key = quick_key;
    }

    if (quick_value) {
      my_object.data = quick_value;
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
    my.setStorage(my_object)
  }
  /* storage.get */
  ,
  get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {};
    my_object.key = quick_key;

    my_object.success = function (my_res) {
      var quick_res = {};
      for (var my_res_key in my_res) {
        var my_res_value = my_res[my_res_key];
        switch (my_res_key) {
          case "data":
            quick_res = my_res_value
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
        quick_fail("");

      }
      if (quick_complete) {
        quick_complete("");
      }

    };
    my.getStorage(my_object)
  }
  /*Storage.clear*/
  ,
  clear(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {};

    my_object.success = function (my_res) {
      var quick_res = {};
      if (my_res) {
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "errMsg":
              break;
          }
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
    my.clearStorage(my_object)
  }
  /*Storage.delete*/
  ,
  delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {};
    my_object.key = quick_key;

    my_object.success = function (my_res) {
      var quick_res = {};
      if (my_res) {
        for (var my_res_key in my_res) {
          var my_res_value = my_res[my_res_key];
          switch (my_res_key) {
            case "errMsg":
              break;
          }
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
    my.removeStorage(my_object)
  }
  /*storage.key*/
  ,
  key(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_index = quick_object.index;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var my_object = {}
    var index = quick_object.index;
    my_object.success = function (my_res) {
      var quick_res = my_res.keys[index];
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
    my.getStorageInfo(my_object)
  }
}