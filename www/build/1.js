webpackJsonp([1],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRecibirPinPageModule", function() { return LoginRecibirPinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_recibir_pin__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginRecibirPinPageModule = /** @class */ (function () {
    function LoginRecibirPinPageModule() {
    }
    LoginRecibirPinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_recibir_pin__["a" /* LoginRecibirPinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_recibir_pin__["a" /* LoginRecibirPinPage */]),
            ],
        })
    ], LoginRecibirPinPageModule);
    return LoginRecibirPinPageModule;
}());

//# sourceMappingURL=login-recibir-pin.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRecibirPinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_error_pin_login_error_pin__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_ya_registrado_login_ya_registrado__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginRecibirPinPage = /** @class */ (function () {
    function LoginRecibirPinPage(events, navCtrl, nav, restProvider, alertCtrl, loadingCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { digitos: '' }; // Array con los campos del formulario
        this.data = Array();
        this.bCrear = { name: 'Siguiente', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.data = this.nav.get("data");
        console.log("CONSTRUCTR");
        console.log(this.data);
    }
    LoginRecibirPinPage.prototype.reEnviarPIN = function () {
        var _this = this;
        this.showLoading();
        this.restProvider.sendPIN(this.data.data.dni.trim()).then(function (d) {
            _this.loading.dismiss();
            if (typeof d != "undefined" && d['status'] == 1) {
                _this.data = d;
                console.log("FUNCION");
                console.log(_this.data);
            }
            else if (typeof d != "undefined" && d['status'] == 2) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_error_pin_login_error_pin__["a" /* LoginErrorPinPage */]);
            }
            else if (typeof d != "undefined" && d['status'] == 3) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_ya_registrado_login_ya_registrado__["a" /* LoginYaRegistradoPage */]);
            }
            else {
                if (typeof d['code'] != "undefined")
                    _this.showError("ERROR " + d['code'], "Acceso Denegado");
                else
                    _this.showError("ERROR", "Acceso Denegado");
            }
        });
    };
    /**
    * 	Función que muestra el ProgressBar cuando alguna acción
    *	se está ejecutando en primer plano.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    LoginRecibirPinPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    /**
    * 	Función que muestra una alerta con el titulo
    *	y el texto pasado por parámetro.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    LoginRecibirPinPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    var _a, _b, _c, _d, _e, _f;
    LoginRecibirPinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-recibir-pin',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/login-recibir-pin/login-recibir-pin.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Introduce el PIN</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<p>\n		Introduce el pin de 6 dígitos que te hemos enviado por {{ data.data.tipo }}: <span>{{ data.data.direccion }}</span>\n	</p>\n	<br />\n	<ion-list>\n		<ion-item style=" width: 94%;">\n			<ion-label stacked>PIN</ion-label>\n			<ion-input type="text" [(ngModel)]="registerCredentials.digitos"></ion-input>\n		</ion-item>\n		<p class="olvido">Nº de 6 dígitos</p>		\n	</ion-list>\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bCrear" [class]="bCrear.class" (click)="siguiente()"></fb-button>\n	</div>\n	<ion-footer>\n		<p style="text-align: center;">\n			No lo he recibido.<br/>\n			<a (click)="reEnviarPIN()">Reenviar PIN</a>\n		</p>\n	</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/login-recibir-pin/login-recibir-pin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]) === "function" && _f || Object])
    ], LoginRecibirPinPage);
    return LoginRecibirPinPage;
}());

//# sourceMappingURL=login-recibir-pin.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginErrorPinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginErrorPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginErrorPinPage = /** @class */ (function () {
    function LoginErrorPinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginErrorPinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginErrorPinPage');
    };
    LoginErrorPinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-error-pin',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/login-error-pin/login-error-pin.html"*/'<!--\n  Generated template for the LoginErrorPinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LoginErrorPin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/login-error-pin/login-error-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], LoginErrorPinPage);
    return LoginErrorPinPage;
}());

//# sourceMappingURL=login-error-pin.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginYaRegistradoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginYaRegistradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginYaRegistradoPage = /** @class */ (function () {
    function LoginYaRegistradoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginYaRegistradoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginYaRegistradoPage');
    };
    LoginYaRegistradoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-ya-registrado',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/login-ya-registrado/login-ya-registrado.html"*/'<!--\n  Generated template for the LoginYaRegistradoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LoginYaRegistrado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/login-ya-registrado/login-ya-registrado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], LoginYaRegistradoPage);
    return LoginYaRegistradoPage;
}());

//# sourceMappingURL=login-ya-registrado.js.map

/***/ })

});
//# sourceMappingURL=1.js.map