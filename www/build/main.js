webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_mock_mock_stores__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_mock_mock_products__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreService = (function () {
    function StoreService() {
        this.stores = __WEBPACK_IMPORTED_MODULE_1__json_mock_mock_stores__["a" /* STORES */];
        this.product = __WEBPACK_IMPORTED_MODULE_2__json_mock_mock_products__["a" /* PRODUCTS */];
    }
    StoreService.prototype.getAllStores = function () {
        return this.stores;
    };
    StoreService.prototype.getStoreById = function (id) {
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].id === id) {
                return this.stores[i];
            }
        }
        return null;
    };
    StoreService.prototype.getAllProduct = function (id) {
        /*let storeProduct: any = [];
        for (let i = 0; i < this.product.length; i++) {
            if (this.product[i].storeId === id) {
                storeProduct.push(this.product[i]);
            }
        }
        return storeProduct;*/
        return this.product;
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StoreService);

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_stores__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(nav, popoverCtrl) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        // List of Items
        this.itemList = ["Meat", "Dairy", "Fruits and Vegetables", "Beverages", "Snacks"];
        this.selectedType = {
            item: "",
            zipCode: ""
        };
        this.selectedType.item = "";
        this.selectedType.zipCode = "";
    }
    // go to result page
    HomePage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__store_stores__["a" /* StorePage */], this.selectedType);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\projects\Wasteless\Wasteless\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n		<h1>Wasteless</h1>\n		<h3 class="subtitle"> Spend better and get more</h3>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card no-margin margin-bottom class="full-width">\n    <ion-item tappable class="border-bottom">\n		<ion-input placeholder="Enter your location zipcode" [(ngModel)]="selectedType.zipCode"></ion-input>\n      <ion-icon name="search" color="primary" item-left></ion-icon>\n    </ion-item>\n    <ion-item>\n        <ion-label class="text-1x bold">Select Items</ion-label>\n        <ion-select [(ngModel)]="selectedType.item" (ionChange)="getWeather(item)">\n          <ion-option *ngFor="let item of itemList" [value]="item">{{ item }}</ion-option>\n        </ion-select>\n      </ion-item>\n  </ion-card>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n    <ion-icon name="search"></ion-icon> Search\n  </button>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title item-left>\n		<p class="footerContent">Contact US <br> Wasteless, 1 Pace Plaza 10038 </p>\n	 </ion-title>\n	 \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"E:\projects\Wasteless\Wasteless\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_detail_store_detail__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorePage = (function () {
    function StorePage(nav, storeService, navParams) {
        this.nav = nav;
        this.storeService = storeService;
        this.navParams = navParams;
        this.selectedType = {
            item: "",
            zipCode: ""
        };
        this.stores = [];
        // set sample data
        var tempStores = [];
        this.selectedType = this.navParams.data;
        this.stores = storeService.getAllStores();
        if (this.selectedType && (this.selectedType.item != "" || this.selectedType.zipCode != "")) {
            for (var _i = 0, _a = this.stores; _i < _a.length; _i++) {
                var store = _a[_i];
                if ((this.selectedType.zipCode && this.selectedType.zipCode == store.zipcode) ||
                    (this.selectedType.item && store.items.includes(this.selectedType.item))) {
                    tempStores.push(store);
                }
            }
            this.stores = tempStores;
        }
        else {
            this.stores = [];
        }
    }
    // view trip detail
    StorePage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__store_detail_store_detail__["a" /* StoreDetailPage */], id);
    };
    return StorePage;
}());
StorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stores',template:/*ion-inline-start:"E:\projects\Wasteless\Wasteless\src\pages\store\stores.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text>Promotions near you</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light" *ngIf="stores && stores.length <= 0">\n    <p ion-text no-margin class="no-results">\n      <strong>No results found.</strong>\n    </p>\n  </ion-toolbar>\n	\n  <ion-toolbar padding color="light" *ngIf="stores && stores.length > 0">\n    <p ion-text no-margin class="text-white">\n      <strong>{{stores.length}}</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n	<!--list of stores-->\n	<ion-grid>\n		<ion-row *ngFor="let store of stores">\n		 	<ion-col>\n				<img class="feed_post_photo_img" [src]="store.thumb" alt="">\n			</ion-col>\n			<ion-col text-wrap>\n				<div class="text-headre">\n					<span class="store-name" (click)="viewDetail(store.id)" ion-text color="primary">{{ store.name }}</span>\n				</div>\n				<div>\n					<span ion-text color="darkblack">{{ store.location }}</span>\n				</div>\n				<div>\n					<span ion-text color="darkblack">{{ store.zipcode }}</span>\n				</div>\n			</ion-col>\n    	</ion-row>\n    	\n  </ion-grid>\n	\n</ion-content>\n'/*ion-inline-end:"E:\projects\Wasteless\Wasteless\src\pages\store\stores.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], StorePage);

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreDetailPage = (function () {
    function StoreDetailPage(nav, storeService, navParams) {
        this.nav = nav;
        this.storeService = storeService;
        this.navParams = navParams;
        // stores info
        this.products = [];
        // set store Id
        this.storeId = this.navParams.data;
        //get store based on id
        this.store = storeService.getStoreById(this.storeId);
        // get product based on store Id.
        this.products = storeService.getAllProduct(this.storeId);
    }
    return StoreDetailPage;
}());
StoreDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-store-detail',template:/*ion-inline-start:"E:\projects\Wasteless\Wasteless\src\pages\store-detail\store-detail.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <span ion-text>Grab it before it goes to waste !!</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n	\n 	<!--services-->\n  	<ion-grid>\n		<ion-item *ngFor="let product of products">\n		<ion-row>\n			<ion-col text-left>\n				<div>\n					<span ion-text color="darkblack"><strong>{{product.item}}</strong></span>\n				</div>\n			</ion-col>\n		</ion-row>\n		<ion-row >\n		 	<ion-col>\n				<img class="feed_post_photo_img" [src]="product.thumb" alt="">\n			</ion-col>\n			<ion-col text-wrap>\n				<div>\n					<span ion-text color="darkblack">{{ product.price }}</span>\n				</div>\n				<div>\n					<ion-icon name="time" class="text-green"></ion-icon>\n					<span ion-text color="darkblack">{{ product.ends }}</span>\n				</div>\n				<div *ngFor="let discount of product.discounts">\n					<span ion-text color="darkblack">{{ discount }}</span>\n				</div>\n			</ion-col>\n    	</ion-row>\n		</ion-item>\n    	\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\projects\Wasteless\Wasteless\src\pages\store-detail\store-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], StoreDetailPage);

//# sourceMappingURL=store-detail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(217);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_store_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_store_detail_store_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_store_stores__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_store_detail_store_detail__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_store_stores__["a" /* StorePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_store_detail_store_detail__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_store_stores__["a" /* StorePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_store_service__["a" /* StoreService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORES; });
var STORES = [
    {
        id: 1,
        name: "Key Food Supermarket",
        location: "55 Fulton Street",
        thumb: "../assets/img/key_food_logo.png",
        zipcode: "10038",
        items: [
            "Meat",
            "Dairy",
            "Fruits and Vegetables"
        ]
    },
    {
        id: 2,
        name: "Jubilee Market Place",
        location: "99 John Street",
        thumb: "../assets/img/jubilee_logo.png",
        zipcode: "10038",
        items: [
            "Meat",
            "Fruits and Vegetables",
            "Snacks"
        ]
    },
    {
        id: 3,
        name: "Whole Foods",
        location: "100 W 125th Street",
        thumb: "../assets/img/whole_foods.JPG",
        zipcode: "10027",
        items: [
            "Meat",
            "Fruits and Vegetables",
            "Beverages",
            "Snacks"
        ]
    },
    {
        id: 4,
        name: "C-Town Supermarkets",
        location: "560 W 125th Street",
        thumb: "../assets/img/C_Town.jpg",
        zipcode: "10027",
        items: [
            "Dairy",
            "Beverages",
            "Snacks"
        ]
    }
];
//# sourceMappingURL=mock-stores.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        id: 1,
        storeId: 1,
        item: "Meat",
        price: "1 lb for $5.00",
        thumb: "../assets/img/Meat.jpg",
        ends: "05/06/19",
        discounts: [
            "Discount available on Different Beef Products"
        ]
    },
    {
        id: 2,
        storeId: 1,
        item: "Dairy",
        price: "2 for $6.00",
        thumb: "../assets/img/dairy.jpg",
        ends: "05/06/19",
        discounts: [
            "Almond Breeze Cashew Milk Blend, Original"
        ]
    },
    {
        id: 3,
        storeId: 2,
        item: "Fruits and Vegetables",
        price: "1 lb for 2.99",
        thumb: "../assets/img/vegetables.jpg",
        ends: "05/06/19",
        discounts: [
            "Tomatoes, Fresh"
        ]
    },
    {
        id: 4,
        storeId: 2,
        item: "Beverages",
        price: "6 Pack Mini Cans for $2.99",
        thumb: "../assets/img/beverages.jpg",
        ends: "05/06/19",
        discounts: [
            "Coca-Cola, Pepsi, Sprite"
        ]
    },
    {
        id: 4,
        storeId: 2,
        item: "Snacks",
        price: "2 for $6.00",
        thumb: "../assets/img/snacks.jpg",
        ends: "05/06/19",
        discounts: [
            "Kettle Brand All Natural Potato Chips, Lightly Salted"
        ]
    }
];
//# sourceMappingURL=mock-products.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            //this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\projects\Wasteless\Wasteless\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  \n\n  <ion-content color="primary">\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\projects\Wasteless\Wasteless\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map