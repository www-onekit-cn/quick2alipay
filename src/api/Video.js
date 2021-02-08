/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../../node_modules/oneutil/PROMISE'

export default class Video {
  constructor(object) {
    this.object = object
  }

  compressVideo() {
    // const quick_uri = this.object.uri
    // const quick_bitrate = this.object.bitrate || 0.5
    // const quick_framerate = this.object.framerate || 30
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // PROMISE((SUCCESS) => {
    //   my.compressVideo({
    //     src: quick_uri,
    //     quality: 'medium',
    //     bitrate: quick_bitrate,
    //     fps: quick_framerate,
    //     resolution: 0.5,
    //     success: my_res => {
    //       const quick_res = {
    //         uri: my_res.tempFilePath,
    //         size: my_res.size
    //       }
    //       SUCCESS(quick_res)
    //     },
    //     fail: res => {
    //       console.log(res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
    return console.warn('compressVideo is not support')
  }

  getVideoInfo() {
    // const quick_uri = quick_object.uri
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // PROMISE((SUCCESS) => {
    //   my.getVideoInfo({
    //     src: quick_uri,
    //     success: my_res => {
    //       const quick_res = {
    //         uri: quick_uri,
    //         size: my_res.size,
    //         height: my_res.height,
    //         width: my_res.width,
    //         bitrate: my_res.bitrate,
    //         framerate: my_res.fps,
    //         orientation: my_res.orientation,
    //         type: my_res.type,
    //         duration: my_res.duration,
    //       }
    //       SUCCESS(quick_res)
    //     },
    //     fail: res => {
    //       console.log(res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
    return console.warn('getVideoInfo is not support')
  }
}
