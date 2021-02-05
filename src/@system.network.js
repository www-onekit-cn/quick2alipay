/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getNetworkType({
        success: my_res => {
          let quick_res_type
          switch (my_res.networkType) {
            case 'UNKNOWN':
              quick_res_type = 'others'
              break
            default:
              quick_res_type = my_res.networkType
              break
          }
          const quick_res = {
            networkAvailable: my_res.networkAvailable,
            type: quick_res_type,
            metered: false
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /*  network.subscribe/// */
  subscribe(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_callback = quick_object.callback
    quick_object = null
    my.onNetworkStatusChange(function (my_res) {
      let quick_res_type
      switch (my_res.networkType) {
        case 'unknown':
          quick_res_type = 'others'
          break
        default:
          quick_res_type = my_res.networkType
          break
      }
      const quick_res = {
        type: quick_res_type,
        metered: false,
        isConnected: my_res.isConnected
      }
      quick_callback(quick_res)
    })
  },
  // ///////
  unsubscribe() {
    my.offNetworkStatusChange()
  },
  /** getSimOperator */
  getSimOperator() {
    console.log('getSimOperator is not support')
  }
}
