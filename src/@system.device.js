/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** device.getInfo */
  getInfo(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getSystemInfo({
        success: my_res => {
          const quick_res = {
            brand: my_res.brand,
            model: my_res.model,
            osVersionName: my_res.system.split(' ')[0],
            osVersionCode: my_res.system.split(' ')[1],
            pixelRatio: my_res.pixelRatio,
            language: my_res.language,
            screenWidth: my_res.screenWidth,
            screenHeight: my_res.screenHeight,
            windowWidth: my_res.windowWidth,
            windowHeight: my_res.windowHeight,
            statusBarHeight: my_res.statusBarHeight,
            vendorOsVersion: my_res.version,
            theme: my_res.theme,
            locationReducedAccuracy: my_res.locationReducedAccuracy,
            safeArea: my_res.safeArea,
            wifiEnabled: my_res.wifiEnabled,
            locationEnabled: my_res.locationEnabled,
            bluetoothEnabled: my_res.bluetoothEnabled,
            notificationSoundAuthorized: my_res.notificationSoundAuthorized,
            notificationBadgeAuthorized: my_res.notificationBadgeAuthorized,
            notificationAlertAuthorized: my_res.notificationAlertAuthorized,
            notificationAuthorized: my_res.notificationAuthorized,
            microphoneAuthorized: my_res.microphoneAuthorized,
            locationAuthorized: my_res.locationAuthorized,
            cameraAuthorized: my_res.cameraAuthorized,
            albumAuthorized: my_res.albumAuthorized,
            benchmarkLevel: my_res.benchmarkLevel,
            SDKVersion: my_res.SDKVersion,
            fontSizeSetting: my_res.fontSizeSetting,
            platform: my_res.platform,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** device.getId */
  getId() {
    return console.warn('getId is not support')
  },

  /** device.getDeviceId */
  getDeviceId() {
    return console.warn('getDeviceId is not support')
  },

  /** device.getUserId */
  getUserId() {
    return console.warn('getUserId is not support')
  },

  /** device.getAdvertisingId */
  getAdvertisingId() {
    return console.warn('getAdvertisingId is not support')
  },

  /** device.getSerial */
  getSerial() {
    return console.warn('getSerial is not support')
  },

  /** device.getTotalStorage */
  getTotalStorage() {
    return console.warn('getTotalStorage is not support')
  },

  /** device.getAvailableStorage */
  getAvailableStorage() {
    return console.warn('getAvailableStorage is not support')
  },

  /** device.getCpuInfo */
  getCpuInfo() {
    return console.warn('getCpuInfo is not support')
  },

  /** device.getOAID */
  getOAID() {
    return console.warn('getOAID is not support')
  },

  /** device.platform */
  platform() {
    return console.warn('platform is not support')
  },

  /** device.host */
  host() {
    return console.warn('host is not support')
  },

}
