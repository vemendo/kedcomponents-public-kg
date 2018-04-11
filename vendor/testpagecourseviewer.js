var testpagecourseviewer =
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
/******/ 		"testpagecourseviewer": 0
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
/******/ 	deferredModules.push(["./src/test/testpage-courseviewer.tsx","vendors"]);
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

/***/ "./src/components/calendar/course-name-to-css-class.ts":
/*!*************************************************************!*\
  !*** ./src/components/calendar/course-name-to-css-class.ts ***!
  \*************************************************************/
/*! exports provided: courseNameToCssClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseNameToCssClass", function() { return courseNameToCssClass; });
function courseNameToCssClass(cssPrefix, courseName) {
    return "" + cssPrefix + courseName.substr(0, 3).toLowerCase();
}


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

/***/ "./src/components/course-viewer/course-page/course-banner.tsx":
/*!********************************************************************!*\
  !*** ./src/components/course-viewer/course-page/course-banner.tsx ***!
  \********************************************************************/
/*! exports provided: CourseBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBanner", function() { return CourseBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CourseBanner = function (props) {
    var title = props.title, backgroundImage = props.backgroundImage, tabs = props.tabs, activeTab = props.activeTab;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-script-portlet sv-portlet sv-skip-spacer" },
                backgroundImage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, "\n        .pageHeader {\n          background-image: url('" + backgroundImage + "') !important;\n        }\n      "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pageHeader" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, title)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "buttonsField" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "buttonsContainer" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "align-horizontal" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'horizontalMenu' },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, tabs.map(function (_a, idx) {
                                    var name = _a.name, key = _a.key, link = _a.link;
                                    var isActive = activeTab === link;
                                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key || (typeof name === 'string' ? name : idx), className: isActive ? "activePage" : "" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: link }, name));
                                })))))))));
};


/***/ }),

/***/ "./src/components/course-viewer/course-page/course-module-page.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/course-module-page.tsx ***!
  \*************************************************************************/
/*! exports provided: CourseModulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModulePage", function() { return CourseModulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _utils_get_included_ids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-included-ids */ "./src/components/course-viewer/utils/get-included-ids.ts");
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subcomponents/learning-goals-list */ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx");
/* harmony import */ var _subcomponents_task_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subcomponents/task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");
/* harmony import */ var _get_customized_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-customized-task */ "./src/components/course-viewer/course-page/get-customized-task.ts");










var CourseModulePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModulePage, _super);
    function CourseModulePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CourseModulePage.prototype.render = function () {
        var _a = this.props, module = _a.module, course = _a.course;
        var incluedIds = Object(_utils_get_included_ids__WEBPACK_IMPORTED_MODULE_4__["default"])(module, course);
        var learningTasks = module.taskIds
            .map(function (id) { return course.tasks.find(function (t) { return t.id === id; }); })
            .filter(function (task) { return !!task; })
            .map(function (task) { return ({
            id: task.id,
            task: Object(_get_customized_task__WEBPACK_IMPORTED_MODULE_9__["getCustomizedTask"])(module, task),
            course: course,
            name: task.name,
            url: "#" + encodeURIComponent(module.name.trim()) + "/" + task.id,
            courseName: course.name,
            learningGoal: task.learningGoal || module.name,
        }); });
        var assignmentTasks = learningTasks.filter(function (t) { return t.task && t.task.assignment; });
        var nonAssignmentTasks = learningTasks.filter(function (t) { return !t.task || !t.task.assignment; });
        var commonTasks = nonAssignmentTasks.filter(function (t) { return !t.task.learningGoal; });
        var learningGoals = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["arrayToLookup"])(nonAssignmentTasks.filter(function (t) { return !!t.task.learningGoal; }), function (t) { return t.learningGoal; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet sv-use-margins sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet-content" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "h1" }, module.name))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-vertical sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: module.mandatoryContent } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Modulens kunskapskrav, f\u00F6rm\u00E5gor och centrala inneh\u00E5ll"),
                    (!!module.startWeek || !!module.endWeek) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "week-period-div" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Startvecka"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, module.startWeek || "--"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Slutvecka"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, module.endWeek || "--"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_3__["KnowledgeRequirementsTable"], { title: "I den h\u00E4r modulen bed\u00F6ms f\u00F6ljande kunskapskrav", requirements: course.knowledgeRequirements, includedIds: incluedIds }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__["AbilitiesBox"], { title: "Den h\u00E4r modulen behandlar f\u00F6ljande f\u00F6rm\u00E5gor", abilities: course.abilities.filter(function (a) { return incluedIds[a.id]; }) }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__["CentralContentBox"], { title: "Den h\u00E4r modulen behandlar f\u00F6ljande centrala inneh\u00E5ll", centralContent: course.centralContent.filter(function (c) { return incluedIds[c.id]; }) }))),
            module.taskIds.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-script-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    assignmentTasks.length === 0 ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Inl\u00E4mningsuppgifter"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_8__["TaskList"], { learningTasks: assignmentTasks })),
                    nonAssignmentTasks.length === 0 ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgifter"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_7__["LearningGoalsList"], { commonTasks: commonTasks, learningGoals: Object.keys(learningGoals).map(function (learningGoal) { return ({
                                name: learningGoal,
                                learningTasks: learningGoals[learningGoal]
                            }); }) })))),
            module.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, module.resources.map(function (r, idx) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: r.url }, r.name)));
                    })))));
    };
    return CourseModulePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/get-customized-task.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/get-customized-task.ts ***!
  \*************************************************************************/
/*! exports provided: getCustomizedTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomizedTask", function() { return getCustomizedTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getCustomizedTask(module, task) {
    return module.taskCustomizations ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, module.taskCustomizations[task.id]) :
        task;
}


/***/ }),

/***/ "./src/components/course-viewer/course-page/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/course-viewer/course-page/index.tsx ***!
  \************************************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-viewer/course-page/course-banner.tsx");
/* harmony import */ var _course_module_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-module-page */ "./src/components/course-viewer/course-page/course-module-page.tsx");
/* harmony import */ var _run_up_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run-up-page */ "./src/components/course-viewer/course-page/run-up-page.tsx");
/* harmony import */ var _utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/manual-scroll-restoration */ "./src/components/course-viewer/utils/manual-scroll-restoration.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../weekplanner */ "./src/components/weekplanner/index.ts");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-page */ "./src/components/course-viewer/course-page/task-page.tsx");
/* harmony import */ var _get_customized_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-customized-task */ "./src/components/course-viewer/course-page/get-customized-task.ts");










Object(_utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__["initManualScrollRestoration"])();
var CoursePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoursePage, _super);
    function CoursePage(props) {
        var _this = _super.call(this, props) || this;
        _this.onHashChange = _this.onHashChange.bind(_this);
        var _a = _this.getModuleAndTaskFromHash(), module = _a.module, task = _a.task;
        _this.state = {
            module: module,
            task: task
        };
        return _this;
    }
    CoursePage.prototype.getModuleAndTaskFromHash = function () {
        var split = (location.hash.substr(1) || "").split('/');
        if (split.length > 0 && !split[0])
            split = split.slice(1); // Allow leading slash #/module/task
        var _a = split.map(function (part) { return decodeURIComponent(part); }), moduleName = _a[0], taskId = _a[1];
        var module = this.props.course.modules
            .filter(function (m) { return (m.name || "")
            .trim().toLowerCase() === (moduleName || "").trim().toLowerCase(); })[0] || null;
        var task = taskId ?
            this.props.course.tasks.find(function (t) { return t.id === taskId; }) || null :
            null;
        if (task && !module) {
            // Resolve module by finding the module that holds the task:
            module = this.getOrderedModules()
                .filter(function (m) { return m.taskIds
                .some(function (taskId) { return task.id === taskId; }); })[0];
        }
        if (task && module) {
            task = Object(_get_customized_task__WEBPACK_IMPORTED_MODULE_9__["getCustomizedTask"])(module, task);
        }
        return { module: module, task: task };
    };
    CoursePage.prototype.componentDidMount = function () {
        window.addEventListener('hashchange', this.onHashChange);
    };
    CoursePage.prototype.componentWillUnmount = function () {
        window.removeEventListener('hashchange', this.onHashChange);
    };
    CoursePage.prototype.onHashChange = function () {
        var _a = this.getModuleAndTaskFromHash(), module = _a.module, task = _a.task;
        this.setState({
            module: module,
            task: task
        }, function () {
            var fallbackScrollPosition = undefined;
            if (task) {
                var taskAnchor = document.getElementById('ked-task-anchor');
                if (taskAnchor)
                    fallbackScrollPosition = (window.pageYOffset + taskAnchor.getBoundingClientRect().top);
                else
                    fallbackScrollPosition = 0;
            }
            Object(_utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__["restoreScrollPosition"])({ fallbackScrollPosition: fallbackScrollPosition });
        });
    };
    CoursePage.prototype.getOrderedModules = function () {
        var course = this.props.course;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        return moduleOrder
            .map(function (id) { return course.modules.find(function (m) { return m.id === id; }); })
            .filter(function (m) { return !!m; })
            .concat(course.modules.filter(function (m) { return !moduleOrder.find(function (id) { return m.id === id; }); }));
    };
    CoursePage.prototype.render = function () {
        var _a = this.props, course = _a.course, courseBuilderUrl = _a.courseBuilderUrl;
        var _b = this.state, module = _b.module, task = _b.task;
        var orderedModules = this.getOrderedModules();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: course.name + " - " + course.points + "p", backgroundImage: (course.images.find(function (img) { return img.id === course.imageId; }) || { url: '' }).url, tabs: [{ name: "Upptakt", link: "#", key: "Upptakt" }]
                    .concat(orderedModules.map(function (_a) {
                    var name = _a.name;
                    return ({ name: name, link: "#" + encodeURIComponent(name), key: name });
                }))
                    .concat(course.workFlowLink ? [{
                        name: "Arbetsgång",
                        key: "workflow",
                        link: course.workFlowLink
                    }] : [])
                    .concat(Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(course) ? [{
                        name: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-pencil", "aria-hidden": "true" }),
                            " Redigera denna kurs"),
                        key: "edit",
                        link: Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(courseBuilderUrl, {}) + "#/courses/" + course.id + "/edit"
                    }] : []), activeTab: module ? "#" + encodeURIComponent(module.name) : "#" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" }, task ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_page__WEBPACK_IMPORTED_MODULE_8__["TaskPage"], { task: task, course: course }) :
                                    module ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module_page__WEBPACK_IMPORTED_MODULE_3__["CourseModulePage"], { course: course, module: module }) :
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_run_up_page__WEBPACK_IMPORTED_MODULE_4__["RunUpPage"], { course: course })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-vertical sv-layout sv-skip-spacer" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_weekplanner__WEBPACK_IMPORTED_MODULE_7__["WeekPlanner"], { viewCourseUrl: '' }))))))))));
    };
    return CoursePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/run-up-page.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-viewer/course-page/run-up-page.tsx ***!
  \******************************************************************/
/*! exports provided: RunUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunUpPage", function() { return RunUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _subcomponents_resource_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/resource-list */ "./src/components/course-viewer/subcomponents/resource-list.tsx");


// Views




var RunUpPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RunUpPage, _super);
    function RunUpPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    RunUpPage.prototype.render = function () {
        var course = this.props.course;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                course.runUpText && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Upptakt"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "normal", dangerouslySetInnerHTML: { __html: course.runUpText } })),
                course.responsibleTeachers && course.responsibleTeachers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "L\u00E4rare"),
                    course.responsibleTeachers.map(function (teacher, i) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: i },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: interpretTeacherUrl(teacher.url) }, teacher.name));
                    })),
                course.workFlowLink && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", href: course.workFlowLink }, "Arbetsg\u00E5ng"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__["AbilitiesBox"], { title: "\u00C4mnets f\u00F6rm\u00E5gor", subTitle: "F\u00F6rm\u00E5gor", abilities: course.abilities, className: "larger" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__["CentralContentBox"], { title: "Kursens centrala inneh\u00E5ll", subTitle: "Centralt inneh\u00E5ll", centralContent: course.centralContent, className: "larger" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__["KnowledgeRequirementsTable"], { title: "Kursens kunskapskrav", requirements: course.knowledgeRequirements, className: "larger" })),
            course.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_resource_list__WEBPACK_IMPORTED_MODULE_5__["ResourceList"], { resources: course.resources }))));
    };
    return RunUpPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function interpretTeacherUrl(url) {
    if (url.indexOf(':') === -1 && url.indexOf('@') >= 0)
        return "mailto:" + url;
    return url;
}


/***/ }),

/***/ "./src/components/course-viewer/course-page/task-assignments.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-assignments.tsx ***!
  \***********************************************************************/
