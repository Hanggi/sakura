function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["format-format-module"], {
  /***/
  "./src/app/pages/tools/format/format-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tools/format/format-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FormatRoutingModule */

  /***/
  function srcAppPagesToolsFormatFormatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatRoutingModule", function () {
      return FormatRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var FormatRoutingModule = function FormatRoutingModule() {
      _classCallCheck(this, FormatRoutingModule);
    };

    FormatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormatRoutingModule
    });
    FormatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormatRoutingModule_Factory(t) {
        return new (t || FormatRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormatRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tools/format/format.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/tools/format/format.component.ts ***!
    \********************************************************/

  /*! exports provided: FormatComponent */

  /***/
  function srcAppPagesToolsFormatFormatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatComponent", function () {
      return FormatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatComponent = /*#__PURE__*/function () {
      function FormatComponent() {
        _classCallCheck(this, FormatComponent);
      }

      _createClass(FormatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormatComponent;
    }();

    FormatComponent.ɵfac = function FormatComponent_Factory(t) {
      return new (t || FormatComponent)();
    };

    FormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormatComponent,
      selectors: [["app-format"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function FormatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "format works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xzL2Zvcm1hdC9mb3JtYXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-format',
          templateUrl: './format.component.html',
          styleUrls: ['./format.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tools/format/format.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tools/format/format.module.ts ***!
    \*****************************************************/

  /*! exports provided: FormatModule */

  /***/
  function srcAppPagesToolsFormatFormatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatModule", function () {
      return FormatModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _format_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./format-routing.module */
    "./src/app/pages/tools/format/format-routing.module.ts");
    /* harmony import */


    var _format_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./format.component */
    "./src/app/pages/tools/format/format.component.ts");

    var FormatModule = function FormatModule() {
      _classCallCheck(this, FormatModule);
    };

    FormatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FormatModule
    });
    FormatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FormatModule_Factory(t) {
        return new (t || FormatModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _format_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormatRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormatModule, {
        declarations: [_format_component__WEBPACK_IMPORTED_MODULE_3__["FormatComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _format_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormatRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_format_component__WEBPACK_IMPORTED_MODULE_3__["FormatComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _format_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormatRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=format-format-module-es5.js.map