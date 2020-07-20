import device from "../../onekit/api/system/device.js"
Page({
  data: {},
  onReady : function (options) {
    device.getInfo({
      success: function (ret) {
        console.log(`handling succes`, ret)
      }
    })
    my.getSystemInfo({
      success(res) {
        console.log(res)
      }
    })
  }
})