/*! exports provided: TaskAssignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssignments", function() { return TaskAssignments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_8__);









var MAX_FILE_SIZE_MB = 10;
var ALLOWED_EXTENSIONS = [
    ".pdf",
    ".odt",
    ".docx"
];
var TaskAssignments = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskAssignments, _super);
    function TaskAssignments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            assignments: [],
            loading: true
        };
        return _this;
    }
    TaskAssignments.prototype.setStatePromised = function (cb) {
        var _this = this;
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, cb, resolve); });
    };
    TaskAssignments.prototype.componentDidMount = function () {
        this.load();
    };
    TaskAssignments.prototype.componentWillReceiveProps = function (nextProps) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(nextProps.taskId !== this.props.taskId ||
                            nextProps.courseId !== this.props.courseId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setStatePromised(function () { return ({
                                assignments: [],
                                loading: true
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.load()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, school, teacherAtSchool, res, _b, _c, assignments, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school;
                        teacherAtSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_7__["isTeacherAtSchool"])(school);
                        return [4 /*yield*/, (teacherAtSchool ?
                                client.get("assignments/" + courseId + "/" + taskId) :
                                client.get("assignments/" + courseId + "/" + taskId + "/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail))];
                    case 1:
                        res = _d.sent();
                        if (!(res.status !== 200)) return [3 /*break*/, 3];
                        _b = kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"].bind;
                        _c = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_b.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"], _c.concat([_d.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        assignments = _d.sent();
                        this.setState({
                            error: null,
                            loading: false,
                            assignments: assignments
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _d.sent();
                        this.setState({
                            loading: false,
                            error: "Kunde inte ladda inl\u00E4mningsuppgifter",
                            assignments: []
                        });
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.onDrag = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
    };
    TaskAssignments.prototype.onDrop = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file_1, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        ev.stopPropagation();
                        ev.preventDefault();
                        file_1 = ev.dataTransfer.files[0];
                        if (this.state.assignments.some(function (a) {
                            return a.user === _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail &&
                                a.filename === file_1.name;
                        })) {
                            if (!confirm("Ers\u00E4tta befintlig fil (" + file_1.name + ")?")) {
                                return [2 /*return*/];
                            }
                        }
                        if (this.props.school.toLowerCase() !== _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school.toLowerCase()) {
                            if (!confirm("Uppgiften tillh\u00F6r en annan skola (" + this.props.school + ").\n" +
                                "Vill du \u00E4nd\u00E5 l\u00E4mna in ditt arbete h\u00E4r?")) {
                                return [2 /*return*/];
                            }
                        }
                        this.setState({ uploadingFile: file_1 });
                        return [4 /*yield*/, this.upload(file_1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.load()];
                    case 2:
                        _a.sent();
                        this.setState({
                            uploadingFile: null
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.setState({
                            error: "Kunde inte ladda upp filen. " + (error_2.message || error_2),
                            uploadingFile: null
                        });
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.upload = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, mail, lowerFilename, body, res, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId;
                        mail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail;
                        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
                            throw new Error("Filen f\u00E5r inte vara st\u00F6rre \u00E4n " + MAX_FILE_SIZE_MB + " MB");
                        }
                        lowerFilename = file.name.toLowerCase();
                        if (!ALLOWED_EXTENSIONS.some(function (ext) { return lowerFilename.endsWith(ext); })) {
                            throw new Error("Filens \u00E4ndelse m\u00E5ste vara " + ALLOWED_EXTENSIONS.join(' / '));
                        }
                        body = new FormData();
                        body.append('files', file);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch("assignments/" + courseId + "/" + taskId + "/" + mail, 'put', {}, { userDisplayName: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.displayName }, {
                                body: body
                            })];
                    case 1:
                        res = _d.sent();
                        if (!(res.status !== 200)) return [3 /*break*/, 3];
                        _b = kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"].bind;
                        _c = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_b.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"], _c.concat([_d.sent()])))();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.download = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, blob, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch(file.mediaLink, 'get', {})];
                    case 1:
                        res = _c.sent();
                        if (!(res.status >= 400)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.blob()];
                    case 4:
                        blob = _c.sent();
                        downloadjs__WEBPACK_IMPORTED_MODULE_8___default()(blob, file.filename, file.contentType);
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _c.sent();
                        this.setState({ error: "Kunde inte ladda ned filen. " + (err_2.message || err_2) });
                        console.error(err_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.delete = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.setStatePromised(function (_a) {
                                var assignments = _a.assignments;
                                return ({ assignments: assignments.map(function (a) { return a.mediaLink === url ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a, { metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a.metadata, { $meta: 'delete' }) }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a); }) });
                            })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch(url, 'delete', {})];
                    case 2:
                        res = _c.sent();
                        if (!(res.status >= 400)) return [3 /*break*/, 4];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 3: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["HttpError"], _b.concat([_c.sent()])))();
                    case 4: return [4 /*yield*/, this.load()];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _c.sent();
                        this.setState({ error: "Kunde inte ta bort filen. " + (err_3.message || err_3) });
                        console.error(err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.render = function () {
        var _this = this;
        var _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school;
        var _b = this.state, loading = _b.loading, assignments = _b.assignments, error = _b.error, uploadingFile = _b.uploadingFile;
        var teacherAtThisSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_7__["isTeacherAtSchool"])(school);
        var files = assignments.slice();
        if (uploadingFile) {
            var virtualFile_1 = {
                courseId: courseId,
                taskId: taskId,
                filename: uploadingFile.name,
                size: uploadingFile.size,
                user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail,
                contentType: uploadingFile.type,
                uploadDate: Date.now(),
                mediaLink: "assignments/" + courseId + "/" + taskId + "/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail + "/" + uploadingFile.name,
                metadata: { $meta: 'add' }
            };
            files = files.filter(function (file) { return file.mediaLink !== virtualFile_1.mediaLink; });
            files = files.concat([virtualFile_1]);
        }
        files = files.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProps"])(["user", "filename"], ["sv", "en"], { sensitivity: 'base' }));
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onDragOver: function (ev) { return _this.onDrag(ev); }, onDrop: function (ev) { return _this.onDrop(ev); } },
            error ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "error" }, error)) : undefined,
            loading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                " Laddar inl\u00E4mnade filer...") : files.length === 0 ?
                teacherAtThisSchool ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Ingen elev har l\u00E4mnat in n\u00E5got arbete \u00E4nnu.") :
                    undefined
                : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                teacherAtThisSchool ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Elev") : undefined,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Filnamn"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mnat den"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Status"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, files.map(function (file) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: file.mediaLink, style: file.metadata.$meta ? { opacity: 0.5 } : {} },
                            teacherAtThisSchool ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "mailto:" + file.user }, file.metadata.userDisplayName || file.user)) : undefined,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                                        ev.preventDefault();
                                        ev.stopPropagation();
                                        _this.download(file);
                                    } }, file.filename)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(file.uploadDate).format('YYYY-MM-DD HH:mm')),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, file.metadata.$meta === 'add' ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                                    " Laddar upp...") :
                                file.metadata.$meta === 'delete' ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                                        " Tar bort...") :
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fas fa-check" }),
                                        " Inl\u00E4mnad")),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, !file.metadata.$meta && file.user === _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail &&
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                                        ev.stopPropagation();
                                        ev.preventDefault();
                                        _this.delete(file.mediaLink);
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-trash" })))); })))),
            teacherAtThisSchool ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "drop-zone task-assignment-drop-zone" },
                "Droppa ditt f\u00E4rdiga arbete h\u00E4r",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null, "(.pdf, .docx, .odt)"),
                ")")));
    };
    return TaskAssignments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/task-page.tsx":
/*!****************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-page.tsx ***!
  \****************************************************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _task_assignments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-assignments */ "./src/components/course-viewer/course-page/task-assignments.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");












var TaskPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskPage, _super);
    function TaskPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTask: undefined,
            weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()().week()
        };
        _this.onUserTasksChanged = _this.onUserTasksChanged.bind(_this);
        return _this;
    }
    TaskPage.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].subscribe(this.onUserTasksChanged);
    };
    TaskPage.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].unsubscribe(this.onUserTasksChanged);
    };
    TaskPage.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.task.id !== this.props.task.id) {
            var userTask = _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].mem.items.find(function (ut) { return ut.task && ut.task.length > 0 && ut.task[0].id === nextProps.task.id; }) || null;
            this.setState({
                userTask: userTask,
                weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate).week()
            });
        }
    };
    TaskPage.prototype.onUserTasksChanged = function (userTasks) {
        var _this = this;
        var userTask = userTasks.find(function (ut) { return ut.task && ut.task.length > 0 && ut.task[0].id === _this.props.task.id; }) || null;
        this.setState({
            userTask: userTask,
            weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate).week()
        });
    };
    TaskPage.prototype.toggleTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var weekDate, userTask, _a, course, task, module, latestTimeStamp, userTask_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        weekDate = _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate;
                        userTask = this.state.userTask;
                        _a = this.props, course = _a.course, task = _a.task;
                        module = course.modules.find(function (m) { return m.taskIds.some(function (id) { return id === task.id; }); });
                        if (!module)
                            return [2 /*return*/]; // Oh uh!
                        if (userTask === undefined)
                            return [2 /*return*/]; // Not yet loaded.
                        if (!!userTask) return [3 /*break*/, 2];
                        latestTimeStamp = Math.max.apply(Math.max, [weekDate].concat(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].mem.items.map(function (t) { return t.dateTime; })));
                        userTask_1 = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["createUUID"])(),
                            courseName: course.name,
                            dateTime: latestTimeStamp + 2000,
                            learningGoal: task.learningGoal || module.name,
                            name: task.name,
                            url: task.url,
                            task: [task],
                            course: [course],
                            acl: [
                                // Default ACL: Let user self have full control over this item:
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"].currentUser.mail, "S"),
                                // Additional ACL: Let employees on same school have read access to it.
                                // This currently only applies to tasks that refer to course tasks (not own tasks!)
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["DocumentAccess"]("schoolRole", _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"].currentUser.school + "/EMPLOYEE", "R")
                            ].map(function (ac) { return ac.toString(); })
                        };
                        if (task.deadline) {
                            userTask_1.deadline = task.deadline;
                        }
                        return [4 /*yield*/, Promise.all([
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].setWeekPlannerBoxOpen(this.props.course.name, true),
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].insert([userTask_1])
                            ])];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].delete([userTask.id])];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, task = _a.task, course = _a.course;
        var _b = this.state, userTask = _b.userTask, weekPlannerWeek = _b.weekPlannerWeek;
        var abilities = task.abilities.map(function (a) { return course.abilities.find(function (ab) { return ab.id === a.id; }); }).filter(function (a) { return !!a; });
        var centralContent = task.centralContent.map(function (c) { return course.centralContent.find(function (cc) { return cc.id == c.id; }); }).filter(function (c) { return !!c; });
        var requirements = task.knowledgeRequirements.map(function (k) { return course.knowledgeRequirements.find(function (kr) { return kr.id === k.id; }); }).filter(function (k) { return !!k; });
        var isWorking = userTask && (userTask.$meta === 'adding' || userTask.$meta === 'deleting');
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_9___default()().week();
        var forWeekString = weekPlannerWeek === currentWeek ? "loggboken" :
            weekPlannerWeek === currentWeek + 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (n\u00E4sta vecka)"], ["vald vecka (n\u00E4sta vecka)"]))) :
                weekPlannerWeek === currentWeek - 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (f\u00F6rra veckan)"], ["vald vecka (f\u00F6rra veckan)"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (v ", ")"], ["vald vecka (v ", ")"])), weekPlannerWeek);
        var deadlineTooLate = task.deadline && moment__WEBPACK_IMPORTED_MODULE_9___default()(task.deadline).endOf('day') < moment__WEBPACK_IMPORTED_MODULE_9___default()();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet sv-use-margins sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet-content" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "h1" }, task.name))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                task.content && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: task.content } })),
                task.learningGoal && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgiftens l\u00E4randem\u00E5l"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, task.learningGoal)),
                task.url && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: task.url, className: "btn btn-large" }, "G\u00E5 till uppgiften")),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            task.assignment ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Inl\u00E4mningsuppgift"),
                Object(_access_control__WEBPACK_IMPORTED_MODULE_11__["isTeacherAtSchool"])(course.school) ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "H\u00E4r kan du som l\u00E4rare se elevernas inl\u00E4mnade arbeten.") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Det h\u00E4r \u00E4r en inl\u00E4mningsuppgift. L\u00E4mna in ditt arbete som en pdf, doc eller odt fil genom att dra det till f\u00E4ltet under."),
                    task.deadline ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null,
                            "Den h\u00E4r uppgiften ",
                            deadlineTooLate ? 'skulle varit inlämnad ' : 'skall vara inlämnad ',
                            moment__WEBPACK_IMPORTED_MODULE_9___default()(task.deadline).format('YYYY MM DD'))) : undefined),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignments__WEBPACK_IMPORTED_MODULE_10__["TaskAssignments"], { courseId: course.id, taskId: task.id, school: course.school }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)) : undefined,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                abilities.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__["AbilitiesBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande f\u00F6rm\u00E5gor", className: "larger", headerOpen: false, abilities: abilities }),
                centralContent.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__["CentralContentBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande centrala inneh\u00E5ll", className: "larger", headerOpen: false, centralContent: centralContent }),
                requirements.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__["KnowledgeRequirementsTable"], { title: "I den h\u00E4r uppgiften bed\u00F6ms f\u00F6ljande kunskapskrav", className: "larger", headerOpen: true, requirements: requirements })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            userTask !== undefined && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "selectedBox" + (userTask && userTask.$meta !== 'deleting' ? ' selected' : ''), style: isWorking ? { opacity: 0.5 } : {}, onClick: function () { return !isWorking && _this.toggleTask(); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, userTask ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort uppgiften fr\u00E5n ", ""], ["Ta bort uppgiften fr\u00E5n ", ""])), forWeekString) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till uppgiften i ", ""], ["L\u00E4gg till uppgiften i ", ""])), forWeekString)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            task.resources && task.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser kopplade till uppgiften"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, task.resources.map(function (r, idx) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: r.url }, r.name)));
                })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null));
    };
    return TaskPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-viewer/index.tsx":
/*!************************************************!*\
  !*** ./src/components/course-viewer/index.tsx ***!
  \************************************************/
/*! exports provided: CourseViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewer", function() { return CourseViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _course_builder_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-builder/utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-page */ "./src/components/course-viewer/course-page/index.tsx");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _list_courses_list_courses_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../list-courses/list-courses-page */ "./src/components/list-courses/list-courses-page.tsx");









