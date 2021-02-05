/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import PROMISE from '../../node_modules/oneutil/PROMISE'

export default class WebSocket {
  constructor(socket) {
    this.socket = socket
  }

  close(quick_object) {
    return my.closeSocket(quick_object)
  }

  send(quick_object) {
    const quick_url = this.socket.url
    const quick_header = this.socket.header
    // const quick_protocols = this.socket.protocols
    const quick_data = quick_object.data
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    PROMISE((SUCCESS) => {
      my.connectSocket({
        url: quick_url,
        header: quick_header,
      })
      my.onSocketOpen(() => {
        my.sendSocketMessage({
          data: quick_data,
          success: () => {
            const quick_res = {
              success: true
            }
            SUCCESS(quick_res)
          }
        })
      })
    }, quick_success, quick_fail, quick_complete)
  }

  onopen(callback) {
    return my.onSocketOpen(callback)
  }

  onmessage(callback) {
    return my.onSocketMessage(callback)
  }

  onclose(callback) {
    return my.onSocketClose(callback)
  }

  onerror(callback) {
    return my.onerror(callback)
  }
}
