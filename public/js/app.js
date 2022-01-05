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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      return this.canRegister = this.email.match(regex);
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

                _this2.form.loginFailed = true;
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
/* harmony import */ var _ContactSideBar_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactSideBar/User */ "./resources/js/Components/Chat/ContactSideBar/User.vue");
/* harmony import */ var _ContactSideBar_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSideBar/Search */ "./resources/js/Components/Chat/ContactSideBar/Search.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactSideBar",
  components: {
    Search: _ContactSideBar_Search__WEBPACK_IMPORTED_MODULE_1__["default"],
    User: _ContactSideBar_User__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      filterWord: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['getAllUsers'])), {}, {
    allUsers: function allUsers() {
      var _this = this;

      return _.filter(this.getAllUsers, function (user) {
        return _.includes(user.email.toLowerCase(), _this.filterWord.toLowerCase());
      });
    },
    hasUsers: function hasUsers() {
      return !_.isEmpty(this.allUsers);
    }
  }),
  methods: {
    searchInUsers: function searchInUsers(keyword) {
      this.filterWord = keyword;
    }
  }
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "User",
  props: ["user"],
  data: function data() {
    return {
      userStatus: 'online'
    };
  },
  computed: {
    hasNewMessages: function hasNewMessages() {
      return Math.round(Math.random()) > 0;
    },
    getNewMessageAmount: function getNewMessageAmount() {
      return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    },
    hasChatWithUser: function hasChatWithUser() {
      return this.$store.state.newChatUser;
    },
    userIsSelected: function userIsSelected() {
      return this.$store.state.newChatUser !== null;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['setCurrentUser', 'setNewChat'])), {}, {
    startNewChat: function startNewChat() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_this.user);
                _context.t0 = console;
                _context.next = 4;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.getUserOnlineStatus)(_this.user);

              case 4:
                _context.t1 = _context.sent;

                _context.t0.log.call(_context.t0, _context.t1);

                _this.setNewChat(_objectSpread({}, _this.user));

                _context.next = 9;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_1__.markMessagesAsRead)(_this.$store.state.currentUser.uid, _this.user.uid);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChatUserTopBar",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['getNewChatUser']))
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _newMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newMessage */ "./resources/js/Components/Chat/currentChat/newMessage.vue");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _ChatUserTopBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatUserTopBar */ "./resources/js/Components/Chat/currentChat/ChatUserTopBar.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CurrentChat",
  components: {
    ChatUserTopBar: _ChatUserTopBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    NewMessage: _newMessage__WEBPACK_IMPORTED_MODULE_2__["default"],
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  data: function data() {
    return {
      messages: null,
      fetchMessages: false,
      hasChatConnection: false,
      showNewMessageShort: true
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var messageEvent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              messageEvent = _server_database__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('messages');
              messageEvent.on('value', function (snapshot) {
                _this.messages = snapshot.val();

                _this.scrollToBottom();
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(['getNewChatUser', 'getCurrentUser'])), {}, {
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
                if (!_this2.getNewChatUser) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 5;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.startNewChat)(_this2.getCurrentUser.uid, _this2.getNewChatUser.uid);

              case 5:
                _context2.next = 7;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.markMessagesAsRead)(_this2.getCurrentUser.uid, _this2.getNewChatUser.uid);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), 1);
      return !_.isNil(this.getNewChatUser);
    }
  }),
  unmounted: function unmounted() {
    this.setChatStop();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)(['setChatStop'])), {}, {
    sendNewMessageEvent: function sendNewMessageEvent(message) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.hasChat)(_this3.getNewChatUser.uid, _this3.getCurrentUser.uid);

              case 2:
                _this3.hasChatConnection = _context3.sent;
                _context3.next = 5;
                return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(_this3.getNewChatUser.uid, _this3.getCurrentUser.uid, 1, message, _this3.hasChatConnection);

              case 5:
                _context3.next = 7;
                return _this3.scrollToBottom();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
