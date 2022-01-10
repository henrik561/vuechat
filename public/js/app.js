(self["webpackChunkvuechat"] = self["webpackChunkvuechat"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AuthLayout"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  data: function data() {
    return {
      username: '',
      password: '',
      form: {
        errors: {
          email: false,
          password: false
        },
        loginFailed: null
      }
    };
  },
  computed: {
    hasEmail: function hasEmail() {
      return this.username.length > 0;
    },
    hasPassword: function hasPassword() {
      return this.password.length > 0;
    },
    canSubmit: function canSubmit() {
      return this.hasEmail && this.hasPassword;
    },
    loginFailed: function loginFailed() {
      return this.form.loginFailed === false;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['setCurrentUser', 'setAuthType', 'setCurrentUser'])), {}, {
    validateForm: function validateForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.hasEmail) {
                  _this.form.errors.email = true;
                }

                if (!_this.hasPassword) {
                  _this.form.errors.password = true;
                }

                if (!(_this.form.errors.password === true || _this.form.errors.email === true)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _this.loginProcess();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loginProcess: function loginProcess() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.logUserIn)(_this2.username, _this2.password);

              case 2:
                response = _context2.sent;

                if (!response.user) {
                  _this2.form.loginFailed = true;
                }

                _this2.setCurrentUser({
                  "username": response.user.displayName,
                  "email": response.user.email,
                  "phoneNumber": response.user.phoneNumber,
                  "profilePicture": response.user.photoURL,
                  "uid": response.user.uid
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeAuthType: function changeAuthType() {
      this.setAuthType();
    },
    loginWithGoogleProvider: function loginWithGoogleProvider() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.logUserInGoogle)();

              case 2:
                response = _context3.sent;

                if (response.user) {
                  _context3.next = 6;
                  break;
                }

                _this3.form.loginFailed = true;
                return _context3.abrupt("return");

              case 6:
                _this3.setCurrentUser(response.user);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      email: '',
      password: '',
      password_repeat: '',
      loggedIn: false,
      form_errors: false,
      canRegister: false
    };
  },
  computed: {
    passwordsDoMatch: function passwordsDoMatch() {
      return this.password === this.password_repeat;
    },
    hasPassword: function hasPassword() {
      return this.canRegister = this.password.length > 0;
    },
    hasEmail: function hasEmail() {
      return this.canRegister = this.email.length > 0;
    },
    canSubmit: function canSubmit() {
      return this.hasEmail && this.hasPassword;
    },
    hasValidEmail: function hasValidEmail() {
      var regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return this.canRegister = this.email.match(regex) && this.email.length > 6;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['setCurrentUser', 'setAuthType', 'setCurrentUser'])), {}, {
    registerUser: function registerUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.canRegister) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.createUser)(_this.email, _this.password);

              case 3:
                response = _context.sent;

                if (!response.user) {
                  _this.form.loginFailed = true;
                }

                _this.setCurrentUser({
                  "username": response.user.displayName,
                  "email": response.user.email,
                  "phoneNumber": response.user.phoneNumber,
                  "profilePicture": response.user.photoURL,
                  "uid": response.user.uid
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeAuthType: function changeAuthType() {
      this.setAuthType();
    },
    loginWithGoogleProvider: function loginWithGoogleProvider() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.logUserInGoogle)();

              case 2:
                response = _context2.sent;

                if (response.user) {
                  _context2.next = 6;
                  break;
                }

                _this2.form_errors = true;
                return _context2.abrupt("return");

              case 6:
                _this2.setCurrentUser(response.user);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactSideBar_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSideBar/User */ "./resources/js/Components/Chat/ContactSideBar/User.vue");
