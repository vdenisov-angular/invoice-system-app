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
/* harmony import */ var _shared_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: _shared_layout__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:id', component: _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_5__["CustomerPageComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
    { path: 'invoices', component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__["InvoicesComponent"] },
    { path: '**', redirectTo: '' }
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

module.exports = ".main-area {\r\n  margin: 30px auto;\r\n  min-height: 500px;\r\n  width: 90%;\r\n}\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-page/customer-page.component */ "./src/app/customer-page/customer-page.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
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
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_9__["CustomersComponent"],
                _customer_page_customer_page_component__WEBPACK_IMPORTED_MODULE_10__["CustomerPageComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_12__["InvoicesComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
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
                _services__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
                _services__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
                _services__WEBPACK_IMPORTED_MODULE_1__["InvoicesService"],
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

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: Customer, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
// INTERFACES
// CLASSES
var Customer = /** @class */ (function () {
    function Customer(customerObject) {
        this.name = '';
        this.phone = '';
        this.address = '';
        this.name = customerObject.name;
        this.phone = customerObject.phone;
        this.address = customerObject.address;
    }
    return Customer;
}());

var Product = /** @class */ (function () {
    function Product(productObject) {
        this.name = '';
        this.price = 0;
        if (productObject) {
            this.name = productObject.name;
            this.price = productObject.price;
        }
    }
    return Product;
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
/*! exports provided: CustomersService, ProductsService, InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.service */ "./src/app/core/services/customers.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return _customers_service__WEBPACK_IMPORTED_MODULE_0__["CustomersService"]; });

/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.service */ "./src/app/core/services/products.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]; });

/* harmony import */ var _invoices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoices.service */ "./src/app/core/services/invoices.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return _invoices_service__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"]; });






/***/ }),

/***/ "./src/app/core/services/invoices.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/invoices.service.ts ***!
  \***************************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
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


var InvoicesService = /** @class */ (function () {
    function InvoicesService(apiService) {
        this.apiService = apiService;
    }
    InvoicesService.prototype.create = function (data) {
        return this.apiService.post("invoices", data);
    };
    InvoicesService.prototype.getAll = function () {
        return this.apiService.get("invoices");
    };
    InvoicesService.prototype.getById = function (id) {
        return this.apiService.get("invoices/" + id);
    };
    InvoicesService.prototype.updateById = function (id, data) {
        return this.apiService.put("invoices/" + id, data);
    };
    InvoicesService.prototype.deleteById = function (id) {
        return this.apiService.delete("invoices/" + id);
    };
    InvoicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], InvoicesService);
    return InvoicesService;
}());



/***/ }),

/***/ "./src/app/core/services/products.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
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


var ProductsService = /** @class */ (function () {
    function ProductsService(apiService) {
        this.apiService = apiService;
    }
    ProductsService.prototype.create = function (data) {
        return this.apiService.post("products", data);
    };
    ProductsService.prototype.getAll = function () {
        return this.apiService.get("products");
    };
    ProductsService.prototype.getById = function (id) {
        return this.apiService.get("products/" + id);
    };
    ProductsService.prototype.updateById = function (id, data) {
        return this.apiService.put("products/" + id, data);
    };
    ProductsService.prototype.deleteById = function (id) {
        return this.apiService.delete("products/" + id);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProductsService);
    return ProductsService;
}());



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

