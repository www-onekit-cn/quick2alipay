export default class websocket {

  constructor(socket) {
    this.socket = socket;
    console.log(socket)
  }

  closeSocket(quick_object) {
    my.closeSocket(quick_object);
  }
  offSocketClose(quick_object) {
    my.offSocketClose(quick_object);
  }
  offSocketMessage(quick_object) {
    my.offSocketMessage(quick_object);
  }
  offSocketOpen(quick_object) {
    my.offSocketOpen(quick_object);
  }

  offSocketError(quick_object) {
    my.offSocketError(quick_object);
  }

  sendSocketMessage(quick_object) {
    my.sendSocketMessage(quick_object);
  }

  set onSocketOpen(quick_object) {
    my.onSocketOpen(quick_object);
  }

  set onSocketMessage(quick_object) {
    my.onSocketMessage(quick_object);
  }

  set onSocketClose(quick_object) {
    my.onSocketClose(function (res) {
      res['wasClean'] = res.reason == "normal closure";
      quick_object(res);
    });
  }

  set onSocketError(quick_object) {
    my.onSocketError(quick_object);
  }

}