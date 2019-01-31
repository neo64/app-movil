webpackJsonp([24],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHigienesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_recall_recall__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recall_pasadas_recall_pasadas__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabHigienesPage = /** @class */ (function () {
    function TabHigienesPage(events, navCtrl) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.tabFuturas = __WEBPACK_IMPORTED_MODULE_2__pages_recall_recall__["a" /* RecallPage */]; // Página de citas futuras
        this.tabAnteriores = __WEBPACK_IMPORTED_MODULE_3__pages_recall_pasadas_recall_pasadas__["a" /* RecallPasadasPage */]; // Página de citas pasadas
        events.subscribe("user:Unauthorized", function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Tabs */])
    ], TabHigienesPage.prototype, "tabs", void 0);
    TabHigienesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-higienes',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/tab-higienes/tab-higienes.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Higienes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>       \n  <ion-tabs #myTab tabsPlacement="top" selectedIndex="1">\n    <ion-tab [root]="tabAnteriores" tabTitle="Pasadas" ></ion-tab>          \n    <ion-tab [root]="tabFuturas" tabTitle="Futuras" ></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/tab-higienes/tab-higienes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], TabHigienesPage);
    return TabHigienesPage;
}());

//# sourceMappingURL=tab-higienes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstruccionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(63);
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
 * Generated class for the InstruccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstruccionesPage = /** @class */ (function () {
    function InstruccionesPage(toastCtrl, file, fileOpener, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.tituloSubtitulo = { titulo: "Mis Instrucciones", subtitulo: "de tratamiento" };
        this.showLoading();
        this.getInstrucciones();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de las instrucciones
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    InstruccionesPage.prototype.getInstrucciones = function () {
        var _this = this;
        this.restProvider.getInstrucciones().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                for (var key in data['data']) {
                    _this.cards.push(data['data'][key]);
                    _this.showCardError = false;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            //console.log(e);
        });
    };
    /**
    * 	Función que convierte a Blob una cadena en Base64
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    InstruccionesPage.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        if (sliceSize === void 0) { sliceSize = 512; }
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
    * 	Función que almacena el archivo PDF en el sistema,
    *	y a continuación abre el visor para verlo.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    InstruccionesPage.prototype.openPdf = function (base64, numDoc) {
        var _this = this;
        if (base64 == "") {
            this.presentToast("No es posible abrir el documento.");
        }
        else {
            this.showLoading();
            var blob = this.b64toBlob(base64, 'application/pdf');
            var name = "Instrucciones" + numDoc + ".pdf";
            var directory_1 = this.file.dataDirectory;
            // Guardo el fichero en la memoria del dispositivo
            this.file.writeFile(directory_1, name, blob).then(function (_) {
                // Leo el fichero desde la memoria del dispositivo
                _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                    _this.loading.dismiss();
                }).catch(function (e) {
                    alert('Error abriendo el archivo');
                    _this.loading.dismiss();
                });
            }).catch(function (err) {
                // Si ocurre que el fichero ya existe, lo leo de la memoria del dispositivo
                if (err.code == 12) {
                    _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                        _this.loading.dismiss();
                    }).catch(function (e) {
                        alert('Error abriendo el archivo');
                        _this.loading.dismiss();
                    });
                }
                else {
                    _this.showError("ERROR " + err.code, err.message);
                }
            });
        }
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
    InstruccionesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    InstruccionesPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    InstruccionesPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    InstruccionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-instrucciones',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/instrucciones/instrucciones.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Instrucciones</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<!-- Gradiente -->\n	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient4" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<!-- Fin Gradiente -->\n	\n	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n\n	<br />\n\n    <p>Contrary to popular belief/opinion. Del Longman Dictionary of Contemporary Englishcontrary to popular belief/opinioncontrary to popular belief/opinionused to say that something is true even though people believe the opposite Contrary to popular belief, a desert can be very cold.</p>\n\n    <br />	 \n\n	<div *ngFor="let card of cards">\n		<div class="fb-card -v1">\n                <div class="left">\n                    <div class="avatar">\n                        <svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> \n                        	<g fill="url(#fb-shadow-gradient4)" stroke="none">\n                        		<defs>\n                        			<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n                        		</defs>\n                        		<clipPath id="b">\n                        			<use xlink:href="#a" overflow="visible"/>\n                        		</clipPath>\n                        		<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/>\n                        	</g>\n                       	</svg>\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                        {{ card.nombre }}\n                    </div>\n                    <div class="card_subtitle">\n                        {{ card.fecha }}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="openPdf(card.base64, card.idopc)">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n                            <path fill="#fff" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n                        </svg> \n                    </a>\n                </div>\n            </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/instrucciones/instrucciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], InstruccionesPage);
    return InstruccionesPage;
}());

//# sourceMappingURL=instrucciones.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosPersonalizadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_consejos_detail_consejos_detail__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsejosPersonalizadosPage = /** @class */ (function () {
    function ConsejosPersonalizadosPage(domSanitizer, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.domSanitizer = domSanitizer;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.tituloSubtitulo = { titulo: "Mis Consejos", subtitulo: "de los doctores" };
        this.showLoading();
        this.getConsejosPersonalizados();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que abre una página
    *
    * 	@param Pagina Page nombre de la página
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsejosPersonalizadosPage.prototype.openPage = function (info) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_consejos_detail_consejos_detail__["a" /* ConsejosDetailPage */], {
            'data': info
        });
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de mis Consejos personalizados.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsejosPersonalizadosPage.prototype.getConsejosPersonalizados = function () {
        var _this = this;
        this.restProvider.getConsejosPersonalizados().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                for (var key in data['data']) {
                    if (key == "Img")
                        data['data'][key] = _this.domSanitizer.bypassSecurityTrustUrl(data['data'][key]);
                    _this.cards.push(data['data'][key]);
                }
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    ConsejosPersonalizadosPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    ConsejosPersonalizadosPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ConsejosPersonalizadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consejos-personalizados',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/consejos-personalizados/consejos-personalizados.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Consejos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n\n	<br />\n\n    <p>Contrary to popular belief/opinion. Del Longman Dictionary of Contemporary Englishcontrary to popular belief/opinioncontrary to popular belief/opinionused to say that something is true even though people believe the opposite Contrary to popular belief, a desert can be very cold.</p>\n\n    <br />	 \n\n	<div *ngFor="let card of cards">\n		<div class="fb-card -v1">\n                <div class="left">\n                    <div class="avatar">\n                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(card.Img)" />\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                        {{ card.Tratamiento }}\n                    </div>\n                    <div class="card_subtitle">\n                        {{ card.Doctor }}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="openPage(card)">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n                            <path fill="#fff" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n                        </svg> \n                    </a>\n                </div>\n            </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/consejos-personalizados/consejos-personalizados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], ConsejosPersonalizadosPage);
    return ConsejosPersonalizadosPage;
}());

//# sourceMappingURL=consejos-personalizados.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(events, alertCtrl, restProvider, navCtrl, loadingCtrl) {
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {}; // Array para almacenar los valores del perfil.
        this.loadingPresented = false; // Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
        this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación
        this.getProfile(); // Llamada a la funcion para obtener el perfil del paciente
        this.events.publish("user:logged");
    }
    /**
    * 	Función que actualiza los datos personales
    *	del paciente y envía un correo a citas@...
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ProfilePage.prototype.setProfile = function () {
        var _this = this;
        this.restProvider.setProfile(this.data).then(function (d) {
            if (typeof d != "undefined" && d['status'] == 1) {
                _this.showError("¡Bien!", d['data']);
                _this.loading.dismiss();
            }
            else if (d.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + d['message'] + "<br/><br/>[Code: " + d['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que obtiene todos los datos personales del
    *	paciente y los muestra en la interfaz, cada uno en
    *	su campo correspondiente.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.restProvider.getProfile().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.setValues(data['data']);
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que asigna los valores obtenidos en la petición
    *	a cada campo correspondiente.
    *
    * 	@param Array Valores obtenidos de la petición al servidor.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ProfilePage.prototype.setValues = function (values) {
        this.data.Email = values.Email;
        this.data.Nombre = values.Nombre;
        this.data.Apellidos = values.Apellidos;
        this.data.DNI = values.NIF;
        this.data.FecNacim = values.FecNacim;
        this.data.Direccion = values.Direccion;
        this.data.TelMovil = values.TelMovil;
        this.data.Tel1 = values.Tel1;
        this.data.Alergias = values.Alergias;
        this.data.Medicacion = values.Medicacion;
        this.data.Localidad = values.Localidad;
        this.data.Provincia = values.Provincia;
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
    ProfilePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.loadingPresented = true;
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
    ProfilePage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/profile/profile.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Perfil</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<ion-list> \n	  <ion-item>\n		<ion-label color="primary" stacked>Email</ion-label>\n		<ion-input type="Email" placeholder="Email"  [(ngModel)]="data.Email"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Nombre</ion-label>\n		<ion-input type="text" placeholder="Nombre" [(ngModel)]="data.Nombre"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Apellidos</ion-label>\n		<ion-input type="text" placeholder="Apellidos" [(ngModel)]="data.Apellidos"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>DNI</ion-label>\n		<ion-input type="text" placeholder="DNI" [(ngModel)]="data.DNI"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Fecha nacimiento</ion-label>\n		<ion-input type="text" placeholder="Fecha nacimiento" [(ngModel)]="data.FecNacim"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Dirección</ion-label>\n		<ion-input type="text" placeholder="Dirección" [(ngModel)]="data.Direccion"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Localidad</ion-label>\n		<ion-input type="text" placeholder="Localidad" [(ngModel)]="data.Localidad"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Provincia</ion-label>\n		<ion-input type="text" placeholder="Provincia" [(ngModel)]="data.Provincia"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Teléfono móvil</ion-label>\n		<ion-input type="number" placeholder="Teléfono móvil" [(ngModel)]="data.TelMovil"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Teléfono fijo</ion-label>\n		<ion-input type="number" placeholder="Teléfono fijo" [(ngModel)]="data.Tel1"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Alergias</ion-label>\n		<ion-input type="text" placeholder="Alergias" [(ngModel)]="data.Alergias"></ion-input>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="primary" stacked>Medicacion</ion-label>\n		<ion-input type="text" placeholder="Medicacion" [(ngModel)]="data.Medicacion"></ion-input>\n	  </ion-item>\n	  <ion-item>  \n	  </ion-item>\n	</ion-list>\n	<button ion-button (click)="setProfile()" block style="margin-top: 1rem;"><i style="margin-right: 0.5rem;" class="fas fa-pen"></i>  Actualizar datos</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresupuestosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(63);
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
 * Generated class for the DocumentosContablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PresupuestosPage = /** @class */ (function () {
    function PresupuestosPage(toastCtrl, file, fileOpener, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.tituloSubtitulo = { titulo: "Mis Presupuestos", subtitulo: "de tratamientos" };
        this.showLoading();
        this.getPresupuestos();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que crea un PDF a partir de un HTML y lo muestra.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PresupuestosPage.prototype.createAndOpenPDF = function (html, numDoc) {
        var _this = this;
        document.addEventListener('deviceready', function () {
            cordova.plugins.pdf.htmlToPDF({
                data: html,
                documentSize: "A4",
                landscape: "portrait",
                type: "base64"
            }, function (sucess) { return _this.openPdf(sucess, numDoc); }, function (error) { return console.log('error:', error); });
        });
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de mis Documentos Contables
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PresupuestosPage.prototype.getPresupuestos = function () {
        var _this = this;
        this.restProvider.getPresupuestos().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                for (var key in data['data']) {
                    _this.cards.push(data['data'][key]);
                    _this.showCardError = false;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que convierte a Blob una cadena en Base64
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PresupuestosPage.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        if (sliceSize === void 0) { sliceSize = 512; }
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
    * 	Función que almacena el archivo PDF en el sistema,
    *	y a continuación abre el visor para verlo.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PresupuestosPage.prototype.openPdf = function (base64, numDoc) {
        var _this = this;
        if (base64 == "") {
            this.presentToast("No es posible abrir el documento.");
        }
        else {
            this.showLoading();
            var blob = this.b64toBlob(base64, 'application/pdf');
            var name = "Presupuesto" + numDoc + ".pdf";
            var directory_1 = this.file.dataDirectory;
            // Guardo el fichero en la memoria del dispositivo
            this.file.writeFile(directory_1, name, blob).then(function (_) {
                // Leo el fichero desde la memoria del dispositivo
                _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                    _this.loading.dismiss();
                }).catch(function (e) {
                    alert('Error abriendo el archivo');
                    _this.loading.dismiss();
                });
            }).catch(function (err) {
                // Si ocurre que el fichero ya existe, lo leo de la memoria del dispositivo
                if (err.code == 12) {
                    _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                        _this.loading.dismiss();
                    }).catch(function (e) {
                        alert('Error abriendo el archivo');
                        _this.loading.dismiss();
                    });
                }
                else {
                    _this.showError("ERROR " + err.code, err.message);
                }
            });
        }
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
    PresupuestosPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    PresupuestosPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    PresupuestosPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    PresupuestosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-presupuestos',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/presupuestos/presupuestos.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Presupuestos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n\n	<br />\n\n    <p>Contrary to popular belief/opinion. Del Longman Dictionary of Contemporary Englishcontrary to popular belief/opinioncontrary to popular belief/opinionused to say that something is true even though people believe the opposite Contrary to popular belief, a desert can be very cold.</p>\n\n    <br />	 \n\n	<div *ngFor="let card of cards">\n        <div class="fb-card -v2">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title">\n                        {{card.nomDoc}}\n                    </div>\n                    <div class="card_subtitle">\n                        Estado: {{card.estado}}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_subtitle">\n                       {{card.fecha}}\n                    </div>\n                </div>\n            </div>\n            <div class="card_separator">\n            </div>\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -price">\n                        {{card.total}} €\n                    </div>\n                    <div class="card_subtitle">\n                        {{card.formaPago}}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="createAndOpenPDF(card.html, card.NumPre)">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n                            <path fill="#fff" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n                        </svg> \n                    </a>\n                </div>\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/presupuestos/presupuestos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], PresupuestosPage);
    return PresupuestosPage;
}());

//# sourceMappingURL=presupuestos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosContablesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(63);
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
 * Generated class for the DocumentosContablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentosContablesPage = /** @class */ (function () {
    function DocumentosContablesPage(toastCtrl, file, fileOpener, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.showLoading();
        this.getDocumentosContables();
        this.events.publish("user:logged");
    }
    DocumentosContablesPage.prototype.solicitarFactura = function () {
        var _this = this;
        this.showLoading();
        this.restProvider.solicitarFactura().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.showError("¡Atención!", data['message']);
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que crea un PDF a partir de un HTML y lo muestra.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocumentosContablesPage.prototype.createAndOpenPDF = function (html, numDoc) {
        var _this = this;
        document.addEventListener('deviceready', function () {
            cordova.plugins.pdf.htmlToPDF({
                data: html,
                documentSize: "A4",
                landscape: "portrait",
                type: "base64"
            }, function (sucess) { return _this.openPdf(sucess, numDoc); }, function (error) { return console.log('error:', error); });
        });
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de mis Documentos Contables
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocumentosContablesPage.prototype.getDocumentosContables = function () {
        var _this = this;
        this.restProvider.getDocumentosContables().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                for (var key in data['data']) {
                    _this.cards.push(data['data'][key]);
                    _this.showCardError = false;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que convierte a Blob una cadena en Base64
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocumentosContablesPage.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        if (sliceSize === void 0) { sliceSize = 512; }
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
    * 	Función que almacena el archivo PDF en el sistema,
    *	y a continuación abre el visor para verlo.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocumentosContablesPage.prototype.openPdf = function (base64, numDoc) {
        var _this = this;
        if (base64 == "") {
            this.presentToast("No es posible abrir el documento.");
        }
        else {
            this.showLoading();
            var blob = this.b64toBlob(base64, 'application/pdf');
            var name = "Documento" + numDoc + ".pdf";
            var directory_1 = this.file.dataDirectory;
            // Guardo el fichero en la memoria del dispositivo
            this.file.writeFile(directory_1, name, blob).then(function (_) {
                // Leo el fichero desde la memoria del dispositivo
                _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                    _this.loading.dismiss();
                }).catch(function (e) {
                    alert('Error abriendo el archivo');
                    _this.loading.dismiss();
                });
            }).catch(function (err) {
                // Si ocurre que el fichero ya existe, lo leo de la memoria del dispositivo
                if (err.code == 12) {
                    _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                        _this.loading.dismiss();
                    }).catch(function (e) {
                        alert('Error abriendo el archivo');
                        _this.loading.dismiss();
                    });
                }
                else {
                    _this.showError("ERROR " + err.code, err.message);
                }
            });
        }
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
    DocumentosContablesPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    DocumentosContablesPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    DocumentosContablesPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    DocumentosContablesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-documentos-contables',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/documentos-contables/documentos-contables.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Documentos contables</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page" >\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<!-- Gradiente -->\n  	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient5" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<ion-list *ngIf="showCardError == true" style="min-height: 8rem;margin: 15px 15px -20px 15px;">\n		<ion-card detail-none  style="margin: 15px 0px 15px 0px;width:100%;    background: #ebcccc;    color: #a94442;    text-align: center;    padding: 1.5rem;    border-radius: 1rem;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:100%;height:100%;float:left;">\n					No hemos podido encontrar documentos para tí.\n				</div>				\n			</div>\n		</ion-card>\n	</ion-list>\n	<ion-list style="min-height: 7rem;margin: 20px;">\n		<button ion-button (click)="solicitarFactura()" type="submit" block style="margin: 15px 0px 15px 0px;width:100%;"><i style="margin-right: 0.5rem;" class="fas fa-plus"></i>  Solicitar factura</button>\n	</ion-list>\n	<ion-list style="padding: 0rem 2rem 0rem 2rem;margin: -15px 0 16px !important;">	 \n		<ion-card detail-none *ngFor="let card of cards" (click)="createAndOpenPDF(card.html, card.numDoc)" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="url(#fb-shadow-gradient5)" stroke="none"> <path d="M47.5 26.8H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M21.7 20.6H32c.6 0 1-.5 1-1 0-.6-.5-1-1-1H21.7c-.6 0-1 .5-1 1-.1.6.4 1 1 1zm0 0M47.5 35.1H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M47.5 43.4H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1 0-.6-.4-1-1-1zm0 0M47.5 51.6H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0"/><path d="M51.6 16.1V1H7.2v56.8h5.2V63h44.4V21.2l-5.2-5.1zm-9.3-6.4l10.9 10.9H42.3V9.7zm-33 46.1V3.1h40.3V14l-7.8-7.8H12.4v49.6H9.3zm5.1 5.1V8.2h25.8v14.5h14.5v38.2H14.4zm0 0"></path> </g> </svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title" style="margin-top: 2rem;">{{card.tipo}}</div>\n					<div class="card-subtitle" style="margin-top: 2rem;">{{card.fecha}}</div>\n					<div class="card-subtitle-date" style="margin-top: 2rem;">{{card.total}}€</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    margin: 4.5rem 0 0 .6rem;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>  \n	</ion-list>	\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/documentos-contables/documentos-contables.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], DocumentosContablesPage);
    return DocumentosContablesPage;
}());

//# sourceMappingURL=documentos-contables.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabConsultarCitas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ConsultarCitas_ConsultarCitas__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_consultar_citas_futuras_consultar_citas_futuras__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabConsultarCitas = /** @class */ (function () {
    function TabConsultarCitas(events, navCtrl) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.tabFuturas = __WEBPACK_IMPORTED_MODULE_3__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */]; // Página de citas futuras
        this.tabAnteriores = __WEBPACK_IMPORTED_MODULE_2__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */]; // Página de citas pasadas
        events.subscribe("user:Unauthorized", function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Tabs */])
    ], TabConsultarCitas.prototype, "tabs", void 0);
    TabConsultarCitas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tabConsultarCitas',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/tabConsultarCitas/tabConsultarCitas.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Citas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>       \n	<ion-tabs #myTab tabsPlacement="top" selectedIndex="1">\n		<ion-tab [root]="tabAnteriores" tabTitle="Pasadas" ></ion-tab>					\n		<ion-tab [root]="tabFuturas" tabTitle="Futuras" ></ion-tab>\n	</ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/tabConsultarCitas/tabConsultarCitas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], TabConsultarCitas);
    return TabConsultarCitas;
}());