/* harmony import */ var _ContactSideBar_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactSideBar/Search */ "./resources/js/Components/Chat/ContactSideBar/Search.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/database */ "./resources/js/server/database.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactSideBar",
  components: {
    Search: _ContactSideBar_Search__WEBPACK_IMPORTED_MODULE_2__["default"],
    User: _ContactSideBar_User__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      filterWord: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['getAllUsers', 'getCurrentUser'])), {}, {
    hasUsers: function hasUsers() {
      return !_.isEmpty(this.getAllUsers);
    }
  }),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _server_database__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('chats').orderByChild('chatter_id').equalTo(_this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.setAllUsers(snapshot.val());

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['setAllUsers'])), {}, {
    searchInUsers: function searchInUsers(keyword) {
      this.filterWord = keyword;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Search",
  data: function data() {
    return {
      searchKeyWord: ""
    };
  },
  methods: {
    emptySearchbar: function emptySearchbar() {
      this.searchKeyWord = "";
    }
  },
  watch: {
    searchKeyWord: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (value) {
      this.$emit('searchInUsers', value);
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Shared_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Navbar/NavLink */ "./resources/js/Shared/Navbar/NavLink.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "User",
  components: {
    NavLink: _Shared_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ["user"],
  data: function data() {
    return {
      userStatus: 'online',
      userData: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getNewChatUser', 'getUserHasChat', 'getCurrentUser'])), {}, {
    hasNewMessages: function hasNewMessages() {
      return Math.round(Math.random()) > 0;
    },
    getNewMessageAmount: function getNewMessageAmount() {
      return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    }
  }),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserData)(_this.user.receiver_id);

            case 2:
              _this.userData = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['setNewChat', 'setNewChatKey'])), {}, {
    startNewChat: function startNewChat() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.getNewChatUser && _this2.getNewChatUser.uid === _this2.user.receiver_id)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.t0 = _this2;
                _context2.t1 = _objectSpread;
                _context2.t2 = _objectSpread({}, _this2.userData);
                _context2.t3 = {};
                _context2.next = 8;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserOnlineStatus)(_this2.userData);

              case 8:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  'online_visibility': _context2.t4
                };
                _context2.t6 = (0, _context2.t1)(_context2.t2, _context2.t3, _context2.t5);
                _context2.next = 13;
                return _context2.t0.setNewChat.call(_context2.t0, _context2.t6);

              case 13:
                _context2.next = 15;
                return _this2.setNewChatKey(_this2.user.chatKey);

              case 15:
                _context2.next = 17;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.createNewChat)(_this2.getCurrentUser.uid, _this2.userData.uid, _this2.user.chatKey);

              case 17:
                _context2.next = 19;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.markMessagesAsRead)(_this2.userData.uid, _this2.user.chatKey, _this2.getCurrentUser.uid);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/database */ "./resources/js/server/database.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChatUserTopBar",
  data: function data() {
    return {
      userStatus: ''
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.userStatus = _this.getNewChatUser.online_visibility;
              _context2.next = 3;
              return _server_database__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('onlineStatus').on('child_changed', /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.userStatus = snapshot.val().online_visibility;

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getNewChatUser'])), {}, {
    formatUserOnlineVisibility: function formatUserOnlineVisibility() {
      var userLastSeen = this.userStatus;

      if (userLastSeen === 'online') {
        return userLastSeen;
      } else if (moment__WEBPACK_IMPORTED_MODULE_1___default()(userLastSeen).isValid()) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(userLastSeen).fromNow();
      } else {
        return '';
      }
    }
  }),
  methods: {
    handleClick: function handleClick() {
      this.$emit('handleTopBarClick');
    }
  },
  watch: {
    getNewChatUser: {
      handler: function handler(user) {
        this.userStatus = user.online_visibility;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _newMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newMessage */ "./resources/js/Components/Chat/currentChat/newMessage.vue");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _ChatUserTopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatUserTopBar */ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue");
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile/UserProfile */ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CurrentChat",
  components: {
    UserProfile: _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChatUserTopBar: _ChatUserTopBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    NewMessage: _newMessage__WEBPACK_IMPORTED_MODULE_2__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  data: function data() {
    return {
      messages: null,
      fetchMessages: false,
      hasChatConnection: false,
      showNewMessageShort: true,
      viewUserProfile: false
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //TODO make for all eventlisteners a function
              _server_database__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('messages').on('value', function (snapshot) {
                _this.messages = snapshot.val();

                _this.scrollToBottom();
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapGetters)(['getNewChatUser', 'getCurrentUser', 'getCurrentChatKey'])), {}, {
    hasNewChat: function hasNewChat() {
      var _this2 = this;

      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.scrollToBottom();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), 1);
      return !_.isNil(this.getNewChatUser);
    },
    userProfileIsToggled: function userProfileIsToggled() {
      return this.viewUserProfile;
    },
    getCurrentChatMessages: function getCurrentChatMessages() {
      var _this3 = this;

      return _.filter(this.messages, function (message) {
        if (message.chatKey === _this3.getCurrentChatKey) {
          return message;
        }
      });
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapActions)(['setChatStop'])), {}, {
    sendNewMessageEvent: function sendNewMessageEvent(message) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.hasExistingConnection)(_this4.getCurrentChatKey, _this4.getCurrentUser.uid, _this4.getNewChatUser.uid);

              case 2:
                _this4.hasChatConnection = _context3.sent;
                _context3.next = 5;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(_this4.getCurrentUser.uid, _this4.getCurrentChatKey, message, _this4.hasChatConnection);

              case 5:
                _context3.next = 7;
                return _this4.scrollToBottom();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    toggleUserProfileState: function toggleUserProfileState() {
      this.viewUserProfile = !this.viewUserProfile;
    },
    scrollToBottom: function scrollToBottom() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var messageContainer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return document.getElementById('message-container');

              case 2:
                messageContainer = _context4.sent;

                if (messageContainer) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                messageContainer.scrollTop = messageContainer.scrollHeight;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserProfile",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['getNewChatUser'])),
  methods: {
    handleClick: function handleClick() {
      this.$emit('handleProfileClick');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "newMessage",
  data: function data() {
    return {
      message: ''
    };
  },
  methods: {
    addMessage: function addMessage() {
      if (this.message === '') {
        return;
      }

      this.$emit("addMessage", this.message);
      this.message = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddFriends",
  data: function data() {
    return {
      friendEmail: '',
      addFriend: {
        error: '',
        color: 'bg-red-500'
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['getAddFriendsPopupState', 'getCurrentUser'])), {}, {
    addFriendError: function addFriendError() {
      return this.addFriend.error;
    },
    canSubmitFriendRequest: function canSubmitFriendRequest() {
      var regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return this.friendEmail.match(regex);
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['setAddFriendsPopupState'])), {}, {
    findFriend: function findFriend() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var regex, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

                if (_this.friendEmail.match(regex)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _this.addFriend.error = 'The email address is not valid!');

              case 3:
                _context.next = 5;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserByEmail)(_this.friendEmail);

              case 5:
                response = _context.sent;
                _this.friendEmail = '';

                if (!(response === 'DoesNotExists')) {
                  _context.next = 10;
                  break;
                }

                _this.addFriend.color = 'bg-red-500';
                return _context.abrupt("return", _this.addFriend.error = 'The user does not exists!');

              case 10:
                _context.next = 12;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.addAsFriend)(_this.getCurrentUser.uid, response);

              case 12:
                response = _context.sent;

                if (!(response === 'AddedAsFriend')) {
                  _context.next = 18;
                  break;
                }

                _this.addFriend.color = 'bg-green-500';
                return _context.abrupt("return", _this.addFriend.error = 'Successfully added as friend!');

              case 18:
                _this.addFriend.color = 'bg-red-500';
                return _context.abrupt("return", _this.addFriend.error = 'U are already friends with this user!');

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }),
  watch: {
    addFriendError: {
      handler: function handler(error) {
        var _this2 = this;

        setTimeout(function () {
          _this2.addFriend.error = null;
        }, 5000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Shared_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Shared/Navbar/NavLink */ "./resources/js/Shared/Navbar/NavLink.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Friend",
  components: {
    NavLink: _Shared_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['friend'],
  data: function data() {
    return {
      friendData: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['getCurrentUser', 'getFriendsListType', 'getCurrentChatKey', 'getFriendPopupUser'])), {}, {
    usersPopupIsOpen: function usersPopupIsOpen() {
      return this.getFriendPopupUser === this.friendData.uid;
    },
    formatUserOnlineVisibility: function formatUserOnlineVisibility() {
      var userLastSeen = this.friendData.online_visibility;

      if (!userLastSeen) {
        return '';
      } else if (userLastSeen === 'online') {
        return userLastSeen;
      } else if (moment__WEBPACK_IMPORTED_MODULE_2___default()(userLastSeen).isValid()) {
        return moment__WEBPACK_IMPORTED_MODULE_2___default()(userLastSeen).fromNow();
      } else {
        return '';
      }
    }
  }),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getFriendsData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['setNewChat', 'setNewChatKey', 'setFriendPopupUser'])), {}, {
    getFriendsData: function getFriendsData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.getFriendsListType === 'pending')) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserData)(_this2.friend.chatter_id);

              case 3:
                _this2.friendData = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.next = 8;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserData)(_this2.friend.receiver_id);

              case 8:
                _this2.friendData = _context2.sent;

              case 9:
                _context2.next = 11;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserOnlineStatus)({
                  uid: _this2.friendData.uid
                });

              case 11:
                _this2.friendData['online_visibility'] = _context2.sent;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    acceptFriendRequest: function acceptFriendRequest() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.addNewChat)(_this3.getCurrentUser.uid, _this3.friendData.uid);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    rejectFriendRequest: function rejectFriendRequest() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.rejectFriendRequest)(_this4.getCurrentUser.uid, _this4.friendData.uid);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setNewChatUser: function setNewChatUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var chatKey;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = _this5;
                _context5.t1 = _objectSpread;
                _context5.t2 = _objectSpread({}, _this5.friendData);
                _context5.t3 = {};
                _context5.next = 6;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserOnlineStatus)(_this5.friendData);

              case 6:
                _context5.t4 = _context5.sent;
                _context5.t5 = {
                  'online_visibility': _context5.t4
                };
                _context5.t6 = (0, _context5.t1)(_context5.t2, _context5.t3, _context5.t5);
                _context5.next = 11;
                return _context5.t0.setNewChat.call(_context5.t0, _context5.t6);

              case 11:
                _context5.next = 13;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getChatKey)(_this5.getCurrentUser.uid, _this5.friendData.uid);

              case 13:
                chatKey = _context5.sent;
                _context5.next = 16;
                return _this5.setNewChatKey(chatKey);

              case 16:
                _context5.next = 18;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.markMessagesAsRead)(_this5.friendData.uid, chatKey, _this5.getCurrentUser.uid);

              case 18:
                _context5.next = 20;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.createNewChat)(_this5.getCurrentUser.uid, _this5.friendData.uid, chatKey);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    toggleOptionsPopup: function toggleOptionsPopup() {
      if (this.usersPopupIsOpen) {
        this.setFriendPopupUser(null);
      } else {
        this.setFriendPopupUser(this.friendData.uid);
      }
    },
    closePopup: function closePopup() {
      this.setFriendPopupUser(null);
    },
    removeFriend: function removeFriend() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.removeFriend)(_this6.getCurrentUser.uid, _this6.friendData.uid);

              case 2:
                _context6.next = 4;
                return _this6.getFriendsData();

              case 4:
                _this6.closePopup();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    blockFriend: function blockFriend() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.blockFriend)(_this7.getCurrentUser.uid, _this7.getFriendPopupUser);

              case 2:
                _context7.next = 4;
                return _this7.getFriendsData();

              case 4:
                _this7.closePopup();

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Friend */ "./resources/js/Components/Friends/Components/Friend/Friend.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "All",
  components: {
    Friend: _Friend__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      friends: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getCurrentUser'])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _server_database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats').on('value', function (snapshot) {
                console.log(snapshot.val());
              });

            case 2:
              _context2.next = 4;
              return _server_database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats').orderByChild('chatter_id').equalTo(_this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.friends = snapshot.val();

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Friend */ "./resources/js/Components/Friends/Components/Friend/Friend.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Blocked",
  components: {
    Friend: _Friend__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      friends: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getCurrentUser'])),
  created: function created() {
    var _this = this;

    _server_database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.friends = _.filter(snapshot.val(), function (friend) {
                  return friend.blocked;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Friend */ "./resources/js/Components/Friends/Components/Friend/Friend.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Online",
  components: {
    Friend: _Friend__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      friends: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['getCurrentUser'])),
  created: function created() {
    var _this = this;

    _server_database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats').orderByChild('chatter_id').equalTo(this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(snapshot) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.friends = _.filter(snapshot.val(), /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_2__.getUserOnlineStatus)({
                              uid: user.receiver_id
                            });

                          case 2:
                            _context.t1 = _context.sent;
                            _context.t0 = _context.t1 === 'online';

                            if (!_context.t0) {
                              _context.next = 6;
                              break;
                            }

                            _context.t0 = !user.blocked;

                          case 6:
                            return _context.abrupt("return", _context.t0);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _Friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Friend */ "./resources/js/Components/Friends/Components/Friend/Friend.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Pending",
  components: {
    Friend: _Friend__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      friends: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['getCurrentUser'])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['setPendingRequests'])),
  created: function created() {
    var _this = this;

    _server_database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('friendRequests').orderByChild('receiver_id').equalTo(this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (snapshot.exists()) {
                  _this.setPendingRequests(Object.keys(snapshot.val()).length);

                  _this.friends = snapshot.val();
                } else {
                  _this.friends = {};

                  _this.setPendingRequests(0);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/database */ "./resources/js/server/database.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FriendsNavbar",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['getAddFriends', 'getCurrentUser', 'getFriendsListType', 'getPendingRequests', 'getNewPendingRequests'])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['setAddFriends', 'setFriendsListType'])), {}, {
    typeClickHandler: function typeClickHandler(type) {
      if (this.getAddFriends) {
        this.setAddFriends();
      }

      this.setFriendsListType(type);
    },
    addFriendHandler: function addFriendHandler() {
      this.setAddFriends();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChatPreRender",
  data: function data() {
    return {
      progressStatus: 5
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.useAuth)().onAuthStateChanged(function (user) {
                if (!user) {
                  _this.progressStatus = 100;

                  _this.setPageLoadingStatus();

                  return;
                }

                _this.setCurrentUser({
                  "username": user.displayName,
                  "email": user.email,
                  "phoneNumber": user.phoneNumber,
                  "profilePicture": user.photoURL,
                  "uid": user.uid
                });

                (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.updateUserOnlineVisibility)(user, 'online');
                _this.progressStatus = 100;
                setTimeout(function () {
                  _this.setPageLoadingStatus();
                }, 2000);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['setCurrentUser', 'setPageLoadingStatus']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Chat/ContactSideBar */ "./resources/js/Components/Chat/ContactSideBar.vue");
/* harmony import */ var _Components_Chat_currentChat_CurrentChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Chat/currentChat/CurrentChat */ "./resources/js/Components/Chat/currentChat/CurrentChat.vue");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Chat",
  components: {
    CurrentChat: _Components_Chat_currentChat_CurrentChat__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContactSideBar: _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(['getCurrentUser', 'getNewChatUser', 'getCurrentChatKey'])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(['setAllUsers', 'setActiveChatKey'])),
  watch: {
    getNewChatUser: {
      handler: function () {
        var _handler = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(user) {
          var _this = this;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                    var activeChatKey;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_4__.getActiveChatKey)(_this.getCurrentChatKey, _this.getCurrentUser.uid);

                          case 2:
                            activeChatKey = _context.sent;

                            _this.setActiveChatKey(activeChatKey);

                            _context.next = 6;
                            return _server_database__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref("activeChats/".concat(activeChatKey)).onDisconnect().set(null);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })), 10);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function handler(_x) {
          return _handler.apply(this, arguments);
        }

        return handler;
      }()
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Chat/ContactSideBar */ "./resources/js/Components/Chat/ContactSideBar.vue");
/* harmony import */ var _Components_Chat_currentChat_CurrentChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Chat/currentChat/CurrentChat */ "./resources/js/Components/Chat/currentChat/CurrentChat.vue");
/* harmony import */ var _Components_Friends_FriendsNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Friends/FriendsNavbar */ "./resources/js/Components/Friends/FriendsNavbar.vue");
/* harmony import */ var _Components_Friends_Components_AddFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Friends/Components/AddFriends */ "./resources/js/Components/Friends/Components/AddFriends.vue");
/* harmony import */ var _Components_Friends_Components_Friend_Friend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Friends/Components/Friend/Friend */ "./resources/js/Components/Friends/Components/Friend/Friend.vue");
/* harmony import */ var _Components_Friends_Components_Friend_Lists_All__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Friends/Components/Friend/Lists/All */ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue");
/* harmony import */ var _Components_Friends_Components_Friend_Lists_Online__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Friends/Components/Friend/Lists/Online */ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue");
/* harmony import */ var _Components_Friends_Components_Friend_Lists_Pending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Friends/Components/Friend/Lists/Pending */ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue");
/* harmony import */ var _Components_Friends_Components_Friend_Lists_Blocked__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Friends/Components/Friend/Lists/Blocked */ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../server/firebaseChat */ "./resources/js/server/firebaseChat.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Friends",
  components: {
    Blocked: _Components_Friends_Components_Friend_Lists_Blocked__WEBPACK_IMPORTED_MODULE_9__["default"],
    Pending: _Components_Friends_Components_Friend_Lists_Pending__WEBPACK_IMPORTED_MODULE_8__["default"],
    Online: _Components_Friends_Components_Friend_Lists_Online__WEBPACK_IMPORTED_MODULE_7__["default"],
    All: _Components_Friends_Components_Friend_Lists_All__WEBPACK_IMPORTED_MODULE_6__["default"],
    Friend: _Components_Friends_Components_Friend_Friend__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddFriends: _Components_Friends_Components_AddFriends__WEBPACK_IMPORTED_MODULE_4__["default"],
    CurrentChat: _Components_Chat_currentChat_CurrentChat__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContactSideBar: _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    FriendsNavbar: _Components_Friends_FriendsNavbar__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapGetters)(['getAddFriends', 'getFriendsListType', 'getCurrentUser'])),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_10__.stopActiveChat)(_this.getCurrentUser.uid);

            case 2:
              _context.next = 4;
              return _this.setChatStop();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_11__.mapActions)(['setFriendsListType', 'setChatStop']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar/Navbar */ "./resources/js/Shared/Navbar/Navbar.vue");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./resources/js/Shared/Footer/Footer.vue");
