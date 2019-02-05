webpackJsonp([0],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesoResultadosPageModule", function() { return AccesoResultadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acceso_resultados__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccesoResultadosPageModule = /** @class */ (function () {
    function AccesoResultadosPageModule() {
    }
    AccesoResultadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__acceso_resultados__["a" /* AccesoResultadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__acceso_resultados__["a" /* AccesoResultadosPage */]),
            ],
        })
    ], AccesoResultadosPageModule);
    return AccesoResultadosPageModule;
}());

//# sourceMappingURL=acceso-resultados.module.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccesoResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the AccesoResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccesoResultadosPage = /** @class */ (function () {
    function AccesoResultadosPage(/*private domSanitizer: DomSanitizer, */ restProvider, loadingCtrl, navCtrl, navParams) {
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.files = new Array();
        this.error = false;
        this.repeatCall = 0;
        this.errorMsg = "";
        this.subErrorMsg = "";
        this.loadingPresented = false;
        this.showLoading();
        this.listFiles();
    }
    AccesoResultadosPage.prototype.openURL = function (url) {
        var _this = this;
        console.log("OPENURL -> " + url);
        if (this.repeatCall < 5) {
            this.restProvider.getImage(url).then(function (data) {
                if (typeof data != "undefined" && data['status'] == 1) {
                    /*for (var key in data['data']) {
                        this.files.push(data['data'][key]);
                    }*/
                    console.log(data);
                    _this.loading.dismiss();
                    _this.repeatCall = 0;
                }
                else if (data.status == 401) {
                    _this.repeatCall++;
                    var user = window.localStorage.getItem("user");
                    var pass = window.localStorage.getItem("pass");
                    _this.login(user, pass);
                    console.log("0. Repetir llamada a función");
                    setTimeout(function () { _this.openURL(url); }, 1000);
                }
                else if (data['status'] == 0 && data['code'] == 5003) {
                    _this.loading.dismiss();
                    _this.error = true;
                    _this.errorMsg = "No se han obtenido registros";
                    _this.subErrorMsg = "No hay citas en nuestra base de datos.";
                    _this.repeatCall = 0;
                }
                else {
                    _this.repeatCall++;
                    console.log("1. Repetir llamada a función");
                    setTimeout(function () { _this.openURL(url); }, 1000);
                }
            }).catch(function (e) {
                _this.loading.dismiss();
                console.log(e);
                _this.repeatCall = 0;
            });
        }
        else {
            this.loading.dismiss();
            this.error = true;
            this.errorMsg = "No se han obtenido registros";
            this.subErrorMsg = "Revisa la conexión a Internet";
            this.repeatCall = 0;
        }
    };
    AccesoResultadosPage.prototype.listFiles = function () {
        var _this = this;
        if (this.repeatCall < 5) {
            this.restProvider.listFiles().then(function (data) {
                if (typeof data != "undefined" && data['status'] == 1) {
                    for (var key in data['data']) {
                        _this.files.push(data['data'][key]);
                    }
                    console.log(data);
                    _this.loading.dismiss();
                    _this.repeatCall = 0;
                }
                else if (data.status == 401) {
                    _this.repeatCall++;
                    var user = window.localStorage.getItem("user");
                    var pass = window.localStorage.getItem("pass");
                    _this.login(user, pass);
                    console.log("0.Repetir llamada a función");
                    setTimeout(function () { _this.listFiles(); }, 1000);
                }
                else if (data['status'] == 0 && data['code'] == 5003) {
                    _this.loading.dismiss();
                    _this.error = true;
                    _this.errorMsg = "No se han obtenido registros";
                    _this.subErrorMsg = "No hay citas en nuestra base de datos.";
                    _this.repeatCall = 0;
                }
                else {
                    _this.repeatCall++;
                    console.log("Repetir llamada a función");
                    setTimeout(function () { _this.listFiles(); }, 1000);
                }
            }).catch(function (e) {
                _this.loading.dismiss();
                console.log(e);
                _this.repeatCall = 0;
            });
        }
        else {
            this.loading.dismiss();
            this.error = true;
            this.errorMsg = "No se han obtenido registros";
            this.subErrorMsg = "Revisa la conexión a Internet";
            this.repeatCall = 0;
        }
    };
    AccesoResultadosPage.prototype.login = function (user, pass) {
        this.restProvider.login(user, pass).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                window.localStorage.setItem("user", user);
                window.localStorage.setItem("pass", pass);
                window.localStorage.setItem("token", data['token']);
                window.localStorage.setItem("expires", data['expires']);
            }
        });
    };
    AccesoResultadosPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
        });
        this.loading.present();
    };
    AccesoResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-acceso-resultados',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/acceso-resultados/acceso-resultados.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pruebas diagnosticas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n  \n  <div ion-item *ngFor="let file of files">\n    \n    <ion-avatar item-start>\n      <img [src]="domSanitizer.bypassSecurityTrustUrl(file.url)" [ngStyle]="{\'background-size\': \'cover\',\'border-radius\': \'unset\'}" imageViewer />\n    </ion-avatar>\n    \n    <h2 style="margin-top: 0rem; ">{{file.nombre}}</h2>    \n    <p>Pulsa para ver la imagen.</p>\n    \n  </div>\n  \n</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/acceso-resultados/acceso-resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AccesoResultadosPage);
    return AccesoResultadosPage;
}());

//# sourceMappingURL=acceso-resultados.js.map

/***/ })

});
//# sourceMappingURL=0.js.map