var testpagecoursebuilder =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"testpagecoursebuilder": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/test/testpage-coursebuilder.tsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../kedbackend/client.js":
/*!*******************************!*\
  !*** ../kedbackend/client.js ***!
  \*******************************/
/*! exports provided: createUUID, KedBearerProvider, HttpError, KedBackendClient, BatchRunner, DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/ked-backend-client */ "../kedbackend/js/dist/ked-backend-client/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["createUUID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBearerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendClient", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBackendClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchRunner", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["BatchRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["DocumentAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return _js_dist_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["hasAccess"]; });



/***/ }),

/***/ "../kedbackend/clientweb.js":
/*!**********************************!*\
  !*** ../kedbackend/clientweb.js ***!
  \**********************************/
/*! exports provided: storage, WebServerBearerProvider, isomorphic, KedBackendClientWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/ked-backend-client-web */ "../kedbackend/js/dist/ked-backend-client-web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _js_dist_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebServerBearerProvider", function() { return _js_dist_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["WebServerBearerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isomorphic", function() { return _js_dist_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["isomorphic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendClientWeb", function() { return _js_dist_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["KedBackendClientWeb"]; });



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client-web/bearer-storage-sessionstorage.js":
/*!*************************************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client-web/bearer-storage-sessionstorage.js ***!
  \*************************************************************************************/
/*! exports provided: BearerStorageSessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BearerStorageSessionStorage", function() { return BearerStorageSessionStorage; });
var BearerStorageSessionStorage = /** @class */ (function () {
    function BearerStorageSessionStorage() {
    }
    BearerStorageSessionStorage.prototype.save = function (id, tokenInfo) {
        sessionStorage.setItem("bearer-" + id, JSON.stringify(tokenInfo));
    };
    BearerStorageSessionStorage.prototype.load = function (id) {
        try {
            var json = sessionStorage.getItem("bearer-" + id);
            return Promise.resolve(json ? JSON.parse(json) : { token: null, expires: 0 });
        }
        catch (ex) {
            return Promise.resolve({ token: null, expires: 0 });
        }
    };
    return BearerStorageSessionStorage;
}());



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client-web/index.js":
/*!*************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client-web/index.js ***!
  \*************************************************************/
/*! exports provided: storage, WebServerBearerProvider, isomorphic, KedBackendClientWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServerBearerProvider", function() { return WebServerBearerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isomorphic", function() { return isomorphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendClientWeb", function() { return KedBackendClientWeb; });
/* harmony import */ var _ked_backend_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ked-backend-client */ "../kedbackend/js/dist/ked-backend-client/index.js");
/* harmony import */ var _bearer_storage_sessionstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bearer-storage-sessionstorage */ "../kedbackend/js/dist/ked-backend-client-web/bearer-storage-sessionstorage.js");
/* harmony import */ var _ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ked-backend-client/utils */ "../kedbackend/js/dist/ked-backend-client/utils.js");
/* harmony import */ var _ked_model_migrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ked-model-migrator */ "../kedbackend/js/dist/ked-model-migrator/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




Object(_ked_model_migrator__WEBPACK_IMPORTED_MODULE_3__["KedModelMigratorMixin"])(_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBackendClient"].prototype);
var storage = new _bearer_storage_sessionstorage__WEBPACK_IMPORTED_MODULE_1__["BearerStorageSessionStorage"]();
var timeOfPageLoad = Date.now();
var WebServerBearerProvider = /** @class */ (function () {
    function WebServerBearerProvider(tokenPath, tokenResponseMapper, tokenId) {
        this.tokenPath = tokenPath;
        this.tokenResponseMapper = tokenResponseMapper;
        this.tokenId = tokenId;
        this.tokenInfo = { token: null, expires: 0 };
        this.getBearer = Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_2__["avoidSimultanousCalls"])(this.getBearer.bind(this));
        this.refreshBearer = Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_2__["avoidSimultanousCalls"])(this.refreshBearer.bind(this));
    }
    WebServerBearerProvider.prototype.getBearer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.tokenInfo.token) return [3 /*break*/, 2];
                        if (!this.tokenId) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, storage.load(this.tokenId)];
                    case 1:
                        _a.tokenInfo = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(this.tokenInfo.expires < Date.now())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refreshBearer()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, this.tokenInfo];
                }
            });
        });
    };
    WebServerBearerProvider.prototype.refreshBearer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, fetch(this.tokenPath, {
                            headers: { Accept: "text/plain; application/json" },
                            redirect: 'manual',
                            cache: 'no-cache',
                            credentials: "same-origin"
                        })];
                    case 1:
                        res = _e.sent();
                        if (res.status === 302 || (!res.status && res.type === "opaqueredirect")) {
                            // User session timed out and server wants to redirect entire page to login page
                            // Time to reload current page to force a redirect of the entire page instead for
                            // just redirecting to /api/token or whatever.
                            if (Date.now() - timeOfPageLoad > 60000) {
                                this.wantsRedirect = true; // So that listeners to onbeforeunload could show alternate message.
                                console.log("Redirect wanted. Reload page.");
                                window.location.reload(true);
                            }
                        }
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = Error.bind;
                        _b = "HTTP" + res.status + " ";
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(Error, [void 0, _b + (_e.sent())]))();
                    case 3:
                        _c = this;
                        _d = this.tokenResponseMapper;
                        return [4 /*yield*/, res.text()];
                    case 4:
                        _c.tokenInfo = _d.apply(this, [_e.sent()]);
                        storage.save(this.tokenId, this.tokenInfo);
                        return [2 /*return*/, this.tokenInfo];
                }
            });
        });
    };
    return WebServerBearerProvider;
}());

var isomorphic = { fetch: fetch.bind(self), btoa: btoa.bind(self) };
var KedBackendClientWeb = /** @class */ (function (_super) {
    __extends(KedBackendClientWeb, _super);
    function KedBackendClientWeb(apiBaseUrl, providerOrTokenPath, options) {
        var _this = this;
        var bearerProvider = typeof providerOrTokenPath !== 'string' ?
            providerOrTokenPath :
            new WebServerBearerProvider(providerOrTokenPath, (options && options.tokenResponseMapper) || (function (x) { return ({ token: x, expires: Date.now() + 59 * 60 * 60 }); }), options && options.tokenId);
        _this = _super.call(this, isomorphic, bearerProvider, apiBaseUrl) || this;
        return _this;
    }
    return KedBackendClientWeb;
}(_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBackendClient"]));



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/access-control.js":
/*!******************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/access-control.js ***!
  \******************************************************************/
/*! exports provided: DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return DocumentAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return hasAccess; });
var DocumentAccess = /** @class */ (function () {
    function DocumentAccess(accessClaimType, accessClaimValue, right) {
        this.accessClaimType = accessClaimType;
        this.accessClaimValue = accessClaimValue;
        this.right = right;
    }
    DocumentAccess.fromString = function (ac) {
        if (!ac)
            return null;
        var split = ac.split(':');
        if (split.length < 3)
            throw new Error("Invalid access string: " + ac);
        var claimType = DocumentAccess.unescape(split[0]);
        var claimValue = DocumentAccess.unescape(split[1]);
        var right = split[2];
        if (right !== 'R' && right !== 'W' && right !== 'S')
            throw new Error("Invalid access string: " + ac);
        return new DocumentAccess(claimType, claimValue, right);
    };
    DocumentAccess.escape = function (accessComponent) {
        return accessComponent.replace(/\%/g, "%25").replace(/\:/g, "%3A");
    };
    DocumentAccess.unescape = function (accessComponent) {
        return accessComponent.replace(/\%3A/g, ":").replace(/\%25/g, "%");
    };
    DocumentAccess.prototype.toString = function () {
        return DocumentAccess.escape(this.accessClaimType) + ":" +
            DocumentAccess.escape(this.accessClaimValue) + ":" +
            this.right;
    };
    DocumentAccess.fromStringArray = function (acl) {
        return acl
            .map(function (ac) { return DocumentAccess.fromString(ac); })
            .filter(function (ac) { return ac; });
    };
    DocumentAccess.toStringArray = function (acl) {
        return acl.map(function (ac) { return ac.toString(); });
    };
    return DocumentAccess;
}());

function hasAccess(acl, userClaims, requestedRight) {
    if (userClaims.some(function (claim) { return claim.type === 'role' && claim.value === "ADMIN"; }))
        return true;
    return acl.some(function (a) {
        return userClaims.some(function (c) {
            return a.accessClaimType === c.type &&
                a.accessClaimValue === c.value && ((a.right === 'R' && requestedRight === 'R') ||
                (a.right === 'W' && ['R', 'W'].indexOf(requestedRight) >= 0) ||
                (a.right === 'S'));
        });
    });
}


/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/http-error.js":
/*!**************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/http-error.js ***!
  \**************************************************************/
/*! exports provided: HttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(code, message) {
        var _this = _super.call(this, "HTTP" + code + " " + message) || this;
        _this.code = code;
        _this.message = message;
        _this.name = "http" + code;
        return _this;
    }
    return HttpError;
}(Error));



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/index.js":
/*!*********************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/index.js ***!
  \*********************************************************/
/*! exports provided: createUUID, KedBearerProvider, HttpError, KedBackendClient, BatchRunner, DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendClient", function() { return KedBackendClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchRunner", function() { return BatchRunner; });
/* harmony import */ var _restclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restclient */ "../kedbackend/js/dist/ked-backend-client/restclient.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../kedbackend/js/dist/ked-backend-client/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["createUUID"]; });

/* harmony import */ var _ked_bearer_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ked-bearer-provider */ "../kedbackend/js/dist/ked-backend-client/ked-bearer-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return _ked_bearer_provider__WEBPACK_IMPORTED_MODULE_2__["KedBearerProvider"]; });

/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-control */ "../kedbackend/js/dist/ked-backend-client/access-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return _access_control__WEBPACK_IMPORTED_MODULE_3__["DocumentAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return _access_control__WEBPACK_IMPORTED_MODULE_3__["hasAccess"]; });

/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error */ "../kedbackend/js/dist/ked-backend-client/http-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"]; });

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






;
var KedBackendClient = /** @class */ (function () {
    function KedBackendClient(isomorphic, bearerProvider, baseUrl) {
        this.http = new _restclient__WEBPACK_IMPORTED_MODULE_0__["RestClient"](isomorphic, baseUrl, { bearerProvider: bearerProvider });
    }
    KedBackendClient.prototype.getMyClaims = function (table, fetchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("me/claims/" + (table || ""), null, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.get = function (table, id, options, fetchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get(table + "/" + id, options, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.list = function (table, options, fetchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("" + table, options, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.batch = function (reqs, fetchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Reorder operations so that 'add's come first and 'delete's come last:
                        reqs = reqs.slice().sort(function (req1, req2) {
                            return req1.op === 'add' ? -1 : req2.op === 'add' ? 1 :
                                req1.op === 'delete' ? 1 : req2.op === 'delete' ? -1 : 0;
                        });
                        return [4 /*yield*/, this.http.post("batch", reqs, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.do = function (scopeFn) {
        return __awaiter(this, void 0, void 0, function () {
            var runner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runner = new BatchRunner();
                        scopeFn(runner);
                        return [4 /*yield*/, this.batch(runner.mutationRequests)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.deleteRealm = function (realm) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.delete("realms/" + realm)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_4__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.add = function (table, doc) {
        return this.do(function (r) { return r.add(table, doc); });
    };
    KedBackendClient.prototype.put = function (table, doc) {
        return this.do(function (r) { return r.put(table, doc); });
    };
    KedBackendClient.prototype.delete = function (table, id) {
        return this.do(function (r) { return r.delete(table, id); });
    };
    KedBackendClient.prototype.share = function (table, id, acl) {
        return this.do(function (r) { return r.share(table, id, acl); });
    };
    KedBackendClient.prototype.unshare = function (table, id, acl) {
        return this.do(function (r) { return r.unshare(table, id, acl); });
    };
    KedBackendClient.prototype.link = function (sourceTable, sourceId, targetTable, targetId, label) {
        return this.do(function (r) { return r.link(sourceTable, sourceId, targetTable, targetId, label); });
    };
    KedBackendClient.prototype.link2 = function (sourceTable, sourceId, targetId, label) {
        return this.do(function (r) { return r.link2(sourceTable, sourceId, label, targetId); });
    };
    KedBackendClient.prototype.unlink = function (sourceTable, sourceId, targetTable, targetId, label) {
        return this.do(function (r) { return r.unlink(sourceTable, sourceId, targetTable, targetId, label); });
    };
    KedBackendClient.prototype.unlink2 = function (sourceTable, sourceId, targetId, label) {
        return this.do(function (r) { return r.unlink2(sourceTable, sourceId, label, targetId); });
    };
    return KedBackendClient;
}());

var BatchRunner = /** @class */ (function () {
    function BatchRunner() {
        this.mutationRequests = [];
    }
    BatchRunner.prototype.add = function (table, doc) {
        this.mutationRequests.push({ op: 'add', table: table, doc: doc });
        return this;
    };
    BatchRunner.prototype.put = function (table, doc) {
        doc = __assign({}, doc);
        delete doc.acl; // Forbidden to send acl with put() calls.
        this.mutationRequests.push({ op: 'put', table: table, doc: doc });
        return this;
    };
    BatchRunner.prototype.delete = function (table, id) {
        this.mutationRequests.push({ op: 'delete', table: table, id: id });
        return this;
    };
    BatchRunner.prototype.share = function (table, id, acl) {
        this.mutationRequests.push({ op: 'share', table: table, id: id, acl: acl });
        return this;
    };
    BatchRunner.prototype.unshare = function (table, id, acl) {
        this.mutationRequests.push({ op: 'unshare', table: table, id: id, acl: acl });
        return this;
    };
    BatchRunner.prototype.link = function (sourceTable, sourceId, targetTable, targetId, label) {
        this.mutationRequests.push({ op: 'link', sourceTable: sourceTable, sourceId: sourceId, targetTable: targetTable, targetId: targetId, label: label });
        return this;
    };
    BatchRunner.prototype.link2 = function (sourceTable, sourceId, label, targetId) {
        this.mutationRequests.push({ op: 'link', sourceTable: sourceTable, sourceId: sourceId, targetId: targetId, label: label });
    };
    BatchRunner.prototype.unlink = function (sourceTable, sourceId, targetTable, targetId, label) {
        this.mutationRequests.push({ op: 'unlink', sourceTable: sourceTable, sourceId: sourceId, targetTable: targetTable, targetId: targetId, label: label });
        return this;
    };
    BatchRunner.prototype.unlink2 = function (sourceTable, sourceId, label, targetId) {
        this.mutationRequests.push({ op: 'unlink', sourceTable: sourceTable, sourceId: sourceId, targetId: targetId, label: label });
        return this;
    };
    return BatchRunner;
}());



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/ked-bearer-provider.js":
/*!***********************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/ked-bearer-provider.js ***!
  \***********************************************************************/
/*! exports provided: KedBearerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return KedBearerProvider; });
/* harmony import */ var _restclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restclient */ "../kedbackend/js/dist/ked-backend-client/restclient.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../kedbackend/js/dist/ked-backend-client/utils.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var KedBearerProvider = /** @class */ (function () {
    function KedBearerProvider(isomorphic, storage, tokenId, clientId, clientSecret, tokenUrl, tokenQuery) {
        this.isomorphic = isomorphic;
        this.storage = storage;
        this.tokenId = tokenId;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.tokenUrl = tokenUrl;
        this.tokenQuery = tokenQuery;
        this.tokenInfo = { token: null, expires: 0 };
        this.client = new _restclient__WEBPACK_IMPORTED_MODULE_0__["RestClient"](isomorphic, "", {
            username: this.clientId,
            password: this.clientSecret
        });
        this.getBearer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["avoidSimultanousCalls"])(this.getBearer.bind(this));
        this.refreshBearer = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["avoidSimultanousCalls"])(this.refreshBearer.bind(this));
    }
    KedBearerProvider.prototype.getBearer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, expires, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.tokenInfo, token = _a.token, expires = _a.expires;
                        if (token && expires >= Date.now())
                            return [2 /*return*/, this.tokenInfo];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 6]);
                        _b = this;
                        return [4 /*yield*/, this.storage.load(this.clientId + "/" + this.tokenId)];
                    case 2:
                        _b.tokenInfo = _c.sent();
                        if (this.tokenInfo.token && this.tokenInfo.expires >= Date.now())
                            return [2 /*return*/, this.tokenInfo];
                        return [4 /*yield*/, this.refreshBearer()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, this.tokenInfo];
                    case 4:
                        e_1 = _c.sent();
                        return [4 /*yield*/, this.refreshBearer()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/, this.tokenInfo];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    KedBearerProvider.prototype.refreshBearer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, retries, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        retries = 0;
                        _c.label = 1;
                    case 1:
                        if (!(retries < 6)) return [3 /*break*/, 5];
                        console.log("Retrieving token for " + this.tokenId);
                        return [4 /*yield*/, this.client.get(this.tokenUrl, this.tokenQuery, { cache: 'reload' })];
                    case 2:
                        res = _c.sent();
                        if (res.status !== 200) {
                            console.warn("Got " + res.status + " " + res.statusText);
                            return [3 /*break*/, 4];
                        }
                        _a = this;
                        _b = {};
                        return [4 /*yield*/, res.text()];
                    case 3:
                        _a.tokenInfo = (_b.token = _c.sent(), _b.expires = Date.now() + 59 * 60 * 1000, _b);
                        console.log("Got token for " + this.tokenId + ": " + JSON.stringify(this.tokenInfo));
                        this.storage.save(this.clientId + "/" + this.tokenId, this.tokenInfo);
                        return [2 /*return*/, this.tokenInfo];
                    case 4:
                        ++retries;
                        return [3 /*break*/, 1];
                    case 5: throw new Error("Failed to retrieve token for " + JSON.stringify(this.tokenId));
                }
            });
        });
    };
    return KedBearerProvider;
}());



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/restclient.js":
/*!**************************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/restclient.js ***!
  \**************************************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return RestClient; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../kedbackend/js/dist/ked-backend-client/utils.js");
/*
declare var Buffer; // node built-in


function basicAuthHeader(username, password) {
    return "Basic " + new Buffer(username + ":" + password).toString("base64");
}
*/
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var RestClient = /** @class */ (function () {
    function RestClient(isomorphic, baseUrl, options) {
        this.isomorphic = isomorphic;
        this.baseUrl = baseUrl;
        this.options = options;
        this.fetchOptions = { mode: 'cors' };
        this.authHeader = options.bearer ?
            "Bearer " + options.bearer :
            options.username ?
                "Basic " + isomorphic.btoa(options.username + ":" + (options.password || "")) :
                null;
        this.bearerProvider = options.bearerProvider || null;
    }
    RestClient.prototype.fetch = function (path, method, headers, query, fetchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, _a, authHeader, tokenInfo, bearerProvider, _b, _c, url, res, wwwauth, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (fetchOptions && fetchOptions.cache === 'no-cache') {
                            // Workaround for back-button not respecting cache control in Chrome/Opera.
                            // Append a query parameter to force a cache entry
                            query = __assign({}, query, { nocache: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createUUID"])() });
                        }
                        queryStr = query && Object.keys(query).map(function (key) {
                            return encodeURIComponent(key) +
                                "=" +
                                encodeURIComponent(query[key]);
                        })
                            .join('&');
                        _a = this, authHeader = _a.authHeader, tokenInfo = _a.tokenInfo, bearerProvider = _a.bearerProvider;
                        if (!(!authHeader && !tokenInfo && bearerProvider)) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, bearerProvider.getBearer()];
                    case 1:
                        _b.tokenInfo = tokenInfo = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (!tokenInfo) return [3 /*break*/, 5];
                        if (!(tokenInfo.expires < Date.now())) return [3 /*break*/, 4];
                        console.log("Token expired. Refresh it:");
                        _c = this;
                        return [4 /*yield*/, bearerProvider.refreshBearer()];
                    case 3:
                        _c.tokenInfo = tokenInfo = _e.sent();
                        _e.label = 4;
                    case 4:
                        authHeader = "Bearer " + tokenInfo.token;
                        _e.label = 5;
                    case 5:
                        // In one way or another, we've concluded an Authorization header to use:
                        if (authHeader) {
                            headers.Authorization = authHeader;
                        }
                        url = this.baseUrl + path + (queryStr ? "?" + queryStr : "");
                        return [4 /*yield*/, this.isomorphic.fetch(url, __assign({}, this.fetchOptions, { headers: headers, method: method }, fetchOptions))];
                    case 6:
                        res = _e.sent();
                        if (!(res.status == 401 && this.bearerProvider)) return [3 /*break*/, 9];
                        wwwauth = res.headers.get("www-authenticate");
                        console.log("Got " + res.status + " from " + (this.baseUrl + path));
                        if (!(wwwauth && /Bearer/i.test(wwwauth))) return [3 /*break*/, 9];
                        _d = this;
                        return [4 /*yield*/, this.bearerProvider.refreshBearer()];
                    case 7:
                        _d.tokenInfo = _e.sent();
                        headers.Authorization = "Bearer " + this.tokenInfo.token;
                        return [4 /*yield*/, this.isomorphic.fetch(url, __assign({}, this.fetchOptions, { headers: headers, method: method }, fetchOptions))];
                    case 8:
                        res = _e.sent();
                        _e.label = 9;
                    case 9: return [2 /*return*/, res];
                }
            });
        });
    };
    RestClient.prototype.get = function (path, query, fetchOptions) {
        return this.fetch(path, "GET", { Accept: "application/json; text/plain" }, query, fetchOptions);
    };
    RestClient.prototype.post = function (path, data, fetchOptions) {
        return this.fetch(path, "POST", {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, null, __assign({}, fetchOptions, { body: JSON.stringify(data) }));
    };
    RestClient.prototype.delete = function (path, query, body, fetchOptions) {
        return this.fetch(path, "DELETE", { Accept: "application/json; text/plain" }, query, __assign({}, fetchOptions, { body: body }));
    };
    return RestClient;
}());



/***/ }),

/***/ "../kedbackend/js/dist/ked-backend-client/utils.js":
/*!*********************************************************!*\
  !*** ../kedbackend/js/dist/ked-backend-client/utils.js ***!
  \*********************************************************/
/*! exports provided: createUUID, avoidSimultanousCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return createUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avoidSimultanousCalls", function() { return avoidSimultanousCalls; });
function createUUID() {
    // Decent solution from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    var d = Date.now();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
}
function avoidSimultanousCalls(method) {
    var ongoingPromise = null;
    return function () {
        if (!ongoingPromise) {
            ongoingPromise = method.apply(this, arguments).then(function (result) {
                ongoingPromise = null;
                return result;
            });
        }
        return ongoingPromise;
    };
}


/***/ }),

/***/ "../kedbackend/js/dist/ked-model-migrator/index.js":
/*!*********************************************************!*\
  !*** ../kedbackend/js/dist/ked-model-migrator/index.js ***!
  \*********************************************************/
/*! exports provided: KedModelMigratorMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedModelMigratorMixin", function() { return KedModelMigratorMixin; });
/* harmony import */ var _migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate */ "../kedbackend/js/dist/ked-model-migrator/migrate.js");

var KedModelMigratorMixin = function (client) {
    if (client.__migrator_mixed_in)
        return;
    client.__migrator_mixed_in = true;
    var get = client.get;
    var list = client.list;
    client.get = function (table, id, options) {
        var include = options && options.include;
        return get.apply(this, arguments).then(function (result) {
            Object(_migrate__WEBPACK_IMPORTED_MODULE_0__["default"])(result, table, include && include.toString().split(','));
            return result;
        });
    };
    client.list = function (table, options) {
        var include = options && options.include;
        return list.apply(this, arguments).then(function (result) {
            result.forEach(function (doc) { return Object(_migrate__WEBPACK_IMPORTED_MODULE_0__["default"])(doc, table, include && include.toString().split(',')); });
            return result;
        });
    };
    return client;
};


/***/ }),

/***/ "../kedbackend/js/dist/ked-model-migrator/migrate-course.js":
/*!******************************************************************!*\
  !*** ../kedbackend/js/dist/ked-model-migrator/migrate-course.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrateCourse; });
/* harmony import */ var _migrate_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate-task */ "../kedbackend/js/dist/ked-model-migrator/migrate-task.js");

function migrateCourse(course, graphs) {
    if (!course.modules)
        course.modules = [];
    course.modules.forEach(function (module) {
        if (!module.resources) {
            module.resources = [];
        }
        if (!module.taskIds) {
            module.taskIds = [];
        }
    });
    if (!course.responsibleTeachers) {
        course.responsibleTeachers = [];
    }
    // Earlier wrong spelling of resources
    if ('resourses' in course && !('resources' in course)) {
        course.resources = course.resourses;
        delete course.resourses;
    }
    if (!course.resources) {
        course.resources = [];
    }
    if (graphs) {
        graphs.forEach(function (label) {
            switch (label) {
                case 'tasks':
                    course.tasks.forEach(function (task) { return Object(_migrate_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task); });
                    break;
            }
        });
    }
}


/***/ }),

/***/ "../kedbackend/js/dist/ked-model-migrator/migrate-task.js":
/*!****************************************************************!*\
  !*** ../kedbackend/js/dist/ked-model-migrator/migrate-task.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrateTask; });
function migrateTask(task) {
    if (!task.resources)
        task.resources = [];
}


/***/ }),

/***/ "../kedbackend/js/dist/ked-model-migrator/migrate.js":
/*!***********************************************************!*\
  !*** ../kedbackend/js/dist/ked-model-migrator/migrate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrate; });
/* harmony import */ var _migrate_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate-course */ "../kedbackend/js/dist/ked-model-migrator/migrate-course.js");
/* harmony import */ var _migrate_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrate-task */ "../kedbackend/js/dist/ked-model-migrator/migrate-task.js");


function migrate(doc, table, graphs) {
    switch (table) {
        case "courses":
            Object(_migrate_course__WEBPACK_IMPORTED_MODULE_0__["default"])(doc, graphs);
            break;
        case "tasks":
            Object(_migrate_task__WEBPACK_IMPORTED_MODULE_1__["default"])(doc);
            break;
    }
}


/***/ }),

/***/ "./node_modules/moment/locale sync recursive sv|en":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale sync sv|en ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive sv|en";

/***/ }),

/***/ "./src/access-control/get-user-claims.ts":
/*!***********************************************!*\
  !*** ./src/access-control/get-user-claims.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUserClaims; });
function getUserClaims(user) {
    return [{
            type: "email",
            value: user.mail
        }, {
            type: "school",
            value: user.school
        }].concat(user.roles.map(function (role) { return ({
        type: "role",
        value: role
    }); })).concat(user.roles.map(function (role) { return ({
        type: "schoolRole",
        value: user.school + "/" + role
    }); }));
}


/***/ }),

/***/ "./src/access-control/index.ts":
/*!*************************************!*\
  !*** ./src/access-control/index.ts ***!
  \*************************************/
/*! exports provided: getUserClaims, IMPERSONATION_QUERY_PARAMS, hasAccess, hasReadAccess, hasWriteAccess, hasShareAccess, isTeacherAtSchool, impersonationEnv, actAs, preserveImpersonationQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPERSONATION_QUERY_PARAMS", function() { return IMPERSONATION_QUERY_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return hasAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasReadAccess", function() { return hasReadAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasWriteAccess", function() { return hasWriteAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShareAccess", function() { return hasShareAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeacherAtSchool", function() { return isTeacherAtSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impersonationEnv", function() { return impersonationEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actAs", function() { return actAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preserveImpersonationQuery", function() { return preserveImpersonationQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _get_user_claims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-claims */ "./src/access-control/get-user-claims.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserClaims", function() { return _get_user_claims__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");






var IMPERSONATION_QUERY_PARAMS = ["user", "role", "school", "debug", "testVersion", "testversion", "schoolType", "schooltype"];
function hasAccess(doc, requestedRight) {
    var claims = Object(_get_user_claims__WEBPACK_IMPORTED_MODULE_2__["default"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser);
    var result = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["hasAccess"])(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["DocumentAccess"].fromStringArray(doc.acl || []), claims, requestedRight);
    //console.log(`Has ${requestedRight} access to ${doc.name}/${doc.id}: ${result}`);
    return result;
}
function hasReadAccess(doc) {
    return hasAccess(doc, 'R');
}
function hasWriteAccess(doc) {
    return hasAccess(doc, 'W');
}
function hasShareAccess(doc) {
    return hasAccess(doc, 'S');
}
function isTeacherAtSchool(school) {
    var isTeacher = _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser.roles.some(function (role) { return role === 'EMPLOYEE' || role === 'ADMIN'; });
    var belongsToSchool = (school || "").toLowerCase() === _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser.school.toLowerCase();
    return (isTeacher && belongsToSchool);
}
var impersonationEnv = {
    actAs: function (options) {
        var role = options.role, school = options.school, url = options.url;
        var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["parseQueryString"])(location.search);
        var newQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, currentQuery, { role: role, school: school });
        var newQueryString = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["generateQueryString"])(newQuery);
        if (url) {
            location.href = "" + url + newQueryString;
        }
        else {
            location.hash = "#";
            location.search = newQueryString;
        }
    }
};
function actAs(options) {
    impersonationEnv.actAs(options);
}
function preserveImpersonationQuery(url, query) {
    var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["parseQueryString"])(location.search);
    var newQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, query);
    for (var _i = 0, IMPERSONATION_QUERY_PARAMS_1 = IMPERSONATION_QUERY_PARAMS; _i < IMPERSONATION_QUERY_PARAMS_1.length; _i++) {
        var param = IMPERSONATION_QUERY_PARAMS_1[_i];
        if (currentQuery[param])
            newQuery[param] = currentQuery[param];
    }
    var newQueryString = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["generateQueryString"])(newQuery);
    return "" + url + newQueryString;
}


/***/ }),

/***/ "./src/apis/eds-stubdata/ActiveCourses.ts":
/*!************************************************!*\
  !*** ./src/apis/eds-stubdata/ActiveCourses.ts ***!
  \************************************************/