//# sourceMappingURL=tabConsultarCitas.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiSaludPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tab_higienes_tab_higienes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_instrucciones_instrucciones__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Para aceptar HTML desde la API

var MiSaludPage = /** @class */ (function () {
    function MiSaludPage(domSanitizer, toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.domSanitizer = domSanitizer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.cardsMenu = new Array(); // Array donde se descargan los elementos del menú
        this.showLoading();
        this.getCardsMiSalud();
        this.events.publish("user:logged");
    }
    MiSaludPage.prototype.openPage = function (page, tipo) {
        if (tipo == "page") {
            if (page == "Recall")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_tab_higienes_tab_higienes__["a" /* TabHigienesPage */]);
            else if (page == "ConsejosPersonalizados")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */]);
            else if (page == "Instrucciones")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */]);
            else
                this.presentToast("La página no está disponible.");
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	Mi salud.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MiSaludPage.prototype.getCardsMiSalud = function () {
        var _this = this;
        this.restProvider.getCardsMiSalud().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (data['data']['cards']) {
                    for (var i in data['data']['cards']) {
                        _this.cards.push(data['data']['cards'][i]);
                    }
                }
                for (var j in data['data']['menu']) {
                    _this.cardsMenu.push(data['data']['menu'][j]);
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    MiSaludPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
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
    MiSaludPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    MiSaludPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MiSaludPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mi-salud',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/mi-salud/mi-salud.html"*/'<div class="back"> \n	<ion-header no-border>\n  		<ion-navbar>\n    		<ion-buttons left>\n	    		<button ion-button menuToggle>\n	      			<ion-icon name="menu"></ion-icon>\n    			</button>\n    		</ion-buttons>\n\n    		<ion-title>Mi Salud</ion-title>\n\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="padding: 6rem 0 2rem;color:white;">Próximas Higienes</h1> \n\n	<ion-slides pager style="margin-left: -10%;" spaceBetween="-100" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards">\n	    	<ion-row>\n	    		<ion-col col-3 style="background-color: hsla(0, 0%, 100%, 0.3); height: 18rem;    border-radius: 6px 0 0 6px;">\n	    			<ion-row style="position: fixed; top: 10%; color: white;">\n	    				<ion-row style="width: 83%;"><ion-col style="font-size: 4rem;    margin: -15% 0px 0 -15%;font-weight: bold;">{{card.dia}}</ion-col></ion-row>\n	    				<ion-row style="width: 83%;margin-top: -1rem;"><ion-col style="    font-size: 2.35rem;    margin: -10% 0% 0% -15%;">{{card.mes}}</ion-col></ion-row>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 5%; color: white;    width: 16%;">\n	    				<ion-col>{{card.hora}}</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    		<ion-col col-9 style="background-color: hsla(0, 0%, 100%, 0.2); height: 18rem;    border-radius: 0 6px 6px 0;">\n	    			<ion-row style="margin-top: -4%;">\n	    				<ion-col text-wrap class="tratamiento">{{card.tratamiento}}</ion-col>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 3%; color: white; width: 52%;">\n	    				<ion-col col-3><img [src]="domSanitizer.bypassSecurityTrustUrl(card.imagen)" style=" border-radius: 50%;margin-top: 20%;" /></ion-col>\n	    				<ion-col col-9 class="doctor" style="margin-top: 5%;">{{card.doctor}}</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n	<div *ngIf="cards?.length <= 0" style=" max-height: 10rem; max-width: 77%; display: block;">\n  		<p> Actualmente no tienes citas </p>\n	</div>\n</div>\n\n<!-- Gradiente -->\n<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n<!-- Fin Gradiente -->\n\n<div class="menu" style="margin: 20% 10%;">\n	<ion-row>\n		<h1 col-9>Mi Salud</h1>\n	</ion-row>\n	<ion-row class="square" >\n			<div *ngFor="let c of cardsMenu; let i=index" style="width:100%;">\n				<ion-row *ngIf="i == 0">\n					<div *ngFor="let c of cardsMenu| slice:0:1 ; let j=index" col-12>\n						<fb-button-icon *ngIf="j<1" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n				<ion-row *ngIf="i == 1">\n					<div *ngFor="let c of cardsMenu | slice:1; let j=index" col-6>\n						<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n			</div>			\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/mi-salud/mi-salud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], MiSaludPage);
    return MiSaludPage;
}());

//# sourceMappingURL=mi-salud.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = /** @class */ (function () {
    function PopoverPage(events, navCtrl, alertCtrl, restProvider, viewCtrl, navParams, loadingCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.fecha = ""; // Fecha que será obtenida por parámetro
        this.hora = ""; // Hora que será obtenida por parámetro
        this.fecha = this.navParams.get("fecha");
        this.hora = this.navParams.get("hora");
        this.events.publish("user:logged");
    }
    /**
    * 	Función que muestra una alerta para confirmar o
    *	anular la acción requerida.
    *
    * 	@param String Accion de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    PopoverPage.prototype.presentConfirm = function (action) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación requerida',
            message: '¿Quieres ' + action + ' la cita?',
            buttons: [{ text: 'CANCELAR', role: 'cancel' }, {
                    text: action,
                    handler: function () {
                        _this.showLoading("Gestionando la cita ...");
                        _this.gestionarCita(action);
                    }
                }
            ]
        });
        alert.present();
    };
    /**
    * 	Función que muestra gestiona la cita haciendo
    *	uso de la API del sistema
    *
    * 	@param String Tipo de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    PopoverPage.prototype.gestionarCita = function (tipo) {
        var _this = this;
        this.viewCtrl.dismiss(); // Para cerrar el popup
        var textoAlert = "";
        if (tipo == "anular")
            textoAlert = "Hemos anulado tu cita.";
        else if (tipo == "cambiar")
            textoAlert = "Nos pondremos en contacto contigo para cambiar la cita.";
        else if (tipo == "confirmar")
            textoAlert = "Hemos confirmado tu cita.";
        this.restProvider.gestionarCita(tipo, this.fecha, this.hora).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.showError("Información", textoAlert);
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.showError("ERROR", "Hubo un error al gestionar tu cita.");
        });
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
    PopoverPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
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
    PopoverPage.prototype.showLoading = function (cont) {
        if (cont === void 0) { cont = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: cont
        });
        this.loading.present();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/popover/popover.html"*/' <ion-list style="margin: 0;">\n      <button ion-item detail-none (click)="presentConfirm(\'confirmar\');"><i style="color:#81c784;margin-right:1rem;" class="fas fa-check"></i>  Confirmar cita</button>\n      <button ion-item detail-none (click)="presentConfirm(\'cambiar\');"><i style="color:#ffb74d;margin-right:1rem;" class="fas fa-exchange-alt"></i>  Cambiar cita</button>\n      <button ion-item detail-none (click)="presentConfirm(\'anular\');"><i style="color:#e57373;margin-right:1rem;" class="fas fa-ban"></i>  Anular cita</button>\n</ion-list>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Proveedor de API

// Páginas para redirección






