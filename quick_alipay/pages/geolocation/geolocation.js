import geolocation from "../../onekit/api/system/geolocation.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    // geolocation.getLocation({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail`, data, code)
    //   }
    // })
    // geolocation.chooseLocation({
    //   success: function (data) {
    //     console.log(
    //       `choose location success: name = ${data.name}, address = ${data.address}, coordType = ${data.coordType}, latitude = ${data.latitude}, longitude = ${data.longitude}`
    //     )
    //   },
    //   fail: function (data, code) {
    //     console.log(`choose location fail, code = ${code}`)
    //   },
    //   complete: function () {
    //     console.log(`choose location complete`)
    //   }
    // })
    geolocation.openLocation({
      latitude: 22.553594050274,
      longitude: 114.0586290118,
      name:"这里",
      address:"这是我的位置",
      success: function () {
        console.log(`open location success`)
      },
      fail: function (data, code) {
        console.log(`open location fail, code = ${code}`)
      },
      complete: function () {
        console.log(`open location complete`)
      }
    })
    //////////////
    /* wx.getLocation({
       type: 'wgs84',
       success(res) {
         console.log(res)
       }
     })
     geolocation.getLocationType({
       success: function (data) {
         console.log(`handling success: locationType`, data)
       },
       fail: function (data, code) {
         console.log(`handling fail`.data)
       }
     })*/

    // geolocation.subscribe({
    //   callback: function (data) {
    //     console.log(
    //       `handling success: longitude = ${data.longitude}, latitude = ${
    //       data.latitude
    //       }`
    //     )
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })



  },


})