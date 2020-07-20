module.exports = {
  /**file.move */
  move(quick_object) {
    return console.log("move暂不支持！")
  }
  /**file.copy */
  ,
  copy(quick_object) {
    return console.log("move暂不支持！")
    // if (!quick_object) {
    //   return;
    // }
    // var quick_success = quick_object.success;
    // var quick_fail = quick_object.fail;
    // var quick_complete = quick_object.complete;
    // var quick_srcUri=quick_object.srcUri
    // var quick_srcUri=quick_object.dstUri
    // ///////////////////////////
    // var my_object = {};
    // if(quick_srcUri){
    //   my_object.srcPath = quick_srcUri
    // }
    // if(quick_dstUri){
    //   my_object.destPath = quick_srcUri
    // }
    //   my_object.success = function(my_res) {
    //     var quick_res = {};
    //     if (quick_success) {
    //       quick_success(quick_res);
    //     }
    //     if (quick_complete) {
    //       quick_complete(quick_res);
    //     }
    //   };
    //   my_object.fail = function(my_res) {
    //     var quick_res = {
    //       fail: 202
    //     };
    //     for (var my_res_key in my_res) {
    //       var my_res_value = my_res[my_res_key];
    //       switch (my_res_key) {
    //         case "errMsg":
    //           break;
    //       }
    //     }
    //     if (quick_fail) {
    //       quick_fail(my_res);
    //     }
    //     if (quick_complete) {
    //       quick_complete(my_res);
    //     }
    //   };
    //   my.getFileSystemManager().copyFile(my_object)
  }

  /**file.list */
  ,
  list(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri
    ///////////////////////////////////////////////
    var my_object = {};
    if(quick_uri){
      my_object.dirPath=quick_uri
    }
      my_object.success = function(my_res) {
        var quick_res = {};
        quick_res.fileList = my_res.files
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
      my.getSavedFileList(my_object)
  }

  /**file.get */
  ,
  get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri=quick_object.uri;
    var quick_recursive=quick_object.recursive||false
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete; 
    ///////////////////////////////////////////////
      var my_object = {};
      if(quick_uri){
        my_object.filePath=quick_uri
      }
        my_object.success = function(my_res) {
          var quick_res = {
            uri:my_object.filePath,
            lastModifiedTime,
            type,
            subFiles
          };
          quick_res.length = my_res.size
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
        my.getFileInfo(my_object)
    }

    /**file.delete */
    ,
  delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri=quick_object.uri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var my_object = {};
    if(quick_uri){
     my_object.apFilePath=quick_uri
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
      my.removeSavedFile(my_object)
  }

  /**file.writeText */
  ,
  writeText(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_text=quick_object.text;
    var quick_encoding=quick_object.encoding||UTF-8;
    var quick_append=quick_object.append||false;
    var my_object = {};
    if(quick_uri){
      my_object.filePath=quick_uri
    }
    if(quick_text){
      my_object.data=quick_text
    }
    if(quick_encoding){
      my_object.encoding =quick_encoding
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
      my.getFileSystemManager().writeFile(my_object)
  }

  /**file.writeArrayBuffer */
  ,
  writeArrayBuffer(quick_object) {
    return console.log("暂不支持！")
  }

  /**file.readText */
  ,
  readText(quick_object) {}

  /**file.readArrayBuffer */
  ,
  readArrayBuffer(quick_object) {}

  /**file.access */
  ,
  access(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri
    //////////////////////////////////////
    var my_object = {};
    if(quick_uri){
      my_object.path=quick_uri
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
      my.getFileSystemManager().access(my_object)
  }

  /**file.mkdir */
  ,
  mkdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var my_object = {};
    if(quick_uri){
      my_object.dirPath=quick_uri
    }
    if(quick_recursive){
      my_object.recursive=quick_recursive
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
      my.getFileSystemManager().mkdir(my_object)
  }

  /**file.rmdir */
  ,
  rmdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var my_object = {};
    if(quick_uri){
      my_object.dirPath=quick_uri
    }
    if(quick_recursive){
      my_object.recursive=quick_recursive
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
      my.getFileSystemManager().rmdir(my_object)
  }
}