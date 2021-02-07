/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter(quick_object) {
    const quick_operateAdapter = quick_object.operateAdapter || true
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.openBluetoothAdapter({
        autoClose: quick_operateAdapter,
        success: my_res => {
          const quick_res = {
            isSupportBLE: my_res.isSupportBLE
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
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
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getBluetoothDevices({
        success: my_res => {
          const devices = my_res.devices.map(device => ({
            name: device.name,
            deviceId: device.deviceId,
            RSSI: device.RSSI,
            advertisData: device.advertisData,
            advertisServiceUUIDs: device.manufacturerData,
            localName: device.localName

          }))
          const quick_res = {
            devices
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    my.onBluetoothDeviceFound(my_res => {
      const devices = my_res.devices.map(device => ({
        name: device.name,
        deviceId: device.deviceId,
        RSSI: device.RSSI,
        advertisData: device.advertisData,
        advertisServiceUUIDs: device.manufacturerData,
        localName: device.localName

      }))
      callback(devices)
    })
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices(quick_object) {
    const quick_services = quick_object.services
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getConnectedBluetoothDevices({
        deviceId: quick_services[0],
        success: my_res => {
          const quick_res = {
            devices: my_res.devices

          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** bluetooth.createBLEConnection */

  createBLEConnection(quick_object) {
    return my.connectBLEDevice(quick_object)
  },
  /** bluetooth.closeBLEConnection */

  closeBLEConnection(quick_object) {
    return my.disconnectBLEDevice(quick_object)
  },
  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices(quick_object) {
    const quick_deviceId = quick_object.deviceId
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getBLEDeviceServices({
        deviceId: quick_deviceId,
        success: my_res => {
          const services = my_res.services.map(service => ({
            uuid: service.serviceId,
            isPrimary: service.isPrimary,
          }))
          const quick_res = {
            services
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics(quick_object) {
    const quick_deviceId = quick_object.deviceId
    const quick_serviceId = quick_object.serviceId
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.getBLEDeviceCharacteristics({
        deviceId: quick_deviceId,
        serviceId: quick_serviceId,
        success: my_res => {
          const characteristics = my_res.characteristics.map(characteristic => ({
            uuid: characteristic.serviceId,
            properties: characteristic.properties,
            characteristicId: characteristic.characteristicId,
            value: characteristic.value,
          }))
          const quick_res = {
            characteristics
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue(quick_object) {
    const quick_deviceId = quick_object.deviceId
    const quick_serviceId = quick_object.serviceId
    const quick_characteristicId = quick_object.characteristicId
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      my.readBLECharacteristicValue({
        deviceId: quick_deviceId,
        serviceId: quick_serviceId,
        characteristicId: quick_characteristicId,
        success: my_res => {
          const quick_res = {
            characteristic: {
              characteristicId: my_res.characteristicId,
              serviceId: my_res.serviceId,
              value: my_res.value,
            }
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue(quick_object) {
    return my.writeBLECharacteristicValue(quick_object)
  },
  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange(quick_object) {
    const key = 'descriptorId'
    const value = '00002902-0000-10008000-00805f9b34fb'
    quick_object[key] = value
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