var CourseViewer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseViewer, _super);
    function CourseViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            course: null,
            isLoading: true
        };
        return _this;
    }
    CourseViewer.prototype.componentWillMount = function () {
        var _this = this;
        this.load().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"])
            .then(function () { return _this.setState({ isLoading: false }); });
    };
    CourseViewer.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var courseId, course, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        courseId = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_7__["parseQueryString"])(location.search)["courseId"];
                        if (!courseId) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_course_builder_utils__WEBPACK_IMPORTED_MODULE_4__["loadCourse"])(courseId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        course = _a;
                        this.setState({ course: course });
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseViewer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-viewer" },
            this.state.isLoading ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null) :
                this.state.course ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"], { course: this.state.course, courseBuilderUrl: this.props.courseBuilderUrl }) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_courses_list_courses_page__WEBPACK_IMPORTED_MODULE_8__["ListCoursesPage"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__["ErrorSuccessFeedback"], null));
    };
    return CourseViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/abilities-box.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/abilities-box.tsx ***!
  \**********************************************************************/
/*! exports provided: AbilitiesBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesBox", function() { return AbilitiesBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AbilitiesBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AbilitiesBox, _super);
    function AbilitiesBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    AbilitiesBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, abilities = _a.abilities, className = _a.className;
        var headerOpen = this.state.headerOpen;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "abilityList" },
                    subTitle && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentHeader" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, subTitle)),
                    abilities.map(function (a) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: a.id, className: "contentPart" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentText" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: a.name } })));
                    }))));
    };
    return AbilitiesBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/central-content-box.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/central-content-box.tsx ***!
  \****************************************************************************/
/*! exports provided: CentralContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralContentBox", function() { return CentralContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var CentralContentBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CentralContentBox, _super);
    function CentralContentBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    CentralContentBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, centralContent = _a.centralContent, className = _a.className;
        var headerOpen = this.state.headerOpen;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "abilityList" },
                    subTitle && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentHeader" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, subTitle)),
                    centralContent.map(function (cc) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: cc.id, className: "contentPart" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentText" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: cc.name } })));
                    }))));
    };
    return CentralContentBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/confirmation.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/confirmation.tsx ***!
  \*********************************************************************/
/*! exports provided: Confirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmation", function() { return Confirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Confirmation(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "confirmation-box " + props.className + (props.visible ? " visible" : "") },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.text),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return props.onConfirm(); } }, "OK"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return props.onCancel(); } }, "Avbryt"));
}


/***/ }),

/***/ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx ***!
  \*************************************************************************************/
/*! exports provided: KnowledgeRequirementsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeRequirementsTable", function() { return KnowledgeRequirementsTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");



var KnowledgeRequirementsTable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KnowledgeRequirementsTable, _super);
    function KnowledgeRequirementsTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    KnowledgeRequirementsTable.prototype.render = function () {
        var _a = this.props, title = _a.title, requirements = _a.requirements, className = _a.className, includedIds = _a.includedIds, headerOpen = _a.headerOpen;
        var columns = ["E", "C", "A"];
        var rows = [];
        var reqs = requirements.slice();
        var row = null;
        while (true) {
            row = columns.map(function (grade) {
                var pNext = reqs.findIndex(function (r) { return r.gradeStep.toUpperCase() === grade; });
                if (pNext < 0)
                    return null;
                var rv = reqs[pNext];
                reqs.splice(pNext, 1);
                return includedIds ?
                    (includedIds[rv.id] ? rv : undefined) :
                    rv;
            });
            if (row.every(function (r) { return r === null; }))
                break;
            if (!row.every(function (r) { return !r; })) {
                rows.push(row);
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title), className: className, headerOpen: headerOpen },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columns.map(function (c) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: c }, c); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows.map(function (row, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i }, row.map(function (column, j) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j, dangerouslySetInnerHTML: { __html: column ? column.name : "" } });
                    }));
                }))));
    };
    return KnowledgeRequirementsTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/learning-goals-list.tsx ***!
  \****************************************************************************/
/*! exports provided: LearningGoalsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningGoalsList", function() { return LearningGoalsList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");



var LearningGoalsList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LearningGoalsList, _super);
    function LearningGoalsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LearningGoalsList.prototype.render = function () {
        var _a = this.props, commonTasks = _a.commonTasks, learningGoals = _a.learningGoals;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            learningGoals.map(function (lg) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: lg.name },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, lg.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_list__WEBPACK_IMPORTED_MODULE_2__["TaskList"], { learningTasks: lg.learningTasks })); }),
            commonTasks.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                learningGoals.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, "\u00D6vergripande"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_list__WEBPACK_IMPORTED_MODULE_2__["TaskList"], { learningTasks: commonTasks })));
    };
    return LearningGoalsList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/resource-list.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/resource-list.tsx ***!
  \**********************************************************************/
/*! exports provided: ResourceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceList", function() { return ResourceList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ResourceList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourceList, _super);
    function ResourceList(props) {
        return _super.call(this, props) || this;
    }
    ResourceList.prototype.render = function () {
        var resources = this.props.resources;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, resources.map(function (resource, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: resource.url }, resource.name)));
            })));
    };
    return ResourceList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/task-list.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/task-list.tsx ***!
  \******************************************************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmation */ "./src/components/course-viewer/subcomponents/confirmation.tsx");








var TaskList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskList, _super);
    function TaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTasks: [],
            weekDate: Date.now(),
            confirmations: []
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    TaskList.prototype.onChange = function (userTasks, persisted) {
        if (persisted.weekDate !== this.state.weekDate) {
            this.setState({
                confirmations: []
            });
        }
        this.setState({
            userTasks: userTasks,
            weekDate: persisted.weekDate
        });
    };
    TaskList.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].subscribe(this.onChange);
    };
    TaskList.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].unsubscribe(this.onChange);
    };
    TaskList.prototype.toggleTask = function (learningTask) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userTasks, weekDate, latestTimeStamp, userTask;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userTasks = this.state.userTasks.filter(function (ut) {
                            return learningTask.task ?
                                ut.task && ut.task.some(function (t) { return t.id === learningTask.id; }) :
                                ut.siteVisionPageId === learningTask.id;
                        });
                        weekDate = this.state.weekDate;
                        if (!(userTasks.length === 0)) return [3 /*break*/, 2];
                        latestTimeStamp = Math.max.apply(Math.max, [weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        userTask = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                            courseName: learningTask.courseName,
                            dateTime: latestTimeStamp + 2000,
                            learningGoal: learningTask.learningGoal,
                            name: learningTask.name,
                            url: learningTask.url,
                            acl: [
                                // Default ACL: Let user self have full control over this item:
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail, "S"),
                                // Additional ACL: Let employees on same school have read access to it.
                                // This currently only applies to tasks that refer to course tasks (not custom tasks!)
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]("schoolRole", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school + "/EMPLOYEE", "R")
                            ].map(function (ac) { return ac.toString(); })
                        };
                        if (learningTask.task && learningTask.task.deadline) {
                            userTask.deadline = learningTask.task.deadline;
                        }
                        if (learningTask.task && learningTask.course) {
                            userTask.task = [learningTask.task];
                            userTask.course = [learningTask.course];
                        }
                        else {
                            userTask.siteVisionPageId = learningTask.id;
                        }
                        if (learningTask.step) {
                            userTask.step = learningTask.step;
                        }
                        return [4 /*yield*/, Promise.all([
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].setWeekPlannerBoxOpen(learningTask.courseName, true),
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].insert([userTask])
                            ])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // Already present in weekplanner. It's time to delete those that matched us.
                    return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].delete(userTasks.map(function (t) { return t.id; }))];
                    case 3:
                        // Already present in weekplanner. It's time to delete those that matched us.
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskList.prototype.render = function () {
        var _this = this;
        var learningTasks = this.props.learningTasks;
        var userTasks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["arrayToMap"])(this.state.userTasks, function (ut) { return ut.task && ut.task.length > 0 ?
            ut.task.map(function (t) { return t.id; })[0] : // course-builder tasks looked up by id
            ut.siteVisionPageId ? ut.siteVisionPageId : // non-course-builder tasks
                ut.url; });
        var confirmations = this.state.confirmations;
        var weekPlannerWeek = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.state.weekDate).week();
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_3___default()().week();
        var forWeekString = weekPlannerWeek === currentWeek ? "" :
            weekPlannerWeek === currentWeek + 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["f\u00F6r n\u00E4sta vecka (v", ")"], ["f\u00F6r n\u00E4sta vecka (v", ")"])), weekPlannerWeek) :
                weekPlannerWeek === currentWeek - 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["f\u00F6r f\u00F6rra veckan (v", ")"], ["f\u00F6r f\u00F6rra veckan (v", ")"])), weekPlannerWeek) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["f\u00F6r vecka ", ""], ["f\u00F6r vecka ", ""])), weekPlannerWeek);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, learningTasks.map(function (learningTask, idx) {
            var taskLookupId = learningTask.id;
            var userTask = userTasks[taskLookupId] || { $meta: 'deleted' }; // No exist = $meta: 'deleted'
            var isWorking = userTask.$meta === 'adding' || userTask.$meta === 'deleting';
            var selected = userTask.$meta !== 'deleted' && userTask.$meta !== 'deleting';
            var describedAction = selected ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort uppgiften fr\u00E5n egen veckoplanering ", ""], ["Ta bort uppgiften fr\u00E5n egen veckoplanering ", ""])), forWeekString) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till uppgiften i egen veckoplanering ", ""], ["L\u00E4gg till uppgiften i egen veckoplanering ", ""])), forWeekString);
            var confirmationVisible = confirmations.some(function (tid) { return taskLookupId === tid; });
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: learningTask.id },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: taskLookupId, className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "selectedBox" + (selected ? ' selected' : ''), style: isWorking ? { opacity: 0.5 } : {}, onClick: function () { return !isWorking && weekPlannerWeek === currentWeek ?
                                _this.toggleTask(learningTask) :
                                confirmationVisible ?
                                    _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) }) :
                                    _this.setState({ confirmations: confirmations.slice().concat(taskLookupId) }); }, title: describedAction })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: learningTask.url }, learningTask.name))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_confirmation__WEBPACK_IMPORTED_MODULE_7__["Confirmation"], { visible: confirmationVisible, text: describedAction, onConfirm: function () {
                        _this.toggleTask(learningTask);
                        _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) });
                    }, onCancel: function () {
                        _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) });
                    } }));
        }));
    };
    return TaskList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-viewer/utils/get-included-ids.ts":
/*!****************************************************************!*\
  !*** ./src/components/course-viewer/utils/get-included-ids.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIncludedIds; });
function getIncludedIds(module, course) {
    var result = {};
    course.tasks.filter(function (t) { return module.taskIds.indexOf(t.id) !== -1; }).forEach(function (task) {
        task.abilities.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
        task.centralContent.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
        task.knowledgeRequirements.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
    });
    return result;
}


/***/ }),

/***/ "./src/components/course-viewer/utils/manual-scroll-restoration.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/utils/manual-scroll-restoration.ts ***!
  \*************************************************************************/
/*! exports provided: initManualScrollRestoration, restoreScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initManualScrollRestoration", function() { return initManualScrollRestoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreScrollPosition", function() { return restoreScrollPosition; });
var initialized = false;
function initManualScrollRestoration() {
    if (!initialized) {
        initialized = true;
        document.documentElement.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target && target.tagName === 'A') {
                history.replaceState({ pageYOffset: window.pageYOffset }, null, null);
            }
        });
        if (history.scrollRestoration)
            history.scrollRestoration = 'manual';
    }
}
function restoreScrollPosition(_a) {
    var fallbackScrollPosition = _a.fallbackScrollPosition;
    if (history.state && history.state.pageYOffset !== undefined) {
        window.scrollTo(0, history.state.pageYOffset);
    }
    else if (fallbackScrollPosition !== undefined) {
        window.scrollTo(0, fallbackScrollPosition);
    }
}


/***/ }),

/***/ "./src/components/list-courses/list-courses-page.tsx":
/*!***********************************************************!*\
  !*** ./src/components/list-courses/list-courses-page.tsx ***!
  \***********************************************************/
/*! exports provided: ListCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCoursesPage", function() { return ListCoursesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _course_viewer_course_page_course_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course-viewer/course-page/course-banner */ "./src/components/course-viewer/course-page/course-banner.tsx");
/* harmony import */ var _list_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-courses */ "./src/components/list-courses/list-courses.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");




function ListCoursesPage() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_viewer_course_page_course_banner__WEBPACK_IMPORTED_MODULE_1__["CourseBanner"], { title: _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser.school, backgroundImage: "", tabs: [{ name: "Skolans kurser", link: "#" }], activeTab: "#" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_list_courses__WEBPACK_IMPORTED_MODULE_2__["ListCourses"], null)))));
}


/***/ }),

/***/ "./src/components/list-courses/list-courses.tsx":
/*!******************************************************!*\
  !*** ./src/components/list-courses/list-courses.tsx ***!
  \******************************************************/
/*! exports provided: ListCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCourses", function() { return ListCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _access_control_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../access-control/index */ "./src/access-control/index.ts");
/* harmony import */ var _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../repos/hidden-courses-repo */ "./src/repos/hidden-courses-repo.ts");







