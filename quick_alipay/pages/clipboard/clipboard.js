import clipboard from "../../onekit/api/system/clipboard.js"
Page({
  data: {},
  onLoad: function () {
    clipboard.set({
      text: 'sssssssssssssssssssss',
      success: function (res) {
        console.log(`handling success`, res)
      },
      fail: function (res) {
        console.log(`handling fail`, res)
      },

    })
    clipboard.get({
      success: function (data) {
        console.log(`handling success get`, data)
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})