/* harmony import */ var _Components_Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Auth/AuthLayout */ "./resources/js/Components/Auth/AuthLayout.vue");
/* harmony import */ var _Components_base_ChatPreRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/base/ChatPreRender */ "./resources/js/Components/base/ChatPreRender.vue");
/* harmony import */ var _Components_Auth_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Auth/Login */ "./resources/js/Components/Auth/Login.vue");
/* harmony import */ var _Components_Auth_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Auth/Register */ "./resources/js/Components/Auth/Register.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Chat/ContactSideBar */ "./resources/js/Components/Chat/ContactSideBar.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layout",
  components: {
    ContactSideBar: _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_9__["default"],
    Register: _Components_Auth_Register__WEBPACK_IMPORTED_MODULE_6__["default"],
    Login: _Components_Auth_Login__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChatPreRender: _Components_base_ChatPreRender__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthLayout: _Components_Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Navbar: _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)(['getUserIsLoggedIn', 'getPageIsLoading', 'getCurrentUser', 'getAuthType'])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapActions)(['setPendingRequests'])),
  watch: {
    getCurrentUser: {
      handler: function () {
        var _handler = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(user) {
          var _this = this;

          var userKey;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_7__.updateUserOnlineVisibility)(this.getCurrentUser, 'online');

                case 2:
                  _context2.next = 4;
                  return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_7__.getUserOnlineStatusKey)(user);

                case 4:
                  userKey = _context2.sent;
                  _context2.next = 7;
                  return _server_database__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref("onlineStatus/".concat(userKey)).onDisconnect().update({
                    'online_visibility': new Date().getTime()
                  });

                case 7:
                  _context2.next = 9;
                  return _server_database__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('friendRequests').orderByChild('receiver_id').equalTo(this.getCurrentUser.uid).on('value', /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(snapshot) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (snapshot.exists()) {
                                _this.setPendingRequests(Object.keys(snapshot.val()).length);
                              } else {
                                _this.setPendingRequests(0);
                              }

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }());

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function handler(_x) {
          return _handler.apply(this, arguments);
        }

        return handler;
      }()
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NavLink",
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: ['active', 'notNavbarLink']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink */ "./resources/js/Shared/Navbar/NavLink.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navbar",
  components: {
    NavLink: _NavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['userIsLoggedIn'],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['getPendingRequests', 'getNewPendingRequests']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-screen flex"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-white font-bold text-4xl font-sans"
}, "VueChat"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-white mt-1"
}, "The best place to stay connected!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
}, "Read More")])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex w-1/2 justify-center items-center bg-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-gray-800 font-bold text-2xl mb-1"
}, "Hello Again!", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm font-normal text-gray-600 mb-7"
}, "Welcome Back", -1
/* HOISTED */
);

var _hoisted_4 = {
  key: 0,
  "class": "my-2"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-red-500"
}, "The provided credentials do not match!", -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
})], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Don't have an account yet? ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.validateForm && $options.validateForm.apply($options, arguments);
    }, ["prevent"])),
    "class": "bg-white",
    method: "POST"
  }, [_hoisted_2, _hoisted_3, $options.loginFailed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-red-500': $data.form.errors.email
    }, "flex items-center border-2 py-2 px-3 rounded-2xl mb-4"])
  }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onFocus: _cache[0] || (_cache[0] = function ($event) {
      return $data.form.errors.email = false;
    }),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.username = $event;
    }),
    "class": "pl-2 outline-none border-none",
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Email Address"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.username]])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-red-500': $data.form.errors.password
    }, "flex items-center border-2 py-2 px-3 rounded-2xl"])
  }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onFocus: _cache[2] || (_cache[2] = function ($event) {
      return $data.form.errors.password = false;
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.password = $event;
    }),
    "class": "pl-2 outline-none border-none",
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.changeAuthType && $options.changeAuthType.apply($options, arguments);
    }),
    "class": "text-blue-500 transition duration-150 hover:underline cursor-pointer"
  }, "Register")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([!$options.canSubmit ? 'bg-indigo-200 cursor-not-allowed' : 'bg-indigo-600', "block w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2"]),
    type: "submit"
  }, "Login", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.loginWithGoogleProvider && $options.loginWithGoogleProvider.apply($options, arguments);
    }, ["prevent"])),
    type: "button",
    "class": "block bg-indigo-600 w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2"
  }, "Login with google")], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex w-1/2 justify-center items-center bg-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-gray-800 font-bold text-2xl mb-1"
}, "Welcome to vueChat", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-gray-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-5 w-5 text-gray-400",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "mt-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Already have an account? ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "bg-white",
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.registerUser && $options.registerUser.apply($options, arguments);
    }, ["prevent"])),
    method: "POST"
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.hasEmail ? $options.hasValidEmail ? 'border-green-500' : 'border-red-500' : '', "flex items-center border-2 py-2 px-3 rounded-2xl mb-4"])
  }, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.email = $event;
    }),
    "class": "pl-2 outline-none border-none",
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Email Address"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.hasPassword ? $options.passwordsDoMatch ? 'border-green-500' : 'border-red-500' : '', "flex items-center border-2 py-2 px-3 rounded-2xl mb-4"])
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.password = $event;
    }),
    "class": "pl-2 outline-none border-none",
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.hasPassword ? $options.passwordsDoMatch ? 'border-green-500' : 'border-red-500' : '', "flex items-center border-2 py-2 px-3 rounded-2xl"])
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.password_repeat = $event;
    }),
    "class": "pl-2 outline-none border-none",
    type: "password",
    name: "password",
    id: "password-repeat",
    placeholder: "Password Repeat"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password_repeat]])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.changeAuthType && $options.changeAuthType.apply($options, arguments);
    }),
    "class": "text-blue-500 transition duration-150 hover:underline cursor-pointer"
  }, "Login")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([!$options.canSubmit ? 'bg-indigo-200 cursor-not-allowed' : 'bg-indigo-600', "block w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2"]),
    type: "submit"
  }, "Register", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.loginWithGoogleProvider && $options.loginWithGoogleProvider.apply($options, arguments);
    }, ["prevent"])),
    type: "button",
    "class": "block bg-indigo-600 w-full mt-4 py-2 text-white rounded-2xl font-semibold mb-2"
  }, "Login with google")], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d863e990"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "w-1/4 border-r-2 border-white bg-transparent max-viewport-height flex flex-col contact-sidebar"
};
var _hoisted_2 = {
  "class": "flex flex-col w-full border-2 border-blue-800"
};
var _hoisted_3 = {
  key: 0,
  "class": "flex w-full min-h-full py-6 justify-center items-center"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-white"
  }, "Geen contacten gevonden!", -1
  /* HOISTED */
  );
});