/* harmony import */ var _Components_Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Auth/AuthLayout */ "./resources/js/Components/Auth/AuthLayout.vue");
/* harmony import */ var _Components_base_ChatPreRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/base/ChatPreRender */ "./resources/js/Components/base/ChatPreRender.vue");
/* harmony import */ var _Components_Auth_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Auth/Register */ "./resources/js/Components/Auth/Register.vue");
/* harmony import */ var _Components_Auth_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Auth/Login */ "./resources/js/Components/Auth/Login.vue");
/* harmony import */ var _server_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/database */ "./resources/js/server/database.js");
/* harmony import */ var _server_firebaseChat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/firebaseChat */ "./resources/js/server/firebaseChat.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Chat",
  components: {
    Register: _Components_Auth_Register__WEBPACK_IMPORTED_MODULE_5__["default"],
    Login: _Components_Auth_Login__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChatPreRender: _Components_base_ChatPreRender__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthLayout: _Components_Auth_AuthLayout__WEBPACK_IMPORTED_MODULE_3__["default"],
    CurrentChat: _Components_Chat_currentChat_CurrentChat__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContactSideBar: _Components_Chat_ContactSideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['getUserIsLoggedIn', 'getPageIsLoading', 'getCurrentUser', 'getAuthType'])),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var self;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = _this;

              window.onbeforeunload = function (e) {
                self.leaving();
              };

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _server_database__WEBPACK_IMPORTED_MODULE_7__["default"].database().ref('users').on("value", function (snapshot) {
                _this2.setAllUsers(snapshot.val());
              });

            case 2:
              if (!_this2.userIsLoggedIn) {
                _context2.next = 10;
                break;
              }

              _context2.t0 = _server_database__WEBPACK_IMPORTED_MODULE_7__["default"].database();
              _context2.next = 6;
              return (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_8__.getUserKey)(_this2.getCurrentUser().uid);

            case 6:
              _context2.t1 = _context2.sent;
              _context2.t2 = 'onlineStatus/' + _context2.t1;
              _context2.next = 10;
              return _context2.t0.ref.call(_context2.t0, _context2.t2).onDisconnect().set(new Date().getTime());

            case 10:
              _context2.next = 12;
              return _server_database__WEBPACK_IMPORTED_MODULE_7__["default"].database().ref('onlineStatus').on('value', function (snapshot) {// console.log(snapshot.val());
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapActions)(['setAllUsers'])), {}, {
    leaving: function leaving() {
      (0,_server_firebaseChat__WEBPACK_IMPORTED_MODULE_8__.updateUserOnlineVisibility)(this.getCurrentUser(), new Date().getTime());
    }
  })
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
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar/Navbar */ "./resources/js/Shared/Navbar/Navbar.vue");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer/Footer */ "./resources/js/Shared/Footer/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layout",
  components: {
    Footer: _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
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
  props: ['active']
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navbar",
  components: {
    NavLink: _NavLink__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['userIsLoggedIn']
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
  "class": "w-1/4 bg-transparent max-viewport-height flex flex-col contact-sidebar"
};
var _hoisted_2 = {
  key: 0,
  "class": "flex w-full min-h-full py-6 justify-center items-center"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-white"
  }, "Geen contacten gevonden!", -1
  /* HOISTED */
  );
});