module.exports = ".area-header {\r\n  margin: 30px 0;\r\n}\r\n\r\n.area-button-add {\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row area-header\">\r\n  <h2>Customers list</h2>\r\n  <button type=\"button\" class=\"btn btn-primary btn-lg area-button-add\" (click)=\"onCreate()\">\r\n    add\r\n  </button>\r\n</div>\r\n\r\n<ngx-datatable\r\n  class=\"material\"\r\n \r\n  [columns]=\"tableColumns\"\r\n  [rows]=\"customers | async\"\r\n  \r\n  [columnMode]=\"'force'\"\r\n\r\n  [headerHeight]=\"50\"\r\n  [rowHeight]=\"70\"\r\n  [footerHeight]=\"50\"\r\n></ngx-datatable>\r\n\r\n<ng-template #actionTmpl let-row=\"row\" let-value=\"value\">\r\n\r\n  <!-- TODO : убрать кнопки, оставить только иконки -->\r\n\r\n  <div class=\"d-flex justify-content-around\">\r\n\r\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onEdit(row)\">\r\n      <i class=\"fa fa-pencil-alt\"></i>\r\n    </button>\r\n\r\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onDelete(row)\">\r\n      <i class=\"fa fa-trash-alt\"></i>\r\n    </button>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/modals */ "./src/app/shared/modals/index.ts");
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
    function CustomersComponent(customerService, modalService) {
        this.customerService = customerService;
        this.modalService = modalService;
        this.customers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tableColumns = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["CustomersCreateUpdateComponent"], { centered: true });
        var inputData = {
            action: 'create',
            customer: new _core_models__WEBPACK_IMPORTED_MODULE_4__["Customer"]({ name: '', phone: '', address: '' }),
        };
        Object.assign(modalRef.componentInstance, inputData);
        modalRef.result
            .then(function (data) {
            if (data) {
                _this.customerService
                    .create(data)
                    .subscribe(function (createdCustomer) {
                    // const arr = this.customers.getValue().concat(createdCustomer);
                    // this.customers.next(arr);
                    var arr = _this.customers.getValue();
                    arr.push(createdCustomer);
                    _this.customers.next(arr.slice());
                });
            }
        });
    };
    CustomersComponent.prototype.onEdit = function (customer) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["CustomersCreateUpdateComponent"], { centered: true });
        var inputData = {
            action: 'edit',
            customer: customer
        };
        Object.assign(modalRef.componentInstance, inputData);
        modalRef.result
            .then(function (data) {
            if (data) {
                _this.customerService
                    .updateById(customer.id, data)
                    .subscribe(function (updatedCustomer) {
                    var arr = _this.customers.getValue();
                    // const index = arr.findIndex(el => el.id === customer.id);
                    var index = arr.indexOf(customer);
                    arr.splice(index, 1, updatedCustomer);
                    _this.customers.next(arr.slice());
                });
            }
        });
    };
    CustomersComponent.prototype.onDelete = function (customer) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], { centered: true });
        modalRef.componentInstance.name = customer.name;
        modalRef.result
            .then(function (confirmation) {
            if (confirmation) {
                _this.customerService
                    .deleteById(customer.id)
                    .subscribe(function (data) {
                    // const arr = this.customers.getValue().filter(el => el.id !== customer.id);
                    // this.customers.next(arr);
                    var arr = _this.customers.getValue();
                    var index = arr.indexOf(customer);
                    arr.splice(index, 1);
                    _this.customers.next(arr.slice());
                });
            }
        });
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
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/invoices/invoices.component.css":
/*!*************************************************!*\
  !*** ./src/app/invoices/invoices.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".area-header {\r\n  margin: 30px 0;\r\n}\r\n\r\n.area-button-add {\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/invoices/invoices.component.html":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row area-header\">\n  <h2>Invoices list</h2>\n  <button type=\"button\" class=\"btn btn-primary btn-lg area-button-add\">\n    add\n  </button>\n</div>\n\n<p>Table area ...</p>\n"

/***/ }),

