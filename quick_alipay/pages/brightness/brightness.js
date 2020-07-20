import brightness from "../../onekit/api/system/brightness.js"
Page({
  data: {},

  onLoad: function() {
    brightness.setValue({
      value: 1,
      success: function() {
        console.log('handling success')
      },
      fail: function(data, code) {
        console.log(`handling fail`, data)
      }
    })
    /////////////////////////
    brightness.getValue({
      success: function(res) {
        console.log(`handling success`, res)
      },
      fail: function(data, code) {
        console.log(`handling fail`, data)
      }
    })
    ////////////
    brightness.setKeepScreenOn({
      keepScreenOn: true,
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})