/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiPerfilPage = /** @class */ (function () {
    function MiPerfilPage(file, _CAMERA, actionSheetCtrl, domSanitizer, loadingCtrl, events, alertCtrl, restProvider, navCtrl) {
        this.file = file;
        this._CAMERA = _CAMERA;
        this.actionSheetCtrl = actionSheetCtrl;
        this.domSanitizer = domSanitizer;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.data = {}; // Array para almacenar los valores del perfil.
        this.loadingPresented = false; // Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
        this.existe = false; // Si existe la foto en memoria
        this.base64 = "";
        this.dPersonales = { name: 'DATOS PERSONALES', svg: 'citas', openPage: 'perfil', class: 'active btn-large', tipo: 'page', gradiente: 'fb-shadow-gradient1' };
        this.cPassword = { name: 'CAMBIAR CONTRASEÑA', svg: 'citas', openPage: 'password', class: 'btn-large', tipo: 'page', gradiente: 'fb-shadow-gradient1' };
        this.checkFileExistence("fyb.jpeg");
        this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación
        this.getProfile(); // Llamada a la funcion para obtener el perfil del paciente
        this.events.publish("user:logged");
    }
    MiPerfilPage.prototype.openPage = function (page) {
        if (page == "perfil")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    /**
    * 	Función que selecciona si es desde galeria o camara
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    MiPerfilPage.prototype.openChooseImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Elige una opción',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Camara',
                    role: 'destructive',
                    //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	          		
                    handler: function () {
                        _this.selectImage(1);
                    }
                },
                {
                    text: 'Galeria',
                    role: 'destructive',
                    //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	
                    handler: function () {
                        _this.selectImage(0);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    /**
    * 	Función que obtiene todos los datos personales del
    *	paciente y los muestra en la interfaz, cada uno en
    *	su campo correspondiente.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MiPerfilPage.prototype.getProfile = function () {
        var _this = this;
        this.restProvider.getProfile().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (_this.existe)
                    data['data']['Imagen'] = _this.base64;
                _this.data = data['data'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    MiPerfilPage.prototype.getContentType = function (base64Data) {
        var block = base64Data.split(";");
        var contentType = block[0].split(":")[1];
        return contentType;
    };
    //here is the method is used to convert base64 data to blob data  
    MiPerfilPage.prototype.base64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, {
            type: contentType
        });
        return blob;
    };
    /**
    * 	Función que guarda la imagen de perfil en el teléfono
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    MiPerfilPage.prototype.writeFile = function (base64Data, folderName, fileName) {
        var _this = this;
        var contentType = this.getContentType(base64Data);
        var DataBlob = this.base64toBlob(base64Data, contentType);
        var filePath = this.file.externalRootDirectory + folderName;
        this.file.writeFile(filePath, fileName, DataBlob, contentType).then(function (success) {
            //console.log("File Writed Successfully", success);  
            //console.log(filePath + fileName);
            _this.data.Imagen = base64Data;
            _this.loading.dismiss();
        }).catch(function (err) {
            //console.log("Error Occured While Writing File", err);  
        });
    };
    MiPerfilPage.prototype.checkFileExistence = function (fileName) {
        var _this = this;
        return this.file.checkFile(this.file.externalRootDirectory, fileName).then(function () {
            _this.file.readAsDataURL(_this.file.externalRootDirectory, fileName).then(function (result) {
                _this.existe = true;
                _this.base64 = result;
                _this.data.Imagen = result;
            }, function (err) {
                //console.log(err);
            });
        }, function (error) {
            //console.log(error);
        });
    };
    /**
    * 	Función que envía una imagen a Firebase
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    MiPerfilPage.prototype.selectImage = function (x) {
        var _this = this;
        this.showLoading("Guardando imagen ...");
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: x,
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                quality: 50,
                allowEdit: true,
                correctOrientation: true,
                saveToPhotoAlbum: true,
                cameraDirection: 1,
                encodingType: _this._CAMERA.EncodingType.JPEG,
            };
            _this._CAMERA.getPicture(cameraOptions).then(function (data) {
                _this.writeFile('data:image/jpeg;base64,' + data, "", "fyb.jpeg");
            }).catch(function (e) {
                if (e == 20) {
                    _this.showError("ERROR", "Error al intentar enviar la imagen, no hay permisos para acceder a las imagenes.");
                }
                else {
                    _this.showError("ERROR", e);
                    _this.loading.dismiss();
                }
            });
        }).catch(function (e) {
            _this.showError("ERROR", "Error al intentar enviar la imagen.");
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
    MiPerfilPage.prototype.showLoading = function (txt) {
        if (txt === void 0) { txt = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: txt,
            dismissOnPageChange: false
        });
        this.loading.present();
        this.loadingPresented = true;
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
    MiPerfilPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MiPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mi-perfil',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/mi-perfil/mi-perfil.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mi Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-row>\n		<ion-col col-5>\n			<img  *ngIf="data.Imagen" [src]="domSanitizer.bypassSecurityTrustUrl(data.Imagen)" style="object-fit:cover;" class="imageProfile">\n			<a class="btn -rounded -bg-pink editIcon" (click)="openChooseImage()" style="padding: 1rem;box-shadow: 4px 10px 41px 0px rgba(237, 122, 173, 0.37);    color: transparent;">\n                <svg viewBox="0 0 400 400" width="512" xmlns="http://www.w3.org/2000/svg">\n                    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" fill="#FFFFFF"/>\n                </svg>\n            </a>\n		</ion-col>\n		<ion-col col-7>\n			<ion-row>\n				<ion-col class="right">\n					<ion-icon name="compass" class="leftIcon"></ion-icon> \n					<p class="pRight">{{ data.Direccion }} <br/> {{ data.CP }} - {{ data.Localidad }}</p>\n				</ion-col>\n			</ion-row>			\n			<ion-row>\n				<ion-col><hr /></ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="left">					\n					<ion-icon class="leftIcon" name="phone-portrait"></ion-icon>\n					<p class="pRight">{{ data.TelMovil }}</p>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="left">					\n					<ion-icon class="leftIcon" name="call"></ion-icon>\n					<p class="pRight">{{ data.Tel1 }}</p>\n				</ion-col>\n			</ion-row>			\n		</ion-col>\n	</ion-row>\n	<ion-row>\n		<ion-col>\n			<p class="nombre">{{ data.Nombre }} </p>\n			<p class="apellidos">{{ data.Apellidos }} </p>\n		</ion-col>\n	</ion-row>\n	<ion-row>\n		<ion-col><hr /></ion-col>\n	</ion-row>\n	<ion-row class="h1">\n		<ion-col><h1><b>Editar datos personales</b></h1></ion-col>\n	</ion-row>\n\n	<!-- Gradiente -->\n	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient1" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<!-- Fin Gradiente -->\n\n	<ion-row class="row30">\n		<ion-col class="paddingBtn"><fb-button-icon [name]="dPersonales" [class]="dPersonales.class" (click)="openPage(dPersonales.openPage,dPersonales.tipo)"></fb-button-icon></ion-col>\n		<ion-col class="paddingBtn"><fb-button-icon [name]="cPassword" [class]="cPassword.class" (click)="openPage(cPassword.openPage,cPassword.tipo)"></fb-button-icon></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/mi-perfil/mi-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], MiPerfilPage);
    return MiPerfilPage;
}());

//# sourceMappingURL=mi-perfil.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisDocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_plan_economico_plan_economico__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_presupuestos_presupuestos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_documentos_contables_documentos_contables__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Para aceptar HTML desde la API

var MisDocumentosPage = /** @class */ (function () {
    function MisDocumentosPage(domSanitizer, toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.domSanitizer = domSanitizer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.cardsMenu = new Array(); // Array donde se descargan los elementos del menú
        this.showLoading();
        this.getCardsMisDocumentos();
        this.events.publish("user:logged");
    }
    MisDocumentosPage.prototype.openPage = function (page, tipo) {
        if (tipo == "page") {
            if (page == "Presupuestos")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */]);
            else if (page == "Contables")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */]);
            else if (page == "Domiciliaciones")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */]);
            else
                this.presentToast("La página " + page + " no está disponible.");
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	Mi salud.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MisDocumentosPage.prototype.getCardsMisDocumentos = function () {
        var _this = this;
        this.restProvider.getCardsMisDocumentos().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (data['data']['cards']) {
                    for (var i in data['data']['cards']) {
                        _this.cards.push(data['data']['cards'][i]);
                    }
                }
                for (var j in data['data']['menu']) {
                    _this.cardsMenu.push(data['data']['menu'][j]);
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    MisDocumentosPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
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
    MisDocumentosPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    MisDocumentosPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MisDocumentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mis-documentos',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/mis-documentos/mis-documentos.html"*/'<div class="back"> \n	<ion-header no-border>\n  		<ion-navbar>\n    		<ion-buttons left>\n	    		<button ion-button menuToggle>\n	      			<ion-icon name="menu"></ion-icon>\n    			</button>\n    		</ion-buttons>\n\n    		<ion-title>Mis Documentos</ion-title>\n\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="padding: 6rem 0 2rem;color:white;">Presupuestos</h1> \n\n	<ion-slides pager style="margin-left: -10%;" spaceBetween="-100" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards">\n	    	<ion-row>\n	    		<ion-col col-3 style="background-color: hsla(0, 0%, 100%, 0.3); height: 18rem;    border-radius: 6px 0 0 6px;">\n	    			<ion-row style="position: fixed; top: 10%; color: white;">\n	    				<ion-row style="width: 83%;"><ion-col style="font-size: 4rem;    margin: -15% 0px 0 -15%;font-weight: bold;">{{card.dia}}</ion-col></ion-row>\n	    				<ion-row style="width: 83%;margin-top: -1rem;"><ion-col style="    font-size: 2.35rem;    margin: -10% 0% 0% -15%;">{{card.mes}}</ion-col></ion-row>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 5%; color: white;    width: 16%;">\n	    				<ion-col>{{card.ano}}</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    		<ion-col col-9 style="background-color: hsla(0, 0%, 100%, 0.2); height: 18rem;    border-radius: 0 6px 6px 0;">\n	    			<ion-row style="margin-top: -4%;">\n	    				<ion-col text-wrap class="tratamiento">{{card.Titulo}}</ion-col>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 3%; color: white; width: 52%;">	    				\n	    				<ion-col col-12 class="doctor" style="margin-top: 5%;">Importe: {{card.Total}}€</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n	<ion-slides pager style="margin-left: -10%;" spaceBetween="-100" *ngIf="cards?.length <= 0" >\n  		<ion-slide class="slide" (click)="openPage(\'PedirCita\', \'page\')">\n	    	<ion-row>	    		\n	    		<ion-col col-12 style="background-color: hsla(0, 0%, 100%, 0.2); height: 18rem;    border-radius: 0 15px 15px 0;">\n	    			<ion-row>\n	    				<ion-col style="color:white; font-size: 2.5rem;    margin-top: 6%;">PEDIR</ion-col>\n	    			</ion-row>	    			\n	    		</ion-col>\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n</div>\n\n<!-- Gradiente -->\n<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n<!-- Fin Gradiente -->\n\n<div class="menu" style="margin: 20% 10%;">\n	<ion-row>\n		<h1 col-9>Mis documentos</h1>\n	</ion-row>\n	<ion-row class="square" >\n			<div *ngFor="let c of cardsMenu; let i=index" style="width:100%;">\n				<ion-row *ngIf="i == 0">\n					<div *ngFor="let c of cardsMenu| slice:0:1 ; let j=index" col-12>\n						<fb-button-icon *ngIf="j<1" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n				<ion-row *ngIf="i == 1">\n					<div *ngFor="let c of cardsMenu | slice:1; let j=index" col-6>\n						<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n			</div>			\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/mis-documentos/mis-documentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], MisDocumentosPage);
    return MisDocumentosPage;
}());

//# sourceMappingURL=mis-documentos.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisCitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recall_recall__ = __webpack_require__(75);
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
 * Generated class for the MisCitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisCitasPage = /** @class */ (function () {
    function MisCitasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MisCitasPage.prototype.openPage = function (page) {
        if (page == "citas")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */]);
        else if (page == "pedirCita")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_recall_recall__["a" /* RecallPage */]);
    };
    MisCitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mis-citas',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/mis-citas/mis-citas.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis citas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" >\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n\n	<!-- Gradiente -->\n  	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient4" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<ion-list style="padding: 0rem 2rem 0rem 2rem;margin: -15px 0 16px !important;">\n		<ion-card detail-none (click)="openPage(\'citas\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="url(#fb-shadow-gradient4)" stroke="none"> <path d="M16.9 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.3h-4.2v-4.2h4.2v4.2zm0 0M27.3 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.3H22v-4.2h4.2v4.2zm0 0M37.7 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.3h-4.2v-4.2h4.2v4.2zm0 0M41.8 30.4H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2v-4.2h4.2v4.2zm0 0M27.3 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22v-4.2h4.2v4.2zm0 0M37.7 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2v-4.2h4.2v4.2zm0 0M41.8 40.8H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2V45h4.2v4.1zm0 0M27.3 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22V45h4.2v4.1zm0 0"/><defs><path id="SVGID_1_" d="M3.4 1.4h57.2v61.3H3.4z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path class="st0" d="M37.7 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2V45h4.2v4.1zm0 0"/><path class="st0" d="M55.3 43.3V6.6c0-.6-.5-1-1-1h-5.2v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1s-3.2 1.3-3.2 3v1H4.4c-.6 0-1 .5-1 1v49.8c0 .6.5 1 1 1h36.7c2.9 5 9.2 6.7 14.2 3.8 5-2.9 6.7-9.2 3.8-14.2-.9-1.4-2.2-2.7-3.8-3.6zM44.9 4.5c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zM5.5 7.6h4.2v1c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1v-1H18v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h4.2v8.3H5.5V7.6zm0 47.8V18h47.8v24.4c-5.5-1.7-11.3 1.3-13 6.8-.6 2-.6 4.2 0 6.2H5.5zm44.6 5.2c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c4.6 0 8.3 3.7 8.3 8.3 0 4.5-3.7 8.2-8.3 8.3zm0 0"/><path d="M53.6 48.3l-4.5 3.6-2.5-2.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1 .4 1.4.1l5.2-4.2c.4-.4.5-1 .2-1.5-.3-.4-.9-.4-1.4-.1zm0 0"></path> </g> </svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title" >Citas</div>\n					<div class="card-subtitle">Revisa tus citas pasadas y futuras</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    margin: 4.5rem 0 0 .6rem;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n		<ion-card detail-none (click)="openPage(\'pedirCita\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="url(#fb-shadow-gradient4)" stroke="none"> <path d="M16.9 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.3h-4.2v-4.2h4.2v4.2zm0 0M27.3 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.3H22v-4.2h4.2v4.2zm0 0M37.7 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.3h-4.2v-4.2h4.2v4.2zm0 0M41.8 30.4H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2v-4.2h4.2v4.2zm0 0M27.3 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22v-4.2h4.2v4.2zm0 0M37.7 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2v-4.2h4.2v4.2zm0 0M41.8 40.8H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2V45h4.2v4.1zm0 0M27.3 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22V45h4.2v4.1zm0 0"/><defs><path id="SVGID_1_" d="M3.4 1.4h57.2v61.3H3.4z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path class="st0" d="M37.7 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2V45h4.2v4.1zm0 0"/><path class="st0" d="M55.3 43.3V6.6c0-.6-.5-1-1-1h-5.2v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1s-3.2 1.3-3.2 3v1H4.4c-.6 0-1 .5-1 1v49.8c0 .6.5 1 1 1h36.7c2.9 5 9.2 6.7 14.2 3.8 5-2.9 6.7-9.2 3.8-14.2-.9-1.4-2.2-2.7-3.8-3.6zM44.9 4.5c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zM5.5 7.6h4.2v1c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1v-1H18v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h4.2v8.3H5.5V7.6zm0 47.8V18h47.8v24.4c-5.5-1.7-11.3 1.3-13 6.8-.6 2-.6 4.2 0 6.2H5.5zm44.6 5.2c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c4.6 0 8.3 3.7 8.3 8.3 0 4.5-3.7 8.2-8.3 8.3zm0 0"/><path d="M53.6 48.3l-4.5 3.6-2.5-2.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1 .4 1.4.1l5.2-4.2c.4-.4.5-1 .2-1.5-.3-.4-.9-.4-1.4-.1zm0 0"></path> </g> </svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title">Pedir cita</div>\n					<div class="card-subtitle">Aqui podrás pedir tu cita de higiene</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg  xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    height: 5rem;    margin: 3.5rem 0;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n		<ion-card detail-none (click)="openPage(\'recall\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">\n						<defs>\n							<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n						</defs>\n						<clipPath id="b">\n							<use xlink:href="#a" overflow="visible"/>\n						</clipPath>\n						<g fill="url(#fb-shadow-gradient4)" stroke="none">\n							<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/>\n						</g>\n					</svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title">Mis higienes</div>\n					<div class="card-subtitle">Aqui podrás consultar tus higienes</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    margin: 4.5rem 0 0 .6rem;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/mis-citas/mis-citas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], MisCitasPage);
    return MisCitasPage;
}());