var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Search");

  var _component_User = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("User");

  var _component_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("perfect-scrollbar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Search, {
    onSearchInUsers: $options.searchInUsers
  }, null, 8
  /* PROPS */
  , ["onSearchInUsers"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "overflow-y-scroll w-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.allUsers, function (user) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_User, {
          user: user
        }, null, 8
        /* PROPS */
        , ["user"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      )), !$options.hasUsers ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
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
  "class": "w-full h-12 flex border-b-2 relative border-blue-800"
};
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchKeyWord]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.emptySearchbar && $options.emptySearchbar.apply($options, arguments);
    }),
    "class": "absolute cursor-pointer text-black z-10 top-2 right-6"
  }, "X")]);
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
  "class": "newMessageNotification w-6 h-6 absolute bg-green-500 rounded-full text-white flex justify-center items-center"
};
var _hoisted_8 = {
  "class": "-ml-px"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.startNewChat && $options.startNewChat.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex justify-center items-center", $options.userIsSelected && $options.hasChatWithUser.uid === $props.user.uid ? 'border-b border-t border-r-2 border-white bg-transparant text-white' : 'border-b border-t border-blue-800 bg-white text-black'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "object-cover h-12 w-12 rounded-full",
    width: "100",
    height: "100",
    src: $props.user.profilePicture ? $props.user.profilePicture : '/Uploads/Profiles/profile.jpeg',
    alt: "user profile picture"
  }, null, 8
  /* PROPS */
  , _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.username || $props.user.email), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$options.hasNewMessages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getNewMessageAmount), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 2
  /* CLASS */
  );
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

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-cog text-2xl text-white"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-12 h-12 rounded-full object-cover",
    src: _ctx.getNewChatUser.profilePicture ? _ctx.getNewChatUser.profilePicture : '/Uploads/Profiles/profile.jpeg',
    alt: "user profile picture"
  }, null, 8
  /* PROPS */
  , _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getNewChatUser.username || _ctx.getNewChatUser.email), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getNewChatUser.online_visibility), 1
  /* TEXT */
  )])])]), _hoisted_8]);
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
  "class": "w-3/4 h-full border-l-2 border-white"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "p-3 w-max max-w-screen-sm rounded-xl flex gap-2 bg-green-200"
};
var _hoisted_4 = {
  "class": "mr-2 w-full break-all"
};
var _hoisted_5 = {
  "class": "message_timestamp"
};
var _hoisted_6 = {
  key: 0,
  "class": "message_status text-xs items-center"
};
var _hoisted_7 = {
  key: 0,
  "class": "fas fa-check text-gray-400"
};
var _hoisted_8 = {
  key: 1,
  "class": "fas fa-check-double text-gray-400"
};
var _hoisted_9 = {
  key: 2,
  "class": "fas fa-check-double text-blue-400"
};
var _hoisted_10 = {
  key: 1,
  "class": "w-full text-white text-xl flex items-center flex-col justify-center current-chat-main-section-no-new-chat"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Select a user and start chatting with each other!", -1
  /* HOISTED */
  );
});

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Having trouble? ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact Us");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChatUserTopBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatUserTopBar");

  var _component_NewMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewMessage");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return $options.hasNewChat ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatUserTopBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "message-container",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.hasNewChat ? 'current-chat-main-section-newchat' : 'current-chat-main-section', "w-full justify-start flex overflow-y-auto gap-2 flex-col p-6"])
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.messages, function (message, objectIndex, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [message.sender_id === _ctx.getNewChatUser.uid && message.receiver_id === _ctx.getCurrentUser.uid || message.receiver_id === _ctx.getNewChatUser.uid && message.sender_id === _ctx.getCurrentUser.uid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full flex", message.receiver_id === _ctx.getCurrentUser.uid ? 'justify-end' : 'justify-start'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.message), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex gap-1 items-end text-xs mt-3", $data.messages.receiver_id === _ctx.getCurrentUser.uid ? 'justify-start' : 'justify-end'])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.timestamp), 1
    /* TEXT */
    ), message.receiver_id === _ctx.getCurrentUser.uid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [ false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !message.message_seen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), message.message_seen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_9)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )])], 2
    /* CLASS */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NewMessage, {
    onAddMessage: $options.sendNewMessageEvent
  }, null, 8
  /* PROPS */
  , ["onAddMessage"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "?",
    "class": "text-blue-500 hover:underline"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  })])]));
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-45e8c2fe"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  key: 0,
  "class": "flex h-full chat-wrapper"
};
var _hoisted_2 = {
  key: 1,
  "class": "absolute top-0 left-0 w-screen"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ContactSideBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ContactSideBar");

  var _component_CurrentChat = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CurrentChat");

  var _component_ChatPreRender = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatPreRender");

  var _component_Login = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Login");

  var _component_Register = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Register");

  var _component_AuthLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AuthLayout");

  return !_ctx.getPageIsLoading && _ctx.getUserIsLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ContactSideBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CurrentChat)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AuthLayout, null, {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gradient-to-br from-blue-800 to-purple-700"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navbar");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)]);
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
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-white transition duration-300 rounded-xl py-2 px-12 font-bold hover:underline hover:bg-white hover:text-blue-800", {
      'font-bold underline': $props.active
    }])
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vuex_persistedstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-persistedstate */ "./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");



