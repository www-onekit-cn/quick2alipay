module.exports = {
/*** record.start */
start(quick_object) {
  if (!quick_object) {
    return;
  }
  let quick_success = quick_object.success;
  let quick_fail = quick_object.fail;
  let quick_complete = quick_object.complete;
  let quick_duration = quick_object.duration;
  let quick_sampleRate = quick_object.sampleRate||8000;
  let quick_numberOfChannels = quick_object.numberOfChannels;
  let quick_encodeBitRate = quick_object.encodeBitRate;
  let quick_format = quick_object.format;
  quick_object = null;
////////////////////////////////////////////////
    var my_object = {};
    if(quick_duration){
      my_object.duration=quick_duration
    }
    if(quick_sampleRate){
       my_object.quick_sampleRate = quick_sampleRate
    }
    if(quick_numberOfChannels){
     my_object.numberOfChannels= quick_numberOfChannels
    }
    if(quick_encodeBitRate){
      my_object.encodeBitRate = quick_encodeBitRate
    }
    if(quick_format){
      my_object.format=quick_format
    }

      my_object.success = function (my_res) {
        var quick_res = {};
        quick_res.uri = my_res.tempFilePath
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
    const recorderManager = my.getRecorderManager()
    recorderManager.start(my_object)
  }
  /**record.stop */
  , stop(object) {
    const recorderManager = my.getRecorderManager()
    recorderManager.start()
  }
}
