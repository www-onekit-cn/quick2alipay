/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale() {
    const my_res = my.getSystemInfoSync()
    const quick_res = {
      language: my_res.language,
      countryOrRegion: 'CN'
    }
    return quick_res
  },
  setLocale() {

  },
  getThemeMode() {
    return 0
  }

}
