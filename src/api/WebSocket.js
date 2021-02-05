/* eslint-disable camelcase */
import PROMISE from '../../node_modules/oneutil/PROMISE'

export default class WebSocket {
  constructor(socket) {
    this.socket = socket
  }

  close(quick_object) {
    this.socket.close(quick_object)
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
      console.log('11111111111111')
      my.connectSocket({
        url: quick_url,
        header: quick_header
      })
      my.sendSocketMessage({
        data: quick_data,
        success: () => {
          const quick_res = {
            success: true
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

  onopen(callback) {
    this.socket.onOpen(callback)
  }

  onmessage(callback) {
    this.socket.onMessage(callback)
  }

  onclose(callback) {
    this.socket.onClose(function (my_res) {
      const quick_res = {
        code: my_res.code,
        reason: my_res.reason,
        wasClean: 'normal closure',
      }
      callback(quick_res)
    })
  }

  onerror(callback) {
    this.socket.onError(callback)
  }
}