var _hoisted_5 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Search");

  var _component_User = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("User");

  var _component_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("perfect-scrollbar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Search, {
    onSearchInUsers: $options.searchInUsers
  }, null, 8
  /* PROPS */
  , ["onSearchInUsers"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "overflow-y-scroll w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.getAllUsers, function (user) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_User, {
          user: user
        }, null, 8
        /* PROPS */
        , ["user"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      )), !$options.hasUsers ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full h-12 flex relative border-b border-blue-500"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-white w-12 h-full flex justify-center items-center absolute right-0 top-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.searchKeyWord = $event;
    }),
    "class": "pl-2 w-full outline-none border-none",
    type: "text",
    name: "searchKeyWord",
    id: "searchKeyWord",
    placeholder: "Zoeken..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchKeyWord]]), _hoisted_2]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-11/12 h-16 flex items-center justify-center gap-2"
};
var _hoisted_2 = {
  "class": "w-12 relative h-12 flex justify-center items-center"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "w-64 h-full flex flex-col ml-2 justify-center"
};
var _hoisted_5 = {
  "class": "text-base"
};
var _hoisted_6 = {
  "class": "relative h-full flex items-center"
};
var _hoisted_7 = {
  key: 0,
  "class": "newMessageNotification w-6 h-6 right-1 absolute bg-green-500 rounded-full text-white flex justify-center items-center"
};
var _hoisted_8 = {
  "class": "-ml-px"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavLink");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NavLink, {
    notNavbarLink: true,
    href: _ctx.$page.component !== 'Chat' ? '/chat' : '',
    onClick: $options.startNewChat,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex hover:bg-opacity-80 transition-all duration-350 cursor-pointer border-2 border-t-0 border-b-2 border-blue-800 justify-center items-center bg-white", _ctx.getUserHasChat && _ctx.getNewChatUser.uid === $data.userData.uid ? 'bg-opacity-30 text-white' : 'text-black'])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "object-cover h-12 border border-gray-300 w-12 rounded-full",
        width: "100",
        height: "100",
        src: $data.userData.profilePicture ? $data.userData.profilePicture : '/Uploads/Profiles/profile.jpeg',
        alt: "user profile picture"
      }, null, 8
      /* PROPS */
      , _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userData.username || $data.userData.email), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$options.hasNewMessages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getNewMessageAmount), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "onClick", "class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between px-6 w-full h-16 border-b-4 border-white items-center"
};
var _hoisted_2 = {
  "class": "w-full flex items-center"
};
var _hoisted_3 = {
  "class": "flex w-12 h-12"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "ml-4 flex flex-col"
};
var _hoisted_6 = {
  "class": "text-xl text-white"
};
var _hoisted_7 = {
  "class": "text-sm text-gray-400"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-cog text-2xl text-white"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-12 h-12 rounded-full object-cover",
    src: _ctx.getNewChatUser.profilePicture ? _ctx.getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg',
    alt: "user profile picture"
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getNewChatUser.username || _ctx.getNewChatUser.email), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUserOnlineVisibility), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleClick && $options.handleClick.apply($options, arguments);
    })
  }, _hoisted_9)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3bac21c7"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "w-3/4 h-full overflow-x-hidden flex relative border-l-2 border-white"
};
var _hoisted_2 = {
  "class": "p-3 w-max max-w-screen-sm rounded-xl flex gap-2 bg-green-200"
};
var _hoisted_3 = {
  "class": "mr-2 w-full break-all"
};
var _hoisted_4 = {
  "class": "message_timestamp"
};
var _hoisted_5 = {
  key: 0,
  "class": "message_status text-xs items-center"
};
var _hoisted_6 = {
  key: 0,
  "class": "fas fa-check text-gray-400"
};
var _hoisted_7 = {
  key: 1,
  "class": "fas fa-check-double text-gray-400"
};
var _hoisted_8 = {
  key: 2,
  "class": "fas fa-check-double text-blue-400"
};
var _hoisted_9 = {
  key: 1,
  "class": "w-3/4 text-white text-xl flex items-center flex-col justify-center current-chat-main-section-no-new-chat"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Select a user and start chatting with each other!", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Having trouble? ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact Us");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChatUserTopBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatUserTopBar");

  var _component_NewMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewMessage");

  var _component_UserProfile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UserProfile");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return $options.hasNewChat ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full", {
      'w-3/4': $options.userProfileIsToggled
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatUserTopBar, {
    onHandleTopBarClick: $options.toggleUserProfileState
  }, null, 8
  /* PROPS */
  , ["onHandleTopBarClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "message-container",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.hasNewChat ? 'current-chat-main-section-newchat' : 'current-chat-main-section', "w-full justify-start flex overflow-y-auto gap-2 flex-col p-6"])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getCurrentChatMessages, function (message, objectIndex, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full flex", message.chatter_id === _ctx.getCurrentUser.uid ? 'justify-end' : 'justify-start'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.message), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex gap-1 items-end text-xs mt-3", message.chatter_id === _ctx.getCurrentUser.uid ? 'justify-end' : 'justify-start'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.timestamp), 1
    /* TEXT */
    ), message.chatter_id === _ctx.getCurrentUser.uid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [ false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !message.message_seen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), message.message_seen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )])], 2
    /* CLASS */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NewMessage, {
    onAddMessage: $options.sendNewMessageEvent
  }, null, 8
  /* PROPS */
  , ["onAddMessage"])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["user-profile-container relative w-1/4", {
      'user-profile-toggled': $options.userProfileIsToggled
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UserProfile, {
    onHandleProfileClick: $options.toggleUserProfileState
  }, null, 8
  /* PROPS */
  , ["onHandleProfileClick"])], 2
  /* CLASS */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "?",
    "class": "text-blue-500 hover:underline"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })])]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0ca66463"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "w-full container-max-height flex flex-col justify-start absolute right-0 bg-transparent border-l-2 border-white"
};
var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = {
  "class": "absolute right-6 top-3"
};
var _hoisted_4 = {
  "class": "w-full flex items-center justify-center"
};
var _hoisted_5 = {
  "class": "w-48 h-48 mt-16 rounded-full m-0 aspect-square bg-gray-400"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "mt-7 text-center"
};
var _hoisted_8 = {
  "class": "flex flex-col gap-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.handleClick && $options.handleClick.apply($options, arguments);
    }),
    "class": "fas fa-times"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-full h-full object-cover rounded-full",
    src: _ctx.getNewChatUser.profilePicture ? _ctx.getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg',
    alt: "user profile"
  }, null, 8
  /* PROPS */
  , _hoisted_6)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getNewChatUser.username), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getNewChatUser.email), 1
  /* TEXT */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-20 relative w-full bottom-0 border-t-4 border-white flex bg-transparent justify-between p-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.message = $event;
    }),
    "class": "rounded-xl ml-2 p-2 h-12 w-10/12 bg-white",
    placeholder: "Uw bericht..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.message]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addMessage && $options.addMessage.apply($options, arguments);
    }, ["prevent"])),
    "class": "mx-4 bg-white rounded-xl px-4"
  }, "Verzenden")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full flex flex-col gap-2 border-t rounded border-blue-800 relative"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-col text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-xl font-bold"
}, "Add Friend"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "You can add a friend with their email address. It's cAsE sEnSitIvE!")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
    action: "",
    "class": "w-full h-16 bg-white rounded flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "friendEmail",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.friendEmail = $event;
    }),
    "class": "pl-2 rounded w-9/12 outline-none border-none",
    type: "text",
    placeholder: "Enter a Email@email.example"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.friendEmail]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.findFriend && $options.findFriend.apply($options, arguments);
    }),
    "class": "bg-white cursor-pointer w-3/12 h-full flex pr-4 justify-end items-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.canSubmitFriendRequest ? 'bg-blue-800' : 'bg-blue-300', "text-white rounded px-4 p-2"]),
    type: "submit"
  }, "Send Friend Request", 2
  /* CLASS */
  )])], 32
  /* HYDRATE_EVENTS */
  ), $data.addFriend.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full flex rounded justify-between items-center h-12 text-white px-4", $data.addFriend.color])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.addFriend.error), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.addFriend.error = null;
    }),
    "class": "fas fa-times"
  })], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full px-4 h-16 flex mb-4 justify-between items-center relative border-t borer-white"
};
var _hoisted_2 = {
  "class": "flex gap-2"
};
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "flex flex-col text-white"
};
var _hoisted_6 = {
  key: 0,
  "class": "flex gap-2"
};
var _hoisted_7 = {
  "class": "w-10 h-10 flex items-center bg-white rounded-full justify-center"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-comment-alt text-purple-800"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-ellipsis-v text-purple-800"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_9];
var _hoisted_11 = {
  key: 1,
  "class": "flex gap-2"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-check text-green-500"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times text-red-500"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = {
  key: 2,
  "class": "w-auto absolute flex flex-col justify-center gap-3 p-2 h-auto bg-white right-4 top-full w-40 h-24 rounded-2xl z-20"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavLink");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "object-cover h-12 border border-gray-300 w-12 rounded-full",
    width: "100",
    height: "100",
    src: $data.friendData.profilePicture ? $data.friendData.profilePicture : '/Uploads/Profiles/profile.jpeg',
    alt: "user profile picture"
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.friendData.email), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUserOnlineVisibility), 1
  /* TEXT */
  )])]), _ctx.getFriendsListType !== 'pending' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavLink, {
    notNavbarLink: true,
    href: "/chat",
    onClick: $options.setNewChatUser
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleOptionsPopup && $options.toggleOptionsPopup.apply($options, arguments);
    }),
    "class": "w-10 h-10 flex items-center bg-white rounded-full justify-center"
  }, _hoisted_10)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.acceptFriendRequest && $options.acceptFriendRequest.apply($options, arguments);
    }),
    "class": "w-10 h-10 flex items-center bg-white rounded-full justify-center"
  }, _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.rejectFriendRequest && $options.rejectFriendRequest.apply($options, arguments);
    }),
    "class": "w-10 h-10 flex bg-white rounded-full items-center justify-center"
  }, _hoisted_15)])), $options.usersPopupIsOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.removeFriend && $options.removeFriend.apply($options, arguments);
    }),
    "class": "text-yellow-500 cursor-pointer p-2 transition-all duration-300 rounded-2xl hover:bg-yellow-500 hover:text-white"
  }, "Vriend verwijderen"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.blockFriend && $options.blockFriend.apply($options, arguments);
    }),
    "class": "text-red-500 cursor-pointer p-2 transition-all duration-300 rounded-2xl hover:bg-red-500 hover:text-white"
  }, "Vriend Blokkeren")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Friend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Friend");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.friends, function (friend) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Friend, {
      key: friend.uid,
      friend: friend
    }, null, 8
    /* PROPS */
    , ["friend"]);
  }), 128
  /* KEYED_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Friend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Friend");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.friends, function (friend) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Friend, {
      key: friend.uid,
      friend: friend
    }, null, 8
    /* PROPS */
    , ["friend"]);
  }), 128
  /* KEYED_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Friend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Friend");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.friends, function (friend) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Friend, {
      key: friend.uid,
      friend: friend
    }, null, 8
    /* PROPS */
    , ["friend"]);
  }), 128
  /* KEYED_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Friend = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Friend");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.friends, function (friend) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Friend, {
      key: friend.uid,
      friend: friend
    }, null, 8
    /* PROPS */
    , ["friend"]);
  }), 128
  /* KEYED_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex px-4 w-full h-12 border-b-2 border-white"
};
var _hoisted_2 = {
  "class": "my-auto flex gap-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-white py-0.5 px-1 rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Friends |")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex gap-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Online", -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "All", -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Pending", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Blocked", -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add Friend", -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.typeClickHandler('online');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-green-500': _ctx.getFriendsListType === 'online'
    }, "cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded"])
  }, _hoisted_6, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.typeClickHandler('all');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.getFriendsListType === 'all' ? 'bg-white' : 'text-white', "cursor-pointer py-0.5 w-20 text-center px-1 rounded"])
  }, _hoisted_8, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.typeClickHandler('pending');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-yellow-500': _ctx.getFriendsListType === 'pending'
    }, "relative cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded"])
  }, [_hoisted_9, _ctx.getNewPendingRequests ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.getFriendsListType === 'pending' ? 'bg-white text-yellow-500' : 'bg-yellow-500 text-white', "w-4 absolute h-4 top-0 right-0 rounded-full text-xs"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getPendingRequests), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.typeClickHandler('blocked');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-red-500': _ctx.getFriendsListType === 'blocked'
    }, "cursor-pointer w-20 text-center text-white py-0.5 px-1 rounded"])
  }, _hoisted_11, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.addFriendHandler && $options.addFriendHandler.apply($options, arguments);
    }),
    "class": "bg-green-500 cursor-pointer w-28 text-center text-white py-0.5 px-1 rounded"
  }, _hoisted_13)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-center items-center bg-white w-full h-screen text-black"
};
var _hoisted_2 = ["aria-valuenow"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gradient-to-br from-blue-800 to-purple-700 rounded-full h-6 mt-5 h/12 w-2/4",
    role: "progressbar",
    "aria-valuenow": $data.progressStatus,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-white border-blue-800 border-4 rounded-full h-6 text-center text-sm transition",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width: ".concat($data.progressStatus, "%; transition: width 2s;"))
  }, null, 4
  /* STYLE */
  )], 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CurrentChat = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CurrentChat");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CurrentChat);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col w-full"
};
var _hoisted_2 = {
  "class": "py-4 px-8"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FriendsNavbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FriendsNavbar");

  var _component_AddFriends = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddFriends");

  var _component_All = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("All");

  var _component_Online = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Online");

  var _component_Pending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pending");

  var _component_Blocked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Blocked");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FriendsNavbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.getAddFriends ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddFriends)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [_ctx.getFriendsListType === 'all' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_All, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.getFriendsListType === 'online' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Online, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.getFriendsListType === 'pending' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Pending, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.getFriendsListType === 'blocked' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Blocked, {
    key: 3
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6bf30086"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "bg-gradient-to-br from-blue-800 to-purple-700"
};
var _hoisted_2 = {
  "class": "flex h-full layout-wrapper"
};
var _hoisted_3 = {
  key: 1,
  "class": "absolute top-0 left-0 w-screen"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navbar");

  var _component_ContactSideBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ContactSideBar");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  var _component_ChatPreRender = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatPreRender");

  var _component_Login = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Login");

  var _component_Register = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Register");

  var _component_AuthLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AuthLayout");

  return !_ctx.getPageIsLoading && _ctx.getUserIsLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ContactSideBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AuthLayout, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.getPageIsLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ChatPreRender, {
        key: 0
      })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [_ctx.getAuthType ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Login, {
        key: 0
      })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Register, {
        key: 1
      }))], 2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'text-white transition relative duration-300 rounded-xl py-2 px-12 font-bold hover:underline hover:bg-white hover:text-blue-800': !$props.notNavbarLink,
      'font-bold underline': $props.active
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-16 w-full bg-transparent flex justify-between items-center border-b-4 border-white"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ml-4 font-bold text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "logo-text"
}, "VueChat.ef2")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex mr-6"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Chat");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Friends", -1
/* HOISTED */
);