/*! exports provided: courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courses", function() { return courses; });
var courses = {
    "courses": [
        // Test data for Gymnasium students (made-up!)
        {
            "courseId": "2070d120-30ad-49e9-89c3-9c584a6cfa29",
            "periodName": "HT2017",
            "periodGoalGrade": "A",
            "name": "Naturkunskap 1b",
            "shortName": "XXX",
            "courseSteps": []
        },
        // Test data once retrieved from EDS test API for ground-school students:
        {
            "courseId": "2070d120-30ad-49e9-89c3-9c584a6cfa2c",
            "periodName": "VT2017",
            "periodGoalGrade": "A",
            "name": "Engelska",
            "shortName": "EN",
            "courseSteps": [
                {
                    "stepId": "61f02bc7-1a0d-4b80-9bf1-07b6280379db",
                    "name": "1. Lära känna varandra",
                    "shortName": "1",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903600)\/"
                },
                {
                    "stepId": "a34c07c7-3932-4f64-87f9-feb5646db3db",
                    "name": "10. En saga",
                    "shortName": "10",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903740)\/"
                },
                {
                    "stepId": "e931f2bb-5727-4d99-b9e5-1bababfbc2e9",
                    "name": "11. Det här är jag",
                    "shortName": "11",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903757)\/"
                },
                {
                    "stepId": "ab823339-90ac-4b7f-a895-869d25cef504",
                    "name": "12. Jag och min familj",
                    "shortName": "12",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903770)\/"
                },
                {
                    "stepId": "53e00313-4980-4ab2-84ff-abe80ecd72d2",
                    "name": "13. Jag och mina vänner",
                    "shortName": "13",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903787)\/"
                },
                {
                    "stepId": "828796e9-84ad-4496-aa78-7850dd5bb23a",
                    "name": "14. Jag och min fritid",
                    "shortName": "14",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903803)\/"
                },
                {
                    "stepId": "31e08f37-4ec5-4366-9af6-bca5b9070198",
                    "name": "15. The Blog",
                    "shortName": "15",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111904117)\/"
                },
                {
                    "stepId": "4f88e9a3-9b36-47af-9686-d28b00ca98fc",
                    "name": "16. Sport",
                    "shortName": "16",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474888651180)\/"
                },
                {
                    "stepId": "abb57443-be68-48b7-a719-3454afbf3daa",
                    "name": "17. Musik",
                    "shortName": "17",
                    "isCompleted": true,
                    "completedDate": "\/Date(1477656328037)\/"
                },
                {
                    "stepId": "964f7ac3-8cf7-4042-912f-58ffb6812ddb",
                    "name": "18. Vykort",
                    "shortName": "18",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "3002e95c-8de0-4914-a754-0773a18606bf",
                    "name": "19. Läsa noveller",
                    "shortName": "19",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d8708a56-e4fb-4ad3-84ef-bb40481eaf80",
                    "name": "2. Veckans aktiviteter",
                    "shortName": "2",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903613)\/"
                },
                {
                    "stepId": "46915f18-288c-44df-b224-1852d221b6ca",
                    "name": "20. Summer camp",
                    "shortName": "20",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "db22d300-0126-4a32-950d-aaf2f7142627",
                    "name": "21. Hus och hem",
                    "shortName": "21",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "68111c18-e610-45c0-b290-9dd3cede1e48",
                    "name": "22. Sightseeing",
                    "shortName": "22",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4c84dd89-66f2-4ea1-bce8-3fde1724dcc9",
                    "name": "23. Vid matbordet",
                    "shortName": "23",
                    "isCompleted": true,
                    "completedDate": "\/Date(1488205880703)\/"
                },
                {
                    "stepId": "75943640-f031-41da-8495-9d87b5804a3e",
                    "name": "24. Traditioner",
                    "shortName": "24",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "72021bc2-0ea8-4d39-87fa-11cc976e9c9f",
                    "name": "25. Staying with a host family",
                    "shortName": "25",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "574e1626-cad3-4220-8ba7-b443f03830b4",
                    "name": "26. Det engelska språket",
                    "shortName": "26",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "50a3682e-057d-45b1-81b5-e2eaa8b6d16b",
                    "name": "27. Skolan och framtidsdrömmar",
                    "shortName": "27",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "15a47a71-989a-4348-8fcb-a10683d263ec",
                    "name": "28. Identitet",
                    "shortName": "28",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "5717f099-477f-433d-b10a-c2bf0dfe6f8e",
                    "name": "29. Att läsa en bok",
                    "shortName": "29",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "0443638f-a546-40d8-a533-e2d12abef609",
                    "name": "3. Fira ett speciellt tillfälle",
                    "shortName": "3",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903630)\/"
                },
                {
                    "stepId": "54ff6488-f0ae-4fb6-b4e4-0f29d9274b23",
                    "name": "30. The World Today",
                    "shortName": "30",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "2ab8a527-cd74-4847-97a6-79f629e22e84",
                    "name": "31. Entertainment",
                    "shortName": "31",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "1b5d42ff-9615-439a-9ae2-89779040bf91",
                    "name": "32. Interview",
                    "shortName": "32",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "29ffc098-d26d-4f3b-a295-b5f065923bf2",
                    "name": "33. Filmed books",
                    "shortName": "33",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4d5fe734-9af9-42b8-8c50-920c9a450bc1",
                    "name": "34. See the film",
                    "shortName": "34",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "dd87c548-4a3a-4a62-9114-70ec7e713aee",
                    "name": "35. Write a bestseller",
                    "shortName": "35",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "1fb5ce80-faf0-465c-9be8-c9bc722297bb",
                    "name": "36. The English-speaking World",
                    "shortName": "36",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f0007f75-0d1f-48c7-8f19-bb2e9f2c5377",
                    "name": "37. Poetry",
                    "shortName": "37",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "addebfcc-5b3c-4360-b819-0de0269a5e2d",
                    "name": "38. Rhetoric",
                    "shortName": "38",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "23c16db5-d435-49d3-8daa-c2b6433366b7",
                    "name": "39. An important issue",
                    "shortName": "39",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "e4d22285-735a-4bab-8884-ca5b736ebb88",
                    "name": "4. Åka någonstans",
                    "shortName": "4",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903647)\/"
                },
                {
                    "stepId": "4c489a2b-ee79-4f89-9818-787632abfba8",
                    "name": "40. Write a speech",
                    "shortName": "40",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "9667976c-83ab-4b9e-8a76-d330983c28f5",
                    "name": "41. Changing world",
                    "shortName": "41",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "6bb14af9-9094-4938-be2d-2725a931895c",
                    "name": "42. An organization",
                    "shortName": "42",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "fe313a1a-dc5c-4890-b11e-b8e109db689b",
                    "name": "43. The written word",
                    "shortName": "43",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f1a592ec-6095-4ae4-9b9e-ebd527c18a2a",
                    "name": "44. Communication",
                    "shortName": "44",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "5f6a5e15-462b-40ab-981b-b93e5fc0ee22",
                    "name": "45. Giving a lecture",
                    "shortName": "45",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "8c9b57c1-cf05-4465-84b2-68cf353b1075",
                    "name": "5. Min semester",
                    "shortName": "5",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903660)\/"
                },
                {
                    "stepId": "1bd11f36-6438-40b5-ad4c-4b02b6f481d0",
                    "name": "6. Låt oss prata om det",
                    "shortName": "6",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903677)\/"
                },
                {
                    "stepId": "d49c08ee-c0e6-4599-b79f-5efd811fe33c",
                    "name": "7. Jag är en turist",
                    "shortName": "7",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903693)\/"
                },
                {
                    "stepId": "2def3414-de65-46c0-8f48-f8aa18be7b7c",
                    "name": "8. Vänner över hela världen",
                    "shortName": "8",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903707)\/"
                },
                {
                    "stepId": "ea8ff1a0-4bad-43ac-b328-62dff3e4d08e",
                    "name": "9. Hjältar och kända personer",
                    "shortName": "9",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472111903723)\/"
                }
            ]
        },
        {
            "courseId": "9d129e6a-9557-4849-a53f-416725502895",
            "periodName": "VT2017",
            "periodGoalGrade": "C",
            "name": "Matematik",
            "shortName": "MA",
            "courseSteps": [
                {
                    "stepId": "f1af6c2c-799a-4a3d-9985-c423940e91c0",
                    "name": "1. Tal och mönster",
                    "shortName": "1",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815917)\/"
                },
                {
                    "stepId": "4a34c53d-93d0-4247-ba19-9ce9dbed6de5",
                    "name": "10. Lägesmått och diagram",
                    "shortName": "10",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401816200)\/"
                },
                {
                    "stepId": "0816a2b0-3aa7-41a9-bc39-971ccc7bd79c",
                    "name": "11. Räknesätt",
                    "shortName": "11",
                    "isCompleted": true,
                    "completedDate": "\/Date(1476103754013)\/"
                },
                {
                    "stepId": "fdc90a9c-b06a-48b1-9781-606c230c425c",
                    "name": "12. Geometri",
                    "shortName": "12",
                    "isCompleted": true,
                    "completedDate": "\/Date(1481279716607)\/"
                },
                {
                    "stepId": "bfd77c92-6636-45fa-9002-d813beaa56c3",
                    "name": "13. Rymdgeometri",
                    "shortName": "13",
                    "isCompleted": true,
                    "completedDate": "\/Date(1489669353170)\/"
                },
                {
                    "stepId": "58a619a1-b99a-487b-bbd5-abd31a903e5a",
                    "name": "14. Räknemetoder och algebra",
                    "shortName": "14",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "55b88760-22aa-452a-8a57-131346669aad",
                    "name": "15. Problemet",
                    "shortName": "15",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "47f16476-ea47-40a2-a073-7ac4b36c4bf0",
                    "name": "16. Delen och det hela",
                    "shortName": "16",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "704e3d5b-fce7-409b-b989-340b2d7b2e18",
                    "name": "17. Geometri och vinklar",
                    "shortName": "17",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "db5693ea-48ef-44ce-8107-be9915ef5256",
                    "name": "18. Funktioner",
                    "shortName": "18",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f9250c97-d932-4bf6-989e-204c0ef582c9",
                    "name": "19. Proportionalitet",
                    "shortName": "19",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d0411b1d-c9b4-452f-9fb6-ea7206755ecd",
                    "name": "2. Längd och räknesätt",
                    "shortName": "2",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815930)\/"
                },
                {
                    "stepId": "616b742e-b175-45c3-a926-fda3e4d8af80",
                    "name": "20. Förflyttningsgraf",
                    "shortName": "20",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f8a9b467-6ba6-4d9a-8174-87e369062621",
                    "name": "21. Likformighet",
                    "shortName": "21",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "8fe483d7-b78b-4d9d-9402-15d57da05832",
                    "name": "22. Bråk, sannolikhet och kombinatorik",
                    "shortName": "22",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "7eb39090-6461-4ce4-b008-dd98f8a57679",
                    "name": "23. Negativa tal, procentsatser och förändringsfaktor",
                    "shortName": "23",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "34cb3911-3a78-4773-a823-2f9054a9a925",
                    "name": "24. Algebra och ekvationer",
                    "shortName": "24",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "49abad1a-dd4b-4b0b-8d1f-752796723ca1",
                    "name": "25. Lotteriet",
                    "shortName": "25",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "6756d8bc-e31a-4139-8d95-8f47916a361b",
                    "name": "26. Geometriska samband",
                    "shortName": "26",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "0f0efee5-e617-4bca-b84e-e50e32aac90b",
                    "name": "27. Rymdgeometri",
                    "shortName": "27",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "de4e12d1-f678-4b1a-ac7b-5d62cdaeb52d",
                    "name": "28. Storheter och proportionella samband",
                    "shortName": "28",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "80323de8-fe66-4750-bb2e-d0dbabbb3dac",
                    "name": "29. Funktioner och grafer",
                    "shortName": "29",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "68894968-8a16-497a-8b97-711df61fca71",
                    "name": "3. Tal och enheter",
                    "shortName": "3",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815947)\/"
                },
                {
                    "stepId": "fa32d170-ab25-466d-91a8-a88f955cc5bc",
                    "name": "30. Förpackning",
                    "shortName": "30",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4c31e00f-aeda-409f-8583-9805c0bb4f7f",
                    "name": "31. Negativa tal och statistik",
                    "shortName": "31",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "691bb48b-070d-4227-8fb6-2edce2fc6be4",
                    "name": "32. Bråk",
                    "shortName": "32",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "320481da-e417-4c52-af23-0076b694794d",
                    "name": "33. Procent och förändringsfaktor",
                    "shortName": "33",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f3a4338d-504e-4092-9610-ef2775b5b411",
                    "name": "34. Potenser",
                    "shortName": "34",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f43d7931-158c-4759-b7be-b14cf68c939a",
                    "name": "35. Solsystemet",
                    "shortName": "35",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "8931fc26-693a-41bd-8040-e01a6d22b2b5",
                    "name": "36. Ekvationer och algebra",
                    "shortName": "36",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "94370d70-dcbd-4eef-baf1-e92f6680b966",
                    "name": "37. Funktioner och grafer",
                    "shortName": "37",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "ab0535df-68cc-4c10-86eb-afba3e199d0a",
                    "name": "38. Geometri",
                    "shortName": "38",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4ba66c7a-7d8f-4576-aefa-c09397b99db0",
                    "name": "39. Sannolikhet",
                    "shortName": "39",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "c4e12bc8-1428-4d1b-a273-e947fa0574f3",
                    "name": "4. Multiplikation och division",
                    "shortName": "4",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815963)\/"
                },
                {
                    "stepId": "0b75ce2b-89de-432a-9eee-d6a7b74b6f38",
                    "name": "40. Chokladfabriken",
                    "shortName": "40",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "dba4a055-c143-4bd4-b436-3eb508ebe658",
                    "name": "41. Genrella lösningsmetoder",
                    "shortName": "41",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "db193873-0a8c-4073-8618-99c5a56f710b",
                    "name": "42. Avancerad ekvationslösning",
                    "shortName": "42",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "357ee123-1d77-4568-8fa1-78b5662e12b3",
                    "name": "43. Problemlösning",
                    "shortName": "43",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "015cdd58-7b31-4a89-a9fe-cd0bb45e7434",
                    "name": "44. Avancerad problemlösning",
                    "shortName": "44",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "785e12ac-4a71-4acf-bf40-27652faf20ff",
                    "name": "45. Vad är matematik?",
                    "shortName": "45",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "6372cdb6-91cf-4f0f-ac9c-8578c00760ff",
                    "name": "5. Form och storlek",
                    "shortName": "5",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815977)\/"
                },
                {
                    "stepId": "c781e529-fefa-43ce-99fb-d232585a1e1a",
                    "name": "6. Tid och räknesätt",
                    "shortName": "6",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401815993)\/"
                },
                {
                    "stepId": "5df2975c-f84e-4620-abe9-5c47ebcb0f90",
                    "name": "7. Bråk och decimaltal",
                    "shortName": "7",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401816007)\/"
                },
                {
                    "stepId": "9cbb966f-32df-48cf-be77-5e00d466d63a",
                    "name": "8. Procent och bråk",
                    "shortName": "8",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401816023)\/"
                },
                {
                    "stepId": "b1b59f38-63c6-428a-a512-220b7d838e5f",
                    "name": "9. Sannolikhet och bråk",
                    "shortName": "9",
                    "isCompleted": true,
                    "completedDate": "\/Date(1474401816040)\/"
                }
            ]
        },
        {
            "courseId": "cfdc5bc0-ea41-4683-b941-d980de4e82a5",
            "periodName": "VT2017",
            "periodGoalGrade": "D",
            "name": "Spanska, språkval",
            "shortName": "M2SP",
            "courseSteps": [
                {
                    "stepId": "16bb0ce6-60ac-4937-8e60-dd633cd7c5f0",
                    "name": "1. Första mötet",
                    "shortName": "1",
                    "isCompleted": true,
                    "completedDate": "\/Date(1476255771933)\/"
                },
                {
                    "stepId": "f3504ab6-386c-42d2-882b-668719f329b5",
                    "name": "10. Turist",
                    "shortName": "10",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d2de4e01-44dd-4ba7-a69f-075450c627a7",
                    "name": "11. Skolan",
                    "shortName": "11",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "58e4d577-05f5-4071-8745-a41571df3019",
                    "name": "12. Fritiden",
                    "shortName": "12",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d8a079f9-3fef-4fbc-b868-6b050e3832d1",
                    "name": "13. Stämma träff",
                    "shortName": "13",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d62f63a1-3806-4650-b6a9-354eccd056b9",
                    "name": "14. Sport och musik",
                    "shortName": "14",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "b475dc9d-e694-4eb9-8c78-b150494dfe84",
                    "name": "15. Presentera dig själv",
                    "shortName": "15",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "009c68f6-db7e-44a3-bc5c-d1e2e78d327c",
                    "name": "16. När och fjärran",
                    "shortName": "16",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "a124f250-2fb7-4b57-b2bc-b72e0e8fd21a",
                    "name": "17. Mat och traditioner",
                    "shortName": "17",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "ec6ccef4-58b5-4111-b152-8a7a7f546bb8",
                    "name": "18. Planera en resa",
                    "shortName": "18",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "ec96d506-112e-4b38-8946-6f19130bd741",
                    "name": "19. Etikett och regler",
                    "shortName": "19",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "0b52b5e6-bbc7-4c78-815c-efc30fa984af",
                    "name": "2. Min familj",
                    "shortName": "2",
                    "isCompleted": true,
                    "completedDate": "\/Date(1488368769260)\/"
                },
                {
                    "stepId": "e05c674b-1097-4646-ac47-1d8c4342a343",
                    "name": "20. Resan",
                    "shortName": "20",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f6f8cffb-69ae-4148-81fa-35e1f984f836",
                    "name": "21. Boende",
                    "shortName": "21",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "aee9167c-2f65-4f8d-a94b-684458c300bc",
                    "name": "22. Familjeliv",
                    "shortName": "22",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "115f28de-fe33-435e-a7fb-36fea0a37cce",
                    "name": "23. Bostadsläge",
                    "shortName": "23",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d5e8b9e2-b84e-4af7-8b20-e37896dec41d",
                    "name": "24. Min stad",
                    "shortName": "24",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "c2f15857-a682-4b02-8d00-ec042858e799",
                    "name": "25. Presentera någon annan",
                    "shortName": "25",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "1bc87327-1e3f-42f6-b839-e9b385200149",
                    "name": "26. Media",
                    "shortName": "26",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "36f23967-f30b-4cbc-a69c-4191094e182d",
                    "name": "27. En tv-kväll",
                    "shortName": "27",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "32ead07a-fa58-4770-ac20-3a31f27069cf",
                    "name": "28. Tidningar",
                    "shortName": "28",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "598d7b7e-97b6-4ff3-b7a7-8f5c45c164cd",
                    "name": "29. Film",
                    "shortName": "29",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "12e8d03b-7d80-434c-9201-7f852f5c114c",
                    "name": "3. Fler siffror, månader och väder",
                    "shortName": "3",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "98f0825e-e200-43f4-9f4b-866bb50d28dd",
                    "name": "30. Tidningen",
                    "shortName": "30",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "956757b9-979f-4d12-be01-8b30970b603e",
                    "name": "31. Min framtid",
                    "shortName": "31",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "c2003358-0ce9-409b-82fa-e7a0bff891fc",
                    "name": "32. Ung i framtiden",
                    "shortName": "32",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "1c1ca040-f96d-46af-862b-a978698e2745",
                    "name": "33. Insändare",
                    "shortName": "33",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "64f620bb-8c77-4de2-88e2-feaa21f4c41e",
                    "name": "34. På gymnasiet",
                    "shortName": "34",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4c3c19eb-0447-47cf-bb72-8d1176118c71",
                    "name": "35. Framtiden",
                    "shortName": "35",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "c3779788-030e-46f3-89a7-a15015931a51",
                    "name": "4. Det här är jag",
                    "shortName": "4",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "a6628c06-443a-481d-96fc-c019800e8e4e",
                    "name": "5. Boken",
                    "shortName": "5",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "f34e1dee-1dd3-4bcd-89b4-f0ba6638c65c",
                    "name": "6. På café",
                    "shortName": "6",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "9ffb3665-0e3a-423a-af93-c5006a2a4839",
                    "name": "7. Att handla",
                    "shortName": "7",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "63e62432-ba1e-4f96-911c-52bd756c803e",
                    "name": "8. I staden",
                    "shortName": "8",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "3c93cf1d-2e82-452b-9333-16b336fdda6d",
                    "name": "9. På hotellet",
                    "shortName": "9",
                    "isCompleted": null,
                    "completedDate": null
                }
            ]
        },
        {
            "courseId": "3cc7c710-63fb-49bd-8dc5-b95be6374122",
            "periodName": "VT2017",
            "periodGoalGrade": "C",
            "name": "Svenska",
            "shortName": "SV",
            "courseSteps": [
                {
                    "stepId": "379585a4-f602-4086-920d-d506d2e93fed",
                    "name": "1. Min bästa sak",
                    "shortName": "1",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179490)\/"
                },
                {
                    "stepId": "5d90747a-d5ff-4c12-818c-d301e4cf2405",
                    "name": "10. Quizkampen",
                    "shortName": "10",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179630)\/"
                },
                {
                    "stepId": "fb271830-5368-43dc-b911-3d65af082e26",
                    "name": "11. Ta kontakt",
                    "shortName": "11",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179647)\/"
                },
                {
                    "stepId": "bf7a93a6-24af-4d01-8839-aa4f3f6b438d",
                    "name": "12. Samla fakta och presentera",
                    "shortName": "12",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179660)\/"
                },
                {
                    "stepId": "2a712108-e5d7-4ffb-a55f-80ff195ea946",
                    "name": "13. Påverka och uttrycka åsikter",
                    "shortName": "13",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179943)\/"
                },
                {
                    "stepId": "94b5abaa-0471-4ab4-be3c-c0b0d4098609",
                    "name": "14. Språk i Sverige",
                    "shortName": "14",
                    "isCompleted": true,
                    "completedDate": "\/Date(1475049857367)\/"
                },
                {
                    "stepId": "e0169353-8ac0-4fcd-8a45-4cfffc5fe55e",
                    "name": "15. Min förebild",
                    "shortName": "15",
                    "isCompleted": true,
                    "completedDate": "\/Date(1480951054357)\/"
                },
                {
                    "stepId": "e12c8fa6-8aaa-4598-8e6f-5c6d318163db",
                    "name": "16. Förstå, minnas och lära",
                    "shortName": "16",
                    "isCompleted": true,
                    "completedDate": "\/Date(1490605558217)\/"
                },
                {
                    "stepId": "1a19c53b-36f0-4309-adfd-26a307b43dbd",
                    "name": "17. Använda språket i olika sammanhang",
                    "shortName": "17",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "31aa5b91-59d0-41db-ab2e-0bdec6342dfe",
                    "name": "18. Sammanfatta och presentera",
                    "shortName": "18",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "48747057-835d-40fd-811f-dde4fd48f3a0",
                    "name": "19. Den moderna ungdomen",
                    "shortName": "19",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4708aedf-3b7d-4ec0-80c9-769de4cdda9b",
                    "name": "2. Författare",
                    "shortName": "2",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179507)\/"
                },
                {
                    "stepId": "4258123d-d122-4058-8120-9de7d1fb3d66",
                    "name": "20. Att vara ungdom idag",
                    "shortName": "20",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "3d94e56d-9d38-4d3c-a3cb-d4f2d13814c9",
                    "name": "21. Upplysningstiden och romantiken",
                    "shortName": "21",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "5d8c3d70-e996-4236-9326-982ed128340c",
                    "name": "22. Realismen och modernismen",
                    "shortName": "22",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "02037ab3-ffdf-4fe2-a172-26de404c58bc",
                    "name": "23. Våga utanför ramarna",
                    "shortName": "23",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "7c376d37-0170-49ac-865d-5479d82ce806",
                    "name": "24. Modern litteratur",
                    "shortName": "24",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "7131b28d-89d1-40f6-8d87-80fd0c15486d",
                    "name": "25. Budskapet",
                    "shortName": "25",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "30c876a6-48a7-4fc7-a49f-ad44bac3d4bb",
                    "name": "26. Övertyga och påverka",
                    "shortName": "26",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "97b328ea-3342-41d6-a1c5-91e9c1d17a08",
                    "name": "27. Språkbruk genom tiderna",
                    "shortName": "27",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "e4ec472d-b31c-4d20-886c-0162e1159e55",
                    "name": "28. Tidningstexter",
                    "shortName": "28",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "47ccf40e-28a1-4432-91ed-f3013eb97aa8",
                    "name": "29. Samtala om texter",
                    "shortName": "29",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "6c89c307-adff-46b8-9d75-2ecb1fc714ce",
                    "name": "3. Leka med ord",
                    "shortName": "3",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179520)\/"
                },
                {
                    "stepId": "2145d4aa-60db-42f9-918b-49f3bf714786",
                    "name": "30. Språkets möjligheter",
                    "shortName": "30",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "c211ba3d-b8fa-4c5c-bbe1-bcfea2a243b5",
                    "name": "31. Dikt och diktanalys",
                    "shortName": "31",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "fbeb356a-5c9d-4114-9a4b-9ac2325913d0",
                    "name": "32. Berättarteknik i skönlitteratur",
                    "shortName": "32",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "4446df13-5bb8-4cf1-beb4-4d2b43bf97b8",
                    "name": "33. Utveckla ditt skönlitterära skrivande",
                    "shortName": "33",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "47e0c5bf-2898-4cc3-8119-2346d4c6c78f",
                    "name": "34. Noveller",
                    "shortName": "34",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "3b072a72-9f2c-4439-b095-33edb5ae3276",
                    "name": "35. Det fria ordet - En skönlitterär djupdykning",
                    "shortName": "35",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "56a2b991-63f5-4f1c-8e48-1bc1f83fa9a9",
                    "name": "36. Debatt och retorik",
                    "shortName": "36",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "7b0e633b-65b5-407d-8bdd-d77673d1be1f",
                    "name": "37. Argumenterande texter",
                    "shortName": "37",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d76356c9-2fdd-4845-aa7a-1bf54547a34e",
                    "name": "38. Analysera tal",
                    "shortName": "38",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "eb312838-f59b-4815-987f-d7f11973a95f",
                    "name": "39. Tal",
                    "shortName": "39",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "48559f29-37cb-451f-8f40-354101a413af",
                    "name": "4. Skrivarskola",
                    "shortName": "4",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179537)\/"
                },
                {
                    "stepId": "a054f1e2-b296-4185-b9b7-dac94f600ab3",
                    "name": "40. Muntlig argumentation",
                    "shortName": "40",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "2e5ff9f3-ac8e-4fea-abe2-a7534e64e25f",
                    "name": "41. Modern lyrik",
                    "shortName": "41",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "ceed4cee-dd38-40b9-af97-43b0af244a41",
                    "name": "42. Nobelpriset i litteratur",
                    "shortName": "42",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "2df27363-1a57-4129-96dc-5e2a26dc0209",
                    "name": "43. Analysmetod i akademiska uppsatser",
                    "shortName": "43",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "71062f38-2874-4d6a-96b9-8128a10e3559",
                    "name": "44. Litteratur som väckt debatt genom tiderna",
                    "shortName": "44",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "d0e40b55-4638-45fd-b9f3-924c68c673cc",
                    "name": "45. Analysera vetenskapligt",
                    "shortName": "45",
                    "isCompleted": null,
                    "completedDate": null
                },
                {
                    "stepId": "5954c057-cdc2-4293-bb9e-8b96ec27e04c",
                    "name": "5. Min bästa sak på äventyr",
                    "shortName": "5",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179553)\/"
                },
                {
                    "stepId": "5b9e5c30-c9de-4092-b7e6-0dbb4e3513ff",
                    "name": "6. Faktatext",
                    "shortName": "6",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179567)\/"
                },
                {
                    "stepId": "2b823257-8dad-4f6b-8f2b-539e4dae0bd4",
                    "name": "7. Tal- och skriftspråk",
                    "shortName": "7",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179583)\/"
                },
                {
                    "stepId": "28e73fd2-c40a-4319-8b93-ec0f1b658c81",
                    "name": "8. Dikter",
                    "shortName": "8",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179600)\/"
                },
                {
                    "stepId": "35a5926a-8cb3-4c9d-a7ef-714761935755",
                    "name": "9. Olika texttyper",
                    "shortName": "9",
                    "isCompleted": true,
                    "completedDate": "\/Date(1472559179613)\/"
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/apis/eds-stubdata/LatestAssessments.ts":
/*!****************************************************!*\
  !*** ./src/apis/eds-stubdata/LatestAssessments.ts ***!
  \****************************************************/
/*! exports provided: assessments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assessments", function() { return assessments; });
var assessments = {
    "assessments": [
        {
            "publishDateTime": "2017-08-28T09:05:43.16",
            "text": "Testbedömning Engelsa 5",
            "gradeName": "C",
            "courseUnitName": "1. Ready, steady, go!"
        },
        {
            "publishDateTime": "2017-08-28T08:59:21.253",
            "text": "Testbedömning...\r\n/ Kim test",
            "gradeName": "C",
            "courseUnitName": "Tema 1"
        },
        {
            "publishDateTime": "2017-08-10T09:43:36.797",
            "text": "Test",
            "gradeName": "D",
            "courseUnitName": "Block 1"
        }
    ]
};


/***/ }),

/***/ "./src/apis/eds-stubdata/StudentGoals.ts":
/*!***********************************************!*\
  !*** ./src/apis/eds-stubdata/StudentGoals.ts ***!
  \***********************************************/
/*! exports provided: studyPlans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studyPlans", function() { return studyPlans; });
var studyPlans = {
    "StudyPlans": [
        {
            "courseUnitName": "Hem- och konsumentkunskap",
            "finalGoalGrade": "B",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Historia",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Fysik",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Geografi",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "D"
                }
            ]
        },
        {
            "courseUnitName": "Matematik",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Samhällskunskap",
            "finalGoalGrade": "B",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "D"
                }
            ]
        },
        {
            "courseUnitName": "Engelska",
            "finalGoalGrade": "A",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "A"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "B"
                }
            ]
        },
        {
            "courseUnitName": "Religionskunskap",
            "finalGoalGrade": "B",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Idrott och hälsa",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "D"
                }
            ]
        },
        {
            "courseUnitName": "Biologi",
            "finalGoalGrade": "D",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Svenska",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Teknik",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Bild",
            "finalGoalGrade": "B",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "C"
                }
            ]
        },
        {
            "courseUnitName": "Spanska, språkval",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": ""
                }
            ]
        },
        {
            "courseUnitName": "Kemi",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "B"
                }
            ]
        },
        {
            "courseUnitName": "Slöjd",
            "finalGoalGrade": "C",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "D"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "B"
                }
            ]
        },
        {
            "courseUnitName": "Musik",
            "finalGoalGrade": "B",
            "strategyText": "",
            "periodGoals": [
                {
                    "periodName": "VT2017",
                    "gradeName": "C"
                },
                {
                    "periodName": "HT2016",
                    "gradeName": "D"
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./src/apis/edsclient.ts":
/*!*******************************!*\
  !*** ./src/apis/edsclient.ts ***!
  \*******************************/
/*! exports provided: EdsClient, EDSPeriod, parseJsonDate_old, StubEdsClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdsClient", function() { return EdsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDSPeriod", function() { return EDSPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJsonDate_old", function() { return parseJsonDate_old; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StubEdsClient", function() { return StubEdsClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_js_dist_ked_backend_client_restclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/js/dist/ked-backend-client/restclient */ "../kedbackend/js/dist/ked-backend-client/restclient.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _utils_school_term__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/school-term */ "./src/utils/school-term.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _eds_stubdata_ActiveCourses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eds-stubdata/ActiveCourses */ "./src/apis/eds-stubdata/ActiveCourses.ts");
/* harmony import */ var _eds_stubdata_LatestAssessments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eds-stubdata/LatestAssessments */ "./src/apis/eds-stubdata/LatestAssessments.ts");
/* harmony import */ var _eds_stubdata_StudentGoals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eds-stubdata/StudentGoals */ "./src/apis/eds-stubdata/StudentGoals.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");