//# sourceMappingURL=mis-citas.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChatPage = /** @class */ (function () {
    function ChatPage(file, fileOpener, photoViewer, actionSheetCtrl, plt, alertCtrl, restProvider, loadingCtrl, _CAMERA, element, vb, eventsCtrl, navCtrl, navParams) {
        var _this = this;
        this.file = file;
        this.fileOpener = fileOpener;
        this.photoViewer = photoViewer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this._CAMERA = _CAMERA;
        this.element = element;
        this.vb = vb;
        this.eventsCtrl = eventsCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { type: '', nickname: '', message: '' }; // Array con la información del mensaje 
        this.chats = []; // Array con todos los mensajes
        this.firstOpen = true; // Indica si es la primera vez que se abre el chat 
        this.offStatus = false; // Controla si la vista está en primer plano.
        this.showEmojiPicker = false; // Controla si los emoticonos estan en primer plano.
        this.loadingPresented = false; // Controla si el Loading esta en primer plano.
        this.menuData = ""; // Foto de perfil del usuario.
        this.showLoading("Cargando conversación ...");
        this.nickname = window.localStorage.getItem("idPac");
        this.menuData = window.localStorage.getItem("urlPerfil");
        this.data.type = 'message';
        this.data.nickname = this.nickname;
        // Compruebo si la fecha de expiración es posterior
        // a la fecha actual del sistema, si es así redirijo
        // a la página de home.
        var timeNow = new Date(2100, 12, 31, 23, 59, 59, 0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
        var mostrarError = false;
        this.restProvider.getTimeServer().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                timeNow = new Date(Number(data['timeStamp']));
                if (timeNow.getDay() == 0 || timeNow.getDay() == 6) {
                    mostrarError = true;
                    console.log(timeNow.getDay());
                }
                else if (timeNow.getDay() == 5) {
                    if (timeNow.getHours() <= 9 || timeNow.getHours() >= 19) {
                        if (timeNow.getHours() == 9 && timeNow.getMinutes() >= 30) {
                            mostrarError = false;
                        }
                        else if (timeNow.getHours() == 19 && timeNow.getMinutes() <= 30) {
                            mostrarError = false;
                        }
                        else {
                            mostrarError = true;
                        }
                    }
                }
                else {
                    if (timeNow.getHours() <= 9 || timeNow.getHours() >= 20) {
                        if (timeNow.getHours() == 9 && timeNow.getMinutes() >= 30) {
                            mostrarError = false;
                        }
                        else if (timeNow.getHours() == 20 && timeNow.getMinutes() <= 30) {
                            mostrarError = false;
                        }
                        else {
                            mostrarError = true;
                        }
                    }
                }
                if (mostrarError) {
                    _this.showError("¡Atención!", "El horario de la clínica es: <br><br> L-J de 09:30 a 20:30 <br> V &nbsp&nbsp&nbspde 09:30 a 19:30");
                    _this.navCtrl.pop();
                }
            }
        });
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(this.nickname).limitToLast(15).on('value', function (resp) {
            _this.chats = [];
            _this.chats = snapshotToArray(resp, _this.nickname, _this.vb, _this.firstOpen, _this.offStatus);
            setTimeout(function () {
                _this.firstOpen = false;
                if (_this.offStatus === false) {
                    if (_this.content != null) {
                        _this.content.scrollToBottom(0);
                        if (_this.loadingPresented) {
                            _this.loadingPresented = false;
                            _this.loading.dismiss();
                        }
                    }
                }
            });
        });
    }
    ChatPage.prototype.printImage = function (base) {
        var _this = this;
        this.showLoading();
        var writeDirectory = this.plt.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
        var filename = "imageShow.jpg";
        this.file.writeFile(writeDirectory, filename, this.convertBase64ToBlob(base, 'data:application/jpeg;base64'), { replace: true }).then(function () {
            _this.photoViewer.show(writeDirectory + filename, '¿Compartir?', { share: true });
            _this.loading.dismiss();
        }).catch(function () {
            console.error('Error writing pdf file');
            _this.loading.dismiss();
        });
    };
    ChatPage.prototype.convertBase64ToBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        b64Data = b64Data.replace(/^[^,]+,/, '');
        b64Data = b64Data.replace(/\s/g, '');
        var byteCharacters = window.atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType });
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
    ChatPage.prototype.showLoading = function (txt) {
        if (txt === void 0) { txt = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: txt,
            dismissOnPageChange: false
        });
        this.loading.present();
        this.loadingPresented = true;
    };
    /**
    * 	Función que redibuja el textarea
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    /**
    * 	Función que selecciona si es desde galeria o camara
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.openChooseImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Elige una opción',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Camara',
                    role: 'destructive',
                    //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	          		
                    handler: function () {
                        _this.selectImage(1);
                    }
                },
                {
                    text: 'Galeria',
                    role: 'destructive',
                    //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,	
                    handler: function () {
                        _this.selectImage(0);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    /**
    * 	Función que envía una imagen a Firebase
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.selectImage = function (x) {
        var _this = this;
        this.showLoading("Enviando imagen ...");
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: x,
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                quality: 100,
                allowEdit: true,
                correctOrientation: true,
                saveToPhotoAlbum: true,
                cameraDirection: 1,
                encodingType: _this._CAMERA.EncodingType.JPEG,
            };
            _this._CAMERA.getPicture(cameraOptions).then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
                _this.restProvider.getTimeStamp().then(function (data) {
                    __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(_this.nickname + "/" + data.timeStamp).set({
                        type: "image",
                        user: _this.data.nickname,
                        message: _this.cameraImage,
                        sendDate: new Date(Number(data.timeStamp)).toString(),
                        read: false
                    });
                });
                if (_this.loadingPresented) {
                    _this.loadingPresented = false;
                    _this.loading.dismiss();
                }
            }).catch(function (e) {
                if (e == 20)
                    _this.showError("ERROR", "Error al intentar enviar la imagen, no hay permisos para acceder a las imagenes.");
                else
                    _this.loading.dismiss();
            });
        }).catch(function (e) {
            _this.showError("ERROR", "Error al intentar enviar la imagen.");
        });
    };
    /**
    * 	Función que lleva la vista al final de la pantalla
    *	para dar impresión de un chat.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    /**
    * 	Función que controla si está abierto los emoticonos o el texarea
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
    * 	Función que muestra el textarea y cierra los emoticonos
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    /**
    * 	Función que muestra los emoticonos y cierra el textarea
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    /**
    * 	Función que envía un mensaje a Firebase
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.data.message.trim() == "")
            return;
        this.restProvider.getTimeStamp().then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(_this.nickname + "/" + data.timeStamp).set({
                type: _this.data.type,
                user: _this.data.nickname,
                message: _this.data.message,
                sendDate: new Date(Number(data.timeStamp)).toString(),
                read: false
            });
            _this.data.message = '';
        });
    };
    /**
    * 	Función que inicia la escucha con Firebase y
    *	actualiza la última conexión del usuario.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.ionViewDidEnter = function () {
        console.log("ENTRA EN CHAT");
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(this.nickname + "/ultimaConexion").set({
            date: "Online",
        });
        this.eventsCtrl.publish('chat:load');
    };
    /**
    * 	Función que desconecta la escucha con Firebase y
    *	actualiza la última conexión del usuario.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ChatPage.prototype.ionViewWillLeave = function () {
        this.offStatus = true;
        console.log("SALE EN CHAT");
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(this.nickname + "/ultimaConexion").set({
            date: Date(),
        });
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(this.nickname).off();
        this.eventsCtrl.publish('chat:unload');
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
    ChatPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/chat/chat.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Chat</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content padding class="bg">\n	<div class="page-chat" style="height: 100vh;display: flex; align-items: flex-end; flex-direction: column-reverse;">\n        <div class="message-wrap" style="width:100%; margin: -25rem 0;">\n            <div class="message" *ngFor="let msg of chats" [class.left]=" msg.user !== nickname " [class.right]=" msg.user === nickname ">\n                <div *ngIf="msg.user === nickname">\n                    <img class="user-img" onerror="this.src=\'assets/imgs/person.png\';" src="{{menuData}}"/>\n                </div>\n                <div *ngIf="msg.user !== nickname">\n                    <img class="user-img" onerror="this.src=\'assets/imgs/person.png\';" src="http://cfb2.ddns.net:4231/personal/{{msg.image}}.jpg"/>\n                </div>\n                <div class="msg-detail">\n                    <div class="msg-content">\n                        <p class="line-breaker ">\n                            {{msg.message}}\n                        </p>\n                        <div class="msg-info">\n                            <p>\n                                {{msg.sendDate | date:\'dd/MM/yyyy HH:mm\'}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>            \n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n<form class="conversation-compose">\n    <div class="emoji" #chatBA >\n        <svg (click)="switchEmojiPicker()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="smiley" x="3147" y="3209">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" fill="#7d8489"></path>\n        </svg>\n    </div>\n    <input #chat_input class="input-msg" [(ngModel)]="data.message" name="message" (keyup.enter)="sendMessage()" (focusin)="onFocus()" placeholder="Escribe un mensaje">\n    <div class="photo" #chatBD (click)="openChooseImage()">\n        <i class="fas fa-camera"></i>\n    </div>\n        <button class="send" #chatBC (click)="sendMessage()">\n            <div class="circle">\n                <i class="far fa-arrow-alt-circle-right"></i>\n            </div>\n    </button>\n</form>\n<emoji-picker ngDefaultControl [(ngModel)]="data.message"></emoji-picker>\n</ion-footer>\n<!--\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n	<div class="input-wrap">\n		<button ion-button #chatBA clear icon-only item-right (click)="switchEmojiPicker()">\n			<ion-icon name="md-happy"></ion-icon>\n		</button>\n		<textarea #chat_input style="max-height: 3.5rem;" placeholder="Escribe un mensaje" [(ngModel)]="data.message" (keyup.enter)="sendMessage()"	(focusin)="onFocus()">	</textarea>\n		<button ion-button #chatBD clear icon-only item-right (click)="openChooseImage()">\n			<ion-icon name="ios-camera" ios="ios-camera" md="md-camera"></ion-icon>\n		</button>\n		<button ion-button #chatBC clear icon-only item-right (click)="sendMessage()">\n			<ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n		</button>	\n	</div>\n	<emoji-picker  ngDefaultControl [(ngModel)]="data.message"></emoji-picker>\n</ion-footer>-->'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

/**
* 	Función que convierte la conversación en un
*	array para poder dibujarlo en la plantilla.
*
* 	@param None
*
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None
*/
var snapshotToArray = function (snapshot, nickname, vb, firstOpen, offStatus) {
    var returnArr = [];
    var lastElemenmt = "";
    snapshot.forEach(function (childSnapshot) {
        if (childSnapshot.key != "ultimaConexion") {
            lastElemenmt = childSnapshot.val().user;
            if (childSnapshot.val().user == "atPaciente") {
                var updates = {};
                updates[nickname + '/' + childSnapshot.key + '/read'] = true;
                __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref().update(updates);
            }
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        }
    });
    if (!firstOpen && !offStatus && lastElemenmt == "atPaciente") {
        console.log("VIBRA - " + firstOpen);
        vb.vibrate(500);
    }
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SugerenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(94);
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
 * Generated class for the SugerenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SugerenciasPage = /** @class */ (function () {
    function SugerenciasPage(loadingCtrl, alertCtrl, restProvider, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {}; // Array para almacenar los valores de la sugerencia.
        this.loadingPresented = false; // Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
    }
    SugerenciasPage.prototype.setSugerencia = function () {
        var _this = this;
        this.showLoading();
        this.restProvider.setSugerencia(this.data).then(function (d) {
            if (typeof d != "undefined" && d['status'] == 1) {
                _this.showError("¡Bien!", d['data'], true);
            }
            else if (d.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + d['message'] + "<br/><br/>[Code: " + d['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    SugerenciasPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.loadingPresented = true;
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
    SugerenciasPage.prototype.showError = function (title, text, redirect) {
        var _this = this;
        if (redirect === void 0) { redirect = false; }
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [{
                    text: 'OK',
                    role: 'OK',
                    handler: function () {
                        if (redirect)
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                    }
                }]
        });
        alert.present();
    };
    SugerenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sugerencias',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/sugerencias/sugerencias.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sugerencias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<ion-list>\n		<ion-item>\n			<ion-label color="primary" stacked>Escribe tu nombre</ion-label>\n			<ion-input [(ngModel)]="data.nombre" placeholder="Opcional"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Escribe tu email</ion-label>\n			<ion-input [(ngModel)]="data.email" placeholder="Opcional"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Escribe tu teléfono</ion-label>\n			<ion-input [(ngModel)]="data.movil" placeholder="Opcional"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label color="primary" stacked>Ayudanos a mejorar, gracias!</ion-label>\n			<ion-textarea [(ngModel)]="data.texto" rows="5" placeholder="Toca aquí para escribir"></ion-textarea>\n		</ion-item>\n		<ion-item>\n			<button ion-button large item-end color="secondary" (tap)="setSugerencia()">\n				Enviar\n			</button>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/sugerencias/sugerencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], SugerenciasPage);
    return SugerenciasPage;
}());

//# sourceMappingURL=sugerencias.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://cfb2.ddns.net:4231/app/public';
    }
    RestProvider.prototype.setSugerencia = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/setSugerencia', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                    .set('nombre', data.nombre)
                    .set('email', data.email)
                    .set('telefono', data.movil)
                    .set('texto', data.texto)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.setImageProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/setImageProfile', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('image', data)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.setProfile = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/setProfile', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
                    .set('email', data.Email)
                    .set('nombre', data.Nombre)
                    .set('apellidos', data.Apellidos)
                    .set('dni', data.DNI)
                    .set('fnacimiento', data.FecNacim)
                    .set('direccion', data.Direccion)
                    .set('localidad', data.Localidad)
                    .set('provincia', data.Provincia)
                    .set('movil', data.TelMovil)
                    .set('fijo', data.Tel1)
                    .set('alergias', data.Alergias)
                    .set('medicacion', data.Medicacion)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.solicitarFactura = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/solicitarFactura', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getInstrucciones = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getInstrucciones', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getPlanEconomico = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getPlanEconomico', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getPresupuestos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getPresupuestos', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getDocumentosContables = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getDocumentosContables', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getConsejosPersonalizados = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getConsejosPersonalizados', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getRecallPasadas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getRecallPasadas', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getRecall = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getRecall', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getCardsMiSalud = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getCardsMiSalud', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getCardsMisDocumentos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getCardsMisDocumentos', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getCardsHome = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getCardsHome', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getTimeStamp = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/getTimeStamp', {})
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getTimeServer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getTimeServer', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.enviarTokenNotifications = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/setNotificationsToken', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('notifications_token', token)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getProfile', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getPlanEconomicoDetail = function (n) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getPlanEconomicoDetail', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('n', n)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.gestionarCita = function (accion, fecha, hora) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/gestionarCita', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('accion', accion).set('fecha', fecha).set('hora', hora)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.solicitarCita = function (fecha, hora, doctor, tratamiento) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/solicitarCita', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('doctor', doctor).set('fecha', fecha).set('hora', hora).set('tratamiento', tratamiento)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.actualizarPass = function (pass1, pass2, pass3) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/actualizarPass', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('pass1', pass1).set('pass2', pass2).set('pass3', pass3)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.searchCita = function (fecha, hora, doctor, tto, preferencias) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/buscarCitas', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('fecha', fecha).set('hora', hora).set('idUsu', doctor).set('idOpc', tto).set('preferencias', preferencias)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getTratamientos = function (e) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/tratamientosPedirCita', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('idUsu', e)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getImage = function (e) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getImage', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('urlImage', e)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getDocFirmados = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/docFirmados', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getDoctors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/doctoresPedirCita', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getMenuData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/menuData', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getCitasFuturas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/citasFuturas', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.listFiles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/listFiles', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.getCitasPasadas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/citasPasadas', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.login = function (login, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/login', false, {
                //headers: new Headers().set('Content-Type', 'application/x-www-form-urlencoded'),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('user_login', login).set('user_password', password)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        }).catch(function (e) {
            console.log(e);
            return e;
        });
    };
    RestProvider.prototype.logout = function () {
        window.localStorage.setItem("user", "");
        window.localStorage.setItem("pass", "");
        window.localStorage.setItem("token", "");
        window.localStorage.setItem("expires", "");
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_change_password_change_password__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(events, nav, restProvider, alertCtrl, loadingCtrl) {
        var _this = this;
        this.events = events;
        this.nav = nav;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' }; // Array con los campos del formulario
        var timeNow = new Date(2100, 12, 31, 23, 59, 59, 0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
        var expires = new Date(2100, 12, 31, 23, 59, 59, 0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
        // Compruebo si la fecha de expiración es posterior
        // a la fecha actual del sistema, si es así redirijo
        // a la página de home.
        this.restProvider.getTimeServer().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                timeNow = new Date(Number(data['timeStamp']));
                expires = new Date(Number(data['expires']));
            }
            // INICIO DEBUG para Firebase
            //window.localStorage.setItem("idPac", "9900");					
            //window.localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDI2NTAyNDUsImV4cCI6MTU0NTI0MjI0NSwianRpIjoidzZlUXlQVVhzYUpCbjBNN3lMY29pIiwic3ViIjoibG9naW4ifQ.Fh-DbVtCWekIV2bmA2HaQZytCJMuoBbrCBiSk9ZFAWg");				
            //window.localStorage.setItem("expires", "1545242245000");
            //this.nav.setRoot(HomePage);
            // FIN DEBUG para Firebase
            if (expires > timeNow) {
                _this.events.publish("user:logged");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
        });
    }
    /**
    * 	Función que comprueba si el usuario y la contraseña
    *	son correctos.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    LoginPage.prototype.login = function () {
        var _this = this;
        var user = this.registerCredentials.email;
        var pass = this.registerCredentials.password;
        if (user == '' || pass == '')
            return;
        this.showLoading();
        this.restProvider.login(user, pass).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                window.localStorage.setItem("idPac", data['idPac']);
                window.localStorage.setItem("token", data['token']);
                window.localStorage.setItem("expires", data['expires']);
                _this.events.publish("user:logged");
                if (data['isDefault'] == 1)
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_change_password_change_password__["a" /* ChangePasswordPage */], { first: true });
                else
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
            else {
                if (typeof data['code'] != "undefined")
                    _this.showError("ERROR " + data['code'], "Acceso Denegado");
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
    LoginPage.prototype.showLoading = function () {
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
    LoginPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="bg">\n	<div class="login">\n		<div class="login-top">\n			<img src="assets/imgs/icon.png">\n		</div>\n		<div class="login-bottom">\n			<form #registerForm="ngForm">\n				<input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required=" ">					\n				<input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required=" ">						\n				 <button ion-button class="submit-btn" full type="submit" (click)="login()" [disabled]="!registerForm.form.valid">Entrar</button>\n			</form>			\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecallPasadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecallPasadasPage = /** @class */ (function () {
    function RecallPasadasPage(app, domSanitizer, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.app = app;
        this.domSanitizer = domSanitizer;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.recall = Array();
        this.infoR = { fechaFutura: false };
        this.botonPedirCita = { name: 'PEDIR CITA DE HIGIENE', svg: 'citas', openPage: 'PedirCita', tipo: 'page', gradiente: '', class: 'active' };
        this.showLoading();
        this.getRecallPasadas();
        this.events.publish("user:logged");
    }
    RecallPasadasPage.prototype.openPage = function (page, tipo) {
        if (tipo == "page") {
            if (page == "PedirCita")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
    };
    /**
* 	Función que obtiene las higienes y recall
*	del paciente
*
* 	@param None
*
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None
*/
    RecallPasadasPage.prototype.getRecallPasadas = function () {
        var _this = this;
        this.restProvider.getRecallPasadas().then(function (data) {
            console.log(data);
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.recall = data['data']['data'];
                _this.infoR = data['data'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
                console.log(data['message']);
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    RecallPasadasPage.prototype.showLoading = function (txt) {
        if (txt === void 0) { txt = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: txt,
            dismissOnPageChange: false
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
    RecallPasadasPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RecallPasadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recall-pasadas',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/recall-pasadas/recall-pasadas.html"*/'<ion-content padding>\n	<ion-slides spaceBetween="-75" *ngIf="infoR.fechaPasada == true">\n		<ion-slide *ngFor="let item of recall">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1.4rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<div padding *ngIf="infoR.fechaPasada != true">\n		<fb-titulo-subtitulo [info]="infoR" ></fb-titulo-subtitulo>\n		<p>{{infoR.texto}}</p>\n		<br />\n		<p style=" max-height: 10rem;">\n			<fb-button-icon [name]="botonPedirCita" [class]="botonPedirCita.class" (click)="openPage(botonPedirCita.openPage,botonPedirCita.tipo)"> </fb-button-icon>\n		</p>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/recall-pasadas/recall-pasadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], RecallPasadasPage);
    return RecallPasadasPage;
}());

//# sourceMappingURL=recall-pasadas.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsejosDetailPage = /** @class */ (function () {
    function ConsejosDetailPage(domSanitizer, navParams) {
        this.domSanitizer = domSanitizer;
        this.navParams = navParams;
        this.data = Array();
        this.tituloSubtitulo = Array();
    }
    ConsejosDetailPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
        this.domSanitizer.bypassSecurityTrustUrl(this.data['Img']);
        this.tituloSubtitulo = [{ titulo: this.data['Doctor'], subtitulo: this.data['Tratamiento'] }];
    };
    ConsejosDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consejos-detail',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/consejos-detail/consejos-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Consejo de {{data.Doctor}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<ion-row>\n		<ion-col col-8 style="padding-top:4rem;">\n			<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n		</ion-col>\n		<ion-col col-4>\n			<img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(data.Img)" style="width:80%;border-radius:50%;"/>\n		</ion-col>\n	</ion-row>\n\n	<p><b>{{ data.Fecha }}</b></p>\n\n	<br />\n\n	<p [innerHTML]="domSanitizer.bypassSecurityTrustHtml(data.Texto)"></p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/consejos-detail/consejos-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ConsejosDetailPage);
    return ConsejosDetailPage;
}());

//# sourceMappingURL=consejos-detail.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanEconomicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_plan_economico_detail_plan_economico_detail__ = __webpack_require__(225);
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
 * Generated class for the PlanEconomicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanEconomicoPage = /** @class */ (function () {
    function PlanEconomicoPage(toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.tituloSubtitulo = { titulo: "Mis Domiciliaciones", subtitulo: "de tratamientos" };
        this.showLoading();
        this.getPlanEconomico();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que abre una página
    *
    * 	@param Pagina Page nombre de la página
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PlanEconomicoPage.prototype.openPage = function (info) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_plan_economico_detail_plan_economico_detail__["a" /* PlanEconomicoDetailPage */], {
            'data': info
        });
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de los planes económicos
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PlanEconomicoPage.prototype.getPlanEconomico = function () {
        var _this = this;
        this.restProvider.getPlanEconomico().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                for (var key in data['data']) {
                    _this.cards.push(data['data'][key]);
                    _this.showCardError = false;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    PlanEconomicoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    PlanEconomicoPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    PlanEconomicoPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    PlanEconomicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plan-economico',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/plan-economico/plan-economico.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Domiciliaciones</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n\n	<br />\n\n    <p>Contrary to popular belief/opinion. Del Longman Dictionary of Contemporary Englishcontrary to popular belief/opinioncontrary to popular belief/opinionused to say that something is true even though people believe the opposite Contrary to popular belief, a desert can be very cold.</p>\n\n    <br />	 \n\n	<div *ngFor="let card of cards">\n        <div class="fb-card -v2">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title">\n                        {{card.numplan}} - {{card.titulo}}\n                    </div>\n                    <div class="card_subtitle">\n                       {{card.cuotas}}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_subtitle">\n                       {{card.fecha}}\n                    </div>\n                </div>\n            </div>\n            <div class="card_separator">\n            </div>\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -price">\n                        {{card.importe}} €\n                    </div>\n                    <div class="card_subtitle">\n                        pendiente: {{card.pendiente}} €\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="openPage(card.numplan)">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n                            <path fill="#fff" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n                        </svg> \n                    </a>\n                </div>\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/plan-economico/plan-economico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], PlanEconomicoPage);
    return PlanEconomicoPage;
}());

//# sourceMappingURL=plan-economico.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanEconomicoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
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
 * Generated class for the PlanEconomicoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanEconomicoDetailPage = /** @class */ (function () {
    function PlanEconomicoDetailPage(navParams, toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.showCardError = false;
        this.numPlan = 0;
        this.tituloSubtitulo = { titulo: "Plan Económico", subtitulo: "" };
        this.importes = new Array();
        this.lineChartDataPagado = [
            { data: [12, 19, 3, 5, 2, 3] }
        ];
        this.lineChartDataPendiente = [
            { data: [20, 18, 12, 5, 4, 3] }
        ];
        this.lineChartDataTotal = [
            { data: [20, 18, 12, 5, 4, 3] }
        ];
        this.lineChartColorsPagado = [{
                backgroundColor: 'rgba(243,167,201, 0.8)',
                borderColor: 'rgba(237, 122, 173, 1)',
                pointBackgroundColor: 'rgba(237, 122, 173, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(237, 122, 173, 1)',
                borderWidth: 1
            }];
        this.lineChartColorsPendiente = [{
                backgroundColor: 'rgba(255,255,255,1)',
                borderColor: 'rgba(237, 122, 173, 1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,255,255,0)',
                borderWidth: 1
            }];
        this.lineChartColorsTotal = [{
                backgroundColor: 'rgba(243,167,201, 0.8)',
                borderColor: 'rgba(237, 122, 173, 1)',
                pointBackgroundColor: 'rgba(237, 122, 173, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(237, 122, 173, 1)',
                borderWidth: 1
            }];
        this.lineChartOptions = {
            legend: false,
            responsive: true,
            maintainAspectRatio: true,
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 5,
                    hoverRadius: 5
                }
            },
            scales: {
                xAxes: [{ display: false, }],
                yAxes: [{
                        display: false,
                        ticks: { beginAtZero: true, },
                    }]
            }
        };
        this.lineChartType = 'line';
    }
    PlanEconomicoDetailPage.prototype.ionViewDidLoad = function () {
        this.showLoading();
        this.numPlan = this.navParams.get('data');
        this.getPlanEconomicoDetail(this.navParams.get('data'));
        this.events.publish("user:logged");
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	de los planes económicos
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PlanEconomicoDetailPage.prototype.getPlanEconomicoDetail = function (n) {
        var _this = this;
        this.restProvider.getPlanEconomicoDetail(n).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (typeof _this.cards === 'undefined' || _this.cards.length <= 0) {
                    _this.showCardError = true;
                }
                for (var key in data['data']) {
                    _this.cards.push(data['data'][key]);
                    _this.showCardError = false;
                    _this.tituloSubtitulo = { titulo: "Plan Económico", subtitulo: data['data'][key]['nombre'] };
                }
                _this.importes = data['importes'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    PlanEconomicoDetailPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    PlanEconomicoDetailPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    PlanEconomicoDetailPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    PlanEconomicoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plan-economico-detail',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/plan-economico-detail/plan-economico-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Domiciliaciones</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n\n	<br />\n\n    <p>Contrary to popular belief/opinion. Del Longman Dictionary of Contemporary Englishcontrary to popular belief/opinioncontrary to popular belief/opinionused to say that something is true even though people believe the opposite Contrary to popular belief, a desert can be very cold.</p>\n\n    <br />	\n    <div class="card_container">\n	    <div class="fb-card -vgraph">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle">\n	                Pagado\n	            </div>\n	            <div class="card_title">\n	                 {{ importes.pagado }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	        	<canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataPagado"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsPagado"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n	    <div class="fb-card -vgraph -bg-pink-light">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle -white">\n	                Pendiente\n	            </div>\n	            <div class="card_title -white">\n	               {{ importes.pendiente }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	            <canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataPendiente"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsPendiente"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n	    <div class="fb-card -vgraph">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle">\n	                Total\n	            </div>\n	            <div class="card_title">\n	                {{ importes.total }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	            <canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataTotal"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsTotal"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n    </div>\n\n    <div class="fb-card -v3">\n    	<div *ngFor="let card of cards ; let i=last; let j=index">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -grey-medium">\n                        {{ card.numcuota }}\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                         {{ card.fecha }}\n                    </div>\n                    <div class="card_subtitle">\n                         {{ card.pagado }}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_title -blue" *ngIf="card.pagado == \'Pagado\'">\n                         {{ card.importe }} €\n                    </div>\n                    <div class="card_title -pink" *ngIf="card.pagado != \'Pagado\'">\n                         {{ card.importe }} €\n                    </div>\n                </div>\n            </div>\n            <div *ngIf="!i" class="card_separator">            	\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/plan-economico-detail/plan-economico-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], PlanEconomicoDetailPage);
    return PlanEconomicoDetailPage;
}());

//# sourceMappingURL=plan-economico-detail.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 259:
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
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acceso-resultados/acceso-resultados.module": [
		833,
		0
	],
	"../pages/change-password/change-password.module": [
		834,
		23
	],
	"../pages/chat/chat.module": [
		835,
		22
	],
	"../pages/consejos-detail/consejos-detail.module": [
		836,
		21
	],
	"../pages/consejos-personalizados/consejos-personalizados.module": [
		837,
		20
	],
	"../pages/doc-firmados/doc-firmados.module": [
		838,
		19
	],
	"../pages/documentos-contables/documentos-contables.module": [
		839,
		18
	],
	"../pages/instrucciones/instrucciones.module": [
		840,
		17
	],
	"../pages/login/login.module": [
		841,
		16
	],
	"../pages/mi-perfil/mi-perfil.module": [
		842,
		15
	],
	"../pages/mi-salud/mi-salud.module": [
		843,
		14
	],
	"../pages/mis-citas/mis-citas.module": [
		844,
		13
	],
	"../pages/mis-documentos/mis-documentos.module": [
		845,
		12
	],
	"../pages/pedir-cita/pedir-cita.module": [
		846,
		11
	],
	"../pages/plan-economico-detail/plan-economico-detail.module": [
		847,
		10
	],
	"../pages/plan-economico/plan-economico.module": [
		848,
		9
	],
	"../pages/popover/popover.module": [
		849,
		8
	],
	"../pages/presupuestos/presupuestos.module": [
		850,
		7
	],
	"../pages/profile/profile.module": [
		851,
		6
	],
	"../pages/recall-pasadas/recall-pasadas.module": [
		852,
		5
	],
	"../pages/recall/recall.module": [
		853,
		4
	],
	"../pages/sugerencias/sugerencias.module": [
		854,
		3
	],
	"../pages/tab-higienes/tab-higienes.module": [
		855,
		2
	],
	"../pages/tabConsultarCitas/tabConsultarCitas.module": [
		856,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 300;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCitas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_higienes_tab_higienes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Para aceptar HTML desde la API

var ConsultarCitas = /** @class */ (function () {
    function ConsultarCitas(app, toastCtrl, domSanitizer, events, alertCtrl, navCtrl, restProvider, loadingCtrl) {
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.domSanitizer = domSanitizer;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.citas = new Array(); // Array con todas las citas futuras del paciente.
        this.bHigienes = { name: 'MIS HIGIENES', svg: '', openPage: 'Higiene', class: '', tipo: 'page', gradiente: '' };
        this.bPedirCita = { name: 'PEDIR CITA', svg: '', openPage: 'PedirCita', class: 'active', tipo: 'page', gradiente: '' };
        this.showLoading();
        this.getCitas();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que abre una página o una web dependiendo
    *	de los parámetros que se les introduzca.
    *
    * 	@param String page a la que redirigir.
    * 	@param String tipo si es pagina o web.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitas.prototype.openPage = function (page, tipo) {
        if (tipo === "page") {
            if (page == "Higiene")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__tab_higienes_tab_higienes__["a" /* TabHigienesPage */]);
            else if (page == "PedirCita")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
            else
                this.presentToast("La página no está disponible.");
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
        else {
            this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
        }
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitas.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    /**
    * 	Función que obtiene las citas pasadas del paciente
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsultarCitas.prototype.getCitas = function () {
        var _this = this;
        this.restProvider.getCitasPasadas().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                for (var key in data['data']) {
                    _this.citas.push(data['data'][key]);
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.events.publish("user:Unauthorized");
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    ConsultarCitas.prototype.showLoading = function (text) {
        if (text === void 0) { text = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: text,
            dismissOnPageChange: false
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
    ConsultarCitas.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que detecta el movimiento del gesto y pasa
    *	de una página a otra.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitas.prototype.swipe = function (e) {
        if (e.direction == '2') {
            this.navCtrl.parent.select(1);
        }
        else if (e.direction == '4') {
            this.navCtrl.parent.select(0);
        }
        else if (e.direction == '1') {
            this.getCitas();
        }
    };
    ConsultarCitas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/ConsultarCitas/ConsultarCitas.html"*/'<ion-content>\n	<ion-slides spaceBetween="-75">\n		<ion-slide *ngFor="let item of citas">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1.4rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>			        \n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<ion-row style="max-height: 9%;    display: flex;    margin: 2rem 2rem 0 2rem;">\n		<ion-col><fb-button [name]="bPedirCita" [class]="bPedirCita.class" (click)="openPage(bPedirCita.openPage,bPedirCita.tipo)"></fb-button></ion-col>\n		<ion-col><fb-button [name]="bHigienes" [class]="bHigienes.class" (click)="openPage(bHigienes.openPage,bHigienes.tipo)"></fb-button></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/ConsultarCitas/ConsultarCitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ConsultarCitas);
    return ConsultarCitas;
}());

//# sourceMappingURL=ConsultarCitas.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCitasFuturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_popover_popover__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_higienes_tab_higienes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Para aceptar HTML desde la API

var ConsultarCitasFuturasPage = /** @class */ (function () {
    function ConsultarCitasFuturasPage(app, toastCtrl, domSanitizer, events, alertCtrl, popoverCtrl, calendar, navCtrl, restProvider, loadingCtrl, plt) {
        var _this = this;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.domSanitizer = domSanitizer;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.calendar = calendar;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.citas = new Array(); // Array con todas las citas futuras del paciente.
        this.calendars = []; // Array con la información de la cita para almacenar en el calendario.
        this.showMessage = false;
        this.fecha = ""; // Fecha que será obtenida por parámetro
        this.hora = ""; // Hora que será obtenida por parámetro
        this.bHigienes = { name: 'MIS HIGIENES', svg: '', openPage: 'Higiene', class: '', tipo: 'page', gradiente: '' };
        this.bPedirCita = { name: 'PEDIR CITA', svg: '', openPage: 'PedirCita', class: 'active', tipo: 'page', gradiente: '' };
        this.showLoading();
        this.getCitas();
        if (this.plt.is('cordova')) {
            this.plt.ready().then(function () {
                _this.calendar.listCalendars().then(function (data) {
                    _this.calendars = data;
                });
            });
        }
        this.events.publish("user:logged");
    }
    /**
    * 	Función que abre una página o una web dependiendo
    *	de los parámetros que se les introduzca.
    *
    * 	@param String page a la que redirigir.
    * 	@param String tipo si es pagina o web.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitasFuturasPage.prototype.openPage = function (page, tipo) {
        if (tipo === "page") {
            if (page == "Higiene")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__tab_higienes_tab_higienes__["a" /* TabHigienesPage */]);
            else if (page == "PedirCita")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
            else
                this.presentToast("La página no está disponible.");
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
        else {
            this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
        }
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitasFuturasPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    /**
    * 	Función que muestra una alerta para confirmar o
    *	anular la acción requerida.
    *
    * 	@param String Accion de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitasFuturasPage.prototype.presentConfirm = function (action, fechaDecimal, horaDecimal) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación requerida',
            message: '¿Quieres ' + action + ' la cita?',
            buttons: [{ text: 'CANCELAR', role: 'cancel' }, {
                    text: action,
                    handler: function () {
                        _this.showLoading("Gestionando la cita ...");
                        _this.gestionarCita(action, fechaDecimal, horaDecimal);
                    }
                }
            ]
        });
        alert.present();
    };
    /**
    * 	Función que muestra gestiona la cita haciendo
    *	uso de la API del sistema
    *
    * 	@param String Tipo de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitasFuturasPage.prototype.gestionarCita = function (tipo, fechaDecimal, horaDecimal) {
        var _this = this;
        var textoAlert = "";
        if (tipo == "anular")
            textoAlert = "Hemos anulado tu cita.";
        else if (tipo == "cambiar")
            textoAlert = "Nos pondremos en contacto contigo para cambiar la cita.";
        else if (tipo == "confirmar")
            textoAlert = "Hemos confirmado tu cita.";
        this.restProvider.gestionarCita(tipo, fechaDecimal, horaDecimal).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.showError("Información", textoAlert);
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.events.publish("user:Unauthorized");
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.showError("ERROR", "Hubo un error al gestionar tu cita.");
        });
    };
    /**
    * 	Función que muestra un pop-up para gestionar la cita.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsultarCitasFuturasPage.prototype.presentPopover = function (myEvent, fecha, hora) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_popover_popover__["a" /* PopoverPage */], { fecha: fecha, hora: hora });
        popover.present({
            ev: myEvent
        });
    };
    /**
    * 	Función que añade al calendario una cita.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsultarCitasFuturasPage.prototype.addEvent = function (timestampINI, timestampFIN) {
        var _this = this;
        var dateINI = new Date(parseInt(timestampINI));
        var dateFIN = new Date(parseInt(timestampFIN));
        var titulo = 'Cita en Clínica Dental Ferrus&Bratos';
        var direccion = 'C/ Caleruega 67 3ª Planta. 28033 Madrid';
        var options = { calendarId: 1, url: 'http://clinicaferrusbratos.com', firstReminderMinutes: 15 };
        this.calendar.createEventInteractivelyWithOptions(titulo, direccion, '', dateINI, dateFIN, options)
            .then(function (res) {
            //this.showError("¡Bien!", "La cita ha sido añadida al calendario." + res);
        }, function (err) {
            _this.showError("ERROR", "No ha sido posible añadir la cita al calendario.");
        }).catch(function (e) {
            _this.showError("ERROR", "No ha sido posible añadir la cita al calendario.");
        });
    };
    /**
    * 	Función que convierte los numeros a dos digitos
    *
    * 	@param Integer Número a convertir
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return Número de dos digitos
    */
    ConsultarCitasFuturasPage.prototype.pad = function (a) {
        return (a < 10 ? '0' : '') + a;
    };
    /**
    * 	Función que obtiene las citas futuras del paciente
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    ConsultarCitasFuturasPage.prototype.getCitas = function () {
        var _this = this;
        this.restProvider.getCitasFuturas().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (data['code'] == '105260') {
                    _this.showMessage = true;
                    _this.citas = data['data'];
                }
                else {
                    for (var key in data['data']) {
                        _this.citas.push(data['data'][key]);
                    }
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.events.publish("user:Unauthorized");
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    ConsultarCitasFuturasPage.prototype.showLoading = function (text) {
        if (text === void 0) { text = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: text,
            dismissOnPageChange: false
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
    ConsultarCitasFuturasPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que detecta el movimiento del gesto y pasa
    *	de una página a otra.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ConsultarCitasFuturasPage.prototype.swipe = function (e) {
        if (e.direction == '2') {
            this.app.getRootNav().parent.select(1);
        }
        else if (e.direction == '4') {
            this.app.getRootNav().parent.select(0);
        }
        else if (e.direction == '1') {
            this.getCitas();
        }
    };
    ConsultarCitasFuturasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/consultar-citas-futuras/consultar-citas-futuras.html"*/'<ion-content>\n	<ion-slides spaceBetween="-75">\n		<ion-slide *ngFor="let item of citas">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1.4rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Dirección\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n			                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n			                        </svg> \n			                    </div>\n			                    <div class="card_subtitle">\n			                        Calle de Caleruega, 67\n			                        <br />\n			                        3ª Planta A\n			                        <br />\n			                        28033 - Madrid\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Calendario\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n			                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n			                        </svg> \n			                    </div>\n			                    <div class="card_subtitle" (click)="addEvent(item.timestampINI,item.timestampFIN)">\n			                        Haz\n			                        <span class="-pink">\n			                            click\n			                        </span>\n			                        para añadir\n			                        <br />\n			                            la cita a tu calendario\n			                    </div>\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div style="width:100%;">\n			                <div class="card_label" style="margin-top:1rem;">\n			                    Gestiona tu cita\n			                </div>\n			                <div class="card_container" style="display:flex;justify-content: space-evenly;align-items: center;">\n			                    <a class="fb-btn -pill -anular" (click)="presentConfirm(\'anular\', item.fechaDecimal, item.horaDecimal);">\n			                        Anular\n			                    </a>\n			                    <a *ngIf="item.confirmar == \'0\'" class="fb-btn -pill -confirmar" (click)="presentConfirm(\'confirmar\', item.fechaDecimal, item.horaDecimal);">\n			                        Confirmar\n			                    </a>			                    \n			                    <a class="fb-btn -pill -cambiar" (click)="presentConfirm(\'cambiar\', item.fechaDecimal, item.horaDecimal);">\n			                        Cambiar\n			                    </a>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<ion-row style="max-height: 9%;    display: flex;    margin: 2rem 2rem 0 2rem;">\n		<ion-col><fb-button [name]="bPedirCita" [class]="bPedirCita.class" (click)="openPage(bPedirCita.openPage,bPedirCita.tipo)"></fb-button></ion-col>\n		<ion-col><fb-button [name]="bHigienes" [class]="bHigienes.class" (click)="openPage(bHigienes.openPage,bHigienes.tipo)"></fb-button></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/consultar-citas-futuras/consultar-citas-futuras.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */]])
    ], ConsultarCitasFuturasPage);
    return ConsultarCitasFuturasPage;
}());

