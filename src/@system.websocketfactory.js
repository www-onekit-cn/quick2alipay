/* eslint-disable camelcase */
import WebSocket from './api/WebSocket'

module.exports = {
  create(quick_object) {
    if (!quick_object) {
      return null
    }
    console.log('00000000000000')
    return new WebSocket(quick_object)
  }


}