//Gamla: const API_URL = "https://test-dev-eds-cs.cloudapp.net/WebAPI/";
//NYA: const API_URL = "https://edsportalowinapi.azurewebsites.net/api/";
function privatizingCacheBust() {
    return { user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"].currentUser.mail };
}
var EdsClient = /** @class */ (function () {
    function EdsClient(isomorphic, baseUrl, bearerProvider) {
        this.http = new kedbackend_js_dist_ked_backend_client_restclient__WEBPACK_IMPORTED_MODULE_1__["RestClient"](isomorphic, baseUrl, { bearerProvider: bearerProvider });
        this.getActiveCourses = avoidSimultanousCalls(this.getActiveCourses);
        this.getLatestAssessments = avoidSimultanousCalls(this.getLatestAssessments);
        this.getStudentGoals = avoidSimultanousCalls(this.getStudentGoals);
        this.getStudentFutureAbilities = avoidSimultanousCalls(this.getStudentFutureAbilities);
    }
    /**
       * Retrieve active courses for current logged in student.
       *
       * @param courseCode Short-name of the course. Optional.
       */
    EdsClient.prototype.getActiveCourses = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, res, _a, _b, json, ex_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        query = privatizingCacheBust();
                        if (q) {
                            if (q.courseCode)
                                query.CourseCode = q.courseCode;
                            if (q.periodName)
                                query.PeriodName = q.periodName;
                        }
                        return [4 /*yield*/, this.http.get("studentactivecourses", query)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.courses];
                    case 5:
                        ex_1 = _c.sent();
                        console.error("Error from EDS: " + ex_1);
                        throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."], ["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."]))));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieve latest assessments for current logged in user.
     *
     * @param limit Optional limit
     */
    EdsClient.prototype.getLatestAssessments = function (limit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = privatizingCacheBust();
                        if (!isNaN(limit))
                            query.Count = limit;
                        return [4 /*yield*/, this.http.get("studentassessments", query)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.assessments];
                }
            });
        });
    };
    /**
     * Retrieve studyplans for current logged-in user
     */
    EdsClient.prototype.getStudentGoals = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("studentgoals", privatizingCacheBust())];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.studentGoals];
                }
            });
        });
    };
    EdsClient.prototype.getStudentFutureAbilities = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("studentFutureAbilities", privatizingCacheBust())];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.studentFutureAbilities];
                }
            });
        });
    };
    return EdsClient;
}());

var EDSPeriod = /** @class */ (function () {
    function EDSPeriod(periodStringOrSchoolTerm) {
        if (typeof periodStringOrSchoolTerm === 'string') {
            this.period = periodStringOrSchoolTerm;
            this.term = this.period.startsWith('HT') ? 'AT' : 'ST';
            this.year = parseInt(this.period.substr(2));
            if (isNaN(this.year))
                throw new Error("Invalid period: " + this.period);
        }
        else {
            var schoolTerm = new _utils_school_term__WEBPACK_IMPORTED_MODULE_3__["SchoolTerm"](periodStringOrSchoolTerm);
            this.period = (schoolTerm.term === 'AT' ? "HT" : "VT") + schoolTerm.year;
            this.term = schoolTerm.term;
            this.year = schoolTerm.year;
        }
    }
    Object.defineProperty(EDSPeriod.prototype, "schoolTerm", {
        get: function () {
            return new _utils_school_term__WEBPACK_IMPORTED_MODULE_3__["SchoolTerm"]({
                academicYear: this.term === 'AT' ?
                    this.year + "/" + (this.year + 1) :
                    this.year - 1 + "/" + this.year,
                term: this.term
            });
        },
        enumerable: true,
        configurable: true
    });
    EDSPeriod.prototype.toString = function () {
        return this.period;
    };
    EDSPeriod.prototype.valueOf = function () {
        return this.year + ":" + (this.term === 'ST' ? "1" : "2");
    };
    return EDSPeriod;
}());

function parseJsonDate_old(jsonDateStr) {
    var date = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["dateTimeReviver"])("", jsonDateStr);
    if (!(date instanceof Date))
        throw new Error("Invalid JSON date string: " + jsonDateStr);
    return date;
}
var StubEdsClient = /** @class */ (function () {
    function StubEdsClient() {
        this.http = null;
    }
    StubEdsClient.prototype.getActiveCourses = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                result = _eds_stubdata_ActiveCourses__WEBPACK_IMPORTED_MODULE_5__["courses"].courses;
                if (q) {
                    if (q.courseCode)
                        result = result.filter(function (c) { return c.shortName === q.courseCode; });
                    if (q.periodName)
                        result = result.filter(function (c) { return c.periodName === q.periodName; });
                }
                return [2 /*return*/, result];
            });
        });
    };
    StubEdsClient.prototype.getLatestAssessments = function (limit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, limit ?
                        _eds_stubdata_LatestAssessments__WEBPACK_IMPORTED_MODULE_6__["assessments"].assessments.slice(0, limit) :
                        _eds_stubdata_LatestAssessments__WEBPACK_IMPORTED_MODULE_6__["assessments"].assessments];
            });
        });
    };
    StubEdsClient.prototype.getStudentGoals = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, _eds_stubdata_StudentGoals__WEBPACK_IMPORTED_MODULE_7__["studyPlans"].StudyPlans];
            });
        });
    };
    StubEdsClient.prototype.getStudentFutureAbilities = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    return StubEdsClient;
}());

function avoidSimultanousCalls(method) {
    var ongoingPromises = {};
    return function () {
        var argsJson = JSON.stringify([].slice.call(arguments));
        if (!ongoingPromises[argsJson]) {
            ongoingPromises[argsJson] = method.apply(this, arguments).then(function (result) {
                delete ongoingPromises[argsJson];
                return result;
            });
        }
        return ongoingPromises[argsJson];
    };
}
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/courses/business-logic.ts":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/business-logic.ts ***!
  \*****************************************************************/
/*! exports provided: getUncoveredKnowledgeRequirements, getIdsNotCoveredByTasks, sanityCheck, getTasksPerId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUncoveredKnowledgeRequirements", function() { return getUncoveredKnowledgeRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdsNotCoveredByTasks", function() { return getIdsNotCoveredByTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanityCheck", function() { return sanityCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksPerId", function() { return getTasksPerId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");


function getUncoveredKnowledgeRequirements(course) {
    var uncoveredRequirements = course.knowledgeRequirements.reduce(function (result, item) {
        result[item.id] = item;
        return result;
    }, {});
    course.tasks.forEach(function (task) {
        task.knowledgeRequirements.forEach(function (kr) {
            delete uncoveredRequirements[kr.id];
        });
    });
    return Object.keys(uncoveredRequirements).map(function (id) { return uncoveredRequirements[id]; });
}
function getIdsNotCoveredByTasks(course) {
    var uncoveredIds = {};
    // 1. Mark the ids of all knowledge requirements, abilities and central content for this course:
    course.knowledgeRequirements.forEach(function (r) {
        uncoveredIds[r.id] = true;
    });
    course.abilities.forEach(function (a) {
        uncoveredIds[a.id] = true;
    });
    course.centralContent.forEach(function (cc) {
        uncoveredIds[cc.id] = true;
    });
    // 2. List all tasks and unmark all ids that they refer to
    var tasks = course.tasks;
    tasks.forEach(function (task) {
        task.knowledgeRequirements.forEach(function (kr) {
            delete uncoveredIds[kr.id];
        });
        task.abilities.forEach(function (a) {
            delete uncoveredIds[a.id];
        });
        task.centralContent.forEach(function (cc) {
            delete uncoveredIds[cc.id];
        });
    });
    return uncoveredIds;
}
function sanityCheck(course) {
    function hasDuplicateTasks(course) {
        var taskIds = {};
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(course.modules.map(function (module) { return module.taskIds.map(function (taskId) {
            if (taskIds[taskId]) {
                var task = course.tasks.find(function (t) { return t.id === taskId; });
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Samma uppgift f\u00F6rekommer flera g\u00E5nger: \"", "\""], ["Samma uppgift f\u00F6rekommer flera g\u00E5nger: \"", "\""])), task.name);
            }
            taskIds[taskId] = true;
        }).filter(function (x) { return x; }); }));
    }
    function tasksWithSameUrl(course) {
        var taskUrls = {};
        return course.tasks.map(function (task) {
            if (task.url) {
                if (taskUrls[task.url]) {
                    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Tv\u00E5 uppgifter pekar p\u00E5 samma URL: \"", "\" samt \"", "\""], ["Tv\u00E5 uppgifter pekar p\u00E5 samma URL: \"", "\" samt \"", "\""])), taskUrls[task.url].name, task.name);
                }
                taskUrls[task.url] = task;
            }
        }).filter(function (x) { return x; });
    }
    function hasEmptyModuleNames(course) {
        return course.modules.some(function (module) { return module.name === ""; }) && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Det finns minst en modul utan angivet namn"], ["Det finns minst en modul utan angivet namn"])));
    }
    function hasDuplicateModuleNames(course) {
        var moduleNames = {};
        return course.modules.map(function (module) {
            if (module.name && moduleNames[module.name]) {
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Modulen med namn ", " f\u00F6rekommer flera g\u00E5nger"], ["Modulen med namn ", " f\u00F6rekommer flera g\u00E5nger"])), module.name);
            }
            if (module.name)
                moduleNames[module.name] = true;
        });
    }
    var checks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])([
        hasDuplicateTasks(course),
        tasksWithSameUrl(course),
        hasEmptyModuleNames(course),
        hasDuplicateModuleNames(course)
    ]);
    return checks.filter(function (result) { return result; });
}
function getTasksPerId(course) {
    var result = {};
    function add(id, task) {
        var list = result[id] || (result[id] = []);
        list.push(task);
    }
    course.tasks.forEach(function (task) {
        task.abilities.forEach(function (a) { return add(a.id, task); });
        task.centralContent.forEach(function (c) { return add(c.id, task); });
        task.futureAbilities.forEach(function (fa) { return add(fa, task); });
    });
    return result;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder/courses/course-banner.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/course-banner.tsx ***!
  \*****************************************************************/
/*! exports provided: setCourseImage, CourseBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCourseImage", function() { return setCourseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBanner", function() { return CourseBanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");







var AdminMenuItems = [
    { name: "schools", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skolor"], ["Skolor"]))), route: "/schools" },
    { name: "subjects", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnen"], ["\u00C4mnen"]))), route: "/subjects" },
];
var NonAdminMenuItems = [
    { name: "courseBuilder", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursbyggaren"], ["Kursbyggaren"]))), route: "/courses/new" },
    { name: "studentPage", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Elevsida"], ["Elevsida"]))), route: "" },
    { name: "feedback", text: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-commenting-o", "aria-hidden": "true" }),
            " Feedback"), route: "https://kg.kunskapsporten.se/kursbyggaren/" }
];
function onDropImage(ev, host, course, origCourse) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var files, url, items, file, _loop_1, i;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.stopPropagation();
                    ev.preventDefault();
                    files = ev.dataTransfer.files;
                    url = null;
                    items = Array.from(ev.dataTransfer.items);
                    if (!(files.length > 0)) return [3 /*break*/, 2];
                    file = files[0];
                    if (file.size > 2 * 1024 * 1024) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kan inte ladda upp bilder st\u00F6rre \u00E4n 2 MB"], ["Kan inte ladda upp bilder st\u00F6rre \u00E4n 2 MB"]))));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["readBlobAsDataUrl"])(file)];
                case 1:
                    url = _a.sent();
                    return [3 /*break*/, 6];
                case 2:
                    _loop_1 = function (i) {
                        var item;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    item = items[i];
                                    if (!item.type.match('^text/uri-list')) return [3 /*break*/, 2];
                                    return [4 /*yield*/, new Promise(function (resolve) { return item.getAsString(resolve); })];
                                case 1:
                                    // URI
                                    url = _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < items.length)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1(i)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    ++i;
                    return [3 /*break*/, 3];
                case 6:
                    if (url == null) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte hitta n\u00E5gon bild i inneh\u00E5llet"], ["Kunde inte hitta n\u00E5gon bild i inneh\u00E5llet"]))));
                        return [2 /*return*/];
                    }
                    setCourseImage(course, origCourse, host, url);
                    return [2 /*return*/];
            }
        });
    });
}
function setCourseImage(course, origCourse, host, url) {
    var imageId = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])();
    host.update({
        imageId: { $set: imageId },
        images: {
            $set: [{
                    id: imageId,
                    url: url,
                    acl: [
                        "role:USER:R",
                        "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school + "/EMPLOYEE:S"
                    ],
                    $meta: 'add'
                }]
        }
    });
}
/* This version had the bug that old images were not replaced.
One course at Uppsala contained 12 images.


export function setCourseImageOld(
  course: Course,
  origCourse: Course,
  host: ICourseEditorHost,
  url: string)
{
  if (!origCourse || !origCourse.imageId) {
    const imageId = createUUID();
    host.update({
      imageId: { $set: imageId },
      images: {
        $push: [{
          id: imageId,
          url,
          acl: course.isTemplate ? ["role:USER:R"] : ["role:USER:R", `schoolRole:${env.currentUser.school}/EMPLOYEE:S`],
          $meta: 'add'
        }]
      }
    });
  } else {
    // Update existing image:
    const imgIdx = course.images.findIndex(img => img.id === course.imageId);
    if (imgIdx >= 0) {
      const imageEntity = course.images[imgIdx];
      if (course.isTemplate) {
        // Templates: Update the template image content:
        host.update({
          images: {
            $splice: [[imgIdx, 1, {
              ...imageEntity,
              url,
              $meta: 'update'
            }]]
          }
        })
      } else {
        // Real courses: Replace with a new image
        const imageId = createUUID();
        host.update({
          imageId: { $set: imageId },
          images: {
            $splice: [[imgIdx, 1, {
              id: imageId,
              url,
              acl: [
                `role:USER:R`,
                `schoolRole:${env.currentUser.school}/EMPLOYEE:S`
              ],
              $meta: 'add'
            }]]
          }
        })
      }
    } else {
      showError(L`Kunde inte uppdatera bilden.`);
    }
  }
}
*/
var CourseBanner = function (props) {
    var title = props.title, isTemplate = props.isTemplate, host = props.host, course = props.course, origCourse = props.origCourse, backgroundImage = props.backgroundImage, activePage = props.activePage;
    var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
    var menuItems = NonAdminMenuItems;
    if (isAdmin)
        menuItems = AdminMenuItems.concat(menuItems);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-script-portlet sv-portlet sv-skip-spacer" },
                backgroundImage && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("style", null, "\n        .pageHeader {\n          background-image: url('" + backgroundImage + "') !important;\n        }\n      "),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pageHeader", onDragOver: course && _utils__WEBPACK_IMPORTED_MODULE_3__["allowCopy"], onDrop: course && (function (ev) { return onDropImage(ev, host, course, origCourse); }) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, title)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttonsField" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttonsContainer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'horizontalMenu' },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, menuItems.map(function (item) { return ({
                                    item: item,
                                    isActive: activePage === item.name,
                                    callback: props.callbacks && props.callbacks[item.name],
                                    givenRoute: (props.routes && props.routes[item.name]),
                                    defaultRoute: item.route
                                }); }).filter(function (x) { return x.callback || x.defaultRoute || x.givenRoute; }).map(function (_a) {
                                    var item = _a.item, isActive = _a.isActive, callback = _a.callback, defaultRoute = _a.defaultRoute, givenRoute = _a.givenRoute;
                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: item.name, className: isActive ? "activePage" : "", onClick: callback }, callback ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, item.text) :
                                        defaultRoute || givenRoute ?
                                            givenRoute || /^http[s]\:\/\//i.test(defaultRoute) ?
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: givenRoute || defaultRoute }, item.text) :
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: defaultRoute }, item.text) :
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, item.text));
                                })))))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/course-builder/courses/course-module-list.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/courses/course-module-list.tsx ***!
  \**********************************************************************/
/*! exports provided: CourseModuleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleList", function() { return CourseModuleList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _course_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-module */ "./src/components/course-builder/courses/course-module.tsx");





var CourseModuleList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModuleList, _super);
    function CourseModuleList(props) {
        var _this = _super.call(this, props) || this;
        _this._moduleRefs = {};
        _this.state = {};
        return _this;
    }
    CourseModuleList.prototype.addModule = function () {
        this.props.host.update({ modules: { $push: [{
                        name: "Ny kursmodul",
                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                        resources: [],
                        taskIds: []
                    }
                ] } });
    };
    CourseModuleList.prototype.getOrderedModules = function () {
        var course = this.props.course;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        return moduleOrder
            .map(function (id) { return course.modules.find(function (m) { return m.id === id; }); })
            .filter(function (m) { return !!m; })
            .concat(course.modules.filter(function (m) { return !moduleOrder.find(function (id) { return m.id === id; }); }));
    };
    CourseModuleList.prototype.reorder = function (moduleId, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var course, orderedModules, moduleIndex, newModuleIndex, currentModuleAtPosition, moduleOrder, origScrollPos, elemModule;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        course = this.props.course;
                        orderedModules = this.getOrderedModules();
                        moduleIndex = orderedModules.findIndex(function (m) { return m.id === moduleId; });
                        newModuleIndex = moduleIndex + direction;
                        if (newModuleIndex < 0 || newModuleIndex >= orderedModules.length) {
                            // Cannot order outside limits.
                            return [2 /*return*/];
                        }
                        currentModuleAtPosition = orderedModules[newModuleIndex];
                        moduleOrder = orderedModules.map(function (m) { return m.id; });
                        moduleOrder[newModuleIndex] = moduleId;
                        moduleOrder[moduleIndex] = currentModuleAtPosition.id;
                        origScrollPos = document.documentElement.scrollTop;
                        return [4 /*yield*/, this.props.host.update({
                                moduleOrder: { $set: moduleOrder }
                            })];
                    case 1:
                        _a.sent();
                        elemModule = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this._moduleRefs[moduleId]);
                        if (elemModule) {
                            try {
                                window.scrollTo({ top: origScrollPos }); // Prohibit default scrolling directly upwards on move up.
                                elemModule.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            catch (e) {
                                // Only Chrome beta supports the arguments given above. Default for older browsers.
                                window.scrollTo(null, origScrollPos);
                                elemModule.scrollIntoView(true);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseModuleList.prototype.render = function () {
        var _this = this;
        var _a = this.props, course = _a.course, host = _a.host, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        var orderedModules = this.getOrderedModules();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet", ref: function (elem) { return _this._elem = elem; } },
            orderedModules.map(function (module) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module__WEBPACK_IMPORTED_MODULE_4__["CourseModuleComponent"], { ref: function (elem) { return _this._moduleRefs[module.id] = elem; }, key: module.id, course: course, module: module, onReorder: function (direction) { return _this.reorder(module.id, direction); }, getOrderedModules: function () { return _this.getOrderedModules(); }, host: host, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask }); }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return _this.addModule(); } }, "L\u00E4gg till kursmodul"));
    };
    return CourseModuleList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/courses/course-module.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/course-module.tsx ***!
  \*****************************************************************/
/*! exports provided: CourseModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleComponent", function() { return CourseModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");
/* harmony import */ var _sub_components_editable_task_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/editable-task-list */ "./src/components/course-builder/sub-components/editable-task-list.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utility_components_renameable_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/renameable-text */ "./src/components/utility-components/renameable-text.tsx");
/* harmony import */ var _sub_components_remove_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");










var DEFAULT_KNOWLEDGE_MATRIX = [{
        abilityIds: [],
        EIds: [],
        CIds: [],
        AIds: []
    }];
var CourseModuleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModuleComponent, _super);
    function CourseModuleComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editMandatoryContent: false
        };
        return _this;
    }
    CourseModuleComponent.prototype.getModuleIndex = function () {
        var _a = this.props, course = _a.course, module = _a.module;
        return course.modules.findIndex(function (m) { return m.id === module.id; });
    };
    CourseModuleComponent.prototype.getModuleOrderIndex = function () {
        var _a = this.props, course = _a.course, module = _a.module;
        var orderedModules = this.props.getOrderedModules();
        return orderedModules.findIndex(function (m) { return m.id === module.id; });
    };
    CourseModuleComponent.prototype.updateModule = function (moduleUpdates) {
        var module = this.props.module;
        var updatedModule = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(module, moduleUpdates);
        var moduleIndex = this.getModuleIndex();
        this.props.host.update({ modules: { $splice: [[moduleIndex, 1, updatedModule]] } });
    };
    /* This method works for both adding new tasks to the task table
    and adding references to existing tasks. The magic of that has to do with
    whether task.$meta = 'add' or not and is done in EditCourse.save()
    */
    CourseModuleComponent.prototype.onTaskAdded = function (task, taskCustomization) {
        // Add task ID to module taskIds list:
        var courseUpdates = {};
        var taskIds = this.props.module.taskIds.slice();
        taskIds.push(task.id);
        // Add physical Task to Course.tasks.
        if (!this.props.course.tasks.some(function (t) { return t.id === task.id; })) {
            courseUpdates.tasks = { $push: [task] };
        }
        var customizations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this.props.module.taskCustomizations || {}));
        if (taskCustomization)
            customizations[task.id] = taskCustomization;
        var moduleIndex = this.getModuleIndex();
        courseUpdates.modules = {};
        courseUpdates.modules[moduleIndex] = {
            taskIds: { $set: taskIds },
            taskCustomizations: { $set: customizations }
        };
        // Update module
        this.props.host.update(courseUpdates);
    };
    CourseModuleComponent.prototype.onTaskUpdated = function (task) {
        if (!task.$meta)
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Hoppsan, blev lite knas. Fel ID: ", ""], ["Hoppsan, blev lite knas. Fel ID: ", ""])), 'Pa7Dq'));
        var taskIndex = this.props.course.tasks.findIndex(function (t) { return t.id === task.id; });
        if (taskIndex >= 0) {
            this.props.host.update({ tasks: { $splice: [[taskIndex, 1, task]] } });
        }
    };
    CourseModuleComponent.prototype.onTaskCustomized = function (taskId, customization) {
        var customizations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this.props.module.taskCustomizations || {}));
        customizations[taskId] = customization;
        this.updateModule({ taskCustomizations: { $set: customizations } });
    };
    CourseModuleComponent.prototype.onTaskDeleted = function (id) {
        // Remove task ID from module taskIds list.
        // This depends on the fact that EditCourse._setState() maintains
        // removed Task links (which it actually does (or should do at least)).
        this.updateModule({
            taskIds: { $set: this.props.module.taskIds.filter(function (tid) { return tid !== id; }) },
            taskCustomizations: {
                $apply: function (customizations) {
                    var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, customizations);
                    delete copy[id];
                    return copy;
                }
            }
        });
    };
    CourseModuleComponent.prototype.onTaskReplaced = function (id, task) {
        var idxTask = this.props.module.taskIds.indexOf(id);
        if (idxTask < 0) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte spara uppgift. Felkod d72kQ"], ["Kunde inte spara uppgift. Felkod d72kQ"]))));
            return;
        }
        var moduleUpdates = {
            // Replace old id with new id:
            taskIds: { $splice: [[idxTask, 1, task.id]] },
            taskCustomizations: {
                $apply: function (customizations) {
                    var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, customizations);
                    delete copy[id];
                    return copy;
                }
            }
        };
        var updatedModule = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(this.props.module, moduleUpdates);
        var moduleIndex = this.getModuleIndex();
        this.props.host.update({
            // Apply moduleUpdates from above:
            modules: { $splice: [[moduleIndex, 1, updatedModule]] },
            // Add the new task to Course.tasks.
            // Don't remove the old one! Why? Because it may be referenced
            // by another module in same course! Let EditCourse._setState()
            // do the "garbage collection" instead.
            tasks: { $set: this.props.course.tasks.concat(task) }
        });
    };
    CourseModuleComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, course = _a.course, host = _a.host, module = _a.module, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
        var moduleIndex = this.getModuleIndex();
        var moduleOrderedIndex = this.getModuleOrderIndex();
        var knowledgeMatrixDiv;
        var updateModule = this.updateModule.bind(this);
        var week = 1;
        var startWeekOptions = ["--"];
        var endWeekOptions = ["--"];
        for (var i = 0; i < 51; ++i) {
            startWeekOptions.push('' + week);
            endWeekOptions.push('' + ++week);
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-module ked_boxed", style: { position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_renameable_text__WEBPACK_IMPORTED_MODULE_5__["RenameableText"], { eager: true, clickAdvertiseText: "Namnl\u00F6s modul", maxChars: 100, text: module.name, onChange: function (newName) { return updateModule({ name: { $set: newName } }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Startvecka")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: module.startWeek || "--", onChange: function (ev) { return updateModule({ startWeek: {
                                $set: ev.target.value === '--' ?
                                    undefined :
                                    parseInt(ev.target.value)
                            }
                        }); } }, startWeekOptions.map(function (o) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: o, value: o }, o); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Slutvecka")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: module.endWeek || "--", onChange: function (ev) { return updateModule({ endWeek: {
                                $set: ev.target.value === '--' ?
                                    undefined :
                                    parseInt(ev.target.value)
                            }
                        }); } }, endWeekOptions.map(function (o) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: o, value: o }, o); })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Kursmodulens introduktion"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_8__["Wysiwyg"], { actions: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "heading2",
                    "heading3",
                    "olist",
                    "ulist",
                    "line",
                    "link",
                    "image"
                ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_9__["default"], html: module.mandatoryContent, onChange: function (html) {
                    updateModule({ mandatoryContent: { $set: html } });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Uppgifter"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_task_list__WEBPACK_IMPORTED_MODULE_3__["EditableTaskList"], { taskIds: module.taskIds, taskCustomizations: module.taskCustomizations, course: course, module: module, host: host, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask, onTaskAdded: function (task, taskCustomization) { return _this.onTaskAdded(task, taskCustomization); }, onTaskUpdated: function (task) { return _this.onTaskUpdated(task); }, onTaskCustomizationUpdated: function (taskId, customization) {
                    return _this.onTaskCustomized(taskId, customization);
                }, onTaskDeleted: function (id) { return _this.onTaskDeleted(id); }, onTaskReplaced: function (id, task) { return _this.onTaskReplaced(id, task); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Modulresurser"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Eventuella resuser f\u00F6r redovisning av modulen samt f\u00F6r modulen som helhet)"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__["EditableResourceList"], { resources: module.resources, onUpdate: function (resourcesUpdates) { return updateModule({ resources: resourcesUpdates }); }, host: host }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { position: 'absolute', top: 0, right: 0 } },
                moduleOrderedIndex > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(-1); } }),
                    " "),
                moduleOrderedIndex < course.modules.length - 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(1); } }),
                    " "),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_6__["RemoveItem"], { title: "Ta bort modulen", style: { display: 'inline-block' }, onClick: function () { return confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort modul ", "?"], ["Ta bort modul ", "?"])), module.name)) && host.update({ modules: { $splice: [[moduleIndex, 1]] } }); } })));
    };
    return CourseModuleComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/courses/create-new.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course-builder/courses/create-new.tsx ***!
  \**************************************************************/
/*! exports provided: CreateNewCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCourse", function() { return CreateNewCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _sub_components_school_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sub-components/school-courses */ "./src/components/course-builder/sub-components/school-courses.tsx");








var CreateNewCourse = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CreateNewCourse, _super);
    function CreateNewCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            courseOptions: null,
            selectedTemplateId: "--",
            courses: null,
            selectedCourseId: ""
        };
        return _this;
    }
    CreateNewCourse.prototype.componentDidMount = function () {
        this.load().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
    };
    CreateNewCourse.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subjects, courses, courseOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar kurser");
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("subjects", { include: "courseTemplates" })];
                    case 1:
                        subjects = _a.sent();
                        courses = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(subjects.map(function (s) { return s.courseTemplates; })).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("name"));
                        courseOptions = [{ id: "--", name: "--" }].concat(courses);
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        this.setState({ courseOptions: courseOptions });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateNewCourse.prototype.onSelectCourse = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var derivedCourses, courseOptions, kedStandardOptions, teacherMade, courses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("courses", { hasEdgesTo: [id] })];
                    case 1:
                        derivedCourses = _a.sent();
                        courseOptions = derivedCourses
                            .filter(function (course) { return course.active; })
                            .map(function (_a) {
                            var id = _a.id, school = _a.school, description = _a.description, createdBy = _a.createdBy, modifiedBy = _a.modifiedBy;
                            if (description)
                                description = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(description, 80);
                            var descriptionOrAuthor = description ||
                                (createdBy ? createdBy.name + "s version" :
                                    modifiedBy && modifiedBy.name + "s version");
                            return {
                                id: id,
                                name: school === 'standard' ?
                                    description ? "Standard - " + description : "Standard" :
                                    school + " - " + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(descriptionOrAuthor, 90),
                                school: school
                            };
                        }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("name"));
                        kedStandardOptions = courseOptions.filter(function (option) { return option.school === "standard"; });
                        teacherMade = courseOptions.filter(function (option) { return option.school !== "standard"; });
                        courses = kedStandardOptions.concat([
                            { id: id, name: "Tom" }
                        ], teacherMade);
                        this.setState({
                            courses: courses,
                            selectedTemplateId: id,
                            selectedCourseId: courses[0].id
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateNewCourse.prototype.render = function () {
        var _this = this;
        var _a = this.state, courseOptions = _a.courseOptions, selectedTemplateId = _a.selectedTemplateId, courses = _a.courses, selectedCourseId = _a.selectedCourseId;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursbyggaren"], ["Kursbyggaren"]))), activePage: "courseBuilder", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Skapa ny kurs"),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "V\u00E4lj gymnasiekurs :"))),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, !courseOptions ?
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null),
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { disabled: true, value: "" },
                                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", null, "--"))) :
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: this.state.selectedTemplateId, onChange: function (ev) { return _this.onSelectCourse(ev.target.value).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]); } }, courseOptions.map(function (course) {
                                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: course.id, value: course.id }, course.name);
                                                })))),
                                        courses && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Utg\u00E5 fr\u00E5n version: "))),
                                        courses && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: selectedCourseId, onChange: function (ev) { return _this.setState({
                                                        selectedCourseId: ev.target.value
                                                    }); } }, courses.map(function (course) {
                                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: course.id, value: course.id }, course.name);
                                                })))),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                        courses && selectedCourseId && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/create-from-template/" + this.state.selectedCourseId, className: "btn btn-large" }, "Skapa"))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_school_courses__WEBPACK_IMPORTED_MODULE_7__["SchoolCourses"], null))))))));
    };
    return CreateNewCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/courses/edit-course.tsx":
/*!***************************************************************!*\
  !*** ./src/components/course-builder/courses/edit-course.tsx ***!
  \***************************************************************/
/*! exports provided: EditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourse", function() { return EditCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _inner_edit_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inner-edit-course */ "./src/components/course-builder/courses/inner-edit-course.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _sub_components_remove_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _business_logic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../repos/school-courses */ "./src/repos/school-courses.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
















var catcher = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_12__["default"].ENVIRONMENT === 'production' ?
    _utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"] : null;
