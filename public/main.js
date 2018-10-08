(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:id', component: _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_5__["CustomerPageComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-area {\n  margin: 30px auto;\n  min-height: 500px;\n  width: 90%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-view\">\n  \n  <app-header></app-header>\n\n  <div class=\"main-area\">\n    <router-outlet></router-outlet>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _node_modules_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _node_modules_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_11__["CustomersComponent"],
                _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_12__["CustomerPageComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _node_modules_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/customers.service */ "./src/app/core/services/customers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                _services_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({})
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        // private host = 'http://localhost:5000/api';
        this.host = 'https://vdenisov-assessment-api.herokuapp.com/api';
    }
    ApiService.prototype.get = function (route, params) {
        return this.http.get(this.host + "/" + route, params);
    };
    ApiService.prototype.post = function (route, data, params) {
        return this.http.post(this.host + "/" + route, data, params);
    };
    ApiService.prototype.put = function (route, data, params) {
        return this.http.put(this.host + "/" + route, data, params);
    };
    ApiService.prototype.delete = function (route, params) {
        return this.http.delete(this.host + "/" + route, params);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/customers.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/customers.service.ts ***!
  \****************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersService = /** @class */ (function () {
    function CustomersService(apiService) {
        this.apiService = apiService;
    }
    CustomersService.prototype.create = function (data) {
        return this.apiService.post("customers", data);
    };
    CustomersService.prototype.getAll = function () {
        return this.apiService.get("customers");
    };
    CustomersService.prototype.getById = function (id) {
        return this.apiService.get("customers/" + id);
    };
    CustomersService.prototype.updateById = function (id, data) {
        return this.apiService.put("customers/" + id, data);
    };
    CustomersService.prototype.deleteById = function (id) {
        return this.apiService.delete("customers/" + id);
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.service */ "./src/app/core/services/customers.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return _customers_service__WEBPACK_IMPORTED_MODULE_0__["CustomersService"]; });




/***/ }),

/***/ "./src/app/customer-page/customer-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-page/customer-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".return-back {\n  background-color: black;\n  border: 1px solid black;\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  letter-spacing: 2px;\n}\n\n.return-back:hover {\n  background-color: white;\n  color: black;\n  letter-spacing: 5px;\n  transition: .5s;\n}\n\n.single-card {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.single-card__content {\n  margin: 0 auto;\n}\n\n.single-card__title {\n  text-align: center;\n}\n\n.data-table {\n  border: none;\n  margin: 0 auto;\n}\n\n.data-table tr {\n  margin: 5px;\n}\n\n.data-table td {\n  padding: 5px 10px;\n}\n\n.table__key {\n  text-transform: uppercase;\n  font-weight: 900;\n}\n\n.table__value {\n  text-decoration: underline;\n  letter-spacing: 2px;\n}\n\n.single-card__buttons {\n  width: 70%;\n  margin: 5px auto 10px !important;\n  display: flex;\n  justify-content: space-around;\n}\n\n.single-button {\n  background-color: white;\n  border: 1px solid black;\n}\n\n.single-button:hover {\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 2px;\n  transition: .5s;\n}\n\n.editing-form {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n"

/***/ }),

/***/ "./src/app/customer-page/customer-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-page/customer-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "it's a cuctomers page\n\n\n<!-- <div class=\"main-area\">\n\n  <button  class=\"return-back\" (click)=\"goBack()\">Back</button>\n\n  <div *ngIf=\"isData; else loading\">\n  \n    <mat-card *ngIf=\"!isEdit\" class=\"single-card\">\n  \n      <mat-card-title class=\"single-card__title\">\n        Personal info\n      </mat-card-title>\n  \n      <mat-card-content class=\"single-card__content\">\n        <table cellspacing=\"0\" cellpadding=\"0\" class=\"data-table\">\n          <tr>\n            <td class=\"table__key\">Name</td>\n            <td class=\"table__value\">{{ customer.name }}</td>\n          </tr>\n          <tr>\n            <td class=\"table__key\">Address</td>\n            <td class=\"table__value\">{{ customer.address }}</td>\n          </tr>\n          <tr>\n            <td class=\"table__key\">Phone</td>\n            <td class=\"table__value\">{{ customer.phone }}</td>\n          </tr>\n        </table>\n      </mat-card-content>\n        \n      <mat-card-actions class=\"single-card__buttons\">\n        <button  class=\"single-button\" (click)=\"onEdit()\">Edit</button>\n      </mat-card-actions>\n    \n    </mat-card>\n  \n    <mat-card *ngIf=\"isEdit\" class=\"single-card\">\n  \n      <mat-card-title class=\"single-card__title\">\n        Data editing \n      </mat-card-title>\n    \n      <mat-card-content class=\"single-card__content\">\n        <form class=\"editing-form\" [formGroup]=\"editingForm\" (ngSubmit)=\"onSave()\">\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"name\"\n              placeholder=\"Name\" value=\"{{ customer.name }}\"/>\n          </mat-form-field>\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"address\"\n              placeholder=\"Address\" value=\"{{ customer.address }}\"/>\n          </mat-form-field>\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"phone\"\n              placeholder=\"Phone\" value=\"{{ customer.phone }}\"/>\n          </mat-form-field>\n  \n        </form>\n      </mat-card-content>\n        \n      <mat-card-actions class=\"single-card__buttons\">\n        <button  class=\"single-button\" (click)=\"toggleMode()\">Cancel</button>\n        <button  class=\"single-button\" (click)=\"onSave()\">Save</button>\n      </mat-card-actions>\n    \n    </mat-card>\n  \n  </div>\n  \n  <ng-template #loading>\n    loading...\n  </ng-template>\n  \n</div> -->\n"

/***/ }),

/***/ "./src/app/customer-page/customer-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-page/customer-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageComponent", function() { return CustomerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerPageComponent = /** @class */ (function () {
    function CustomerPageComponent(route, router, customerService, fb) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.fb = fb;
        this.isData = false;
        this.isEdit = false;
        this.editingForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    CustomerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params['id'];
        // this.customer$ = this.customerService.getById(this.id);
        this.customer = this.customerService
            .getById(this.id)
            .subscribe(function (data) {
            _this.customer = data;
            _this.isData = true;
        });
    };
    CustomerPageComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/customers');
    };
    CustomerPageComponent.prototype.onEdit = function () {
        this.toggleMode();
    };
    CustomerPageComponent.prototype.onSave = function () {
        var _this = this;
        var userInput = this.editingForm.value;
        var updatedInfo = {
            name: userInput['name'] || this.customer['name'],
            address: userInput['address'] || this.customer['address'],
            phone: userInput['phone'] || this.customer['phone'],
        };
        this.customerService
            .updateById(this.id, updatedInfo)
            .subscribe(function (data) { return _this.customer = data; });
        this.editingForm.reset();
        this.toggleMode();
    };
    CustomerPageComponent.prototype.toggleMode = function () {
        this.isEdit = !this.isEdit;
    };
    CustomerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-page',
            template: __webpack_require__(/*! ./customer-page.component.html */ "./src/app/customer-page/customer-page.component.html"),
            styles: [__webpack_require__(/*! ./customer-page.component.css */ "./src/app/customer-page/customer-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services__WEBPACK_IMPORTED_MODULE_2__["CustomersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomerPageComponent);
    return CustomerPageComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-area {\n  text-align: center;\n  margin: 30px auto;\n  display: flex;\n  align-items: center;\n}\n\n.single-button {\n  background-color: white;\n  border: 1px solid black;\n}\n\n.single-button:hover {\n  background-color: black;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 2px;\n  transition: .5s;\n}\n\n.main-button {\n  background-color: black;\n  border: 1px solid black;\n  color: white;\n  font-size: 20px;\n  font-weight: 900;\n  letter-spacing: 2px;\n}\n\n.main-button:hover {\n  background-color: white;\n  color: black;\n  letter-spacing: 5px;\n  transition: .5s;\n}\n\n/* ########################## */\n\n.data-input-form {\n  width: 350px;\n  text-align: center;\n}\n\n.input-field {\n  width: 80%;\n}\n\n.form-actions {\n  display: flex;\n  justify-content: space-around;\n  margin: 0;\n  padding: 0;\n}\n\n/* ########################## */\n\n.data-list, .no-data {\n  margin: 20px auto;\n}\n\n.data-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 50px;\n}\n\n.item-card {\n  margin: 10px;\n  width: 250px;\n}\n\n.item-name {\n  text-decoration: none;\n  color: black;\n}\n\n.item-name:hover {\n  font-weight: bold;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Customers list</h2>\n\n<br>\n\n<form [formGroup]=\"addingForm\" (ngSubmit)=\"onCreate()\">\n  <input type=\"text\" formControlName=\"name\" placeholder=\"Name\" required>\n  <input type=\"text\" formControlName=\"address\" placeholder=\"Address\" required />\n  <input type=\"text\" formControlName=\"phone\" placeholder=\"Phone\" required />\n</form>\n\n<div class=\"container\">\n  <button class=\"single-button\" type=\"submit\" (click)=\"onCreate()\">\n    Create\n  </button>\n  <button class=\"single-button\" (click)=\"closeForm()\">\n    Cancel\n  </button>\n</div>\n\n<ngx-datatable class=\"bootstrap\" [columns]=\"tableColumns\" [rows]=\"customers | async\" [columnMode]=\"'force'\"\n  [headerHeight]=\"50\" [rowHeight]=\"50\">\n\n  <!-- (activate)=\"onActivate($event)\" -->\n\n  <!-- [loadingIndicator]=\"loadingIndicator\"\n[headerHeight]=\"40\"\n[summaryRow]=\"true\"\n[summaryPosition]=\"'bottom'\"\n[footerHeight]=\"40\"\n[limit]=\"10\"\n[reorderable]=\"reorderable\" -->\n\n</ngx-datatable>\n\n<ng-template #actionTmpl let-row=\"row\" let-value=\"value\">\n\n  <!-- TODO : убрать кнопки, оставить только иконки -->\n\n  <div class=\"d-flex justify-content-around\">\n\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onEdit(row)\">\n      <i class=\"fa fa-pencil-alt\"></i>\n    </button>\n\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onDelete(row)\">\n      <i class=\"fa fa-trash-alt\"></i>\n    </button>\n\n  </div>\n\n</ng-template>\n\n<br>\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/confirm-delete/confirm-delete.component */ "./src/app/shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _shared_edit_window_edit_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/edit-window/edit-window.component */ "./src/app/shared/edit-window/edit-window.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerService, fb, modalService) {
        this.customerService = customerService;
        this.fb = fb;
        this.modalService = modalService;
        this.customers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.customersSub = this.customers.asObservable();
        this.formIsOpened = false;
        this.isEdit = false;
        this.tableColumns = [];
        this.addingForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customersSub.subscribe(function (val) { return console.log('customers value', val); });
        this.customerService
            .getAll()
            .subscribe(function (data) {
            _this.customers.next(data);
        });
        this.tableColumns = [
            { name: 'Name', prop: 'name', },
            { name: 'Phone', prop: 'phone' },
            { name: 'Address', prop: 'address' },
            { cellTemplate: this.actionTmpl }
        ];
    };
    CustomersComponent.prototype.onCreate = function () {
        var _this = this;
        var userInput = this.addingForm.value;
        this.customerService
            .create(userInput)
            .subscribe(function (newCustomer) {
            var arr = _this.customers.getValue().concat(newCustomer);
            _this.customers.next(arr);
        });
        this.addingForm.reset();
        this.closeForm();
    };
    CustomersComponent.prototype.onDelete = function (obj) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], { centered: true });
        modalRef.componentInstance.name = obj.name;
        modalRef.result
            .then(function (result) {
            // is it necessary to remove ?
            if (result) {
                _this.customerService
                    .deleteById(obj.id)
                    .subscribe(function (data) {
                    var arr = _this.customers.getValue().filter(function (el) { return el.id !== obj.id; });
                    _this.customers.next(arr);
                });
            }
        });
    };
    CustomersComponent.prototype.onEdit = function (customer) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_edit_window_edit_window_component__WEBPACK_IMPORTED_MODULE_6__["EditWindowComponent"], { centered: true });
        modalRef.componentInstance.customer = customer;
        modalRef.result
            .then(function (result) {
            // is it necessary to edit ?
            if (result) {
                _this.customerService
                    .updateById(customer.id, result)
                    .subscribe(function (updatedCustomer) {
                    var arr = _this.customers.getValue();
                    var index = arr.findIndex(function (el) { return el.id === customer.id; });
                    console.log('arr => ', arr);
                    arr.splice(index, 1, updatedCustomer);
                    var arrr = Object.assign({}, arr);
                    _this.customers.next(arrr);
                    console.log('arr => ', arrr);
                    // oldCustomer = Object.assign({}, oldCustomer, updatedCustomer);
                    // console.log('data => ', data);
                    // const arr = this.customers.getValue();
                    // const index = arr.indexOf(obj);
                    // console.log('arr[index] => ', arr[index]);
                    // arr[index] = data;
                    // console.log('arr[index] => ', arr[index]);
                    // console.log('arr => ', arr);
                    // console.log('customers BEFORE => ', this.customers.getValue());
                    // // this.customers.next(arr);
                    // console.log('customers AFTER => ', this.customers.getValue());
                });
            }
        });
    };
    CustomersComponent.prototype.openForm = function () {
        this.formIsOpened = true;
    };
    CustomersComponent.prototype.closeForm = function () {
        this.formIsOpened = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionTmpl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CustomersComponent.prototype, "actionTmpl", void 0);
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["CustomersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-area {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 40px;\n  background: #3f51b5;\n}\n\n.project-name {\n  border-radius: 25px;\n  box-shadow: 0 0 10px 5px #fff;\n  background-color: #d6d6d6;\n  padding: 0 10px;\n  color: #3f51b5;\n  font-weight: 900;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.toolbar-buttons a {\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Invoice app</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/customers\">Customers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"/\">Invoices</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lorem-ipsum {\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lorem-ipsum\">\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-delete/confirm-delete.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-delete/confirm-delete.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/confirm-delete/confirm-delete.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-delete/confirm-delete.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n  <h4 class=\"modal-title\">Confirmation</h4>\n\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n\n</div>\n\n<div class=\"modal-body\">\n\n  <p>\n    <strong>Are you sure you want to delete <span class=\"text-primary\">\"{{ name }}\"</span> ?</strong>\n  </p>\n  \n  <p>All information associated to this user profile will be permanently deleted.\n    <span class=\"text-danger\">This operation can not be undone.</span>\n  </p>\n\n</div>\n\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"activeModal.close(false)\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"activeModal.close(true)\">Delete</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/confirm-delete/confirm-delete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-delete/confirm-delete.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function() { return ConfirmDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDeleteComponent = /** @class */ (function () {
    function ConfirmDeleteComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmDeleteComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmDeleteComponent.prototype, "name", void 0);
    ConfirmDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-delete',
            template: __webpack_require__(/*! ./confirm-delete.component.html */ "./src/app/shared/confirm-delete/confirm-delete.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete.component.css */ "./src/app/shared/confirm-delete/confirm-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}());



