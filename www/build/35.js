webpackJsonp([35],{

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedirCitaReservaPageModule", function() { return PedirCitaReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedir_cita_reserva__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedirCitaReservaPageModule = /** @class */ (function () {
    function PedirCitaReservaPageModule() {
    }
    PedirCitaReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedir_cita_reserva__["a" /* PedirCitaReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedir_cita_reserva__["a" /* PedirCitaReservaPage */]),
            ],
        })
    ], PedirCitaReservaPageModule);
    return PedirCitaReservaPageModule;
}());

//# sourceMappingURL=pedir-cita-reserva.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the PedirCitaReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedirCitaReservaPage = /** @class */ (function () {
    function PedirCitaReservaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedirCitaReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedirCitaReservaPage');
    };
    PedirCitaReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita-reserva',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/pedir-cita-reserva/pedir-cita-reserva.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cita reservada</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	\n	<div style=" margin: 4rem;">\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p style=" margin: 4rem;">Contrary to popular belief/opinion. Del Lonncontrary to popula</p>\n\n    <ion-slides spaceBetween="20" slidesPerView="1.3" centeredSlides="true" centerInsufficientSlides="true">\n	    <ion-slide *ngFor="let item of citasBuscador">\n	      <div class="fb-card -vcita -gradient">\n	          <div class="card_row">\n	              <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n	                  <div class="card_subtitle -white" style="font-size: 1.4rem;">\n	                      {{item.diaSemana}}\n	                  </div>\n	                  <div class="card_time -white">\n	                      {{item.dia}}\n	                      <span>\n	                      {{item.mes}}\n	                      </span>\n	                  </div>\n	                  <div class="card_subtitle -white" style="font-size:1rem;">\n	                      {{item.ano}}\n	                  </div>\n	              </div>\n	              <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n	                  <div style="display:flex;flex-direction:column;align-items: flex-end;">\n	                      <div class="card_time -white">\n	                          {{item.hora}}\n	                          <span style="display:inline;">\n	                              H\n	                          </span>\n	                      </div>\n	                      <div class="card_subtitle -white">\n	                          Duración:\n	                          <span>\n	                              {{item.Duracion}}\'\n	                          </span>\n	                      </div>\n	                  </div>\n	              </div>\n	          </div>\n	          <div class="card_content -bg-white">\n	              <div class="card_row">\n	                  <div>\n	                      <div class="card_label">\n	                          Tratamiento\n	                      </div>\n	                      <div class="card_title">\n	                         {{item.tratamiento}}\n	                      </div>\n	                  </div>\n	              </div>\n	              <div class="card_separator">\n	              </div>\n	              <div class="card_row">\n	                  <div class="left">\n	                      <div class="card_label">\n	                          Profesional\n	                      </div>\n	                      <div class="card_container">\n	                          <div class="avatar">\n	                              <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n	                          </div>\n	                          <div class="card_title">\n	                             {{item.usuario}}\n	                          </div>\n	                      </div>\n	                  </div>\n	                  <div class="right">\n	                      <div class="card_label">\n	                          Estado de la cita\n	                      </div>\n	                      <div class="card_estado">\n	                          Reservada\n	                      </div>\n	                  </div>\n	              </div>\n	          </div>\n	      </div>\n	    </ion-slide>\n 	</ion-slides>\n\n 	<p style=" text-align: center; margin: 2rem 0 0; font-size: 1rem;">4 de 4</p>\n\n	<ion-row style="max-height: 9%;    display: flex;    margin: 0rem 1rem 0 1rem">\n		<ion-col><fb-button [name]="bInicio" [class]="bInicio.class" (click)="inicio()" ></fb-button></ion-col>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/pedir-cita-reserva/pedir-cita-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], PedirCitaReservaPage);
    return PedirCitaReservaPage;
}());

//# sourceMappingURL=pedir-cita-reserva.js.map

/***/ })

});
//# sourceMappingURL=35.js.map