var CONFIRM_NAVIGATE_MESSAGE = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."], ["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."])));
var DEFAULT_STATE = {
    origCourse: null,
    origTemplate: null,
    course: null,
    dialogContainers: [],
    hasUnsavedData: false,
    view: 'courseBuilder'
};
var EditCourse = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditCourse, _super);
    function EditCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, DEFAULT_STATE);
        _this.update = _this.update.bind(_this);
        _this.refDialog = _this.refDialog.bind(_this);
        _this.contentYPos = 0;
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.beforeUnload = _this.beforeUnload.bind(_this);
        _this.onClickPreventUnload = _this.onClickPreventUnload.bind(_this);
        _this.isSaving = false;
        _this.dialogs = [];
        if (props.view)
            _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { view: props.view });
        return _this;
    }
    EditCourse.prototype.setStatePromised = function (state) {
        return this._setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ hasUnsavedData: true }, state));
    };
    EditCourse.prototype.setNonSaveableDataState = function (state) {
        return this._setState(state);
    };
    EditCourse.prototype._setState = function (state) {
        var _this = this;
        if (state.course) {
            {
                //
                // Maintain course task links (remove links to tasks that are not used
                // by any module)
                //
                var _a = state.course, tasks = _a.tasks, modules = _a.modules;
                var usedTaskIds_1 = {};
                modules.forEach(function (module) { return module.taskIds.forEach(function (id) { return usedTaskIds_1[id] = true; }); });
                var filteredCourseTasks = tasks.filter(function (t) { return usedTaskIds_1[t.id]; });
                var modifiedCourse = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.course);
                modifiedCourse.tasks = filteredCourseTasks;
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { course: modifiedCourse });
            }
        }
        // Invoke our course into state property allCourses so that the
        // right-hand side list of courses gets update immediately with
        // the publishable state of this course.
        var allCourses = state.allCourses || this.state.allCourses;
        var course = state.course || this.state.course;
        if (allCourses) {
            var idxOurCourse = allCourses.findIndex(function (c) { return c.id === _this.props.id; });
            allCourses = react_addons_update__WEBPACK_IMPORTED_MODULE_8___default()(allCourses, { $splice: [[idxOurCourse, 1, course]] });
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
            state.allCourses = allCourses;
        }
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, function () { return state; }, resolve); });
    };
    EditCourse.prototype.componentWillMount = function () {
        this.load().catch(catcher);
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('beforeunload', this.beforeUnload);
        document.body.addEventListener('click', this.onClickPreventUnload);
    };
    EditCourse.prototype.componentWillUnmount = function () {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('beforeunload', this.beforeUnload);
        document.body.removeEventListener('click', this.onClickPreventUnload);
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCourseBuilderStatus"])('');
    };
    EditCourse.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.state && this.state.course) {
            if (nextProps.id !== this.props.id || nextProps.templateId !== this.props.templateId) {
                this.setStatePromised(DEFAULT_STATE);
            }
        }
        if (nextProps.view !== this.props.view) {
            this.setNonSaveableDataState({ view: nextProps.view });
        }
    };
    EditCourse.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.contentDiv) {
            var contentDiv = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this.contentDiv);
            if (contentDiv) {
                this.contentYPos = contentDiv.getBoundingClientRect().top;
            }
        }
        if (prevState && prevState.course) {
            // This was not the initial update.
            // If props have been updated to point out another course or template, reset component:
            if (this.props.id !== prevProps.id || this.props.templateId !== prevProps.templateId) {
                this.load().catch(catcher);
            }
        }
        if (!prevState.hasUnsavedData && this.state.hasUnsavedData) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCourseBuilderStatus"])('unsaved');
        }
    };
    EditCourse.prototype.loadFromTemplate = function (templateId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var template, course, mySchool;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar data från mall...");
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["loadCourse"])(templateId, { includeTemplateChain: true })];
                    case 1:
                        template = _a.sent();
                        course = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCreationStamp"])(Date.now(), template, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser);
                        course.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])();
                        course.parentId = templateId;
                        course.active = false;
                        course.isTemplate = false;
                        course.templateChain = course.templateChain.slice();
                        course.templateChain.push({ id: templateId, $meta: 'ref' });
                        mySchool = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.school;
                        course.school = mySchool;
                        course.description = "";
                        course.responsibleTeachers = [];
                        course.acl = [
                            "role:USER:R",
                            "schoolRole:" + mySchool + "/EMPLOYEE:S" // Other teachers at same school should be able to modify the course.
                        ];
                        delete course.$etag;
                        delete course.createdBy;
                        delete course.createdDate;
                        delete course.modifiedBy;
                        delete course.modifiedDate;
                        delete course.activatedBy;
                        delete course.activatedDate;
                        delete course.googleClassRoomCode;
                        delete course.googleClassRoomURL;
                        return [4 /*yield*/, this.setStatePromised({ course: course, origCourse: null, origTemplate: template })];
                    case 2:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCourseBuilderStatus"])('');
                        if (!this.props.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadExistingCourse(this.props.id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!this.props.templateId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadFromTemplate(this.props.templateId)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ogiltig parameter. id eller templateId m\u00E5ste anges"], ["Ogiltig parameter. id eller templateId m\u00E5ste anges"]))));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.loadExistingCourse = function (courseId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var course;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar kurs");
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["loadCourse"])(courseId)];
                    case 1:
                        course = _a.sent();
                        if (!course.responsibleTeachers)
                            course.responsibleTeachers = [];
                        return [4 /*yield*/, this.setNonSaveableDataState({ course: course, origCourse: course })];
                    case 2:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.update = function (courseUpdates) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setStatePromised({ course: react_addons_update__WEBPACK_IMPORTED_MODULE_8___default()(this.state.course, courseUpdates) })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.deleteCourse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var courseSchool, parentId, courseId, children, br, _i, children_1, childCourse;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Raderar kursen...");
                        courseSchool = this.state.course.school;
                        parentId = this.state.course.parentId;
                        courseId = this.props.id;
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient.list("courses", {
                                hasEdgesTo: [this.props.id]
                            })];
                    case 1:
                        children = _a.sent();
                        br = new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["BatchRunner"]();
                        for (_i = 0, children_1 = children; _i < children_1.length; _i++) {
                            childCourse = children_1[_i];
                            /* CANNOT DO THIS. MAY NOT HAVE ACCESS! if (childCourse.parentId === courseId) {
                              // Reconnect child with my parent instead, as I will be disappearing...
                              childCourse.parentId = parentId;
                              br.put("courses", childCourse);
                            }*/
                        }
                        br.delete("courses", courseId);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient.batch(br.mutationRequests)];
                    case 2:
                        _a.sent();
                        if (courseSchool === _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.school) {
                            _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].delete(courseId);
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        location.hash = "#/courses/new";
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1, errorMessage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isSaving)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.isSaving = true;
                        return [4 /*yield*/, this._save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        errorMessage = err_1 && err_1.message ? err_1.message : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ett ok\u00E4nt fel har intr\u00E4ffat..."], ["Ett ok\u00E4nt fel har intr\u00E4ffat..."])));
                        if (err_1) {
                            if (err_1.name === 'http409' || err_1.name === 'http412' || err_1.name === 'http404') {
                                // Conflict. Show a nicer error message:
                                errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."], ["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."])));
                            }
                            else if (err_1.name === 'http403') {
                                if (this.state.course.isTemplate)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."], ["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."])));
                                else if (this.state.course.school)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""], ["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""])), this.state.course.name, this.state.course.school);
                            }
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(errorMessage);
                        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCourseBuilderStatus"])('error');
                        return [3 /*break*/, 5];
                    case 4:
                        this.isSaving = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype._save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, course, origCourse, origTemplate, doesAllTasksCoverAllRequirements, modifiedCourse, batch, orig, newCourseTasks, tags, schoolId, schoolId, schoolId, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse, origTemplate = _a.origTemplate;
                        doesAllTasksCoverAllRequirements = Object(_business_logic__WEBPACK_IMPORTED_MODULE_11__["getUncoveredKnowledgeRequirements"])(course).length === 0;
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
                        modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateModificationStamp"])(Date.now(), course, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser);
                        batch = new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["BatchRunner"]();
                        orig = origCourse || origTemplate;
                        newCourseTasks = modifiedCourse.tasks.map(function (task) {
                            if (task.$meta === 'add' || task.$meta === 'update') {
                                var origTask = orig.tasks.find(function (t) { return t.id === task.id; });
                                return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateDocumentGraphs"])(origTask || {}, task, "tasks", {
                                    knowledgeRequirements: 'knowledge-requirements',
                                    centralContent: 'central-content',
                                    abilities: 'abilities'
                                }, batch);
                            }
                            else {
                                var updatedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                delete updatedTask.$meta;
                                return updatedTask;
                            }
                        });
                        modifiedCourse = react_addons_update__WEBPACK_IMPORTED_MODULE_8___default()(modifiedCourse, { tasks: { $set: newCourseTasks } });
                        modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateDocumentGraphs"])(origCourse || {}, modifiedCourse, 'courses', {
                            templateChain: 'courses',
                            centralContent: 'central-content',
                            knowledgeRequirements: 'knowledge-requirements',
                            abilities: 'abilities',
                            images: 'images',
                            tasks: 'tasks'
                        }, batch);
                        modifiedCourse = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, modifiedCourse);
                        modifiedCourse.publishable = doesAllTasksCoverAllRequirements;
                        tags = (modifiedCourse.tags || []).filter(function (tag) { return tag !== 'incomplete'; });
                        modifiedCourse.tags = modifiedCourse.publishable ?
                            tags : tags.concat("incomplete");
                        if (!!origCourse) return [3 /*break*/, 3];
                        // A new course should be added:
                        batch.add('courses', modifiedCourse);
                        if (!course.school) return [3 /*break*/, 2];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 1:
                        schoolId = _b.sent();
                        batch.link("schools", schoolId, "courses", course.id, "courses");
                        if (course.active) {
                            batch.link("schools", schoolId, "courses", course.id, "activeCourses");
                        }
                        _b.label = 2;
                    case 2: return [3 /*break*/, 7];
                    case 3:
                        // An existing course should be updated:
                        batch.put('courses', modifiedCourse);
                        if (!(!origCourse.active && course.active)) return [3 /*break*/, 5];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 4:
                        schoolId = _b.sent();
                        batch.link("schools", schoolId, "courses", course.id, "activeCourses");
                        return [3 /*break*/, 7];
                    case 5:
                        if (!(origCourse.active && !course.active)) return [3 /*break*/, 7];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 6:
                        schoolId = _b.sent();
                        batch.unlink("schools", schoolId, "courses", course.id, "activeCourses");
                        _b.label = 7;
                    case 7: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient.batch(batch.mutationRequests)];
                    case 8:
                        res = _b.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(origCourse ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4ndringarna har sparats"], ["\u00C4ndringarna har sparats"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_9 || (templateObject_9 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursen har skapats"], ["Kursen har skapats"]))));
                        // Update state to reflect what has been posted:
                        if (res && res.newEtags)
                            modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["applyEtags"])(modifiedCourse, res.newEtags, ["images", "tasks"]);
                        if (course.school === _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.school) {
                            // Update mySchoolCoursesRepo
                            if (!origCourse) {
                                _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].insert(modifiedCourse);
                            }
                            else {
                                _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].update(modifiedCourse);
                            }
                        }
                        return [4 /*yield*/, this.setNonSaveableDataState({ course: modifiedCourse, origCourse: modifiedCourse, hasUnsavedData: false })];
                    case 9:
                        _b.sent();
                        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["updateCourseBuilderStatus"])('');
                        if (!origCourse) {
                            // This was the creation of a new course. Correct the route now when the user enters an edit state:
                            location.hash = "#/courses/" + modifiedCourse.id + "/edit";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.activateAndSave = function () {
        var _this = this;
        var course = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.course);
        if (!course.active) {
            /*const uncoveredRequirements = getUncoveredKnowledgeRequirements(course);
            if (uncoveredRequirements.length > 0)
              return showError (L`Det finns kunskapskrav som inte uppfylls av någon modul. Kan inte aktivera kursen förrän alla kunskapskrav finns med.`);
            */
            course.active = true;
            course.activatedBy = {
                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.displayName,
                url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.mail
            };
            course.activatedDate = Date.now();
            this.setStatePromised({ course: course })
                .then(function () { return _this.save(); })
                .catch(catcher);
        }
    };
    EditCourse.prototype.inactivateAndSave = function () {
        var _this = this;
        var course = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.course);
        if (course.active) {
            course.active = false;
            course.inactivatedBy = {
                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.displayName,
                url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.mail
            };
            course.inactivatedDate = Date.now();
            this.setStatePromised({ course: course })
                .then(function () { return _this.save(); })
                .catch(catcher);
        }
    };
    EditCourse.prototype.openDialog = function (dialogContainer) {
        this.setNonSaveableDataState({ dialogContainers: this.state.dialogContainers.concat(dialogContainer) });
    };
    EditCourse.prototype.closeDialog = function () {
        var dialogContainers = this.state.dialogContainers;
        var length = dialogContainers.length;
        length && this.setNonSaveableDataState({ dialogContainers: dialogContainers.slice(0, length - 1) });
        // Now sync the direct 'dialogs' property with the new state:
        while (this.dialogs.length >= length)
            this.dialogs.pop();
    };
    EditCourse.prototype.refDialog = function (dialog, index) {
        this.dialogs[index] = dialog; // Setting per index instead of push(). Works even if the ref attribute could be invoked multiple times.
    };
    EditCourse.prototype.onKeyDown = function (ev) {
        if (ev.which === 83 && (ev.ctrlKey || ev.metaKey)) {
            ev.preventDefault();
            if (this.state.dialogContainers.length > 0) {
                this.saveDialog();
                return;
            }
            this.save();
        }
        else if (ev.which === 27 && this.state.dialogContainers.length > 0) {
            this.closeDialog();
            ev.preventDefault();
        }
        else if (ev.which === 13) {
            var targetElem = ev.target;
            if (this.state.dialogContainers.length > 0 &&
                targetElem.tagName !== 'TEXTAREA' &&
                targetElem.tagName !== 'INPUT' &&
                targetElem.tagName !== 'SELECT' &&
                targetElem.tagName !== 'OPTION' &&
                !targetElem.contentEditable) {
                this.saveDialog();
            }
        }
    };
    EditCourse.prototype.beforeUnload = function (ev) {
        if (this.state.dialogContainers.length > 0 || this.state.hasUnsavedData) {
            if (!_globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient.http.bearerProvider.wantsRedirect) {
                ev.returnValue = CONFIRM_NAVIGATE_MESSAGE;
                return ev.returnValue;
            }
        }
    };
    EditCourse.prototype.onClickPreventUnload = function (ev) {
        if (ev.target && ('' + ev.target.tagName).toLowerCase() === 'a') {
            var a = ev.target;
            if (a.href && a.getAttribute('href') !== '#' && !a.target) {
                if (this.state.dialogContainers.length > 0 || this.state.hasUnsavedData) {
                    if (!confirm(CONFIRM_NAVIGATE_MESSAGE)) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        return false;
                    }
                }
            }
        }
    };
    EditCourse.prototype.saveDialog = function () {
        if (this.state.dialogContainers.length > 0) {
            var dialog = this.dialogs[this.state.dialogContainers.length - 1]; // YES, should reference this.dialogs by length of dialogContainers. Strange yes, but leave it so!
            dialog && dialog.save();
        }
    };
    EditCourse.prototype.render = function () {
        var _this = this;
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.roles.indexOf("ADMIN") >= 0;
        var course = this.state.course;
        return !this.state.course ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_6__["CourseBanner"], { title: "", activePage: this.state.view, routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__["Spinner"], null),
                "V.g. v\u00E4nta medan kursen laddas...")) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_6__["CourseBanner"], { title: course.name + " - " + course.points + "p", activePage: this.state.view, routes: {
                        studentPage: Object(_access_control__WEBPACK_IMPORTED_MODULE_15__["preserveImpersonationQuery"])(this.props.viewCourseUrl, { courseId: this.props.id }),
                        feedback: this.props.feedbackUrl
                    }, host: this, course: course, origCourse: this.state.origCourse, backgroundImage: course.images.filter(function (img) { return img.id === course.imageId; }).map(function (img) { return img.url; })[0], isTemplate: course.isTemplate }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer", ref: function (div) { return _this.contentDiv = div; } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inner_edit_course__WEBPACK_IMPORTED_MODULE_7__["InnerEditCourse"], { course: this.state.course, origCourse: this.state.origCourse, host: this }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                this.state.dialogContainers.map(function (_a, i) {
                                    var Component = _a.Component, props = _a.props;
                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: i },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "darken" }),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page-wrap" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: function (dialog) { return _this.refDialog(dialog, i); } }, props)),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_10__["RemoveItem"], { onClick: function () { return _this.closeDialog(); } }))));
                                }))))));
    };
    return EditCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/components/course-builder/courses/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course-builder/courses/index.tsx ***!
  \*********************************************************/
/*! exports provided: EditCourse, Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return Courses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _edit_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-course */ "./src/components/course-builder/courses/edit-course.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditCourse", function() { return _edit_course__WEBPACK_IMPORTED_MODULE_4__["EditCourse"]; });

/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _list_course_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-course-templates */ "./src/components/course-builder/courses/list-course-templates.tsx");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");








var Courses = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Courses, _super);
    function Courses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            subjects: null
        };
        return _this;
    }
    Courses.prototype.componentWillMount = function () {
        this.load();
    };
    Courses.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subjects;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list('subjects', { include: 'standardCourses' })];
                    case 1:
                        subjects = _a.sent();
                        this.setState({ subjects: subjects });
                        return [2 /*return*/];
                }
            });
        });
    };
    Courses.prototype.render = function () {
        var courses = [];
        this.state.subjects && this.state.subjects.forEach(function (s) { return courses.push.apply(courses, s.standardCourses); });
        courses.sort(function (c1, c2) { return c1.name > c2.name ? 1 : c1.name < c2.name ? -1 : 0; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_5__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursmallar"], ["Kursmallar"]))), activePage: "templateBuilder", routes: { feedback: this.props.feedbackUrl } }),
            !this.state.subjects ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null),
                    "V.g. v\u00E4nta medan kurser laddas") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_course_templates__WEBPACK_IMPORTED_MODULE_6__["ListCourseTemplates"], { courses: courses }));
    };
    return Courses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/courses/inner-edit-course.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/courses/inner-edit-course.tsx ***!
  \*********************************************************************/
/*! exports provided: InnerEditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerEditCourse", function() { return InnerEditCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _course_module_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-module-list */ "./src/components/course-builder/courses/course-module-list.tsx");
/* harmony import */ var _sub_components_school_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-components/school-courses */ "./src/components/course-builder/sub-components/school-courses.tsx");
/* harmony import */ var _business_logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _sub_components_editable_teacher_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sub-components/editable-teacher-list */ "./src/components/course-builder/sub-components/editable-teacher-list.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _sub_components_weighted_items_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub-components/weighted-items-table */ "./src/components/course-builder/sub-components/weighted-items-table.tsx");
/* harmony import */ var _utility_components_wysiwyg_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility-components/wysiwyg/index */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _sub_components_editable_workflow_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sub-components/editable-workflow-link */ "./src/components/course-builder/sub-components/editable-workflow-link.tsx");
/* harmony import */ var _utility_components_renameable_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utility-components/renameable-text */ "./src/components/utility-components/renameable-text.tsx");















;
var InnerEditCourse = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerEditCourse, _super);
    function InnerEditCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            changeImageUrl: false
        };
        return _this;
    }
    InnerEditCourse.prototype.setImageUrl = function (imageUrl) {
        var course = this.props.course;
        if (!course.imageId) {
        }
    };
    InnerEditCourse.prototype.render = function () {
        var _a = this.props, course = _a.course, origCourse = _a.origCourse, host = _a.host;
        var uncoveredKnowledgeRequirements = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["getUncoveredKnowledgeRequirements"])(course);
        var idsNotCoveredByAnyTask = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["getIdsNotCoveredByTasks"])(course);
        var sanityCheckWarnings = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["sanityCheck"])(course);
        var courseImage = course.images.find(function (img) { return img.id === course.imageId; });
        var courseImageIsUploaded = courseImage && courseImage.url.startsWith('data:');
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                    course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Kursmall"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kurs\u00F6vergripande"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursens bild"),
                            courseImageIsUploaded ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursens bild ligger i databasen. F\u00F6r att \u00E4ndra bild m\u00E5ste du dra och sl\u00E4ppa en ny bild ovanp\u00E5 den gamla h\u00F6gst upp p\u00E5 denna sida. Bilden kan antingen vara fr\u00E5n en annan webbsida. Lokala bildfiler g\u00E5r ocks\u00E5 bra att dra och sl\u00E4ppa.")
                                : courseImage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { value: courseImage.url, style: { width: '100%', height: '30px' }, onChange: function (ev) { return Object(_course_banner__WEBPACK_IMPORTED_MODULE_7__["setCourseImage"])(course, origCourse, host, ev.target.value); } }),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Bilden som visas h\u00F6gst upp h\u00E4mtas fr\u00E5n angiven URL. F\u00F6r att \u00E4ndra bild kan du redigera URL ovan. Ett annat s\u00E4tt att \u00E4ndra bild \u00E4r att dra och sl\u00E4ppa en ny bild \u00F6ver den gamla h\u00F6gst upp p\u00E5 sidan.")) :
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursen saknar egen bild. L\u00E4gg till en bild genom att dra och sl\u00E4ppa en bild p\u00E5 kurs-bannern h\u00F6gst upp p\u00E5 den h\u00E4r sidan."),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                        !course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Beskrivning"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Beskrivning av kursen. F\u00F6r att skilja mellan olika varianter av samma gymnasiekurs)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "inputTextBox inputTextSmall", value: course.description, onChange: function (ev) { return host.update({ description: { $set: ev.target.value } }); } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Upptaktstext"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(texten ska visas p\u00E5 kursens upptaktssektion)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg_index__WEBPACK_IMPORTED_MODULE_11__["Wysiwyg"], { html: course.runUpText, defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_12__["default"], actions: [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strikethrough",
                                    "heading2",
                                    "heading3",
                                    "olist",
                                    "ulist",
                                    "line",
                                    "link",
                                    "image"
                                ], onChange: function (newHtml) { return host.update({ runUpText: { $set: newHtml } }); } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursresurser"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Resurser f\u00F6r upptakt och kursen som helhet)"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__["EditableResourceList"], { resources: course.resources, onUpdate: function (resourcesUpdates) { return host.update({ resources: resourcesUpdates }); }, host: host }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Arbetsg\u00E5ng"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Eventuell l\u00E4nk till arbetsg\u00E5ng f\u00F6r kursen)"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_workflow_link__WEBPACK_IMPORTED_MODULE_13__["EditableWorkFlowLink"], { url: course.workFlowLink, onUpdate: function (updates) { return host.update({ workFlowLink: updates }); }, host: host }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        !course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Google Classroom"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { placeholder: "Google classroom URL", type: "text", size: 30, value: course.googleClassRoomURL, onChange: function (ev) { return host.update({ googleClassRoomURL: { $set: ev.target.value } }); } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { placeholder: "kod", type: "text", size: 8, value: course.googleClassRoomCode, onChange: function (ev) { return host.update({ googleClassRoomCode: { $set: ev.target.value } }); } })))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        !course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_teacher_list__WEBPACK_IMPORTED_MODULE_8__["EditableTeacherList"], { teachers: course.responsibleTeachers, onUpdate: function (teachersUpdate) {
                                    host.update({ responsibleTeachers: teachersUpdate });
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Inl\u00E4mnings E-post"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { tabIndex: 1, style: { width: '100%' } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "E-postaddress"))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_renameable_text__WEBPACK_IMPORTED_MODULE_14__["RenameableText"], { eager: true, clickAdvertiseText: "Klicka h\u00E4r f\u00F6r att ange vem som tar emot inl\u00E4mningsuppgifter", text: course.assignmentEmails ? course.assignmentEmails[0] : "", placeholder: "Ange mottagare av inl\u00E4mningsuppgifter", tag: "input", onChange: function (value) { return host.update({ assignmentEmails: { $set: [value] } }); } }))))))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet", id: "svid12_6ab4811f15b13c706b43bb47" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "Kursensmoduler" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kursens moduler"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module_list__WEBPACK_IMPORTED_MODULE_4__["CourseModuleList"], { host: host, course: course, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_weighted_items_table__WEBPACK_IMPORTED_MODULE_10__["WeightedItemsTable"], { course: course })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kursens status"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        course.createdBy && course.createdDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen skapades ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.createdDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.createdBy.name),
                            "."),
                        course.modifiedBy && course.modifiedDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen redigerades senast ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.modifiedDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.modifiedBy.name),
                            "."),
                        course.active ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen \u00E4r ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, "AKTIV"),
                            " sedan ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.activatedDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.activatedBy.name),
                            ".") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen \u00E4r ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, "INAKTIV"),
                            course.inactivatedBy ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                "sedan ",
                                Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.inactivatedDate),
                                " av ",
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.inactivatedBy.name),
                                ".") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, ".")),
                        (uncoveredKnowledgeRequirements.length === 0 ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "markedGreen" }, "Modulernas kunskapskrav t\u00E4cker skolverkets krav f\u00F6r denna kurs") :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "markedRed warning-box" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-exclamation-triangle", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Modulernas kunskapskrav t\u00E4cker inte skolverkets krav f\u00F6r denna kurs."))),
                        sanityCheckWarnings.map(function (warning) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: warning, className: "markedRed warning-box" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-exclamation-triangle", "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, warning)); }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        !course.isTemplate && (origCourse ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () {
                                if (confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\n\nKursen kommar att raderas helt!\n\n\u00C4r du s\u00E4ker?"], ["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\\n\\nKursen kommar att raderas helt!\\n\\n\u00C4r du s\u00E4ker?"])), course.name, course.description, course.school)))
                                    host.deleteCourse().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"]);
                            } }, "Ta bort kurs") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return history.go(-1); } }, "Avbryt")),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return host.save(); } }, "Spara"),
                        course.active ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.inactivateAndSave(); } }, "Inaktivera och spara") :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.activateAndSave(); } }, "Aktivera och spara")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_school_courses__WEBPACK_IMPORTED_MODULE_5__["SchoolCourses"], null)));
    };
    return InnerEditCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/courses/list-course-templates.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder/courses/list-course-templates.tsx ***!
  \*************************************************************************/
/*! exports provided: ListCourseTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCourseTemplates", function() { return ListCourseTemplates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");




var ListCourseTemplates = function (props) {
    var courses = props.courses;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["V\u00E4lj kursmall att redigera: "], ["V\u00E4lj kursmall att redigera: "])))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "entity-list" }, courses.map(function (_a) {
            var id = _a.id, name = _a.name, code = _a.code, publishable = _a.publishable, points = _a.points, subjectId = _a.subjectId;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: (publishable ? "complete" : "incomplete") +
                    (props.selectedCourseId === id ? " selected" : "") },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/course-templates/" + subjectId + "/" + id },
                    name,
                    " - ",
                    points));
        })));
};
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/course-builder/index.tsx ***!
  \*************************************************/
/*! exports provided: CourseBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBuilder", function() { return CourseBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _schools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schools */ "./src/components/course-builder/schools/index.tsx");
/* harmony import */ var _schools_new_school__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schools/new-school */ "./src/components/course-builder/schools/new-school.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _subjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subjects */ "./src/components/course-builder/subjects/index.tsx");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses */ "./src/components/course-builder/courses/index.tsx");
/* harmony import */ var _schools_edit_school__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schools/edit-school */ "./src/components/course-builder/schools/edit-school.tsx");
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _courses_create_new__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/create-new */ "./src/components/course-builder/courses/create-new.tsx");
/* harmony import */ var _utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/keep-session-alive */ "./src/utils/keep-session-alive.ts");








// Views





// Keep Session Alive

