/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */

  getVideoInfo(quick_object) {
    const quick_uri = this.object.uri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getVideoInfo({
        src: quick_uri,
        success: my_res => {
          const quick_res = {
            uri: quick_uri,
            size: my_res.size,
            height: my_res.height,
            width: my_res.width,
            bitrate: my_res.bitrate,
            framerate: my_res.fps,
            orientation: my_res.orientation,
            type: my_res.type,
            duration: my_res.duration,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