var ListCourses = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListCourses, _super);
    function ListCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            courses: [],
            headerOpen: false
        };
        _this.updateHiddenCourses = _this.updateHiddenCourses.bind(_this);
        return _this;
    }
    ListCourses.prototype.componentWillMount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_6__["hiddenCoursesRepo"].subscribe(this.updateHiddenCourses, { fullCourse: true });
    };
    ListCourses.prototype.componentWillUnmount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_6__["hiddenCoursesRepo"].unsubscribe(this.updateHiddenCourses);
    };
    ListCourses.prototype.updateHiddenCourses = function (courses) {
        this.setState({ courses: courses, isLoading: false });
    };
    ListCourses.prototype.hideCourse = function (course) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
                        return [4 /*yield*/, _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_6__["hiddenCoursesRepo"].hideCourse(course)];
                    case 1:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCourses.prototype.showCourse = function (course) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
                        return [4 /*yield*/, _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_6__["hiddenCoursesRepo"].showCourse(course)];
                    case 1:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCourses.prototype.render = function () {
        var _this = this;
        if (this.state.isLoading)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null);
        var courses = this.state.courses;
        var visibleCourses = courses.filter(function (course) { return course.visible; });
        var hiddenCourses = courses.filter(function (course) { return !course.visible; });
        var query = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["parseQueryString"])(location.search);
        var viewCourseUrl = this.props.viewCourseUrl || "";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Skolans kurser"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, visibleCourses.map(function (course) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "studentCourse", key: course.id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "hideItem", onClick: function () { return _this.hideCourse(course); } })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_access_control_index__WEBPACK_IMPORTED_MODULE_5__["preserveImpersonationQuery"])(viewCourseUrl, { courseId: course.id }) }, course.name))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }, course.description)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openClose" + (this.state.headerOpen ? " open" : "") },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, "Dolda kurser")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, hiddenCourses.map(function (course) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "studentCourse", key: course.id },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "showItem", onClick: function () { return _this.showCourse(course); } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_4__["generateQueryString"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, query, { courseId: course.id })) }, course.name)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }, course.description)));
                    })))));
    };
    return ListCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/utility-components/dialogs.tsx":
/*!*******************************************************!*\
  !*** ./src/components/utility-components/dialogs.tsx ***!
  \*******************************************************/
/*! exports provided: Dialogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return Dialogs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-builder/sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var Dialogs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dialogs, _super);
    function Dialogs(props) {
        return _super.call(this, props) || this;
    }
    Dialogs.prototype.componentDidUpdate = function (prevProps) {
        if (this.lastDiv !== null && prevProps.dialogs.length > this.props.dialogs.length) {
            // A dialog was closed. Now focus the last dialog:
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this.lastDiv)).find(':input').first().focus();
        }
    };
    Dialogs.prototype.render = function () {
        var _this = this;
        this.lastDiv = null;
        var _a = this.props, dialogs = _a.dialogs, popDialog = _a.popDialog;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').attr('aria-disabled', dialogs.length > 0);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').css('overflow', dialogs.length > 0 ? 'hidden' : 'auto');
        return dialogs.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, dialogs.map(function (dialog, idx) {
            var div;
            function onKeyPress(ev) {
                if (ev.which === 13 && (!ev.target || ev.target.tagName !== 'TEXTAREA')) {
                    jquery__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(div)).find('.btn-default').click();
                }
                ev.stopPropagation();
            }
            function onKeyDown(ev) {
                if (ev.which === 27) {
                    popDialog();
                    ev.stopPropagation();
                    return;
                }
                if (ev.which === 83 && (ev.ctrlKey || ev.metaKey)) {
                    var domNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(div);
                    ev.preventDefault();
                    var defaultButton = jquery__WEBPACK_IMPORTED_MODULE_4___default()(domNode).find('.btn-default');
                    defaultButton.click();
                    ev.stopPropagation();
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "darken" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page", ref: function (elem) {
                            div = elem;
                            if (idx === dialogs.length - 1)
                                _this.lastDiv = elem;
                        }, tabIndex: 0, "aria-disabled": idx < dialogs.length - 1, onKeyPress: onKeyPress, onKeyDown: onKeyDown },
                        dialog,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"], { onClick: popDialog }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stopFloats" }))));
        }));
    };
    return Dialogs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/form-field-text-input.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/utility-components/form-field-text-input.tsx ***!
  \*********************************************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field */ "./src/components/utility-components/form-field.tsx");



var TextInput = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextInput, _super);
    function TextInput(props) {
        return _super.call(this, props) || this;
    }
    TextInput.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_form_field__WEBPACK_IMPORTED_MODULE_2__["FormField"], { label: this.props.label },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: this.props.autoFocus, id: this.props.id, size: 35, value: this.props.value, onChange: function (ev) { return _this.props.onChange(ev.target.value); }, placeholder: this.props.placeholder })),
                !!this.props.children && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" }, this.props.children))));
    };
    return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/form-field-textarea.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/utility-components/form-field-textarea.tsx ***!
  \*******************************************************************/
/*! exports provided: TextAreaFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaFormField", function() { return TextAreaFormField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field */ "./src/components/utility-components/form-field.tsx");



var TextAreaFormField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextAreaFormField, _super);
    function TextAreaFormField(props) {
        return _super.call(this, props) || this;
    }
    TextAreaFormField.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_form_field__WEBPACK_IMPORTED_MODULE_2__["FormField"], { label: this.props.label },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { autoFocus: this.props.autoFocus, id: this.props.id, cols: 35, rows: this.props.rows || 5, value: this.props.value, onChange: function (ev) { return _this.props.onChange(ev.target.value); }, placeholder: this.props.placeholder })),
                !!this.props.children && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" }, this.props.children))));
    };
    return TextAreaFormField;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/form-field.tsx":
/*!**********************************************************!*\
  !*** ./src/components/utility-components/form-field.tsx ***!
  \**********************************************************/
/*! exports provided: FormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return FormField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function findId(node) {
    var recucheck = new Set();
    return (function findId(node) {
        if (typeof node === 'string')
            return null;
        if (recucheck.has(node)) {
            debugger;
            return;
        }
        recucheck.add(node);
        if (node.props) {
            if (node.props.id)
                return node.props.id;
            if (node.props.children) {
                return findId(node.props.children);
            }
            return;
        }
        if (node.length) {
            for (var i = 0; i < node.length; ++i) {
                var child = node[i];
                if (child) {
                    var childId = findId(child);
                    if (childId)
                        return childId;
                    //console.log(child);
                }
            }
        }
    })(node);
}
var FormField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormField, _super);
    function FormField(props) {
        return _super.call(this, props) || this;
    }
    FormField.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel", htmlFor: findId(this.props.children) }, this.props.label),
            this.props.children);
    };
    return FormField;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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

/***/ "./src/components/weekplanner/add-custom-goal.tsx":
/*!********************************************************!*\
  !*** ./src/components/weekplanner/add-custom-goal.tsx ***!
  \********************************************************/
/*! exports provided: AddCustomGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomGoal", function() { return AddCustomGoal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AddCustomGoal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCustomGoal, _super);
    function AddCustomGoal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            learningGoal: props.learningGoal || ''
        };
        return _this;
    }
    AddCustomGoal.prototype.render = function () {
        var _this = this;
        var learningGoal = this.state.learningGoal;
        var onSave = this.props.onSave;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "L\u00E4gg till eget l\u00E4randem\u00E5l"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "M\u00E5l:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, autoFocus: true, value: learningGoal, onChange: function (e) { return _this.setState({ learningGoal: e.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return onSave(learningGoal); } }, "Spara")));
    };
    return AddCustomGoal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/add-custom-task.tsx":
/*!********************************************************!*\
  !*** ./src/components/weekplanner/add-custom-task.tsx ***!
  \********************************************************/
/*! exports provided: AddCustomTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomTask", function() { return AddCustomTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");




var AddCustomTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCustomTask, _super);
    function AddCustomTask(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: '',
            description: '',
            url: ''
        };
        return _this;
    }
    AddCustomTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        var _b = this.props, isTask = _b.isTask, onSave = _b.onSave;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "L\u00E4gg till eget arbetsm\u00E5l"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: "Namn", id: "AddCustomTask:name", placeholder: "Ange namn...", value: name, autoFocus: true, onChange: function (name) { return _this.setState({ name: name }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__["TextAreaFormField"], { rows: 7, label: "Beskrivning", id: "AddCustomTask:description", placeholder: "L\u00E4gg till en beskrivning...", value: description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: "L\u00E4nk", id: "AddCustomTask:url", placeholder: "http://www...", value: url, onChange: function (name) { return _this.setState({ url: url }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return onSave(name, description, url); } }, "Spara")));
    };
    return AddCustomTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/add-or-edit-sub-task.tsx":
/*!*************************************************************!*\
  !*** ./src/components/weekplanner/add-or-edit-sub-task.tsx ***!
  \*************************************************************/
/*! exports provided: AddOrEditSubTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditSubTask", function() { return AddOrEditSubTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");






var AddOrEditSubTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddOrEditSubTask, _super);
    function AddOrEditSubTask(props) {
        var _this = _super.call(this, props) || this;
        if (props.mode === 'edit') {
            var subTask = props.subTask;
            _this.state = {
                name: subTask.name || '',
                description: subTask.description || '',
                url: subTask.url || ''
            };
        }
        else {
            _this.state = {
                name: '',
                description: '',
                url: ''
            };
        }
        return _this;
    }
    AddOrEditSubTask.prototype.save = function () {
        // Update repo:
        var props = this.props;
        var userTask = props.userTask, closeDialog = props.closeDialog;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        if (props.mode === 'edit') {
            // Edit existing:
            _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_4__["userTasksRepo"].update([userTask], function (ut) {
                var subTasks = ut.subTasks;
                if (subTasks) {
                    ut.subTasks = subTasks.map(function (st) {
                        return st.id === props.subTask.id ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, st, { name: name, description: description, url: url }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, st);
                    });
                }
            });
        }
        else {
            // Create new task
            var newSubTask_1 = {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                name: name,
                description: description,
                url: url
            };
            // Update repo:
            _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_4__["userTasksRepo"].update([userTask], function (ut) {
                if (!ut.subTasks) {
                    ut.subTasks = [];
                }
                ut.subTasks = ut.subTasks.concat(newSubTask_1);
            });
        }
        // Close dialog
        closeDialog();
    };
    AddOrEditSubTask.prototype.delete = function () {
        // Update repo:
        var props = this.props;
        if (props.mode !== 'edit') {
            throw new Error("Can only delete in edit mode");
        }
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_4__["userTasksRepo"].update([props.userTask], function (ut) {
            if (ut.subTasks) {
                ut.subTasks = ut.subTasks.filter(function (t) { return t.id !== props.subTask.id; });
            }
        });
        // Close dialog:
        props.closeDialog();
    };
    AddOrEditSubTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        var props = this.props;
        var isEditMode = props.mode === 'edit';
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isEditMode ? 'Redigera underuppgift' : 'Lägg till underuppgift'),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { autoFocus: true, label: "Underuppgiftens namn", id: "AddUserSubTask:name", placeholder: "", value: this.state.name, onChange: function (name) { return _this.setState({ name: name }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__["TextAreaFormField"], { label: "Beskrivning", id: "AddUserSubTask:description", rows: 7, placeholder: "", value: this.state.description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: "L\u00E4nk", id: "AddUserSubTask:url", placeholder: "", value: this.state.url, onChange: function (url) { return _this.setState({ url: url }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                props.mode === 'edit' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-warning btn-large pull-right", onClick: function (ev) { return _this.delete(); } }, "Ta bort underuppgift"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return _this.save(); } }, "Spara")));
    };
    return AddOrEditSubTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/edit-user-task.tsx":
/*!*******************************************************!*\
  !*** ./src/components/weekplanner/edit-user-task.tsx ***!
  \*******************************************************/
/*! exports provided: EditUserTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserTask", function() { return EditUserTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_task_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-task-type */ "./src/components/weekplanner/get-task-type.ts");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var _globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/moment-sv-locale */ "./src/globals/moment-sv-locale.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility-components/form-field */ "./src/components/utility-components/form-field.tsx");
/* harmony import */ var _add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-or-edit-sub-task */ "./src/components/weekplanner/add-or-edit-sub-task.tsx");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");











var EditUserTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditUserTask, _super);
    function EditUserTask(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTask: props.userTask,
            name: props.userTask.name,
            description: props.userTask.description,
            url: props.userTask.url,
            deadline: props.userTask.deadline,
            subTasks: props.userTask.subTasks
        };
        _this.onUserTasksChanged = _this.onUserTasksChanged.bind(_this);
        return _this;
    }
    EditUserTask.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_9__["userTasksRepo"].subscribe(this.onUserTasksChanged);
    };
    EditUserTask.prototype.onUserTasksChanged = function (userTasks) {
        var _this = this;
        var myUserTask = userTasks.find(function (ut) { return ut.id === _this.props.userTask.id; });
        if (!myUserTask) {
            this.props.closeDialog();
            return;
        }
        this.setState({
            userTask: myUserTask,
            subTasks: myUserTask.subTasks
        });
    };
    EditUserTask.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_9__["userTasksRepo"].unsubscribe(this.onUserTasksChanged);
    };
    EditUserTask.prototype.isModified = function () {
        // Don't count subtask changes! They live their own life and is maintained
        // in add-or-edit-sub-task.tsx. Reason: User would expect added /edited subtasks
        // to be persisted right away. May click away this dialog.
        // Also reason: Can invoke that dialog by itself from other components. From WeekPlanner
        // when clicking the subtask for example!
        var _a = this.state, deadline = _a.deadline, description = _a.description, name = _a.name, url = _a.url, userTask = _a.userTask;
        return (deadline !== userTask.deadline ||
            description !== userTask.description ||
            name !== userTask.name ||
            url !== userTask.url);
    };
    EditUserTask.prototype.addSubTask = function () {
        this.props.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__["AddOrEditSubTask"], { mode: "add", userTask: this.state.userTask, closeDialog: this.props.closeDialog }));
    };
    EditUserTask.prototype.editSubTask = function (subTask) {
        this.props.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__["AddOrEditSubTask"], { mode: "edit", subTask: subTask, userTask: this.state.userTask, closeDialog: this.props.closeDialog }));
    };
    EditUserTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url, deadline = _a.deadline, subTasks = _a.subTasks, showCalendar = _a.showCalendar, userTask = _a.userTask;
        var id = userTask.id, courseName = userTask.courseName;
        var _b = this.props, onUpdate = _b.onUpdate, onDelete = _b.onDelete;
        var isModified = this.isModified();
        var taskType = Object(_get_task_type__WEBPACK_IMPORTED_MODULE_2__["getTaskType"])(userTask);
        var isCustomTask = taskType === 'customTask';
        var expired = moment__WEBPACK_IMPORTED_MODULE_6___default()(userTask.deadline) < moment__WEBPACK_IMPORTED_MODULE_6___default()();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editTaskDialog sv-html-portlet sv-portlet sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isCustomTask ? "Redigera arbetsm\u00E5l" : "Redigera uppgift"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__["TextInput"], { autoFocus: true, label: isCustomTask ? "Arbetsmålets namn" : "Uppgiftens namn", id: "EditUserTask:name", placeholder: isCustomTask ? "Vad ska du göra?" : "Ange uppgiftens namn...", value: name, onChange: function (name) { return _this.setState({ name: name }); } }),
            isCustomTask && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_10__["TextAreaFormField"], { rows: 5, label: "Beskrivning", id: "EditUserTask:description", placeholder: "L\u00E4gg till en beskrivning...", value: description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__["TextInput"], { label: "L\u00E4nk", id: "EdutUserTask:url", placeholder: "http(s)://...", value: url, onChange: function (url) { return _this.setState({ url: url }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__["FormField"], { label: "Ange deadline" }, (deadline || showCalendar) ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"], { ref: function (elem) { return _this.datePicker = elem; }, id: "EditUserTask:deadline", selected: deadline && moment__WEBPACK_IMPORTED_MODULE_6___default()(deadline), autoFocus: showCalendar, dateFormat: "YYYY-MM-DD", className: expired ? "expired" : undefined, locale: "sv", popperPlacement: isCustomTask ? "top-start" : "bottom-start", onBlur: function () { return _this.setState({ showCalendar: false }); }, onChange: function (value) {
                                _this.setState({
                                    deadline: value && value.format("YYYY-MM-DD"),
                                    showCalendar: false
                                });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "deleteDate", href: "#", title: "Ta bort deadline", onClick: function (ev) {
                                ev.preventDefault();
                                _this.setState({ deadline: null, showCalendar: false });
                            } }))) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top", ref: function () { _this.datePicker = null; } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function (ev) {
                            if (_this.datePicker) {
                                _this.datePicker.setOpen(true);
                            }
                            _this.setState({
                                showCalendar: true
                            });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-calendar", "aria-hidden": "true" }),
                        " Ange deadline..."))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__["FormField"], { label: "Underuppgifter" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTasks" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, subTasks && subTasks.map(function (subTask) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: subTask.id, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: function () { return _this.editSubTask(subTask); }, href: "#" }, subTask.name))); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: "EditUserTask:addSubTask", className: "btn", onClick: function () { return _this.addSubTask(); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": "true" }),
                            " L\u00E4gg till underuppgift")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "divider large" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalButton top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-default", onClick: function () {
                            isModified ? onUpdate(function (userTask) {
                                userTask.name = name;
                                userTask.description = description;
                                userTask.url = url;
                                userTask.deadline = deadline;
                            }) : _this.props.closeDialog();
                        } }, " Spara ")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalButton top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn", onClick: function () {
                            _this.props.closeDialog();
                        } }, " Avbryt ")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "confirm top pull-right" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-warning", onClick: function () {
                            onDelete(id);
                        } }, isCustomTask ?
                        " Ta bort arbetsmål" :
                        " Ta bort den här uppgiften"))));
    };
    return EditUserTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/get-task-type.ts":
/*!*****************************************************!*\
  !*** ./src/components/weekplanner/get-task-type.ts ***!
  \*****************************************************/
/*! exports provided: getTaskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskType", function() { return getTaskType; });
function getTaskType(userTask) {
    return userTask.course && userTask.task && userTask.course.length > 0 && userTask.task.length > 0 ?
        'courseBuilderTask' :
        userTask.siteVisionPageId ?
            'siteVisionTask' :
            'customTask';
}


/***/ }),

/***/ "./src/components/weekplanner/index.ts":
/*!*********************************************!*\
  !*** ./src/components/weekplanner/index.ts ***!
  \*********************************************/
/*! exports provided: WeekPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeekPlanner", function() { return _weekplanner__WEBPACK_IMPORTED_MODULE_0__["WeekPlanner"]; });




/***/ }),

/***/ "./src/components/weekplanner/refiner.ts":
/*!***********************************************!*\
  !*** ./src/components/weekplanner/refiner.ts ***!
  \***********************************************/
/*! exports provided: refine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refine", function() { return refine; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

function refine(tasks) {
    var result = [];
    var mapper = {};
    var tasksPerCourse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["arrayToLookup"])(tasks, function (t) { return t.courseName || ''; });
    for (var _i = 0, _a = Object.keys(tasksPerCourse).sort().filter(function (x) { return x; }).concat(tasksPerCourse[''] ?
        [''] : []); _i < _a.length; _i++) {
        var courseName = _a[_i];
        var courseTasks = tasksPerCourse[courseName] || tasksPerCourse[''];
        var tasksPerLearningGoal = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["arrayToLookup"])(courseTasks, function (t) { return t.learningGoal; });
        var resultLearningGoals = [];
        for (var _b = 0, _c = Object.keys(tasksPerLearningGoal); _b < _c.length; _b++) {
            var learningGoal = _c[_b];
            var lgTasks = tasksPerLearningGoal[learningGoal].sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compareProp"])("dateTime"));
            var learningGoalTask = lgTasks
                .filter(function (t) { return t.name == null; }) // If name is undefined or null, this represents a learning goal
            [0];
            var url = learningGoalTask && learningGoalTask.url;
            resultLearningGoals.push({
                name: learningGoal,
                allTasks: lgTasks,
                url: url,
                step: lgTasks.map(function (t) { return t.step; }).filter(function (step) { return step; })[0],
                tasks: lgTasks.filter(function (t) { return t.name; })
            });
        }
        result.push({
            courseName: courseName,
            learningGoals: resultLearningGoals
        });
    }
    return result;
}


/***/ }),

/***/ "./src/components/weekplanner/user-tasks-box.tsx":
/*!*******************************************************!*\
  !*** ./src/components/weekplanner/user-tasks-box.tsx ***!
  \*******************************************************/
/*! exports provided: UserTasksBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksBox", function() { return UserTasksBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _calendar_course_name_to_css_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/course-name-to-css-class */ "./src/components/calendar/course-name-to-css-class.ts");
/* harmony import */ var _get_task_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-task-type */ "./src/components/weekplanner/get-task-type.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features */ "./src/features/index.ts");









;
var UserTasksBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserTasksBox, _super);
    function UserTasksBox(props) {
        return _super.call(this, props) || this;
    }
    UserTasksBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, courseName = _a.courseName, learningGoals = _a.learningGoals;
        var isOpen = !!this.props.openCourses[courseName];
        var features = new _features__WEBPACK_IMPORTED_MODULE_8__["Features"]();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, courseName || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Egna l\u00E4randem\u00E5l"], ["Egna l\u00E4randem\u00E5l"])))), headerOpen: isOpen, className: courseName && Object(_calendar_course_name_to_css_class__WEBPACK_IMPORTED_MODULE_5__["courseNameToCssClass"])('wp-course-', courseName), onOpenClose: function (becameOpen) { return _this.props.setIsOpen(courseName, becameOpen); } }, learningGoals.map(function (lg) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: lg.name, className: "learningGoalContainer" },
                lg.step && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stepIndicator" }, lg.step),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalText horizontalItem top" }, lg.name),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                        "\u00A0",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "trash", href: "#", title: "Ta bort l\u00E4randem\u00E5let och dess uppgifter", onClick: function (ev) {
                                ev.preventDefault();
                                _this.props.removeLearningGoal(lg);
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-trash" })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTasks" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, lg.tasks.map(function (userTask) {
                        var isWorking = userTask.$meta === 'adding' || userTask.$meta === 'deleting' || userTask.$meta === 'updating';
                        var taskType = Object(_get_task_type__WEBPACK_IMPORTED_MODULE_6__["getTaskType"])(userTask);
                        var expired = moment__WEBPACK_IMPORTED_MODULE_7___default()(userTask.deadline).startOf('day') < moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('day');
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: userTask.id, style: isWorking ? { opacity: 0.5 } : {} },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (userTask.done ? " checked" : ""), onClick: function (ev) { return !isWorking && _this.props.setTaskDone(userTask, !userTask.done); } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    taskType === 'courseBuilderTask' ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: getTaskUrl(userTask, _this.props.viewCourseUrl) }, userTask.name) :
                                        taskType === 'siteVisionTask' ?
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: userTask.url }, userTask.name) :
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: features.EditUserTasksViaPenOnly && !userTask.url ? "link-less" : "", onClick: features.EditUserTasksViaPenOnly ?
                                                    undefined :
                                                    function (ev) {
                                                        ev.preventDefault();
                                                        _this.props.editTask(userTask);
                                                    }, href: userTask.url, target: (userTask.url + '').toLowerCase().startsWith(location.host.toLowerCase()) ?
                                                    "_self" :
                                                    "_blank" }, userTask.name),
                                    userTask.deadline && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dateSet" + (expired ? ' expired' : '') },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { title: moment__WEBPACK_IMPORTED_MODULE_7___default()(userTask.deadline).format("YYYY-MM-DD"), className: "fa fa-calendar", "aria-hidden": "true", 
                                            /*style={{cursor: 'pointer'}} */
                                            onClick: function () { } }))),
                                features.EditUserTasksViaPenOnly ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top taskEdit" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return _this.props.editTask(userTask); } })) : undefined),
                            userTask.subTasks && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "subtasks" }, userTask.subTasks.map(function (subTask) {
                                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: subTask.id },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (subTask.done ? " checked" : ""), onClick: function (ev) {
                                                return !isWorking &&
                                                    _this.props.setSubTaskDone(userTask, subTask, !subTask.done);
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: subTask.url || undefined, target: (userTask.url + '').toLowerCase().startsWith(location.host.toLowerCase()) ?
                                                "_self" :
                                                "_blank", className: subTask.url ?
                                                undefined :
                                                'link-less' }, subTask.name)),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top taskEdit" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return _this.props.editSubTask(userTask, subTask); } })));
                            })));
                    }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTools" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn addOwnGoal", onClick: function () { return _this.props.addOwnTask(_this.props.courseName, lg.name); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": "true" }),
                        " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Eget arbetsm\u00E5l"], ["Eget arbetsm\u00E5l"]))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null));
        }));
    };
    return UserTasksBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getTaskUrl(userTask, viewCourseUrl) {
    if (userTask.course && userTask.course.length > 0 && userTask.task && userTask.task.length > 0) {
        var courseUrl = Object(_access_control__WEBPACK_IMPORTED_MODULE_4__["preserveImpersonationQuery"])(viewCourseUrl, { courseId: userTask.course[0].id });
        return courseUrl + "#/task/" + userTask.task[0].id;
    }
    return userTask.url;
}
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/weekplanner/weekplanner-persisted-state.ts":
/*!*******************************************************************!*\
  !*** ./src/components/weekplanner/weekplanner-persisted-state.ts ***!
  \*******************************************************************/
/*! exports provided: WeekPlannerPersistedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlannerPersistedState", function() { return WeekPlannerPersistedState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/moment-sv-locale */ "./src/globals/moment-sv-locale.ts");



var WeekPlannerPersistedState = /** @class */ (function () {
    function WeekPlannerPersistedState(userOrCopy) {
        if (typeof userOrCopy === 'string') {
            this.user = userOrCopy;
            this.lastWrite = Date.now();
            this.weekDate = Object(_globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_2__["localMoment"])().startOf('week').valueOf();
            this.openCourses = {};
        }
        else {
            Object.assign(this, userOrCopy);
        }
    }
    WeekPlannerPersistedState.load = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cookie, storedData, state;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                cookie = localStorage.getItem('WeekPlannerPersistedState2');
                storedData = cookie && JSON.parse(cookie);
                state = new WeekPlannerPersistedState(user);
                if (storedData)
                    Object.assign(state, storedData);
                return [2 /*return*/, state.user === user && !state.isExpired(moment__WEBPACK_IMPORTED_MODULE_1___default()()) ?
                        state : new WeekPlannerPersistedState(user)];
            });
        });
    };
    WeekPlannerPersistedState.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.lastWrite = Date.now();
                json = JSON.stringify(this);
                localStorage.setItem('WeekPlannerPersistedState2', json);
                return [2 /*return*/];
            });
        });
    };
    WeekPlannerPersistedState.prototype.isExpired = function (asOf) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(this.lastWrite)
            .isBefore(asOf.add(0 - WeekPlannerPersistedState.EXPIRATION_HOURS, 'hours'));
    };
    WeekPlannerPersistedState.EXPIRATION_HOURS = 12;
    WeekPlannerPersistedState.VERSION = 2;
    return WeekPlannerPersistedState;
}());



/***/ }),

/***/ "./src/components/weekplanner/weekplanner.tsx":
/*!****************************************************!*\
  !*** ./src/components/weekplanner/weekplanner.tsx ***!
  \****************************************************/
/*! exports provided: WeekPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlanner", function() { return WeekPlanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_tasks_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-tasks-box */ "./src/components/weekplanner/user-tasks-box.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _refiner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refiner */ "./src/components/weekplanner/refiner.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_components_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility-components/dialogs */ "./src/components/utility-components/dialogs.tsx");
/* harmony import */ var _add_custom_goal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-custom-goal */ "./src/components/weekplanner/add-custom-goal.tsx");
/* harmony import */ var _add_custom_task__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-custom-task */ "./src/components/weekplanner/add-custom-task.tsx");
/* harmony import */ var _edit_user_task__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-user-task */ "./src/components/weekplanner/edit-user-task.tsx");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utils_pending_job__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/pending-job */ "./src/utils/pending-job.ts");
/* harmony import */ var _add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-or-edit-sub-task */ "./src/components/weekplanner/add-or-edit-sub-task.tsx");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/weekutil */ "./src/utils/weekutil.ts");


















var WeekPlanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekPlanner, _super);
    function WeekPlanner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTasks: [],
            weekDate: Date.now(),
            openCourses: {},
            dialogs: [],
            saving: false,
            weekTextsUT: null,
            isLoading: true
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.weekTextsSavingJob = new _utils_pending_job__WEBPACK_IMPORTED_MODULE_15__["PendingJob"](function () { return _this.saveWeekTexts(); });
        return _this;
    }
    WeekPlanner.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].subscribe(this.onChange);
    };
    WeekPlanner.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].unsubscribe(this.onChange);
        this.weekTextsSavingJob.stop();
    };
    WeekPlanner.prototype.onChange = function (userTasks, persisted, weekTextsUT) {
        var newState = {
            userTasks: userTasks,
            weekDate: persisted.weekDate,
            openCourses: persisted.openCourses,
            weekTextsUT: weekTextsUT,
            isLoading: false
        };
        if (!this.state.weekTextsUT || (weekTextsUT.dateTime !== this.state.weekTextsUT.dateTime)) {
            // Changing week. Reset to new week's values
            newState.strategy = weekTextsUT.weekTexts.strategy;
            newState.assessment = weekTextsUT.weekTexts.assessment;
        }
        this.setState(newState); // React's use of Pick instead of Partial makes things complex here.
    };
    WeekPlanner.prototype.isWeekTextsEdited = function () {
        var _a = this.state, strategy = _a.strategy, assessment = _a.assessment, weekTextsUT = _a.weekTextsUT;
        return !!weekTextsUT && (strategy !== weekTextsUT.weekTexts.strategy || assessment !== weekTextsUT.weekTexts.assessment);
    };
    WeekPlanner.prototype.saveWeekTexts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, strategy, assessment, weekTextsUT;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("Saving texts...");
                        _a = this.state, strategy = _a.strategy, assessment = _a.assessment, weekTextsUT = _a.weekTextsUT;
                        if (!this.isWeekTextsEdited()) return [3 /*break*/, 2];
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].upsert(weekTextsUT, function (ut) {
                                ut.weekTexts = { strategy: strategy, assessment: assessment };
                            })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.prevWeek = function () {
        //this.saveWeekTexts();
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].changeWeek(moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.weekDate).add(-1, 'week').toDate());
    };
    WeekPlanner.prototype.nextWeek = function () {
        //this.saveWeekTexts();
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].changeWeek(moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.weekDate).add(1, 'week').toDate());
    };
    WeekPlanner.prototype.openDialog = function (dialog) {
        this.setState({ dialogs: this.state.dialogs.concat([dialog]) });
    };
    WeekPlanner.prototype.openAddGoalDialog = function () {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_custom_goal__WEBPACK_IMPORTED_MODULE_10__["AddCustomGoal"], { onSave: function (learningGoal) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!learningGoal)
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4randem\u00E5let kan inte vara tomt"], ["L\u00E4randem\u00E5let kan inte vara tomt"]))));
                            if (!!this.state.saving) return [3 /*break*/, 5];
                            this.setState({ saving: true });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, this.addCustomGoal(learningGoal)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.setState({ saving: false });
                            return [7 /*endfinally*/];
                        case 4:
                            this.closeDialog();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); } }));
    };
    WeekPlanner.prototype.openAddOwnTaskDialog = function (courseName, learningGoalName) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_custom_task__WEBPACK_IMPORTED_MODULE_11__["AddCustomTask"], { isTask: !courseName, onSave: function (name, description, url) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!name)
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Namnet kan inte vara tomt"], ["Namnet kan inte vara tomt"]))));
                            if (!!this.state.saving) return [3 /*break*/, 5];
                            this.setState({ saving: true });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, this.addCustomTask(courseName, learningGoalName, name, description, url)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.setState({ saving: false });
                            return [7 /*endfinally*/];
                        case 4:
                            this.closeDialog();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); } }));
    };
    WeekPlanner.prototype.editTask = function (userTask) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_edit_user_task__WEBPACK_IMPORTED_MODULE_12__["EditUserTask"], { userTask: userTask, onUpdate: function (updater) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var test;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            test = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userTask);
                            updater(test);
                            if (!test.name)
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Namnet f\u00E5r inte vara tomt"], ["Namnet f\u00E5r inte vara tomt"]))));
                            this.closeDialog();
                            return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].update([userTask], updater)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, onDelete: function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.closeDialog();
                            return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].delete([id])];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, openDialog: function (dialog) { return _this.openDialog(dialog); }, closeDialog: function () { return _this.closeDialog(); } }));
    };
    WeekPlanner.prototype.editSubTask = function (userTask, subTask) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_16__["AddOrEditSubTask"], { mode: "edit", userTask: userTask, subTask: subTask, closeDialog: function () { return _this.closeDialog(); } }));
    };
    WeekPlanner.prototype.closeDialog = function () {
        this.setState({ dialogs: this.state.dialogs.slice(0, this.state.dialogs.length - 1) });
    };
    WeekPlanner.prototype.addCustomGoal = function (learningGoal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var latestTimeStamp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latestTimeStamp = Math.max.apply(Math.max, [this.state.weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                                    learningGoal: learningGoal,
                                    dateTime: latestTimeStamp + 2000
                                }])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].setWeekPlannerBoxOpen("", true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.removeLearningGoal = function (learningGoal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (learningGoal.tasks.length > 0) {
                            if (!confirm("Ta bort l\u00E4randem\u00E5l samt " + learningGoal.tasks.length + " uppgifter?")) {
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].delete(learningGoal.allTasks.map(function (t) { return t.id; }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.addCustomTask = function (courseName, learningGoal, name, description, url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var latestTimeStamp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latestTimeStamp = Math.max.apply(Math.max, [this.state.weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        /*const emptyLearningGoalPlaceholder = this.state.userTasks.find(ut =>
                          ut.name == null &&
                          !ut.courseName &&
                          ut.learningGoal === learningGoal);
                    
                        if (emptyLearningGoalPlaceholder) {
                          // Hijack learning-goal placeholder and make it the real task.
                          // This will make the learning goal disappear once this task
                          // is deleted.
                          await userTasksRepo.update([emptyLearningGoalPlaceholder], ut => {
                            Object.assign(ut, { name, description, url });
                          });
                        } else {*/
                        // Add another task to same learning-goal
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                                    dateTime: latestTimeStamp + 2000,
                                    courseName: courseName,
                                    learningGoal: learningGoal,
                                    name: name,
                                    description: description,
                                    url: url
                                }])];
                    case 1:
                        /*const emptyLearningGoalPlaceholder = this.state.userTasks.find(ut =>
                          ut.name == null &&
                          !ut.courseName &&
                          ut.learningGoal === learningGoal);
                    
                        if (emptyLearningGoalPlaceholder) {
                          // Hijack learning-goal placeholder and make it the real task.
                          // This will make the learning goal disappear once this task
                          // is deleted.
                          await userTasksRepo.update([emptyLearningGoalPlaceholder], ut => {
                            Object.assign(ut, { name, description, url });
                          });
                        } else {*/
                        // Add another task to same learning-goal
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.setIsOpen = function (courseName, isOpen) {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].setWeekPlannerBoxOpen(courseName, isOpen);
    };
    WeekPlanner.prototype.setTaskDone = function (task, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].setTaskDoneState(task, done)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.setSubTaskDone = function (task, subTask, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].setSubTaskDoneState(task, subTask.id, done)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.copyFromPreviousWeek = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, userTasks, openCourses, weekDate, prevWeekNo, prevKEDWeek, prevTasks, latestTimeStamp, copies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, userTasks = _a.userTasks, openCourses = _a.openCourses, weekDate = _a.weekDate;
                        prevWeekNo = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_17__["getAdjustedWeek"])(moment__WEBPACK_IMPORTED_MODULE_8___default()(weekDate).add(-1, 'week'));
                        prevKEDWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_17__["KEDWeek"])(moment__WEBPACK_IMPORTED_MODULE_8___default()(weekDate).year(), prevWeekNo);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient.list("usertasks", {
                                from: prevKEDWeek.notBefore,
                                to: prevKEDWeek.notAfter,
                                role: "USER",
                                include: ["task", "course", "acl"],
                                flags: ["includeIdsOnly"]
                            })];
                    case 1:
                        prevTasks = _b.sent();
                        prevTasks = prevTasks
                            .filter(function (prevTask) { return !prevTask.done; }) // Don't copy done tasks
                            .filter(function (prevTask) { return !!prevTask.name; }) // Don't copy empty learning goals
                            .filter(function (prevTask) { return !userTasks.some(function (taskOfCurrentWeek) {
                            return taskOfCurrentWeek.name === prevTask.name &&
                                taskOfCurrentWeek.learningGoal === prevTask.learningGoal &&
                                taskOfCurrentWeek.courseName === prevTask.courseName;
                        }); }); // Ignore identical tasks (already copied)
                        latestTimeStamp = Math.max.apply(Math.max, [weekDate].concat(userTasks.map(function (t) { return t.dateTime; })));
                        copies = prevTasks.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["compareProp"])("dateTime")).map(function (task) {
                            var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { dateTime: latestTimeStamp += 1000 });
                            copy.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])();
                            if (copy.subTasks) {
                                copy.subTasks = copy.subTasks.filter(function (st) { return !st.done; });
                            }
                            delete copy.$etag;
                            return copy;
                        });
                        // Store it
                        return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_6__["userTasksRepo"].insert(copies)];
                    case 2:
                        // Store it
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.render = function () {
        var _this = this;
        var weekNumber = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.state.weekDate).week();
        //console.log("Weekydate: "  + new Date(this.state.weekDate) + " which is week no " + weekNumber);
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_8___default()().week();
        var taskSets = Object(_refiner__WEBPACK_IMPORTED_MODULE_4__["refine"])(this.state.userTasks);
        var _a = this.state, dialogs = _a.dialogs, weekTextsUT = _a.weekTextsUT, strategy = _a.strategy, assessment = _a.assessment, isLoading = _a.isLoading;
        var isSaving = weekTextsUT && (weekTextsUT.$meta === 'adding' || weekTextsUT.$meta === 'updating');
        var isStrategyEdited = !!weekTextsUT && (strategy !== weekTextsUT.weekTexts.strategy);
        var isAssessmentEdited = !!weekTextsUT && (assessment !== weekTextsUT.weekTexts.assessment);
        var enableSaveButton = !isSaving && (isStrategyEdited || isAssessmentEdited);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed weekPlanner" + (weekNumber === currentWeek ? " currentWeek" : ""), onKeyDown: function (ev) {
                    if (ev.which === 83 && ev.ctrlKey) {
                        ev.preventDefault();
                        if (!isSaving && _this.isWeekTextsEdited()) {
                            _this.weekTextsSavingJob.triggerChange(0);
                        }
                    }
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "weekSelect" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Vecka ", ""], ["Vecka ", ""])), weekNumber))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.prevWeek(); } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-left", "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.nextWeek(); } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-right", "aria-hidden": "true" }))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Loggbok"], ["Loggbok"])))),
                taskSets.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                taskSets.map(function (props) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_user_tasks_box__WEBPACK_IMPORTED_MODULE_2__["UserTasksBox"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: props.courseName }, props, { courseName: props.courseName, learningGoals: props.learningGoals, viewCourseUrl: _this.props.viewCourseUrl, openCourses: _this.state.openCourses, addOwnTask: function (courseName, learningGoalName) { return _this.openAddOwnTaskDialog(courseName, learningGoalName); }, setIsOpen: _this.setIsOpen.bind(_this), setTaskDone: _this.setTaskDone.bind(_this), setSubTaskDone: _this.setSubTaskDone.bind(_this), editTask: function (task) { return _this.editTask(task); }, editSubTask: function (task, subTask) { return _this.editSubTask(task, subTask); }, removeLearningGoal: function (lg) { return _this.removeLearningGoal(lg); } }));
                }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                isLoading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__["Spinner"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", onClick: function (ev) { return _this.openAddGoalDialog(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-list-alt", "aria-hidden": "true" }),
                        " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Eget l\u00E4randem\u00E5l"], ["Eget l\u00E4randem\u00E5l"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", onClick: function (ev) { return _this.copyFromPreviousWeek(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-clone", "aria-hidden": "true" }),
                        " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kopiera ej klara fr\u00E5n f\u00F6reg\u00E5ende vecka"], ["Kopiera ej klara fr\u00E5n f\u00F6reg\u00E5ende vecka"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_14__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Strategi & Utv\u00E4rdering"], ["Strategi & Utv\u00E4rdering"])))), headerOpen: this.state.openCourses["StratUtv"], onOpenClose: function (becameOpen) { return _this.setIsOpen("StratUtv", becameOpen); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Strategi"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Hur jag ska g\u00F6ra f\u00F6r att l\u00E4ra mig."),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "weekplanner-textarea", value: strategy, onChange: function (ev) {
                                _this.setState({ strategy: ev.target.value });
                                _this.weekTextsSavingJob.triggerChange(500);
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Utv\u00E4rdering"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Reflektion kring din arbetsinsats och dina valda strategier under veckan. Utv\u00E4rdera i f\u00F6rh\u00E5llande till dina m\u00E5l."),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "weekplanner-textarea", value: assessment, onChange: function (ev) {
                                _this.setState({ assessment: ev.target.value });
                                _this.weekTextsSavingJob.triggerChange(500);
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", tabIndex: 0, style: enableSaveButton ? {} : { opacity: 0.5 }, onClick: function () { return !isSaving && _this.weekTextsSavingJob.triggerChange(0); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-floppy-o", "aria-hidden": "true" }),
                            enableSaveButton ? " Spara" : " Sparad")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_dialogs__WEBPACK_IMPORTED_MODULE_9__["Dialogs"], { dialogs: dialogs, popDialog: function () {
                    _this.setState(function (_a) {
                        var dialogs = _a.dialogs;
                        return ({ dialogs: dialogs.slice(0, dialogs.length - 1) });
                    });
                } }));
    };
    return WeekPlanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


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