Object(_utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_13__["keepSessionAlive"])();
var CourseBuilder = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseBuilder, _super);
    function CourseBuilder(props) {
        return _super.call(this, props) || this;
    }
    CourseBuilder.prototype.render = function () {
        var _this = this;
        var isAuthorized = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.roles.some(function (role) { return role === "ADMIN" || role === "EMPLOYEE"; });
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-builder" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null, isAuthorized ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/", render: function (_a) {
                        var match = _a.match;
                        return isAdmin ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools__WEBPACK_IMPORTED_MODULE_5__["Schools"], { viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl }) :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_create_new__WEBPACK_IMPORTED_MODULE_12__["CreateNewCourse"], { feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools__WEBPACK_IMPORTED_MODULE_5__["Schools"], { viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools/new", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_new_school__WEBPACK_IMPORTED_MODULE_6__["NewSchool"], { feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools/:id/edit", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_edit_school__WEBPACK_IMPORTED_MODULE_10__["EditSchool"], { id: match.params.id, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Editera skola"], ["Editera skola"]))), feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/subjects", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects__WEBPACK_IMPORTED_MODULE_8__["Subjects"], { feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/subjects/:id", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects__WEBPACK_IMPORTED_MODULE_8__["ShowSubject"], { id: match.params.id, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/courses/new", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_create_new__WEBPACK_IMPORTED_MODULE_12__["CreateNewCourse"], { feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/courses/create-from-template/:templateId", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses__WEBPACK_IMPORTED_MODULE_9__["EditCourse"], { templateId: match.params.templateId, view: "courseBuilder", viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/courses/:id/edit", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses__WEBPACK_IMPORTED_MODULE_9__["EditCourse"], { id: match.params.id, view: "courseBuilder", viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_11__["CourseBanner"], { title: "Kursbyggaren", activePage: "courseBuilder", routes: { feedback: _this.props.feedbackUrl } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Beh\u00F6righet saknas"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Detta verktyg \u00E4r endast till f\u00F6r anst\u00E4llda p\u00E5 Kunskapsskolan."),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Anv\u00E4ndarattribut"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "ked_boxed", style: { border: "1px solid #eee" } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Attribut"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "V\u00E4rde"))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, Object.keys(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser).map(function (attr) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: attr },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, attr),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser[attr])); })))); } }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_4__["ErrorSuccessFeedback"], null));
    };
    return CourseBuilder;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-resource.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-resource.tsx ***!
  \*********************************************************************/
/*! exports provided: EditResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditResource", function() { return EditResource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_4__);





var EditResource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditResource, _super);
    function EditResource(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.resource || { name: '', url: '' };
        return _this;
    }
    EditResource.prototype.save = function () {
        var resource = this.state;
        if (!valid_url__WEBPACK_IMPORTED_MODULE_4___default.a.isUri(resource.url))
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med exempelvis http:, https: eller mailto:"], ["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med exempelvis http:, https: eller mailto:"])), resource.url));
        this.props.onSave(resource);
    };
    EditResource.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, onSave = _a.onSave, onDelete = _a.onDelete;
        var resource = this.state;
        var isValidUrl = valid_url__WEBPACK_IMPORTED_MODULE_4___default.a.isUri(this.state.url);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Namn:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: true, tabIndex: 1, size: 50, value: resource.name, onChange: function (ev) { return _this.setState({ name: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "L\u00E4nk:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top " },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, value: resource.url, onChange: function (ev) { return _this.setState({ url: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                (resource.createdDate || resource.modifiedDate) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    resource.createdDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        "Resursen/L\u00E4nken skapades ",
                        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(resource.createdDate),
                        " av ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, resource.createdBy.name),
                        "."),
                    resource.modifiedDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        "Resursen/L\u00E4nken redigerades senast ",
                        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(resource.modifiedDate),
                        " av ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, resource.modifiedBy.name),
                        "."),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                onDelete && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () { return onDelete(); } }, "Ta bort resurs/l\u00E4nk"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large" + (isValidUrl ? "" : " btn-inactive"), onClick: isValidUrl && (function () { return onSave(resource); }) }, "Spara")));
    };
    return EditResource;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task.tsx ***!
  \*****************************************************************/
/*! exports provided: EditTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return EditTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/knowledge-matrix */ "./src/components/course-builder/sub-components/knowledge-matrix.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sub-components/select-related-docs */ "./src/components/course-builder/sub-components/select-related-docs.tsx");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_cached_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/cached-response */ "./src/utils/cached-response.ts");
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _contracts_ked_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../contracts/ked-models */ "./src/contracts/ked-models.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");





















var EditTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditTask, _super);
    function EditTask(props) {
        var _this = _super.call(this, props) || this;
        _this.features = new _features__WEBPACK_IMPORTED_MODULE_20__["Features"]();
        var writeAccess = !props.task || Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(props.task);
        _this.state = {
            title: props.task ?
                writeAccess ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera uppgift till \"", "\""], ["Redigera uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Visa uppgift till \"", "\""], ["Visa uppgift till \"", "\""])), props.module.name) :
                props.searchMode ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["S\u00F6k ny uppgift till \"", "\""], ["S\u00F6k ny uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till egen uppgift till \"", "\""], ["L\u00E4gg till egen uppgift till \"", "\""])), props.module.name),
            futureAbilitiesOpen: false,
            taskCustomization: props.taskCustomization || {},
            task: props.task ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $meta: props.task.$meta || 'update' }, props.task) : props.searchMode ? null :
                // No task was given. Set $meta = 'add' to inform EditCourse.save()
                // to add the task to the tasks table.
                {
                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                    $meta: 'add',
                    tags: ["sub:" + props.course.subjectCode],
                    school: !props.course.isTemplate && _globals_KED_env__WEBPACK_IMPORTED_MODULE_14__["default"].currentUser.school,
                    resources: [],
                    abilities: [],
                    centralContent: [],
                    futureAbilities: [],
                    knowledgeRequirements: [],
                    name: "",
                    url: "",
                    acl: props.course.isTemplate ? [
                        "role:USER:R" // (OK to keep after kursbygg-changes). Templates (which will be empty!) will not have tasks. If they had, might not tasks should not be possible to modify. (An ADMIN could belong to a school! Other non-admins at that school should not be able to edit it)
                    ] : [
                        "role:USER:R",
                        "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_14__["default"].currentUser.school + "/EMPLOYEE:S"
                    ]
                },
            searchMarkedIds: props.searchMode && [],
            searchResult: props.searchMode && [],
            isSearching: props.searchMode
        };
        if (props.searchMode) {
            _this.searchResponse = new _utils_cached_response__WEBPACK_IMPORTED_MODULE_10__["CachedResponse"](function () {
                return _globals_KED_env__WEBPACK_IMPORTED_MODULE_14__["default"].kedBackendClient.list("tasks", {
                    tags: "sub:" + props.course.subjectCode,
                    include: ['knowledgeRequirements', 'abilities', 'centralContent'],
                    flags: ['includeIdsOnly']
                });
            }); // TODO: includeIds istead of include?
        }
        return _this;
    }
    EditTask.prototype.setStatePromised = function (state) {
        var _this = this;
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, function () { return state; }, resolve); });
    };
    EditTask.prototype.componentDidMount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.searchMode) return [3 /*break*/, 8];
                        this.setStatePromised({ isSearching: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 8]);
                        return [4 /*yield*/, this.searchResponse.query()];
                    case 2:
                        _a.sent();
                        if (!(this.state.searchMarkedIds && this.state.searchMarkedIds.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updateSearchResult(this.state.searchMarkedIds)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        err_1 = _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"])(err_1);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.setStatePromised({ isSearching: false })];
                    case 7:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.updateSearchMarkedIds = function (searchMarkedIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var setStatePromise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setStatePromise = this.setStatePromised({ task: null, searchMarkedIds: searchMarkedIds, previewTaskContent: null });
                        if (!!this.searchResponse.result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.searchResponse.promise];
                    case 1:
                        _a.sent();
                        // Refresh searchMarkedIds now as user might have clicked around while waiting for
                        // tasks to load...
                        return [4 /*yield*/, setStatePromise];
                    case 2:
                        // Refresh searchMarkedIds now as user might have clicked around while waiting for
                        // tasks to load...
                        _a.sent(); // So we know state has been reflected...
                        searchMarkedIds = this.state.searchMarkedIds;
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.updateSearchResult(searchMarkedIds)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.updateSearchResult = function (searchMarkedIds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allTasksForSubject, searchResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchResponse.query()];
                    case 1:
                        allTasksForSubject = _a.sent();
                        searchResult = allTasksForSubject.filter(function (t) {
                            return searchMarkedIds.every(function (id) {
                                return t.knowledgeRequirements.some(function (kr) { return kr.id === id; }) ||
                                    t.abilities.some(function (a) { return a.id === id; }) ||
                                    t.centralContent.some(function (c) { return c.id === id; });
                            });
                        });
                        this.setStatePromised({
                            searchResult: searchResult
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.onMarkChanged = function (id, isMarked) {
        var searchMode = this.props.searchMode;
        if (searchMode) {
            var searchMarkedIds = this.state.searchMarkedIds;
            this.updateSearchMarkedIds(isMarked ?
                searchMarkedIds.concat(id) :
                searchMarkedIds.filter(function (x) { return x !== id; })).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"]);
            return;
        }
        var course = this.props.course;
        var task = this.state.task;
        // One of the following three will be found:
        var ability = course.abilities.find(function (a) { return a.id === id; });
        var knowledgeRequirement = course.knowledgeRequirements.find(function (r) { return r.id === id; });
        var centralContent = course.centralContent.find(function (cc) { return cc.id === id; });
        var _a = ability ?
            ["abilities", ability] :
            knowledgeRequirement ?
                ["knowledgeRequirements", knowledgeRequirement] :
                centralContent ?
                    ["centralContent", centralContent] :
                    [null, null], collectionProp = _a[0], item = _a[1];
        if (!collectionProp) {
            console.error("Could not find marked id " + id);
            return;
        }
        var updatedCollection = task[collectionProp].slice();
        if (isMarked)
            updatedCollection.push(item);
        else
            updatedCollection.splice(updatedCollection.findIndex(function (doc) { return doc.id === id; }), 1);
        var updatedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
        updatedTask[collectionProp] = updatedCollection;
        this.setStatePromised({
            task: updatedTask
        });
    };
    EditTask.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, task, taskCustomization, writeAccess;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
                        writeAccess = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(task);
                        if (!writeAccess) return [3 /*break*/, 5];
                        if (!task.url && !task.content)
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"], ["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"]))));
                        if (task.url && !valid_url__WEBPACK_IMPORTED_MODULE_8___default.a.isUri(task.url))
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"])), task.url));
                        if (!(this.props.task && this.props.task.id !== task.id)) return [3 /*break*/, 2];
                        // Replace existing task with copy
                        return [4 /*yield*/, this.props.onReplace(this.props.task.id, task)];
                    case 1:
                        // Replace existing task with copy
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // Update existing task
                    return [4 /*yield*/, this.props.onSave(task, null)];
                    case 3:
                        // Update existing task
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!this.props.searchMode) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.props.onSave(task, taskCustomization)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        if (this.props.course.isTemplate && task.$meta === 'add')
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"], ["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"]))));
                        return [4 /*yield*/, this.props.onSaveCustomization(taskCustomization)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.copyTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskCopy;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskCopy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.task, (this.state.taskCustomization || {}), { id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(), acl: this.props.course.isTemplate ? [
                                "role:USER:R" // (OK to keep but this check might become unnescesary if we totally remove the possibility to edit templates) Template tasks should not be possible to modify. (An ADMIN could belong to a school! Other non-admins at that school should not be able to edit it)
                            ] : [
                                "role:USER:R",
                                "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_14__["default"].currentUser.school + "/EMPLOYEE:S"
                            ] });
                        taskCopy.$meta = 'add';
                        return [4 /*yield*/, this.setStatePromised({
                                task: taskCopy,
                                title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera kopierad uppgift till \"", "\""], ["Redigera kopierad uppgift till \"", "\""])), this.props.module.name),
                                taskCustomization: undefined
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.getTaskProp = function (taskProp) {
        var _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
        var customization = taskCustomization && taskCustomization[taskProp];
        return customization !== undefined ?
            customization :
            task[taskProp];
    };
    EditTask.prototype.updateTaskOrCustomization = function (taskProp, updates) {
        var _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
        var writeAccess = task && Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(task);
        if (writeAccess && (!taskCustomization || taskCustomization[taskProp] === undefined)) {
            var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
            newTask[taskProp] = react_addons_update__WEBPACK_IMPORTED_MODULE_5___default()(task[taskProp], updates);
            this.setStatePromised({ task: newTask });
        }
        else {
            var newCustomization = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, taskCustomization);
            newCustomization[taskProp] = react_addons_update__WEBPACK_IMPORTED_MODULE_5___default()(newCustomization[taskProp] || task[taskProp], updates);
            this.setStatePromised({ taskCustomization: newCustomization });
        }
    };
    EditTask.prototype.render = function () {
        var _this = this;
        var _a = this.props, course = _a.course, module = _a.module, onCancel = _a.onCancel, onDelete = _a.onDelete, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, searchMode = _a.searchMode;
        var _b = this.state, task = _b.task, taskCustomization = _b.taskCustomization, title = _b.title, searchResult = _b.searchResult, searchMarkedIds = _b.searchMarkedIds, isSearching = _b.isSearching;
        var markedIds = searchMode ?
            searchMarkedIds :
            task.centralContent.map(function (x) { return x.id; })
                .concat(task.abilities.map(function (x) { return x.id; }))
                .concat(task.knowledgeRequirements.map(function (x) { return x.id; }));
        var writeAccess = task && Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(task);
        var taskUrlValid = task && valid_url__WEBPACK_IMPORTED_MODULE_8___default.a.isUri(task.url);
        var features = this.features;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet sv-use-margins sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet-content" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "h1" }, title))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-fluid-grid sv-grid-ksgs12 sv-layout" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, searchMode ?
                                    "Filtrera på kunskapskrav" : writeAccess ?
                                    "Välj kunskapskrav" :
                                    "Kunskapskrav"),
                                searchMode ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Markera de kunskapskrav som uppgiften m\u00E5ste t\u00E4cka.") : writeAccess &&
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Markera de kunskapskrav som din uppgift t\u00E4cker."),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_4__["KnowledgeMatrix"], { knowledgeRequirements: course.knowledgeRequirements, markedIds: markedIds, idsToMarkNotOk: idsNotCoveredByAnyTask, markMode: searchMode || writeAccess, onMarkChanged: this.onMarkChanged.bind(this) }))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_7__["SelectRelatedDocs"], { options: course.abilities, title: writeAccess || searchMode ? "Välj förmågor" : "Förmågor", markedIds: markedIds, markMode: writeAccess || searchMode, onMarkChanged: this.onMarkChanged.bind(this) })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_7__["SelectRelatedDocs"], { options: course.centralContent, title: writeAccess || searchMode ? "Välj centralt innehåll" : "Centralt innehåll", markedIds: markedIds, markMode: writeAccess || searchMode, onMarkChanged: this.onMarkChanged.bind(this) })),
                        !searchMode && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openClose larger" + (this.state.futureAbilitiesOpen ? " open" : "") },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setStatePromised({ futureAbilitiesOpen: !_this.state.futureAbilitiesOpen }); } }, writeAccess ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "V\u00E4lj ytterligare alternativ") :
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Ytterligare alternativ")),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Framtidsf\u00F6rm\u00E5gor"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, _contracts_ked_models__WEBPACK_IMPORTED_MODULE_13__["futureAbilities"].map(function (fa) {
                                        var selected = task.futureAbilities.indexOf(fa) >= 0;
                                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: fa },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (selected ? " checked" : ""), onClick: writeAccess ? function () {
                                                        var updatedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                                        updatedTask.futureAbilities =
                                                            selected ?
                                                                task.futureAbilities.filter(function (a) { return a != fa; }) :
                                                                task.futureAbilities.concat(fa);
                                                        _this.setStatePromised({ task: updatedTask });
                                                    } : undefined })),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, fa));
                                    })))))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-6" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                            isSearching && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_15__["Spinner"], null),
                                " Laddar uppgifter..."),
                            searchResult ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "task-search-result" + (!this.state.task && !this.state.previewTaskContent ? " fixed" : "") },
                                searchMarkedIds.length === 0 ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Samtliga uppgifter f\u00F6r \u00E4mnet") :
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgifter som t\u00E4cker valda filter"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, searchResult.map(function (foundTask) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: foundTask.id, className: "align-horizontal" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (task && task.id === foundTask.id ? " checked" : ""), onClick: function () { return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(_this).parentElement.scrollTop = 0 || _this.setStatePromised({ task: foundTask, previewTaskContent: null }); } })),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, foundTask.content ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                                                _this.setState({ previewTaskContent: foundTask.content, task: null });
                                                ev.preventDefault();
                                                ev.stopPropagation();
                                            } }, foundTask.name) :
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: foundTask.url, target: "_blank" }, foundTask.name))); })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null)) : task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgiftens namn och l\u00E4nk"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgiftens namn:")),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { autoFocus: true, type: "text", size: 35, value: task.name, disabled: !writeAccess, readOnly: !writeAccess, onChange: function (ev) {
                                                var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                                newTask.name = ev.target.value;
                                                _this.setStatePromised({ task: newTask });
                                            } }))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "URL:")),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", size: 35, value: task.url, disabled: !writeAccess, readOnly: !writeAccess, onChange: function (ev) {
                                                var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                                newTask.url = ev.target.value;
                                                _this.setStatePromised({ task: newTask });
                                            } }))),
                                features.AssignmentTasks && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Inl\u00E4mningsuppgift"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (this.getTaskProp("assignment") ? " checked" : ""), onClick: function () {
                                                    _this.updateTaskOrCustomization("assignment", { $set: !_this.getTaskProp("assignment") });
                                                } })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Den h\u00E4r uppgiften \u00E4r en inl\u00E4mningsuppgift"))),
                                    this.getTaskProp("assignment") && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Inl\u00E4mningsdatum"),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_18__["default"], { selected: this.getTaskProp("deadline") && moment__WEBPACK_IMPORTED_MODULE_19___default()(this.getTaskProp("deadline")), dateFormat: "YYYY-MM-DD", locale: "sv", popperPlacement: "bottom-start", onChange: function (value) {
                                                        _this.updateTaskOrCustomization("deadline", { $set: value.format("YYYY-MM-DD") });
                                                    } })),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, this.getTaskProp("deadline") && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "deleteDate", href: "#", title: "Ta bort inl\u00E4mningsdatum", onClick: function (ev) {
                                                    ev.preventDefault();
                                                    _this.updateTaskOrCustomization("deadline", { $set: null });
                                                } })))))),
                            this.state.previewTaskContent ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: this.state.previewTaskContent } })
                                : task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Uppgiftens l\u00E4randem\u00E5l"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "inputTextBox learning-goal-box", disabled: !writeAccess, value: task.learningGoal, onChange: function (ev) {
                                                var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                                newTask.learningGoal = ev.target.value;
                                                _this.setStatePromised({ task: newTask });
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                    (writeAccess || !!task.content) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Uppgiftens inneh\u00E5ll"),
                                        writeAccess && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Om uppgiften inte l\u00E4nkar till n\u00E5got dokument kan du l\u00E4gga inneh\u00E5ll h\u00E4r."),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_16__["Wysiwyg"], { actions: [
                                                "bold",
                                                "italic",
                                                "underline",
                                                "strikethrough",
                                                "heading2",
                                                "heading3",
                                                "olist",
                                                "ulist",
                                                "line",
                                                "link",
                                                "image"
                                            ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_17__["default"], readOnly: !writeAccess, html: task.content, onChange: function (html) {
                                                var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
                                                newTask.content = html;
                                                _this.setState({ task: newTask });
                                            } })),
                                    taskCustomization && taskCustomization.resources ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Resurser f\u00F6r uppgiften (modifierad f\u00F6r denna kursinstans)") :
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Resurser kopplade till uppgiften"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_11__["EditableResourceList"], { resources: (taskCustomization && taskCustomization.resources) || task.resources, host: this.props.host, onUpdate: function (resourceUpdates) {
                                            _this.updateTaskOrCustomization("resources", resourceUpdates);
                                        } }))),
                        task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Uppgiftens status"),
                            task.createdBy && task.createdDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                "Uppgiften skapades ",
                                Object(_utils__WEBPACK_IMPORTED_MODULE_12__["dtFormat"])(task.createdDate),
                                " av ",
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, task.createdBy.name),
                                "."),
                            task.modifiedBy && task.modifiedDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                "Uppgiften redigerades senast ",
                                Object(_utils__WEBPACK_IMPORTED_MODULE_12__["dtFormat"])(task.modifiedDate),
                                " av ",
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, task.modifiedBy.name),
                                "."),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                            !!this.props.onDelete && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return _this.props.onDelete(); } }, "Ta bort fr\u00E5n kursmodul"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pull-right" }, "\u00A0"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return _this.props.onCancel(); } }, "Avbryt"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return _this.save().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"]); } }, "Spara"),
                            !writeAccess && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return _this.copyTask().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"]); } }, "Skapa kopia av den h\u00E4r uppgiften")))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" }))));
    };
    return EditTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-workflow-link.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-workflow-link.tsx ***!
  \**************************************************************************/
/*! exports provided: EditWorkflowLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkflowLink", function() { return EditWorkflowLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_3__);




var EditWorkflowLink = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditWorkflowLink, _super);
    function EditWorkflowLink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { url: _this.props.url || '' };
        return _this;
    }
    EditWorkflowLink.prototype.save = function () {
        var url = this.state.url;
        if (!valid_url__WEBPACK_IMPORTED_MODULE_3___default.a.isUri(url))
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"])), url));
        this.props.onSave(url);
    };
    EditWorkflowLink.prototype.render = function () {
        var _this = this;
        var _a = this.props, onSave = _a.onSave, onDelete = _a.onDelete;
        var state = this.state;
        var isValidUrl = valid_url__WEBPACK_IMPORTED_MODULE_3___default.a.isUri(this.state.url);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Koppla en arbetsg\u00E5ng till kursen"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Det g\u00E5r bara att l\u00E4gga in en arbetsg\u00E5ng per kurs."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "L\u00E4nk:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top " },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, value: state.url, onChange: function (ev) { return _this.setState({ url: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet", id: "svid12_492422d515badf36646e4ff1" },
                onDelete && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () { return onDelete(); } }, "Ta bort arbetsg\u00E5ng"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large" + (isValidUrl ? "" : " btn-inactive"), onClick: isValidUrl && (function () { return onSave(state.url); }) }, "Spara")));
    };
    return EditWorkflowLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/schools/edit-school.tsx":
/*!***************************************************************!*\
  !*** ./src/components/course-builder/schools/edit-school.tsx ***!
  \***************************************************************/
/*! exports provided: EditSchool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSchool", function() { return EditSchool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");







var EditSchool = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditSchool, _super);
    function EditSchool(props) {
        var _this = _super.call(this, props) || this;
        _this.state = null;
        return _this;
    }
    EditSchool.prototype.componentDidMount = function () {
        this.load().catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err); });
    };
    EditSchool.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, school;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.id) return [3 /*break*/, 2];
                        id = this.props.id;
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.get("schools", id)];
                    case 1:
                        school = _a.sent();
                        this.origSchool = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, school);
                        this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, school));
                        return [3 /*break*/, 3];
                    case 2:
                        // No id, create new instead.
                        this.setState({
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])()
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditSchool.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r, school;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["BatchRunner"]();
                        school = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state);
                        if (!!this.origSchool) return [3 /*break*/, 1];
                        school.acl = ["role:USER:R"];
                        school.acl.push(new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", school.name + "/EMPLOYEE", "W").toString());
                        r.add("schools", school);
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.origSchool.name !== this.state.name)) return [3 /*break*/, 4];
                        // Unshare the old name
                        r.unshare("schools", school.id, [
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", this.origSchool.name + "/EMPLOYEE", "W")
                        ].map(function (a) { return a.toString(); }));
                        if (!(this.origSchool.name.toLowerCase() === this.state.name.toLowerCase())) return [3 /*break*/, 3];
                        // Workaround for bug with renaming when it differs just by casing:
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.batch(r.mutationRequests)];
                    case 2:
                        // Workaround for bug with renaming when it differs just by casing:
                        _a.sent();
                        r.mutationRequests = [];
                        _a.label = 3;
                    case 3:
                        // Share the new name
                        r.share("schools", this.state.id, [
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", this.state.name + "/EMPLOYEE", "W")
                        ].map(function (a) { return a.toString(); }));
                        r.put("schools", school);
                        return [3 /*break*/, 5];
                    case 4:
                        r.put("schools", school);
                        _a.label = 5;
                    case 5: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.batch(r.mutationRequests)];
                    case 6:
                        _a.sent();
                        location.hash = "#/schools";
                        return [2 /*return*/];
                }
            });
        });
    };
    EditSchool.prototype.deleteSchool = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4r du s\u00E4ker p\u00E5 att ta bort skolan \"", "\""], ["\u00C4r du s\u00E4ker p\u00E5 att ta bort skolan \"", "\""])), this.state.name))) return [3 /*break*/, 2];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.delete("schools", this.state.id)];
                    case 1:
                        _a.sent();
                        location.hash = "#/schools";
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditSchool.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, id = _a.id;
        var editExisting = !!id;
        var school = this.state;
        var origSchool = this.origSchool;
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: "Skolor", activePage: "schools", callbacks: { schools: function () { return location.hash = "#/schools"; } }, routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, title),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Namn:"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: true, disabled: !isAdmin, tabIndex: 1, size: 50, value: school ? school.name : "", onChange: function (ev) { return _this.setState({ name: ev.target.value }); } })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                    isAdmin && editExisting && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () {
                            return _this.deleteSchool().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
                        } }, "Ta bort skola"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pull-right" }, "\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], { className: "btn btn-warning btn-large pull-right", to: "/schools" }, "Avbryt"),
                    isAdmin && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large", onClick: function () {
                            if (origSchool && origSchool.name !== school.name) {
                                if (!confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4r du s\u00E4ker p\u00E5 att du vill d\u00F6pa om skolan? Detta p\u00E5verkar portalens funktion f\u00F6r l\u00E4rare och elever som tillh\u00F6r skolan. Namnet m\u00E5ste st\u00E4mma exakt \u00F6verens med namngivningen av skolan p\u00E5 anv\u00E4ndarobjekten.\n\nDet som h\u00E4nder annars \u00E4r att elever och l\u00E4rare p\u00E5 skolan inte l\u00E4ngre hittar n\u00E5gra kurser.\n\nBlir det fel kan du dock alltid bara d\u00F6pa tillbaka skolans namn."], ["\u00C4r du s\u00E4ker p\u00E5 att du vill d\u00F6pa om skolan? Detta p\u00E5verkar portalens funktion f\u00F6r l\u00E4rare och elever som tillh\u00F6r skolan. Namnet m\u00E5ste st\u00E4mma exakt \u00F6verens med namngivningen av skolan p\u00E5 anv\u00E4ndarobjekten.\n\nDet som h\u00E4nder annars \u00E4r att elever och l\u00E4rare p\u00E5 skolan inte l\u00E4ngre hittar n\u00E5gra kurser.\n\nBlir det fel kan du dock alltid bara d\u00F6pa tillbaka skolans namn."]))))) {
                                    return;
                                }
                            }
                            _this.save().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
                        } }, "Spara"))));
    };
    return EditSchool;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder/schools/editable-school-list.tsx":
/*!************************************************************************!*\
  !*** ./src/components/course-builder/schools/editable-school-list.tsx ***!
  \************************************************************************/
/*! exports provided: EditableSchoolList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableSchoolList", function() { return EditableSchoolList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");





var EditableSchoolList = function (props) {
    var schools = props.schools, viewCourseUrl = props.viewCourseUrl;
    var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "editable-school-list" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, schools ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, schools.map(function (school) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { className: "align-horizontal", key: school.id },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "editItem", to: "/schools/" + school.id + "/edit" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, school.name)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { style: { cursor: 'pointer' }, onClick: function () { return Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["actAs"])({ role: "EMPLOYEE", school: school.name }); } }, "Agera som l\u00E4rare p\u00E5 denna skola"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { style: { cursor: 'pointer' }, onClick: function () { return Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["actAs"])({ role: "STUDENT", school: school.name, url: viewCourseUrl }); } }, "Agera som elev p\u00E5 denna skola"))));
            }))) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
            "V.g. v\u00E4nta medan skolor laddas")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        schools && isAdmin && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: "/schools/new", className: "btn" }, "L\u00E4gg till skola"));
};


/***/ }),

/***/ "./src/components/course-builder/schools/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course-builder/schools/index.tsx ***!
  \*********************************************************/
/*! exports provided: Schools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schools", function() { return Schools; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _editable_school_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-school-list */ "./src/components/course-builder/schools/editable-school-list.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");






var Schools = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Schools, _super);
    function Schools(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            schools: null
        };
        return _this;
    }
    Schools.prototype.componentDidMount = function () {
        this.load().catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showError"])(err.message || err); });
    };
    Schools.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schools;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list("schools")];
                    case 1:
                        schools = _a.sent();
                        this.setState({ schools: schools });
                        return [2 /*return*/];
                }
            });
        });
    };
    Schools.prototype.render = function () {
        var schools = this.state.schools;
        schools && schools.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compareProp"])("name"));
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: "Skolor", activePage: "schools", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editable_school_list__WEBPACK_IMPORTED_MODULE_4__["EditableSchoolList"], { schools: schools, viewCourseUrl: this.props.viewCourseUrl }))));
    };
    return Schools;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/schools/new-school.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course-builder/schools/new-school.tsx ***!
  \**************************************************************/
/*! exports provided: NewSchool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSchool", function() { return NewSchool; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_school__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-school */ "./src/components/course-builder/schools/edit-school.tsx");


var NewSchool = function (props) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_edit_school__WEBPACK_IMPORTED_MODULE_1__["EditSchool"], { title: "L\u00E4gg till skola", feedbackUrl: props.feedbackUrl }); };


/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-resource-list.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-resource-list.tsx ***!
  \*********************************************************************************/
/*! exports provided: EditableResourceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableResourceList", function() { return EditableResourceList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-resource */ "./src/components/course-builder/modal-pages/edit-resource.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");





var EditableResourceList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableResourceList, _super);
    function EditableResourceList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableResourceList.prototype.render = function () {
        var _a = this.props, host = _a.host, onUpdate = _a.onUpdate, resources = _a.resources;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, resources.map(function (resource, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return host.openDialog({
                                Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__["EditResource"],
                                props: {
                                    title: "Redigera resurs",
                                    resource: resource,
                                    onSave: function (editedResource) {
                                        var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(editedResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                        onUpdate({ $splice: [[idx, 1, updatedResource]] });
                                        host.closeDialog();
                                    },
                                    onDelete: function () {
                                        onUpdate({ $splice: [[idx, 1]] });
                                        host.closeDialog();
                                    }
                                }
                            }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: resource.url, target: "_blank" }, resource.name)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return host.openDialog({
                    Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__["EditResource"],
                    props: {
                        title: "Lägg till resurs",
                        onSave: function (newResource) {
                            var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(newResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                            onUpdate({ $push: [updatedResource] });
                            host.closeDialog();
                        }
                    }
                }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-paperclip", "aria-hidden": true }),
                " L\u00E4gg till resurs"));
    };
    return EditableResourceList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-task-list.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-task-list.tsx ***!
  \*****************************************************************************/
/*! exports provided: EditableTaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTaskList", function() { return EditableTaskList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-task */ "./src/components/course-builder/modal-pages/edit-task.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");






var EditableTaskList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableTaskList, _super);
    function EditableTaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableTaskList.prototype.openTaskDialog = function (task) {
        var _a = this.props, taskCustomizations = _a.taskCustomizations, course = _a.course, host = _a.host, module = _a.module, taskIds = _a.taskIds, onTaskAdded = _a.onTaskAdded, onTaskUpdated = _a.onTaskUpdated, onTaskCustomizationUpdated = _a.onTaskCustomizationUpdated, onTaskDeleted = _a.onTaskDeleted, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, onTaskReplaced = _a.onTaskReplaced;
        host.openDialog({
            Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
            props: {
                task: task,
                taskCustomization: taskCustomizations && taskCustomizations[task.id],
                module: module,
                course: course,
                host: host,
                idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                onSave: function (task) {
                    var updatedTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(task, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                    onTaskUpdated(updatedTask);
                    host.closeDialog();
                },
                onSaveCustomization: function (customization) {
                    onTaskCustomizationUpdated(task.id, customization);
                    host.closeDialog();
                },
                onDelete: function () {
                    onTaskDeleted(task.id);
                    host.closeDialog();
                },
                onReplace: function (taskId, newTask) {
                    onTaskReplaced(taskId, newTask);
                    host.closeDialog();
                },
                onCancel: function () { return host.closeDialog(); }
            }
        });
    };
    EditableTaskList.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, props.taskIds.map(function (id) { return props.course.tasks.find(function (t) { return t.id === id; }); }).map(function (task) {
                var canUpdateTask = Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(task);
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: task.id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: canUpdateTask ? "editItem" : "viewItem", onClick: function () {
                                return _this.openTaskDialog(task);
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, task.content ?
                        // Rather than linking to url, show the task's content (by opening
                        // the task dialog)
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                                ev.preventDefault();
                                _this.openTaskDialog(task);
                            } }, task.name) :
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: task.url, target: "_blank" }, task.name)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () {
                    var _a = _this.props, course = _a.course, host = _a.host, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, module = _a.module, onTaskAdded = _a.onTaskAdded, onTaskCustomizationUpdated = _a.onTaskCustomizationUpdated;
                    props.host.openDialog({
                        Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
                        props: {
                            searchMode: true,
                            module: module,
                            course: course,
                            host: host,
                            idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                            onSave: function (choosenTask, taskCustomization) {
                                choosenTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(choosenTask, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                onTaskAdded(choosenTask, taskCustomization);
                                host.closeDialog();
                            },
                            onCancel: function () { return host.closeDialog(); }
                        }
                    });
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-search", "aria-hidden": true }),
                " S\u00F6k uppgift"),
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: function () {
                    var _a = _this.props, course = _a.course, host = _a.host, module = _a.module, taskIds = _a.taskIds, onTaskAdded = _a.onTaskAdded, onTaskUpdated = _a.onTaskUpdated, onTaskDeleted = _a.onTaskDeleted, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
                    host.openDialog({
                        Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
                        props: {
                            module: module,
                            course: course,
                            host: host,
                            idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                            onSave: function (newTask) {
                                newTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(newTask, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                onTaskAdded(newTask);
                                host.closeDialog();
                            },
                            onCancel: function () { return host.closeDialog(); }
                        }
                    });
                }, className: "btn" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": true }),
                " L\u00E4gg till egen uppgift"));
    };
    return EditableTaskList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-teacher-list.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-teacher-list.tsx ***!
  \********************************************************************************/