var _hoisted_6 = {
  key: 0,
  "class": "w-4 absolute h-4 bg-yellow-500 top-1 flex items-center justify-center right-9 rounded-full text-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavLink");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavLink, {
    href: "/chat",
    active: _ctx.$page.component === 'Chat'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["active"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavLink, {
    href: "/friends",
    active: _ctx.$page.component === 'Friends'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5, _ctx.getNewPendingRequests ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getPendingRequests), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["active"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <NavLink href=\"/logout\" method=\"post\" as=\"button\">Logout</NavLink>")])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _server_Store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/Store/store */ "./resources/js/server/Store/store.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var vue3_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue3-perfect-scrollbar */ "./node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.umd.js");
/* harmony import */ var vue3_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue3_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue3_perfect_scrollbar_dist_vue3_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css */ "./node_modules/vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");








(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name))["default"];

              if (name !== 'PreRender') {
                page.layout = _Shared_Layout__WEBPACK_IMPORTED_MODULE_5__["default"];
              }

              return _context.abrupt("return", page);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(App, props);
      }
    }).use(plugin).use(_server_Store_store__WEBPACK_IMPORTED_MODULE_2__["default"]).use((vue3_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default())).component('Link', _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Head).mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init({
  color: "red",
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/server/Store/store.js":
/*!********************************************!*\
  !*** ./resources/js/server/Store/store.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");

var store = new vuex__WEBPACK_IMPORTED_MODULE_0__.createStore({
  state: function state() {
    return {
      currentUser: null,
      pageLoading: true,
      authTypeLogin: true,
      users: [],
      chat: {
        user: null,
        chatKey: null,
        activeChatKey: null
      },
      friends: {
        addFriends: false,
        listType: 'online',
        pendingRequests: 0,
        popup: {
          user_uid: null
        }
      }
    };
  },
  getters: {
    getUserIsLoggedIn: function getUserIsLoggedIn(state) {
      return !_.isNil(state.currentUser);
    },
    getFriendPopupUser: function getFriendPopupUser(state) {
      return state.friends.popup.user_uid;
    },
    getActiveChatKey: function getActiveChatKey(state) {
      return state.chat.activeChatKey;
    },
    getNewPendingRequests: function getNewPendingRequests(state) {
      return state.friends.pendingRequests > 0;
    },
    getPendingRequests: function getPendingRequests(state) {
      return state.friends.pendingRequests;
    },
    getFriendsListType: function getFriendsListType(state) {
      return state.friends.listType;
    },
    getAddFriends: function getAddFriends(state) {
      return state.friends.addFriends;
    },
    getPageIsLoading: function getPageIsLoading(state) {
      return state.pageLoading;
    },
    getNewChatUser: function getNewChatUser(state) {
      return state.chat.user;
    },
    getCurrentChatKey: function getCurrentChatKey(state) {
      return state.chat.chatKey;
    },
    getUserHasChat: function getUserHasChat(state) {
      return !_.isNil(state.chat.user);
    },
    getCurrentUser: function getCurrentUser(state) {
      return state.currentUser;
    },
    getAllUsers: function getAllUsers(state) {
      return state.users;
    },
    getAuthType: function getAuthType(state) {
      return state.authTypeLogin;
    }
  },
  mutations: {
    SET_CURRENT_USER: function SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    SET_AUTH_TYPE: function SET_AUTH_TYPE(state) {
      state.authTypeLogin = !state.authTypeLogin;
    },
    SET_PAGE_STATUS: function SET_PAGE_STATUS(state) {
      state.pageLoading = !state.pageLoading;
    },
    SET_ALL_USERS: function SET_ALL_USERS(state, users) {
      state.users = users;
    },
    SET_NEW_CHAT: function SET_NEW_CHAT(state, user) {
      state.chat.user = user;
    },
    SET_NEW_CHAT_KEY: function SET_NEW_CHAT_KEY(state, chatKey) {
      state.chat.chatKey = chatKey;
    },
    SET_CHAT_STOP: function SET_CHAT_STOP(state) {
      state.chat = {};
    },
    SET_ADD_FRIENDS: function SET_ADD_FRIENDS(state) {
      state.friends.addFriends = !state.friends.addFriends;
    },
    SET_FRIENDS_LIST_TYPE: function SET_FRIENDS_LIST_TYPE(state, type) {
      state.friends.listType = type;
    },
    SET_PENDING_REQUESTS: function SET_PENDING_REQUESTS(state, amount) {
      state.friends.pendingRequests = amount;
    },
    SET_ACTIVE_CHAT_KEY: function SET_ACTIVE_CHAT_KEY(state, key) {
      state.chat.activeChatKey = key;
    },
    SET_FRIEND_POPUP_USER: function SET_FRIEND_POPUP_USER(state, user) {
      state.friends.popup.user_uid = user;
    }
  },
  actions: {
    setCurrentUser: function setCurrentUser(_ref, user) {
      var commit = _ref.commit;
      commit('SET_CURRENT_USER', user);
    },
    setActiveChatKey: function setActiveChatKey(_ref2, key) {
      var commit = _ref2.commit;
      commit('SET_ACTIVE_CHAT_KEY', key);
    },
    setAuthType: function setAuthType(_ref3) {
      var commit = _ref3.commit;
      commit('SET_AUTH_TYPE');
    },
    setPageLoadingStatus: function setPageLoadingStatus(_ref4) {
      var commit = _ref4.commit;
      commit('SET_PAGE_STATUS');
    },
    setAllUsers: function setAllUsers(_ref5, users) {
      var commit = _ref5.commit;
      commit('SET_ALL_USERS', users);
    },
    setNewChat: function setNewChat(_ref6, user) {
      var commit = _ref6.commit;
      commit('SET_NEW_CHAT', user);
    },
    setNewChatKey: function setNewChatKey(_ref7, chatKey) {
      var commit = _ref7.commit;
      commit('SET_NEW_CHAT_KEY', chatKey);
    },
    setChatStop: function setChatStop(_ref8) {
      var commit = _ref8.commit;
      commit('SET_CHAT_STOP');
    },
    setAddFriends: function setAddFriends(_ref9) {
      var commit = _ref9.commit;
      commit('SET_ADD_FRIENDS');
    },
    setFriendsListType: function setFriendsListType(_ref10, type) {
      var commit = _ref10.commit;
      commit('SET_FRIENDS_LIST_TYPE', type);
    },
    setPendingRequests: function setPendingRequests(_ref11, amount) {
      var commit = _ref11.commit;
      commit('SET_PENDING_REQUESTS', amount);
    },
    setFriendPopupUser: function setFriendPopupUser(_ref12, user) {
      var commit = _ref12.commit;
      commit('SET_FRIEND_POPUP_USER', user);
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./resources/js/server/database.js":
/*!*****************************************!*\
  !*** ./resources/js/server/database.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/database */ "./node_modules/firebase/compat/database/dist/index.esm.js");


var config = {
  apiKey: "AIzaSyC1xt-XCXd5gD6Or_G2BtuUnwy0MbCzG8Q",
  authDomain: "vuechat-ae452.firebaseapp.com",
  databaseURL: "https://vuechat-ae452-default-rtdb.firebaseio.com",
  projectId: "vuechat-ae452",
  storageBucket: "vuechat-ae452.appspot.com",
  messagingSenderId: "499559166168",
  appId: "1:499559166168:web:8db679239e7880f2a2a7ad",
  measurementId: "G-R3QE5P9F86"
};
var db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(config);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./resources/js/server/firebaseChat.js":
/*!*********************************************!*\
  !*** ./resources/js/server/firebaseChat.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "hasChat": () => (/* binding */ hasChat),
/* harmony export */   "hasExistingConnection": () => (/* binding */ hasExistingConnection),
/* harmony export */   "addAsFriend": () => (/* binding */ addAsFriend),
/* harmony export */   "removeFriend": () => (/* binding */ removeFriend),
/* harmony export */   "blockFriend": () => (/* binding */ blockFriend),
/* harmony export */   "getPendingRequests": () => (/* binding */ getPendingRequests),
/* harmony export */   "getFriendRequestKey": () => (/* binding */ getFriendRequestKey),
/* harmony export */   "rejectFriendRequest": () => (/* binding */ rejectFriendRequest),
/* harmony export */   "addNewChat": () => (/* binding */ addNewChat),
/* harmony export */   "createNewChat": () => (/* binding */ createNewChat),
/* harmony export */   "stopActiveChat": () => (/* binding */ stopActiveChat),
/* harmony export */   "getActiveChatKey": () => (/* binding */ getActiveChatKey),
/* harmony export */   "getChatKey": () => (/* binding */ getChatKey),
/* harmony export */   "markMessagesAsRead": () => (/* binding */ markMessagesAsRead),
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "logUserIn": () => (/* binding */ logUserIn),
/* harmony export */   "logUserInGoogle": () => (/* binding */ logUserInGoogle),
/* harmony export */   "addUserToRLDb": () => (/* binding */ addUserToRLDb),
/* harmony export */   "userExists": () => (/* binding */ userExists),
/* harmony export */   "getUserByEmail": () => (/* binding */ getUserByEmail),
/* harmony export */   "userIsAlreadyFriended": () => (/* binding */ userIsAlreadyFriended),
/* harmony export */   "userHasOnlineStatus": () => (/* binding */ userHasOnlineStatus),
/* harmony export */   "getUserOnlineStatusKey": () => (/* binding */ getUserOnlineStatusKey),
/* harmony export */   "getUserOnlineStatus": () => (/* binding */ getUserOnlineStatus),
/* harmony export */   "getUserData": () => (/* binding */ getUserData),
/* harmony export */   "updateUserOnlineVisibility": () => (/* binding */ updateUserOnlineVisibility),
/* harmony export */   "useAuth": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./resources/js/server/database.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();
var usersRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('users');
var messagesRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('messages');
var chatsRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats');
var activeChatsRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('activeChats');
var usersVRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('onlineStatus');
var friendRequestsRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('friendRequests'); //Chat functions

