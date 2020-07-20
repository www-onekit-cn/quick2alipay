  function _pickImageHandler(quick_object, count){
  if (!quick_object) {
    return;
  }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
  ////////////////////////////////
  var my_object = {
    count,
  };

  my_object.success = function (res) {
    console.log(res);
    var quick_res = {};
    if (count == 1) {
      //单图片
      for (var my_key of Object.keys(res)) {
        var my_value = res[my_key];
        switch (my_key) {
          case "tempFilePaths":
            break;
          case "tempFiles":
            var file = my_value[0];
            for (var file_key of Object.keys(file)) {
              var file_value = file[file_key];
              switch (file_key) {
                case "path":
                  quick_res["uri"] = file_value;
                  break;
                case "size":
                  quick_res["size"] = file_value;
                  break;
              }
            }

            console.log(quick_res.uri);
            quick_res["name"] = quick_res.uri.substring(quick_res.uri.lastIndexOf("/") + 1);

            break;
        }
      }
    } else {
      //多图片
      quick_res = {
        uris: [],
        files: [],
      };
      for (var my_key of Object.keys(res)) {
        var my_value = res[my_key];
        switch (my_key) {
          case "tempFilePaths":
            quick_res["uris"] = my_value;
            break;
          case "tempFiles":
            for (var file of my_value) {
              var file_data = {};
              for (var file_key of Object.keys(file)) {
                var file_value = file[file_key];
                switch (file_key) {
                  case "path":
                    file_data["uri"] = file_value;
                    break;
                  case "size":
                    file_data["size"] = file_value;
                    break;
                }
              }
              file_data.name = file_data.uri.substring(file_data.uri.lastIndexOf("/") + 1);
              quick_res.files.push(file_data);
            }
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
  }

  my_object.fail = function (res) {
    if (res.errorMessage.indexOf("cancel") > 0) {
      if (quick_cancel) {
        quick_cancel();
      }
    } else {
      if (quick_fail) {
        quick_fail(res);
      }
    }

    if (quick_complete) {
      quick_complete(res);
    }
  }

  my.chooseImage(my_object);
}
module.exports =  {
  /**media.takePhoto */
   takePhoto:function(quick_object) {
     console.log("media.takePhoto暂不支持！")
  },
  /** media.takeVideo */
   takeVideo:function(quick_object) {
     console.log("media.takeVideo暂不支持！")
  },

  /**media.pickImage */
  pickImage(quick_object) {
    _pickImageHandler(quick_object, 1);
  },

  /**media.pickImages */
   pickImages(quick_object) {
    _pickImageHandler(quick_object, 9);
  }


   
  /**media.pickVideo */
  , pickVideo(quick_object) {
    _pickImageHandler(quick_object, 1);
  }

  /**media.pickVideos */
  , pickVideos(quick_object) {
    _pickImageHandler(quick_object, 9);
  }
  ,/* _pickVideoHandler(quick_object, count) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
    quick_object =null;
    ////////////////////////////////
    var my_object = {
      maxDuration : 60, //快应用拍摄视频时长为10分钟
    };

    my_object.success = function (res) {
      console.log(res);
      var quick_res = {};
      if (count == 1) {
        //单视频
        for (var my_key of Object.keys(res)) {
          var my_value = res[my_key];
          switch (my_key) {
            case "tempFilePath":
              quick_res["uri"] = my_value;
              quick_res["name"] = my_value.substring(my_value.lastIndexOf("/") + 1);
              break;
            case "size":
              quick_res["size"] = my_value;
          }
        }
      } else {
        //多视频
        quick_res = {
          uris: [],
          files: [],
        };
        var file = {};
        for (var my_key of Object.keys(res)) {
          var my_value = res[my_key];
          switch (my_key) {
            case "tempFilePath":
              quick_res.uris.push(my_value);
              file["uri"] = my_value;
              file["name"] = my_value.substring(my_value.lastIndexOf("/") + 1);
              break;
            case "size":
              file["size"] = my_value;
          }
        }
        quick_res.files.push(file);
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    }

    my_object.fail = function (res) {
      console.log(res);
      if (res.errMsg.indexOf("cancel") > 0) {
        if (quick_cancel) {
          quick_cancel();
        }
      } else {
        if (quick_fail) {
          quick_fail(res);
        }
      }

      if (quick_complete) {
        quick_complete(res);
      }
    }

    my.chooseVideo(my_object);
  }*/

  /**media.pickFile */
  pickFile(quick_object) {
    console.log("media.pickFile暂不支持！")
  }

  /**media.saveToPhotosAlbum */
  , saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_uri =quick_object.uri;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object =null;
    ////////////////////////////////
    var my_object = {};
    if(quick_uri){
      my_object.url =quick_uri
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
      my.saveImage(my_object)
  }
  /**media.previewImage */
  , previewImage(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_current =quick_object.current;
    let quick_uris =quick_object.uris;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object =null;
    ////////////////////////////////
    var my_object = {};
    if(quick_uris){
    my_object.urls=quick_uris
    }
    if(quick_current){
      my_object.current =quick_current
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
      my.previewImage(my_object)
  }
  /**media.getRingtone */
  , getRingtone(quick_object) {
    console.error("[quick2weixin] 暂不支持 media.getRingtone");
  }
  /**setRingtone */
  ,setRingtone(quick_object){
    console.error("[quick2weixin] 暂不支持 media.setRingtone");
  }

}