/*! exports provided: EditableTeacherList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTeacherList", function() { return EditableTeacherList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var EditableTeacherList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableTeacherList, _super);
    function EditableTeacherList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { addEmtpyRow: props.teachers.length === 0 };
        return _this;
    }
    EditableTeacherList.prototype.render = function () {
        var _this = this;
        var _a = this.props, teachers = _a.teachers, onUpdate = _a.onUpdate;
        var addEmtpyRow = this.state.addEmtpyRow;
        if (addEmtpyRow)
            teachers = teachers.concat({ name: "", url: "" });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "teachers-list" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Ansvariga l\u00E4rare"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { tabIndex: 1, style: { width: "100%" }, onBlur: function (ev) {
                    return (!ev.relatedTarget ||
                        ev.relatedTarget.tagName !== 'INPUT') &&
                        _this.props.teachers.length > 0 &&
                        _this.setState({ addEmtpyRow: false });
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null, teachers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { style: { width: "20%" } }, "Namn"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "L\u00E4nk eller E-postadress"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, teachers.map(function (teacher, idx) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: idx },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", ref: function (elem) { return _this.nameElem = elem; }, value: teacher.name, autoFocus: !teacher.name && idx > 0, onChange: function (ev) {
                                    if (addEmtpyRow && idx == teachers.length - 1) {
                                        onUpdate({ $push: [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { name: ev.target.value })] });
                                        _this.setState({ addEmtpyRow: false });
                                    }
                                    else if (ev.target.value || teacher.url) {
                                        onUpdate({ $splice: [[idx, 1, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { name: ev.target.value })]] });
                                    }
                                    else {
                                        if (_this.props.teachers.length === 1)
                                            _this.setState({ addEmtpyRow: true });
                                        onUpdate({ $splice: [[idx, 1]] });
                                    }
                                } })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", style: { width: "100%" }, value: teacher.url, onKeyDown: function (ev) {
                                    return ev.which === 9 &&
                                        !ev.shiftKey &&
                                        idx === teachers.length - 1 &&
                                        (teachers.length < 1 || !!teachers[teachers.length - 1].name &&
                                            (_this.setState({ addEmtpyRow: true }), ev.preventDefault()));
                                }, onChange: function (ev) {
                                    if (addEmtpyRow && idx == teachers.length - 1) {
                                        onUpdate({ $push: [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { url: ev.target.value })] });
                                        _this.setState({ addEmtpyRow: false });
                                    }
                                    else if (ev.target.value || teacher.name) {
                                        onUpdate({ $splice: [[idx, 1, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { url: ev.target.value })]] });
                                    }
                                    else {
                                        if (_this.props.teachers.length === 1)
                                            _this.setState({ addEmtpyRow: true });
                                        onUpdate({ $splice: [[idx, 1]] });
                                    }
                                } })));
                }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () {
                    return _this.state.addEmtpyRow ?
                        _this.nameElem.focus() :
                        _this.setState({ addEmtpyRow: true });
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-user-plus", "aria-hidden": true }),
                " L\u00E4gg till ansvarig l\u00E4rare"));
    };
    return EditableTeacherList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-workflow-link.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-workflow-link.tsx ***!
  \*********************************************************************************/
/*! exports provided: EditableWorkFlowLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableWorkFlowLink", function() { return EditableWorkFlowLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-workflow-link */ "./src/components/course-builder/modal-pages/edit-workflow-link.tsx");



var EditableWorkFlowLink = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableWorkFlowLink, _super);
    function EditableWorkFlowLink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableWorkFlowLink.prototype.render = function () {
        var _a = this.props, host = _a.host, onUpdate = _a.onUpdate, url = _a.url;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, url &&
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return host.openDialog({
                                Component: _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__["EditWorkflowLink"],
                                props: {
                                    url: url,
                                    onSave: function (newUrl) {
                                        onUpdate({ $set: newUrl });
                                        host.closeDialog();
                                    },
                                    onDelete: function () {
                                        onUpdate({ $set: undefined });
                                        host.closeDialog();
                                    }
                                }
                            }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: url, target: "_blank" }, "Nuvarande arbetsg\u00E5ng")))),
            !url && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return host.openDialog({
                    Component: _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__["EditWorkflowLink"],
                    props: {
                        onSave: function (newUrl) {
                            onUpdate({ $set: newUrl });
                            host.closeDialog();
                        }
                    }
                }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-paperclip", "aria-hidden": true }),
                " Koppla en arbetsg\u00E5ng till kursen"));
    };
    return EditableWorkFlowLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/knowledge-matrix.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/knowledge-matrix.tsx ***!
  \***************************************************************************/
/*! exports provided: KnowledgeMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeMatrix", function() { return KnowledgeMatrix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var KnowledgeMatrix = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KnowledgeMatrix, _super);
    function KnowledgeMatrix(props) {
        return _super.call(this, props) || this;
    }
    KnowledgeMatrix.prototype.render = function () {
        var _a = this.props, knowledgeRequirements = _a.knowledgeRequirements, markedIds = _a.markedIds;
        var _b = this.props, idsToMarkNotOk = _b.idsToMarkNotOk, markMode = _b.markMode, onMarkChanged = _b.onMarkChanged;
        var columns = ["E", "C", "A"];
        var rows = [];
        var reqs = knowledgeRequirements.slice();
        var row = null;
        while (true) {
            row = columns.map(function (grade) {
                var pNext = reqs.findIndex(function (r) { return r.gradeStep.toUpperCase() === grade; });
                if (pNext < 0)
                    return null;
                var rv = reqs[pNext];
                reqs.splice(pNext, 1);
                return rv;
            });
            if (row.every(function (r) { return r === null; }))
                break;
            rows.push(row);
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columns.map(function (c) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: c }, c); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows.map(function (row, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i }, row.map(function (requirement, j) {
                        var isMarkedOK = requirement && markedIds && markedIds.indexOf(requirement.id) >= 0;
                        var isMarkedNotOK = requirement && idsToMarkNotOk && idsToMarkNotOk[requirement.id];
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j, dangerouslySetInnerHTML: { __html: requirement ? requirement.name : "" }, className: (markMode ? "selectable" : "") +
                                (isMarkedOK ?
                                    " markedGreen" :
                                    (isMarkedNotOK ?
                                        " markedRed" :
                                        "")), onClick: markMode && requirement ?
                                function () { return onMarkChanged(requirement.id, !isMarkedOK); } :
                                undefined });
                    }));
                }))));
        {
        }
    };
    return KnowledgeMatrix;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/remove-item.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/sub-components/remove-item.tsx ***!
  \**********************************************************************/
/*! exports provided: RemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");



;
var RemoveItem = function (_a) {
    var onClick = _a.onClick, className = _a.className, style = _a.style, title = _a.title;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { title: title || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Radera"], ["Radera"]))), className: "removeItem " + (className || ""), onClick: onClick, style: style });
};
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/school-courses.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/school-courses.tsx ***!
  \*************************************************************************/
/*! exports provided: SchoolCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolCourses", function() { return SchoolCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../repos/school-courses */ "./src/repos/school-courses.ts");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");







var SchoolCourses = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolCourses, _super);
    function SchoolCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            schoolCourses: null
        };
        _this.onSchoolCoursesUpdated = _this.onSchoolCoursesUpdated.bind(_this);
        return _this;
    }
    SchoolCourses.prototype.componentDidMount = function () {
        _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__["mySchoolCoursesRepo"].subscribe(this.onSchoolCoursesUpdated).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"]);
    };
    SchoolCourses.prototype.componentWillUnmount = function () {
        _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__["mySchoolCoursesRepo"].unsubscribe(this.onSchoolCoursesUpdated);
    };
    SchoolCourses.prototype.onSchoolCoursesUpdated = function (schoolCourses) {
        var compareName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("name");
        var compareCreatedDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("createdDate");
        schoolCourses.sort(function (a, b) { return compareName(a, b) || compareCreatedDate(a, b); });
        this.setState({ schoolCourses: schoolCourses });
    };
    SchoolCourses.prototype.render = function () {
        var schoolCourses = this.state.schoolCourses;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Skolans kurser"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, !schoolCourses ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                        " Laddar skolans kurser") :
                    schoolCourses.map(function (course) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "schoolCourse", key: course.id },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/" + course.id + "/edit", className: "editItem" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/" + course.id + "/edit" }, course.name)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, course.active && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pill active" }, "Aktiv")),
                            course.active && !course.publishable && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pill incomplete" }, "Inkomplett"))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, course.description)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, course.modifiedBy ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" },
                                "Redigerad av ",
                                course.modifiedBy.name,
                                " / ",
                                Object(_utils__WEBPACK_IMPORTED_MODULE_6__["shortDateFormat"])(course.modifiedDate)) :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small", style: { fontStyle: 'italic' } }, " "))); })),
                location.hash !== "#/courses/new" && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { className: "btn", to: "/courses/new", onClick: function () { return window.scroll(0, 0); } }, "Skapa ny kurs")));
    };
    return SchoolCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/select-related-docs.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/select-related-docs.tsx ***!
  \******************************************************************************/
/*! exports provided: SelectRelatedDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRelatedDocs", function() { return SelectRelatedDocs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");



var SelectRelatedDocs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectRelatedDocs, _super);
    function SelectRelatedDocs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SelectRelatedDocs.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, title = _a.title, markedIds = _a.markedIds, markMode = _a.markMode;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title), className: "larger" }, options.map(function (option) {
            var isMarked = markedIds.some(function (x) { return x === option.id; });
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: option.id, onClick: function () {
                    return markMode && _this.props.onMarkChanged(option.id, !isMarked);
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" +
                        (markMode ? " selectable" : "") +
                        (isMarked ? " markedGreen" : "") },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: option.name } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)));
        }));
    };
    return SelectRelatedDocs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/spinner.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-builder/sub-components/spinner.tsx ***!
  \******************************************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Spinner = function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-spinner fa-spin", "aria-hidden": "true" }),
    "\u00A0"); };


/***/ }),

/***/ "./src/components/course-builder/sub-components/weighted-items-table.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/weighted-items-table.tsx ***!
  \*******************************************************************************/
/*! exports provided: WeightedItemsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightedItemsTable", function() { return WeightedItemsTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_business_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _contracts_ked_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contracts/ked-models */ "./src/contracts/ked-models.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");





var WeightedItemsTable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeightedItemsTable, _super);
    function WeightedItemsTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    WeightedItemsTable.prototype.render = function () {
        var course = this.props.course;
        var isOpen = this.state.isOpen;
        var rows = [];
        var tasksPerId = Object(_courses_business_logic__WEBPACK_IMPORTED_MODULE_2__["getTasksPerId"])(course);
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "centralContent", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "Centralt inneh\u00E5ll")));
        course.centralContent.forEach(function (cc, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: cc.id, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "criteriaText", dangerouslySetInnerHTML: { __html: cc.name } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[cc.id] || []).length)))); });
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "abilities", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "F\u00F6rm\u00E5gor")));
        course.abilities.forEach(function (ability, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: ability.id, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "abilityText", dangerouslySetInnerHTML: { __html: ability.name } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[ability.id] || []).length)))); });
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "futureAbilities", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "Framtidsf\u00F6rm\u00E5gor")));
        _contracts_ked_models__WEBPACK_IMPORTED_MODULE_3__["futureAbilities"].forEach(function (futureAbilityText, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: futureAbilityText, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "abilityText" }, futureAbilityText)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[futureAbilityText] || []).length)))); });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_4__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursens t\u00E4ckningstabell"), contentClassName: "weighted-items-table" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Tabellen anger hur m\u00E5nga uppgifter som ber\u00F6r varje del."),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows)));
    };
    return WeightedItemsTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/subjects/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course-builder/subjects/index.tsx ***!
  \**********************************************************/
/*! exports provided: ShowSubject, Subjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subjects", function() { return Subjects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uploaded_subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploaded-subject */ "./src/components/course-builder/subjects/uploaded-subject.tsx");
/* harmony import */ var _show_subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-subject */ "./src/components/course-builder/subjects/show-subject.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSubject", function() { return _show_subject__WEBPACK_IMPORTED_MODULE_6__["ShowSubject"]; });

/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");











var Subjects = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subjects, _super);
    function Subjects(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isListingSubjects: true,
            subjects: [],
            uploadedSubject: null
        };
        return _this;
    }
    Subjects.prototype.componentWillMount = function () {
        this.load();
    };
    Subjects.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subjects;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list("subjects")];
                    case 1:
                        subjects = _a.sent();
                        subjects.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("name"));
                        this.setState({ subjects: subjects, isListingSubjects: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    Subjects.prototype.handleFileSelect = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, xml, doc, model, courses, i, course, knownledgeRequirements;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.stopPropagation();
                        ev.preventDefault();
                        files = ev.dataTransfer.files;
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["readBlobAsText"])(files[0])];
                    case 1:
                        xml = _a.sent();
                        doc = jquery__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default.a.parseXML(xml));
                        model = {
                            name: doc.find("subject>name").text(),
                            code: doc.find("subject>code").text(),
                            purpose: doc.find("subject>purpose").text(),
                            courses: []
                        };
                        courses = doc.find("subject>courses");
                        for (i = 0; i < courses.length; ++i) {
                            course = jquery__WEBPACK_IMPORTED_MODULE_4___default()(courses[i]);
                            knownledgeRequirements = [].slice.call(course.find("knowledgeRequirements"))
                                .map(function (r) { return ({ gradeStep: jquery__WEBPACK_IMPORTED_MODULE_4___default()(r).find('gradeStep').text(), text: jquery__WEBPACK_IMPORTED_MODULE_4___default()(r).find('text').text() }); });
                            model.courses.push({
                                name: course.find("name").text(),
                                code: course.find("code").text(),
                                centralContent: course.find("centralContent").text(),
                                points: parseInt(course.find("point").text()),
                                knownledgeRequirements: knownledgeRequirements,
                            });
                        }
                        this.setState({ uploadedSubject: model });
                        return [2 /*return*/];
                }
            });
        });
    };
    Subjects.prototype.onImportSuccess = function (subject) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Importen av ", " lyckades"], ["Importen av ", " lyckades"])), subject));
        this.setState({ uploadedSubject: null });
        this.load();
    };
    Subjects.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_9__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnen"], ["\u00C4mnen"]))), activePage: "subjects", routes: { feedback: this.props.feedbackUrl } }),
            this.state.uploadedSubject ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_uploaded_subject__WEBPACK_IMPORTED_MODULE_5__["UploadedSubject"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ onCancel: function () { return _this.setState({ uploadedSubject: null }); }, onImportSuccess: function (subject) { return _this.onImportSuccess(subject); } }, this.state.uploadedSubject))
                : this.state.isListingSubjects ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], null),
                            "Var god v\u00E4nta medan \u00E4mnen h\u00E4mtas...")) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnen"], ["\u00C4mnen"])))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, this.state.subjects.map(function (s) {
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: s.id, className: s.publishable ? "complete" : "incomplete" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], { to: "/subjects/" + s.id }, s.name));
                        })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "drop-zone", onDragOver: _utils__WEBPACK_IMPORTED_MODULE_8__["allowCopy"], onDrop: function (ev) { return _this.handleFileSelect(ev); } },
                            "Droppa Subject-fil h\u00E4r fr\u00E5n skolverket (H\u00E4mtas fr\u00E5n ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "http://opendata.skolverket.se", target: "skolverket" }, "opendata.skolverket.se"),
                            ")")));
    };
    return Subjects;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/subjects/show-subject.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/subjects/show-subject.tsx ***!
  \*****************************************************************/
/*! exports provided: ShowSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubject", function() { return ShowSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");





var ShowSubject = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowSubject, _super);
    function ShowSubject(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { subject: null };
        return _this;
    }
    ShowSubject.prototype.componentWillMount = function () {
        this.load();
    };
    ShowSubject.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.get('subjects', this.props.id, { include: 'courseTemplates' })];
                    case 1:
                        subject = _a.sent();
                        this.setState({ subject: subject });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowSubject.prototype.render = function () {
        if (!this.state.subject)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null));
        var _a = this.state.subject, name = _a.name, code = _a.code, courseTemplates = _a.courseTemplates;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_3__["CourseBanner"], { title: name, activePage: "subjects", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                "Kurser f\u00F6r \u00E4mnet ",
                name,
                " (",
                code,
                ")"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "entity-list" }, courseTemplates.map(function (_a) {
                var id = _a.id, name = _a.name, code = _a.code, publishable = _a.publishable, points = _a.points;
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: "complete" },
                    name,
                    " - ",
                    points,
                    "p");
            })));
    };
    return ShowSubject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/subjects/uploaded-subject.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/subjects/uploaded-subject.tsx ***!
  \*********************************************************************/
/*! exports provided: UploadedSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedSubject", function() { return UploadedSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");






var UploadedSubject = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UploadedSubject, _super);
    function UploadedSubject(props) {
        var _this = _super.call(this, props) || this;
        _this.coursesElems = {};
        _this.centralContentElems = [];
        _this.knowledgeRequirementElems = [];
        _this.state = {
            showFullText: false,
            changes: [],
            isWorking: true,
            isImporting: false
        };
        return _this;
    }
    UploadedSubject.prototype.componentDidMount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addClassesForCherryPickedElements();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.diffWithExisting()];
                    case 2:
                        changes = _a.sent();
                        this.setState({ changes: changes });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({ isWorking: false });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UploadedSubject.prototype.addClassesForCherryPickedElements = function () {
        var abilities = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.purposeElem).find('li').first().parent().children('li');
        abilities.addClass('ability');
        var centralContents = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.centralContentElems).find('li');
        centralContents.addClass('central-content');
        var knowledgeRequirements = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.knowledgeRequirementElems).find('p');
        knowledgeRequirements.addClass('knowledge-requirement');
        var all = jquery__WEBPACK_IMPORTED_MODULE_3___default()([abilities, centralContents, knowledgeRequirements]);
        all.addClass('marked-area');
    };
    UploadedSubject.prototype.cherryPickData = function () {
        var _this = this;
        //
        // Reads elements (tagged by classes in addClassesForCherryPickedElements()) and converts their inner HTML to the corresponding
        // model SubjectToImport. Note that if we need to adjust how to pick the right LI or P elements, we
        // will only need to change the code in addClassesForCherryPickedElements(), not this code.
        //
        var skolSubject = this.props;
        var abilities = Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.purposeElem).find('li').first().parent().children('li'));
        return {
            name: skolSubject.name,
            code: skolSubject.code,
            abilities: abilities.map(function (a, i) { return i + 1 + ". " + jquery__WEBPACK_IMPORTED_MODULE_3___default()(a).html(); }),
            courses: Object.keys(this.coursesElems)
                .map(function (courseCode) { return _this.coursesElems[courseCode]; })
                .map(function (_a) {
                var course = _a.course, elem = _a.elem;
                return ({
                    name: course.name,
                    code: course.code,
                    points: course.points,
                    centralContent: Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.central-content')).map(function (c) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(c).html(); }),
                    knowledgeRequirements: Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-E .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html(); })
                        .map(function (html) { return ({ gradeStep: "E", html: html }); })
                        .concat(Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-C .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html(); })
                        .map(function (html) { return ({ gradeStep: "C", html: html }); }))
                        .concat(Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-A .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html(); })
                        .map(function (html) { return ({ gradeStep: "A", html: html }); }))
                });
            })
        };
    };
    UploadedSubject.prototype.diffWithExisting = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            function ct() {
                var rv = createTime;
                createTime += 2;
                return rv;
            }
            var subjectToImport, changes, existingSubjects, existingSubject, centralContent, knowledgeRequirements, createTime, expandedCourseTemplates, _loop_1, _i, expandedCourseTemplates_1, courseTemplate, newSubject_1, subjectAbilities, _loop_2, _a, _b, a, _loop_3, _c, _d, c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        subjectToImport = this.cherryPickData();
                        changes = [];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("subjects")];
                    case 1:
                        existingSubjects = _e.sent();
                        existingSubject = existingSubjects.filter(function (s) { return s.code === _this.props.code; })[0];
                        centralContent = [], knowledgeRequirements = [];
                        createTime = Date.now();
                        if (!existingSubject) return [3 /*break*/, 8];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.get('subjects', existingSubject.id, { include: "courseTemplates" })];
                    case 2:
                        // Include abilities and standardCourses with the found Subject:
                        existingSubject = _e.sent();
                        return [4 /*yield*/, Promise.all(existingSubject.courseTemplates.map(function (ct) { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.get("courses", ct.id, {
                                include: [
                                    'centralContent',
                                    'knowledgeRequirements'
                                ]
                            }); }))];
                    case 3:
                        expandedCourseTemplates = _e.sent();
                        _loop_1 = function (courseTemplate) {
                            var xmlCourse, centralContentOrder, knowledgeRequirementsOrder, derivedCourses, _loop_4, _i, derivedCourses_1, course;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        xmlCourse = subjectToImport.courses.find(function (c) { return c.name === courseTemplate.name; });
                                        centralContentOrder = xmlCourse.centralContent
                                            .map(function (html) { return courseTemplate.centralContent
                                            .filter(function (cc) { return cc.name === html; })
                                            .map(function (cc) { return cc.id; })[0]; });
                                        if (centralContentOrder.some(function (id) { return !id; }))
                                            throw new Error("Could not lookup all central contents!");
                                        knowledgeRequirementsOrder = xmlCourse.knowledgeRequirements
                                            .map(function (xmlKR) { return courseTemplate.knowledgeRequirements
                                            .filter(function (kr) { return kr.name === xmlKR.html && kr.gradeStep === xmlKR.gradeStep; })
                                            .map(function (kr) { return kr.id; })[0]; });
                                        if (knowledgeRequirementsOrder.some(function (id) { return !id; }))
                                            throw new Error("Could not lookup all knowledge requirements!");
                                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("courses", { name: courseTemplate.name })];
                                    case 1:
                                        derivedCourses = _a.sent();
                                        // Just for sure - filter away courses with same name but different course code...
                                        derivedCourses = derivedCourses.filter(function (c) { return c.subjectCode === subjectToImport.code; });
                                        _loop_4 = function (course) {
                                            if (!course.centralContentOrder ||
                                                !course.knowledgeRequirementsOrder ||
                                                course.centralContentOrder.join(',') !== centralContentOrder.join(',') ||
                                                course.knowledgeRequirementsOrder.join(',') !== knowledgeRequirementsOrder.join(',')) {
                                                course.centralContentOrder = centralContentOrder;
                                                course.knowledgeRequirementsOrder = knowledgeRequirementsOrder;
                                                changes.push({
                                                    change: "Uppdatera ordningen för centralt innehåll och kunskapskrav",
                                                    content: course.name + " p\u00E5 " + course.school + " (" + course.description + ")",
                                                    mutations: function (r) {
                                                        r.put("courses", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course));
                                                    }
                                                });
                                            }
                                        };
                                        for (_i = 0, derivedCourses_1 = derivedCourses; _i < derivedCourses_1.length; _i++) {
                                            course = derivedCourses_1[_i];
                                            _loop_4(course);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, expandedCourseTemplates_1 = expandedCourseTemplates;
                        _e.label = 4;
                    case 4:
                        if (!(_i < expandedCourseTemplates_1.length)) return [3 /*break*/, 7];
                        courseTemplate = expandedCourseTemplates_1[_i];
                        return [5 /*yield**/, _loop_1(courseTemplate)];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        newSubject_1 = existingSubject = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                            acl: ["role:USER:R"],
                            code: subjectToImport.code,
                            name: subjectToImport.name,
                            publishable: false,
                            dateTime: ct()
                        };
                        changes.push({
                            change: "Nytt ämne",
                            content: subjectToImport.name + " (" + subjectToImport.code + ")",
                            mutations: function (r) { return r.add("subjects", newSubject_1); }
                        });
                        subjectAbilities = [];
                        _loop_2 = function (a) {
                            var newAbility = {
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                name: a,
                                acl: ["role:USER:R"],
                                dateTime: ct()
                            };
                            subjectAbilities.push(newAbility); // To refer from in courses later on!
                            changes.push({
                                change: "Ny förmåga",
                                content: a,
                                mutations: function (r) {
                                    r.add("abilities", newAbility);
                                    r.link("subjects", newSubject_1.id, "abilities", newAbility.id, "abilities");
                                }
                            });
                        };
                        for (_a = 0, _b = subjectToImport.abilities; _a < _b.length; _a++) {
                            a = _b[_a];
                            _loop_2(a);
                        }
                        _loop_3 = function (c) {
                            var newCourse = {
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                subjectCode: newSubject_1.code,
                                tags: ["sub:" + newSubject_1.code],
                                dateTime: ct(),
                                isTemplate: true,
                                acl: ["role:EMPLOYEE:R"],
                                name: c.name,
                                code: c.code,
                                points: c.points,
                                modules: [],
                                subjectId: newSubject_1.id,
                                resources: [],
                                createdBy: { name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.displayName, url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.mail },
                                createdDate: Date.now(),
                                knowledgeRequirementsOrder: [],
                                centralContentOrder: []
                            };
                            changes.push({
                                change: "Ny kurs",
                                content: c.name,
                                mutations: function (r) {
                                    r.add("courses", newCourse);
                                    r.link("subjects", newSubject_1.id, "courses", newCourse.id, "courseTemplates");
                                }
                            });
                            var _loop_5 = function (html) {
                                // Check if there exists an identical central content on previous course first
                                var newCentralContent = centralContent.filter(function (cc) { return cc.name === html; })[0];
                                if (!newCentralContent) {
                                    newCentralContent = {
                                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                        dateTime: ct(),
                                        name: html,
                                        acl: ["role:USER:R"]
                                    };
                                    centralContent.push(newCentralContent);
                                    changes.push({
                                        change: "Nytt centralt innehåll",
                                        content: html,
                                        mutations: function (r) {
                                            r.add("central-content", newCentralContent);
                                            r.link("courses", newCourse.id, "central-content", newCentralContent.id, "centralContent");
                                        }
                                    });
                                }
                                else {
                                    changes.push({
                                        mutations: function (r) {
                                            r.link("courses", newCourse.id, "central-content", newCentralContent.id, "centralContent");
                                        }
                                    });
                                }
                                // Register the order in which this central content appeared in the XML:
                                newCourse.centralContentOrder.push(newCentralContent.id);
                            };
                            for (var _i = 0, _a = c.centralContent; _i < _a.length; _i++) {
                                var html = _a[_i];
                                _loop_5(html);
                            }
                            var _loop_6 = function (cr) {
                                var newKnowledgeRequirement = knowledgeRequirements.filter(function (kr) { return kr.name === cr.html && kr.gradeStep === cr.gradeStep; })[0];
                                if (!newKnowledgeRequirement) {
                                    newKnowledgeRequirement = {
                                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                        dateTime: ct(),
                                        name: cr.html,
                                        gradeStep: cr.gradeStep,
                                        acl: ["role:USER:R"]
                                    };
                                    knowledgeRequirements.push(newKnowledgeRequirement);
                                    changes.push({
                                        change: "Nytt kunskapskrav för betyget " + cr.gradeStep,
                                        content: cr.html,
                                        mutations: function (r) {
                                            r.add("knowledge-requirements", newKnowledgeRequirement);
                                            r.link("courses", newCourse.id, "knowledge-requirements", newKnowledgeRequirement.id, "knowledgeRequirements");
                                        }
                                    });
                                }
                                else {
                                    changes.push({
                                        mutations: function (r) {
                                            r.link("courses", newCourse.id, "knowledge-requirements", newKnowledgeRequirement.id, "knowledgeRequirements");
                                        }
                                    });
                                }
                                // Register the order in which this knowledge requirement appeared in the XML:
                                newCourse.knowledgeRequirementsOrder.push(newKnowledgeRequirement.id);
                            };
                            for (var _b = 0, _c = c.knowledgeRequirements; _b < _c.length; _b++) {
                                var cr = _c[_b];
                                _loop_6(cr);
                            }
                            var _loop_7 = function (a) {
                                changes.push({
                                    mutations: function (r) {
                                        r.link("courses", newCourse.id, "abilities", a.id, "abilities");
                                    }
                                });
                            };
                            // Build knowledge matrix
                            // Link directly from course template to all abilities that the subject has:
                            for (var _d = 0, subjectAbilities_1 = subjectAbilities; _d < subjectAbilities_1.length; _d++) {
                                var a = subjectAbilities_1[_d];
                                _loop_7(a);
                            }
                        };
                        for (_c = 0, _d = subjectToImport.courses; _c < _d.length; _c++) {
                            c = _d[_c];
                            _loop_3(c);
                        }
                        _e.label = 9;
                    case 9: return [2 /*return*/, changes];
                }
            });
        });
    };
    UploadedSubject.prototype.cancel = function () {
        this.props.onCancel();
    };
    UploadedSubject.prototype.import = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allMutations;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isWorking: true, isImporting: true });
                        allMutations = this.state.changes.map(function (change) { return change.mutations; });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.do(function (r) {
                                allMutations.forEach(function (mut) { return mut(r); });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({ isWorking: false, isImporting: false });
                        return [7 /*endfinally*/];
                    case 4:
                        this.props.onImportSuccess(this.props.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadedSubject.prototype.fixL = function (html) {
        return html; //.replace('<l fromat="OL">')
    };
    UploadedSubject.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Uppladdat \u00C4mne"], ["Uppladdat \u00C4mne"])))),
            this.state.isWorking ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Arbetar...") :
                this.state.isImporting ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Importerar...") :
                    this.state.changes.length === 0 ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "\u00C4mnet redan importerat."),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.cancel(); } }, " OK ")) :
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { colSpan: 2 }, "Granskning av \u00E4ndringar i grund-data")),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "\u00C4ndring"),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inneh\u00E5ll"))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, this.state.changes.filter(function (change) { return change.change; }).map(function (change) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: change.change + change.content },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, change.change),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { dangerouslySetInnerHTML: { __html: change.content } })); }))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.cancel(); }, disabled: this.state.isImporting }, "Avbryt"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.import(); }, disabled: this.state.isImporting }, "Importera"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.setState({ showFullText: !_this.state.showFullText }); } }, this.state.showFullText ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["D\u00F6lj nedan"], ["D\u00F6lj nedan"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Visa hela texten fr\u00E5n Skolverket"], ["Visa hela texten fr\u00E5n Skolverket"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { style: { display: this.state.showFullText ? '' : 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Namn"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, this.props.name)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "\u00C4mneskod"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, this.props.code)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Syfte"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { ref: function (elem) { return _this.purposeElem = elem; }, dangerouslySetInnerHTML: { __html: this.fixL(this.props.purpose) } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kurser"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, this.props.courses.map(function (course) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { key: course.code, ref: function (elem) { return _this.coursesElems[course.code] = { course: course, elem: elem }; } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kursens namn"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.name)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kurskod"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.code)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Po\u00E4ng"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.points)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Centralt inneh\u00E5ll"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { ref: function (elem) { return _this.centralContentElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.centralContent) } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg E"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-E", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'E'; })[0].text) } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg C"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-C", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'C'; })[0].text) } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg A"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-A", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'A'; })[0].text) } })))); }))))));
    };
    return UploadedSubject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/utils.ts":
/*!************************************************!*\
  !*** ./src/components/course-builder/utils.ts ***!
  \************************************************/
/*! exports provided: updateDocumentGraphs, dtFormat, shortDateFormat, updateModificationStamp, updateCreationStamp, updateModificationAndCreationStamps, applyEtags, readBlob, readBlobAsText, readBlobAsDataUrl, allowCopy, updateCourseBuilderStatus, loadCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDocumentGraphs", function() { return updateDocumentGraphs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtFormat", function() { return dtFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortDateFormat", function() { return shortDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModificationStamp", function() { return updateModificationStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCreationStamp", function() { return updateCreationStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModificationAndCreationStamps", function() { return updateModificationAndCreationStamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEtags", function() { return applyEtags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlob", function() { return readBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsText", function() { return readBlobAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsDataUrl", function() { return readBlobAsDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowCopy", function() { return allowCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourseBuilderStatus", function() { return updateCourseBuilderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourse", function() { return loadCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");






function updateDocumentGraphs(oldDoc, newDoc, table, graphs, batch) {
    var docUpdates = {};
    var docId = newDoc.id;
    var _loop_1 = function (navProp) {
        var foreignTable = graphs[navProp];
        var oldList = oldDoc[navProp] || [];
        var newList = newDoc[navProp];
        if (!newList)
            return "continue";
        var tuples = newList
            .map(function (doc, idx) { return ({ doc: doc, idx: idx }); }); // Create tubles of {doc, array-index} so we can update result
        var added = tuples.filter(function (tuple) { return !oldList.some(function (o) { return o.id === tuple.doc.id; }); }); // Find added items
        for (var _i = 0, added_1 = added; _i < added_1.length; _i++) {
            var a = added_1[_i];
            var mutatedSubDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a.doc);
            var meta = mutatedSubDoc.$meta;
            delete mutatedSubDoc.$meta; // Delete $meta so that "add" or "update" does not persiste to next state.
            if (meta === 'add') {
                if (!mutatedSubDoc.id)
                    mutatedSubDoc.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(); // Generate ID if not done yet.
                // Now put an 'add' mutation in the batch queue.
                batch.add(foreignTable, mutatedSubDoc);
            }
            else if (meta === 'update') {
                batch.put(foreignTable, mutatedSubDoc);
            }
            batch.link(table, docId, foreignTable, mutatedSubDoc.id, navProp);
            // Update result so that state is reflected after succesful POST to server.
            if (!docUpdates[navProp])
                docUpdates[navProp] = {};
            docUpdates[navProp][a.idx] = { $set: mutatedSubDoc };
        }
        var removed = oldList.filter(function (o) { return !newList.some(function (n) { return n.id === o.id; }); });
        for (var _a = 0, removed_1 = removed; _a < removed_1.length; _a++) {
            var r = removed_1[_a];
            batch.unlink(table, docId, foreignTable, r.id, navProp);
        }
        var updated = tuples.filter(function (tuple) { return oldList.some(function (o) { return o.id === tuple.doc.id && tuple.doc.$meta === 'update'; }); });
        for (var _b = 0, updated_1 = updated; _b < updated_1.length; _b++) {
            var u = updated_1[_b];
            var mutatedSubDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, u.doc);
            delete mutatedSubDoc.$meta;
            batch.put(foreignTable, mutatedSubDoc);
            // Update result so that $meta is removed from navigation prop after successful POST to server.
            if (!docUpdates[navProp])
                docUpdates[navProp] = {};
            docUpdates[navProp][u.idx] = { $set: mutatedSubDoc };
        }
    };
    for (var _i = 0, _a = Object.keys(graphs); _i < _a.length; _i++) {
        var navProp = _a[_i];
        _loop_1(navProp);
    }
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(newDoc, docUpdates);
}
function dtFormat(dateTime) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(dateTime).format('YYMMDD HH:mm');
}
function shortDateFormat(dateTime) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(dateTime).format('YYMMDD');
}
function updateModificationStamp(now, obj, user) {
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(obj, {
        dateTime: { $set: now },
        modifiedDate: { $set: now },
        modifiedBy: {
            $set: {
                name: user.displayName,
                url: "mailto:" + user.mail
            }
        }
    });
}
function updateCreationStamp(now, obj, user) {
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(obj, {
        createdDate: { $set: Date.now() },
        createdBy: {
            $set: {
                name: user.displayName,
                url: "mailto:" + user.mail
            }
        }
    });
}
function updateModificationAndCreationStamps(obj, user) {
    var now = Date.now();
    obj = updateModificationStamp(now, obj, user);
    if (!obj.createdBy)
        obj = updateCreationStamp(now, obj, user);
    return obj;
}
function applyEtags(doc, newEtags, graphs) {
    var res = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc);
    var etag = newEtags[doc.id];
    if (etag)
        res.$etag = etag;
    for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
        var label = graphs_1[_i];
        var newList = doc[label].map(function (d) { return applyEtags(d, newEtags, []); });
        res[label] = newList;
    }
    return res;
}
function readBlob(blob, m) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (ev) { return resolve(ev.target.result); };
        reader.onabort = function (ev) { return reject(new Error("file read aborted")); };
        reader.onerror = function (ev) { return reject(ev.target.error); };
        m(reader);
    });
}
function readBlobAsText(blob) {
    return readBlob(blob, function (r) { return r.readAsText(blob); });
}
function readBlobAsDataUrl(blob) {
    return readBlob(blob, function (r) { return r.readAsDataURL(blob); });
}
function allowCopy(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}
function updateCourseBuilderStatus(status) {
    var div = jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.course-builder')[0];
    if (div)
        div.className = "course-builder" + (status ? " status " + status : "");
}
function loadCourse(id, options) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var client, includeTemplateChain, _a, course, courseTasks, templateChain;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient;
                    includeTemplateChain = options && options.includeTemplateChain;
                    return [4 /*yield*/, Promise.all([
                            client.get("courses", id, {
                                include: [
                                    "centralContent",
                                    "knowledgeRequirements",
                                    "abilities",
                                    "images",
                                    "acl" // Don't include tasks here...
                                ]
                            }),
                            // ... but include tasks here instead so that we can load the graphs for the
                            // tasks as well!
                            client.list("tasks", {
                                hasEdgesFrom: id,
                                include: ['knowledgeRequirements', 'centralContent', 'abilities', 'acl'],
                                flags: ['includeIdsOnly'] // Don't need redundant info that's already on course
                            }),
                            includeTemplateChain && client.list("courses", {
                                hasEdgesFrom: id,
                                flags: ['idsOnly']
                            })
                        ])];
                case 1:
                    _a = (_b.sent()), course = _a[0], courseTasks = _a[1], templateChain = _a[2];
                    course.tasks = courseTasks;
                    // Correct the order of KnowledgeRequirements
                    if (course.knowledgeRequirementsOrder) {
                        course.knowledgeRequirements = course.knowledgeRequirementsOrder.map(function (id) {
                            return course.knowledgeRequirements.find(function (c) { return c.id === id; });
                        });
                    }
                    // Correct the order of CentralContent
                    if (course.centralContentOrder) {
                        course.centralContent = course.centralContentOrder.map(function (id) {
                            return course.centralContent.find(function (cc) { return cc.id === id; });
                        });
                    }
                    // Include template chain if requested.
                    if (includeTemplateChain)
                        course.templateChain = templateChain;
                    return [2 /*return*/, course];
            }
        });
    });
}


