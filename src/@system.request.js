/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'


module.exports = {
  /** request.upload */
  upload(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_url = quick_object.url
    const quick_header = quick_object.header || {}
    const quick_files = quick_object.files
    const quick_data = quick_object.data
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      TASK(quick_files, (quick_file, callback) => {
        const filePath = quick_file.uri
        const fileName = quick_file.name
        const fileType = 'image'
        my.uploadFile({
          url: quick_url,
          fileName,
          filePath,
          fileType,
          header: quick_header,
          formData: quick_data[0],
          success: my_res => {
            const quick_res = {
              code: my_res.statusCode,
              data: my_res.data,
              headers: my_res.header
            }
            callback(quick_res)
          }

        })
      }, (quick_res) => {
        const res = {
          quick_res
        }
        SUCCESS(res)
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** request.download */

  download(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_url = quick_object.url
    quick_object = null
    const my_object = {
      url: quick_url
    }
    PROMISE((SUCCESS) => {
      my.downloadFile({
        url: quick_url,
        success: my_res => {
          const token = '' + new Date().getTime()
          const quick_res = {
            apFilePath: my_res.apFilePath,
            token
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
    getApp().onekit_DownloadTask = my.downloadFile(my_object)
    getApp().onekit_download_url = quick_url
  },
  /** onDownloadComplete */

  onDownloadComplete(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    if (getApp().onekit_DownloadTask) {
      const DownloadTask = getApp().onekit_DownloadTask
      DownloadTask.onProgressUpdate(my_res => {
        if (my_res.progress === 100) {
          quick_success({
            uri: getApp().onekit_download_url
          })
        }
      })
    }
  }
}
