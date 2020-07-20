module.exports = {
  /* bluetooth.openAdapter*/
  openAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_operateAdapter = quick_object.operateAdapter || false;
    quick_object =null;
    //////////////////////////////////////////
    var my_object = {};
    if(quick_operateAdapter){
      my_object.autoClose = quick_operateAdapter
    }
    my_object.success = function(my_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.openBluetoothAdapter(my_object)
  }
  /**
    bluetooth.closeAdapter({
   *
   */
  ,
  closeAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_operateAdapter = quick_object.operateAdapter || false;
    ////////////////////////////////////////
    var my_object = {};
    my_object.success = function(my_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.closeBluetoothAdapter(my_object)
  }
  /**bluetooth.getAdapterState */
  ,
  getAdapterState(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    /////////////////////////////////////
    var my_object = {};
    my_object.success = function(my_res) {
      var quick_res = {};
      quick_res.available = my_res.available
      quick_res.discovering = my_res.discovering
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.getBluetoothAdapterState(my_object)
  }

  /**bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */
  ,
  onadapterstatechange() {
    return my.onBluetoothAdapterStateChange()
  }
  /**bluetooth.startDevicesDiscovery */
  ,
  startDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    var quick_allowDuplicatesKey = quick_object.allowDuplicatesKey;
    var quick_interval = quick_object.interval;
    ////////////////////////////////////////////
    var my_object = {};
    if (quick_services) {
      my_object.services = quick_services
    };
    if (quick_allowDuplicatesKey) {
      my_object.allowDuplicatesKey = quick_allowDuplicatesKey
    };
    if (quick_interval) {
      my_object.interval = quick_interval
    }
    my_object.success = function(my_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.startBluetoothDevicesDiscovery(my_object)
  }

  /** bluetooth.stopDevicesDiscovery */
  ,
  stopDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var my_object = {};
    my_object.success = function(my_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.stopBluetoothDevicesDiscovery(my_object)
  }

  /**bluetooth.getDevices */
  ,
  getDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var my_object = {};
    my_object.success = function(my_res) {
      var quick_res = {
        devices: my_res.devices
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.getBluetoothDevices(my_object)
  }

  /**bluetooth.ondevicefound */
  ,
  ondevicefound(quick_object) {
    return my.onBluetoothDeviceFound(function(res) {})
  }

  /**bluetooth.getConnectedDevices */
  ,
  getConnectedDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    //////////////////////////////////
    return my.getConnectedBluetoothDevices(function(callback) {
      quick_services.devices = callback.devices;
    })
  }

  /**bluetooth.createBLEConnection */
  ,
  createBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_timeout = quick_object.timeout;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId;
    };
    my_object.success = function(my_res) {
      if (quick_success) {
        quick_success(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.connectBLEDevice(my_object)
  }

  /**bluetooth.closeBLEConnection */
  ,
  closeBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId;
    };
    my_object.success = function(my_res) {
      if (quick_success) {
        quick_success(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.disconnectBLEDevice(my_object)
  }

  /**bluetooth.getBLEDeviceServices */
  ,
  getBLEDeviceServices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId;
    };
    my_object.success = function(my_res) {
      var quick_res = {
        services: my_res.services
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.getBLEDeviceServices(my_object)
  }

  /**bluetooth.getBLEDeviceCharacteristics */
  ,
  getBLEDeviceCharacteristics(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      my_object.serviceId = quick_serviceId
    };
    my_object.success = function(my_res) {
      var quick_res = {
        characteristics: my_res.characteristics
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.getBLEDeviceCharacteristics(my_object)
  }

  /**bluetooth.readBLECharacteristicValue */
  ,
  readBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      my_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      my_object.characteristicId = quick_characteristicId
    }
    my_object.success = function(my_res) {
      if (quick_success) {
        quick_success(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.readBLECharacteristicValue(my_object)
  }

  /**bluetooth.writeBLECharacteristicValue */
  ,
  writeBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_value = quick_object.value;
    ////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      my_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      my_object.characteristicId = quick_characteristicId
    }
    if (quick_value) {
      my_object.value = quick_value
    }
    my_object.success = function(my_res) {
      if (quick_success) {
        quick_success(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.writeBLECharacteristicValue(my_object)
  }
  /**bluetooth.notifyBLECharacteristicValueChange */
  ,
  notifyBLECharacteristicValueChange(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_state = quick_object.state;
    ////////////////////////////////////////
    var my_object = {};
    if (quick_deviceId) {
      my_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      my_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      my_object.characteristicId = quick_characteristicId
    }
    if (quick_state) {
      my_object.state = quick_state
    }
    my_object.success = function(my_res) {
      if (quick_success) {
        quick_success(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    my_object.fail = function(my_res) {
      if (quick_fail) {
        quick_fail(my_res);
      }
      if (quick_complete) {
        quick_complete(my_res);
      }
    };
    return my.notifyBLECharacteristicValueChange(my_object)
  }

  /**bluetooth.onblecharacteristicvaluechange */
  ,
  onblecharacteristicvaluechange() {
    return my.onBLECharacteristicValueChange(function(callback) {})
  }
  /**bluetooth.onbleconnectionstatechange  */
  ,
  onbleconnectionstatechange() {
    return my.onBLEConnectionStateChange(function(callback) {})
  }
}