//# sourceMappingURL=consultar-citas-futuras.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedirCitaPage = /** @class */ (function () {
    function PedirCitaPage(alertCtrl, events, loadingCtrl, restProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = true; // Variable de tipo Booleano que cuando "true" ha obtenido citas del buscador.
        this.isDrSelected = false; // Variable de tipo Booleano que detecta si se ha seleccionado un doctor o no.
        this.doctores = []; // Array donde se almacenan todos los Drs.
        this.tratamientos = []; // Array donde se almacenan todos los tratamientos asociados a ese doctor.
        this.citasBuscador = []; // Array donde se almacenan todas las citas que ha devuelto el buscador.
        this.ttoSelect = ""; // String donde se almacena el tratamiento seleccionado.
        this.showLoading();
        this.getDoctors();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que obtiene todas las citas disponibles
    * 	en la agenda ( conectada con el buscador )
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaPage.prototype.searchCita = function (formulario) {
        var _this = this;
        this.citasBuscador = []; // Limpio las citas anteriores por si se pulsa el botón dos veces.
        console.log(formulario);
        this.restProvider.searchCita(formulario.form.value.date, formulario.form.value.hour, formulario.form.value.dr, formulario.form.value.tto.IdOpc, formulario.form.value.dias).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (JSON.parse(data['data']).length > 0) {
                    _this.citasBuscador = JSON.parse(data['data']);
                    _this.show = true;
                    _this.ttoSelect = formulario.form.value.tto.Descripcio;
                }
                else {
                    _this.show = false;
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    PedirCitaPage.prototype.drSeleccionado = function (e) {
        this.isDrSelected = true;
        this.showLoading();
        this.getTratamientos(e);
    };
    /**
    * 	Función que obtiene todos los tratamientos asignados
    *	al doctor seleccionado.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaPage.prototype.getTratamientos = function (e) {
        var _this = this;
        this.restProvider.getTratamientos(e).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.tratamientos = data['data'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
        });
    };
    /**
    * 	Función que obtiene todos los doctores a los que se
    *	les puede asignar una cita desde la aplicación móvil
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaPage.prototype.getDoctors = function () {
        var _this = this;
        this.restProvider.getDoctors().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.doctores = data['data'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
        });
    };
    /**
    * 	Función que envía un E-mail a recepción para que estas
    *	inserten la cita desde el buscador.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaPage.prototype.solicitarCita = function (fecha, hora, doctor, tratamiento) {
        var _this = this;
        this.showLoading('Solicitando cita ...');
        this.restProvider.solicitarCita(fecha, hora, doctor, tratamiento).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.showError("¡Atención!", data['message']);
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
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
    PedirCitaPage.prototype.showLoading = function (cont) {
        if (cont === void 0) { cont = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: cont
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
    PedirCitaPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PedirCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/pedir-cita/pedir-cita.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pedir cita</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<div>\n		<ion-card detail-none  style="margin: 0px 0px 15px 0px;width:100%;    background: #c3e6cb;    color: #155724;    text-align: justify;    padding: 1.5rem;    border-radius: 1rem;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:100%;height:100%;float:left;">\n					Los campos de fecha, hora y preferencia de dias son opcionales, si no se rellenan se obtendrá la primera cita disponible.\n				</div>				\n			</div>\n		</ion-card>\n	</div>\n	<form #form="ngForm" (ngSubmit)="searchCita(form);showLoading(\'Buscando citas\');" novalidate style="margin-bottom:5rem;">\n		<ion-item>\n			<ion-label>Higienista</ion-label>\n			<ion-select required interface="action-sheet" (ngModelChange)="drSeleccionado($event)" [(ngModel)]="dr" name="dr" okText="OK" cancelText="Cancelar">\n				<ion-option [value]="cualquiera" selected>Sin preferencia</ion-option>\n				<ion-option *ngFor="let d of doctores" [value]="d.agenda">{{d.usuario}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label>Tratamiento</ion-label>\n			<ion-select required="yes" interface="action-sheet" [(ngModel)]="tto" name="tto" disabled="{{!isDrSelected}}" okText="OK" cancelText="CANCELAR">\n				<ion-option *ngFor="let t of tratamientos" [value]="t">{{t.Descripcio}}</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label>Fecha</ion-label>\n			<ion-datetime min="2018" max="2020"  name="date" displayFormat="DD/MM/YYYY" [(ngModel)]="date" doneText="OK" cancelText="CANCELAR"></ion-datetime>\n		</ion-item>\n		<ion-item>\n			<ion-label>Hora</ion-label>\n			<ion-datetime required min="09:30" max="20:30" name="hour" displayFormat="HH:mm" [(ngModel)]="hour" doneText="OK" cancelText="CANCELAR"></ion-datetime>\n		</ion-item>\n		<ion-item>\n			<ion-label>Preferencia de dias</ion-label>\n			<ion-select [(ngModel)]="dias" name="dias" multiple="true" okText="OK" cancelText="CANCELAR">\n				<ion-option value="lm">Lunes mañana</ion-option>\n				<ion-option value="lt">Lunes tarde</ion-option>\n				<ion-option value="mm">Martes mañana</ion-option>\n				<ion-option value="mt">Martes tarde</ion-option>\n				<ion-option value="xm">Miercoles mañana</ion-option>\n				<ion-option value="xt">Miercoles tarde</ion-option>\n				<ion-option value="jm">Jueves mañana</ion-option>\n				<ion-option value="jt">Jueves tarde</ion-option>\n				<ion-option value="vm">Viernes mañana</ion-option>\n				<ion-option value="vt">Viernes tarde</ion-option>\n			</ion-select>\n		</ion-item>	\n		\n		<button ion-button type="submit" block style="margin-top: 1rem;"><i style="margin-right: 0.5rem;" class="fas fa-search"></i>  Buscar</button>\n	</form>\n	<div *ngIf="show">\n		<div *ngFor="let item of citasBuscador; let i=index">\n			<ion-card>\n				<div *ngIf="i<5">\n					<ion-card-content >	\n						<p class="left" style="color:#5f5f62 !important">{{item.fecha}} </p>\n						<p class="left" style="font-size: 14px;margin-top: -0.55em;color:#5f5f62 !important">{{item.diaSemana}}</p>\n						<hr>\n						<p class="left" style="color:#5f5f62 !important"><i style="width: 3%;" class="far fa-clock marginRight primary" aria-hidden="true"></i> {{item.fIniDr}} - {{item.fFinDr}}</p>\n						<p class="left" style="color:#5f5f62 !important"><i style="width: 3%;" class="fas fa-user-md marginRight primary" aria-hidden="true"></i> {{item.nombreDr}}</p>\n						<p class="left" style="color:#5f5f62 !important"><i style="width: 3%;" class="fas fa-notes-medical marginRight primary" aria-hidden="true"></i> {{ttoSelect}} </p>\n					</ion-card-content>		\n					<ion-row class="cardfooter" style="font-size: 1.6rem;border-top: 1px solid lightgrey;">\n						<ion-col class="left primary" >\n							<span (click)="solicitarCita(item.fecha,item.fIniDr,item.nombreDr,ttoSelect)"><i style="margin-right: 0.2rem;height: 3rem; margin-top: 1.5rem; margin-left: 1rem;" class="fas fa-plus marginRight primary" aria-hidden="true"></i> Solicitar</span>\n						</ion-col>\n					</ion-row>\n				</div>\n			</ion-card>  \n		</div>\n	</div>\n	<div *ngIf="show != true">\n		<ion-card detail-none  style="margin: 15px 0px 15px 0px;width:100%;    background: #ebcccc;    color: #a94442;    text-align: center;    padding: 1.5rem;    border-radius: 1rem;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:100%;height:100%;float:left;">\n					No hemos encontrado citas con los criterios de búsqueda.\n				</div>				\n			</div>\n		</ion-card>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/pedir-cita/pedir-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], PedirCitaPage);
    return PedirCitaPage;
}());

//# sourceMappingURL=pedir-cita.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = /** @class */ (function () {
    function EmojiPickerComponentModule() {
    }
    EmojiPickerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
            ]
        })
    ], EmojiPickerComponentModule);
    return EmojiPickerComponentModule;
}());

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocFirmadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocFirmadosPage = /** @class */ (function () {
    function DocFirmadosPage(events, alertCtrl, toastCtrl, fileOpener, file, restProvider, loadingCtrl, navCtrl) {
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fileOpener = fileOpener;
        this.file = file;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.docs = new Array(); // Array donde se almacenan los objetos del tipo documento descargados del servidor.
        this.showLoading();
        this.getDocFirmados();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que almacena el archivo PDF en el sistema,
    *	y a continuación abre el visor para verlo.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocFirmadosPage.prototype.openPdf = function (src) {
        var _this = this;
        if (src == "") {
            this.presentToast("El documento está firmado electronicamente y no es posible visualizarlo.");
        }
        else {
            this.showLoading();
            var blob = this.b64toBlob(src, 'application/pdf');
            var name = "documentFyB_" + new Date().getTime() + ".pdf";
            var directory_1 = this.file.dataDirectory;
            this.file.writeFile(directory_1, name, blob).then(function (_) {
                _this.fileOpener.open(directory_1 + name, 'application/pdf').then(function () {
                    _this.loading.dismiss();
                }).catch(function (e) {
                    alert('Error abriendo el archivo');
                    _this.loading.dismiss();
                });
            }).catch(function (err) {
                _this.loading.dismiss();
            });
        }
    };
    /**
    * 	Función que convierte a Blob una cadena en Base64
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocFirmadosPage.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        if (sliceSize === void 0) { sliceSize = 512; }
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
    * 	Función que obtiene todos los documentos de la
    *	carpeta del paciente y los documentos firmados electronicamente.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    DocFirmadosPage.prototype.getDocFirmados = function () {
        var _this = this;
        this.restProvider.getDocFirmados().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                for (var key in data['data']) {
                    _this.docs.push(data['data'][key]);
                }
                //this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    DocFirmadosPage.prototype.showLoading = function () {
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
    DocFirmadosPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    DocFirmadosPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    DocFirmadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doc-firmados',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/doc-firmados/doc-firmados.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Documentos administrativos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<ion-list>	  \n		<button ion-item style="margin:0" *ngFor="let doc of docs" (click)="openPdf(doc.url)">		\n		<ion-avatar item-start>\n		  <i class="{{doc.icono}}" style="font-size: 4rem;color:#81a7d4;"></i>\n		</ion-avatar>		\n		<h2>{{doc.nombre}}</h2>    \n		<p>{{doc.descripcion}}</p>		\n	  </button>	  \n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/doc-firmados/doc-firmados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], DocFirmadosPage);
    return DocFirmadosPage;
}());

//# sourceMappingURL=doc-firmados.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(647);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ConsultarCitas_ConsultarCitas__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tab_higienes_tab_higienes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_consultar_citas_futuras_consultar_citas_futuras__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_calendar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_popover_popover__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_instrucciones_instrucciones__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_doc_firmados_doc_firmados__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_emoji_emoji__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_emoji_picker_emoji_picker_module__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sugerencias_sugerencias__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mi_salud_mi_salud__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mi_perfil_mi_perfil__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mis_citas_mis_citas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_mis_documentos_mis_documentos__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_recall_recall__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_recall_pasadas_recall_pasadas__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_consejos_detail_consejos_detail__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_documentos_contables_documentos_contables__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_presupuestos_presupuestos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_plan_economico_plan_economico__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_plan_economico_detail_plan_economico_detail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic_img_viewer__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_file__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_opener__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_photo_viewer__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_fb_button_icon_fb_button_icon__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_fb_button_fb_button__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_fb_titulo_subtitulo_fb_titulo_subtitulo__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_call_number__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ng2_charts__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tab_higienes_tab_higienes__["a" /* TabHigienesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_doc_firmados_doc_firmados__["a" /* DocFirmadosPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_recall_recall__["a" /* RecallPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recall_pasadas_recall_pasadas__["a" /* RecallPasadasPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_consejos_detail_consejos_detail__["a" /* ConsejosDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_plan_economico_detail_plan_economico_detail__["a" /* PlanEconomicoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mi_salud_mi_salud__["a" /* MiSaludPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mis_citas_mis_citas__["a" /* MisCitasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_45__components_fb_button_icon_fb_button_icon__["a" /* FbButtonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_fb_titulo_subtitulo_fb_titulo_subtitulo__["a" /* FbTituloSubtituloComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_fb_button_fb_button__["a" /* FbButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_49_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_41_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/acceso-resultados/acceso-resultados.module#AccesoResultadosPageModule', name: 'AccesoResultadosPage', segment: 'acceso-resultados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-detail/consejos-detail.module#ConsejosDetailPageModule', name: 'ConsejosDetailPage', segment: 'consejos-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-personalizados/consejos-personalizados.module#ConsejosPersonalizadosPageModule', name: 'ConsejosPersonalizadosPage', segment: 'consejos-personalizados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doc-firmados/doc-firmados.module#DocFirmadosPageModule', name: 'DocFirmadosPage', segment: 'doc-firmados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentos-contables/documentos-contables.module#DocumentosContablesPageModule', name: 'DocumentosContablesPage', segment: 'documentos-contables', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instrucciones/instrucciones.module#InstruccionesPageModule', name: 'InstruccionesPage', segment: 'instrucciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-perfil/mi-perfil.module#MiPerfilPageModule', name: 'MiPerfilPage', segment: 'mi-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-salud/mi-salud.module#MiSaludPageModule', name: 'MiSaludPage', segment: 'mi-salud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-citas/mis-citas.module#MisCitasPageModule', name: 'MisCitasPage', segment: 'mis-citas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-documentos/mis-documentos.module#MisDocumentosPageModule', name: 'MisDocumentosPage', segment: 'mis-documentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-cita/pedir-cita.module#PedirCitaPageModule', name: 'PedirCitaPage', segment: 'pedir-cita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-economico-detail/plan-economico-detail.module#PlanEconomicoDetailPageModule', name: 'PlanEconomicoDetailPage', segment: 'plan-economico-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-economico/plan-economico.module#PlanEconomicoPageModule', name: 'PlanEconomicoPage', segment: 'plan-economico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/presupuestos/presupuestos.module#PresupuestosPageModule', name: 'PresupuestosPage', segment: 'presupuestos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recall-pasadas/recall-pasadas.module#RecallPasadasPageModule', name: 'RecallPasadasPage', segment: 'recall-pasadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recall/recall.module#RecallPageModule', name: 'RecallPage', segment: 'recall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sugerencias/sugerencias.module#SugerenciasPageModule', name: 'SugerenciasPage', segment: 'sugerencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-higienes/tab-higienes.module#TabHigienesPageModule', name: 'TabHigienesPage', segment: 'tab-higienes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabConsultarCitas/tabConsultarCitas.module#TabConsultarCitasModule', name: 'TabConsultarCitas', segment: 'tabConsultarCitas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_24__pages_mi_salud_mi_salud__["a" /* MiSaludPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tab_higienes_tab_higienes__["a" /* TabHigienesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_doc_firmados_doc_firmados__["a" /* DocFirmadosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mi_salud_mi_salud__["a" /* MiSaludPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_mis_citas_mis_citas__["a" /* MisCitasPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_recall_recall__["a" /* RecallPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recall_pasadas_recall_pasadas__["a" /* RecallPasadasPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_consejos_detail_consejos_detail__["a" /* ConsejosDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_plan_economico_detail_plan_economico_detail__["a" /* PlanEconomicoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_21__providers_emoji_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_38__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(events, loadingCtrl, restProvider, alertCtrl, navCtrl, navParams) {
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isFirst = false; // Indica si es la primera vez que entra en la App, y debe cambiar la contraseña
        this.data = { pass1: '', pass2: '', pass3: '' }; // Array con las tres contraseñas (antigua, 2 nuevas)
        this.isFirst = navParams.get('first');
        this.events.publish("user:logged");
    }
    /**
    * 	Función actualiza la contraseña del usuario, si es
    *	la primera vez que entra mostrará el mensaje de que
    *	es obligatorio cambiarla.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChangePasswordPage.prototype.actualizarPass = function () {
        var _this = this;
        this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación
        if (this.data.pass1 == "" || this.data.pass2 == "" || this.data.pass3 == "") {
            this.showError("ERROR", "Los campos no pueden estar vacios.");
            return;
        }
        else if (this.data.pass1 == this.data.pass2) {
            this.showError("ERROR", "La nueva contraseña no puede ser igual que la anterior.");
            return;
        }
        else if (this.data.pass3 != this.data.pass2) {
            this.showError("ERROR", "La nuevas nuevas contraseñas deben ser iguales.");
            return;
        }
        else {
            this.restProvider.actualizarPass(this.data.pass1, this.data.pass2, this.data.pass3).then(function (data) {
                if (typeof data != "undefined" && data['status'] == 1) {
                    if (data['error'] == 0) {
                        _this.showError("¡Bien!", "La contraseña ha sido cambiada con éxito", true);
                    }
                    else {
                        _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
                    }
                }
                else if (data.status == 401) {
                    _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                }
                else {
                    _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
                }
            });
        }
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
    ChangePasswordPage.prototype.showLoading = function () {
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
    ChangePasswordPage.prototype.showError = function (title, text, redirect) {
        var _this = this;
        if (redirect === void 0) { redirect = false; }
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [{
                    text: 'OK',
                    role: 'OK',
                    handler: function () {
                        if (redirect)
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                    }
                }]
        });
        alert.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/change-password/change-password.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Cambiar contraseña</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<p class="alert-danger" *ngIf="isFirst == true">Por motivos de seguridad la contraseña por defecto debe ser cambiada.</p>\n	<ion-list> \n		<ion-item>\n			<ion-label color="primary" stacked>Contraseña antigua</ion-label>\n			<ion-input [(ngModel)]="data.pass1" type="password" placeholder="Contraseña antigua"></ion-input>\n		</ion-item>  \n		<ion-item>\n			<ion-label color="primary" stacked>Contraseña nueva</ion-label>\n			<ion-input [(ngModel)]="data.pass2" type="password" placeholder="Contraseña nueva"></ion-input>\n		</ion-item>  \n		<ion-item>\n			<ion-label color="primary" stacked>Repita contraseña nueva</ion-label>\n			<ion-input [(ngModel)]="data.pass3" type="password" placeholder="Repita contraseña nueva"></ion-input>\n		</ion-item>    \n	</ion-list>\n	<button (click)="actualizarPass()" ion-button type="submit" block style="margin-top: 1rem;"><i style="margin-right: 0.5rem;" class="fas fa-pen"></i>  Actualizar contraseña</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecallPage = /** @class */ (function () {
    function RecallPage(app, domSanitizer, calendar, popoverCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.app = app;
        this.domSanitizer = domSanitizer;
        this.calendar = calendar;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.recall = Array();
        this.infoR = { fechaFutura: false };
        this.botonPedirCita = { name: 'PEDIR CITA DE HIGIENE', svg: 'citas', openPage: 'PedirCita', tipo: 'page', gradiente: '', class: 'active' };
        this.showLoading();
        this.getRecall();
        this.events.publish("user:logged");
    }
    RecallPage.prototype.openPage = function (page, tipo) {
        if (tipo == "page") {
            if (page == "PedirCita")
                this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
    };
    /**
    * 	Función que añade al calendario una cita.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    RecallPage.prototype.addEvent = function (timestampINI, timestampFIN) {
        var _this = this;
        this.showLoading("Añadiendo al calendario");
        var dateINI = new Date(parseInt(timestampINI));
        var dateFIN = new Date(parseInt(timestampFIN));
        var titulo = 'Cita en clínica dental Ferrus & Bratos';
        var direccion = 'C/ Caleruega 67 3ª Planta. 28033 Madrid';
        var options = { calendarId: 1, calendarName: "Clínica Ferrus & Bratos", url: 'http://clinicaferrusbratos.com', firstReminderMinutes: 15 };
        this.calendar.createEventInteractivelyWithOptions(titulo, direccion, '', dateINI, dateFIN, options).then(function (res) {
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    /**
    * 	Función que muestra un pop-up para gestionar la cita.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    RecallPage.prototype.presentPopover = function (myEvent, fecha, hora) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__["a" /* PopoverPage */], { fecha: fecha, hora: hora });
        popover.present({
            ev: myEvent
        });
    };
    /**
    * 	Función que muestra una alerta para confirmar o
    *	anular la acción requerida.
    *
    * 	@param String Accion de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    RecallPage.prototype.presentConfirm = function (action, fechaDecimal, horaDecimal) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación requerida',
            message: '¿Quieres ' + action + ' la cita?',
            buttons: [{ text: 'CANCELAR', role: 'cancel' }, {
                    text: action,
                    handler: function () {
                        _this.showLoading("Gestionando la cita ...");
                        _this.gestionarCita(action, fechaDecimal, horaDecimal);
                    }
                }
            ]
        });
        alert.present();
    };
    /**
    * 	Función que muestra gestiona la cita haciendo
    *	uso de la API del sistema
    *
    * 	@param String Tipo de gestión de la cita (Anulada, Cambio o Confirmada)
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    RecallPage.prototype.gestionarCita = function (tipo, fechaDecimal, horaDecimal) {
        var _this = this;
        var textoAlert = "";
        if (tipo == "anular")
            textoAlert = "Hemos anulado tu cita.";
        else if (tipo == "cambiar")
            textoAlert = "Nos pondremos en contacto contigo para cambiar la cita.";
        else if (tipo == "confirmar")
            textoAlert = "Hemos confirmado tu cita.";
        this.restProvider.gestionarCita(tipo, fechaDecimal, horaDecimal).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.showError("Información", textoAlert);
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.events.publish("user:Unauthorized");
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.showError("ERROR", "Hubo un error al gestionar tu cita.");
        });
    };
    /**
    * 	Función que obtiene las higienes y recall
    *	del paciente
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    RecallPage.prototype.getRecall = function () {
        var _this = this;
        this.restProvider.getRecall().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.recall = data['data']['data'];
                _this.infoR = data['data'];
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
                console.log(data['message']);
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    RecallPage.prototype.showLoading = function (txt) {
        if (txt === void 0) { txt = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: txt,
            dismissOnPageChange: false
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
    RecallPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RecallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recall',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/recall/recall.html"*/'<ion-content padding>\n	<ion-slides spaceBetween="-75" *ngIf="infoR.fechaFutura == true">\n		<ion-slide *ngFor="let item of recall">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1.4rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Dirección\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n			                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n			                        </svg> \n			                    </div>\n			                    <div class="card_subtitle">\n			                        Calle de Caleruega, 67\n			                        <br />\n			                        3ª Planta A\n			                        <br />\n			                        28033 - Madrid\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Calendario\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n			                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n			                        </svg> \n			                    </div>\n			                    <div class="card_subtitle" (click)="addEvent(item.timestampINI,item.timestampFIN)">\n			                        Haz\n			                        <span class="-pink">\n			                            click\n			                        </span>\n			                        para añadir\n			                        <br />\n			                            la cita a tu calendario\n			                    </div>\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div style="width:100%;">\n			                <div class="card_label" style="margin-top:1rem;">\n			                    Gestiona tu cita\n			                </div>\n			                <div class="card_container" style="display:flex;justify-content: space-evenly;align-items: center;">\n			                    <a class="fb-btn -pill -anular" (click)="presentConfirm(\'anular\', item.fechaDecimal, item.horaDecimal);">\n			                        Anular\n			                    </a>\n			                    <a *ngIf="item.confirmar == \'0\'" class="fb-btn -pill -confirmar" (click)="presentConfirm(\'confirmar\', item.fechaDecimal, item.horaDecimal);">\n			                        Confirmar\n			                    </a>			                    \n			                    <a class="fb-btn -pill -cambiar" (click)="presentConfirm(\'cambiar\', item.fechaDecimal, item.horaDecimal);">\n			                        Cambiar\n			                    </a>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<div padding *ngIf="infoR.fechaFutura != true">\n		<fb-titulo-subtitulo [info]="infoR" ></fb-titulo-subtitulo>\n		<p>{{infoR.texto}}</p>\n		<br />\n		<p style=" max-height: 10rem;">\n			<fb-button-icon [name]="botonPedirCita" [class]="botonPedirCita.class" (click)="openPage(botonPedirCita.openPage,botonPedirCita.tipo)"> </fb-button-icon>\n		</p>\n	</div>\n	<ion-footer padding *ngIf="infoR.Footer == true">\n	<div class="fb-card -v4">\n	    <div class="left">\n	        <div class="avatar">\n	        	\n	        	<!-- Gradiente -->\n				<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n				<!-- Fin Gradiente -->\n\n	            <svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> \n	            	<g fill="url(#fb-shadow-gradient3)" stroke="none">\n	            		<defs>\n	            			<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n	            		</defs>\n	            		<clipPath id="b">\n	            			<use xlink:href="#a" overflow="visible"/>\n	            		</clipPath>\n	            		<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/>\n	            		</g>\n	            	</svg>\n	        </div>\n	    </div>\n	    <div class="center" style="justify-content: space-evenly;">\n	        <div class="card_title">\n	            {{infoR.tituloFooter}}\n	        </div>\n	        <div class="card_subtitle">\n	           {{infoR.subTituloFooter}}\n	        </div>\n	    </div>\n	    <div class="right">\n	        <div class="card_time">\n	            {{infoR.mesesFooter}}\n	            <span>\n	                meses\n	            </span>\n	        </div>\n	    </div>\n	</div>\n	</ion-footer>\n</ion-content>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/recall/recall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], RecallPage);
    return RecallPage;
}());

//# sourceMappingURL=recall.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/components/emoji-picker/emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mis_citas_mis_citas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_documentos_contables_documentos_contables__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_presupuestos_presupuestos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_recall_recall__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_instrucciones_instrucciones__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_firebase__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Páginas del menú






// Páginas de navegación











var config = {
    apiKey: 'AIzaSyB5bclgiYwByWq8RVdei__gRO6PSKs2mWo',
    authDomain: '785325583727-viu7ei21dmm7svdg0umpbnp851hlt4lr.apps.googleusercontent.com',
    databaseURL: 'fbapp-8a8e5.firebaseio.com',
    projectId: 'fbapp-8a8e5',
    storageBucket: 'fbapp-8a8e5.appspot.com',
};
var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, fcm, events, platform, restProvider, statusBar, splashScreen, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.fcm = fcm;
        this.events = events;
        this.platform = platform;
        this.restProvider = restProvider;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.menuData = new Array();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', icon: 'fa fa-home', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Mi salud', icon: 'fas fa-heartbeat', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__["a" /* MiSaludPage */] },
            { title: 'Mis citas', icon: 'fas fa-calendar-alt', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_10__pages_mis_citas_mis_citas__["a" /* MisCitasPage */] },
            { title: 'Mis documentos', icon: 'fas fa-file-alt', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */] },
            { title: 'Mi perfil', icon: 'fas fa-user', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */] },
            { title: 'Chat', icon: 'fas fa-comments', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'Sugerencias', icon: 'fas fa-thumbs-up', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.events.subscribe("user:logged", function () {
                _this.getDataMenu();
            });
            //Notifications
            if (_this.platform.is('cordova')) {
                _this.fcm.subscribeToTopic('all');
                _this.fcm.getToken().then(function (token) {
                    _this.enviarTokenNotifications(token);
                });
                _this.fcm.onNotification().subscribe(function (data) {
                    if (data.wasTapped) {
                        setTimeout(function () {
                            _this.openPageStrig(data.click_action, true);
                        }, 300);
                    }
                    else {
                        if (data.showDialog == "true")
                            _this.showError(data.title, data.subTitle, data.textButton, data.click_action);
                    }
                    ;
                });
                _this.fcm.onTokenRefresh().subscribe(function (token) {
                    _this.enviarTokenNotifications(token);
                });
                //end notifications.
            }
        });
        __WEBPACK_IMPORTED_MODULE_22_firebase__["initializeApp"](config);
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
    MyApp.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    MyApp.prototype.showError = function (title, text, textButton, page) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: textButton,
                    role: textButton,
                    handler: function () {
                        setTimeout(function () { _this.openPageStrig(page, false); }, 500);
                    }
                }
            ]
        });
        alert.present();
    };
    /**
    * 	Función que almacena el token de Firebase para las notificaciones.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MyApp.prototype.enviarTokenNotifications = function (token) {
        var _this = this;
        this.restProvider.enviarTokenNotifications(token).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
            }
            else if (data.status == 401) {
            }
            else {
                _this.showErrorAPI("ERROR", data['message']);
            }
        });
    };
    /**
    * 	Función que muestra el header del menú lateral
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MyApp.prototype.getDataMenu = function () {
        var _this = this;
        this.restProvider.getMenuData().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.menuData = data['data'];
                _this.menuData["inicial"] = data['data']["apellidos"].charAt(0);
                if (data['data']["sexo"] == "H") {
                    _this.menuData["color"] = "81a7d4";
                }
                else {
                    _this.menuData["color"] = "f1a6c7";
                }
                window.localStorage.setItem("urlPerfil", "https://ui-avatars.com/api/?name=" + _this.menuData["nombre"] + " " + _this.menuData["inicial"] + " &size=256&rounded=true&background=" + _this.menuData["color"] + "&font-size=0.33&color=fff");
            }
        });
    };
    /**
    * 	Función que abre una página
    *
    * 	@param Pagina	String Nombre de la página.
    * 	@param Tipo		Si es rootPage o no.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MyApp.prototype.openPageStrig = function (page, tipo) {
        if (tipo) {
            if (page == "MiSalud")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__["a" /* MiSaludPage */]);
            else if (page == "MiPerfil")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */]);
            else if (page == "MisDocumentos")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */]);
            else if (page == "MisCitas")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_mis_citas_mis_citas__["a" /* MisCitasPage */]);
            else if (page == "Chat")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */]);
            else if (page == "Sugerencias")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */]);
            else if (page == "Higiene")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_recall_recall__["a" /* RecallPage */]);
            else if (page == "Perfil")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]);
            else if (page == "Password")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__["a" /* ChangePasswordPage */]);
            else if (page == "DocContables")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */]);
            else if (page == "DocPresupuestos")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */]);
            else if (page == "Citas")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */]);
            else if (page == "PedirCita")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
            else if (page == "ConsejosPersonalizados")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */]);
            else if (page == "Instrucciones")
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */]);
        }
        else {
            if (page == "MiSalud")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__["a" /* MiSaludPage */]);
            else if (page == "MiPerfil")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */]);
            else if (page == "MisDocumentos")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */]);
            else if (page == "MisCitas")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_mis_citas_mis_citas__["a" /* MisCitasPage */]);
            else if (page == "Chat")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */]);
            else if (page == "Sugerencias")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */]);
            else if (page == "Higiene")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_recall_recall__["a" /* RecallPage */]);
            else if (page == "Perfil")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]);
            else if (page == "Password")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__["a" /* ChangePasswordPage */]);
            else if (page == "DocContables")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */]);
            else if (page == "DocPresupuestos")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */]);
            else if (page == "Citas")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */]);
            else if (page == "PedirCita")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
            else if (page == "ConsejosPersonalizados")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */]);
            else if (page == "Instrucciones")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */]);
        }
    };
    /**
    * 	Función que abre una página, si es la Home, la envía
    *	como la página raiz.
    *
    * 	@param Pagina Page nombre de la página
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MyApp.prototype.openPage = function (page) {
        if (page.title == "Inicio")
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    /**
    * 	Función desloguea la aplicación y envía a LoginPage
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MyApp.prototype.clickLogout = function () {
        this.restProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
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
    MyApp.prototype.showErrorAPI = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/app/app.html"*/'<ion-menu [content]="content">\n	<ion-content>\n		<div class="imgTop">\n			<div class="imgPerfilDiv">\n				<img onError="this.src=\'assets/imgs/person.png\';this.style.background=\'white\';this.style.borderRadius=\'50%\';this.style.border=\'2rem solid white;\'" src="https://ui-avatars.com/api/?name={{ menuData.nombre }} {{ menuData.inicial }}&size=256&rounded=true&background={{ menuData.color }}" class="imgPerfil" />\n				<p class="pPerfil" >{{ menuData.nombre }} {{ menuData.apellidos }}</p>\n				<p class="iPerfil"><i>{{ menuData.email }}</i></p>\n			</div>\n		</div>\n		<ion-list>\n			<button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n				<i class="{{p.icon}} {{p.color}} marginRight" aria-hidden="true"></i> {{p.title}}\n			</button>\n			<button menuClose ion-item detail-none (click)="clickLogout()">\n				<i class="fas fa-sign-out-alt marginRight primary" aria-hidden="true"></i>  Salir\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbButtonIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
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
 * Generated class for the FbButtonIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FbButtonIconComponent = /** @class */ (function () {
    function FbButtonIconComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    FbButtonIconComponent.prototype.ngOnInit = function () {
        this.selectSVG(this.name);
    };
    FbButtonIconComponent.prototype.selectSVG = function (name) {
        var color = '';
        if (name.class.includes('active'))
            color = 'white';
        else
            color = 'url(#' + name.gradiente + ')';
        if (name.svg == 'citas')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"> <path d="M16.9 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.3h-4.2v-4.2h4.2v4.2zm0 0M27.3 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.3H22v-4.2h4.2v4.2zm0 0M37.7 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.3h-4.2v-4.2h4.2v4.2zm0 0M41.8 30.4H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2v-4.2h4.2v4.2zm0 0M27.3 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22v-4.2h4.2v4.2zm0 0M37.7 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2v-4.2h4.2v4.2zm0 0M41.8 40.8H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2V45h4.2v4.1zm0 0M27.3 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22V45h4.2v4.1zm0 0"/><defs><path id="SVGID_1_" d="M3.4 1.4h57.2v61.3H3.4z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path class="st0" d="M37.7 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2V45h4.2v4.1zm0 0"/><path class="st0" d="M55.3 43.3V6.6c0-.6-.5-1-1-1h-5.2v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1s-3.2 1.3-3.2 3v1H4.4c-.6 0-1 .5-1 1v49.8c0 .6.5 1 1 1h36.7c2.9 5 9.2 6.7 14.2 3.8 5-2.9 6.7-9.2 3.8-14.2-.9-1.4-2.2-2.7-3.8-3.6zM44.9 4.5c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zM5.5 7.6h4.2v1c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1v-1H18v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h4.2v8.3H5.5V7.6zm0 47.8V18h47.8v24.4c-5.5-1.7-11.3 1.3-13 6.8-.6 2-.6 4.2 0 6.2H5.5zm44.6 5.2c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c4.6 0 8.3 3.7 8.3 8.3 0 4.5-3.7 8.2-8.3 8.3zm0 0"/><path d="M53.6 48.3l-4.5 3.6-2.5-2.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1 .4 1.4.1l5.2-4.2c.4-.4.5-1 .2-1.5-.3-.4-.9-.4-1.4-.1zm0 0"></path> </g> </svg>';
        else if (name.svg == 'chat')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"> <path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/> <path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/> </g> </svg>';
        else if (name.svg == 'perfil')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"> <path d="M63.2 32C63.2 14.8 49.2.8 32 .8S.8 14.8.8 32c0 9.5 4.3 18 11 23.7.1.1.2.2.3.2 5.4 4.5 12.3 7.2 20 7.2 7.5 0 14.4-2.7 19.8-7.1.3-.1.6-.3.7-.6 6.4-5.7 10.6-14 10.6-23.4zM3.7 32C3.7 16.4 16.4 3.7 32 3.7S60.3 16.4 60.3 32c0 7.6-3 14.5-8 19.6-.8-3.7-3.2-10.1-10.5-14.2 1.7-2.1 2.6-4.8 2.6-7.6 0-6.8-5.6-12.4-12.4-12.4-6.8 0-12.4 5.6-12.4 12.4 0 2.9 1 5.5 2.6 7.6-7.4 4.1-9.8 10.5-10.5 14.2-4.9-5-8-12-8-19.6zm18.8-2.1c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5zm-8.2 24.2c.2-2.3 1.4-10.1 10-14.5 2.1 1.7 4.8 2.6 7.6 2.6 2.9 0 5.6-1 7.7-2.7 8.5 4.4 9.9 12 10.1 14.5-4.9 3.9-11.1 6.3-17.7 6.3-6.7 0-12.8-2.3-17.7-6.2zm0 0"/></g></svg>';
        else if (name.svg == 'salud')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"><defs><path id="a" d="M.5 2h63.7v60.4H.5z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/><g></svg>';
        else if (name.svg == 'documentos')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"><path d="M47.5 26.8H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M21.7 20.6H32c.6 0 1-.5 1-1 0-.6-.5-1-1-1H21.7c-.6 0-1 .5-1 1-.1.6.4 1 1 1zm0 0M47.5 35.1H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M47.5 43.4H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1 0-.6-.4-1-1-1zm0 0M47.5 51.6H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0"/><path d="M51.6 16.1V1H7.2v56.8h5.2V63h44.4V21.2l-5.2-5.1zm-9.3-6.4l10.9 10.9H42.3V9.7zm-33 46.1V3.1h40.3V14l-7.8-7.8H12.4v49.6H9.3zm5.1 5.1V8.2h25.8v14.5h14.5v38.2H14.4zm0 0"/></g></svg>';
        else if (name.svg == 'preguntas')
            this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="' + color + '" stroke="none"><path d="M32 .8C14.8.8.8 14.8.8 32s14 31.2 31.2 31.2 31.2-14 31.2-31.2S49.2.8 32 .8zm0 60C16.1 60.8 3.2 47.9 3.2 32S16.1 3.2 32 3.2 60.8 16.1 60.8 32 47.9 60.8 32 60.8zm0 0"/><path d="M32 45.2c-.7 0-1.2.5-1.2 1.2v2.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-2.4c0-.7-.5-1.2-1.2-1.2zm0 0M32.1 11.6H32c-2.5 0-4.9 1-6.7 2.8-1.8 1.8-2.9 4.2-2.9 6.8 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c0-1.9.8-3.8 2.1-5.1 1.4-1.4 3.2-2.1 5.2-2.1 3.8.1 7 3.3 7.1 7.1 0 2.5-1.2 4.8-3.3 6.2-3.2 2.1-5.1 5.7-5.1 9.7v3.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V37c0-3.2 1.5-6.1 4-7.7 2.8-1.8 4.4-4.9 4.4-8.2-.1-5.2-4.3-9.4-9.5-9.5zm0 0"/></g></svg>';
        else
            this.svg = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", Object)
    ], FbButtonIconComponent.prototype, "name", void 0);
    FbButtonIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fb-button-icon',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/components/fb-button-icon/fb-button-icon.html"*/'<!-- Generated template for the FbButtonIconComponent component -->\n<button [class]="name.class">\n	<p [innerHTML]="domSanitizer.bypassSecurityTrustHtml(svg)"> </p>\n	<p [class]="name.class" >{{ name.name }}</p>\n</button>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/components/fb-button-icon/fb-button-icon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FbButtonIconComponent);
    return FbButtonIconComponent;
}());