/***/ "./src/app/invoices/invoices.component.ts":
/*!************************************************!*\
  !*** ./src/app/invoices/invoices.component.ts ***!
  \************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.invoices = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.tableColumns = [];
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        console.log('12213123123', this.invoiceService.getAll());
    };
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/invoices/invoices.component.html"),
            styles: [__webpack_require__(/*! ./invoices.component.css */ "./src/app/invoices/invoices.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".area-header {\r\n  margin: 30px 0;\r\n}\r\n\r\n.area-button-add {\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row area-header\">\r\n  <h2>Products list</h2>\r\n  <button type=\"button\" class=\"btn btn-primary btn-lg area-button-add\" (click)=\"onCreate()\">\r\n    add\r\n  </button>\r\n</div>\r\n\r\n<ngx-datatable\r\n  class=\"material\"\r\n \r\n  [columns]=\"tableColumns\"\r\n  [rows]=\"products | async\"\r\n  \r\n  [columnMode]=\"'force'\"\r\n\r\n  [headerHeight]=\"50\"\r\n  [rowHeight]=\"70\"\r\n  [footerHeight]=\"50\"\r\n></ngx-datatable>\r\n\r\n<ng-template #actionTmpl let-row=\"row\" let-value=\"value\">\r\n\r\n  <!-- TODO : убрать кнопки, оставить только иконки -->\r\n\r\n  <div class=\"d-flex justify-content-around\">\r\n\r\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onEdit(row)\">\r\n      <i class=\"fa fa-pencil-alt\"></i>\r\n    </button>\r\n\r\n    <button class=\"btn btn-outline-info btn-rounded waves-effect px-3\" (click)=\"onDelete(row)\">\r\n      <i class=\"fa fa-trash-alt\"></i>\r\n    </button>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _shared_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modals */ "./src/app/shared/modals/index.ts");
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
    function ProductsComponent(productService, modalService) {
        this.productService = productService;
        this.modalService = modalService;
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tableColumns = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getAll()
            .subscribe(function (data) {
            _this.products.next(data);
        });
        this.tableColumns = [
            { name: 'Name', prop: 'name', },
            { name: 'Price $', prop: 'price' },
            { cellTemplate: this.actionTmpl }
        ];
    };
    ProductsComponent.prototype.onCreate = function () {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["ProductsCreateUpdateComponent"], { centered: true });
        var inputData = {
            action: 'create',
            product: new _core_models__WEBPACK_IMPORTED_MODULE_4__["Product"]()
        };
        Object.assign(modalRef.componentInstance, inputData);
        modalRef.result
            .then(function (data) {
            if (data) {
                _this.productService
                    .create(data)
                    .subscribe(function (createdProduct) {
                    var arr = _this.products.getValue();
                    arr.push(createdProduct);
                    _this.products.next(arr.slice());
                });
            }
        });
    };
    ProductsComponent.prototype.onEdit = function (product) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["ProductsCreateUpdateComponent"], { centered: true });
        var inputData = {
            action: 'edit',
            product: product
        };
        Object.assign(modalRef.componentInstance, inputData);
        modalRef.result
            .then(function (data) {
            if (data) {
                _this.productService
                    .updateById(product.id, data)
                    .subscribe(function (updatedProduct) {
                    var arr = _this.products.getValue();
                    var index = arr.indexOf(product);
                    arr.splice(index, 1, updatedProduct);
                    _this.products.next(arr.slice());
                });
            }
        });
    };
    ProductsComponent.prototype.onDelete = function (product) {
        var _this = this;
        var modalRef = this.modalService
            .open(_shared_modals__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], { centered: true });
        modalRef.componentInstance.name = product.name;
        modalRef.result
            .then(function (confirmation) {
            if (confirmation) {
                _this.productService
                    .deleteById(product.id)
                    .subscribe(function (data) {
                    var arr = _this.products.getValue().filter(function (el) { return el.id !== product.id; });
                    _this.products.next(arr.slice());
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('actionTmpl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ProductsComponent.prototype, "actionTmpl", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n  color: red;\r\n  font-weight: bold; \r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n  <a class=\"navbar-brand\">Invoice app</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"nav navbar-nav\">\r\n\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-link\" (click)=\"openCustomers()\">\r\n          Customers\r\n        </button>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-link\" (click)=\"openProducts()\">\r\n          Products\r\n        </button>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-link\" (click)=\"openInvoices()\">\r\n          Invoices\r\n        </button>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
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
    HeaderComponent.prototype.openHome = function () {
        this.router.navigateByUrl('/');
    };
    HeaderComponent.prototype.openCustomers = function () {
        this.router.navigateByUrl('/customers');
    };
    HeaderComponent.prototype.openProducts = function () {
        this.router.navigateByUrl('/products');
    };
    HeaderComponent.prototype.openInvoices = function () {
        this.router.navigateByUrl('/invoices');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/shared/layout/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lorem-ipsum {\r\n  font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/layout/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/shared/layout/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lorem-ipsum\">\r\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/layout/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/layout/home/home.component.ts ***!
  \******************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/shared/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/shared/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: HeaderComponent, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/layout/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/shared/layout/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/shared/modals/confirm-delete/confirm-delete.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/modals/confirm-delete/confirm-delete.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modals/confirm-delete/confirm-delete.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modals/confirm-delete/confirm-delete.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n  <h4 class=\"modal-title\">Confirmation</h4>\n\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n\n</div>\n\n<div class=\"modal-body\">\n\n  <p>\n    <strong>Are you sure you want to delete <span class=\"text-primary\">\"{{ name }}\"</span> ?</strong>\n  </p>\n  \n  <p>All information associated to this user profile will be permanently deleted.\n    <span class=\"text-danger\">This operation can not be undone.</span>\n  </p>\n\n</div>\n\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"activeModal.close(false)\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"activeModal.close(true)\">Delete</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modals/confirm-delete/confirm-delete.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/modals/confirm-delete/confirm-delete.component.ts ***!
  \**************************************************************************/
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
            template: __webpack_require__(/*! ./confirm-delete.component.html */ "./src/app/shared/modals/confirm-delete/confirm-delete.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete.component.css */ "./src/app/shared/modals/confirm-delete/confirm-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/customers-create-update/customers-create-update.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/modals/customers-create-update/customers-create-update.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-danger {\r\n  border: red 2px solid;\r\n}\r\n\r\n.has-success {\r\n  border: green 2px solid;\r\n}\r\n\r\n.form-control-feedback {\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/modals/customers-create-update/customers-create-update.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/modals/customers-create-update/customers-create-update.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n  <span class=\"modal-title\">\n    <h4 *ngIf=\"action === 'create'\">Create form</h4>\n    <h4 *ngIf=\"action === 'edit'\">Edit form</h4>\n  </span>\n\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n\n</div>\n\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"editingForm\" (ngSubmit)=\"onSave()\">\n\n    <!-- NAME -->\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Name</span>\n      </div>\n      <input mdbInputDirective data-error=\"wrong text\" data-success=\"right text\"\n        type=\"text\" class=\"form-control\" formControlName=\"name\"\n        aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n\n    <div class=\"form-control-feedback\" *ngIf=\"nameInvalid\">\n      <p *ngIf=\"errorNameRequired\">Name is required</p>\n      <p *ngIf=\"errorNameMinlen\">Name must be 10 characters long</p>\n      <p *ngIf=\"errorNameMaxlen\">Name must contain no more than 30 characters</p>\n    </div>\n\n    <!-- PHONE -->\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Phone</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" formControlName=\"phone\"\n        aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n\n    <div class=\"form-control-feedback\" *ngIf=\"phoneInvalid\">\n      <p *ngIf=\"errorPhoneRequired\">Phone is required</p>\n      <p *ngIf=\"errorPhoneMinlen\">Phone must be 6 characters long</p>\n      <p *ngIf=\"errorPhoneMaxlen\">Phone must contain no more than 11 characters</p>\n    </div>\n  \n    <!-- ADDRESS -->\n  \n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Address</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\"\n        aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n\n    <div class=\"form-control-feedback\" *ngIf=\"addressInvalid\">\n      <p *ngIf=\"errorAddressRequired\">Address is required</p>\n      <p *ngIf=\"errorAddressMinlen\">Address must be 10 characters long</p>\n      <p *ngIf=\"errorAddressMaxlen\">Address must contain no more than 30 characters</p>\n    </div>\n\n  </form>\n      \n</div>\n\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"activeModal.close(false)\">\n    Cancel\n  </button>\n  \n  <button type=\"button\" class=\"btn btn-success\" (click)=\"onSave()\"\n  [disabled]=\"editingForm.pristine || editingForm.invalid\">\n    {{ buttonOk }}\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modals/customers-create-update/customers-create-update.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modals/customers-create-update/customers-create-update.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomersCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersCreateUpdateComponent", function() { return CustomersCreateUpdateComponent; });
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



var CustomersCreateUpdateComponent = /** @class */ (function () {
    function CustomersCreateUpdateComponent(activeModal, fb) {
        this.activeModal = activeModal;
        this.fb = fb;
    }
    CustomersCreateUpdateComponent.prototype.ngOnInit = function () {
        this.buttonOk = (this.action === 'edit') ? 'Update' : 'Create';
        this.editingForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.phone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.customer.address, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ]),
        });
    };
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "name", {
        //////////////////////////////////////////////////////////////////////////////////////////////
        // VALIDATION
        get: function () { return this.editingForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "nameInvalid", {
        get: function () { return this.name.invalid && (this.name.dirty || this.name.touched); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorNameRequired", {
        get: function () { return this.name.hasError('required') && this.name.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorNameMinlen", {
        get: function () { return this.name.hasError('minlength') && this.name.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorNameMaxlen", {
        get: function () { return this.name.hasError('maxlength') && this.name.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "phone", {
        get: function () { return this.editingForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "phoneInvalid", {
        get: function () { return this.phone.invalid && (this.phone.dirty || this.phone.touched); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorPhoneRequired", {
        get: function () { return this.phone.hasError('required') && this.phone.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorPhoneMinlen", {
        get: function () { return this.phone.hasError('minlength') && this.phone.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorPhoneMaxlen", {
        get: function () { return this.phone.hasError('maxlength') && this.phone.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "address", {
        get: function () { return this.editingForm.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "addressInvalid", {
        get: function () { return this.address.invalid && (this.address.dirty || this.address.touched); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorAddressRequired", {
        get: function () { return this.address.hasError('required') && this.address.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorAddressMinlen", {
        get: function () { return this.address.hasError('minlength') && this.address.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomersCreateUpdateComponent.prototype, "errorAddressMaxlen", {
        get: function () { return this.address.hasError('maxlength') && this.address.touched; },
        enumerable: true,
        configurable: true
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    CustomersCreateUpdateComponent.prototype.onSave = function () {
        var userInput = this.editingForm.value;
        var updatedInfo = {
            name: userInput.name || this.customer.name,
            phone: userInput.phone || this.customer.phone,
            address: userInput.address || this.customer.address,
        };
        this.activeModal.close(updatedInfo);
        this.editingForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomersCreateUpdateComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomersCreateUpdateComponent.prototype, "customer", void 0);
    CustomersCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-create-update',
            template: __webpack_require__(/*! ./customers-create-update.component.html */ "./src/app/shared/modals/customers-create-update/customers-create-update.component.html"),
            styles: [__webpack_require__(/*! ./customers-create-update.component.css */ "./src/app/shared/modals/customers-create-update/customers-create-update.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomersCreateUpdateComponent);
    return CustomersCreateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/shared/modals/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/modals/index.ts ***!
  \****************************************/
/*! exports provided: ConfirmDeleteComponent, CustomersCreateUpdateComponent, ProductsCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/shared/modals/confirm-delete/confirm-delete.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function() { return _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDeleteComponent"]; });

/* harmony import */ var _customers_create_update_customers_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-create-update/customers-create-update.component */ "./src/app/shared/modals/customers-create-update/customers-create-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomersCreateUpdateComponent", function() { return _customers_create_update_customers_create_update_component__WEBPACK_IMPORTED_MODULE_1__["CustomersCreateUpdateComponent"]; });

/* harmony import */ var _products_create_update_products_create_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-create-update/products-create-update.component */ "./src/app/shared/modals/products-create-update/products-create-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsCreateUpdateComponent", function() { return _products_create_update_products_create_update_component__WEBPACK_IMPORTED_MODULE_2__["ProductsCreateUpdateComponent"]; });






/***/ }),

/***/ "./src/app/shared/modals/products-create-update/products-create-update.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/modals/products-create-update/products-create-update.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-danger {\r\n  border: red 2px solid;\r\n}\r\n\r\n.has-success {\r\n  border: green 2px solid;\r\n}\r\n\r\n.form-control-feedback {\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/modals/products-create-update/products-create-update.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modals/products-create-update/products-create-update.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n\n  <span class=\"modal-title\">\n    <h4 *ngIf=\"action === 'create'\">Create form</h4>\n    <h4 *ngIf=\"action === 'edit'\">Edit form</h4>\n  </span>\n\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n\n</div>\n\n<div class=\"modal-body\">\n\n  <form [formGroup]=\"editingForm\" (ngSubmit)=\"onSave()\">\n\n    <!-- NAME -->\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Name</span>\n      </div>\n      <input mdbInputDirective data-error=\"wrong text\" data-success=\"right text\"\n        type=\"text\" class=\"form-control\" formControlName=\"name\"\n        aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n\n    <div class=\"form-control-feedback\" *ngIf=\"nameInvalid\">\n      <p *ngIf=\"errorNameRequired\">Name is required</p>\n    </div>\n\n    <!-- PRICE -->\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Price $</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" formControlName=\"price\"\n        aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n    </div>\n\n    <div class=\"form-control-feedback\" *ngIf=\"priceInvalid\">\n      <p *ngIf=\"errorPriceRequired\">Price is required</p>\n    </div>\n\n  </form>\n    \n</div>\n\n<div class=\"modal-footer\">\n\n  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"activeModal.close(false)\">\n    Cancel\n  </button>\n  \n  <button type=\"button\" class=\"btn btn-success\" (click)=\"onSave()\">\n    {{ buttonOk }}\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modals/products-create-update/products-create-update.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/modals/products-create-update/products-create-update.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductsCreateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCreateUpdateComponent", function() { return ProductsCreateUpdateComponent; });
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



var ProductsCreateUpdateComponent = /** @class */ (function () {
    function ProductsCreateUpdateComponent(activeModal, fb) {
        this.activeModal = activeModal;
        this.fb = fb;
    }
    ProductsCreateUpdateComponent.prototype.ngOnInit = function () {
        this.buttonOk = (this.action === 'edit') ? 'Update' : 'Create';
        this.editingForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.product.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.product.price, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
    };
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "name", {
        //////////////////////////////////////////////////////////////////////////////////////////////
        // VALIDATION
        get: function () { return this.editingForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "nameInvalid", {
        get: function () { return this.name.invalid && (this.name.dirty || this.name.touched); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "errorNameRequired", {
        get: function () { return this.name.hasError('required') && this.name.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "price", {
        get: function () { return this.editingForm.get('price'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "priceInvalid", {
        get: function () { return this.price.invalid && (this.price.dirty || this.price.touched); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCreateUpdateComponent.prototype, "errorPriceRequired", {
        get: function () { return this.price.hasError('required') && this.price.touched; },
        enumerable: true,
        configurable: true
    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    ProductsCreateUpdateComponent.prototype.onSave = function () {
        var userInput = this.editingForm.value;
        var updatedInfo = {
            name: userInput.name || this.product.name,
            price: userInput.price || this.product.price,
        };
        this.activeModal.close(updatedInfo);
        this.editingForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductsCreateUpdateComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsCreateUpdateComponent.prototype, "product", void 0);
    ProductsCreateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-create-update',
            template: __webpack_require__(/*! ./products-create-update.component.html */ "./src/app/shared/modals/products-create-update/products-create-update.component.html"),
            styles: [__webpack_require__(/*! ./products-create-update.component.css */ "./src/app/shared/modals/products-create-update/products-create-update.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductsCreateUpdateComponent);
    return ProductsCreateUpdateComponent;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals */ "./src/app/shared/modals/index.ts");
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
                _layout__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _modals__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"],
                _modals__WEBPACK_IMPORTED_MODULE_5__["CustomersCreateUpdateComponent"],
                _modals__WEBPACK_IMPORTED_MODULE_5__["ProductsCreateUpdateComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _modals__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"],
                _modals__WEBPACK_IMPORTED_MODULE_5__["CustomersCreateUpdateComponent"],
                _modals__WEBPACK_IMPORTED_MODULE_5__["ProductsCreateUpdateComponent"],
            ],
            exports: [
                _layout__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _layout__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

module.exports = __webpack_require__(/*! D:\iT\code\Web\Front-End\Angular\fe-assessment\feassessment-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map