/***/ }),

/***/ "./src/components/utility-components/open-close-box.tsx":
/*!**************************************************************!*\
  !*** ./src/components/utility-components/open-close-box.tsx ***!
  \**************************************************************/
/*! exports provided: OpenCloseBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseBox", function() { return OpenCloseBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* REFACTOR: Move this component outside coursebuilder!
   This is a general-purpose component
*/


var OpenCloseBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OpenCloseBox, _super);
    function OpenCloseBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    OpenCloseBox.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.headerOpen !== this.props.headerOpen) {
            this.setState({ headerOpen: nextProps.headerOpen });
        }
    };
    OpenCloseBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, className = _a.className, children = _a.children, headerClassName = _a.headerClassName, contentClassName = _a.contentClassName;
        var headerOpen = this.state.headerOpen;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader" + (headerClassName ? " " + headerClassName : ""), onClick: function () {
                    if (_this.props.onOpenClose)
                        _this.props.onOpenClose(!_this.state.headerOpen);
                    _this.setState({ headerOpen: !_this.state.headerOpen });
                } }, title),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" + (contentClassName ? " " + contentClassName : "") }, children));
    };
    return OpenCloseBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/renameable-text.tsx":
/*!***************************************************************!*\
  !*** ./src/components/utility-components/renameable-text.tsx ***!
  \***************************************************************/
/*! exports provided: RenameableText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameableText", function() { return RenameableText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Makes a text element (such as an A or P tag) possible to replace with an input element of the same CSS style, for example by clicking on it.
 *
*/
var RenameableText = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RenameableText, _super);
    function RenameableText(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editMode: false,
            runtimeStyle: null,
            text: props.text || ""
        };
        return _this;
    }
    RenameableText.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.text !== nextProps.text) {
            this.setState({ text: nextProps.text || "" });
        }
    };
    RenameableText.prototype.render = function () {
        var _this = this;
        var text = this.state.text || "";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "renameable-text" + (text ? "" : " unnamed") + (this.props.readOnly ? " disabled" : ""), tabIndex: !this.state.editMode && 0, onFocus: function (e) { _this.rename(); }, style: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (label) { return _this.label = label; }, style: {
                    display: this.state.editMode ? 'none' : ''
                } }, text || this.props.clickAdvertiseText),
            this.props.tag === 'textarea' ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { ref: function (input) { return _this.input = input; }, maxLength: this.props.maxChars, style: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.runtimeStyle, { display: this.state.editMode ? '' : 'none' }), onFocus: function (ev) { return jquery__WEBPACK_IMPORTED_MODULE_2___default()(ev.target).select(); }, onBlur: this.onBlur.bind(this), value: text, onKeyDown: this.onKeyDown.bind(this), onChange: this.onChange.bind(this), tabIndex: this.state.editMode && 0, placeholder: this.props.placeholder }) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { ref: function (input) { return _this.input = input; }, type: "text", maxLength: this.props.maxChars, style: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.runtimeStyle, { display: this.state.editMode ? '' : 'none' }), onFocus: function (ev) { return jquery__WEBPACK_IMPORTED_MODULE_2___default()(ev.target).select(); }, onBlur: this.onBlur.bind(this), value: text, onKeyDown: this.onKeyDown.bind(this), onChange: this.onChange.bind(this), tabIndex: this.state.editMode ? 0 : undefined, placeholder: this.props.placeholder }));
    };
    RenameableText.prototype.onKeyDown = function (e) {
        if (e.keyCode === 27) {
            this.input.value = this.props.text || "";
            this.input.blur();
            e.stopPropagation();
        }
        else if (e.keyCode === 13) {
            this.propagateOnChange(this.input.value);
            this.setState({ editMode: false, text: this.input.value });
        }
    };
    RenameableText.prototype.onBlur = function (e) {
        this.propagateOnChange(this.input.value);
        this.setState({ editMode: false, text: this.input.value });
    };
    RenameableText.prototype.propagateOnChange = function (newValue) {
        if (this.propagatedOnChange != newValue) {
            this.propagatedOnChange = newValue;
            this.props.onChange(newValue);
        }
    };
    RenameableText.prototype.onChange = function (e) {
        this.setState({ text: this.input.value });
        if (this.props.eager)
            this.propagateOnChange(this.input.value);
    };
    RenameableText.prototype.rename = function (txt) {
        var _this = this;
        if (this.state.editMode || this.props.readOnly)
            return;
        txt = txt || this.state.text || "";
        var label = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.label);
        this.setState({
            text: txt,
            editMode: true,
            runtimeStyle: {
                textAlign: label.css('textAlign'),
                fontSize: label.css('font-size'),
                paddingTop: label.css('paddingTop'),
                paddingBottom: label.css('paddingBottom'),
                paddingLeft: label.css('paddingLeft'),
                paddingRight: label.css('paddingRight'),
                marginTop: label.css('marginTop'),
                marginBottom: label.css('marginBottom'),
                marginLeft: label.css('marginLeft'),
                marginRight: label.css('marginRight'),
                borderRadius: label.css('borderRadius'),
                backgroundColor: label.css('backgroundColor'),
                lineHeight: label.css('lineHeight'),
                fontWeight: label.css('fontWeight'),
                outLine: 0,
                borderStyle: 'none',
                height: "100%",
                width: "100%",
                boxSizing: "border-box",
            }
        }, function () { return jquery__WEBPACK_IMPORTED_MODULE_2___default()(_this.input).focus(); });
    };
    return RenameableText;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/wysiwyg/actions-sv.ts":
/*!*****************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/actions-sv.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exec */ "./src/components/utility-components/wysiwyg/exec.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    bold: {
        icon: '<b>F</b>',
        title: 'Fetstil',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('bold'); }
    },
    italic: {
        icon: '<i>K</i>',
        title: 'Kursiv',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('italic'); }
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Understruken',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('underline'); }
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Struken',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('strikeThrough'); }
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Rubrik 1',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H1>'); }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Rubrik 2',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H2>'); }
    },
    heading3: {
        icon: '<b>H<sub>3</sub></b>',
        title: 'Rubrik 3',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H3>'); }
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraf',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>'); }
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Citat',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<BLOCKQUOTE>'); }
    },
    olist: {
        icon: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
        title: 'Ordnad lista',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertOrderedList'); }
    },
    ulist: {
        icon: '<i class="fa fa-list" aria-hidden="true"></i>',
        title: 'Punktlista',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertUnorderedList'); }
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Programkod',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<PRE>'); }
    },
    line: {
        icon: '&#8213;',
        title: 'Vågrät linje',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHorizontalRule'); }
    },
    link: {
        icon: '<i class="fa fa-link" aria-hidden="true"></i>',
        title: 'Infoga länk',
        result: function () {
            var url = window.prompt('Ange länkens URL');
            if (url)
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('createLink', url);
        }
    },
    image: {
        icon: '<i class="fa fa-picture-o" aria-hidden="true"></i>',
        title: 'Infoga bild',
        result: function (ev, component) {
            var url = window.prompt('Ange bildens URL');
            if (url) {
                //exec('insertImage', url);
                var img = document.createElement("img");
                img.src = url;
                img.tabIndex = 1;
                insertElement(img);
                img.onfocus = component.onFocus;
                img.onblur = component.onBlur;
                component.props.onChange(component.contentDiv.innerHTML);
            }
        }
    }
});
function insertElement(element) {
    var sel, range;
    if (window.getSelection && (sel = window.getSelection()).rangeCount) {
        range = sel.getRangeAt(0);
        range.collapse(true);
        range.insertNode(element);
        // Move the caret immediately after the inserted span
        range.setStartAfter(element);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/actions.ts":
/*!**************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/actions.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exec */ "./src/components/utility-components/wysiwyg/exec.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    bold: {
        icon: '<b>B</b>',
        title: 'Bold',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('bold'); }
    },
    italic: {
        icon: '<i>I</i>',
        title: 'Italic',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('italic'); }
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Underline',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('underline'); }
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Strike-through',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('strikeThrough'); }
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Heading 1',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H1>'); }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H2>'); }
    },
    heading3: {
        icon: '<b>H<sub>3</sub></b>',
        title: 'Heading 3',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H3>'); }
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraph',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>'); }
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Quote',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<BLOCKQUOTE>'); }
    },
    olist: {
        icon: '&#35;',
        title: 'Ordered List',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertOrderedList'); }
    },
    ulist: {
        icon: '&#8226;',
        title: 'Unordered List',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertUnorderedList'); }
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Code',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<PRE>'); }
    },
    line: {
        icon: '&#8213;',
        title: 'Horizontal Line',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHorizontalRule'); }
    },
    link: {
        icon: '&#128279;',
        title: 'Link',
        result: function () {
            var url = window.prompt('Enter the link URL');
            if (url)
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('createLink', url);
        }
    },
    image: {
        icon: '&#128247;',
        title: 'Image',
        result: function () {
            var url = window.prompt('Enter the image URL');
            if (url)
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertImage', url);
        }
    }
});


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/exec.ts":
/*!***********************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/exec.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (command, value) {
    if (value === void 0) { value = null; }
    document.execCommand(command, false, value);
});


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/image-edit-actions.ts":
/*!*************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/image-edit-actions.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageEditActions; });
function imageEditActions(cb) {
    return [{
            name: 'float-left',
            icon: "<div style=\"position:relative\">\n      <i class=\"fa fa-align-right\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; left:-4px;top:0; transform: scale(0.5); transform-origin: left top\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta vänster om text',
            result: function () { return cb('float-left'); }
        }, {
            name: 'float-right',
            icon: "<div style=\"position:relative\">\n      <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; right:-4px;top:0; transform: scale(0.5); transform-origin: right top\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta höger om text',
            result: function () { return cb('float-right'); }
        }, {
            name: 'unfloat',
            icon: "<div style=\"position:relative;\" aria-hidden=\"true\">\n      <div style=\"position:absolute;top:0;left:0\">&#8254;</div>\n      <div style=\"position:absolute;top:0:left:0;transform: scale(0.5); transform-origin: left bottom\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n      <div style=\"position:absolute;top:0;left:0\">_</div>\n    </div>",
            title: 'Placera bilden på egen rad',
            result: function () { return cb('unfloat'); }
        }];
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/index.tsx":
/*!*************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/index.tsx ***!
  \*************************************************************/
/*! exports provided: Wysiwyg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wysiwyg", function() { return Wysiwyg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wash_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wash-html */ "./src/components/utility-components/wysiwyg/wash-html.ts");
/* harmony import */ var _image_edit_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-edit-actions */ "./src/components/utility-components/wysiwyg/image-edit-actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/components/utility-components/wysiwyg/actions.ts");





var classes = {
    actionbar: 'wysiwyg-actionbar',
    button: 'wysiwyg-button',
    content: 'wysiwyg-content',
    focusrect: 'wysiwyg-focusrect',
    focuspoint: 'wysiwyg-focuspoint',
    readonlyContent: 'wysiwyg-content readonly'
};
var Wysiwyg = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Wysiwyg, _super);
    function Wysiwyg(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { focusRect: null };
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Wysiwyg.prototype.componentDidMount = function () {
        var _this = this;
        Array.from(this.contentDiv.querySelectorAll("img,a")).map(function (elem) { return elem; })
            .forEach(function (elem) {
            elem.tabIndex = 1;
            elem.onfocus = _this.onFocus;
            elem.onblur = _this.onBlur;
        });
        document.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };
    Wysiwyg.prototype.componentDidUpdate = function () {
        var _this = this;
        Array.from(this.contentDiv.querySelectorAll("img,a")).map(function (elem) { return elem; })
            .forEach(function (elem) {
            elem.tabIndex = 1;
            elem.onfocus = _this.onFocus;
            elem.onblur = _this.onBlur;
        });
    };
    Wysiwyg.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
    Wysiwyg.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        //this.contentDiv.onfocus = this.onFocus;
        //this.contentDiv.onblur = this.onBlur;
        return !this.contentDiv ||
            nextState != this.state ||
            nextProps.readOnly !== this.props.readOnly ||
            nextProps.html !== this.contentDiv.innerHTML;
    };
    Wysiwyg.prototype.triggerOnChange = function (html) {
        this.props.onChange && this.props.onChange(Object(_wash_html__WEBPACK_IMPORTED_MODULE_2__["washHtml"])(html));
    };
    Wysiwyg.prototype.onFocus = function (ev) {
        var elem = ev.target;
        if (!elem || !elem.tagName)
            return;
        if (elem.tagName !== 'IMG' && elem.tagName !== 'A')
            return;
        var contentParent = this.contentDiv.parentElement;
        var newState = {
            focusRect: getRelatativeClientRect(contentParent, elem),
        };
        switch (elem.tagName) {
            case 'A':
            case 'IMG':
            default: break;
        }
        this.setState(newState);
        this.focusElem = elem;
    };
    Wysiwyg.prototype.onBlur = function (ev) {
        /*if (ev.relatedTarget) {
          const relatedTarget = ev.relatedTarget as HTMLElement;
          if (relatedTarget.className && relatedTarget.className.split(' ').indexOf(classes.button) >= 0) {
            // A image action button was pressed
            set
            return;
          }
        }*/
        if ((ev.target === this.focusElem && ev.relatedTarget !== this.focusRectDiv) ||
            ev.target === this.focusRectDiv) {
            this.setState({ focusRect: null });
        }
    };
    Wysiwyg.prototype.makeClickable = function (elem) {
        elem.tabIndex = 1;
    };
    Wysiwyg.prototype.onMouseDown = function (ev) {
        if ((ev.target.className || "").split(' ').indexOf(classes.focuspoint) >= 0) {
            var corner = this.getRectCorner(ev);
            this.corner = corner;
            this.resizeStartX = ev.clientX;
        }
    };
    Wysiwyg.prototype.onMouseMove = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            ev.preventDefault();
            // TODO: Räkna ut baserat på this.corner hur bildens storlek borde ändras.
            // Leta upp bilden per ID från this.contentDiv
            // Sätt DIV:ens style attribut width till ny width.
            // Om DIV:en redan hade height, sätt ny height med samma aspect ratio som innan,
            // annars, sätt inte height alls (eller möjligtvis till auto))
            var focusRect = this.focusRectDiv.getBoundingClientRect();
            if (focusRect.width < 32)
                return;
            //const currentWidth = focusRect.width;
            //const currentHeight = focusRect.height;
            //const hasHeightStyle = !this.focusElem.style.height || this.focusElem.style.height === "auto";
            var newWidth = Math.max(32, this.corner.endsWith('l') ?
                focusRect.width + (this.resizeStartX - ev.clientX) :
                //focusRect.right - ev.clientX :
                focusRect.width - (this.resizeStartX - ev.clientX));
            this.resizeStartX = ev.clientX;
            //ev.clientX - focusRect.left;
            var factor = newWidth / focusRect.width;
            var newHeight = focusRect.height * factor;
            this.focusElem.style.width = newWidth + "px";
            this.focusElem.style.height = newHeight + "px";
            this.setState({
                focusRect: getRelatativeClientRect(this.contentDiv.parentElement, this.focusElem),
            });
        }
    };
    Wysiwyg.prototype.onMouseUp = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            this.corner = null;
            this.triggerOnChange(this.contentDiv.innerHTML);
        }
    };
    Wysiwyg.prototype.getRectCorner = function (ev) {
        for (var _i = 0, _a = (ev.target.className || '').split(' '); _i < _a.length; _i++) {
            var className = _a[_i];
            switch (className) {
                case 'fpul':
                    return 'ul';
                case 'fpur':
                    return 'fpur';
                case 'fplr':
                    return 'lr';
                case 'fpll':
                    return 'll';
            }
        }
        return null;
    };
    Wysiwyg.prototype.execImageEditAction = function (cmd) {
        //console.log(cmd);
        if (!this.focusElem)
            return;
        //console.log("doing it");
        switch (cmd) {
            case 'float-left':
                this.focusElem.style.cssFloat = 'left';
                break;
            case 'float-right':
                this.focusElem.style.cssFloat = 'right';
                break;
            case 'unfloat':
                this.focusElem.style.cssFloat = '';
                break;
        }
        this.triggerOnChange(this.contentDiv.innerHTML);
        this.setState({ focusRect: getRelatativeClientRect(this.contentDiv.parentElement, this.focusElem) });
    };
    Wysiwyg.prototype.render = function () {
        var _this = this;
        var defaultActions = this.props.defaultActions || _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
        var actionsToUse = this.props.actions ? this.props.actions.map(function (action) {
            return typeof action === 'string' ?
                defaultActions[action] :
                defaultActions[action.name] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultActions[action.name], action) :
                    action;
        })
            : Object.keys(defaultActions).map(function (action) { return defaultActions[action]; });
        if (this.state.focusRect) {
            actionsToUse = actionsToUse.concat(Object(_image_edit_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(function (cmd) { return _this.execImageEditAction(cmd); }));
        }
        var focusRect = this.state.focusRect;
        var readOnly = this.props.readOnly;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            !readOnly && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.actionbar }, actionsToUse.map(function (action, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { key: idx, className: classes.button, dangerouslySetInnerHTML: { __html: action.icon }, title: action.title, onMouseDown: function (ev) { action.result(ev, _this); }, onMouseUp: function (ev) { return setTimeout(function () { return _this.contentDiv.focus(); }, 10); } });
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: readOnly ? classes.readonlyContent : classes.content, style: { position: 'relative', top: 0, left: 0 } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editor", ref: function (div) { return _this.contentDiv = div; }, dangerouslySetInnerHTML: { __html: Object(_wash_html__WEBPACK_IMPORTED_MODULE_2__["washHtml"])(this.props.html) }, contentEditable: !readOnly, onInput: function (ev) { return _this.triggerOnChange(ev.target.innerHTML); }, onKeyDown: function (ev) {
                        if (readOnly)
                            return;
                        //console.log("Key: " + ev.which);
                        if (ev.which >= 35 && ev.which <= 40) {
                            ev.stopPropagation(); // Prevent entire page from scrolling??
                        }
                        if (ev.which === 9)
                            ev.preventDefault();
                        if ((ev.keyCode === 8 || ev.keyCode === 46) && _this.focusElem && _this.state.focusRect) {
                            if (_this.focusElem && _this.focusElem.parentElement) {
                                _this.focusElem.parentElement.removeChild(_this.focusElem);
                            }
                            _this.focusElem = null;
                            _this.setState({ focusRect: null });
                            _this.triggerOnChange(_this.contentDiv.innerHTML);
                        }
                    } }),
                focusRect && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (div) { return _this.focusRectDiv = div; }, className: classes.focusrect, onBlur: this.onBlur, tabIndex: 1, style: {
                        outline: 0,
                        position: 'absolute',
                        top: this.state.focusRect.top,
                        left: this.state.focusRect.left,
                        width: this.state.focusRect.width,
                        height: this.state.focusRect.height
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpul", style: { position: 'absolute', top: 0, left: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpur", style: { position: 'absolute', top: 0, right: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fplr", style: { position: 'absolute', bottom: 0, right: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpll", style: { position: 'absolute', bottom: 0, left: 0 } }))));
    };
    return Wysiwyg;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getRelatativeClientRect(parent, child) {
    var parentRect = parent.getBoundingClientRect();
    var childRect = child.getBoundingClientRect();
    return {
        top: childRect.top - parentRect.top + parent.scrollTop,
        left: childRect.left - parentRect.left + parent.scrollLeft,
        bottom: childRect.bottom - parentRect.top + parent.scrollTop,
        right: childRect.right - parentRect.left + parent.scrollLeft,
        width: childRect.width,
        height: childRect.height
    };
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/wash-html.ts":
/*!****************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/wash-html.ts ***!
  \****************************************************************/
/*! exports provided: washHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "washHtml", function() { return washHtml; });
var parser = new DOMParser();
/** Tags / Attributes Whitelist
 *
 */
var HTML_WASH_POLICY = {
    b: {},
    i: {},
    p: {},
    u: {},
    strike: {},
    pre: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    img: { src: true, class: true, style: true, tabindex: true },
    a: { href: true, target: true },
    ul: {},
    ol: {},
    li: {},
    hr: {},
    br: {},
    div: {},
    span: {},
    // table tags:
    table: { border: true },
    tbody: {},
    thead: {},
    tfoot: {},
    tr: {},
    td: { headers: true, colspan: true, rowspan: true },
    th: { abbr: true, headers: true, scope: true, sorted: true, colspan: true, rowspan: true }
};
function washHtml(html) {
    var doc = parser.parseFromString(html, "text/html");
    var childNodes = doc.body.childNodes;
    var modified = false;
    for (var i = 0; i < childNodes.length; ++i) {
        if (washNode(childNodes.item(i))) {
            modified = true;
        }
    }
    return modified ?
        doc.body.innerHTML :
        html; // By returning the original HTML string, we spare the user from refreshing the edit area,
    // which would otherwise put the cursor at the top, losing the position where user where.
}
function washNode(node) {
    var modified = false;
    if (isElement(node)) {
        if (washElement(node)) {
            modified = true;
        }
    }
    if (washChildNodes(node)) {
        modified = true;
    }
    return modified;
}
function washChildNodes(node) {
    var modified = false;
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; ++i) {
        if (washNode(childNodes.item(i))) {
            modified = true;
        }
    }
    return modified;
}
/** Replace an element with its child nodes.
 *
 */
function removeMiddleElement(element) {
    var childNodes = element.childNodes;
    for (var i = 0; i < childNodes.length; ++i) {
        element.parentNode.insertBefore(childNodes.item(i), element);
    }
    element.remove();
}
function washElement(element) {
    var policy = element.tagName && HTML_WASH_POLICY[element.tagName.toLowerCase()];
    if (!policy) {
        console.warn("Wysiwyg: not allowed tag", element.tagName);
        washChildNodes(element);
        removeMiddleElement(element);
        return true;
    }
    var modified = false;
    for (var i = 0; i < element.attributes.length; ++i) {
        var attr = element.attributes.item(i);
        var allowed = attr.name && !!policy[attr.name.toLowerCase()];
        if (!allowed) {
            modified = true;
            console.warn("Wysiwyg: not allowed attribute", attr.name);
            element.removeAttribute(attr.name);
        }
    }
    return modified;
}
function isElement(node) {
    return !!node.tagName;
}


/***/ }),

/***/ "./src/contracts/ked-models.ts":
/*!*************************************!*\
  !*** ./src/contracts/ked-models.ts ***!
  \*************************************/
/*! exports provided: Course, futureAbilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "futureAbilities", function() { return futureAbilities; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());

var futureAbilities = [
    "Lära att lära",
    "Samarbeta",
    "Agera globalt",
    "Visa handlingskraft",
    "Vara innovativ",
    "Leva digitalt"
];


/***/ }),

/***/ "./src/features/features.ts":
/*!**********************************!*\
  !*** ./src/features/features.ts ***!
  \**********************************/
/*! exports provided: Features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");


var Features = /** @class */ (function () {
    function Features() {
        var user = _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser;
        var query = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_0__["parseQueryString"])(location.search, { toLower: true });
        var features = (query.features || '').split(',')
            .map(function (feature) { return feature.toLowerCase(); }); // Can be used on forwards...
        this.EditUserTasksViaPenOnly =
            user.schoolType !== 'Grundskolor' && query.schooltype !== "Grundskolor";
        this.SubTasks =
            user.schoolType !== 'Grundskolor' && query.schooltype !== "Grundskolor";
        this.AssignmentTasks = !!query.testversion;
    }
    return Features;
}());



/***/ }),

/***/ "./src/features/index.ts":
/*!*******************************!*\
  !*** ./src/features/index.ts ***!
  \*******************************/
/*! exports provided: Features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features */ "./src/features/features.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return _features__WEBPACK_IMPORTED_MODULE_0__["Features"]; });




/***/ }),

/***/ "./src/global-setters/set-all.ts":
/*!***************************************!*\
  !*** ./src/global-setters/set-all.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_bearer_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-bearer-providers */ "./src/global-setters/set-bearer-providers.ts");
