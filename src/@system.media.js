/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** media.takePhoto */

  takePhoto(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    const CameraContext = my.createCameraContext()
    PROMISE((SUCCESS) => {
      CameraContext.takePhoto({
        success: my_res => {
          const quick_res = {
            uri: my_res.tempImagePath
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** media.takeVideo */
  takeVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseVideo({
        success: my_res => {
          const quick_res = {
            uri: my_res.tempFilePath,
            size: my_res.size,
            duration: my_res.duration,
            height: my_res.height,
            width: my_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImage */
  pickImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseImage({
        count: 1,
        success: my_res => {
          const quick_res = {
            tempFilePaths: my_res.tempFilePaths,
            uri: my_res.tempFiles[0].path,
            size: my_res.tempFiles[0].size
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImages */
  pickImages(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: my_res => {
          const quick_files = my_res.tempFiles.map(file => ({
            uri: file.path,
            size: file.size
          }))
          const quick_res = {
            uris: my_res.tempFilePaths,
            files: quick_files
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickVideo */
  pickVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseVideo({
        success: my_res => {
          const quick_res = {
            uri: my_res.tempFilePath,
            size: my_res.size,
            duration: my_res.duration,
            height: my_res.height,
            width: my_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickVideos */
  pickVideos(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseMedia({
        mediaType: ['video'],
        success: my_res => {
          const quick_files = my_res.tempFiles.map(file => ({
            uri: file.tempFilePath,
            size: file.size,
            duration: file.duration,
            height: file.height,
            width: file.width,
            thumbTempFilePath: file.thumbTempFilePath,
          }))
          const quick_uris = []
          for (const value of my_res.tempFiles) {
            quick_uris.push(value.tempFilePath)
          }
          const quick_res = {
            uris: quick_uris,
            files: quick_files,
            type: my_res.type
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickFile */
  pickFile(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      my.chooseMessageFile({
        count: 1,
        success: my_res => {
          const quick_res = {
            tempFiles: my_res.tempFiles,
            uri: my_res.tempFiles[0].path,
            size: my_res.tempFiles[0].size,
            name: my_res.tempFiles[0].name,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.saveToPhotosAlbum */
  saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const my_object = {
      filePath: quick_uri,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    my.saveImageToPhotosAlbum(my_object)
  },

  /** media.previewImage */
  previewImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uris = quick_object.uris
    const quick_current = quick_object.current || 0
    // const quick_cancel = quick_object.cancel
    quick_object = null
    const my_object = {
      urls: quick_uris,
      current: quick_current,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    my.previewImage(my_object)
  },
  /** media.getRingtone */
  getRingtone() {
    console.warn('getRingtone is not support')
  },
  /** setRingtone */
  setRingtone() {
    console.warn('setRingtone is not support')
  }

}
