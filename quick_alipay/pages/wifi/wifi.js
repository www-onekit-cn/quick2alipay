import wifi from "../../onekit/api/system/wifi.js";
Page({
  data: {},
  onLoad() {
    // wifi.connect({
    //   SSID: '',
    //   BSSID: '',
    //   success: function () {
    //     console.log('connect wifi success')
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    wifi.scan({
      success: function () {
        console.log('scan success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
});
