/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_timeout = quick_object.timeout || 30000
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    let type
    if (quick_coordType === 'wgs84') {
      type = 0
    } else {
      type = 1
    }
    PROMISE((SUCCESS) => {
      my.getLocation({
        type,
        cacheTimeout: quick_timeout,
        success: my_res => {
          const quick_res = {
            latitude: my_res.latitude,
            longitude: my_res.longitude,
            accuracy: my_res.accuracy,
            horizontalAccuracy: my_res.horizontalAccuracy,
            country: my_res.country,
            countryCode: my_res.countryCode,
            province: my_res.province,
            city: my_res.city,
            cityAdcode: my_res.cityAdcode,
            district: my_res.district,
            districtAdcode: my_res.districtAdcode,
            streetNumber: my_res.streetNumber,
            pois: my_res.pois,
            time: new Date().getTime()
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** openLocation */
  openLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_scale = quick_object.scale || 18
    const quick_name = quick_object.name || ''
    const quick_address = quick_object.address || ''
    quick_object = null
    let scale
    if (quick_scale === 18) {
      scale = 15
    } else {
      scale = 17 / 14
    }
    PROMISE((SUCCESS) => {
      my.openLocation({
        latitude: quick_latitude,
        longitude: quick_longitude,
        scale,
        name: quick_name,
        address: quick_address,
        success: () => {
          const quick_res = {
            errMsg: 'openLocation: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** chooseLocation */

  chooseLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    let type
    if (quick_coordType === 'wgs84') {
      type = 0
    } else {
      type = 1
    }
    PROMISE((SUCCESS) => {
      if (quick_latitude == null || quick_longitude == null) {
        my.getLocation({
          type,
          success: my_res => {
            const quick_res = {
              latitude: my_res.latitude,
              longitude: my_res.longitude,
              accuracy: my_res.accuracy,
              horizontalAccuracy: my_res.horizontalAccuracy,
              country: my_res.country,
              countryCode: my_res.countryCode,
              province: my_res.province,
              city: my_res.city,
              cityAdcode: my_res.cityAdcode,
              district: my_res.district,
              districtAdcode: my_res.districtAdcode,
              streetNumber: my_res.streetNumber,
              pois: my_res.pois,
              time: new Date().getTime(),
              coordType: type
            }
            SUCCESS(quick_res)
          }
        })
      } else {
        my.chooseLocation({
          latitude: quick_latitude,
          longitude: quick_longitude,
          success: (my_res) => {
            const quick_res = {
              name: my_res.name,
              address: my_res.address,
              latitude: my_res.latitude,
              longitude: my_res.longitude,
              coordType: type,
              provinceName: my_res.provinceName,
              cityName: my_res.cityName
            }
            SUCCESS(quick_res)
          }
        })
      }
    }, quick_success, quick_fail, quick_complete)
  },
  /** getLocationType */

  getLocationType(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_res = {
      types: ['gps', 'network']
    }
    quick_success(quick_res)
  },
  /** geolocation.subscribe */

  subscribe() {
    // if (!quick_object) {
    //   return
    // }
    // my.startLocationUpdate()
    // const quick_callback = quick_object.callback
    // quick_object = null
    // my.onLocationChange(function (my_res) {
    //   const quick_res = {
    //     latitude: my_res.latitude,
    //     longitude: my_res.longitude,
    //     speed: my_res.speed,
    //     accuracy: my_res.accuracy,
    //     altitude: my_res.altitude,
    //     verticalAccuracy: my_res.verticalAccuracy,
    //     horizontalAccuracy: my_res.horizontalAccuracy,
    //     time: new Date().getTime()
    //   }
    //   quick_callback(quick_res)
    // })
    console.log('subscribe is not support')
  },
  /** my.offLocationChange */
  unsubscribe() {
    // my.offLocationChange()
    console.log('unsubscribe is not support')
  },
  /** geolocation.getSupportedCoordTypes() */
  getSupportedCoordTypes() {
    console.log('getSupportedCoordTypes is not support')
  },

  /** geolocation.geocodeQuery() */
  geocodeQuery() {
    console.log('geocodeQuery is not support')
  },

  /** geolocation.reverseGeocodeQuery() */
  reverseGeocodeQuery() {
    console.log('reverseGeocodeQuery is not support')
  },

}
