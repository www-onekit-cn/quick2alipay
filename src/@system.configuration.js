/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale() {
    const my_res = wx.getSystemInfoSync()
    const quick_res = {
      language: my_res.language,
      countryOrRegion: 'CN'
    }
    return quick_res
  },
  setLocale() {

  },
  getThemeMode() {
    const my_res = wx.getSystemInfoSync()
    if (my_res.theme === 'light') {
      return 0
    } else {
      return 1
    }
  }

}
