import websocket from "../object/websocket.js";
module.exports = {
  create(quick_object) {
    if (!quick_object) {
      return;
    }
    var url = quick_object.url;
    var header = quick_object.header;
    var protocols = quick_object.protocols;
    // /////////////////////////////////////////
    let DATA = ["HTTPS", "HTTP"];
    var my_object = {
      url,
      header,
      protocols: []
    };
    for (var protocol of protocols) {
      if (DATA.indexOf(protocol.toLowerCase()) >= 0) {
        my_object.protocols.push(protocol);
      }
    }
    var socket = my.connectSocket(my_object);
    return new websocket(socket);
  }

}