/***/ "./src/globals/moment-sv-locale.ts":
/*!*****************************************!*\
  !*** ./src/globals/moment-sv-locale.ts ***!
  \*****************************************/
/*! exports provided: localMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localMoment", function() { return localMoment; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function (number) {
        var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return number + output;
    },
    week: {
        dow: 1,
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});
var localMoment = function () {
    return moment__WEBPACK_IMPORTED_MODULE_0___default.a.apply(this, arguments).locale('sv');
};


/***/ }),

/***/ "./src/repos/hidden-courses-repo.ts":
/*!******************************************!*\
  !*** ./src/repos/hidden-courses-repo.ts ***!
  \******************************************/
/*! exports provided: hiddenCoursesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenCoursesRepo", function() { return hiddenCoursesRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/edsclient */ "./src/apis/edsclient.ts");
/* harmony import */ var _utils_school_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/school-moment */ "./src/utils/school-moment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var hiddenCoursesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].hiddenCoursesRepo;
var HiddenCoursesRepo = /** @class */ (function () {
    function HiddenCoursesRepo() {
        var _this = this;
        this.result = null;
        this.subscribers = [];
        this.fullCourse = false;
        this.notifySubscriber = function (subscriber, options) {
            try {
                subscriber(options.fullCourse ? _this.result : _this.result.filter(function (c) { return c.visible; }));
            }
            catch (err) {
                console.error(err);
            }
        };
        this.kedRepo = new _ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]({
            getClient: function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; },
            optimistic: true,
            table: "userhiddencourses",
            user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, ({ role: "USER" })];
            }); }); },
        });
        var initPromise = this.init();
        Promise.all([
            initPromise,
            this.kedCoursesPromise,
            this.edsCoursesPromise
        ]).catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err); });
    }
    HiddenCoursesRepo.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var bearerPromise, resolveUserHiddenCoursesPromise, userHiddenCoursesResolved;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bearerPromise = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].bearerProvider ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].bearerProvider.getBearer() : Promise.resolve({});
                        // In parallell, we request:
                        //  1) KEDBackend: Schools.activeCourses
                        //  2) EDS.getActiveAcourses()
                        //  3) (via subscription): KEDBackend: userHiddenCourses
                        this.kedCoursesPromise = bearerPromise.then(function () { return _this.listKedCourses(); });
                        this.edsCoursesPromise = bearerPromise.then(function () { return _this.listEDSCourses(); });
                        userHiddenCoursesResolved = false;
                        this.userHiddenCoursesPromise = new Promise(function (resolve) { return resolveUserHiddenCoursesPromise = function (x) {
                            if (userHiddenCoursesResolved) {
                                _this.userHiddenCoursesPromise = Promise.resolve(x);
                            }
                            else {
                                userHiddenCoursesResolved = true;
                                resolve(x);
                            }
                        }; });
                        return [4 /*yield*/, bearerPromise];
                    case 1:
                        _a.sent();
                        this.kedRepo.mem.subscribe(function (userHiddenCourses) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            var _a, activeCourses, edsActiveCourses, _b;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, Promise.all([
                                            this.kedCoursesPromise,
                                            this.edsCoursesPromise
                                        ])];
                                    case 1:
                                        _a = _c.sent(), activeCourses = _a[0], edsActiveCourses = _a[1];
                                        // Refine the three results into a single result
                                        _b = this;
                                        return [4 /*yield*/, this.createCoursesList(edsActiveCourses, userHiddenCourses, activeCourses)];
                                    case 2:
                                        // Refine the three results into a single result
                                        _b.result = _c.sent();
                                        // Notify our subscribers:
                                        this.subscribers.forEach(function (subscriber) { return _this.notifySubscriber(subscriber.subscriber, subscriber.options); });
                                        resolveUserHiddenCoursesPromise(userHiddenCourses);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.listKedCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fullCourse, schools, activeCourses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fullCourse = this.fullCourse;
                        console.log("FullCourse: " + fullCourse);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.list('schools', {
                                role: "USER",
                                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school,
                                include: "activeCourses",
                                flags: fullCourse ? [] : ["includeIdsAndNamesOnly"],
                                cacheBust: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.username
                            })];
                    case 1:
                        schools = _a.sent();
                        activeCourses = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(schools.map(function (school) { return school.activeCourses; })).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("name"));
                        return [2 /*return*/, activeCourses];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.listEDSCourses = function () {
        var periodName = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_5__["EDSPeriod"](Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_6__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_7___default()())).period;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.roles.indexOf('EMPLOYEE') === -1 ?
            // STUDENTs should, by default, only show courses that is listed in EDS
            _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].edsClient.getActiveCourses({ periodName: periodName }) :
            // EMPLOYEEs should, by default, show all courses on school - no need to query EDS
            null;
    };
    HiddenCoursesRepo.prototype.createCoursesList = function (edsActiveCourses, userHiddenCourses, activeCourses) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var hiddenCoursesMap, visibleCoursesMap, isStudent, edsCourseMap, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hiddenCoursesMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(userHiddenCourses.filter(function (hc) { return !hc.show; }), function (hc) { return hc.name; });
                        visibleCoursesMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(userHiddenCourses.filter(function (hc) { return hc.show; }), function (hc) { return hc.name; });
                        isStudent = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.roles.some(function (role) { return role === 'STUDENT'; });
                        edsCourseMap = edsActiveCourses ?
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(edsActiveCourses, function (c) { return c.name.substr(0, 20); }) :
                            {};
                        return [4 /*yield*/, Promise.all(activeCourses.map(function (_a) {
                                var id = _a.id, name = _a.name, description = _a.description, modifiedBy = _a.modifiedBy;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var edsCourse, defaultVisible, visible, fullCourse;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                edsCourse = edsCourseMap[name.substr(0, 20)];
                                                defaultVisible = isStudent ?
                                                    edsCourse != null : // Course name also listed in EDS
                                                    true;
                                                visible = defaultVisible ?
                                                    !hiddenCoursesMap[id] : // Visible unless user has overridden that.
                                                    !!visibleCoursesMap[id];
                                                if (!(!this.fullCourse && name.length >= 20)) return [3 /*break*/, 3];
                                                if (!edsCourse) return [3 /*break*/, 1];
                                                // Resolve full course name from EDS.
                                                name = edsCourse.name;
                                                return [3 /*break*/, 3];
                                            case 1:
                                                if (!visible) return [3 /*break*/, 3];
                                                return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.get("courses", id)];
                                            case 2:
                                                fullCourse = _b.sent();
                                                name = fullCourse.name;
                                                _b.label = 3;
                                            case 3:
                                                // Resolve description:
                                                if (modifiedBy && modifiedBy.name && !description) {
                                                    description = modifiedBy.name + "s version";
                                                }
                                                return [2 /*return*/, {
                                                        id: id,
                                                        name: name,
                                                        description: description,
                                                        visible: visible,
                                                        defaultVisible: defaultVisible
                                                    }];
                                        }
                                    });
                                });
                            }))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.hideCourse = function (c) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var overrides;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        overrides = this.kedRepo.mem.items.filter(function (hc) { return hc.name === c.id; });
                        if (!c.defaultVisible) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.kedRepo.insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                                    name: c.id
                                }])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.kedRepo.delete(overrides.map(function (ov) { return ov.id; }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.showCourse = function (c) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var overrides;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        overrides = this.kedRepo.mem.items.filter(function (hc) { return hc.name === c.id; });
                        if (!c.defaultVisible) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.kedRepo.delete(overrides.map(function (ov) { return ov.id; }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.kedRepo.insert([{
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                                name: c.id,
                                show: true
                            }])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.subscribe = function (subscriber, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, activeCourses, edsActiveCourses, userHiddenCourses, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(!this.fullCourse && options.fullCourse)) return [3 /*break*/, 3];
                        // The subscriber demands full courses
                        // Need to query that before notifying
                        // Also affect state for future internal notification
                        this.fullCourse = options.fullCourse;
                        this.kedCoursesPromise = this.listKedCourses(); // Redo this call, now loading full courses
                        return [4 /*yield*/, Promise.all([
                                this.kedCoursesPromise,
                                this.edsCoursesPromise,
                                this.userHiddenCoursesPromise
                            ])];
                    case 1:
                        _a = _c.sent(), activeCourses = _a[0], edsActiveCourses = _a[1], userHiddenCourses = _a[2];
                        // Assemble result:
                        _b = this;
                        return [4 /*yield*/, this.createCoursesList(edsActiveCourses, userHiddenCourses, activeCourses)];
                    case 2:
                        // Assemble result:
                        _b.result = _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.userHiddenCoursesPromise];
                    case 4:
                        _c.sent(); // So we know that this.result is there.
                        this.notifySubscriber(subscriber, options);
                        this.subscribers.push({ subscriber: subscriber, options: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s.subscriber !== subscriber; });
    };
    return HiddenCoursesRepo;
}());
if (!hiddenCoursesRepo) {
    hiddenCoursesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].hiddenCoursesRepo = new HiddenCoursesRepo();
}


/***/ }),

/***/ "./src/repos/ked-repo.ts":
/*!*******************************!*\
  !*** ./src/repos/ked-repo.ts ***!
  \*******************************/
/*! exports provided: KedRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedRepo", function() { return KedRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repo */ "./src/repos/repo.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");



var KedRepo = /** @class */ (function () {
    function KedRepo(options) {
        var _this = this;
        var table = options.table, getClient = options.getClient, getQueryOptions = options.getQueryOptions;
        this.mem = new _repo__WEBPACK_IMPORTED_MODULE_1__["Repo"]({ query: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var queryOptions;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getQueryOptions()];
                        case 1:
                            queryOptions = _a.sent();
                            return [4 /*yield*/, getClient().list(table, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queryOptions, { cacheBust: this.getCacheBust() }))];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            }); } });
        this.options = options;
    }
    KedRepo.prototype.getCacheBust = function () {
        var _a = this.options, table = _a.table, user = _a.user;
        var cacheBust = localStorage.getItem('cache-bust-' + table + '-' + user);
        return cacheBust || this.regenerateCacheBust();
    };
    KedRepo.prototype.regenerateCacheBust = function () {
        var _a = this.options, table = _a.table, user = _a.user;
        var cacheBust = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])();
        localStorage.setItem('cache-bust-' + table + '-' + user, cacheBust);
        return cacheBust;
    };
    KedRepo.prototype.upsert = function (item, updater) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var updatedItem;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!item.$etag) return [3 /*break*/, 2];
                        updatedItem = Object.assign({}, item);
                        updater(updatedItem);
                        return [4 /*yield*/, this.insert([updatedItem])];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: 
                    // We have an $etag, so we can expect it to live on the server.
                    // However, take care of the unlikely situation that it was deleted from server,
                    // and if so, insert it again.
                    return [4 /*yield*/, this.update([item], updater).catch(function (e) {
                            if (e.name === "http404" || e.name === "http403") {
                                var updatedItem = Object.assign({}, item);
                                updater(updatedItem);
                                return _this.insert([updatedItem]);
                            }
                            return Promise.reject(e);
                        })];
                    case 3:
                        // We have an $etag, so we can expect it to live on the server.
                        // However, take care of the unlikely situation that it was deleted from server,
                        // and if so, insert it again.
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.update = function (items, updater) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, getClient, optimistic, table, client, modifiedItems, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        modifiedItems = items.map(function (item) {
                            var memRepoItem = _this.mem.items.find(function (it) { return it.id === item.id; });
                            item = Object.assign({}, memRepoItem || item);
                            updater(item);
                            return item;
                        });
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(modifiedItems.map(function (x) { return Object.assign({}, x, { $meta: 'updating' }); }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.do(function (br) { return modifiedItems.forEach(function (item) { return br.put(table, item); }); })
                            .catch(function (e) { return e.name === "http409" ? // conflict
                            // Get a fresh version from server:
                            client.list(table, { ids: items.map(function (item) { return item.id; }) }, { cache: 'no-cache' }).then(function (freshItems) {
                                // Update local version:
                                var modifiedItems = freshItems.map(function (freshItem) {
                                    // Clone the fresh item
                                    var modified = Object.assign({}, freshItem);
                                    // Re-run the updater on the clone:
                                    updater(modified);
                                    return modified;
                                });
                                // Re-do the the put operation towards the server.
                                return client.do(function (br) { return modifiedItems.forEach(function (item) { return br.put(table, item); }); });
                            }) :
                            // Other unexpected error:
                            Promise.resolve(optimistic &&
                                _this.mem.update(items)) // Undo optimistic update
                                .then(function () {
                                return Promise.reject(e); // Reject with the error no matter.
                            }); })];
                    case 3:
                        res = _b.sent();
                        this.regenerateCacheBust();
                        modifiedItems.forEach(function (item) {
                            item.$etag = res.newEtags[item.id];
                            item.$meta = undefined;
                        });
                        return [4 /*yield*/, this.mem.update(modifiedItems)];
                    case 4:
                        _b.sent(); // Ensures new etag is is applied on next action.
                        return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.stripGraphs = function (items, graphs) {
        return items.map(function (item) {
            var clone = Object.assign({}, item);
            graphs.forEach(function (graph) {
                if (item[graph]) {
                    clone[graph] = item[graph].map(function (doc) { return ({ id: doc.id }); });
                }
            });
            return clone;
        });
    };
    KedRepo.prototype.insert = function (items) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, getClient, optimistic, table, getQueryOptions, client, queryOptions, graphs, stripped, br, _loop_1, _i, stripped_1, item, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table, getQueryOptions = _a.getQueryOptions;
                        client = getClient();
                        return [4 /*yield*/, getQueryOptions()];
                    case 1:
                        queryOptions = _b.sent();
                        graphs = [].concat(queryOptions.include);
                        // Give IDs to each item:
                        items = items.map(function (item) { return item.id ? item : Object.assign({}, item, { id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])() }); });
                        stripped = this.stripGraphs(items, graphs);
                        if (!optimistic) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.mem.insert(stripped.map(function (x) { return Object.assign({}, x, { $meta: 'adding' }); }))];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        br = new kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["BatchRunner"]();
                        _loop_1 = function (item) {
                            var _loop_2 = function (graph) {
                                var foreignItems = item[graph];
                                if (foreignItems) {
                                    foreignItems.forEach(function (doc) {
                                        br.link2(table, item.id, graph, doc.id);
                                    });
                                }
                            };
                            // Also add links to all foreign related items:
                            for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
                                var graph = graphs_1[_i];
                                _loop_2(graph);
                            }
                            br.add(table, item);
                        };
                        for (_i = 0, stripped_1 = stripped; _i < stripped_1.length; _i++) {
                            item = stripped_1[_i];
                            _loop_1(item);
                        }
                        return [4 /*yield*/, client.batch(br.mutationRequests).catch(function (e) {
                                if (optimistic)
                                    _this.mem.delete(items.map(function (item) { return item.id; }));
                                return Promise.reject(e);
                            })];
                    case 4:
                        res = _b.sent();
                        this.regenerateCacheBust();
                        items.forEach(function (item) { return item.$etag = res.newEtags[item.id]; });
                        if (!optimistic) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.mem.update(items)];
                    case 5:
                        _b.sent(); // Update with new $etag.
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.mem.insert(items)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.delete = function (ids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, getClient, optimistic, table, client, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(ids
                                .map(function (id) { return _this.mem.items.find(function (x) { return x.id === id; }); })
                                .filter(function (x) { return x; })
                                .map(function (x) { return Object.assign({}, x, { $meta: 'deleting' }); }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.do(function (br) { return ids.forEach(function (id) { return br.delete(table, id); }); }).catch(function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!optimistic) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.mem.update(ids
                                                .map(function (id) { return _this.mem.items.find(function (x) { return x.id === id; }); })
                                                .filter(function (x) { return x; })
                                                .map(function (x) {
                                                x = Object.assign({}, x);
                                                delete x.$meta;
                                                return x;
                                            }))];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: throw e;
                                }
                            });
                        }); })];
                    case 3:
                        res = _b.sent();
                        this.regenerateCacheBust();
                        return [4 /*yield*/, this.mem.delete(ids)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KedRepo;
}());



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