var store = new vuex__WEBPACK_IMPORTED_MODULE_2__.createStore({
  state: function state() {
    return {
      currentUser: null,
      pageLoading: true,
      authTypeLogin: true,
      users: [],
      newChatUser: null
    };
  },
  getters: {
    getUserIsLoggedIn: function getUserIsLoggedIn(state) {
      return !_.isNil(state.currentUser);
    },
    getPageIsLoading: function getPageIsLoading(state) {
      return state.pageLoading;
    },
    getNewChatUser: function getNewChatUser(state) {
      return state.newChatUser;
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
      state.newChatUser = user;
    },
    SET_CHAT_STOP: function SET_CHAT_STOP(state) {
      state.newChatUser = null;
    }
  },
  actions: {
    setCurrentUser: function setCurrentUser(_ref, user) {
      var commit = _ref.commit;
      commit('SET_CURRENT_USER', user);
    },
    setAuthType: function setAuthType(_ref2) {
      var commit = _ref2.commit;
      commit('SET_AUTH_TYPE');
    },
    setPageLoadingStatus: function setPageLoadingStatus(_ref3) {
      var commit = _ref3.commit;
      commit('SET_PAGE_STATUS');
    },
    setAllUsers: function setAllUsers(_ref4, users) {
      var commit = _ref4.commit;
      commit('SET_ALL_USERS', users);
    },
    setNewChat: function setNewChat(_ref5, user) {
      var commit = _ref5.commit;
      commit('SET_NEW_CHAT', user);
    },
    setChatStop: function setChatStop(_ref6) {
      var commit = _ref6.commit;
      commit('SET_CHAT_STOP');
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
/* harmony export */   "startNewChat": () => (/* binding */ startNewChat),
/* harmony export */   "markMessagesAsRead": () => (/* binding */ markMessagesAsRead),
/* harmony export */   "endChat": () => (/* binding */ endChat),
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "logUserIn": () => (/* binding */ logUserIn),
/* harmony export */   "getUserKey": () => (/* binding */ getUserKey),
/* harmony export */   "addUserToRLDb": () => (/* binding */ addUserToRLDb),
/* harmony export */   "logUserInGoogle": () => (/* binding */ logUserInGoogle),
/* harmony export */   "userExists": () => (/* binding */ userExists),
/* harmony export */   "userHasOnlineStatus": () => (/* binding */ userHasOnlineStatus),
/* harmony export */   "getUserOnlineStatus": () => (/* binding */ getUserOnlineStatus),
/* harmony export */   "updateUserOnlineVisibility": () => (/* binding */ updateUserOnlineVisibility),
/* harmony export */   "useAuth": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./resources/js/server/database.js");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ "./node_modules/firebase/compat/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();
var usersRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('users');
var messagesRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('messages');
var chatsRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('chats');
var usersVRef = _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref('onlineStatus'); //Chat functions

function sendMessage(_x, _x2, _x3, _x4, _x5) {
  return _sendMessage.apply(this, arguments);
}

function _sendMessage() {
  _sendMessage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender_id, receiver_id, channel_id, message, message_seen) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            messagesRef.push({
              sender_id: sender_id,
              receiver_id: receiver_id,
              message: message,
              channel_id: channel_id,
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

function hasChat(_x6, _x7) {
  return _hasChat.apply(this, arguments);
}

function _hasChat() {
  _hasChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(chatter_id, receiver_id) {
    var includes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return chatsRef.once("value", function (snapshot) {
              includes = _.filter(snapshot.val(), function (val) {
                return val.chatter_id === chatter_id && val.receiver_id === receiver_id;
              });
            });

          case 2:
            return _context2.abrupt("return", !_.isEmpty(includes));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _hasChat.apply(this, arguments);
}

function startNewChat(_x8, _x9) {
  return _startNewChat.apply(this, arguments);
}

function _startNewChat() {
  _startNewChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(chatter_id, receiver_id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return endChat(chatter_id);

          case 2:
            chatsRef.push({
              chatter_id: chatter_id,
              receiver_id: receiver_id
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _startNewChat.apply(this, arguments);
}

function markMessagesAsRead(_x10, _x11) {
  return _markMessagesAsRead.apply(this, arguments);
}

function _markMessagesAsRead() {
  _markMessagesAsRead = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(chatter_id, receiver_id) {
    var messagesNotRead;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            messagesNotRead = [];
            _context6.next = 3;
            return messagesRef.once('value', function (snapshot) {
              _.filter(snapshot.val(), /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(chat, key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if ((chat.sender_id === chatter_id && chat.receiver_id === receiver_id || chat.sender_id === receiver_id && chat.receiver_id === chatter_id) && !chat.message_seen) {
                            messagesNotRead.push([{
                              "sender_id": chat.sender_id,
                              "receiver_id": chat.receiver_id,
                              "channel_id": chat.channel_id,
                              "message": chat.message,
                              "timestamp": chat.timestamp,
                              "seen_at": "".concat(new Date().toTimeString().substr(0, 5)),
                              "message_seen": true
                            }, key]);
                          }

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x24, _x25) {
                  return _ref.apply(this, arguments);
                };
              }());
            });

          case 3:
            _.forEach(messagesNotRead, /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(message) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("messages/".concat(message[1])).set(message[0]);

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x26) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _markMessagesAsRead.apply(this, arguments);
}

function endChat(_x12) {
  return _endChat.apply(this, arguments);
}

function _endChat() {
  _endChat = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(chatter_id) {
    var refKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            refKey = '';
            _context8.next = 3;
            return chatsRef.once('value', function (snapshot) {
              _.filter(snapshot.val(), /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(chat, key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (chat.chatter_id === chatter_id) {
                            refKey = key;
                          }

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x27, _x28) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });

          case 3:
            if (!(refKey === '')) {
              _context8.next = 5;
              break;
            }

            return _context8.abrupt("return");

          case 5:
            _context8.next = 7;
            return _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("chats/".concat(refKey)).set(null);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _endChat.apply(this, arguments);
}

function createUser(_x13, _x14) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(email, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
              addUserToRLDb(userCredential.user);
              return userCredential;
            })["catch"](function (error) {
              return error;
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _createUser.apply(this, arguments);
}

function logUserIn(_x15, _x16) {
  return _logUserIn.apply(this, arguments);
}

function _logUserIn() {
  _logUserIn = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(email, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(auth, email, password).then( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(userCredential) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return updateUserOnlineVisibility(userCredential, 'online');

                      case 2:
                        return _context10.abrupt("return", userCredential);

                      case 3:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));

              return function (_x29) {
                return _ref4.apply(this, arguments);
              };
            }())["catch"](function (error) {
              return error;
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _logUserIn.apply(this, arguments);
}

function getUserKey(_x17) {
  return _getUserKey.apply(this, arguments);
}

function _getUserKey() {
  _getUserKey = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(uid) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return usersRef.orderByChild("uid").equalTo(uid).once('value', /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (snapshot.exists()) {
                          _context12.next = 2;
                          break;
                        }

                        return _context12.abrupt("return", snapshot.val());

                      case 2:
                        return _context12.abrupt("return", null);

                      case 3:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function (_x30) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _getUserKey.apply(this, arguments);
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
function logUserInGoogle() {
  return _logUserInGoogle.apply(this, arguments);
}

function _logUserInGoogle() {
  _logUserInGoogle = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(auth, provider).then( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14(result) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return userExists(result.user.uid, result.user);

                      case 2:
                        _context14.next = 4;
                        return updateUserOnlineVisibility(result.user, 'online');

                      case 4:
                        return _context14.abrupt("return", result);

                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14);
              }));

              return function (_x31) {
                return _ref6.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.log(error);
              return error;
            }));

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _logUserInGoogle.apply(this, arguments);
}

function userExists(_x18, _x19) {
  return _userExists.apply(this, arguments);
}

function _userExists() {
  _userExists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17(uid, user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return usersRef.orderByChild("uid").equalTo(uid).once('value', /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (!(!snapshot.exists() && user !== null)) {
                          _context16.next = 3;
                          break;
                        }

                        _context16.next = 3;
                        return addUserToRLDb(user);

                      case 3:
                        _context16.next = 5;
                        return updateUserOnlineVisibility(user, 'online');

                      case 5:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16);
              }));

              return function (_x32) {
                return _ref7.apply(this, arguments);
              };
            }());

          case 2:
            return _context17.abrupt("return", _context17.sent);

          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _userExists.apply(this, arguments);
}

function userHasOnlineStatus(_x20) {
  return _userHasOnlineStatus.apply(this, arguments);
}

function _userHasOnlineStatus() {
  _userHasOnlineStatus = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19(user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return usersVRef.orderByChild('uid').equalTo(user.uid).once('value', /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18(snapshot) {
                var userData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        if (snapshot.exists()) {
                          _context18.next = 5;
                          break;
                        }

                        userData = {
                          "uid": user.uid,
                          "online_visibility": 'online'
                        };
                        _context18.next = 4;
                        return usersVRef.push(userData);

                      case 4:
                        return _context18.abrupt("return", userData);

                      case 5:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              }));

              return function (_x33) {
                return _ref8.apply(this, arguments);
              };
            }());

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));
  return _userHasOnlineStatus.apply(this, arguments);
}

function getUserOnlineStatus(_x21) {
  return _getUserOnlineStatus.apply(this, arguments);
}

function _getUserOnlineStatus() {
  _getUserOnlineStatus = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21(user) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return usersVRef.orderByChild('uid').equalTo(user.uid).once('value', /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20(snapshot) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        if (snapshot.exists()) {
                          _context20.next = 4;
                          break;
                        }

                        _context20.next = 3;
                        return userHasOnlineStatus(user);

                      case 3:
                        return _context20.abrupt("return", _context20.sent);

                      case 4:
                        return _context20.abrupt("return", snapshot.exportVal());

                      case 5:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20);
              }));

              return function (_x34) {
                return _ref9.apply(this, arguments);
              };
            }());

          case 2:
            return _context21.abrupt("return", _context21.sent);

          case 3:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _getUserOnlineStatus.apply(this, arguments);
}

