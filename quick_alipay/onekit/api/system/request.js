module.exports = {
  /**request.upload*/
  upload(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_url = quick_object.url;
    let quick_header = quick_object.header;
    let quick_files = quick_object.files;
    let quick_method = quick_object.method;
    let quick_data = quick_object.data;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    //////////////////////////////////////
    var count = quick_files.length;
    var my_object = {};
    if(quick_url){
      my_object.url=quick_url
    }
    if (quick_header) {
      my_object.header = quick_header;
    }
    if (quick_data) {
      my_object.formData = quick_data;
    }

    my_object.success = function(my_res) {
      console.log("upload success", my_res);
    }
    my_object.fail = function(my_res) {
      console.log("upload fail", my_res);
    }
    my_object.complete = function(my_res) {
      console.log("upload complete", my_res);
      var quick_res = {
        headers: my_res.header,
        code: my_res.statusCode,
        data: my_res.data
      };
      check(quick_res);
    }
    for (var file of quick_files) {
      my_object.filePath = file.uri;
      my_object.name = file.name || "file";
      console.log(my_object);
      my.uploadFile(my_object);
      delete my_object.formData;
    }
    function check(quick_res) {
      count--;
      if (count > 0) {
        return;
      }
      if (quick_res.code == 200) {
        if (quick_success) {
          quick_success(quick_res);
        }
      } else {
        if (quick_fail) {
          quick_fail(quick_res);
        }
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }

    }
  }

  /**request.download */
  ,
  download(quick_object) {
    var that = this;
    var my_object = {};
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let url = quick_object.url;
    let filename = quick_object.filename || url.substring(url.lastIndexOf("/") + 1);
    let description = quick_object.description || filename;
    my_object.url = url;
    my_object.filePath = my.env.USER_DATA_PATH + "/" + filename;
    if (quick_object.header) {
      my_object.header = quick_object.header;
    }

    my_object.success = function(my_res) {
      console.log("my_dowload_success ", my_res);
      var token = "" + new Date().getTime();
      that.url = my_res.tempFilePath ? my_res.tempFilePath : my_res.filePath;
      var return_res = {
        token,
      };
      if (quick_success) {
        quick_success(return_res);
      }
      if (quick_complete) {
        quick_complete(return_res);
      }

      //图片未下载完成就调用监听接口获取uri，导致获取为空的处理方法
      if (that.callback) {
        that.callback({
          uri: that.url
        });
        that.callback = null;
      }

    }
    my_object.fail = function(my_res) {
      console.log(my_res);
      if (quick_fail) {
        quick_fail(my_res, 1000);
      }
      if (quick_complete) {
        quick_complete(my_res, 1000);
      }
    };

    this.downloadTask = my.downloadFile(my_object);
    this.downloadTask.onProgressUpdate((res) => {
      that.progress = res.progress;
      console.log('下载进度', res.progress)
      // console.log('已经下载的数据长度', res.totalBytesWritten)
      // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);

    })
  }

  /**onDownloadComplete */
  ,
  onDownloadComplete(quick_object) {
    if (this.progress == 100) {
      quick_success({
        uri: this.url
      });
    } else {
      this.callback = quick_success;
    }

  }
}