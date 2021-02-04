import quickapp2alipay from '../quickapp2alipay/index'
const router = quickapp2alipay["@system.router"]
const media = quickapp2alipay["@system.media"]

Page({
  onLoad(e) {
    console.log(my.canIUse('ss'));
    media.pickImage({
  success: function(data) {
    console.log(`handling success: ${data.uri}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
  }
});
