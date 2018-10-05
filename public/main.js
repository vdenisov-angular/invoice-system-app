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

module.exports = ".app-view {\r\n  background-color: #fffccc;\r\n}\r\n\r\n.main-area {\r\n  margin: 30px auto;\r\n  min-height: 500px;\r\n  width: 90%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-view\">\r\n  \r\n  <app-header></app-header>\r\n\r\n  <div class=\"main-area\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</div>\r\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomersComponent"],
                _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_10__["CustomerPageComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = ".return-back {\r\n  background-color: black;\r\n  border: 1px solid black;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.return-back:hover {\r\n  background-color: white;\r\n  color: black;\r\n  letter-spacing: 5px;\r\n  transition: .5s;\r\n}\r\n\r\n.single-card {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.single-card__content {\r\n  margin: 0 auto;\r\n}\r\n\r\n.single-card__title {\r\n  text-align: center;\r\n}\r\n\r\n.data-table {\r\n  border: none;\r\n  margin: 0 auto;\r\n}\r\n\r\n.data-table tr {\r\n  margin: 5px;\r\n}\r\n\r\n.data-table td {\r\n  padding: 5px 10px;\r\n}\r\n\r\n.table__key {\r\n  text-transform: uppercase;\r\n  font-weight: 900;\r\n}\r\n\r\n.table__value {\r\n  text-decoration: underline;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.single-card__buttons {\r\n  width: 70%;\r\n  margin: 5px auto 10px !important;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.single-button {\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.single-button:hover {\r\n  background-color: black;\r\n  color: white;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  transition: .5s;\r\n}\r\n\r\n.editing-form {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customer-page/customer-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-page/customer-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-area\">\n\n  <button  class=\"return-back\" (click)=\"goBack()\">Back</button>\n\n  <div *ngIf=\"isData; else loading\">\n  \n    <mat-card *ngIf=\"!isEdit\" class=\"single-card\">\n  \n      <mat-card-title class=\"single-card__title\">\n        Personal info\n      </mat-card-title>\n  \n      <mat-card-content class=\"single-card__content\">\n        <table cellspacing=\"0\" cellpadding=\"0\" class=\"data-table\">\n          <tr>\n            <td class=\"table__key\">Name</td>\n            <td class=\"table__value\">{{ customer.name }}</td>\n          </tr>\n          <tr>\n            <td class=\"table__key\">Address</td>\n            <td class=\"table__value\">{{ customer.address }}</td>\n          </tr>\n          <tr>\n            <td class=\"table__key\">Phone</td>\n            <td class=\"table__value\">{{ customer.phone }}</td>\n          </tr>\n        </table>\n      </mat-card-content>\n        \n      <mat-card-actions class=\"single-card__buttons\">\n        <button  class=\"single-button\" (click)=\"onEdit()\">Edit</button>\n      </mat-card-actions>\n    \n    </mat-card>\n  \n    <mat-card *ngIf=\"isEdit\" class=\"single-card\">\n  \n      <mat-card-title class=\"single-card__title\">\n        Data editing \n      </mat-card-title>\n    \n      <mat-card-content class=\"single-card__content\">\n        <form class=\"editing-form\" [formGroup]=\"editingForm\" (ngSubmit)=\"onSave()\">\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"name\"\n              placeholder=\"Name\" value=\"{{ customer.name }}\"/>\n          </mat-form-field>\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"address\"\n              placeholder=\"Address\" value=\"{{ customer.address }}\"/>\n          </mat-form-field>\n  \n          <mat-form-field class=\"input-field\">\n            <input matInput type=\"text\" formControlName=\"phone\"\n              placeholder=\"Phone\" value=\"{{ customer.phone }}\"/>\n          </mat-form-field>\n  \n        </form>\n      </mat-card-content>\n        \n      <mat-card-actions class=\"single-card__buttons\">\n        <button  class=\"single-button\" (click)=\"toggleMode()\">Cancel</button>\n        <button  class=\"single-button\" (click)=\"onSave()\">Save</button>\n      </mat-card-actions>\n    \n    </mat-card>\n  \n  </div>\n  \n  <ng-template #loading>\n    loading...\n  </ng-template>\n  \n</div>\n"

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

module.exports = ".main-area {\r\n  text-align: center;\r\n  margin: 30px auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.single-button {\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.single-button:hover {\r\n  background-color: black;\r\n  color: white;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  transition: .5s;\r\n}\r\n\r\n.main-button {\r\n  background-color: black;\r\n  border: 1px solid black;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.main-button:hover {\r\n  background-color: white;\r\n  color: black;\r\n  letter-spacing: 5px;\r\n  transition: .5s;\r\n}\r\n\r\n/* ########################## */\r\n\r\n.data-input-form {\r\n  width: 350px;\r\n  text-align: center;\r\n}\r\n\r\n.input-field {\r\n  width: 80%;\r\n}\r\n\r\n.form-actions {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* ########################## */\r\n\r\n.data-list, .no-data {\r\n  margin: 20px auto;\r\n}\r\n\r\n.data-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-left: 50px;\r\n}\r\n\r\n.item-card {\r\n  margin: 10px;\r\n  width: 250px;\r\n}\r\n\r\n.item-name {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.item-name:hover {\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-area\">\r\n\r\n  <button  class=\"main-button\"\r\n    *ngIf=\"!formIsOpened\" (click)=\"openForm()\">\r\n    Add\r\n  </button>\r\n\r\n  <mat-card *ngIf=\"formIsOpened\" class=\"data-input-form\">\r\n\r\n    <mat-card-content class=\"adding-form\">\r\n      <form [formGroup]=\"addingForm\" (ngSubmit)=\"onCreate()\">\r\n\r\n        <mat-form-field class=\"input-field\">\r\n          <input matInput type=\"text\" formControlName=\"name\" placeholder=\"Name\"/>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"input-field\">\r\n          <input matInput type=\"text\" formControlName=\"address\" placeholder=\"Address\"/>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"input-field\">\r\n          <input matInput type=\"text\" formControlName=\"phone\" placeholder=\"Phone\"/>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions class=\"form-actions\">\r\n      <button  class=\"single-button\" type=\"submit\" (click)=\"onCreate()\">\r\n        Create\r\n      </button>\r\n      <button  class=\"single-button\" (click)=\"closeForm()\">\r\n        Cancel\r\n      </button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n\r\n  <!-- ########################## -->\r\n\r\n  <div *ngIf=\"!customers.length\" class=\"no-data\">\r\n    No customers\r\n  </div>\r\n\r\n  <div *ngIf=\"customers.length\" class=\"data-list\">\r\n\r\n    <div *ngFor=\"let customer of customers\">\r\n\r\n      <mat-card class=\"item-card\">\r\n\r\n        <mat-card-title>\r\n          <a class=\"item-name\" [routerLink]=\"['/customers', customer.id]\">\r\n            {{ customer.name }}\r\n          </a>\r\n        </mat-card-title>\r\n\r\n        <mat-card-subtitle>\r\n          {{ customer.phone }}\r\n        </mat-card-subtitle>\r\n\r\n        <mat-card-content>\r\n          {{ customer.address }}\r\n        </mat-card-content>\r\n\r\n        <mat-card-actions>\r\n          <button  class=\"single-button\" (click)=\"onDelete(customer)\">Delete</button>\r\n        </mat-card-actions>\r\n\r\n      </mat-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
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



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerService, fb) {
        var _this = this;
        this.customerService = customerService;
        this.fb = fb;
        this.customers = [];
        this.formIsOpened = false;
        this.isEdit = false;
        this.customerService
            .getAll()
            .subscribe(function (data) {
            _this.customers = data;
        });
        this.addingForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'address': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    CustomersComponent.prototype.ngOnInit = function () { };
    CustomersComponent.prototype.onCreate = function () {
        var _this = this;
        var userInput = this.addingForm.value;
        this.customerService
            .create(userInput)
            .subscribe(function (newCustomer) {
            _this.customers.push(newCustomer);
        });
        this.addingForm.reset();
        this.closeForm();
    };
    CustomersComponent.prototype.onDelete = function (obj) {
        var _this = this;
        this.customerService
            .deleteById(obj.id)
            .subscribe(function (data) {
            var index = _this.customers.indexOf(obj);
            _this.customers.splice(index, 1);
        });
    };
    CustomersComponent.prototype.openForm = function () {
        this.formIsOpened = true;
    };
    CustomersComponent.prototype.closeForm = function () {
        this.formIsOpened = false;
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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

module.exports = ".toolbar-area {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 40px;\r\n  background: #3f51b5;\r\n}\r\n\r\n.project-name {\r\n  border-radius: 25px;\r\n  box-shadow: 0 0 10px 5px #fff;\r\n  background-color: #d6d6d6;\r\n  padding: 0 10px;\r\n  color: #3f51b5;\r\n  font-weight: 900;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.toolbar-buttons a {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"toolbar-area\">\r\n  \r\n  <div class=\"project-name\" (click)=\"openHome()\">\r\n    fe-assessment\r\n  </div>\r\n\r\n  <!-- <div class=\"toolbar-buttons\">\r\n    <button  (click)=\"openHome()\">Home</button>\r\n    <button  (click)=\"openCustomers()\">Customers</button>\r\n    <button  (click)=\"openProducts()\">Products</button>\r\n  </div> -->\r\n\r\n  <nav mat-tab-nav-bar class=\"toolbar-buttons\">\r\n    <a mat-tab-link *ngFor=\"let link of menuLinks\"\r\n      [routerLink]=\"link.path\"\r\n      routerLinkActive=\"active\"\r\n      [routerLinkActiveOptions]=\"{exact: true}\"\r\n      #rla=\"routerLinkActive\"\r\n      [active]=\"rla.isActive\">\r\n    {{link.label}}\r\n    </a>\r\n  </nav>\r\n\r\n</mat-toolbar>\r\n"

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
        this.menuLinks = [
            { path: '/', label: 'Home' },
            { path: '/customers', label: 'Customers' },
            { path: '/products', label: 'Products' },
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.openHome = function () {
        console.log('Redirect to "/"');
        this.router.navigateByUrl('/');
    };
    HeaderComponent.prototype.openCustomers = function () {
        console.log('Redirect to "/customers"');
        this.router.navigateByUrl('/customers');
    };
    HeaderComponent.prototype.openProducts = function () {
        console.log('Redirect to "/products"');
        this.router.navigateByUrl('/products');
    };
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

module.exports = ".lorem-ipsum {\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lorem-ipsum\">\r\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n</div>\r\n"

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

module.exports = "<p>\r\n  products works!\r\n</p>\r\n"

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
            declarations: [],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
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

module.exports = __webpack_require__(/*! D:\iT\code\Web\Front-End\Angular\fe-assessment\client-app-bootstrap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map