/* harmony import */ var _set_ked_backend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-ked-backend-client */ "./src/global-setters/set-ked-backend-client.ts");
/* harmony import */ var _set_eds_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-eds-client */ "./src/global-setters/set-eds-client.ts");
/* These scripts assume some of the global vars have already been set:
  * KED.cfg
  * KED.env.currentUser

  The rest will be set here (client side)
*/





/***/ }),

/***/ "./src/global-setters/set-bearer-providers.ts":
/*!****************************************************!*\
  !*** ./src/global-setters/set-bearer-providers.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "../kedbackend/clientweb.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../access-control/index */ "./src/access-control/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");








function getMergedTokenPath(tokenPath, locationSearch, scopes) {
    // Merge configured query params of token path with params given to current page
    var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(locationSearch);
    var impersonationProps = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["cherryPickProps"])(currentQuery, _access_control_index__WEBPACK_IMPORTED_MODULE_6__["IMPERSONATION_QUERY_PARAMS"]);
    var _a = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["splitUrlAndQuery"])(tokenPath), tokenPathWithoutQuery = _a[0], tokenQueryString = _a[1];
    var tokenPathQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(tokenQueryString);
    return tokenPathWithoutQuery + Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["generateQueryString"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tokenPathQuery, impersonationProps, { scopes: scopes.join(',') }));
}
function getTokenId(mergedTokenPath, userEmail) {
    return mergedTokenPath + "/" + userEmail;
}
function saveUserInfo(user, tokenId) {
    _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser = user;
    sessionStorage.setItem("userInfo" + tokenId, JSON.stringify(user));
}
function loadUserInfo(tokenId) {
    var storedSessionUser = sessionStorage.getItem("userInfo" + tokenId);
    if (storedSessionUser) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser = JSON.parse(storedSessionUser);
    }
}
function createBearerProvider(mergedTokenPath, userEmail) {
    var tokenId = getTokenId(mergedTokenPath, userEmail);
    return new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["WebServerBearerProvider"](mergedTokenPath, function (responseText) {
        var res = JSON.parse(responseText);
        if (!res.ok)
            throw new Error(res.error);
        if (res.user) {
            saveUserInfo(res.user, tokenId);
        }
        return { token: res.token, expires: Date.now() + 59 * 60 * 1000 };
    }, tokenId);
}
function createGoogleTokenProvider(mergedTokenPath, userEmail) {
    var tokenId = getTokenId(mergedTokenPath, userEmail);
    return new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["WebServerBearerProvider"](mergedTokenPath, function (responseText) {
        var res = JSON.parse(responseText);
        if (!res.ok)
            throw new Error(res.error);
        return { token: res.token, expires: Date.now() + 59 * 60 * 1000 };
    }, tokenId);
}
function createTestTokenProvider(tokenUrl, user, scopes) {
    return new kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["KedBearerProvider"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["isomorphic"], kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["storage"], tokenUrl + user.mail + location.search, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_ID, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_SECRET, tokenUrl, {
        email: user.mail.toLowerCase(),
        roles: user.roles,
        school: user.school,
        schoolType: user.schoolType,
        scopes: scopes
    });
}
// env.currentUser.mail is set by SiteVision server initially.
// A response from /api/token may change the mail attribute of the current
// user, so env.currentUser.mail may be different after getting a response.
// However, the initial value is valuable always in order to distinguish the case
// when one normal user logs out and another user logs in.
var initialUserEmail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser && _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.mail; // Initial value of mail. May change.
if (initialUserEmail) {
    // KED
    if (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH) {
        //
        //
        // Production / SiteVision proxied /api/token to request tokens from:
        //
        //
        var mergedTokenPath = getMergedTokenPath(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH, location.search, [
            "kedbackend",
            "EDS",
        ]);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].bearerProvider = createBearerProvider(mergedTokenPath, initialUserEmail);
        loadUserInfo(getTokenId(mergedTokenPath, initialUserEmail));
        // Google
        var googleMergedPath = getMergedTokenPath(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH, location.search, [
            "https://www.googleapis.com/auth/calendar.readonly",
        ]);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].googleTokenProvider = createGoogleTokenProvider(googleMergedPath, initialUserEmail);
    }
    else if (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL && _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_ID && _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_SECRET) {
        //
        //
        // Test - go directly to KEDAUTH server to retrieve tokens
        //
        //
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].bearerProvider = createTestTokenProvider(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser, [
            "kedbackend",
            "EDS",
        ]);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].googleTokenProvider = createTestTokenProvider(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL + "/google", _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser, [
            "https://www.googleapis.com/auth/calendar.readonly",
        ]);
    }
    else {
        throw new Error("Missing configuration parameter KED_TOKEN_PATH");
    }
}


/***/ }),

/***/ "./src/global-setters/set-eds-client.ts":
/*!**********************************************!*\
  !*** ./src/global-setters/set-eds-client.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "../kedbackend/clientweb.js");
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/edsclient */ "./src/apis/edsclient.ts");




_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].edsClient = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_3__["EdsClient"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["isomorphic"], _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].EDS_API_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].bearerProvider);


/***/ }),

/***/ "./src/global-setters/set-ked-backend-client.ts":
/*!******************************************************!*\
  !*** ./src/global-setters/set-ked-backend-client.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "../kedbackend/clientweb.js");



_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].kedBackendClient = new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["KedBackendClientWeb"](_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].KED_API_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].bearerProvider);


/***/ }),

/***/ "./src/globals/KED.cfg.ts":
/*!********************************!*\
  !*** ./src/globals/KED.cfg.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KED__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KED */ "./src/globals/KED.ts");

;
if (!_KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg)
    _KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg = {};
/* harmony default export */ __webpack_exports__["default"] = (_KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg);


/***/ }),

/***/ "./src/globals/KED.env.ts":
/*!********************************!*\
  !*** ./src/globals/KED.env.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ked */ "./src/globals/ked.ts");

if (!_ked__WEBPACK_IMPORTED_MODULE_0__["default"].env)
    _ked__WEBPACK_IMPORTED_MODULE_0__["default"].env = {};
/* harmony default export */ __webpack_exports__["default"] = (_ked__WEBPACK_IMPORTED_MODULE_0__["default"].env);


/***/ }),

/***/ "./src/globals/KED.ts":
/*!****************************!*\
  !*** ./src/globals/KED.ts ***!
  \****************************/
/*! exports provided: KED_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KED_NAMESPACE", function() { return KED_NAMESPACE; });
var KED_NAMESPACE = "KED";
var result = typeof KED === 'undefined' ? {} : KED;
if (typeof window !== 'undefined' && typeof KED === 'undefined') {
    window[KED_NAMESPACE] = result;
}
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./src/globals/ked.ts":
/*!****************************!*\
  !*** ./src/globals/ked.ts ***!
  \****************************/
/*! exports provided: KED_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KED_NAMESPACE", function() { return KED_NAMESPACE; });
var KED_NAMESPACE = "KED";
var result = typeof KED === 'undefined' ? {} : KED;
if (typeof window !== 'undefined' && typeof KED === 'undefined') {
    window[KED_NAMESPACE] = result;
}
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./src/repos/repo.ts":
/*!***************************!*\
  !*** ./src/repos/repo.ts ***!
  \***************************/
/*! exports provided: Repo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repo", function() { return Repo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Repo = /** @class */ (function () {
    function Repo(comm) {
        this.comm = comm;
        this.listPromise = null;
        this.items = null;
        this.subscribers = [];
    }
    Repo.prototype.subscribe = function (subscriber) {
        var _this = this;
        return this.ensureHasData().then(function () {
            subscriber(_this.items);
            _this.subscribers.push(subscriber);
        });
    };
    Repo.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s !== subscriber; });
    };
    Repo.prototype.notifySubscribers = function () {
        var _this = this;
        this.subscribers.forEach(function (s) { return s(_this.items); });
    };
    Repo.prototype.ensureHasData = function () {
        if (!this.listPromise)
            this.refreshFromServer();
        return this.listPromise;
    };
    Repo.prototype.refreshFromServer = function () {
        var _this = this;
        this.listPromise = this.comm.query().then(function (items) {
            _this.items = items;
            _this.notifySubscribers();
        });
        return this.listPromise;
    };
    Repo.prototype.update = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureHasData()];
                    case 1:
                        _a.sent();
                        items = Array.isArray(item) ? item : [item];
                        this.items = this.items.map(function (it) {
                            var item = items.find(function (_a) {
                                var id = _a.id;
                                return it.id === id;
                            });
                            return item ?
                                Object.assign({}, item) :
                                it;
                        });
                        this.notifySubscribers();
                        return [2 /*return*/];
                }
            });
        });
    };
    Repo.prototype.insert = function (item) {
        var _this = this;
        return this.ensureHasData().then(function () {
            _this.items = _this.items.concat(item);
            _this.notifySubscribers();
        });
    };
    Repo.prototype.delete = function (id) {
        var _this = this;
        var ids = Array.isArray(id) ? id : [id];
        return this.ensureHasData().then(function () {
            _this.items = _this.items.filter(function (it) { return !ids.some(function (id) { return it.id === id; }); });
            _this.notifySubscribers();
        });
    };
    return Repo;
}());



/***/ }),

/***/ "./src/repos/school-courses.ts":
/*!*************************************!*\
  !*** ./src/repos/school-courses.ts ***!
  \*************************************/
/*! exports provided: mySchoolCoursesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySchoolCoursesRepo", function() { return mySchoolCoursesRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repo */ "./src/repos/repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");




var SchoolCoursesRepo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolCoursesRepo, _super);
    function SchoolCoursesRepo(getSchoolName) {
        var _this = _super.call(this, {
            query: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var schoolName, schools;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            schoolName = getSchoolName();
                            return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.list("schools", {
                                    name: schoolName,
                                    include: ["courses"]
                                })];
                        case 1:
                            schools = _a.sent();
                            this._schoolId = schools.length > 0 && schools[0].id;
                            if (!this._schoolId)
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""], ["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""])), schoolName, schoolName));
                            return [2 /*return*/, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(schools.map(function (school) { return school.courses; }))];
                    }
                });
            }); }
        }) || this;
        return _this;
    }
    SchoolCoursesRepo.prototype.getSchoolId = function () {
        var _this = this;
        return this.ensureHasData().then(function () { return _this._schoolId; });
    };
    return SchoolCoursesRepo;
}(_repo__WEBPACK_IMPORTED_MODULE_1__["Repo"]));
var mySchoolCoursesRepo = new SchoolCoursesRepo(function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school; });
var templateObject_1;


/***/ }),

/***/ "./src/test/configure.ts":
/*!*******************************!*\
  !*** ./src/test/configure.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/users */ "./src/test/data/users.ts");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");


_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].ENVIRONMENT = "test"; // "production", "development" or "test"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_TOKEN_PATH = null; // Must be null in test environment for set-bearer-providers.ts to work accordingly!
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_TOKEN_URL = "https://kedauthtest.azurewebsites.net/token"; // "https://kedauthtest.azurewebsites.net/token"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_ID = "testclient"; // "devclient", "testclient", "..."
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_SECRET = "fHjEaIla4kvdjF";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_API_URL = "https://kedbackendtest.azurewebsites.net/api/"; // "https://kedbackendtest.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].EDS_API_URL = "https://api.kedschools.se/studentportal/"; // "https://edsportalowinapi.azurewebsites.net/api/"


var username = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["parseQueryString"])(location.search).user;
if (username) {
    var user = _data_users__WEBPACK_IMPORTED_MODULE_2__["users"].find(function (u) { return u.username === username; });
    if (user) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser = user;
    }
}
var _a = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["parseQueryString"])(location.search), role = _a.role, school = _a.school;
if (_globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser) {
    if (role) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.roles = role.split(',');
    }
    if (school) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.school = school;
    }
}


/***/ }),

/***/ "./src/test/data/users.ts":
/*!********************************!*\
  !*** ./src/test/data/users.ts ***!
  \********************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
var users = [{
        displayName: "Administratör",
        mail: "vemendo@kedschools.com",
        roles: ['ADMIN', 'EMPLOYEE'],
        school: 'KED',
        username: "admin"
    }, {
        displayName: "David",
        mail: "david.fahlander@vemendo.se",
        roles: ['ADMIN', 'EMPLOYEE'],
        school: 'KED',
        username: "david"
    }, {
        displayName: "Test-Live-Elev1",
        mail: "ubw6757@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "ubw6757@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev2",
        mail: "ums4302@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "ums4302@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev3",
        mail: "uhh3460@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "uhh3460@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev4(fel goals issue)",
        mail: "umt6826@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "umt6826@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Elev5(future abilities)",
        mail: "ujg3833@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "ujg3833@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Elev6(future abilities)",
        mail: "ujt1363@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "ujt1363@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Lärare1",
        mail: "rickard.albertsson@kunskapsgymnasiet.se",
        roles: ['EMPLOYEE'],
        school: 'Uppsala',
        username: "rickard.albertsson@kunskapsgymnasiet.se"
    }, {
        displayName: "EDSTestUserGymnasium",
        mail: "uhh3200@edu.kunskapsgymnasiet.se",
        //mail: "UHH3200@EDU.KUNSKAPSGYMNASIET.SE",
        roles: ["STUDENT"],
        username: "EDSTestUser1",
        school: "KED",
        schoolType: "Gymnasium"
    }, {
        displayName: "vemendo.elev@kedschools.com",
        mail: "vemendo.elev@kedschools.com",
        roles: ["STUDENT"],
        username: "vemendo.elev@kedschools.com",
        school: "KED",
        schoolType: "Gymnasium"
    }, {
        displayName: "Medarbetare Nacka",
        mail: "medarbetare.nacka@kunskapsskolan.se",
        roles: ["EMPLOYEE"],
        username: "medarbetare.nacka/KS",
        school: "Nacka",
        schoolType: "Grundskolor"
    }, {
        displayName: "Medarbetare Globen",
        mail: "medarbetare.globen@kunskapsgymnasiet.se",
        roles: ["EMPLOYEE"],
        username: "medarbetare.globen/KS",
        school: "Globen",
        schoolType: "Gymnasium"
    }, {
        displayName: "Elev Globen",
        mail: "elev.globen@edu.kunskapsgymnasiet.se",
        schoolGrade: 2,
        roles: ['STUDENT'],
        username: "elev.globen",
        school: "Globen",
        schoolType: "Gymnasium"
    }, {
        displayName: "Elev Borås",
        mail: "elev.boras@edu.kunskapsskolan.se",
        schoolGrade: 7,
        roles: ['STUDENT'],
        username: "elev.boras",
        school: "Borås",
        schoolType: "Grundskolor"
    }, {
        displayName: "Elev Borlänge",
        mail: "elev.borlange@edu.kunskapsskolan.se",
        schoolGrade: 9,
        roles: ['STUDENT'],
        username: 'elev.borlange/KS',
        school: 'Borlänge',
        schoolType: "Gymnasium"
    }, {
        displayName: "Roll-lös",
        mail: "none@kunskapsskolan.se",
        username: "none",
        roles: []
    }];


/***/ }),

/***/ "./src/test/testpage-coursebuilder.tsx":
/*!*********************************************!*\
  !*** ./src/test/testpage-coursebuilder.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configure */ "./src/test/configure.ts");
/* harmony import */ var _global_setters_set_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-setters/set-all */ "./src/global-setters/set-all.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_course_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/course-builder */ "./src/components/course-builder/index.tsx");
/* harmony import */ var _utils_choose_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/choose-user */ "./src/test/utils/choose-user.tsx");

// <Initialization>
 // Emulate server-side script
 // Client-side initialization
// </Initialization>




var App = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        if (!location.hash)
            location.hash = "#/";
        return _this;
    }
    App.prototype.render = function () {
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_course_builder__WEBPACK_IMPORTED_MODULE_5__["CourseBuilder"], { viewCourseUrl: "courseviewer.html", feedbackUrl: "http://svt.se/nyheter" }) :
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_utils_choose_user__WEBPACK_IMPORTED_MODULE_6__["ChooseUser"], null);
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/test/utils/choose-user.tsx":
/*!****************************************!*\
  !*** ./src/test/utils/choose-user.tsx ***!
  \****************************************/
/*! exports provided: ChooseUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUser", function() { return ChooseUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/users */ "./src/test/data/users.ts");


function ChooseUser() {
    var select;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "V\u00E4lj anv\u00E4ndare"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "login-table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Namn"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Roller"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "E-post"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Skola"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, _data_users__WEBPACK_IMPORTED_MODULE_1__["users"].map(function (_a) {
                var username = _a.username, displayName = _a.displayName, mail = _a.mail, school = _a.school, roles = _a.roles;
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: mail, onClick: function () { return location.search = "?user=" + username; } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, displayName),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: roles.length === 0 ? { fontStyle: 'italic' } : {} }, roles.length === 0 ? "saknar roller" : roles.join(', ')),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, mail),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: school ? {} : { fontStyle: 'italic' } }, school || "saknar skola"));
            }))));
}
;


/***/ }),

/***/ "./src/utils/cached-response.ts":
/*!**************************************!*\
  !*** ./src/utils/cached-response.ts ***!
  \**************************************/
/*! exports provided: CachedResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedResponse", function() { return CachedResponse; });
var CachedResponse = /** @class */ (function () {
    function CachedResponse(queryer) {
        this.queryer = queryer;
        this.promise = null;
        this.result = null;
    }
    CachedResponse.prototype.query = function () {
        var _this = this;
        return this.promise ?
            this.promise :
            (this.promise = this.queryer().then(function (x) { return _this.result = x; }));
    };
    CachedResponse.prototype.reset = function () {
        this.promise = null;
    };
    return CachedResponse;
}());



/***/ }),

/***/ "./src/utils/error-success-feedback.tsx":
/*!**********************************************!*\
  !*** ./src/utils/error-success-feedback.tsx ***!
  \**********************************************/
/*! exports provided: ErrorSuccessFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSuccessFeedback", function() { return ErrorSuccessFeedback; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");



var ErrorSuccessFeedback = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ErrorSuccessFeedback, _super);
    function ErrorSuccessFeedback(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: undefined,
            info: undefined
        };
        _this._unhandledRejection = _this._unhandledRejection.bind(_this);
        _this._error = _this._error.bind(_this);
        _this._customError = _this._customError.bind(_this);
        _this._onInfo = _this._onInfo.bind(_this);
        return _this;
    }
    ErrorSuccessFeedback.prototype.componentDidMount = function () {
        window.addEventListener('unhandledrejection', this._unhandledRejection);
        window.addEventListener('error', this._error);
        window.addEventListener('customerror', this._customError);
        window.addEventListener('info', this._onInfo);
    };
    ErrorSuccessFeedback.prototype.componentWillUnmount = function () {
        window.removeEventListener('unhandledrejection', this._unhandledRejection);
        window.removeEventListener('error', this._error);
        window.removeEventListener('customerror', this._customError);
        window.removeEventListener('info', this._onInfo);
    };
    ErrorSuccessFeedback.prototype._unhandledRejection = function (ev) {
        var _this = this;
        this.setState({ error: ev.reason ? ev.reason.message : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ett ok\u00E4nt fel intr\u00E4ffade..."], ["Ett ok\u00E4nt fel intr\u00E4ffade..."]))), info: null });
        setTimeout(function () { return _this.setState({ error: null }); }, 10000);
    };
    ErrorSuccessFeedback.prototype._error = function (ev) {
        var _this = this;
        this.setState({ error: ev.error ? ev.error.message : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ett ok\u00E4nt fel intr\u00E4ffade..."], ["Ett ok\u00E4nt fel intr\u00E4ffade..."]))), info: null });
        setTimeout(function () { return _this.setState({ error: null }); }, 10000);
    };
    ErrorSuccessFeedback.prototype._customError = function (ev) {
        var _this = this;
        this.setState({ error: ev.detail, info: null });
        setTimeout(function () { return _this.setState({ error: null }); }, 10000);
    };
    ErrorSuccessFeedback.prototype._onInfo = function (ev) {
        var _this = this;
        this.setState({ error: null, info: ev.detail });
        setTimeout(function () { return _this.setState({ info: null }); }, 10000);
    };
    ErrorSuccessFeedback.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "error-success-feedback", style: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                pointerEvents: 'none'
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'table', margin: "0 auto" } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "error", style: { display: this.state.error ? "" : "none" } }, this.state.error && this.state.error),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "info", style: { display: this.state.info ? "" : "none" } }, this.state.info)));
    };
    return ErrorSuccessFeedback;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/utils/keep-session-alive.ts":
/*!*****************************************!*\
  !*** ./src/utils/keep-session-alive.ts ***!
  \*****************************************/
/*! exports provided: keepSessionAlive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keepSessionAlive", function() { return keepSessionAlive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var HEARTBEAT_INTERVAL = 5 * 60 * 1000; // 5 minutes.
var HEARTBEAT_URL = "/4.4b4cce2a160e445593f16043.html"; // Could be any protected resource. BUGBUG: Configurable.
var lastActivity = Date.now();
function keepSessionAlive() {
    setInterval(onTimeout, HEARTBEAT_INTERVAL);
    setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_1___default()('body')
        .mousemove(onUserActive)
        .keypress(onUserActive)
        .scroll(onUserActive); }, 100);
}
function onUserActive() {
    lastActivity = Date.now();
}
function onTimeout() {
    var inactivityTime = Date.now() - lastActivity;
    if (inactivityTime < HEARTBEAT_INTERVAL) {
        heartbeat();
    }
}
function heartbeat() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var res, err_1;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Sending heartbeat request to " + HEARTBEAT_URL);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(HEARTBEAT_URL, {
                            cache: 'no-cache',
                            credentials: 'same-origin'
                        })];
                case 2:
                    res = _a.sent();
                    console.log("Response from " + HEARTBEAT_URL + ": " + res.status + " " + res.statusText);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.warn("Request to " + HEARTBEAT_URL + " failed: " + err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/utils/query-string.ts":
/*!***********************************!*\
  !*** ./src/utils/query-string.ts ***!
  \***********************************/
/*! exports provided: parseQueryString, generateQueryString, parseHashQueryString, generateHashQueryString, splitUrlAndQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateQueryString", function() { return generateQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHashQueryString", function() { return parseHashQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHashQueryString", function() { return generateHashQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitUrlAndQuery", function() { return splitUrlAndQuery; });
function parseQueryString(locationSearch, options) {
    var toLower = (options || {}).toLower;
    var result = {};
    if (locationSearch && locationSearch.length > 1)
        locationSearch.substr(1)
            .split('&')
            .map(function (part) { return part.split('=').map(function (s) { return decodeURIComponent(s.trim()); }); })
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            return result[toLower ? key.toLowerCase() : key] = value;
        });
    return result;
}
function encodeParams(params) {
    return Object.keys(params).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]); }).join('&');
}
function generateQueryString(params) {
    return "?" + encodeParams(params);
}
function parseHashQueryString(locationHash, options) {
    return parseQueryString(locationHash, options);
}
function generateHashQueryString(params) {
    return "#" + encodeParams(params);
}
function splitUrlAndQuery(urlWithPossibleQuery) {
    var pQuery = urlWithPossibleQuery.indexOf('?');
    return pQuery >= 0 ?
        [urlWithPossibleQuery.substr(0, pQuery), urlWithPossibleQuery.substr(pQuery)] :
        [urlWithPossibleQuery, ""];
}


/***/ }),

/***/ "./src/utils/school-moment.ts":
/*!************************************!*\
  !*** ./src/utils/school-moment.ts ***!
  \************************************/
/*! exports provided: getFirstAndLastWeekOfTerm, getTermStartAndEnd, getSchoolMoment, addYear, nextAcademicYear, prevAcademicYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstAndLastWeekOfTerm", function() { return getFirstAndLastWeekOfTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTermStartAndEnd", function() { return getTermStartAndEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchoolMoment", function() { return getSchoolMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYear", function() { return addYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAcademicYear", function() { return nextAcademicYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAcademicYear", function() { return prevAcademicYear; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function getFirstAndLastWeekOfTerm(term) {
    return term === 'AT' ?
        [32, 51] :
        [1, 25];
}
function getTermStartAndEnd(now) {
    return now.month() >= 7 ? // 7 = August in JS Dates and in moment as well!
        [moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(now.year(), 7, 1)), moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(now.year(), 11, 31))] : // aug1 - dec31
        [moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(now.year(), 0, 1)), moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(now.year(), 6, 31))]; // jan1 - july31
}
function getSchoolMoment(m) {
    var thisYear = m.year();
    var isAutumn = m.month() >= 7;
    var _a = isAutumn ?
        [thisYear, thisYear + 1] :
        [thisYear - 1, thisYear], autumnYear = _a[0], springYear = _a[1];
    var academicYear = '' + autumnYear + '/' + springYear;
    var term = isAutumn ? 'AT' : 'ST';
    var week = m.week();
    return { academicYear: academicYear, term: term, week: week };
}
function addYear(aYear, numYearsToAdd) {
    return aYear.split('/')
        .map(function (yearStr) { return parseInt(yearStr) + numYearsToAdd; })
        .map(function (year) { return '' + year; })
        .join('/');
}
function nextAcademicYear(aYear) {
    return addYear(aYear, 1);
}
function prevAcademicYear(aYear) {
    return addYear(aYear, -1);
}


/***/ }),

/***/ "./src/utils/school-term.ts":
/*!**********************************!*\
  !*** ./src/utils/school-term.ts ***!
  \**********************************/
/*! exports provided: SchoolTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolTerm", function() { return SchoolTerm; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _school_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-moment */ "./src/utils/school-moment.ts");


function isSchoolMoment(obj) {
    return 'academicYear' in obj;
}
var SchoolTerm = /** @class */ (function () {
    function SchoolTerm(dateOrSchoolMoment) {
        var schoolMoment = isSchoolMoment(dateOrSchoolMoment) ?
            dateOrSchoolMoment : Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_0___default()(dateOrSchoolMoment));
        this.academicYear = schoolMoment.academicYear;
        this.term = schoolMoment.term;
    }
    Object.defineProperty(SchoolTerm.prototype, "year", {
        get: function () {
            return parseInt(this.academicYear
                .split('/')[this.term === 'AT' ? 0 : 1]);
        },
        enumerable: true,
        configurable: true
    });
    SchoolTerm.prototype.nextTerm = function () {
        return new SchoolTerm(this.term === 'AT' ?
            {
                term: 'ST',
                academicYear: this.academicYear
            } :
            {
                term: 'AT',
                academicYear: Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["addYear"])(this.academicYear, 1)
            });
    };
    SchoolTerm.prototype.prevTerm = function () {
        return new SchoolTerm(this.term === 'AT' ?
            {
                term: 'ST',
                academicYear: Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["addYear"])(this.academicYear, -1)
            } :
            {
                term: 'AT',
                academicYear: this.academicYear
            });
    };
    SchoolTerm.prototype.toLocaleString = function (locales, shortYear) {
        var year = this.term === 'AT' ?
            this.academicYear.split('/')[0] :
            this.academicYear.split('/')[1];
        if (shortYear)
            year = year.substr(2);
        for (var _i = 0, locales_1 = locales; _i < locales_1.length; _i++) {
            var locale = locales_1[_i];
            switch (locale.split('-')[0].split('_')[0].toLowerCase()) {
                case 'en':
                    return (this.term === 'AT' ? "AT" : "ST") + " " + year;
                case 'sv':
                    return (this.term === 'AT' ? "HT" : "VT") + " " + year;
            }
        }
    };
    return SchoolTerm;
}());



/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: capitalizeFirst, extend, clone, flatten, compareProp, compareProps, L, TC, dateTimeReviver, showInfo, showError, maxLength, arrayToLookup, arrayToMap, cherryPickProps, distinct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return capitalizeFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProp", function() { return compareProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProps", function() { return compareProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TC", function() { return TC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeReviver", function() { return dateTimeReviver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfo", function() { return showInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToLookup", function() { return arrayToLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToMap", function() { return arrayToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cherryPickProps", function() { return cherryPickProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
function capitalizeFirst(str) {
    for (var i = 0, l = str.length; i < l; ++i) {
        if (str.charCodeAt(i) < 0x2000) {
            return str.substr(0, i) + str[i].toLocaleUpperCase() + str.substr(i + 1);
        }
    }
    return str;
}
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    Object.keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
function clone(obj, extension) {
    var clone = {};
    Object.getOwnPropertyNames(obj).forEach(function (key) {
        Object.defineProperty(clone, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    if (extension)
        extend(clone, extension);
    return clone;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
function compareProp(prop) {
    return function (a, b) {
        var aProp = a[prop], bProp = b[prop];
        return aProp > bProp ? 1 : aProp < bProp ? -1 : 0;
    };
}
function compareProps(props, locales, options) {
    props = Array.isArray(props) ? props : [props];
    var localeCompare = function (a, b) {
        return typeof a === 'string' ?
            a.localeCompare(b, locales, options) :
            a < b ? -1 : a > b ? 1 : 0;
    };
    return props
        .map(function (prop) { return function (a, b) { return localeCompare(a[prop], b[prop]); }; })
        .reduce(function (cmp1, cmp2) {
        return function (a, b) { return cmp1(a, b) || cmp2(a, b); };
    });
}
function L(text) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var first = text[0];
    return buildMessage(text, args);
}
function buildMessage(text, args) {
    var rv = text[0];
    for (var i = 1, l = text.length; i < l; ++i) {
        rv += args[i - 1] + text[i];
    }
    return rv;
}
var TC = /** @class */ (function () {
    function TC(template) {
        extend(this, template);
    }
    return TC;
}());

function dateTimeReviver(key, value) {
    var a;
    if (typeof value === 'string') {
        a = /\/Date\((\d*)\)\//.exec(value);
        if (a) {
            return new Date(+a[1]);
        }
    }
    return value;
}
function showInfo(msg) {
    var event = new CustomEvent('info', { 'detail': msg });
    window.dispatchEvent(event);
}
function showError(errMsg) {
    var msg = typeof errMsg === 'string' ? errMsg : errMsg.message;
    var event = new CustomEvent('customerror', { 'detail': msg });
    console.error(errMsg);
    window.dispatchEvent(event);
}
function maxLength(str, maxLen) {
    return str.length > maxLen ?
        str.substr(0, maxLen - 3) + "..." :
        str;
}
function arrayToLookup(a, keyAccessor) {
    var result = {};
    for (var i = 0, l = a.length; i < l; ++i) {
        var item = a[i];
        var key = keyAccessor(item);
        var array = result[key];
        if (array)
            array.push(item);
        else
            result[key] = [item];
    }
    return result;
}
function arrayToMap(a, keyAccessor) {
    var result = {};
    for (var i = 0, l = a.length; i < l; ++i) {
        var item = a[i];
        var key = keyAccessor(item);
        result[key] = item;
    }
    return result;
}
function cherryPickProps(obj, propsToPick) {
    var result = {};
    for (var _i = 0, propsToPick_1 = propsToPick; _i < propsToPick_1.length; _i++) {
        var param = propsToPick_1[_i];
        if (param in obj)
            result[param] = obj[param];
    }
    return result;
}
function distinct(a, keyAccessor) {
    var map = arrayToMap(a, keyAccessor);
    return Object.keys(map).map(function (key) { return map[key]; });
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=testpagecoursebuilder.js.map