//# sourceMappingURL=fb-button-icon.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the FbButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FbButtonComponent = /** @class */ (function () {
    function FbButtonComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", Object)
    ], FbButtonComponent.prototype, "name", void 0);
    FbButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fb-button',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/components/fb-button/fb-button.html"*/'<!-- Generated template for the FbButtonIconComponent component -->\n<button [class]="name.class">\n	<p [class]="name.class">{{ name.name }}</p>\n</button>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/components/fb-button/fb-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FbButtonComponent);
    return FbButtonComponent;
}());

//# sourceMappingURL=fb-button.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbTituloSubtituloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the FbTituloSubtituloComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FbTituloSubtituloComponent = /** @class */ (function () {
    function FbTituloSubtituloComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('info'),
        __metadata("design:type", Object)
    ], FbTituloSubtituloComponent.prototype, "object", void 0);
    FbTituloSubtituloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fb-titulo-subtitulo',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/components/fb-titulo-subtitulo/fb-titulo-subtitulo.html"*/'<!-- Generated template for the FbTituloSubtituloComponent component -->\n<div>\n  <h1>{{ object.titulo }}</h1>\n  <h2>{{ object.subtitulo }}</h2>\n</div>'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/components/fb-titulo-subtitulo/fb-titulo-subtitulo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FbTituloSubtituloComponent);
    return FbTituloSubtituloComponent;
}());