function updateUserOnlineVisibility(_x22, _x23) {
  return _updateUserOnlineVisibility.apply(this, arguments);
}

function _updateUserOnlineVisibility() {
  _updateUserOnlineVisibility = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee23(user, appearance) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return userHasOnlineStatus(user);

          case 2:
            _context23.next = 4;
            return usersVRef.orderByChild("uid").equalTo(user.uid).once("value", function (snapshot) {
              return _.filter(snapshot.val(), /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22(userValue, key) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
                    while (1) {
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          _context22.next = 2;
                          return _database__WEBPACK_IMPORTED_MODULE_1__["default"].database().ref("onlineStatus/".concat(key)).set({
                            "uid": userValue.uid,
                            "online_visibility": appearance
                          });

                        case 2:
                          return _context22.abrupt("return", _context22.sent);

                        case 3:
                        case "end":
                          return _context22.stop();
                      }
                    }
                  }, _callee22);
                }));

                return function (_x35, _x36) {
                  return _ref10.apply(this, arguments);
                };
              }());
            });

          case 4:
            return _context23.abrupt("return", _context23.sent);

          case 5:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));
  return _updateUserOnlineVisibility.apply(this, arguments);
}

function useAuth() {
  return auth;
} //user Logout

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".chat-wrapper[data-v-45e8c2fe] {\n  height: calc(100% - 4rem);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, "\n.current-chat-main-section-newchat[data-v-3bac21c7] {\n        height: calc(100vh - 13rem);\n}\n.current-chat-main-section-no-new-chat[data-v-3bac21c7] {\n        height: calc(100vh - 4rem);\n}\n.current-chat-main-section[data-v-3bac21c7] {\n        height: 100%;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_45e8c2fe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_45e8c2fe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_45e8c2fe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Chat_vue_vue_type_template_id_45e8c2fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=45e8c2fe&scoped=true */ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/Pages/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_45e8c2fe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true */ "./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-45e8c2fe"],['__file',"resources/js/Pages/Chat.vue"]])
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
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_henrik_Projects_vueChat2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_6bf30086_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout.vue"]])
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

/***/ "./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_45e8c2fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=template&id=45e8c2fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=template&id=45e8c2fe&scoped=true");


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

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_6bf30086_class_overflow_y_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&class=overflow-y-hidden");


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

/***/ "./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_45e8c2fe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Chat.vue?vue&type=style&index=0&id=45e8c2fe&lang=scss&scoped=true");


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

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Chat": "./resources/js/Pages/Chat.vue",
	"./Chat.vue": "./resources/js/Pages/Chat.vue"
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