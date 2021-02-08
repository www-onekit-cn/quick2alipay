module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
/* harmony default export */ __webpack_exports__["default"] = (function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _URL = __webpack_require__(2);

var _URL2 = _interopRequireDefault(_URL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*  network.getType/// */
  push: function push(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri = quick_object.uri;
    //    const quick_params = quick_object.params
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        my.reLaunch({
          url: '/quickapp2alipay/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
      } else {
        my.navigateTo({
          url: quick_uri
        });
      }
      return;
    }

    var url = new _URL2.default(quick_uri);
    if (url.host === null) {
      my.navigateTo({
        url: quick_uri
      });
      return;
    }
    switch (url.scheme) {
      case 'tel':
        my.makePhoneCall({
          phoneNumber: url.host
        });
        break;
      case 'sms':
        my.showModal({
          title: '不支持',
          content: '微信小程序暂不支持发短信'
        });
        break;
      case 'http':
      case 'https':
        my.navigateTo({
          url: '/quickapp2alipay/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
        break;
      case 'internal':
        my.showModal({
          title: '带配置',
          content: '微信小程序暂不支持打开文件'
        });
        break;
      case 'hap':
        switch (url.host) {
          case 'app':
            my.showModal({
              title: '带配置',
              content: '请配置要打开的小程序'
            });
            break;
          case 'settings':
            my.showModal({
              title: '带配置',
              content: '微信小程序暂不支持打开手机设置'
            });
            break;
          default:
            throw new Error(url.host);
        }

        break;
      default:
        throw new Error(url.scheme);
    }
  },


  /** router.replace */

  replace: function replace(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_uri = quick_object.uri;
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        my.reLaunch({
          url: '/quickapp2alipay/page/router.push/ie?url=' + encodeURI(quick_uri)
        });
      } else {
        my.navigateTo({
          url: quick_uri
        });
      }
    }
  },

  /** router.back */

  back: function back(quick_object) {
    var quick_path = quick_object.path;
    if (!quick_path) {
      my.navigateBack({});
    } else if (quick_path.startsWith('/')) {
      if (quick_path === '/') {
        my.navigateTo({
          url: '/quickapp2alipay/page/router.push/ie?url=' + encodeURI(quick_path)
        });
      } else {
        my.reLaunch({
          url: quick_path
        });
      }
    }
  },

  /** router.clear() */

  clear: function clear() {
    //  const my_object = {}
  },

  /** router.getLength */

  getLength: function getLength() {
    //  const my_object = {}
  },

  /** router.getState */

  getState: function getState() {
    //  const my_object = {}
  },

  /** router.getPages */

  getPages: function getPages() {
    //  const my_object = {}
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URL; });
class URL {
  constructor(url) {
    const p1 = url.indexOf(':')
    if (p1 > 0) {
      const temp = url.substring(p1 + 1)
      const flag = temp.startsWith('//') ? 3 : 1
      //
      this.scheme = url.substring(0, p1)
      const p2 = url.indexOf('/', p1 + flag)
      if (p2 > 0) {
        this.host = url.substring(p1 + flag, p2)
        const p3 = url.indexOf('?')
        if (p2 < url.length) {
          if (p3 > 0) {
            this.path = url.substring(p2, p3)
          } else {
            this.path = url.substring(p2)
          }
        }
      } else {
        this.host = url.substring(p1 + flag)
      }
    }
    //
    this.params = {}
    const p4 = url.indexOf('?')
    if (p4 > 0) {
      this.querystring = url.substring(p4 + 1)
      const querys = this.querystring.split('&')
      for (const query of querys) {
        const pair = query.split('=')
        this.params[pair[0]] = decodeURIComponent(pair[1])
      }
    }
  }
}


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _OnekitApp = __webpack_require__(34);

var _OnekitApp2 = _interopRequireDefault(_OnekitApp);

var _OnekitBehavior = __webpack_require__(35);

var _OnekitBehavior2 = _interopRequireDefault(_OnekitBehavior);

var _OnekitComponent = __webpack_require__(36);

var _OnekitComponent2 = _interopRequireDefault(_OnekitComponent);

var _OnekitPage = __webpack_require__(37);

var _OnekitPage2 = _interopRequireDefault(_OnekitPage);

var _system = __webpack_require__(1);

var _system2 = _interopRequireDefault(_system);

var _system3 = __webpack_require__(38);

var _system4 = _interopRequireDefault(_system3);

var _system5 = __webpack_require__(39);

var _system6 = _interopRequireDefault(_system5);

var _system7 = __webpack_require__(40);

var _system8 = _interopRequireDefault(_system7);

var _system9 = __webpack_require__(41);

var _system10 = _interopRequireDefault(_system9);

var _system11 = __webpack_require__(43);

var _system12 = _interopRequireDefault(_system11);

var _system13 = __webpack_require__(44);

var _system14 = _interopRequireDefault(_system13);

var _system15 = __webpack_require__(46);

var _system16 = _interopRequireDefault(_system15);

var _system17 = __webpack_require__(47);

var _system18 = _interopRequireDefault(_system17);

var _system19 = __webpack_require__(48);

var _system20 = _interopRequireDefault(_system19);

var _system21 = __webpack_require__(49);

var _system22 = _interopRequireDefault(_system21);

var _system23 = __webpack_require__(50);

var _system24 = _interopRequireDefault(_system23);

var _system25 = __webpack_require__(51);

var _system26 = _interopRequireDefault(_system25);

var _system27 = __webpack_require__(52);

var _system28 = _interopRequireDefault(_system27);

var _system29 = __webpack_require__(53);

var _system30 = _interopRequireDefault(_system29);

var _system31 = __webpack_require__(54);

var _system32 = _interopRequireDefault(_system31);

var _system33 = __webpack_require__(55);

var _system34 = _interopRequireDefault(_system33);

var _system35 = __webpack_require__(56);

var _system36 = _interopRequireDefault(_system35);

var _system37 = __webpack_require__(57);

var _system38 = _interopRequireDefault(_system37);

var _system39 = __webpack_require__(58);

var _system40 = _interopRequireDefault(_system39);

var _system41 = __webpack_require__(59);

var _system42 = _interopRequireDefault(_system41);

var _system43 = __webpack_require__(60);

var _system44 = _interopRequireDefault(_system43);

var _system45 = __webpack_require__(61);

var _system46 = _interopRequireDefault(_system45);

var _system47 = __webpack_require__(62);

var _system48 = _interopRequireDefault(_system47);

var _system49 = __webpack_require__(63);

var _system50 = _interopRequireDefault(_system49);

var _Video = __webpack_require__(64);

var _Video2 = _interopRequireDefault(_Video);

var _system51 = __webpack_require__(65);

var _system52 = _interopRequireDefault(_system51);

var _hapIo = __webpack_require__(70);

var _hapIo2 = _interopRequireDefault(_hapIo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-console */
exports.default = {
  OnekitApp: _OnekitApp2.default,
  OnekitBehavior: _OnekitBehavior2.default,
  OnekitComponent: _OnekitComponent2.default,
  OnekitPage: _OnekitPage2.default,
  '@system.router': _system2.default,
  '@system.configuration': _system4.default,
  '@system.prompt': _system6.default,
  '@system.webview': _system8.default,
  '@system.request': _system10.default,
  '@system.fetch': _system12.default,
  '@system.websocketfactory': _system14.default,
  '@system.storage': _system16.default,
  '@system.file': _system18.default,
  '@system.vibrator': _system20.default,
  '@system.barcode': _system22.default,
  '@system.sensor': _system24.default,
  '@system.clipboard': _system26.default,
  '@system.geolocation': _system28.default,
  '@system.network': _system30.default,
  '@system.device': _system32.default,
  '@system.brightness': _system34.default,
  '@system.battery': _system36.default,
  '@system.wifi': _system38.default,
  '@system.record': _system40.default,
  '@system.bluetooth': _system42.default,
  '@system.zip': _system44.default,
  '@system.media': _system46.default,
  '@system.image': _system48.default,
  '@system.audio': _system50.default,
  '@hap.io.Video': _hapIo2.default,
  '@system.cipher': _system52.default,
  '@Video': _Video2.default

};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(quick_object) {
  var my_object = quick_object;
  return App(my_object);
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;
/* eslint-disable camelcase */
function OnekitBehavior() {
  return {};
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;
/* eslint-disable camelcase */
function OnekitComponent(quick_object) {
  var my_object = quick_object;
  return Component(my_object);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable camelcase */
function OnekitPage(quick_object) {
  var my_object = quick_object;
  my_object.animate = function () {};

  return Page(my_object);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale: function getLocale() {
    var my_res = my.getSystemInfoSync();
    var quick_res = {
      language: my_res.language,
      countryOrRegion: 'CN'
    };
    return quick_res;
  },
  setLocale: function setLocale() {},
  getThemeMode: function getThemeMode() {
    return 0;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  showToast: function showToast(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_message = quick_object.message;
    var quick_duration = quick_object.duration || 0;
    var my_duration = void 0;
    if (quick_duration === 0) {
      my_duration = 3000;
    } else {
      my_duration = 6000;
    }
    var my_object = {
      content: quick_message,
      duration: my_duration
    };
    my.showToast(my_object);
  },
  showDialog: function showDialog(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_title = quick_object.title || '';
    var quick_message = quick_object.message || '';
    var quick_buttons = quick_object.buttons;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    if (quick_buttons.length === 1) {
      var confirmText = quick_buttons[0].text;
      var confirmColor = quick_buttons[0].color;
      (0, _PROMISE2.default)(function (SUCCESS) {
        my.confirm({
          title: quick_title,
          content: quick_message,
          confirmText: confirmText,
          confirmColor: confirmColor,
          success: function success(my_res) {
            var quick_res = void 0;
            if (my_res.confirm) {
              quick_res = {
                index: 0
              };
            } else {
              quick_res = {
                index: 1
              };
            }
            SUCCESS(quick_res);
          }
        });
      }, quick_success, quick_fail, quick_complete);
    }
    if (quick_buttons.length === 2 || quick_buttons.length === 3) {
      var cancelText = quick_buttons[0].text;
      var cancelColor = quick_buttons[0].color;
      var _confirmText = quick_buttons[1].text;
      var _confirmColor = quick_buttons[1].color;
      (0, _PROMISE2.default)(function (SUCCESS) {
        my.confirm({
          title: quick_title,
          content: quick_message,
          cancelText: cancelText,
          cancelColor: cancelColor,
          confirmText: _confirmText,
          confirmColor: _confirmColor,
          success: function success(my_res) {
            var quick_res = void 0;
            if (my_res.confirm) {
              quick_res = {
                index: 0
              };
            } else {
              quick_res = {
                index: 1
              };
            }
            SUCCESS(quick_res);
          }
        });
      }, quick_success, quick_fail, quick_complete);
    }
  },
  showContextMenu: function showContextMenu(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_itemList = quick_object.itemList;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showActionSheet({
        items: quick_itemList,
        success: function success(my_res) {
          var quick_res = {
            index: my_res.index
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable camelcase */
// import URL from 'oneutil/URL'

module.exports = {
  /** webview.loadUrl */
  loadUrl: function loadUrl(quick_object) {
    var quick_url = quick_object.url;
    quick_object = null;
    my.navigateTo({
      url: "/quickapp2alipay/page/router.push/ie?url=" + encodeURI(quick_url)
    });
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

var _TASK = __webpack_require__(42);

var _TASK2 = _interopRequireDefault(_TASK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /** request.upload */
  upload: function upload(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_url = quick_object.url;
    var quick_header = quick_object.header || {};
    var quick_files = quick_object.files;
    var quick_data = quick_object.data;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      (0, _TASK2.default)(quick_files, function (quick_file, callback) {
        var filePath = quick_file.uri;
        var fileName = quick_file.name;
        var fileType = 'image';
        my.uploadFile({
          url: quick_url,
          fileName: fileName,
          filePath: filePath,
          fileType: fileType,
          header: quick_header,
          formData: quick_data[0],
          success: function success(my_res) {
            var quick_res = {
              code: my_res.statusCode,
              data: my_res.data,
              headers: my_res.header
            };
            callback(quick_res);
          }

        });
      }, function (quick_res) {
        var res = {
          quick_res: quick_res
        };
        SUCCESS(res);
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** request.download */

  download: function download(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_url = quick_object.url;
    quick_object = null;
    var my_object = {
      url: quick_url
    };
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.downloadFile({
        url: quick_url,
        success: function success(my_res) {
          var token = '' + new Date().getTime();
          var quick_res = {
            apFilePath: my_res.apFilePath,
            token: token
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
    getApp().onekit_DownloadTask = my.downloadFile(my_object);
    getApp().onekit_download_url = quick_url;
  },

  /** onDownloadComplete */

  onDownloadComplete: function onDownloadComplete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    if (getApp().onekit_DownloadTask) {
      var DownloadTask = getApp().onekit_DownloadTask;
      DownloadTask.onProgressUpdate(function (my_res) {
        if (my_res.progress === 100) {
          quick_success({
            uri: getApp().onekit_download_url
          });
        }
      });
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items, func, success) {
  const result = []
  let i = 0
  let itemCallback = null
  itemCallback = function (res) {
    result.push(res)
    if (i >= items.length) {
      success(result)
      return
    }
    func(items[i++], itemCallback)
  }
  func(items[i++], itemCallback)
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  fetch: function fetch(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_url = quick_object.url;
    var quick_data = quick_object.data || '';
    var quick_header = quick_object.header || {};
    var quick_method = quick_object.method || 'GET';
    var quick_responseType = quick_object.responseType || 'json';
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.request({
        url: quick_url,
        data: quick_data,
        headers: quick_header,
        method: quick_method,
        dataType: quick_responseType,
        success: function success(my_res) {
          var quick_res = {
            code: my_res.status,
            data: my_res.data,
            headers: my_res.headers
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable camelcase */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WebSocket = __webpack_require__(45);

var _WebSocket2 = _interopRequireDefault(_WebSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  create: function create(quick_object) {
    if (!quick_object) {
      return null;
    }
    return new _WebSocket2.default(quick_object);
  }
}; /* eslint-disable camelcase */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */


var WebSocket = function () {
  function WebSocket(socket) {
    _classCallCheck(this, WebSocket);

    this.socket = socket;
  }

  WebSocket.prototype.close = function close(quick_object) {
    return my.closeSocket(quick_object);
  };

  WebSocket.prototype.send = function send(quick_object) {
    var quick_url = this.socket.url;
    var quick_header = this.socket.header;
    // const quick_protocols = this.socket.protocols
    var quick_data = quick_object.data;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.connectSocket({
        url: quick_url,
        header: quick_header
      });
      my.onSocketOpen(function () {
        my.sendSocketMessage({
          data: quick_data,
          success: function success() {
            var quick_res = {
              success: true
            };
            SUCCESS(quick_res);
          }
        });
      });
    }, quick_success, quick_fail, quick_complete);
  };

  WebSocket.prototype.onopen = function onopen(callback) {
    return my.onSocketOpen(callback);
  };

  WebSocket.prototype.onmessage = function onmessage(callback) {
    return my.onSocketMessage(callback);
  };

  WebSocket.prototype.onclose = function onclose(callback) {
    return my.onSocketClose(callback);
  };

  WebSocket.prototype.onerror = function onerror(callback) {
    return my.onerror(callback);
  };

  return WebSocket;
}();

exports.default = WebSocket;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /* storage.set/// */
  set: function set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_value = quick_object.value;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      if (quick_value != null) {
        if (quick_value.length === 0) {
          my.clearStorage({
            success: function success() {
              var quick_res = {
                errMsg: 'clearStorage: ok'
              };
              SUCCESS(quick_res);
            }
          });
        } else {
          my.setStorage({
            key: quick_key,
            data: quick_value,
            success: function success() {
              var quick_res = {
                errMsg: 'setStorage: ok'
              };
              SUCCESS(quick_res);
            }
          });
        }
      } else {
        my.clearStorage({
          success: function success() {
            var quick_res = {
              errMsg: 'clearStorage: ok'
            };
            SUCCESS(quick_res);
          }
        });
      }
    }, quick_success, quick_fail, quick_complete);
  },

  /* storage.get */

  get: function get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_default = quick_object.default || '';
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getStorage({
        key: quick_key,
        success: function success(my_res) {
          var quick_res = my_res.data;
          SUCCESS(quick_res);
        },
        fail: function fail() {
          SUCCESS(quick_default);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /* Storage.clear */

  clear: function clear(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.clearStorage({
        success: function success() {
          var quick_res = {};
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /* Storage.delete */

  delete: function _delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.removeStorage({
        key: quick_key,
        success: function success() {
          var quick_res = {};
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /* storage.key */

  key: function key(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_index = quick_object.index;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getStorageInfo({
        success: function success(my_res) {
          var quick_res = my_res.keys[quick_index];
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  get length() {
    var swan_res = my.getStorageInfoSync();
    return swan_res.keys.length;
  }
}; /* eslint-disable camelcase */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /** file.move */
  move: function move(quick_object) {
    var quick_srcUri = quick_object.srcUri;
    var quick_dstUri = quick_object.dstUri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var srcPath = my.env.USER_DATA_PATH + quick_srcUri.substring(10);
    var destPath = my.env.USER_DATA_PATH + quick_dstUri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.copyFile({
        srcPath: srcPath,
        destPath: destPath,
        success: function success() {
          var quick_res = {
            errMsg: 'copyFile: ok'
          };
          SUCCESS(quick_res);
        }
      });
      fileSystemManager.unlink({
        filePath: srcPath,
        success: function success() {
          var quick_res = {
            errMsg: 'unlink: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.copy */

  copy: function copy(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_srcUri = quick_object.srcUri;
    var quick_dstUri = quick_object.dstUri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var srcPath = my.env.USER_DATA_PATH + quick_srcUri.substring(10);
    var destPath = my.env.USER_DATA_PATH + quick_dstUri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.copyFile({
        srcPath: srcPath,
        destPath: destPath,
        success: function success() {
          var quick_res = {
            errMsg: 'copyFile: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.list */

  list: function list(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var dirPath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.readdir({
        dirPath: dirPath,
        success: function success(swan_res) {
          var fileList = swan_res.files.map(function (file) {
            return [{
              uri: file,
              lastModifiedTime: new Date().getTime()
            }];
          });
          var quick_res = {
            fileList: fileList
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.get */

  get: function get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.getFileInfo({
        filePath: filePath,
        success: function success(swan_res) {
          var quick_res = {
            length: swan_res.size,
            lastModifiedTime: new Date().getTime(),
            errMsg: 'getFileInfo: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.delete */

  delete: function _delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    quick_object = null;
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    var swan_object = {
      filePath: filePath,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete
    };
    return my.getFileSystemManager().unlink(swan_object);
  },

  /** file.writeText */

  writeText: function writeText(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    var quick_text = quick_object.text;
    var quick_encoding = quick_object.encoding || 'utf8';
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.writeFile({
        filePath: filePath,
        data: quick_text,
        encoding: quick_encoding,
        success: function success() {
          var quick_res = {
            errMsg: 'writeFile: ok'
          };
          SUCCESS(quick_res);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.writeArrayBuffer */

  writeArrayBuffer: function writeArrayBuffer(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    var quick_buffer = quick_object.buffer;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.writeFile({
        filePath: filePath,
        data: quick_buffer,
        success: function success() {
          var quick_res = {
            errMsg: 'writeFile: ok'
          };
          SUCCESS(quick_res);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.readText */

  readText: function readText(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    var quick_encoding = quick_object.encoding || 'utf8';
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.readFile({
        filePath: filePath,
        encoding: quick_encoding,
        success: function success(swan_res) {
          var quick_res = {
            text: swan_res.data
          };
          SUCCESS(quick_res);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.readArrayBuffer */

  readArrayBuffer: function readArrayBuffer(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    var filePath = my.env.USER_DATA_PATH + quick_uri.substring(10);
    (0, _PROMISE2.default)(function (SUCCESS) {
      fileSystemManager.readFile({
        filePath: filePath,
        success: function success(swan_res) {
          var quick_res = {
            buffer: swan_res.data
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.access */

  access: function access(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    (0, _PROMISE2.default)(function (SUCCESS, FAIL) {
      var path = my.env.USER_DATA_PATH + quick_uri.substring(10);
      fileSystemManager.access({
        path: path,
        success: function success() {
          var quick_res = 'Response { code=0 content=success }';
          SUCCESS(quick_res);
        },
        fail: function fail() {
          var quick_res = 'file does not exists';
          FAIL(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.mkdir */

  mkdir: function mkdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    var quick_recursive = quick_object.recursive || false;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    (0, _PROMISE2.default)(function (SUCCESS) {
      var dirPath = my.env.USER_DATA_PATH + quick_uri.substring(10);
      fileSystemManager.mkdir({
        dirPath: dirPath,
        recursive: quick_recursive,
        success: function success() {
          var quick_res = {
            errMsg: 'mkdir: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** file.rmdir */

  rmdir: function rmdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri = quick_object.uri;
    var quick_recursive = quick_object.recursive || false;
    quick_object = null;
    var fileSystemManager = my.getFileSystemManager();
    (0, _PROMISE2.default)(function (SUCCESS) {
      var dirPath = my.env.USER_DATA_PATH + quick_uri.substring(10);
      fileSystemManager.rmdir({
        dirPath: dirPath,
        recursive: quick_recursive,
        success: function success() {
          var quick_res = {
            errMsg: 'rmdir: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-undef */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable camelcase */
/* eslint-disable consistent-return */

module.exports = {
  vibrate: function vibrate(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_mode = quick_object.mode || 'long';
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    var my_object = {
      type: 'medium',
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete
    };
    if (quick_mode === 'short') {
      return my.vibrateShort(my_object);
    } else {
      return my.vibrateLong(my_object);
    }
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /* storage.set/// */
  scan: function scan(quick_object) {
    if (!quick_object) {
      return null;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    //  const quick_cancel = quick_object.cancel
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.scan({
        success: function success(my_res) {
          var quick_res = {
            result: my_res.codeContent,
            code: my_res.code,
            qrCode: my_res.qrCode,
            barCode: my_res.barCode,
            codeType: my_res.codeType,
            codeContent: my_res.codeContent,
            imageChannel: my_res.imageChannel,
            rawData: my_res.rawData
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable consistent-return */
/* eslint-disable camelcase */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  subscribeAccelerometer: function subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_callback = quick_object.callback;
    my.onAccelerometerChange(function (my_res) {
      var quick_res = {
        x: my_res.x,
        y: my_res.y,
        z: my_res.z
      };
      quick_callback(quick_res);
    });
  },


  /** unsubscribeAccelerometer */
  unsubscribeAccelerometer: function unsubscribeAccelerometer() {
    return my.offAccelerometerChange();
  },

  /** sensor.subscribeCompass */
  subscribeCompass: function subscribeCompass(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_callback = quick_object.callback;
    my.onCompassChange(function (res) {
      quick_callback({
        direction: res.direction
      });
    });
  },


  /** sensor.unsubscribeCompass() */
  unsubscribeCompass: function unsubscribeCompass() {
    return my.offCompassChange();
  },


  /** sensor.subscribeProximity */
  subscribeProximity: function subscribeProximity() {
    return console.warn('subscribeProximity is not support');
  },

  /** sensor.unsubscribeProximity() */
  unsubscribeProximity: function unsubscribeProximity() {
    return console.warn('unsubscribeProximity is not support');
  },


  /** sensor.subscribeLight */
  subscribeLight: function subscribeLight() {
    return console.warn('subscribeLight is not support');
  },


  /** sensor.unsubscribeLight() */
  unsubscribeLight: function unsubscribeLight() {
    return console.warn('unsubscribeLight is not support');
  },


  /** sensor.subscribeStepCounter */
  subscribeStepCounter: function subscribeStepCounter(quick_object) {
    if (!quick_object) {
      return;
    }
    my.startAccelerometer({
      interval: 'game'
    });
    var quick_callback = quick_object.callback;

    function check(a1, a2) {
      return a1 > 0 && a2 < 0 || a1 < 0 && a2 > 0;
    }
    var steps = 0;

    function add() {
      steps++;
      quick_callback({
        steps: steps
      });
    }
    var x = void 0;
    var y = void 0;
    var z = void 0;
    my.onAccelerometerChange(function (res) {
      if (x && check(x, res.x)) {
        add();
        x = 0;
      } else if (y && check(y, res.y)) {
        add();
        y = 0;
      } else if (z && check(z, res.z)) {
        add();
        z = 0;
      }
      x = res.x;

      y = res.y;

      z = res.z;
    });
  },

  // ////////////////////////////
  /** sensor.unsubscribeStepCounter() */
  unsubscribeStepCounter: function unsubscribeStepCounter() {
    return my.offCompassChange();
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*  clipboard.set/// */
  set: function set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_text = quick_object.text;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setClipboard({
        text: quick_text,
        success: function success() {
          var quick_res = {
            errMsg: 'set: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /* clipboard.get/// */

  get: function get(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getClipboard({
        success: function success(my_res) {
          var quick_res = {
            text: my_res.text
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable camelcase */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  getLocation: function getLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_timeout = quick_object.timeout || 30000;
    var quick_coordType = quick_object.coordType || 'wgs84';
    quick_object = null;
    var type = void 0;
    if (quick_coordType === 'wgs84') {
      type = 0;
    } else {
      type = 1;
    }
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getLocation({
        type: type,
        cacheTimeout: quick_timeout,
        success: function success(my_res) {
          var quick_res = {
            latitude: my_res.latitude,
            longitude: my_res.longitude,
            accuracy: my_res.accuracy,
            horizontalAccuracy: my_res.horizontalAccuracy,
            country: my_res.country,
            countryCode: my_res.countryCode,
            province: my_res.province,
            city: my_res.city,
            cityAdcode: my_res.cityAdcode,
            district: my_res.district,
            districtAdcode: my_res.districtAdcode,
            streetNumber: my_res.streetNumber,
            pois: my_res.pois,
            time: new Date().getTime()
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** openLocation */
  openLocation: function openLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_latitude = quick_object.latitude;
    var quick_longitude = quick_object.longitude;
    var quick_scale = quick_object.scale || 18;
    var quick_name = quick_object.name || '';
    var quick_address = quick_object.address || '';
    quick_object = null;
    var scale = void 0;
    if (quick_scale === 18) {
      scale = 15;
    } else {
      scale = 17 / 14;
    }
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openLocation({
        latitude: quick_latitude,
        longitude: quick_longitude,
        scale: scale,
        name: quick_name,
        address: quick_address,
        success: function success() {
          var quick_res = {
            errMsg: 'openLocation: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** chooseLocation */

  chooseLocation: function chooseLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_latitude = quick_object.latitude;
    var quick_longitude = quick_object.longitude;
    var quick_coordType = quick_object.coordType || 'wgs84';
    quick_object = null;
    var type = void 0;
    if (quick_coordType === 'wgs84') {
      type = 0;
    } else {
      type = 1;
    }
    (0, _PROMISE2.default)(function (SUCCESS) {
      if (quick_latitude == null || quick_longitude == null) {
        my.getLocation({
          type: type,
          success: function success(my_res) {
            var quick_res = {
              latitude: my_res.latitude,
              longitude: my_res.longitude,
              accuracy: my_res.accuracy,
              horizontalAccuracy: my_res.horizontalAccuracy,
              country: my_res.country,
              countryCode: my_res.countryCode,
              province: my_res.province,
              city: my_res.city,
              cityAdcode: my_res.cityAdcode,
              district: my_res.district,
              districtAdcode: my_res.districtAdcode,
              streetNumber: my_res.streetNumber,
              pois: my_res.pois,
              time: new Date().getTime(),
              coordType: type
            };
            SUCCESS(quick_res);
          }
        });
      } else {
        my.chooseLocation({
          latitude: quick_latitude,
          longitude: quick_longitude,
          success: function success(my_res) {
            var quick_res = {
              name: my_res.name,
              address: my_res.address,
              latitude: my_res.latitude,
              longitude: my_res.longitude,
              coordType: type,
              provinceName: my_res.provinceName,
              cityName: my_res.cityName
            };
            SUCCESS(quick_res);
          }
        });
      }
    }, quick_success, quick_fail, quick_complete);
  },

  /** getLocationType */

  getLocationType: function getLocationType(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_res = {
      types: ['gps', 'network']
    };
    quick_success(quick_res);
  },

  /** geolocation.subscribe */

  subscribe: function subscribe() {
    // if (!quick_object) {
    //   return
    // }
    // my.startLocationUpdate()
    // const quick_callback = quick_object.callback
    // quick_object = null
    // my.onLocationChange(function (my_res) {
    //   const quick_res = {
    //     latitude: my_res.latitude,
    //     longitude: my_res.longitude,
    //     speed: my_res.speed,
    //     accuracy: my_res.accuracy,
    //     altitude: my_res.altitude,
    //     verticalAccuracy: my_res.verticalAccuracy,
    //     horizontalAccuracy: my_res.horizontalAccuracy,
    //     time: new Date().getTime()
    //   }
    //   quick_callback(quick_res)
    // })
    console.log('subscribe is not support');
  },

  /** my.offLocationChange */
  unsubscribe: function unsubscribe() {
    // my.offLocationChange()
    console.log('unsubscribe is not support');
  },

  /** geolocation.getSupportedCoordTypes() */
  getSupportedCoordTypes: function getSupportedCoordTypes() {
    console.log('getSupportedCoordTypes is not support');
  },


  /** geolocation.geocodeQuery() */
  geocodeQuery: function geocodeQuery() {
    console.log('geocodeQuery is not support');
  },


  /** geolocation.reverseGeocodeQuery() */
  reverseGeocodeQuery: function reverseGeocodeQuery() {
    console.log('reverseGeocodeQuery is not support');
  }
}; /* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*  network.getType/// */
  getType: function getType(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getNetworkType({
        success: function success(my_res) {
          var quick_res_type = void 0;
          switch (my_res.networkType) {
            case 'UNKNOWN':
              quick_res_type = 'others';
              break;
            default:
              quick_res_type = my_res.networkType;
              break;
          }
          var quick_res = {
            networkAvailable: my_res.networkAvailable,
            type: quick_res_type,
            metered: false
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /*  network.subscribe/// */
  subscribe: function subscribe(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_callback = quick_object.callback;
    quick_object = null;
    my.onNetworkStatusChange(function (my_res) {
      var quick_res_type = void 0;
      switch (my_res.networkType) {
        case 'unknown':
          quick_res_type = 'others';
          break;
        default:
          quick_res_type = my_res.networkType;
          break;
      }
      var quick_res = {
        type: quick_res_type,
        metered: false,
        isConnected: my_res.isConnected
      };
      quick_callback(quick_res);
    });
  },

  // ///////
  unsubscribe: function unsubscribe() {
    my.offNetworkStatusChange();
  },

  /** getSimOperator */
  getSimOperator: function getSimOperator() {
    console.log('getSimOperator is not support');
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /** device.getInfo */
  getInfo: function getInfo(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSystemInfo({
        success: function success(my_res) {
          var quick_res = {
            brand: my_res.brand,
            model: my_res.model,
            osVersionName: my_res.system.split(' ')[0],
            osVersionCode: my_res.system.split(' ')[1],
            pixelRatio: my_res.pixelRatio,
            language: my_res.language,
            screenWidth: my_res.screenWidth,
            screenHeight: my_res.screenHeight,
            windowWidth: my_res.windowWidth,
            windowHeight: my_res.windowHeight,
            statusBarHeight: my_res.statusBarHeight,
            vendorOsVersion: my_res.version,
            theme: my_res.theme,
            locationReducedAccuracy: my_res.locationReducedAccuracy,
            safeArea: my_res.safeArea,
            wifiEnabled: my_res.wifiEnabled,
            locationEnabled: my_res.locationEnabled,
            bluetoothEnabled: my_res.bluetoothEnabled,
            notificationSoundAuthorized: my_res.notificationSoundAuthorized,
            notificationBadgeAuthorized: my_res.notificationBadgeAuthorized,
            notificationAlertAuthorized: my_res.notificationAlertAuthorized,
            notificationAuthorized: my_res.notificationAuthorized,
            microphoneAuthorized: my_res.microphoneAuthorized,
            locationAuthorized: my_res.locationAuthorized,
            cameraAuthorized: my_res.cameraAuthorized,
            albumAuthorized: my_res.albumAuthorized,
            benchmarkLevel: my_res.benchmarkLevel,
            SDKVersion: my_res.SDKVersion,
            fontSizeSetting: my_res.fontSizeSetting,
            platform: my_res.platform
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** device.getId */
  getId: function getId() {
    return console.warn('getId is not support');
  },


  /** device.getDeviceId */
  getDeviceId: function getDeviceId() {
    return console.warn('getDeviceId is not support');
  },


  /** device.getUserId */
  getUserId: function getUserId() {
    return console.warn('getUserId is not support');
  },


  /** device.getAdvertisingId */
  getAdvertisingId: function getAdvertisingId() {
    return console.warn('getAdvertisingId is not support');
  },


  /** device.getSerial */
  getSerial: function getSerial() {
    return console.warn('getSerial is not support');
  },


  /** device.getTotalStorage */
  getTotalStorage: function getTotalStorage() {
    return console.warn('getTotalStorage is not support');
  },


  /** device.getAvailableStorage */
  getAvailableStorage: function getAvailableStorage() {
    return console.warn('getAvailableStorage is not support');
  },


  /** device.getCpuInfo */
  getCpuInfo: function getCpuInfo() {
    return console.warn('getCpuInfo is not support');
  },


  /** device.getOAID */
  getOAID: function getOAID() {
    return console.warn('getOAID is not support');
  },


  /** device.platform */
  platform: function platform() {
    return console.warn('platform is not support');
  },


  /** device.host */
  host: function host() {
    return console.warn('host is not support');
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*
  brightness.setValue
  * */
  setValue: function setValue(quick_object) {
    if (!quick_object) {
      return null;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_value = quick_object.value;
    quick_object = null;
    var my_object = {
      brightness: quick_value / 255,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete
    };
    return my.setScreenBrightness(my_object);
  },

  /*
  brightness.getValue
  * */

  getValue: function getValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getScreenBrightness({
        success: function success(my_res) {
          var quick_res = {
            value: my_res.brightness * 255
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /**
   * brightness.setKeepScreenOn
   */

  setKeepScreenOn: function setKeepScreenOn(quick_object) {
    return my.setKeepScreenOn(quick_object);
  },

  /**
     brightness.setMode
     */

  setMode: function setMode() {
    console.log('setMode is not support');
  },

  /**
   brightness.getMode
   */

  getMode: function getMode() {
    console.log('getMode is not support');
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /*
  battery.getStatus* */
  getStatus: function getStatus(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getBatteryInfo({
        success: function success(my_res) {
          var quick_res = {
            charging: my_res.isCharging,
            level: my_res.level / 100
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /** wifi.connect */
  connect: function connect(quick_object) {
    my.startWifi();
    return my.connectWifi(quick_object);
  },

  /**
   * wifi.scan
   */
  scan: function scan(quick_object) {
    my.startWifi();
    return my.getWifiList(quick_object);
  },

  /**
   * wifi.getConnectedWifi */

  getConnectedWifi: function getConnectedWifi(quick_object) {
    if (!quick_object) {
      return;
    }
    my.startWifi();
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getConnectedWifi({
        success: function success(my_res) {
          var quick_res = {
            SSID: my_res.wifi.SSID,
            BSSID: my_res.wifi.BSSID,
            secure: my_res.wifi.secure,
            signalStrength: my_res.wifi.signalStrength
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /**
   * wifi.onscanned */
  set onscanned(callback) {
    my.startWifi();
    return my.onGetWifiList(callback);
  },
  /** wifi.onstatechanged */
  set onstatechanged(callback) {
    my.startWifi();
    my.onWifiConnected(function (my_res) {
      var state = void 0;
      if (my_res.wifi.secure) {
        state = 1;
      } else {
        state = 0;
      }
      var quick_res = {
        state: state,
        SSID: my_res.wifi.SSID,
        BSSID: my_res.wifi.BSSID,
        secure: my_res.wifi.secure,
        signalStrength: my_res.wifi.signalStrength
      };
      callback(quick_res);
    });
  }
}; /* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable camelcase */
module.exports = {
  /** * record.start */
  start: function start(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_duration = quick_object.duration || 60000;
    var quick_sampleRate = quick_object.sampleRate || 8000;
    var quick_numberOfChannels = quick_object.numberOfChannels || 2;
    var quick_encodeBitRate = quick_object.encodeBitRate || 48000;
    var quick_format = quick_object.format || 'aac';
    quick_object = null;
    var my_object = {
      duration: quick_duration,
      sampleRate: quick_sampleRate,
      numberOfChannels: quick_numberOfChannels,
      encodeBitRate: quick_encodeBitRate,
      format: quick_format,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete
    };
    var recorderManager = my.getRecorderManager();
    recorderManager.start(my_object);
  },

  /** record.stop */
  stop: function stop() {
    var recorderManager = my.getRecorderManager();
    recorderManager.stop();
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter: function openAdapter(quick_object) {
    var quick_operateAdapter = quick_object.operateAdapter || true;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openBluetoothAdapter({
        autoClose: quick_operateAdapter,
        success: function success(my_res) {
          var quick_res = {
            isSupportBLE: my_res.isSupportBLE
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /**
     bluetooth.closeAdapter({
    *
    */

  closeAdapter: function closeAdapter(quick_object) {
    return my.closeBluetoothAdapter(quick_object);
  },

  /** bluetooth.getAdapterState */

  getAdapterState: function getAdapterState(quick_object) {
    return my.getBluetoothAdapterState(quick_object);
  },

  /** bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */

  set onadapterstatechange(callback) {
    return my.onBluetoothAdapterStateChange(callback);
  },
  /** bluetooth.startDevicesDiscovery */

  startDevicesDiscovery: function startDevicesDiscovery(quick_object) {
    return my.startBluetoothDevicesDiscovery(quick_object);
  },

  /** bluetooth.stopDevicesDiscovery */

  stopDevicesDiscovery: function stopDevicesDiscovery(quick_object) {
    return my.stopBluetoothDevicesDiscovery(quick_object);
  },

  /** bluetooth.getDevices */

  getDevices: function getDevices(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getBluetoothDevices({
        success: function success(my_res) {
          var devices = my_res.devices.map(function (device) {
            return {
              name: device.name,
              deviceId: device.deviceId,
              RSSI: device.RSSI,
              advertisData: device.advertisData,
              advertisServiceUUIDs: device.manufacturerData,
              localName: device.localName

            };
          });
          var quick_res = {
            devices: devices
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    my.onBluetoothDeviceFound(function (my_res) {
      var devices = my_res.devices.map(function (device) {
        return {
          name: device.name,
          deviceId: device.deviceId,
          RSSI: device.RSSI,
          advertisData: device.advertisData,
          advertisServiceUUIDs: device.manufacturerData,
          localName: device.localName

        };
      });
      callback(devices);
    });
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices: function getConnectedDevices(quick_object) {
    var quick_services = quick_object.services;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getConnectedBluetoothDevices({
        deviceId: quick_services[0],
        success: function success(my_res) {
          var quick_res = {
            devices: my_res.devices

          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** bluetooth.createBLEConnection */

  createBLEConnection: function createBLEConnection(quick_object) {
    return my.connectBLEDevice(quick_object);
  },

  /** bluetooth.closeBLEConnection */

  closeBLEConnection: function closeBLEConnection(quick_object) {
    return my.disconnectBLEDevice(quick_object);
  },

  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices: function getBLEDeviceServices(quick_object) {
    var quick_deviceId = quick_object.deviceId;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getBLEDeviceServices({
        deviceId: quick_deviceId,
        success: function success(my_res) {
          var services = my_res.services.map(function (service) {
            return {
              uuid: service.serviceId,
              isPrimary: service.isPrimary
            };
          });
          var quick_res = {
            services: services
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics(quick_object) {
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getBLEDeviceCharacteristics({
        deviceId: quick_deviceId,
        serviceId: quick_serviceId,
        success: function success(my_res) {
          var characteristics = my_res.characteristics.map(function (characteristic) {
            return {
              uuid: characteristic.serviceId,
              properties: characteristic.properties,
              characteristicId: characteristic.characteristicId,
              value: characteristic.value
            };
          });
          var quick_res = {
            characteristics: characteristics
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue: function readBLECharacteristicValue(quick_object) {
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.readBLECharacteristicValue({
        deviceId: quick_deviceId,
        serviceId: quick_serviceId,
        characteristicId: quick_characteristicId,
        success: function success(my_res) {
          var quick_res = {
            characteristic: {
              characteristicId: my_res.characteristicId,
              serviceId: my_res.serviceId,
              value: my_res.value
            }
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue: function writeBLECharacteristicValue(quick_object) {
    return my.writeBLECharacteristicValue(quick_object);
  },

  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange(quick_object) {
    var key = 'descriptorId';
    var value = '00002902-0000-10008000-00805f9b34fb';
    quick_object[key] = value;
    return my.notifyBLECharacteristicValueChange(quick_object);
  },

  /** bluetooth.onblecharacteristicvaluechange */

  set onblecharacteristicvaluechange(callback) {
    return my.onBLECharacteristicValueChange(callback);
  },
  /** bluetooth.onbleconnectionstatechange  */

  set onbleconnectionstatechange(callback) {
    return my.onBLEConnectionStateChange(callback);
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  decompress: function decompress(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_srcUri = quick_object.srcUri;
    var quick_dstUri = quick_object.dstUri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    var path = my.env.USER_DATA_PATH;
    var FileSystemManager = my.getFileSystemManager();
    (0, _PROMISE2.default)(function (SUCCESS) {
      FileSystemManager.unzip({
        zipFilePath: quick_srcUri.indexOf('internal://') === 0 ? path + quick_srcUri.substring(10) : quick_srcUri,
        targetPath: quick_dstUri.indexOf('internal://') === 0 ? path + quick_dstUri.substring(10) : quick_dstUri,
        success: function success() {
          var quick_res = {
            errMsg: 'decompress: ok'
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  }
}; /* eslint-disable camelcase */
/* eslint-disable no-console */

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /** media.takePhoto */

  takePhoto: function takePhoto(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    var CameraContext = my.createCameraContext();
    (0, _PROMISE2.default)(function (SUCCESS) {
      CameraContext.takePhoto({
        success: function success(my_res) {
          var quick_res = {
            uri: my_res.tempImagePath
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },

  /** media.takeVideo */
  takeVideo: function takeVideo(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseVideo({
        success: function success(my_res) {
          var quick_res = {
            uri: my_res.tempFilePath,
            size: my_res.size,
            duration: my_res.duration,
            height: my_res.height,
            width: my_res.width
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** media.pickImage */
  pickImage: function pickImage(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseImage({
        count: 1,
        success: function success(my_res) {
          var quick_res = {
            apFilePaths: my_res.apFilePaths,
            uri: my_res.tempFiles[0].path,
            size: my_res.tempFiles[0].size
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** media.pickImages */
  pickImages: function pickImages(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseImage({
        success: function success(my_res) {
          var quick_files = my_res.tempFiles.map(function (file) {
            return {
              uri: file.path,
              size: file.size
            };
          });
          var quick_res = {
            uris: my_res.apFilePaths,
            files: quick_files
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** media.pickVideo */
  pickVideo: function pickVideo(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseVideo({
        success: function success(my_res) {
          var quick_res = {
            uri: my_res.tempFilePath,
            size: my_res.size,
            duration: my_res.duration,
            height: my_res.height,
            width: my_res.width
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** media.pickVideos */
  pickVideos: function pickVideos(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    // const quick_cancel = quick_object.cancel
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseVideo({
        success: function success(my_res) {
          var uris = [my_res.tempFilePath];
          var files = [{
            uri: my_res.tempFilePath,
            size: my_res.size
          }];
          var quick_res = {
            uris: uris,
            files: files
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },


  /** media.pickFile */
  pickFile: function pickFile() {
    // if (!quick_object) {
    //   return
    // }
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // // const quick_cancel = quick_object.cancel
    // PROMISE((SUCCESS) => {
    //   my.chooseMessageFile({
    //     count: 1,
    //     success: my_res => {
    //       const quick_res = {
    //         tempFiles: my_res.tempFiles,
    //         uri: my_res.tempFiles[0].path,
    //         size: my_res.tempFiles[0].size,
    //         name: my_res.tempFiles[0].name,
    //       }
    //       SUCCESS(quick_res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
    return console.warn('pickFile is not support');
  },


  /** media.saveToPhotosAlbum */
  saveToPhotosAlbum: function saveToPhotosAlbum() {
    // if (!quick_object) {
    //   return
    // }
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // const quick_uri = quick_object.uri
    // quick_object = null
    // const my_object = {
    //   filePath: quick_uri,
    //   success: quick_success,
    //   fail: quick_fail,
    //   complete: quick_complete,
    // }
    // my.saveImageToPhotosAlbum(my_object)
    return console.warn('saveToPhotosAlbum is not support');
  },


  /** media.previewImage */
  previewImage: function previewImage(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uris = quick_object.uris;
    var quick_current = quick_object.current || 0;
    // const quick_cancel = quick_object.cancel
    quick_object = null;
    var my_object = {
      urls: quick_uris,
      current: quick_current,
      enablesavephoto: true,
      enableShowPhotoDownload: true,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete
    };
    my.previewImage(my_object);
  },

  /** media.getRingtone */
  getRingtone: function getRingtone() {
    console.warn('getRingtone is not support');
  },

  /** setRingtone */
  setRingtone: function setRingtone() {
    console.warn('setRingtone is not support');
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PROMISE = __webpack_require__(0);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  // 获取图片信息
  getImageInfo: function getImageInfo(quick_object) {
    var quick_uri = quick_object.uri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getImageInfo({
        src: quick_uri,
        success: function success(my_res) {
          var quick_res = {
            uri: my_res.path,
            width: my_res.width,
            height: my_res.height,
            orientation: my_res.orientation,
            type: my_res.type
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },
  compressImage: function compressImage(quick_object) {
    var quick_uri = quick_object.uri;
    var quick_quality = quick_object.quality || 75;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var compressLevel = void 0;
      if (quick_quality === 75) {
        compressLevel = 4;
      } else if (quick_quality / 20 <= 1) {
        compressLevel = 0;
      } else if (quick_quality / 20 > 1 && quick_quality / 20 <= 2) {
        compressLevel = 1;
      } else if (quick_quality / 20 > 2 && quick_quality / 20 <= 3) {
        compressLevel = 2;
      } else if (quick_quality / 20 > 3 && quick_quality / 20 <= 4) {
        compressLevel = 3;
      } else if (quick_quality / 20 > 4 && quick_quality / 20 <= 5) {
        compressLevel = 4;
      }
      my.compressImage({
        apFilePaths: [quick_uri],
        compressLevel: compressLevel,
        success: function success(my_res) {
          var quick_res = {
            uri: my_res.apFilePaths
          };
          SUCCESS(quick_res);
        }
      });
    }, quick_success, quick_fail, quick_complete);
  },
  applyOperations: function applyOperations() {
    console.warn('applyOperations is not support');
  },
  editImage: function editImage() {
    console.warn('editImage is not support');
  },
  getExifAttributes: function getExifAttributes() {
    console.warn('getExifAttributes is not support');
  },
  setExifAttributes: function setExifAttributes() {
    console.warn('setExifAttributes is not support');
  }
}; /* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable consistent-return */
/* eslint-disable getter-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = {
  play: function play() {
    getApp().onekit_inneraudioContextplay = 'play';
    this.inneraudioContext.play();
  },
  pause: function pause() {
    getApp().onekit_inneraudioContextplay = 'pause';
    this.inneraudioContext.pause();
  },
  stop: function stop() {
    getApp().onekit_inneraudioContextplay = 'stop';
    this.inneraudioContext.stop();
  },
  getPlayState: function getPlayState() {
    var state = void 0;
    switch (getApp().onekit_inneraudioContextplay) {
      case 'play':
        state = 'play';
        break;
      case 'pase':
        state = 'pase';
        break;
      default:
        state = 'stop';
        break;
    }
    var quick_res = {
      state: state
    };
    return quick_res;
  },


  set src(src) {
    var InnerAudioContext = my.createInnerAudioContext();
    this.inneraudioContext = InnerAudioContext;
    this.inneraudioContext.src = src;
  },

  set currentTime(currentTime) {
    this.inneraudioContext.currentTime = currentTime;
  },
  get currentTime() {
    if (my.createInnerAudioContext().currentTime) {
      return my.createInnerAudioContext().currentTime;
    }
  },

  get duration() {
    if (my.createInnerAudioContext().duration) {
      return my.createInnerAudioContext().duration;
    }
  },

  set autoplay(autoplay) {
    this.inneraudioContext.autoplay = autoplay;
  },
  get autoplay() {
    if (getApp().onekit_autoplay) {
      return getApp().onekit_autoplay;
    } else {
      return false;
    }
  },

  set loop(loop) {
    this.inneraudioContext.loop = loop;
  },
  get loop() {
    if (this.inneraudioContext.loop) {
      return this.inneraudioContext.loop;
    } else {
      return false;
    }
  },

  set volume(volume) {
    this.inneraudioContext.volume = volume;
  },
  get volume() {
    if (this.inneraudioContext.volume) {
      return this.inneraudioContext.volume;
    } else {
      return 1;
    }
  },

  set muted(muted) {
    this.inneraudioContext.obeyMuteSwitch = muted;
  },

  get notificationVisible() {
    if (this.inneraudioContext.obeyMuteSwitch) {
      return this.inneraudioContext.obeyMuteSwitch;
    } else {
      return true;
    }
  },

  set title(title) {
    console.log('title is not support');
  },

  set artist(artist) {
    console.log('artist is not support');
  },

  set cover(cover) {
    console.log('cover is not support');
  },

  set streamType(streamType) {
    console.log('streamType is not support');
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../../node_modules/oneutil/PROMISE'

var Video = function () {
  function Video(object) {
    _classCallCheck(this, Video);

    this.object = object;
  }

  Video.prototype.compressVideo = function compressVideo() {
    // const quick_uri = this.object.uri
    // const quick_bitrate = this.object.bitrate || 0.5
    // const quick_framerate = this.object.framerate || 30
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // PROMISE((SUCCESS) => {
    //   my.compressVideo({
    //     src: quick_uri,
    //     quality: 'medium',
    //     bitrate: quick_bitrate,
    //     fps: quick_framerate,
    //     resolution: 0.5,
    //     success: my_res => {
    //       const quick_res = {
    //         uri: my_res.tempFilePath,
    //         size: my_res.size
    //       }
    //       SUCCESS(quick_res)
    //     },
    //     fail: res => {
    //       console.log(res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
    return console.warn('compressVideo is not support');
  };

  Video.prototype.getVideoInfo = function getVideoInfo() {
    // const quick_uri = quick_object.uri
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // PROMISE((SUCCESS) => {
    //   my.getVideoInfo({
    //     src: quick_uri,
    //     success: my_res => {
    //       const quick_res = {
    //         uri: quick_uri,
    //         size: my_res.size,
    //         height: my_res.height,
    //         width: my_res.width,
    //         bitrate: my_res.bitrate,
    //         framerate: my_res.fps,
    //         orientation: my_res.orientation,
    //         type: my_res.type,
    //         duration: my_res.duration,
    //       }
    //       SUCCESS(quick_res)
    //     },
    //     fail: res => {
    //       console.log(res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
    return console.warn('getVideoInfo is not support');
  };

  return Video;
}();

exports.default = Video;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cryptoJs = __webpack_require__(66);

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  aes: function aes(quick_object) {
    var quick_action = quick_object.action;
    var quick_text = quick_object.text;
    var quick_key = quick_object.key;
    var quick_transformation = quick_object.transformation || 'AES/CBC/PKCS5Padding';
    var quick_iv = quick_object.iv || quick_key;
    var quick_ivOffset = quick_object.ivOffset || 0;
    var quick_ivLen = quick_object.ivLen || 16;
    var quick_success = quick_object.success;
    quick_object = null;

    // ///////////////////////
    var transformations = quick_transformation.split('/');
    console.log(_cryptoJs2.default.mode[transformations[1]]);
    var options = {
      iv: quick_iv,
      offset: quick_ivOffset,
      length: quick_ivLen,
      mode: _cryptoJs2.default.mode[transformations[1]],
      padding: _cryptoJs2.default.pad[transformations[2]]
    };

    if (quick_action === 'encrypt') {
      var ciphertext = _cryptoJs2.default.AES.encrypt(quick_text, quick_key, options).toString();
      console.log(ciphertext);
      quick_success({
        text: ciphertext
      });
    } else {
      var bytes = _cryptoJs2.default.AES.decrypt(quick_text, quick_key, options);
      var decryptedData = bytes.toString(_cryptoJs2.default.enc.Utf8);
      quick_success({
        text: decryptedData
      });
    }
  }
}; /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(67);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(68);

(function () {
  // Shortcuts
  var C = CryptoJS;
  var C_lib = C.lib;
  var BlockCipher = C_lib.BlockCipher;
  var C_algo = C.algo;

  // Lookup tables
  var SBOX = [];
  var INV_SBOX = [];
  var SUB_MIX_0 = [];
  var SUB_MIX_1 = [];
  var SUB_MIX_2 = [];
  var SUB_MIX_3 = [];
  var INV_SUB_MIX_0 = [];
  var INV_SUB_MIX_1 = [];
  var INV_SUB_MIX_2 = [];
  var INV_SUB_MIX_3 = [];

  // Compute lookup tables
  (function () {
    // Compute double table
    var d = [];
    for (var i = 0; i < 256; i++) {
      if (i < 128) {
        d[i] = i << 1;
      } else {
        d[i] = i << 1 ^ 0x11b;
      }
    }

    // Walk GF(2^8)
    var x = 0;
    var xi = 0;
    for (var i = 0; i < 256; i++) {
      // Compute sbox
      var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
      SBOX[x] = sx;
      INV_SBOX[sx] = x;

      // Compute multiplication
      var x2 = d[x];
      var x4 = d[x2];
      var x8 = d[x4];

      // Compute sub bytes, mix columns tables
      var t = d[sx] * 0x101 ^ sx * 0x1010100;
      SUB_MIX_0[x] = t << 24 | t >>> 8;
      SUB_MIX_1[x] = t << 16 | t >>> 16;
      SUB_MIX_2[x] = t << 8 | t >>> 24;
      SUB_MIX_3[x] = t;

      // Compute inv sub bytes, inv mix columns tables
      var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
      INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
      INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
      INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
      INV_SUB_MIX_3[sx] = t;

      // Compute next counter
      if (!x) {
        x = xi = 1;
      } else {
        x = x2 ^ d[d[d[x8 ^ x2]]];
        xi ^= d[d[xi]];
      }
    }
  })();

  // Precomputed Rcon lookup
  var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

  /**
   * AES block cipher algorithm.
   */
  var AES = C_algo.AES = BlockCipher.extend({
    _doReset: function _doReset() {
      var t;

      // Skip reset of nRounds has been set before and key did not change
      if (this._nRounds && this._keyPriorReset === this._key) {
        return;
      }

      // Shortcuts
      var key = this._keyPriorReset = this._key;
      var keyWords = key.words;
      var keySize = key.sigBytes / 4;

      // Compute number of rounds
      var nRounds = this._nRounds = keySize + 6;

      // Compute number of key schedule rows
      var ksRows = (nRounds + 1) * 4;

      // Compute key schedule
      var keySchedule = this._keySchedule = [];
      for (var ksRow = 0; ksRow < ksRows; ksRow++) {
        if (ksRow < keySize) {
          keySchedule[ksRow] = keyWords[ksRow];
        } else {
          t = keySchedule[ksRow - 1];

          if (!(ksRow % keySize)) {
            // Rot word
            t = t << 8 | t >>> 24;

            // Sub word
            t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];

            // Mix Rcon
            t ^= RCON[ksRow / keySize | 0] << 24;
          } else if (keySize > 6 && ksRow % keySize == 4) {
            // Sub word
            t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
          }

          keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
        }
      }

      // Compute inv key schedule
      var invKeySchedule = this._invKeySchedule = [];
      for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
        var ksRow = ksRows - invKsRow;

        if (invKsRow % 4) {
          var t = keySchedule[ksRow];
        } else {
          var t = keySchedule[ksRow - 4];
        }

        if (invKsRow < 4 || ksRow <= 4) {
          invKeySchedule[invKsRow] = t;
        } else {
          invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
        }
      }
    },
    encryptBlock: function encryptBlock(M, offset) {
      this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
    },
    decryptBlock: function decryptBlock(M, offset) {
      // Swap 2nd and 4th rows
      var t = M[offset + 1];
      M[offset + 1] = M[offset + 3];
      M[offset + 3] = t;

      this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

      // Inv swap 2nd and 4th rows
      var t = M[offset + 1];
      M[offset + 1] = M[offset + 3];
      M[offset + 3] = t;
    },
    _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
      // Shortcut
      var nRounds = this._nRounds;

      // Get input, add round key
      var s0 = M[offset] ^ keySchedule[0];
      var s1 = M[offset + 1] ^ keySchedule[1];
      var s2 = M[offset + 2] ^ keySchedule[2];
      var s3 = M[offset + 3] ^ keySchedule[3];

      // Key schedule row counter
      var ksRow = 4;

      // Rounds
      for (var round = 1; round < nRounds; round++) {
        // Shift rows, sub bytes, mix columns, add round key
        var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
        var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
        var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
        var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

        // Update state
        s0 = t0;
        s1 = t1;
        s2 = t2;
        s3 = t3;
      }

      // Shift rows, sub bytes, add round key
      var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
      var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
      var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
      var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

      // Set output
      M[offset] = t0;
      M[offset + 1] = t1;
      M[offset + 2] = t2;
      M[offset + 3] = t3;
    },


    keySize: 256 / 32
  });

  /**
   * Shortcut functions to the cipher's object interface.
   *
   * @example
   *
   *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
   *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
   */
  C.AES = BlockCipher._createHelper(AES);
})(); /* eslint-disable */

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || function (Math, undefined) {

    var crypto;

    // Native crypto from window (Browser)
    if (typeof window !== 'undefined' && window.crypto) {
        crypto = window.crypto;
    }

    // Native crypto in web worker (Browser)
    if (typeof self !== 'undefined' && self.crypto) {
        crypto = self.crypto;
    }

    // Native crypto from worker
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
        crypto = globalThis.crypto;
    }

    // Native (experimental IE 11) crypto from window (Browser)
    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
        crypto = window.msCrypto;
    }

    // Native crypto from global (NodeJS)
    if (!crypto && typeof global !== 'undefined' && global.crypto) {
        crypto = global.crypto;
    }

    // Native crypto import via require (NodeJS)
    if (!crypto && "function" === 'function') {
        try {
            crypto = __webpack_require__(69);
        } catch (err) {}
    }

    /*
     * Cryptographically secure pseudorandom number generator
     *
     * As Math.random() is cryptographically not safe to use
     */
    var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
        if (crypto) {
            // Use getRandomValues method (Browser)
            if (typeof crypto.getRandomValues === 'function') {
                try {
                    return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {}
            }

            // Use randomBytes method (NodeJS)
            if (typeof crypto.randomBytes === 'function') {
                try {
                    return crypto.randomBytes(4).readInt32LE();
                } catch (err) {}
            }
        }

        throw new Error('Native crypto module could not be used to get secure random number.');
    };

    /*
     * Local polyfill of Object.create
       */
    var create = Object.create || function () {
        function F() {}

        return function (obj) {
            var subtype;

            F.prototype = obj;

            subtype = new F();

            F.prototype = null;

            return subtype;
        };
    }();

    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = function () {

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function extend(overrides) {
                // Spawn
                var subtype = create(this);

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function create() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function init() {},

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function mixIn(properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function clone() {
                return this.init.prototype.extend(this);
            }
        };
    }();

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function init(words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function toString(encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function concat(wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
            } else {
                // Copy one word at a time
                for (var j = 0; j < thatSigBytes; j += 4) {
                    thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function clamp() {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function clone() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function random(nBytes) {
            var words = [];

            for (var i = 0; i < nBytes; i += 4) {
                words.push(cryptoSecureRandomInt());
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function parse(hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function parse(latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function stringify(wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function parse(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function reset() {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function _append(data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function _process(doFlush) {
            var processedWords;

            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function clone() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function init(cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function reset() {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function update(messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function finalize(messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512 / 32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function _createHelper(hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function _createHmacHelper(hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math);

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */

  getVideoInfo: function getVideoInfo() {
    return console.warn('getVideoInfo si not support');
  }
};

/***/ })
/******/ ]);