function sendMessage(_x, _x2, _x3, _x4) {
  return _sendMessage.apply(this, arguments);
}

function _sendMessage() {
  _sendMessage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(chatter_id, chatKey, message, message_seen) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            messagesRef.push({
              chatter_id: chatter_id,
              chatKey: chatKey,
              message: message,
              message_seen: message_seen,
              timestamp: "".concat(new Date().toTimeString().substr(0, 5))
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendMessage.apply(this, arguments);
}

function hasChat(_x5) {
  return _hasChat.apply(this, arguments);
}

function _hasChat() {
  _hasChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(chatKey) {
    var snapshotExists;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            snapshotExists = false;
            _context3.next = 3;
            return chatsRef.orderByChild('chatKey').equalTo(chatKey).once('value', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (snapshot.exists()) {
                          snapshotExists = true;
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x48) {
                return _ref.apply(this, arguments);
              };
            }());

          case 3:
            return _context3.abrupt("return", snapshotExists);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _hasChat.apply(this, arguments);
}

function hasExistingConnection(_x6, _x7, _x8) {
  return _hasExistingConnection.apply(this, arguments);
} //TODO Check if receiver_id has blocked current user

function _hasExistingConnection() {
  _hasExistingConnection = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(chatKey, receiver_id, chatter_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            response = false;
            _context4.next = 3;
            return activeChatsRef.orderByChild('chatKey').equalTo(chatKey).once('value', function (snapshot) {
              _.forEach(snapshot.val(), function (chat) {
                if (chat.chatter_id === chatter_id && chat.receiver_id === receiver_id) {
                  response = true;
                }
              });
            });

          case 3:
            return _context4.abrupt("return", response);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _hasExistingConnection.apply(this, arguments);
}

function addAsFriend(_x9, _x10) {
  return _addAsFriend.apply(this, arguments);
}

function _addAsFriend() {
  _addAsFriend = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(chatter_id, receiver_id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return userIsAlreadyFriended(chatter_id, receiver_id);

          case 2:
            _context5.t0 = _context5.sent;

            if (!(_context5.t0 === 'AlreadyFriended')) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", 'AlreadyFriended');

          case 5:
            friendRequestsRef.push({
              chatter_id: chatter_id,
              receiver_id: receiver_id
            });
            return _context5.abrupt("return", 'AddedAsFriend');

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _addAsFriend.apply(this, arguments);
}

function removeFriend(_x11, _x12) {
  return _removeFriend.apply(this, arguments);
}

function _removeFriend() {
  _removeFriend = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(chatter_id, receiver_id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return chatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              if (snapshot.exists()) {
                _.forEach(snapshot.val(), /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(friend, key) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!(friend.receiver_id === receiver_id)) {
                              _context6.next = 5;
                              break;
                            }

                            console.log('removeFriend');
                            console.log(friend);
                            _context6.next = 5;
                            return chatsRef.child(key).set(null);

                          case 5:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x49, _x50) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }
            });

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _removeFriend.apply(this, arguments);
}

function blockFriend(_x13, _x14) {
  return _blockFriend.apply(this, arguments);
}

function _blockFriend() {
  _blockFriend = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(chatter_id, receiver_id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return chatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              if (snapshot.exists()) {
                _.forEach(snapshot.val(), function (chat, key) {
                  if (chat.receiver_id === receiver_id && !chat.blocked) {
                    chatsRef.child(key).update({
                      blocked: true
                    });
                  }
                });
              }
            });

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _blockFriend.apply(this, arguments);
}

function getPendingRequests(_x15) {
  return _getPendingRequests.apply(this, arguments);
}

function _getPendingRequests() {
  _getPendingRequests = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(chatter_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            response = 0;
            _context9.next = 3;
            return friendRequestsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              if (snapshot.exists()) {
                response = Object.keys(snapshot.val()).length;
              }
            });

          case 3:
            return _context9.abrupt("return", response);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getPendingRequests.apply(this, arguments);
}

function getFriendRequestKey(_x16, _x17) {
  return _getFriendRequestKey.apply(this, arguments);
}

function _getFriendRequestKey() {
  _getFriendRequestKey = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(chatter_id, receiver_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return friendRequestsRef.orderByChild('chatter_id').equalTo(receiver_id).once('value', function (snapshot) {
              console.log(snapshot.val());

              _.forEach(snapshot.val(), function (request, key) {
                if (request.receiver_id === chatter_id) {
                  response = key;
                }
              });
            });

          case 2:
            return _context10.abrupt("return", response);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _getFriendRequestKey.apply(this, arguments);
}

function rejectFriendRequest(_x18, _x19) {
  return _rejectFriendRequest.apply(this, arguments);
}

function _rejectFriendRequest() {
  _rejectFriendRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(chatter_id, receiver_id) {
    var requestKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return getFriendRequestKey(chatter_id, receiver_id);

          case 2:
            requestKey = _context11.sent;
            _context11.next = 5;
            return friendRequestsRef.child(requestKey).set(null);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _rejectFriendRequest.apply(this, arguments);
}

function addNewChat(_x20, _x21) {
  return _addNewChat.apply(this, arguments);
} //Create new active chat

function _addNewChat() {
  _addNewChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(chatter_id, receiver_id) {
    var requestKey, newChat;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return getFriendRequestKey(chatter_id, receiver_id);

          case 2:
            requestKey = _context12.sent;
            _context12.next = 5;
            return friendRequestsRef.child(requestKey).set(null);

          case 5:
            newChat = chatsRef.push({
              chatter_id: chatter_id,
              receiver_id: receiver_id,
              blocked: false
            });
            _context12.next = 8;
            return chatsRef.child(newChat.key).update({
              'chatKey': newChat.key
            });

          case 8:
            chatsRef.push({
              chatter_id: receiver_id,
              receiver_id: chatter_id,
              chatKey: newChat.key,
              blocked: false
            });
            return _context12.abrupt("return", 'AddedAsFriend');

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _addNewChat.apply(this, arguments);
}

function createNewChat(_x22, _x23, _x24) {
  return _createNewChat.apply(this, arguments);
}

function _createNewChat() {
  _createNewChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(chatter_id, receiver_id, chatKey) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return stopActiveChat(chatter_id);

          case 2:
            _context13.next = 4;
            return activeChatsRef.push({
              chatter_id: chatter_id,
              receiver_id: receiver_id,
              chatKey: chatKey
            });

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _createNewChat.apply(this, arguments);
}

function stopActiveChat(_x25) {
  return _stopActiveChat.apply(this, arguments);
}

function _stopActiveChat() {
  _stopActiveChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(chatter_id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return activeChatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              _.forEach(snapshot.val(), function (chat, key) {
                activeChatsRef.child(key).set(null);
              });
            });

          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _stopActiveChat.apply(this, arguments);
}

function getActiveChatKey(_x26, _x27) {
  return _getActiveChatKey.apply(this, arguments);
}

function _getActiveChatKey() {
  _getActiveChatKey = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16(chatKey, chatter_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            response = null;
            _context16.next = 3;
            return activeChatsRef.orderByChild('chatKey').equalTo(chatKey).once('value', function (snapshot) {
              if (snapshot.exists()) {
                _.forEach(snapshot.val(), /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15(chat, key) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            if (chat.chatter_id === chatter_id) {
                              response = key;
                            }

                          case 1:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x51, _x52) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }
            });

          case 3:
            return _context16.abrupt("return", response);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _getActiveChatKey.apply(this, arguments);
}

function getChatKey(_x28, _x29) {
  return _getChatKey.apply(this, arguments);
}

function _getChatKey() {
  _getChatKey = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18(chatter_id, receiver_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            response = null;
            _context18.next = 3;
            return chatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              _.forEach(snapshot.val(), /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17(chat, key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          if (chat.receiver_id === receiver_id) {
                            response = key;
                          }

                        case 1:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                }));

                return function (_x53, _x54) {
                  return _ref4.apply(this, arguments);
                };
              }());
            });

          case 3:
            return _context18.abrupt("return", response);

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _getChatKey.apply(this, arguments);
}

function markMessagesAsRead(_x30, _x31, _x32) {
  return _markMessagesAsRead.apply(this, arguments);
}

function _markMessagesAsRead() {
  _markMessagesAsRead = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21(user_uid, chatKey, current_user_uid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return messagesRef.orderByChild('chatKey').equalTo(chatKey).once('value', /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        _.forEach(snapshot.val(), /*#__PURE__*/function () {
                          var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19(value, key) {
                            var seenBy;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
                              while (1) {
                                switch (_context19.prev = _context19.next) {
                                  case 0:
                                    if (!(value.chatter_id === user_uid && !value.message_seen)) {
                                      _context19.next = 5;
                                      break;
                                    }

                                    seenBy = [];

                                    if (value.seen_by) {
                                      seenBy = [].concat(_toConsumableArray(value.seen_by), [current_user_uid]);
                                    } else {
                                      seenBy = [current_user_uid];
                                    }

                                    _context19.next = 5;
                                    return messagesRef.child(key).update({
                                      "seen_at": "".concat(new Date().toTimeString().substr(0, 5)),
                                      "message_seen": true,
                                      "seen_by": seenBy
                                    });

                                  case 5:
                                  case "end":
                                    return _context19.stop();
                                }
                              }
                            }, _callee19);
                          }));

                          return function (_x56, _x57) {
                            return _ref6.apply(this, arguments);
                          };
                        }());

                      case 1:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              }));

              return function (_x55) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 2:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _markMessagesAsRead.apply(this, arguments);
}

function createUser(_x33, _x34) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22(email, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            return _context22.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
              addUserToRLDb(userCredential.user);
              return userCredential;
            })["catch"](function (error) {
              return error;
            }));

          case 1:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));
  return _createUser.apply(this, arguments);
}

function logUserIn(_x35, _x36) {
  return _logUserIn.apply(this, arguments);
}

function _logUserIn() {
  _logUserIn = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee24(email, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            return _context24.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(auth, email, password).then( /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee23(userCredential) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        _context23.next = 2;
                        return updateUserOnlineVisibility(userCredential, 'online');

                      case 2:
                        return _context23.abrupt("return", userCredential);

                      case 3:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              }));

              return function (_x58) {
                return _ref7.apply(this, arguments);
              };
            }())["catch"](function (error) {
              return error;
            }));

          case 1:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));
  return _logUserIn.apply(this, arguments);
}