//# sourceMappingURL=fb-titulo-subtitulo.js.map

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 406,
	"./af.js": 406,
	"./ar": 407,
	"./ar-dz": 408,
	"./ar-dz.js": 408,
	"./ar-kw": 409,
	"./ar-kw.js": 409,
	"./ar-ly": 410,
	"./ar-ly.js": 410,
	"./ar-ma": 411,
	"./ar-ma.js": 411,
	"./ar-sa": 412,
	"./ar-sa.js": 412,
	"./ar-tn": 413,
	"./ar-tn.js": 413,
	"./ar.js": 407,
	"./az": 414,
	"./az.js": 414,
	"./be": 415,
	"./be.js": 415,
	"./bg": 416,
	"./bg.js": 416,
	"./bm": 417,
	"./bm.js": 417,
	"./bn": 418,
	"./bn.js": 418,
	"./bo": 419,
	"./bo.js": 419,
	"./br": 420,
	"./br.js": 420,
	"./bs": 421,
	"./bs.js": 421,
	"./ca": 422,
	"./ca.js": 422,
	"./cs": 423,
	"./cs.js": 423,
	"./cv": 424,
	"./cv.js": 424,
	"./cy": 425,
	"./cy.js": 425,
	"./da": 426,
	"./da.js": 426,
	"./de": 427,
	"./de-at": 428,
	"./de-at.js": 428,
	"./de-ch": 429,
	"./de-ch.js": 429,
	"./de.js": 427,
	"./dv": 430,
	"./dv.js": 430,
	"./el": 431,
	"./el.js": 431,
	"./en-au": 432,
	"./en-au.js": 432,
	"./en-ca": 433,
	"./en-ca.js": 433,
	"./en-gb": 434,
	"./en-gb.js": 434,
	"./en-ie": 435,
	"./en-ie.js": 435,
	"./en-il": 436,
	"./en-il.js": 436,
	"./en-nz": 437,
	"./en-nz.js": 437,
	"./eo": 438,
	"./eo.js": 438,
	"./es": 439,
	"./es-do": 440,
	"./es-do.js": 440,
	"./es-us": 441,
	"./es-us.js": 441,
	"./es.js": 439,
	"./et": 442,
	"./et.js": 442,
	"./eu": 443,
	"./eu.js": 443,
	"./fa": 444,
	"./fa.js": 444,
	"./fi": 445,
	"./fi.js": 445,
	"./fo": 446,
	"./fo.js": 446,
	"./fr": 447,
	"./fr-ca": 448,
	"./fr-ca.js": 448,
	"./fr-ch": 449,
	"./fr-ch.js": 449,
	"./fr.js": 447,
	"./fy": 450,
	"./fy.js": 450,
	"./gd": 451,
	"./gd.js": 451,
	"./gl": 452,
	"./gl.js": 452,
	"./gom-latn": 453,
	"./gom-latn.js": 453,
	"./gu": 454,
	"./gu.js": 454,
	"./he": 455,
	"./he.js": 455,
	"./hi": 456,
	"./hi.js": 456,
	"./hr": 457,
	"./hr.js": 457,
	"./hu": 458,
	"./hu.js": 458,
	"./hy-am": 459,
	"./hy-am.js": 459,
	"./id": 460,
	"./id.js": 460,
	"./is": 461,
	"./is.js": 461,
	"./it": 462,
	"./it.js": 462,
	"./ja": 463,
	"./ja.js": 463,
	"./jv": 464,
	"./jv.js": 464,
	"./ka": 465,
	"./ka.js": 465,
	"./kk": 466,
	"./kk.js": 466,
	"./km": 467,
	"./km.js": 467,
	"./kn": 468,
	"./kn.js": 468,
	"./ko": 469,
	"./ko.js": 469,
	"./ku": 470,
	"./ku.js": 470,
	"./ky": 471,
	"./ky.js": 471,
	"./lb": 472,
	"./lb.js": 472,
	"./lo": 473,
	"./lo.js": 473,
	"./lt": 474,
	"./lt.js": 474,
	"./lv": 475,
	"./lv.js": 475,
	"./me": 476,
	"./me.js": 476,
	"./mi": 477,
	"./mi.js": 477,
	"./mk": 478,
	"./mk.js": 478,
	"./ml": 479,
	"./ml.js": 479,
	"./mn": 480,
	"./mn.js": 480,
	"./mr": 481,
	"./mr.js": 481,
	"./ms": 482,
	"./ms-my": 483,
	"./ms-my.js": 483,
	"./ms.js": 482,
	"./mt": 484,
	"./mt.js": 484,
	"./my": 485,
	"./my.js": 485,
	"./nb": 486,
	"./nb.js": 486,
	"./ne": 487,
	"./ne.js": 487,
	"./nl": 488,
	"./nl-be": 489,
	"./nl-be.js": 489,
	"./nl.js": 488,
	"./nn": 490,
	"./nn.js": 490,
	"./pa-in": 491,
	"./pa-in.js": 491,
	"./pl": 492,
	"./pl.js": 492,
	"./pt": 493,
	"./pt-br": 494,
	"./pt-br.js": 494,
	"./pt.js": 493,
	"./ro": 495,
	"./ro.js": 495,
	"./ru": 496,
	"./ru.js": 496,
	"./sd": 497,
	"./sd.js": 497,
	"./se": 498,
	"./se.js": 498,
	"./si": 499,
	"./si.js": 499,
	"./sk": 500,
	"./sk.js": 500,
	"./sl": 501,
	"./sl.js": 501,
	"./sq": 502,
	"./sq.js": 502,
	"./sr": 503,
	"./sr-cyrl": 504,
	"./sr-cyrl.js": 504,
	"./sr.js": 503,
	"./ss": 505,
	"./ss.js": 505,
	"./sv": 506,
	"./sv.js": 506,
	"./sw": 507,
	"./sw.js": 507,
	"./ta": 508,
	"./ta.js": 508,
	"./te": 509,
	"./te.js": 509,
	"./tet": 510,
	"./tet.js": 510,
	"./tg": 511,
	"./tg.js": 511,
	"./th": 512,
	"./th.js": 512,
	"./tl-ph": 513,
	"./tl-ph.js": 513,
	"./tlh": 514,
	"./tlh.js": 514,
	"./tr": 515,
	"./tr.js": 515,
	"./tzl": 516,
	"./tzl.js": 516,
	"./tzm": 517,
	"./tzm-latn": 518,
	"./tzm-latn.js": 518,
	"./tzm.js": 517,
	"./ug-cn": 519,
	"./ug-cn.js": 519,
	"./uk": 520,
	"./uk.js": 520,
	"./ur": 521,
	"./ur.js": 521,
	"./uz": 522,
	"./uz-latn": 523,
	"./uz-latn.js": 523,
	"./uz.js": 522,
	"./vi": 524,
	"./vi.js": 524,
	"./x-pseudo": 525,
	"./x-pseudo.js": 525,
	"./yo": 526,
	"./yo.js": 526,
	"./zh-cn": 527,
	"./zh-cn.js": 527,
	"./zh-hk": 528,
	"./zh-hk.js": 528,
	"./zh-tw": 529,
	"./zh-tw.js": 529
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 814;

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mi_salud_mi_salud__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_perfil_mi_perfil__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mis_documentos_mis_documentos__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mis_citas_mis_citas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sugerencias_sugerencias__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_password_change_password__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pedir_cita_pedir_cita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__documentos_contables_documentos_contables__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__presupuestos_presupuestos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recall_recall__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__consejos_personalizados_consejos_personalizados__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__instrucciones_instrucciones__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Páginas del menú