/***/ "./src/repos/user-tasks-repo.ts":
/*!**************************************!*\
  !*** ./src/repos/user-tasks-repo.ts ***!
  \**************************************/
/*! exports provided: userTasksRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTasksRepo", function() { return userTasksRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/weekplanner/weekplanner-persisted-state */ "./src/components/weekplanner/weekplanner-persisted-state.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "../kedbackend/client.js");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/weekutil */ "./src/utils/weekutil.ts");







var userTasksRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].userTasksRepo;
var UserTasksRepo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserTasksRepo, _super);
    function UserTasksRepo() {
        var _this = _super.call(this, {
            getClient: function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; },
            optimistic: true,
            table: "usertasks",
            user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var userEmail, _a, weekDate, weekNumber, kedWeek;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            userEmail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail : "";
                            if (!!this.persistedState) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"].load(userEmail)];
                        case 1:
                            _a.persistedState = _b.sent();
                            _b.label = 2;
                        case 2:
                            weekDate = this.persistedState.weekDate;
                            weekNumber = moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).week();
                            kedWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_6__["KEDWeek"])(moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).year(), weekNumber);
                            /*const [from, to] = [moment(weekDate).startOf('week'), moment(weekDate).endOf('week')]
                              .map(m => m.toDate().getTime());*/
                            return [2 /*return*/, {
                                    from: kedWeek.notBefore,
                                    to: kedWeek.notAfter,
                                    role: "USER",
                                    include: ["task", "course"],
                                    flags: ["includeIdsOnly"],
                                }];
                    }
                });
            }); }
        }) || this;
        _this.persistedState = null;
        return _this;
    }
    UserTasksRepo.prototype.updatePersistedState = function (stateChanges) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object.assign(this.persistedState, stateChanges);
                        return [4 /*yield*/, this.persistedState.save()];
                    case 1:
                        _a.sent();
                        this.mem.notifySubscribers();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setTaskDoneState = function (userTask, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client, modifiedItem, similarTasks, identicalTasks;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        modifiedItem = Object.assign({}, userTask, { done: done });
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(Object.assign({}, modifiedItem, { $meta: 'updating' }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.list('usertasks', {
                            name: userTask.name,
                            role: "USER",
                            include: ["task", "course"],
                            flags: ["includeIdsOnly"],
                            from: moment__WEBPACK_IMPORTED_MODULE_4___default()(this.persistedState.weekDate).add(-3, 'weeks').valueOf(),
                            to: moment__WEBPACK_IMPORTED_MODULE_4___default()(this.persistedState.weekDate).add(3, 'weeks').valueOf()
                        }, {
                            cache: 'no-cache'
                        })];
                    case 3:
                        similarTasks = _b.sent();
                        identicalTasks = similarTasks.filter(function (t) {
                            return t.courseName === userTask.courseName &&
                                t.learningGoal === userTask.learningGoal &&
                                (!userTask.task || t.task.map(function (t) { return t.id; }).join('') === userTask.task.map(function (t) { return t.id; }).join('')) &&
                                (!userTask.course || t.course.map(function (c) { return c.id; }).join('') === userTask.course.map(function (c) { return c.id; }).join(''));
                        });
                        return [4 /*yield*/, this.update(identicalTasks, function (t) { return t.done = done; })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setSubTaskDoneState = function (userTask, subTaskId, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        return [4 /*yield*/, this.update([userTask], function (t) { return t.subTasks && t.subTasks.filter(function (st) { return st.id === subTaskId; })
                                .forEach(function (st) { return st.done = done; }); })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setWeekPlannerBoxOpen = function (courseName, isOpen) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openCourses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        openCourses = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.persistedState.openCourses);
                        if (isOpen)
                            openCourses[courseName] = true;
                        else
                            delete openCourses[courseName];
                        return [4 /*yield*/, this.updatePersistedState({ openCourses: openCourses })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.changeWeek = function (weekDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var persistedState, newPersisted;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        persistedState = this.persistedState;
                        if (!!persistedState) return [3 /*break*/, 2];
                        return [4 /*yield*/, _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"].load(_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail)];
                    case 1:
                        persistedState = _a.sent();
                        _a.label = 2;
                    case 2:
                        newPersisted = new _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"](persistedState);
                        newPersisted.weekDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).startOf('week').valueOf();
                        newPersisted.save();
                        this.persistedState = newPersisted;
                        return [4 /*yield*/, this.mem.refreshFromServer()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.subscribe = function (subscriber) {
        var _this = this;
        var proxySubscriber = function (userTasks) {
            subscriber(userTasks.filter(function (ut) { return !ut.weekTexts; }), _this.persistedState, userTasks.filter(function (ut) { return !!ut.weekTexts; })[0] || {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                dateTime: _this.persistedState.weekDate,
                weekTexts: { assessment: '', strategy: '' },
                acl: [
                    // Default ACL: Let user self have full control over this item:
                    new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail, "S"),
                    // Additional ACL: Let employees on same school have read access to it.
                    // This currently only applies to tasks that refer to course tasks (not own tasks!)
                    new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school + "/EMPLOYEE", "R")
                ].map(function (ac) { return ac.toString(); })
            });
        };
        proxySubscriber["subscriber"] = subscriber;
        this.mem.subscribe(proxySubscriber);
    };
    UserTasksRepo.prototype.unsubscribe = function (subscriber) {
        this.mem.subscribers = this.mem.subscribers.filter(function (s) { return s["subscriber"] !== subscriber; });
    };
    return UserTasksRepo;
}(_ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]));
if (!userTasksRepo) {
    userTasksRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].userTasksRepo = new UserTasksRepo();
    userTasksRepo.mem.ensureHasData();
}


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

/***/ "./src/test/testpage-courseviewer.tsx":
/*!********************************************!*\
  !*** ./src/test/testpage-courseviewer.tsx ***!
  \********************************************/
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
/* harmony import */ var _utils_choose_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/choose-user */ "./src/test/utils/choose-user.tsx");
/* harmony import */ var _components_course_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/course-viewer */ "./src/components/course-viewer/index.tsx");
/* harmony import */ var _utils_include_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/include-css */ "./src/test/utils/include-css.ts");
/* harmony import */ var _utils_include_optional_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/include-optional-css */ "./src/utils/include-optional-css.ts");

// <Initialization>
 // Emulate server-side script
 // Client-side initialization
// </Initialization>






Object(_utils_include_optional_css__WEBPACK_IMPORTED_MODULE_8__["includeOptionalCSS"])({
    v1: [
        'css/courseviewer.css',
        'css/dialog.css',
        'css/grid-css-patch.css'
    ],
    includeCSS: _utils_include_css__WEBPACK_IMPORTED_MODULE_7__["includeCSS"],
    version: 3,
    versionFolder: 'css/delta-css/courseviewer'
});
var App = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_course_viewer__WEBPACK_IMPORTED_MODULE_6__["CourseViewer"], { courseBuilderUrl: "coursebuilder.html" }) :
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_utils_choose_user__WEBPACK_IMPORTED_MODULE_5__["ChooseUser"], null);
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

/***/ "./src/test/utils/include-css.ts":
/*!***************************************!*\
  !*** ./src/test/utils/include-css.ts ***!
  \***************************************/
/*! exports provided: includeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeCSS", function() { return includeCSS; });
function resolve(uri) {
    var href = location.protocol + "//" + location.host + location.pathname;
    var pLastSlash = href.lastIndexOf('/');
    return href.substr(0, pLastSlash + 1) + uri;
}
function includeCSS(cssFile) {
    document.write('<link rel="stylesheet" href="' + resolve(cssFile) + '" />');
}


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

/***/ "./src/utils/include-optional-css.ts":
/*!*******************************************!*\
  !*** ./src/utils/include-optional-css.ts ***!
  \*******************************************/
/*! exports provided: includeOptionalCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeOptionalCSS", function() { return includeOptionalCSS; });
function includeOptionalCSS(_a) {
    var v1 = _a.v1, versionFolder = _a.versionFolder, version = _a.version, includeCSS = _a.includeCSS, NOCSS = _a.NOCSS;
    if (!NOCSS) {
        if (v1)
            v1.forEach(function (cssFile) { return includeCSS(cssFile); });
    }
    var cssVer = parseInt(NOCSS);
    if (isNaN(cssVer))
        cssVer = 1;
    for (var ver = cssVer + 1; ver <= version; ++ver) {
        includeCSS(versionFolder + "/v" + ver + ".css");
    }
}


/***/ }),

/***/ "./src/utils/pending-job.ts":
/*!**********************************!*\
  !*** ./src/utils/pending-job.ts ***!
  \**********************************/
/*! exports provided: PendingJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingJob", function() { return PendingJob; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PendingJob = /** @class */ (function () {
    function PendingJob(callback) {
        this.timeoutId = null;
        this.cancelled = false;
        this.pending = false;
        this.isJobExecuting = false;
        this.jobCallback = callback;
    }
    PendingJob.prototype.triggerChange = function (throttle) {
        var _this = this;
        if (this.cancelled)
            return;
        this.pending = true;
        if (this.timeoutId !== null)
            clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () { return _this.launchJob(); }, throttle);
    };
    PendingJob.prototype.stop = function () {
        if (this.timeoutId !== null)
            clearTimeout(this.timeoutId);
        this.timeoutId = null;
        this.cancelled = true;
    };
    PendingJob.prototype.launchJob = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cancelled)
                            return [2 /*return*/];
                        if (!this.pending)
                            return [2 /*return*/];
                        if (this.isJobExecuting)
                            return [2 /*return*/];
                        this.timeoutId = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        this.isJobExecuting = true;
                        this.pending = false;
                        return [4 /*yield*/, this.jobCallback()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.isJobExecuting = false;
                        return [7 /*endfinally*/];
                    case 4:
                        if (!this.pending) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.launchJob()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return PendingJob;
}());



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

/***/ "./src/utils/weekutil.ts":
/*!*******************************!*\
  !*** ./src/utils/weekutil.ts ***!
  \*******************************/
/*! exports provided: KEDWeek, getAdjustedWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEDWeek", function() { return KEDWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjustedWeek", function() { return getAdjustedWeek; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function KEDWeek(year, week) {
    var m = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(year, 1, 1)).locale('sv').week(week);
    var res = {
        year: year,
        week: week,
        notBefore: m.clone().startOf('week').add(-2, 'days').toDate().getTime(),
        notAfter: m.clone().startOf('week').add(5, 'days').toDate().getTime()
    };
    return res;
}
function getAdjustedWeek(m) {
    var clone = m.clone().locale('sv');
    return m.weekday() >= 5 ? // Lördag 00:00 / Söndag 00:00?
        m.week() + 1 : // Tillhör nästa vecka
        m.week();
}
/*export function getWeekLimits (m: Moment) {
  const clonedSwedish = m.clone().locale('sv');
  const limits = {
    notBefore: clonedSwedish.startOf('week').add(-2, 'days'),
    notAfter: clonedSwedish.startOf('week').add(5, 'days')
  };
}
*/


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
//# sourceMappingURL=testpagecourseviewer.js.map