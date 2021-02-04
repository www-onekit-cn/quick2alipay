/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter(quick_object) {
    return my.openBluetoothAdapter(quick_object)
  },
  /**
     bluetooth.closeAdapter({
    *
    */

  closeAdapter(quick_object) {
    return my.closeBluetoothAdapter(quick_object)
  },
  /** bluetooth.getAdapterState */

  getAdapterState(quick_object) {
    return my.getBluetoothAdapterState(quick_object)
  },
  /** bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */

  set onadapterstatechange(callback) {
    return my.onBluetoothAdapterStateChange(callback)
  },
  /** bluetooth.startDevicesDiscovery */

  startDevicesDiscovery(quick_object) {
    return my.startBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.stopDevicesDiscovery */

  stopDevicesDiscovery(quick_object) {
    return my.stopBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.getDevices */

  getDevices(quick_object) {
    return my.getBluetoothDevices(quick_object)
  },
  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    return my.onBluetoothDeviceFound(callback)
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices(quick_object) {
    return my.getConnectedBluetoothDevices(quick_object)
  },
  /** bluetooth.createBLEConnection */

  createBLEConnection(quick_object) {
    return my.createBLEConnection(quick_object)
  },
  /** bluetooth.closeBLEConnection */

  closeBLEConnection(quick_object) {
    return my.closeBLEConnection(quick_object)
  },
  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices(quick_object) {
    return my.getBLEDeviceServices(quick_object)
  },
  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics(quick_object) {
    return my.getBLEDeviceCharacteristics(quick_object)
  },
  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue(quick_object) {
    return my.readBLECharacteristicValue(quick_object)
  },
  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue(quick_object) {
    return my.writeBLECharacteristicValue(quick_object)
  },
  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange(quick_object) {
    return my.notifyBLECharacteristicValueChange(quick_object)
  },
  /** bluetooth.onblecharacteristicvaluechange */

  set onblecharacteristicvaluechange(callback) {
    return my.onBLECharacteristicValueChange(callback)
  },
  /** bluetooth.onbleconnectionstatechange  */

  set onbleconnectionstatechange(callback) {
    return my.onBLEConnectionStateChange(callback)
  }
}