// Páginas de navegación









// Proveedor de API

// Para aceptar HTML desde la API

// Para abrir la aplicación de llamadas nativa.

var HomePage = /** @class */ (function () {
    function HomePage(callNumber, domSanitizer, toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.callNumber = callNumber;
        this.domSanitizer = domSanitizer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.cards = new Array(); // Array donde se almacenan los objetos del tipo card descargados del servidor.
        this.cardsMenu = new Array(); // Array donde se descargan los elementos del menú
        this.bPedirCita = { name: 'PEDIR CITA', svg: '', openPage: 'PedirCita', class: 'active', tipo: 'page', gradiente: '' };
        this.showLoading();
        this.getCardsHome();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que abre la aplicación de llamadas para
    *	efectuar una llamada a la clínica
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    HomePage.prototype.callClinica = function () {
        this.callNumber.callNumber("+34917681812", true).catch(function (err) { return console.log('Error launching dialer', err); });
    };
    /**
    * 	Función que mueve los elementos del menú en forma
    *	de slider para poder albergar más elementos
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    HomePage.prototype.next = function () {
        if (this.slides.isEnd())
            this.slides.slidePrev();
        else
            this.slides.slideNext();
    };
    /**
    * 	Función que abre una página o una web dependiendo
    *	de los parámetros que se les introduzca.
    *
    * 	@param String page a la que redirigir.
    * 	@param String tipo si es pagina o web.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    HomePage.prototype.openPage = function (page, tipo) {
        if (tipo === "page") {
            if (page == "MiSalud")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mi_salud_mi_salud__["a" /* MiSaludPage */]);
            else if (page == "MiPerfil")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mi_perfil_mi_perfil__["a" /* MiPerfilPage */]);
            else if (page == "MisDocumentos")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mis_documentos_mis_documentos__["a" /* MisDocumentosPage */]);
            else if (page == "MisCitas")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mis_citas_mis_citas__["a" /* MisCitasPage */]);
            else if (page == "Chat")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
            else if (page == "Sugerencias")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sugerencias_sugerencias__["a" /* SugerenciasPage */]);
            else if (page == "Higiene")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__recall_recall__["a" /* RecallPage */]);
            else if (page == "Perfil")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */]);
            else if (page == "Password")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__change_password_change_password__["a" /* ChangePasswordPage */]);
            else if (page == "DocContables")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */]);
            else if (page == "DocPresupuestos")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__presupuestos_presupuestos__["a" /* PresupuestosPage */]);
            else if (page == "Citas")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */]);
            else if (page == "PedirCita")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
            else if (page == "ConsejosPersonalizados")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */]);
            else if (page == "Instrucciones")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__instrucciones_instrucciones__["a" /* InstruccionesPage */]);
            else
                this.presentToast("La página no está disponible.");
        }
        else if (tipo == "web") {
            window.open(page, '_system', 'location=yes');
        }
        else {
            this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
        }
    };
    /**
    * 	Función que muestra un Toast con la información
    *	referente a la acción del usuario.
    *
    * 	@param String Titulo de la alerta.
    * 	@param String Texto de la alerta.
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    HomePage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    /**
    * 	Función que obtiene las tarjetas para la página
    *	principal de la aplicación.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    HomePage.prototype.getCardsHome = function () {
        var _this = this;
        this.restProvider.getCardsHome().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                if (data['data']['cards']) {
                    for (var i in data['data']['cards']) {
                        _this.cards.push(data['data']['cards'][i]);
                    }
                }
                for (var j in data['data']['menu']) {
                    _this.cardsMenu.push(data['data']['menu'][j]);
                }
                _this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            _this.loading.dismiss();
            console.log(e);
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
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false
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
    HomePage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Usuario/Desktop/appMobile/src/pages/home/home.html"*/'<div class="back"> \n	<ion-header no-border>\n  		<ion-navbar>\n    		<ion-buttons left>\n	    		<button ion-button menuToggle>\n	      			<ion-icon name="menu"></ion-icon>\n    			</button>\n    		</ion-buttons>\n\n    		<ion-title>Ferrus & Bratos</ion-title>\n\n    		<ion-buttons right>\n	    		<button ion-button style="font-size: 2rem;color:white;margin-right:1rem;" (click)="callClinica()">\n	      			<ion-icon name="call"></ion-icon>\n	    		</button>\n    		</ion-buttons>\n\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="padding: 6rem 0 2rem;color:white;">Próximas citas</h1> \n\n	<ion-slides pager style="margin-left: -10%;" spaceBetween="-100" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards">\n	    	<ion-row>\n	    		<ion-col col-3 style="background-color: hsla(0, 0%, 100%, 0.3); height: 18rem;    border-radius: 6px 0 0 6px;">\n	    			<ion-row style="position: fixed; top: 10%; color: white;">\n	    				<ion-row style="width: 83%;"><ion-col style="font-size: 4rem;    margin: -15% 0px 0 -15%;font-weight: bold;">{{card.dia}}</ion-col></ion-row>\n	    				<ion-row style="width: 83%;margin-top: -1rem;"><ion-col style="    font-size: 2.35rem;    margin: -10% 0% 0% -15%;">{{card.mes}}</ion-col></ion-row>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 5%; color: white;    width: 16%;">\n	    				<ion-col>{{card.hora}}</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    		<ion-col col-9 style="background-color: hsla(0, 0%, 100%, 0.2); height: 18rem;    border-radius: 0 6px 6px 0;">\n	    			<ion-row style="margin-top: -4%;">\n	    				<ion-col text-wrap class="tratamiento">{{card.tratamiento}}</ion-col>\n	    			</ion-row>\n	    			<ion-row style="position: fixed; bottom: 3%; color: white; width: 52%;">\n	    				<ion-col col-3><img [src]="domSanitizer.bypassSecurityTrustUrl(card.imagen)" style=" border-radius: 50%;margin-top: 20%;" /></ion-col>\n	    				<ion-col col-9 class="doctor" style="margin-top: 5%;">{{card.doctor}}</ion-col>\n	    			</ion-row>\n	    		</ion-col>\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n	<div *ngIf="cards?.length <= 0" style=" max-height: 10rem; max-width: 77%; display: block;">\n  		<p> Actualmente no tienes citas </p>\n	</div>\n</div>\n\n<!-- Gradiente -->\n<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient2" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n<!-- Fin Gradiente -->\n\n<div class="menu" style="margin: 20% 10%;">\n	<ion-row>\n		<h1 col-9>Menú</h1>\n		<p col-3 style="text-align:right;padding-top: 20px;" (click)="next()">Ver más</p>\n	</ion-row>\n	<ion-row class="square" style="margin: 0px -13% 0px -17%;">\n		<ion-slides #slides pager style="height: 250%;">\n			<div *ngFor="let c of cardsMenu; let i=index">\n				<ion-slide class="slide" style="padding:0" *ngIf="i == 0">\n					<ion-row style="margin: 15% 8% 15% 12%">\n						<div *ngFor="let c of cardsMenu| slice:0:6 ; let j=index" col-4>\n							<fb-button-icon *ngIf="j<6" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n						</div>\n					</ion-row>\n				</ion-slide>\n				<ion-slide class="slide" style="padding:0" *ngIf="i == 5">\n					<ion-row style="margin: 15% 8% 15% 12%">\n						<div *ngFor="let c of cardsMenu | slice:6; let j=index" col-4>\n							<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n						</div>\n					</ion-row>\n				</ion-slide>\n			</div>			\n		</ion-slides>	\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/Usuario/Desktop/appMobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[532]);
//# sourceMappingURL=main.js.map