function logUserInGoogle() {
  return _logUserInGoogle.apply(this, arguments);
}

function _logUserInGoogle() {
  _logUserInGoogle = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee26() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            return _context26.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(auth, provider).then( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee25(result) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        _context25.next = 2;
                        return userExists(result.user.uid, result.user);

                      case 2:
                        return _context25.abrupt("return", result);

                      case 3:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              }));

              return function (_x59) {
                return _ref8.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.log(error);
              return error;
            }));

          case 1:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  return _logUserInGoogle.apply(this, arguments);
}

function addUserToRLDb(user) {
  usersRef.push({
    "username": user.displayName,
    "email": user.email,
    "phoneNumber": user.phoneNumber,
    "profilePicture": user.photoURL,
    "uid": user.uid
  });
}
function userExists(_x37, _x38) {
  return _userExists.apply(this, arguments);
}

function _userExists() {
  _userExists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee28(uid, user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return usersRef.orderByChild("uid").equalTo(uid).once('value', /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee27(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        if (!(!snapshot.exists() && user !== null)) {
                          _context27.next = 3;
                          break;
                        }

                        _context27.next = 3;
                        return addUserToRLDb(user);

                      case 3:
                        _context27.next = 5;
                        return updateUserOnlineVisibility(user, 'online');

                      case 5:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27);
              }));

              return function (_x60) {
                return _ref9.apply(this, arguments);
              };
            }());

          case 2:
            return _context28.abrupt("return", _context28.sent);

          case 3:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  return _userExists.apply(this, arguments);
}

function getUserByEmail(_x39) {
  return _getUserByEmail.apply(this, arguments);
}

function _getUserByEmail() {
  _getUserByEmail = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee30(email) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            response = 'DoesNotExists';
            _context30.next = 3;
            return usersRef.orderByChild('email').equalTo(email).once('value', function (snapshot) {
              if (snapshot.exists()) {
                _.forEach(snapshot.val(), /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee29(user) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee29$(_context29) {
                      while (1) {
                        switch (_context29.prev = _context29.next) {
                          case 0:
                            response = user.uid;

                          case 1:
                          case "end":
                            return _context29.stop();
                        }
                      }
                    }, _callee29);
                  }));

                  return function (_x61) {
                    return _ref10.apply(this, arguments);
                  };
                }());
              }
            });

          case 3:
            return _context30.abrupt("return", response);

          case 4:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));
  return _getUserByEmail.apply(this, arguments);
}

function userIsAlreadyFriended(_x40, _x41) {
  return _userIsAlreadyFriended.apply(this, arguments);
}

function _userIsAlreadyFriended() {
  _userIsAlreadyFriended = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee31(chatter_id, receiver_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            response = 'NotFriended';
            _context31.next = 3;
            return chatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', function (snapshot) {
              if (snapshot.exists()) {
                _.forEach(snapshot.val(), function (chat, key) {
                  if (chat.receiver_id === receiver_id) {
                    response = 'AlreadyFriended';
                  }
                });
              }
            });

          case 3:
            return _context31.abrupt("return", response);

          case 4:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));
  return _userIsAlreadyFriended.apply(this, arguments);
}

function userHasOnlineStatus(_x42) {
  return _userHasOnlineStatus.apply(this, arguments);
}

function _userHasOnlineStatus() {
  _userHasOnlineStatus = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee33(user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            if (!(!user || !user.uid)) {
              _context33.next = 2;
              break;
            }

            return _context33.abrupt("return", '');

          case 2:
            _context33.next = 4;
            return usersVRef.orderByChild('uid').equalTo(user.uid).once('value', /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee32(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee32$(_context32) {
                  while (1) {
                    switch (_context32.prev = _context32.next) {
                      case 0:
                        if (snapshot.exists()) {
                          _context32.next = 3;
                          break;
                        }

                        _context32.next = 3;
                        return usersVRef.push({
                          "uid": user.uid,
                          "online_visibility": new Date().getTime()
                        });

                      case 3:
                      case "end":
                        return _context32.stop();
                    }
                  }
                }, _callee32);
              }));

              return function (_x62) {
                return _ref11.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));
  return _userHasOnlineStatus.apply(this, arguments);
}

function getUserOnlineStatusKey(_x43) {
  return _getUserOnlineStatusKey.apply(this, arguments);
}

function _getUserOnlineStatusKey() {
  _getUserOnlineStatusKey = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee36(user) {
    var userKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            userKey = null;
            _context36.next = 3;
            return usersVRef.orderByChild("uid").equalTo(user.uid).once('value', /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee35(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee35$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        _.filter(snapshot.val(), /*#__PURE__*/function () {
                          var _ref13 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee34(value, key) {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee34$(_context34) {
                              while (1) {
                                switch (_context34.prev = _context34.next) {
                                  case 0:
                                    userKey = key;

                                  case 1:
                                  case "end":
                                    return _context34.stop();
                                }
                              }
                            }, _callee34);
                          }));

                          return function (_x64, _x65) {
                            return _ref13.apply(this, arguments);
                          };
                        }());

                      case 1:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee35);
              }));

              return function (_x63) {
                return _ref12.apply(this, arguments);
              };
            }());

          case 3:
            return _context36.abrupt("return", userKey);

          case 4:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));
  return _getUserOnlineStatusKey.apply(this, arguments);
}

function getUserOnlineStatus(_x44) {
  return _getUserOnlineStatus.apply(this, arguments);
}

function _getUserOnlineStatus() {
  _getUserOnlineStatus = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee38(user) {
    var snapshotVal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            if (!(!user || !user.uid)) {
              _context38.next = 2;
              break;
            }

            return _context38.abrupt("return", '');

          case 2:
            snapshotVal = {};
            _context38.next = 5;
            return userHasOnlineStatus(user);

          case 5:
            _context38.next = 7;
            return usersVRef.orderByChild('uid').equalTo(user.uid).once('value', /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee37(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        snapshotVal = snapshot.val();

                      case 1:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37);
              }));

              return function (_x66) {
                return _ref14.apply(this, arguments);
              };
            }());

          case 7:
            return _context38.abrupt("return", snapshotVal[Object.keys(snapshotVal)[0]].online_visibility);

          case 8:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));
  return _getUserOnlineStatus.apply(this, arguments);
}

function getUserData(_x45) {
  return _getUserData.apply(this, arguments);
}

function _getUserData() {
  _getUserData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee39(user_uid) {
    var userData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            userData = {};
            _context39.next = 3;
            return usersRef.orderByChild('uid').equalTo(user_uid).once('value', function (snapshot) {
              userData = snapshot.val();
            });

          case 3:
            _context39.next = 5;
            return userData[Object.keys(userData)[0]];

          case 5:
            return _context39.abrupt("return", _context39.sent);

          case 6:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  }));
  return _getUserData.apply(this, arguments);
}

function updateUserOnlineVisibility(_x46, _x47) {
  return _updateUserOnlineVisibility.apply(this, arguments);
}

function _updateUserOnlineVisibility() {
  _updateUserOnlineVisibility = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee41(user, appearance) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _context41.next = 2;
            return userHasOnlineStatus(user);

          case 2:
            _context41.next = 4;
            return usersVRef.orderByChild("uid").equalTo(user.uid).once("value", function (snapshot) {
              _.filter(snapshot.val(), /*#__PURE__*/function () {
                var _ref15 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee40(userValue, key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee40$(_context40) {
                    while (1) {
                      switch (_context40.prev = _context40.next) {
                        case 0:
                          _context40.next = 2;
                          return _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("onlineStatus/".concat(key)).set({
                            "uid": userValue.uid,
                            "online_visibility": appearance
                          });

                        case 2:
                        case "end":
                          return _context40.stop();
                      }
                    }
                  }, _callee40);
                }));

                return function (_x67, _x68) {
                  return _ref15.apply(this, arguments);
                };
              }());
            });

          case 4:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41);
  }));
  return _updateUserOnlineVisibility.apply(this, arguments);
}

