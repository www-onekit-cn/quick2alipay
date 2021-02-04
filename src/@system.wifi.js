/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** wifi.connect */
  connect(quick_object) {
    my.startWifi()
    return my.connectWifi(quick_object)
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    my.startWifi()
    return my.getWifiList(quick_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }
    my.startWifi()
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getConnectedWifi({
        success: my_res => {
          const quick_res = {
            SSID: my_res.wifi.SSID,
            BSSID: my_res.wifi.BSSID,
            secure: my_res.wifi.secure,
            signalStrength: my_res.wifi.signalStrength,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /**
   * wifi.onscanned */
  set onscanned(callback) {
    my.startWifi()
    return my.onGetWifiList(callback)
  },
  /** wifi.onstatechanged */
  set onstatechanged(callback) {
    my.startWifi()
    my.onWifiConnected(my_res => {
      let state
      if (my_res.wifi.secure) {
        state = 1
      } else {
        state = 0
      }
      const quick_res = {
        state,
        SSID: my_res.wifi.SSID,
        BSSID: my_res.wifi.BSSID,
        secure: my_res.wifi.secure,
        signalStrength: my_res.wifi.signalStrength,
      }
      callback(quick_res)
    })
  }
}