/***/ }),

/***/ "./src/app/shared/edit-window/edit-window.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/edit-window/edit-window.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/edit-window/edit-window.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/edit-window/edit-window.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n    <h4 class=\"modal-title\">Editing</h4>\n  \n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  \n  </div>\n  \n  <div class=\"modal-body\">\n\n    <form [formGroup]=\"editingForm\" (ngSubmit)=\"onSave()\">\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Email</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\"\n          aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n      </div>\n  \n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Phone</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\"\n          aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n      </div>\n  \n      \n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Address</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" formControlName=\"address\"\n          aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n      </div>\n\n    </form>\n        \n  </div>\n  \n  <div class=\"modal-footer\">\n  \n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"activeModal.close(false)\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSave()\">Save</button>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/edit-window/edit-window.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/edit-window/edit-window.component.ts ***!
  \*************************************************************/
/*! exports provided: EditWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWindowComponent", function() { return EditWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditWindowComponent = /** @class */ (function () {
    function EditWindowComponent(activeModal, fb) {
        this.activeModal = activeModal;
        this.fb = fb;
    }
    EditWindowComponent.prototype.ngOnInit = function () {
        this.editingForm = this.fb.group({
            'name': [this.customer.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': [this.customer.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': [this.customer.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EditWindowComponent.prototype.onSave = function () {
        var userInput = this.editingForm.value;
        var updatedInfo = {
            name: userInput['name'] || this.customer['name'],
            phone: userInput['phone'] || this.customer['phone'],
            address: userInput['address'] || this.customer['address'],
        };
        this.activeModal.close(updatedInfo);
        this.editingForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditWindowComponent.prototype, "customer", void 0);
    EditWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-window',
            template: __webpack_require__(/*! ./edit-window.component.html */ "./src/app/shared/edit-window/edit-window.component.html"),
            styles: [__webpack_require__(/*! ./edit-window.component.css */ "./src/app/shared/edit-window/edit-window.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditWindowComponent);
    return EditWindowComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _edit_window_edit_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-window/edit-window.component */ "./src/app/shared/edit-window/edit-window.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDeleteComponent"],
                _edit_window_edit_window_component__WEBPACK_IMPORTED_MODULE_4__["EditWindowComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDeleteComponent"],
                _edit_window_edit_window_component__WEBPACK_IMPORTED_MODULE_4__["EditWindowComponent"],
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mxkv/musor/feassessment-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map