function useAuth() {
  return auth;
} //user Logout

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.max-viewport-height[data-v-d863e990] {\n        height: calc(100vh - 4rem);\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.current-chat-main-section-newchat[data-v-3bac21c7] {\n        height: calc(100vh - 13rem);\n}\n.current-chat-main-section-no-new-chat[data-v-3bac21c7] {\n        height: calc(100vh - 4rem);\n}\n.current-chat-main-section[data-v-3bac21c7] {\n        height: 100%;\n}\n.user-profile-container[data-v-3bac21c7] {\n        transition: .5s ease-in-out;\n        width: 0;\n        overflow: hidden;\n}\n.user-profile-toggled[data-v-3bac21c7] {\n        width: 25%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-max-height[data-v-0ca66463] {\n        height: calc(100vh - 4rem);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.layout-wrapper[data-v-6bf30086] {\n        height: calc(100% - 4rem);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_style_index_0_id_d863e990_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_style_index_0_id_d863e990_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_style_index_0_id_d863e990_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_style_index_0_id_3bac21c7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_style_index_0_id_3bac21c7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_style_index_0_id_3bac21c7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_style_index_0_id_0ca66463_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_style_index_0_id_0ca66463_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_style_index_0_id_0ca66463_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_6bf30086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_6bf30086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_6bf30086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/Auth/AuthLayout.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/Auth/AuthLayout.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthLayout_vue_vue_type_template_id_2533bc44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=template&id=2533bc44 */ "./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44");
/* harmony import */ var _AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=script&lang=js */ "./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthLayout_vue_vue_type_template_id_2533bc44__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Auth/AuthLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_ff4220a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ff4220a6 */ "./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_ff4220a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Auth/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Auth/Register.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_66266e0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=66266e0f */ "./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_66266e0f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Auth/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactSideBar_vue_vue_type_template_id_d863e990_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true */ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true");
/* harmony import */ var _ContactSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSideBar.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js");
/* harmony import */ var _ContactSideBar_vue_vue_type_style_index_0_id_d863e990_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css */ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ContactSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ContactSideBar_vue_vue_type_template_id_d863e990_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d863e990"],['__file',"resources/js/Components/Chat/ContactSideBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/Search.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/Search.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_16f6652f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=16f6652f */ "./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_16f6652f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Chat/ContactSideBar/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/User.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/User.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_e2c2dcdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=e2c2dcdc */ "./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc");
/* harmony import */ var _User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_User_vue_vue_type_template_id_e2c2dcdc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Chat/ContactSideBar/User.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatUserTopBar_vue_vue_type_template_id_d383d48a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatUserTopBar.vue?vue&type=template&id=d383d48a */ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a");
/* harmony import */ var _ChatUserTopBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatUserTopBar.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ChatUserTopBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChatUserTopBar_vue_vue_type_template_id_d383d48a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Chat/currentChat/ChatUserTopBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/CurrentChat.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/CurrentChat.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CurrentChat_vue_vue_type_template_id_3bac21c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true */ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true");
/* harmony import */ var _CurrentChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentChat.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js");
/* harmony import */ var _CurrentChat_vue_vue_type_style_index_0_id_3bac21c7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css */ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CurrentChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CurrentChat_vue_vue_type_template_id_3bac21c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3bac21c7"],['__file',"resources/js/Components/Chat/currentChat/CurrentChat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserProfile_vue_vue_type_template_id_0ca66463_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=0ca66463&scoped=true */ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js");
/* harmony import */ var _UserProfile_vue_vue_type_style_index_0_id_0ca66463_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css */ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserProfile_vue_vue_type_template_id_0ca66463_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0ca66463"],['__file',"resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/newMessage.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/newMessage.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newMessage_vue_vue_type_template_id_e86e937e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newMessage.vue?vue&type=template&id=e86e937e */ "./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e");
/* harmony import */ var _newMessage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newMessage.vue?vue&type=script&lang=js */ "./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_newMessage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_newMessage_vue_vue_type_template_id_e86e937e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Chat/currentChat/newMessage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/AddFriends.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/AddFriends.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddFriends_vue_vue_type_template_id_de9274d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFriends.vue?vue&type=template&id=de9274d0 */ "./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0");
/* harmony import */ var _AddFriends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriends.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddFriends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddFriends_vue_vue_type_template_id_de9274d0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/AddFriends.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Friend.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Friend.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Friend_vue_vue_type_template_id_714bf39b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Friend.vue?vue&type=template&id=714bf39b */ "./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b");
/* harmony import */ var _Friend_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Friend.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Friend_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Friend_vue_vue_type_template_id_714bf39b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/Friend/Friend.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/All.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _All_vue_vue_type_template_id_27c95b9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=27c95b9a */ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a");
/* harmony import */ var _All_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./All.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_All_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_All_vue_vue_type_template_id_27c95b9a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/Friend/Lists/All.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blocked_vue_vue_type_template_id_cf766436__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocked.vue?vue&type=template&id=cf766436 */ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436");
/* harmony import */ var _Blocked_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocked.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Blocked_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Blocked_vue_vue_type_template_id_cf766436__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Online.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Online_vue_vue_type_template_id_af8ff02c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Online.vue?vue&type=template&id=af8ff02c */ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c");
/* harmony import */ var _Online_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Online.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Online_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Online_vue_vue_type_template_id_af8ff02c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/Friend/Lists/Online.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pending_vue_vue_type_template_id_efcaafe0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pending.vue?vue&type=template&id=efcaafe0 */ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0");
/* harmony import */ var _Pending_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pending.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pending_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pending_vue_vue_type_template_id_efcaafe0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/Components/Friend/Lists/Pending.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Friends/FriendsNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Components/Friends/FriendsNavbar.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FriendsNavbar_vue_vue_type_template_id_1e96e830__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FriendsNavbar.vue?vue&type=template&id=1e96e830 */ "./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830");
/* harmony import */ var _FriendsNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendsNavbar.vue?vue&type=script&lang=js */ "./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FriendsNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FriendsNavbar_vue_vue_type_template_id_1e96e830__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Friends/FriendsNavbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/base/ChatPreRender.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/base/ChatPreRender.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatPreRender_vue_vue_type_template_id_6d51f2a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatPreRender.vue?vue&type=template&id=6d51f2a4 */ "./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4");
/* harmony import */ var _ChatPreRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPreRender.vue?vue&type=script&lang=js */ "./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ChatPreRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChatPreRender_vue_vue_type_template_id_6d51f2a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/base/ChatPreRender.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Chat.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Chat.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_45e8c2fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=45e8c2fe */ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/Pages/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Chat_vue_vue_type_template_id_45e8c2fe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Chat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Friends.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Friends.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Friends_vue_vue_type_template_id_3b44cf7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Friends.vue?vue&type=template&id=3b44cf7c */ "./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c");
/* harmony import */ var _Friends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Friends.vue?vue&type=script&lang=js */ "./resources/js/Pages/Friends.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Friends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Friends_vue_vue_type_template_id_3b44cf7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Friends.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Footer/Footer.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/Footer/Footer.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_d5dac0fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=d5dac0fa */ "./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_d5dac0fa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Footer/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086_scoped_true_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _Layout_vue_vue_type_style_index_0_id_6bf30086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css */ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_6bf30086_scoped_true_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6bf30086"],['__file',"resources/js/Shared/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Navbar/NavLink.vue":
/*!************************************************!*\
  !*** ./resources/js/Shared/Navbar/NavLink.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_08708bfa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=08708bfa */ "./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js */ "./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavLink_vue_vue_type_template_id_08708bfa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Navbar/NavLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Navbar/Navbar.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/Navbar/Navbar.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_3c7531e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=3c7531e3 */ "./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_3c7531e3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Navbar/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactSideBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./User.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatUserTopBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatUserTopBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChatUserTopBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrentChat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_newMessage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_newMessage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./newMessage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFriends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFriends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddFriends.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friend_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friend_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Friend.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_All_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_All_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./All.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blocked_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blocked_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blocked.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Online_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Online_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Online.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pending_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pending_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pending.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendsNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendsNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FriendsNavbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatPreRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatPreRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChatPreRender.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Chat.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Friends.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Friends.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friends_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Friends.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_2533bc44__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_2533bc44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=template&id=2533bc44 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/AuthLayout.vue?vue&type=template&id=2533bc44");


/***/ }),

/***/ "./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ff4220a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ff4220a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=ff4220a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Login.vue?vue&type=template&id=ff4220a6");


/***/ }),

/***/ "./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_66266e0f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_66266e0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=66266e0f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Auth/Register.vue?vue&type=template&id=66266e0f");


/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_template_id_d863e990_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_template_id_d863e990_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=template&id=d863e990&scoped=true");


/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_16f6652f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_16f6652f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=16f6652f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/Search.vue?vue&type=template&id=16f6652f");


/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_template_id_e2c2dcdc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_User_vue_vue_type_template_id_e2c2dcdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./User.vue?vue&type=template&id=e2c2dcdc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar/User.vue?vue&type=template&id=e2c2dcdc");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatUserTopBar_vue_vue_type_template_id_d383d48a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatUserTopBar_vue_vue_type_template_id_d383d48a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChatUserTopBar.vue?vue&type=template&id=d383d48a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue?vue&type=template&id=d383d48a");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_template_id_3bac21c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_template_id_3bac21c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=template&id=3bac21c7&scoped=true");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_template_id_0ca66463_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_template_id_0ca66463_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=template&id=0ca66463&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=template&id=0ca66463&scoped=true");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_newMessage_vue_vue_type_template_id_e86e937e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_newMessage_vue_vue_type_template_id_e86e937e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./newMessage.vue?vue&type=template&id=e86e937e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/newMessage.vue?vue&type=template&id=e86e937e");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFriends_vue_vue_type_template_id_de9274d0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddFriends_vue_vue_type_template_id_de9274d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddFriends.vue?vue&type=template&id=de9274d0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/AddFriends.vue?vue&type=template&id=de9274d0");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friend_vue_vue_type_template_id_714bf39b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friend_vue_vue_type_template_id_714bf39b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Friend.vue?vue&type=template&id=714bf39b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Friend.vue?vue&type=template&id=714bf39b");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_All_vue_vue_type_template_id_27c95b9a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_All_vue_vue_type_template_id_27c95b9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./All.vue?vue&type=template&id=27c95b9a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/All.vue?vue&type=template&id=27c95b9a");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blocked_vue_vue_type_template_id_cf766436__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blocked_vue_vue_type_template_id_cf766436__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blocked.vue?vue&type=template&id=cf766436 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Blocked.vue?vue&type=template&id=cf766436");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Online_vue_vue_type_template_id_af8ff02c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Online_vue_vue_type_template_id_af8ff02c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Online.vue?vue&type=template&id=af8ff02c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Online.vue?vue&type=template&id=af8ff02c");


/***/ }),

/***/ "./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pending_vue_vue_type_template_id_efcaafe0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pending_vue_vue_type_template_id_efcaafe0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pending.vue?vue&type=template&id=efcaafe0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/Components/Friend/Lists/Pending.vue?vue&type=template&id=efcaafe0");


/***/ }),

/***/ "./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendsNavbar_vue_vue_type_template_id_1e96e830__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FriendsNavbar_vue_vue_type_template_id_1e96e830__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FriendsNavbar.vue?vue&type=template&id=1e96e830 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Friends/FriendsNavbar.vue?vue&type=template&id=1e96e830");


/***/ }),

/***/ "./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatPreRender_vue_vue_type_template_id_6d51f2a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChatPreRender_vue_vue_type_template_id_6d51f2a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChatPreRender.vue?vue&type=template&id=6d51f2a4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/base/ChatPreRender.vue?vue&type=template&id=6d51f2a4");


/***/ }),

/***/ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_45e8c2fe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_45e8c2fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=template&id=45e8c2fe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe");


/***/ }),

/***/ "./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friends_vue_vue_type_template_id_3b44cf7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Friends_vue_vue_type_template_id_3b44cf7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Friends.vue?vue&type=template&id=3b44cf7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Friends.vue?vue&type=template&id=3b44cf7c");


/***/ }),

/***/ "./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_d5dac0fa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_d5dac0fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=d5dac0fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Footer/Footer.vue?vue&type=template&id=d5dac0fa");


/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086_scoped_true_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086_scoped_true_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&class=overflow-y-hidden");


/***/ }),

/***/ "./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa":
/*!******************************************************************************!*\
  !*** ./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_08708bfa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLink_vue_vue_type_template_id_08708bfa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLink.vue?vue&type=template&id=08708bfa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/NavLink.vue?vue&type=template&id=08708bfa");


/***/ }),

/***/ "./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_3c7531e3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_3c7531e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=3c7531e3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Navbar/Navbar.vue?vue&type=template&id=3c7531e3");


/***/ }),

/***/ "./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ContactSideBar_vue_vue_type_style_index_0_id_d863e990_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/ContactSideBar.vue?vue&type=style&index=0&id=d863e990&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CurrentChat_vue_vue_type_style_index_0_id_3bac21c7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/CurrentChat.vue?vue&type=style&index=0&id=3bac21c7&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserProfile_vue_vue_type_style_index_0_id_0ca66463_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Chat/currentChat/UserProfile/UserProfile.vue?vue&type=style&index=0&id=0ca66463&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_style_index_0_id_6bf30086_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Chat": "./resources/js/Pages/Chat.vue",
	"./Chat.vue": "./resources/js/Pages/Chat.vue",
	"./Friends": "./resources/js/Pages/Friends.vue",
	"./Friends.vue": "./resources/js/Pages/Friends.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);