webpackJsonp([37],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHigienesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_recall_recall__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recall_pasadas_recall_pasadas__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(20);
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
    TabHigienesPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Tabs */])
    ], TabHigienesPage.prototype, "tabs", void 0);
    TabHigienesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-higienes',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/tab-higienes/tab-higienes.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Mis Higienes</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>       \n  <ion-tabs #myTab tabsPlacement="top" selectedIndex="1">\n    <ion-tab [root]="tabAnteriores" tabTitle="Pasadas" ></ion-tab>          \n    <ion-tab [root]="tabFuturas" tabTitle="Futuras" ></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/tab-higienes/tab-higienes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], TabHigienesPage);
    return TabHigienesPage;
}());

//# sourceMappingURL=tab-higienes.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstruccionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
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
    InstruccionesPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
    };
    InstruccionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-instrucciones',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/instrucciones/instrucciones.html"*/'<ion-header no-border>\n<ion-navbar>\n    <ion-title>Mis Instrucciones</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- Gradiente -->\n	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient4" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<!-- Fin Gradiente -->\n    \n	\n    <div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n    <div *ngIf="cards?.length > 0; else notCards">\n        <p>A continuación, podrás consultar las instrucciones de tu tratamiento. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>\n    </div>\n    <ng-template #notCards>\n        <p>De momento, no necesitas seguir ninguna instrucción especial.\n        </p>\n    </ng-template>\n\n	<div *ngFor="let card of cards">\n		<div class="fb-card -v1">\n                <div class="left">\n                    <div class="avatar">\n						<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n							<g fill="url(#fb-shadow-gradient4)" stroke="none">\n								<style>.st0{fill:url(#fb-shadow-gradient4)}</style><path class="st0" d="M52.7 13.1c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2c-.1.6.5 1.2 1.2 1.2z"></path><path class="st0" d="M47.6 4.3c-4.9 0-9.3 1.9-12.8 5.4-1.2 1.2-2.1 2.5-2.8 3.5-.6-1-1.6-2.2-2.8-3.5-3.5-3.6-8-5.4-12.8-5.4C7.1 4.3.6 12.1.6 21.3c0 12.5 13.2 23 30.6 38.1.2.2.5.3.8.3s.6-.1.8-.3c17.4-15.1 30.6-25.6 30.6-38.1 0-4.5-1.5-8.8-4.4-11.9-2.9-3.3-6.9-5.1-11.4-5.1zM32 56.8C15.6 42.7 3.1 32.5 3.1 21.3 3.1 13 8.8 6.8 16.4 6.8c4.2 0 7.9 1.6 11 4.7 2.4 2.4 3.5 4.8 3.5 4.8.2.4.6.7 1.1.7.5 0 .9-.3 1.1-.7 0 0 1.1-2.4 3.5-4.8 3.1-3.1 6.8-4.7 11-4.7 7.6 0 13.3 6.3 13.3 14.6 0 11.3-13.3 22-28.9 35.4z"></path><path class="st0" d="M55.3 14.5c-.6.3-.8 1.1-.5 1.7.8 1.5 1.3 3.4 1.3 5.2 0 3.5-1.7 7.3-5.3 11.8-.4.5-.3 1.3.2 1.7.5.4 1.3.3 1.7-.2 4-5 5.8-9.2 5.8-13.4 0-2.2-.5-4.4-1.5-6.3-.4-.6-1.1-.8-1.7-.5zM43.8 27.8h-6.9v-6.9c0-.7-.5-1.2-1.2-1.2h-7.4c-.7 0-1.2.5-1.2 1.2v6.9h-6.9c-.7 0-1.2.5-1.2 1.2v7.4c0 .7.5 1.2 1.2 1.2h6.9v6.9c0 .7.5 1.2 1.2 1.2h7.4c.7 0 1.2-.5 1.2-1.2v-6.9h6.9c.7 0 1.2-.5 1.2-1.2V29c0-.6-.5-1.2-1.2-1.2zm-1.3 7.4h-6.9c-.7 0-1.2.5-1.2 1.2v6.9h-4.9v-6.9c0-.7-.5-1.2-1.2-1.2h-6.9v-4.9h6.9c.7 0 1.2-.5 1.2-1.2v-6.9h4.9V29c0 .7.5 1.2 1.2 1.2h6.9v5z"></path>\n							</g>		\n						</svg>\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                        {{ card.nombre }}\n                    </div>\n                    <div class="card_subtitle">\n                        {{ card.fecha }}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="openPdf(card.base64, card.idopc)">\n                        <svg version="1.1" style="margin-left: 0.3rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\n						<path fill="#fff" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\n						</svg>\n                    </a>\n                </div>\n            </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/instrucciones/instrucciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], InstruccionesPage);
    return InstruccionesPage;
}());

//# sourceMappingURL=instrucciones.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosPersonalizadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_consejos_detail_consejos_detail__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
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
        if (info == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
        else
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
            selector: 'page-consejos-personalizados',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consejos-personalizados/consejos-personalizados.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Mis Consejos</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n    <div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n    <div *ngIf="cards?.length > 0; else notCards">\n        <p>Tu especialista quiere hacerte llegar una serie de recomendaciones personalizadas. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.\n    </p>\n    </div>\n    <ng-template #notCards>\n        <p>De momento, no necesitas seguir ninguna recomendación especial.\n        </p>\n    </ng-template>\n\n    <br />	 \n\n	<div *ngFor="let card of cards">\n		<div class="fb-card -v1">\n                <div class="left">\n                    <div class="avatar">\n                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(card.Img)" />\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                        {{ card.Tratamiento }}\n                    </div>\n                    <div class="card_subtitle">\n                        {{ card.Doctor }}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink" (click)="openPage(card)">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="margin: .5rem 0 0 1rem;">\n                            <path fill="#fff" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n                        </svg> \n                    </a>\n                </div>\n            </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consejos-personalizados/consejos-personalizados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], ConsejosPersonalizadosPage);
    return ConsejosPersonalizadosPage;
}());

//# sourceMappingURL=consejos-personalizados.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(20);
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
    function ProfilePage(domSanitizer, _CAMERA, actionSheetCtrl, file, events, alertCtrl, restProvider, navCtrl, loadingCtrl) {
        this.domSanitizer = domSanitizer;
        this._CAMERA = _CAMERA;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {}; // Array para almacenar los valores del perfil.
        this.loadingPresented = false; // Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
        this.bGuardar = { name: 'GUARDAR CAMBIOS', svg: '', openPage: '', class: 'active btn-large', tipo: 'page', gradiente: 'fb-gradient' };
        this.existe = false;
        this.base64 = "";
        this.checkFileExistence("fyb.jpeg");
        this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación
        this.getProfile(); // Llamada a la funcion para obtener el perfil del paciente
        this.events.publish("user:logged");
    }
    ProfilePage.prototype.checkFileExistence = function (fileName) {
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
    ProfilePage.prototype.getContentType = function (base64Data) {
        var block = base64Data.split(";");
        var contentType = block[0].split(":")[1];
        return contentType;
    };
    //here is the method is used to convert base64 data to blob data  
    ProfilePage.prototype.base64toBlob = function (b64Data, contentType) {
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
    ProfilePage.prototype.writeFile = function (base64Data, folderName, fileName) {
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
    /**
    * 	Función que envía una imagen a Firebase
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ProfilePage.prototype.selectImage = function (x) {
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
    /*
    * 	Función que selecciona si es desde galeria o camara
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ProfilePage.prototype.openChooseImage = function () {
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
    ProfilePage.prototype.showLoading = function (t) {
        if (t === void 0) { t = 'Cargando información...'; }
        this.loading = this.loadingCtrl.create({
            content: t,
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
    ProfilePage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/profile/profile.html"*/'<ion-header no-border>\n	<ion-navbar>\n    <ion-title>Mis Datos</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n	</ion-header>\n\n<ion-content padding>\n	<div class="perfil__foto">\n		<img  *ngIf="data.Imagen" [src]="domSanitizer.bypassSecurityTrustUrl(data.Imagen)" style="object-fit:cover;" class="imageProfile">\n		<a class="btn -rounded -bg-pink editIcon" (click)="openChooseImage()" style="padding: 0.5rem;box-shadow: 4px 10px 41px 0px rgba(237, 122, 173, 0.37);    color: transparent;"> \n			 <svg viewBox="0 0 400 400" width="512" xmlns="http://www.w3.org/2000/svg"> -->\n				 <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" fill="#FFFFFF"/> \n			 </svg> \n		 </a>\n	</div>\n	<ion-list> \n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Nombre</ion-label>\n		<ion-input type="text" placeholder="Nombre" [(ngModel)]="data.Nombre"></ion-input><ion-icon name="fb-user" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Apellidos</ion-label>\n		<ion-input type="text" placeholder="Apellidos" [(ngModel)]="data.Apellidos"></ion-input><ion-icon name="fb-user" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Email</ion-label>\n		<ion-input type="Email" placeholder="Email"  [(ngModel)]="data.Email"></ion-input><ion-icon name="fb-mail" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>DNI</ion-label>\n		<ion-input type="text" placeholder="DNI" [(ngModel)]="data.DNI"></ion-input><ion-icon name="fb-dni" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Fecha nacimiento</ion-label>\n		<ion-input type="text" placeholder="Fecha nacimiento" [(ngModel)]="data.FecNacim"></ion-input><ion-icon name="fb-calendar" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Dirección</ion-label>\n		<ion-input type="text" placeholder="Dirección" [(ngModel)]="data.Direccion"></ion-input><ion-icon name="fb-location" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Localidad</ion-label>\n		<ion-input type="text" placeholder="Localidad" [(ngModel)]="data.Localidad"></ion-input><ion-icon name="fb-location" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Provincia</ion-label>\n		<ion-input type="text" placeholder="Provincia" [(ngModel)]="data.Provincia"></ion-input><ion-icon name="fb-location" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Teléfono móvil</ion-label>\n		<ion-input type="number" placeholder="Teléfono móvil" [(ngModel)]="data.TelMovil"></ion-input><ion-icon name="fb-phone" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Teléfono fijo</ion-label>\n		<ion-input type="number" placeholder="Teléfono fijo" [(ngModel)]="data.Tel1"></ion-input><ion-icon name="fb-telephone" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Alergias</ion-label>\n		<ion-input type="text" placeholder="Alergias" [(ngModel)]="data.Alergias"></ion-input><ion-icon name="fb-alarm" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>\n		<ion-label color="grey-medium" stacked>Medicacion</ion-label>\n		<ion-input type="text" placeholder="Medicacion" [(ngModel)]="data.Medicacion"></ion-input><ion-icon name="fb-plus-linear" item-right></ion-icon>\n	  </ion-item>\n	  <ion-item>  \n	  </ion-item>\n	</ion-list>\n	<fb-button [name]="bGuardar" [class]="bGuardar.class" (click)="setProfile()"></fb-button>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresupuestosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
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
    PresupuestosPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
    };
    PresupuestosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-presupuestos',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/presupuestos/presupuestos.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Mis Presupuestos</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n    <div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n    <div *ngIf="cards?.length > 0; else notCards">\n        <p>A continuación, podrás tener acceso a todos tus presupuestos para consultarlos cuando desees.</p>\n    </div>\n    <ng-template #notCards>\n        <p>De momento, no tienes ningún presupuesto.\n        </p>\n    </ng-template>\n	<div *ngFor="let card of cards" (click)="createAndOpenPDF(card.html, card.NumPre)">\n        <div class="fb-card -v2">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title">\n                        {{card.nomDoc}}\n                    </div>\n                    <div class="card_subtitle">\n                        Estado: {{card.estado}}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_subtitle">\n                       {{card.fecha}}\n                    </div>\n                </div>\n            </div>\n            <div class="card_separator">\n            </div>\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -price">\n                        {{card.total}} €\n                    </div>\n                    <div class="card_subtitle">\n                        {{card.formaPago}}\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink">\n                        <svg version="1.1" style="margin-left: 0.3rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\n						<path fill="#fff" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\n						</svg>  \n                    </a>\n                </div>\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/presupuestos/presupuestos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], PresupuestosPage);
    return PresupuestosPage;
}());

//# sourceMappingURL=presupuestos.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(315);
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
    RestProvider.prototype.checkDNI = function (dni) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/checkDNI', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('dni', dni)
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
    RestProvider.prototype.sendPIN = function (dni) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/sendPIN', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('dni', dni)
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
    RestProvider.prototype.checkPIN = function (dni, pin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/checkPIN', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('dni', dni).set('pin', pin)
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
    RestProvider.prototype.getFaq = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getFaq', false, {
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
    RestProvider.prototype.getFaqDetail = function (c) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getFaqDetail', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('categoria', c)
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
    RestProvider.prototype.actualizarPass = function (/*pass1, */ pass2, pass3) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/actualizarPass', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]() /*.set('pass1', pass1)*/.set('pass2', pass2).set('pass3', pass3)
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
    RestProvider.prototype.searchCita = function (dia, hora, doctor, tto) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/buscarCitas', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('dia', dia).set('hora', hora).set('dr', doctor).set('tto', tto)
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
    RestProvider.prototype.getTratamientos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/tratamientosPedirCita', false, {
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
    RestProvider.prototype.getDoctors = function (e) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/doctoresPedirCita', false, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('tto', e)
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosContablesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
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
        this.tituloSubtitulo = { titulo: "Documentos contables", subtitulo: "de tratamientos" };
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
    DocumentosContablesPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
    };
    DocumentosContablesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-documentos-contables',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/documentos-contables/documentos-contables.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Documentos Contables</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<div>\n        <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n    <div *ngIf="cards?.length > 0; else notCards">\n        <p>A continuación, podrás tener acceso a todos tus documentos contables para consultarnos cuando desees.</p>\n    </div>\n    <ng-template #notCards>\n        <p>De momento, no disponemos de ningún documento contable. Si lo deseas, puedes consultar tus presupuestos\n        </p>\n    </ng-template>\n	<div *ngFor="let card of cards" (click)="createAndOpenPDF(card.html, card.numDoc)">\n        <div class="fb-card -v2">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title">\n                        {{card.tipo}}\n                    </div>\n                    <div class="card_subtitle">\n                       {{card.fecha}}\n                    </div>\n                </div>                \n            </div>\n            <div class="card_separator">\n            </div>\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -price" style="    margin-top: 5%;">\n                        {{card.total}} €\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink">\n                        <svg version="1.1" style="margin-left: 0.3rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\n						<path fill="#fff" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\n						</svg>\n                    </a>\n                </div>\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/documentos-contables/documentos-contables.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], DocumentosContablesPage);
    return DocumentosContablesPage;
}());

//# sourceMappingURL=documentos-contables.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabConsultarCitas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ConsultarCitas_ConsultarCitas__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_consultar_citas_futuras_consultar_citas_futuras__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(20);
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
    function TabConsultarCitas(events, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabFuturas = __WEBPACK_IMPORTED_MODULE_3__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */]; // Página de citas futuras
        this.tabAnteriores = __WEBPACK_IMPORTED_MODULE_2__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */]; // Página de citas pasadas
        this.activeCard = 0;
        events.subscribe("user:Unauthorized", function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
        this.activeCard = this.navParams.get('tab');
    }
    TabConsultarCitas.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Tabs */])
    ], TabConsultarCitas.prototype, "tabs", void 0);
    TabConsultarCitas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tabConsultarCitas',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/tabConsultarCitas/tabConsultarCitas.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Mis Citas</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>       \n	<ion-tabs #myTab tabsPlacement="top" selectedIndex="1">\n		<ion-tab [root]="tabAnteriores" tabTitle="Pasadas" ></ion-tab>					\n		<ion-tab [root]="tabFuturas" tabTitle="Futuras" [rootParams]="activeCard"></ion-tab>\n	</ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/tabConsultarCitas/tabConsultarCitas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], TabConsultarCitas);
    return TabConsultarCitas;
}());

//# sourceMappingURL=tabConsultarCitas.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_input_login_input__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_registro_login_registro__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginTabPage = /** @class */ (function () {
    function LoginTabPage(events, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabRegistro = __WEBPACK_IMPORTED_MODULE_3__pages_login_registro_login_registro__["a" /* LoginRegistroPage */]; // Página de registro
        this.tabLogin = __WEBPACK_IMPORTED_MODULE_2__pages_login_input_login_input__["a" /* LoginInputPage */]; // Página de login
        this.pageDefault = 0;
        events.subscribe("user:Unauthorized", function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        });
        this.pageDefault = this.navParams.get("pageDefault");
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Tabs */])
    ], LoginTabPage.prototype, "tabs", void 0);
    LoginTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-tab',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-tab/login-tab.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>       \n	<ion-tabs #myTab tabsPlacement="top" selectedIndex="{{ pageDefault }}">\n		<ion-tab [root]="tabLogin" tabTitle="Iniciar sesión" ></ion-tab>					\n		<ion-tab [root]="tabRegistro" tabTitle="Crear cuenta" ></ion-tab>\n	</ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-tab/login-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], LoginTabPage);
    return LoginTabPage;
}());

//# sourceMappingURL=login-tab.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginErrorPinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Para abrir la aplicación de llamadas nativa.

var LoginErrorPinPage = /** @class */ (function () {
    function LoginErrorPinPage(callNumber, navCtrl, navParams) {
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tituloSubtitulo = { titulo: "Error validando", subtitulo: "el DNI introducido" };
        this.bLLamar = { name: 'Llamar a Ferrus & Bratos', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
    }
    /**
    *   Función que abre la aplicación de llamadas para
    * efectuar una llamada a la clínica
    *
    *   @author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    LoginErrorPinPage.prototype.callClinica = function () {
        this.callNumber.callNumber("+34917681812", true).catch(function (err) { return console.log('Error launching dialer', err); });
    };
    LoginErrorPinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-error-pin',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-error-pin/login-error-pin.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Error al validar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<p>No hemos podido validar tus datos, si eres paciente, porfavor llamanos al <span (click)="callClinica()">91 768 18 12</span> y te gestionamos el alta en la aplicación</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bLLamar" [class]="bLLamar.class" (click)="callClinica()"></fb-button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-error-pin/login-error-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], LoginErrorPinPage);
    return LoginErrorPinPage;
}());

//# sourceMappingURL=login-error-pin.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginYaRegistradoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_recibir_pin_login_recibir_pin__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_tab_login_tab__ = __webpack_require__(143);
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
    function LoginYaRegistradoPage(toastCtrl, nav, navParams) {
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.tituloSubtitulo = { titulo: "Tu cuenta ya existe", subtitulo: "en nuestro sistema" };
        this.bRecuperar = { name: 'Recuperar', svg: '', openPage: 'Recuperar', class: 'active login', tipo: 'page', gradiente: '' };
        this.bIniciarSesion = { name: 'Iniciar sesión', svg: '', openPage: 'Login', class: 'login', tipo: 'page', gradiente: '' };
        this.dni = 0;
        this.dni = this.navParams.get("dni");
        console.log("->", this.navParams.get("dni"));
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
    LoginYaRegistradoPage.prototype.openPage = function (page, tipo) {
        if (tipo === "page") {
            if (page == "Login")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_tab_login_tab__["a" /* LoginTabPage */], { pageDefault: "0" });
            else if (page == "Recuperar")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */], { dni: this.dni });
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
    LoginYaRegistradoPage.prototype.presentToast = function (txt) {
        var toast = this.toastCtrl.create({
            message: txt,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
    };
    LoginYaRegistradoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-ya-registrado',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-ya-registrado/login-ya-registrado.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ya estás registrado</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<p style="text-align: left;">Ya estás registrado en la aplicación, si has olvidado tu contraseña, recupéraña.</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bRecuperar" [class]="bRecuperar.class" (click)="openPage(bRecuperar.openPage,bRecuperar.tipo)"> </fb-button>\n		<p class="line"><span>o</span></p>\n		<fb-button [name]="bIniciarSesion" [class]="bIniciarSesion.class" (click)="openPage(bIniciarSesion.openPage,bIniciarSesion.tipo)"> </fb-button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-ya-registrado/login-ya-registrado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], LoginYaRegistradoPage);
    return LoginYaRegistradoPage;
}());

//# sourceMappingURL=login-ya-registrado.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiSaludPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tab_higienes_tab_higienes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_instrucciones_instrucciones__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(21);
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
            else if (page == "chat")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */]);
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
            selector: 'page-mi-salud',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mi-salud/mi-salud.html"*/'<div class="back"> \n	<ion-header no-border>\n		<ion-navbar class="navWhite">\n    		<ion-title>Mi Salud</ion-title>\n    		<ion-buttons right>\n	    		<button ion-button (click)="openPage(\'chat\',\'page\')">\n	      			<ion-icon name="fb-chat"></ion-icon>\n	    		</button>\n    		</ion-buttons>\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="margin-bottom:1rem;color:white;font-weight:bold;">Próximas Higienes</h1> \n\n	<ion-slides pager style="" slidesPerView="1.3" spaceBetween="18" centeredSlides="true" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards">\n			<div class="cardCita">\n				<div class="cardCita__left">\n					<div class="cardCita__date">\n						<div class="cardCita__day">\n							{{card.dia}}\n						</div>\n						<div class="cardCita__month">\n							{{card.mes}}\n						</div>\n					</div>\n					<div class="cardCita__hour">\n						{{card.hora}}\n					</div>\n				</div>\n				<div class="cardCita__right">\n					<div class="cardCita__tto tratamiento">\n						{{card.tratamiento}}\n					</div>\n					<div class="cardCita__dr">\n						<div class="cardCita__avatar">\n							<img [src]="domSanitizer.bypassSecurityTrustUrl(card.imagen)" style=" border-radius: 50%;"/>\n						</div>\n						<div class="cardCita__drname">\n							{{card.doctor}}\n						</div>\n					</div>\n				</div>\n			</div>\n	  	</ion-slide>\n	</ion-slides>\n	<div *ngIf="cards?.length <= 0" style=" max-height: 10rem; max-width: 77%; display: block;">\n  		<p> Actualmente no tienes citas </p>\n	</div>\n</div>\n\n<!-- Gradiente -->\n<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n<!-- Fin Gradiente -->\n\n<div class="menu">\n	<ion-row>\n		<h1 col-9 style="padding:0px;margin-bottom: 2rem;margin-top:0;font-weight: bold;">Mi Salud</h1>\n	</ion-row>\n	<ion-row class="square" >\n			<div *ngFor="let c of cardsMenu; let i=index" style="width:100%;">\n				<ion-row *ngIf="i == 0">\n					<div *ngFor="let c of cardsMenu| slice:0:1 ; let j=index" col-12>\n						<fb-button-icon *ngIf="j<1" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n				<ion-row *ngIf="i == 1">\n					<div *ngFor="let c of cardsMenu | slice:1; let j=index" col-6>\n						<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n			</div>			\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mi-salud/mi-salud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], MiSaludPage);
    return MiSaludPage;
}());

//# sourceMappingURL=mi-salud.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaPreferenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_elegir_pedir_cita_elegir__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PedirCitaPreferenciasPage = /** @class */ (function () {
    function PedirCitaPreferenciasPage(alertCtrl, events, loadingCtrl, restProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bSiguiente = { name: 'Siguiente', svg: '', openPage: '', class: 'active login', tipo: '', gradiente: '' };
        this.bAnterior = { name: 'Anterior', svg: '', openPage: '', class: 'login', tipo: '', gradiente: '' };
        this.tituloSubtitulo = { titulo: "Elige tus preferencias", subtitulo: "de la cita" };
        this.doctores = [];
        this.diasSemana = [{ dia: "Lunes", class: "" }, { dia: "Martes", class: "" }, { dia: "Miércoles", class: "" }, { dia: "Jueves", class: "" }, { dia: "Viernes", class: "" }];
        this.horasDia = [{ hora: "09:30", class: "" }, { hora: "10:00", class: "" }, { hora: "11:00", class: "" }, { hora: "12:00", class: "" }, { hora: "13:00", class: "" }, { hora: "14:00", class: "" }, { hora: "15:00", class: "" }, { hora: "16:00", class: "" }, { hora: "17:00", class: "" }, { hora: "18:00", class: "" }, { hora: "19:00", class: "" }, { hora: "20:00", class: "" },];
        this.drSelect = "Sin preferencia";
        this.diaSelect = [];
        this.horaSelect = "09:30";
        this.showLoading();
        this.getDoctors(this.navParams.get('tto'));
        this.events.publish("user:logged");
    }
    PedirCitaPreferenciasPage.prototype.selectDr = function (e) {
        for (var x in this.doctores) {
            if (this.doctores[x].IdUsu == e.IdUsu)
                this.doctores[x].class = "active";
            else if (this.doctores[x].IdUsu == "Sin preferencia")
                this.doctores[x].class = "sinpreferencia";
            else
                this.doctores[x].class = "";
            if (this.doctores[x].IdUsu == "Sin preferencia" && this.doctores[x].IdUsu == e.IdUsu)
                this.doctores[x].class = "sinpreferencia active";
        }
        this.drSelect = e.IdUsu;
        console.log(e.IdUsu);
    };
    PedirCitaPreferenciasPage.prototype.selectDia = function (e) {
        for (var x in this.diasSemana) {
            if (this.diasSemana[x].dia == e.dia) {
                if (this.diasSemana[x].class == "active") {
                    this.diasSemana[x].class = "";
                    var index = this.diaSelect.indexOf(e.dia);
                    if (index > -1) {
                        this.diaSelect.splice(index, 1);
                    }
                }
                else {
                    this.diasSemana[x].class = "active";
                    this.diaSelect.push(e.dia);
                }
            }
        }
    };
    PedirCitaPreferenciasPage.prototype.selectHora = function (e) {
        for (var x in this.horasDia) {
            if (this.horasDia[x].hora == e.hora)
                this.horasDia[x].class = "active";
            else
                this.horasDia[x].class = "";
        }
        this.horaSelect = e.hora;
    };
    PedirCitaPreferenciasPage.prototype.siguiente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_elegir_pedir_cita_elegir__["a" /* PedirCitaElegirPage */], {
            'tto': this.navParams.get('tto'),
            'dr': this.drSelect,
            'dia': this.diaSelect,
            'hora': this.horaSelect,
        });
    };
    PedirCitaPreferenciasPage.prototype.anterior = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]);
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
    PedirCitaPreferenciasPage.prototype.getDoctors = function (e) {
        var _this = this;
        this.restProvider.getDoctors(e).then(function (data) {
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
    * 	Función que muestra el ProgressBar cuando alguna acción
    *	se está ejecutando en primer plano.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaPreferenciasPage.prototype.showLoading = function (cont) {
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
    PedirCitaPreferenciasPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PedirCitaPreferenciasPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
    };
    PedirCitaPreferenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita-preferencias',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-preferencias/pedir-cita-preferencias.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Pedir nueva cita</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p>A continuación, podrás elegir tus preferencias respecto al profesional que quieres que te atienda, el día de la semana y la franja horaria.</p> \n    <p>Elije el profesional</p>\n    <ion-slides id="persona" slidesPerView="3.5" spaceBetween="12">\n  		<ion-slide class="slide" *ngFor="let card of doctores" (click)="selectDr(card)" style=" padding: 1rem 0 1rem 0;">\n  			<ion-row>\n	    		<button [class]="card.class + \' button\'">\n	    			<p class="avatarslide"><img src="{{card.Img}}" style="border-radius: 50%;width: 40%;"/></p>\n	    			<p class="nameslidep">{{ card.usuario }}</p>\n	    		</button>	    		\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n\n	<p style=" margin: 1rem 0 -2rem 0;">Preferencia de días</p>\n	<ion-slides slidesPerView="3.5" spaceBetween="12" >\n  		<ion-slide class="slide" *ngFor="let card of diasSemana" >\n  			<ion-row>\n	    		<button [class]="card.class + \' button\'" (click)="selectDia(card)" style="height: 100%;">\n	    			<p style="font-size:1.5rem;" [class]="card.class">{{ card.dia }}</p>\n	    		</button>	    		\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n\n	<p style=" margin: 0rem 0 -2rem 0;">A partir de las:</p>\n	<ion-slides slidesPerView="3.5" spaceBetween="12" >\n  		<ion-slide class="slide" *ngFor="let card of horasDia" >\n  			<ion-row>\n	    		<button [class]="card.class + \' button\'" (click)="selectHora(card)" style="height: 100%;">\n	    			<p style="font-size:1.5rem;" [class]="card.class">{{ card.hora }}</p>\n	    		</button>	    		\n	    	</ion-row>\n	  	</ion-slide>\n	</ion-slides>\n\n	<p style=" text-align: center; margin:0; font-size: 1rem;">2 de 4</p>\n\n	<ion-row style="max-height: 9%;    display: flex;">\n		<ion-col><fb-button [name]="bAnterior" [class]="bAnterior.class" (click)="anterior()" ></fb-button></ion-col>\n		<ion-col><fb-button [name]="bSiguiente" [class]="bSiguiente.class" (click)="siguiente()" ></fb-button></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-preferencias/pedir-cita-preferencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PedirCitaPreferenciasPage);
    return PedirCitaPreferenciasPage;
}());

//# sourceMappingURL=pedir-cita-preferencias.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
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
            selector: 'page-popover',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/popover/popover.html"*/' <ion-list style="margin: 0;">\n      <button ion-item detail-none (click)="presentConfirm(\'confirmar\');"><i style="color:#81c784;margin-right:1rem;" class="fas fa-check"></i>  Confirmar cita</button>\n      <button ion-item detail-none (click)="presentConfirm(\'cambiar\');"><i style="color:#ffb74d;margin-right:1rem;" class="fas fa-exchange-alt"></i>  Cambiar cita</button>\n      <button ion-item detail-none (click)="presentConfirm(\'anular\');"><i style="color:#e57373;margin-right:1rem;" class="fas fa-ban"></i>  Anular cita</button>\n</ion-list>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password_change_password__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(54);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
        else if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_chat_chat__["a" /* ChatPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__change_password_change_password__["a" /* ChangePasswordPage */]);
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
            selector: 'page-mi-perfil',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mi-perfil/mi-perfil.html"*/'<ion-header no-border>\n<ion-navbar>\n    <ion-title>Mi Perfil</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="container">\n		<div class="perfil">\n			<div class="perfil__foto">\n				<img  *ngIf="data.Imagen" [src]="domSanitizer.bypassSecurityTrustUrl(data.Imagen)" style="object-fit:cover;" class="imageProfile">\n				<a class="btn -rounded -bg-pink editIcon" (click)="openChooseImage()" style="padding: 0.5rem;box-shadow: 4px 10px 41px 0px rgba(237, 122, 173, 0.37);    color: transparent;"> \n					 <svg viewBox="0 0 400 400" width="512" xmlns="http://www.w3.org/2000/svg"> -->\n						 <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" fill="#FFFFFF"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" fill="#FFFFFF"/> \n					 </svg> \n				 </a>\n			</div>\n			<div class="perfil__datos">\n				<div class="perfil__dato" style="margin-top:0px;">\n					<ion-icon class="leftIcon" name="fb-location" item-right></ion-icon>\n					<p class="pRight">{{ data.Direccion }} <br/> {{ data.CP }} - {{ data.Localidad }}</p>\n				</div>\n				<hr>\n				<div class="perfil__dato">\n					<ion-icon class="leftIcon" name="fb-phone" item-right></ion-icon>\n					<p class="pRight">{{ data.TelMovil }}</p>\n				</div>\n				<hr>\n				<div class="perfil__dato">\n					<ion-icon class="leftIcon" name="fb-mail" item-right></ion-icon>\n					<p class="pRight" style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden; ">{{ data.Email }}</p>\n				</div>\n			</div>\n		</div>\n		<ion-row>\n			<ion-col>\n				<p class="nombre">{{ data.Nombre }} </p>\n				<p class="apellidos">{{ data.Apellidos }} </p>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col><hr /></ion-col>\n		</ion-row>\n	</div>\n	<ion-row class="h1">\n		<ion-col><h1 style="font-size: 2.4rem;"><b>Editar datos personales</b></h1></ion-col>\n	</ion-row>\n\n	<ion-row class="row30">\n		<ion-col class="paddingBtn"><fb-button-icon [name]="dPersonales" [class]="dPersonales.class" (click)="openPage(dPersonales.openPage,dPersonales.tipo)"></fb-button-icon></ion-col>\n		<ion-col class="paddingBtn"><fb-button-icon [name]="cPassword" [class]="cPassword.class" (click)="openPage(cPassword.openPage,cPassword.tipo)"></fb-button-icon></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mi-perfil/mi-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], MiPerfilPage);
    return MiPerfilPage;
}());

//# sourceMappingURL=mi-perfil.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisDocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_plan_economico_plan_economico__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_presupuestos_presupuestos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_documentos_contables_documentos_contables__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(21);
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
    function MisDocumentosPage(file, fileOpener, domSanitizer, toastCtrl, events, restProvider, loadingCtrl, alertCtrl, navCtrl) {
        this.file = file;
        this.fileOpener = fileOpener;
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
    /**
    * 	Función que crea un PDF a partir de un HTML y lo muestra.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    MisDocumentosPage.prototype.createAndOpenPDF = function (html, numDoc) {
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
* 	Función que almacena el archivo PDF en el sistema,
*	y a continuación abre el visor para verlo.
*
* 	@param None
*
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None
*/
    MisDocumentosPage.prototype.openPdf = function (base64, numDoc) {
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
* 	Función que convierte a Blob una cadena en Base64
*
* 	@param None
*
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None
*/
    MisDocumentosPage.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
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
    MisDocumentosPage.prototype.openPage = function (page, tipo) {
        if (tipo == "page") {
            if (page == "Presupuestos")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */]);
            else if (page == "Contables")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */]);
            else if (page == "Domiciliaciones")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */]);
            else if (page == "chat")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */]);
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
            selector: 'page-mis-documentos',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mis-documentos/mis-documentos.html"*/'<div class="back"> \n	<ion-header no-border>\n  		<ion-navbar class="navWhite">\n    		<ion-title>Ferrus & Bratos</ion-title>\n\n    		<ion-buttons right>\n	    		<button ion-button (click)="openPage(\'chat\',\'page\')">\n	      			<ion-icon name="fb-chat"></ion-icon>\n	    		</button>\n    		</ion-buttons>\n\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="margin-bottom:1rem;color:white;font-weight:bold;">Presupuestos</h1> \n\n	<ion-slides pager style="" slidesPerView="1.3" spaceBetween="18" centeredSlides="true" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards" (click)="createAndOpenPDF(card.html, card.NumPre)">\n	    	<!-- <ion-row> -->\n	    		<!-- <ion-col col-3 style="background-color: hsla(0, 0%, 100%, 0.3); height: 18rem;    border-radius: 6px 0 0 6px;"> -->\n	    			<!-- <ion-row style="position: fixed; top: 10%; color: white;"> -->\n	    				<!-- <ion-row style="width: 83%;"><ion-col style="font-size: 4rem;    margin: -15% 0px 0 -15%;font-weight: bold;">{{card.dia}}</ion-col></ion-row> -->\n	    				<!-- <ion-row style="width: 83%;margin-top: -1rem;"><ion-col style="    font-size: 2.35rem;    margin: -10% 0% 0% -15%;">{{card.mes}}</ion-col></ion-row> -->\n	    			<!-- </ion-row> -->\n	    			<!-- <ion-row style="position: fixed; bottom: 5%; color: white;    width: 16%;"> -->\n	    				<!-- <ion-col>{{card.ano}}</ion-col> -->\n	    			<!-- </ion-row> -->\n	    		<!-- </ion-col> -->\n	    		<!-- <ion-col col-9 style="background-color: hsla(0, 0%, 100%, 0.2); height: 18rem;    border-radius: 0 6px 6px 0;"> -->\n	    			<!-- <ion-row style="margin-top: -4%;"> -->\n	    				<!-- <ion-col text-wrap class="tratamiento">{{card.Titulo}}</ion-col> -->\n	    			<!-- </ion-row> -->\n	    			<!-- <ion-row style="position: fixed; bottom: 3%; color: white; width: 52%;">	    				 -->\n	    				<!-- <ion-col col-12 class="doctor" style="margin-top: 5%;">Importe: {{card.Total}}€</ion-col> -->\n	    			<!-- </ion-row> -->\n	    		<!-- </ion-col> -->\n	    	<!-- </ion-row> -->\n			<div class="cardCita">\n				<div class="cardCita__left">\n					<div class="cardCita__date">\n						<div class="cardCita__day">\n							{{card.dia}}\n						</div>\n						<div class="cardCita__month">\n							{{card.mes}}\n						</div>\n					</div>\n					<div class="cardCita__hour">\n						{{card.ano}}\n					</div>\n				</div>\n				<div class="cardCita__right">\n					<div class="cardCita__tto tratamiento">\n						{{card.Titulo}}\n					</div>\n					<div class="cardCita__dr">\n						<div class="cardCita__drname">\n							{{card.formaPago}}\n						</div>\n					</div>\n					<div class="cardCita__dr">\n						<div class="cardCita__drname">\n							Importe: {{card.Total}}€\n						</div>\n					</div>\n				</div>\n			</div>\n	  	</ion-slide>\n	</ion-slides>\n</div>\n\n<!-- Gradiente -->\n<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n<!-- Fin Gradiente -->\n\n<div class="menu">\n	<ion-row>\n		<h1 col-9 style="padding:0px;margin-bottom: 2rem;margin-top:0;font-weight: bold;">Mis documentos</h1>\n	</ion-row>\n	<ion-row class="square" >\n			<div *ngFor="let c of cardsMenu; let i=index" style="width:100%;">\n				<ion-row *ngIf="i == 0">\n					<div *ngFor="let c of cardsMenu| slice:0:1 ; let j=index" col-12>\n						<fb-button-icon *ngIf="j<1" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n				<ion-row *ngIf="i == 1">\n					<div *ngFor="let c of cardsMenu | slice:1; let j=index" col-6>\n						<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n					</div>\n				</ion-row>\n			</div>			\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mis-documentos/mis-documentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], MisDocumentosPage);
    return MisDocumentosPage;
}());

//# sourceMappingURL=mis-documentos.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisCitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_recall_recall__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(20);
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
        else if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_recall_recall__["a" /* RecallPage */]);
    };
    MisCitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mis-citas',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mis-citas/mis-citas.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Mis Citas</ion-title>\n	  <ion-buttons right>\n		<button ion-button (click)="openPage(\'chat\')">\n			<ion-icon name="fb-chat"></ion-icon>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" >\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n\n	<!-- Gradiente -->\n  	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient4" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<ion-list style="padding: 0rem 2rem 0rem 2rem;margin: -15px 0 16px !important;">\n		<ion-card detail-none (click)="openPage(\'citas\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="url(#fb-shadow-gradient4)" stroke="none"> <path d="M16.9 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.3h-4.2v-4.2h4.2v4.2zm0 0M27.3 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.3H22v-4.2h4.2v4.2zm0 0M37.7 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.3h-4.2v-4.2h4.2v4.2zm0 0M41.8 30.4H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2v-4.2h4.2v4.2zm0 0M27.3 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22v-4.2h4.2v4.2zm0 0M37.7 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2v-4.2h4.2v4.2zm0 0M41.8 40.8H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2V45h4.2v4.1zm0 0M27.3 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22V45h4.2v4.1zm0 0"/><defs><path id="SVGID_1_" d="M3.4 1.4h57.2v61.3H3.4z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path class="st0" d="M37.7 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2V45h4.2v4.1zm0 0"/><path class="st0" d="M55.3 43.3V6.6c0-.6-.5-1-1-1h-5.2v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1s-3.2 1.3-3.2 3v1H4.4c-.6 0-1 .5-1 1v49.8c0 .6.5 1 1 1h36.7c2.9 5 9.2 6.7 14.2 3.8 5-2.9 6.7-9.2 3.8-14.2-.9-1.4-2.2-2.7-3.8-3.6zM44.9 4.5c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zM5.5 7.6h4.2v1c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1v-1H18v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h4.2v8.3H5.5V7.6zm0 47.8V18h47.8v24.4c-5.5-1.7-11.3 1.3-13 6.8-.6 2-.6 4.2 0 6.2H5.5zm44.6 5.2c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c4.6 0 8.3 3.7 8.3 8.3 0 4.5-3.7 8.2-8.3 8.3zm0 0"/><path d="M53.6 48.3l-4.5 3.6-2.5-2.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1 .4 1.4.1l5.2-4.2c.4-.4.5-1 .2-1.5-.3-.4-.9-.4-1.4-.1zm0 0"></path> </g> </svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title" >Citas</div>\n					<div class="card-subtitle">Revisa tus citas pasadas y futuras</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    margin: 4.5rem 0 0 .6rem;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n		<ion-card detail-none (click)="openPage(\'pedirCita\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="url(#fb-shadow-gradient4)" stroke="none"> <path d="M16.9 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.3h-4.2v-4.2h4.2v4.2zm0 0M27.3 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.3H22v-4.2h4.2v4.2zm0 0M37.7 22.1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.3h-4.2v-4.2h4.2v4.2zm0 0M41.8 30.4H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2v-4.2h4.2v4.2zm0 0M27.3 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22v-4.2h4.2v4.2zm0 0M37.7 32.5h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2v-4.2h4.2v4.2zm0 0M41.8 40.8H48c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.4 1 1 1zm1.1-6.2H47v4.2h-4.2v-4.2zm0 0M16.9 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1 6.2h-4.2V45h4.2v4.1zm0 0M27.3 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.4-1-1-1zm-1.1 6.2H22V45h4.2v4.1zm0 0"/><defs><path id="SVGID_1_" d="M3.4 1.4h57.2v61.3H3.4z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path class="st0" d="M37.7 42.9h-6.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h6.2c.6 0 1-.5 1-1v-6.2c0-.5-.5-1-1-1zm-1.1 6.2h-4.2V45h4.2v4.1zm0 0"/><path class="st0" d="M55.3 43.3V6.6c0-.6-.5-1-1-1h-5.2v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1h-2.1v-1c0-1.7-1.4-3.1-3.1-3.1s-3.2 1.3-3.2 3v1H4.4c-.6 0-1 .5-1 1v49.8c0 .6.5 1 1 1h36.7c2.9 5 9.2 6.7 14.2 3.8 5-2.9 6.7-9.2 3.8-14.2-.9-1.4-2.2-2.7-3.8-3.6zM44.9 4.5c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1 .6 0 1 .5 1 1v4.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V4.5zm-8.3 0c0-.6.5-1 1-1s1 .5 1 1v4.2c0 .6-.5 1-1 1s-1-.5-1-1V4.5zM5.5 7.6h4.2v1c0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1v-1H18v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h2.1v1c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1h4.2v8.3H5.5V7.6zm0 47.8V18h47.8v24.4c-5.5-1.7-11.3 1.3-13 6.8-.6 2-.6 4.2 0 6.2H5.5zm44.6 5.2c-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c4.6 0 8.3 3.7 8.3 8.3 0 4.5-3.7 8.2-8.3 8.3zm0 0"/><path d="M53.6 48.3l-4.5 3.6-2.5-2.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l3.1 3.1c.4.4 1 .4 1.4.1l5.2-4.2c.4-.4.5-1 .2-1.5-.3-.4-.9-.4-1.4-.1zm0 0"></path> </g> </svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title">Pedir cita</div>\n					<div class="card-subtitle">Aqui podrás pedir tu cita de higiene</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg  xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    height: 5rem;    margin: 3.5rem 0;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n		<ion-card detail-none (click)="openPage(\'recall\')" style="height:12rem;margin: 15px 0px 15px 0px;width:100%;box-shadow: 0 3px 20px rgba(0,0,0,.12) !important;">\n			<div style="width: 100%;    height: 100%;">\n				<div style="width:25%;height:100%;float:left;">\n					<svg style="    height: 5rem;    margin: 3.5rem 0;"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">\n						<defs>\n							<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n						</defs>\n						<clipPath id="b">\n							<use xlink:href="#a" overflow="visible"/>\n						</clipPath>\n						<g fill="url(#fb-shadow-gradient4)" stroke="none">\n							<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/>\n						</g>\n					</svg>\n				</div>\n				<div style="width:50%;height:100%;float:left;">\n					<div class="card-title">Mis higienes</div>\n					<div class="card-subtitle">Aqui podrás consultar tus higienes</div>\n				</div>\n				<div style="width:25%;height:100%;float:left;">\n					<span style="    border-radius: 50%;      position: absolute;    width: 10px;    height: 10px;"> \n						<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 42 42" style="    margin: 4.5rem 0 0 .6rem;">\n							<path fill="#ed7aad" stroke="#fff" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>\n						</svg>\n					</span>\n				</div>\n			</div>\n		</ion-card>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/mis-citas/mis-citas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], MisCitasPage);
    return MisCitasPage;
}());

//# sourceMappingURL=mis-citas.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SugerenciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(65);
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
        this.bEnviar = { name: 'Enviar', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
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
            selector: 'page-sugerencias',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/sugerencias/sugerencias.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sugerencias</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<ion-list>\n		<ion-item>\n			<ion-label stacked>Escribe tu nombre</ion-label>\n			<ion-input [(ngModel)]="data.nombre" placeholder="Opcional"></ion-input><ion-icon name="fb-user" item-right></ion-icon>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Escribe tu email</ion-label>\n			<ion-input [(ngModel)]="data.email" placeholder="Opcional"></ion-input><ion-icon name="fb-mail" item-right></ion-icon>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Escribe tu teléfono</ion-label>\n			<ion-input [(ngModel)]="data.movil" placeholder="Opcional"></ion-input><ion-icon name="fb-telephone" item-right></ion-icon>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Ayudanos a mejorar, gracias!</ion-label>\n			<ion-textarea [(ngModel)]="data.texto" rows="5" placeholder="Escribe tu sugerencia. Por favor, cuéntanos tu propuesta o recomendación."></ion-textarea>\n		</ion-item>\n		<ion-item>\n			<fb-button [name]="bEnviar" [class]="bEnviar.class" (click)="setSugerencia()"></fb-button>\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/sugerencias/sugerencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], SugerenciasPage);
    return SugerenciasPage;
}());

//# sourceMappingURL=sugerencias.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_change_password_change_password__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_tab_login_tab__ = __webpack_require__(143);
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
    function LoginPage(toastCtrl, events, nav, restProvider, alertCtrl, loadingCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.nav = nav;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' }; // Array con los campos del formulario
        this.bCrearCuenta = { name: 'Crear cuenta', svg: '', openPage: 'Registro', class: 'active login', tipo: 'page', gradiente: '' };
        this.bIniciarSesion = { name: 'Iniciar sesión', svg: '', openPage: 'Login', class: 'login', tipo: 'page', gradiente: '' };
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
            if (expires > timeNow) {
                _this.events.publish("user:logged");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
        });
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
    LoginPage.prototype.openPage = function (page, tipo) {
        if (tipo === "page") {
            if (page == "Login")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_tab_login_tab__["a" /* LoginTabPage */], { pageDefault: "0" });
            else if (page == "Registro")
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_tab_login_tab__["a" /* LoginTabPage */], { pageDefault: "1" });
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
    LoginPage.prototype.presentToast = function (txt) {
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login/login.html"*/'<ion-content padding>\n	<div>\n		<h1>Bienvenido a <span>F&B</span></h1>\n	</div>\n	<div style="    text-align: center;">\n		<img src="assets/imgs/logo.png" style="width: 75%;">\n	</div>\n</ion-content>\n<ion-footer>\n	<div class="buttons">\n		<fb-button [name]="bCrearCuenta" [class]="bCrearCuenta.class" (click)="openPage(bCrearCuenta.openPage,bCrearCuenta.tipo)"> </fb-button>\n		<p class="line"><span>o</span></p>\n		<fb-button [name]="bIniciarSesion" [class]="bIniciarSesion.class" (click)="openPage(bIniciarSesion.openPage,bIniciarSesion.tipo)"> </fb-button>\n		<p>\n			<a href="https://www.clinicaferrusbratos.com/aviso-legal/">Terminos de servicio</a>\n		</p>\n	</div>\n</ion-footer>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(97);
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
    function ChatPage(callNumber, file, fileOpener, photoViewer, actionSheetCtrl, plt, alertCtrl, restProvider, loadingCtrl, _CAMERA, element, vb, eventsCtrl, navCtrl, navParams) {
        var _this = this;
        this.callNumber = callNumber;
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
        this.checkFileExistence("fyb.jpeg");
        this.data.type = 'message';
        this.data.nickname = this.nickname;
        if (this.navParams.get("message")) {
            this.showError("¡Atención!", this.navParams.get("message"));
        }
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
                }
                else if (timeNow.getDay() == 5) {
                    if (timeNow.getHours() <= 9 || timeNow.getHours() >= 20) {
                        if (timeNow.getHours() == 9 && timeNow.getMinutes() >= 0) {
                            mostrarError = false;
                        }
                        else if (timeNow.getHours() == 20 && timeNow.getMinutes() <= 0) {
                            mostrarError = false;
                        }
                        else {
                            mostrarError = true;
                        }
                    }
                }
                else {
                    if (timeNow.getHours() <= 9 || timeNow.getHours() >= 21) {
                        if (timeNow.getHours() == 9 && timeNow.getMinutes() >= 0) {
                            mostrarError = false;
                        }
                        else if (timeNow.getHours() == 21 && timeNow.getMinutes() <= 0) {
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
    /**
    * 	Función que abre la aplicación de llamadas para
    *	efectuar una llamada a la clínica
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    ChatPage.prototype.callClinica = function () {
        this.callNumber.callNumber("+34917681812", true).catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ChatPage.prototype.checkFileExistence = function (fileName) {
        var _this = this;
        return this.file.checkFile(this.file.externalRootDirectory, fileName).then(function () {
            _this.file.readAsDataURL(_this.file.externalRootDirectory, fileName).then(function (result) {
                _this.menuData = result;
            }, function (err) {
                //console.log(err);
            });
        }, function (error) {
            //console.log(error);
        });
    };
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
        //console.log("ENTRA EN CHAT");
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
        //console.log("SALE EN CHAT");
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
        if (this.loadingPresented) {
            this.loadingPresented = false;
            this.loading.dismiss();
        }
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
            selector: 'page-chat',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/chat/chat.html"*/'	<ion-header no-border>\n		<ion-navbar>\n    		<ion-title>Ferrus & Bratos</ion-title>\n    		<ion-buttons right>\n	    		<button ion-button (click)="callClinica()">\n	      			<ion-icon name="fb-telephone"></ion-icon>\n	    		</button>\n    		</ion-buttons>\n  		</ion-navbar>\n	</ion-header>\n<ion-content padding class="bg">\n	<div class="page-chat" style="height: 100vh;display: flex; align-items: flex-end; flex-direction: column-reverse;">\n        <div class="message-wrap" style="width:100%; margin: -25rem 0;">\n            <div class="message" *ngFor="let msg of chats" [class.left]=" msg.user !== nickname " [class.right]=" msg.user === nickname ">\n                <div *ngIf="msg.user === nickname">\n                    <img class="user-img" onerror="this.src=\'assets/imgs/person.png\';" src="{{menuData}}"/>\n                </div>\n                <div *ngIf="msg.user !== nickname">\n                    <img class="user-img" onerror="this.src=\'assets/imgs/person.png\';" src="http://cfb2.ddns.net:4231/personal/{{msg.image}}.jpg"/>\n                </div>\n                <div class="msg-detail">\n                    <div class="msg-content">\n                        <p class="line-breaker ">\n                            {{msg.message}}\n                        </p>\n                        <div class="msg-info">\n                            <p>\n                                {{msg.sendDate | date:\'dd/MM/yyyy HH:mm\'}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>            \n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n<form class="conversation-compose">\n    <div class="emoji" #chatBA >\n        <svg (click)="switchEmojiPicker()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="smiley" x="3147" y="3209">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" fill="#7d8489"></path>\n        </svg>\n    </div>\n    <input #chat_input class="input-msg" [(ngModel)]="data.message" name="message" (keyup.enter)="sendMessage()" (focusin)="onFocus()" placeholder="Escribe un mensaje">\n    <div class="photo" #chatBD (click)="openChooseImage()">\n        <i class="fas fa-camera"></i>\n    </div>\n        <button class="send" #chatBC (click)="sendMessage()">\n            <div class="circle">\n                <i class="far fa-arrow-alt-circle-right"></i>\n            </div>\n    </button>\n</form>\n<emoji-picker ngDefaultControl [(ngModel)]="data.message"></emoji-picker>\n</ion-footer>\n<!--\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n	<div class="input-wrap">\n		<button ion-button #chatBA clear icon-only item-right (click)="switchEmojiPicker()">\n			<ion-icon name="md-happy"></ion-icon>\n		</button>\n		<textarea #chat_input style="max-height: 3.5rem;" placeholder="Escribe un mensaje" [(ngModel)]="data.message" (keyup.enter)="sendMessage()"	(focusin)="onFocus()">	</textarea>\n		<button ion-button #chatBD clear icon-only item-right (click)="openChooseImage()">\n			<ion-icon name="ios-camera" ios="ios-camera" md="md-camera"></ion-icon>\n		</button>\n		<button ion-button #chatBC clear icon-only item-right (click)="sendMessage()">\n			<ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n		</button>	\n	</div>\n	<emoji-picker  ngDefaultControl [(ngModel)]="data.message"></emoji-picker>\n</ion-footer>-->'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
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
        //console.log("VIBRA - " + firstOpen);
        vb.vibrate(500);
    }
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_olvido_login_olvido__ = __webpack_require__(229);
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
 * Generated class for the LoginInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginInputPage = /** @class */ (function () {
    function LoginInputPage(app, events, nav, navParams, restProvider, alertCtrl, loadingCtrl) {
        this.app = app;
        this.events = events;
        this.nav = nav;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tituloSubtitulo = { titulo: "Inicia sesión", subtitulo: "en tu cuenta" };
        this.bIniciar = { name: 'Iniciar sesión', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.registerCredentials = { email: '', password: '' }; // Array con los campos del formulario
    }
    LoginInputPage.prototype.goToOlvido = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_login_olvido_login_olvido__["a" /* LoginOlvidoPage */]);
    };
    LoginInputPage.prototype.goTab = function (n) {
        this.nav.parent.select(n);
    };
    /**
    * 	Función que comprueba si el usuario y la contraseña
    *	son correctos.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    LoginInputPage.prototype.login = function () {
        var _this = this;
        var user = this.registerCredentials.email;
        var pass = this.registerCredentials.password;
        if (user == '' || pass == '')
            return;
        this.showLoading();
        this.restProvider.login(user, pass).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.loading.dismiss();
                window.localStorage.setItem("idPac", data['idPac']);
                window.localStorage.setItem("token", data['token']);
                window.localStorage.setItem("expires", data['expires']);
                _this.events.publish("user:logged");
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
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
    LoginInputPage.prototype.showLoading = function () {
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
    LoginInputPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-input',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-input/login-input.html"*/'<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<br />\n	<ion-list>\n		<ion-item>\n			<ion-label stacked>DNI</ion-label>\n			<ion-input type="text" [(ngModel)]="registerCredentials.email"></ion-input><ion-icon name="fb-user" item-right></ion-icon>\n		</ion-item>		\n		<ion-item>\n			<ion-label stacked>Contraseña</ion-label>\n			<ion-input type="password" [(ngModel)]="registerCredentials.password"></ion-input><ion-icon name="fb-password" item-right></ion-icon>\n		</ion-item>	\n	</ion-list>\n	<p class="olvido" (click)="goToOlvido()">¿Olvidaste tu contraseña?</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bIniciar" [class]="bIniciar.class" (click)="login()"></fb-button>\n	</div>\n	<p style="text-align: center;">\n		Todavía no tienes cuenta.<br/>\n		<a (click)="goTab(1)">Registrate</a>\n	</p>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-input/login-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LoginInputPage);
    return LoginInputPage;
}());

//# sourceMappingURL=login-input.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginOlvidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_recibir_pin_login_recibir_pin__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginOlvidoPage = /** @class */ (function () {
    function LoginOlvidoPage(navCtrl, navParams, restProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tituloSubtitulo = { titulo: "Recuperar contraseña", subtitulo: "introduce tu DNI" };
        this.bCrear = { name: 'Siguiente', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.registerCredentials = { dni: '' }; // Array con los campos del formulario
    }
    LoginOlvidoPage.prototype.siguiente = function () {
        var _this = this;
        var dni = this.registerCredentials.dni;
        if (dni == '') {
            alert("Debes rellenar el campo DNI");
            return;
        }
        this.showLoading();
        this.restProvider.checkDNI(dni).then(function (data) {
            if (typeof data != "undefined" && (data['status'] == 1 || data['status'] == 3)) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */], { dni: dni });
                _this.loading.dismiss();
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
    LoginOlvidoPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false,
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
    LoginOlvidoPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginOlvidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-olvido',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-olvido/login-olvido.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recuperar contraseña</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<p style="text-align: left;">Introduce tu DNI y nos pondremos en contacto contigo para recuperar tu contraseña.</p>\n	<br />\n	<ion-list>\n		<ion-item>\n			<ion-label stacked>DNI</ion-label>\n			<ion-input type="text" [(ngModel)]="registerCredentials.dni"></ion-input><ion-icon name="fb-dni" item-right></ion-icon>\n		</ion-item>		\n	</ion-list>\n	<p class="olvido">DNI con letra incluida</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bCrear" [class]="bCrear.class" (click)="siguiente()"></fb-button>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-olvido/login-olvido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LoginOlvidoPage);
    return LoginOlvidoPage;
}());

//# sourceMappingURL=login-olvido.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginReenviarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_recibir_pin_login_recibir_pin__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Para abrir la aplicación de llamadas nativa.

var LoginReenviarPage = /** @class */ (function () {
    function LoginReenviarPage(callNumber, navCtrl, nav) {
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.tituloSubtitulo = { titulo: "Reenviar PIN", subtitulo: "que no he recibido" };
        this.data = Array();
        this.bReenviar = { name: 'Volver a enviar', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.data = this.nav.get("data");
    }
    LoginReenviarPage.prototype.reenviar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */], { dni: this.data["dni"] });
    };
    /**
    *   Función que abre la aplicación de llamadas para
    * efectuar una llamada a la clínica
    *
    *   @author Jesús Río <jesusriobarrilero@gmail.com>
    *
    */
    LoginReenviarPage.prototype.callClinica = function () {
        this.callNumber.callNumber("+34917681812", true).catch(function (err) { return console.log('Error launching dialer', err); });
    };
    LoginReenviarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-reenviar',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-reenviar/login-reenviar.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reenviar PIN</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<p>Te hemos enviado por {{ data.tipo }}: <span>{{ data.direccion }}</span></p>\n	<p>Si no reconoces este número o no es tu teléfono actual, llamanos al <span (click)="callClinica()">91 768 18 12</span> para que podamos gestionarle el alta en la aplicación</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bReenviar" [class]="bReenviar.class" (click)="reenviar()"></fb-button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-reenviar/login-reenviar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], LoginReenviarPage);
    return LoginReenviarPage;
}());

//# sourceMappingURL=login-reenviar.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_recibir_pin_login_recibir_pin__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_error_pin_login_error_pin__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_ya_registrado_login_ya_registrado__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(317);
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
 * Generated class for the LoginRegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginRegistroPage = /** @class */ (function () {
    function LoginRegistroPage(androidPermissions, app, navCtrl, navParams, restProvider, alertCtrl, loadingCtrl) {
        this.androidPermissions = androidPermissions;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tituloSubtitulo = { titulo: "Crea tu cuenta", subtitulo: "introduce tu DNI" };
        this.bCrear = { name: 'Siguiente', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.registerCredentials = { email: '', password: '' }; // Array con los campos del formulario
    }
    LoginRegistroPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    LoginRegistroPage.prototype.siguiente = function () {
        var _this = this;
        var dni = this.registerCredentials.email;
        if (dni == '') {
            alert("Debes rellenar el campo DNI");
            return;
        }
        this.showLoading();
        this.restProvider.checkDNI(dni).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */], { dni: dni });
                _this.loading.dismiss();
            }
            else if (typeof data != "undefined" && data['status'] == 2) {
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_login_error_pin_login_error_pin__["a" /* LoginErrorPinPage */]);
                _this.loading.dismiss();
            }
            else if (typeof data != "undefined" && data['status'] == 3) {
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_login_ya_registrado_login_ya_registrado__["a" /* LoginYaRegistradoPage */], { dni: dni });
                _this.loading.dismiss();
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
    LoginRegistroPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: false,
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
    LoginRegistroPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-registro',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-registro/login-registro.html"*/'<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<br />\n	<ion-list>\n		<ion-item>\n			<ion-label stacked>DNI</ion-label>\n			<ion-input type="text" [(ngModel)]="registerCredentials.email"></ion-input><ion-icon name="fb-dni" item-right></ion-icon>\n		</ion-item>		\n	</ion-list>\n	<p class="olvido">DNI con letra incluida</p>\n	<br />\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bCrear" [class]="bCrear.class" (click)="siguiente()"></fb-button>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-registro/login-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LoginRegistroPage);
    return LoginRegistroPage;
}());

//# sourceMappingURL=login-registro.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaElegirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_preferencias_pedir_cita_preferencias__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_reserva_pedir_cita_reserva__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
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

var PedirCitaElegirPage = /** @class */ (function () {
    function PedirCitaElegirPage(domSanitizer, alertCtrl, events, loadingCtrl, restProvider, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bSiguiente = { name: 'Siguiente', svg: '', openPage: '', class: 'active login', tipo: '', gradiente: '' };
        this.bAnterior = { name: 'Anterior', svg: '', openPage: '', class: 'login', tipo: '', gradiente: '' };
        this.tituloSubtitulo = { titulo: "Elige tu cita", subtitulo: "de la cita" };
        this.citasBuscador = [];
        this.showLoading();
        this.searchCita(this.navParams.get('dia'), this.navParams.get('hora'), this.navParams.get('dr'), this.navParams.get('tto'));
        this.events.publish("user:logged");
    }
    PedirCitaElegirPage.prototype.anterior = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_preferencias_pedir_cita_preferencias__["a" /* PedirCitaPreferenciasPage */], {
            'tto': this.navParams.get('tto')
        });
    };
    /**
* 	Función que obtiene todas las citas disponibles
* 	en la agenda ( conectada con el buscador )
*
* 	@param None
*
* 	@author Jesús Río <jesusriobarrilero@gmail.com>
* 	@return None
*/
    PedirCitaElegirPage.prototype.searchCita = function (dia, hora, dr, tto) {
        var _this = this;
        this.restProvider.searchCita(dia, hora, dr, tto).then(function (data) {
            //console.log(data);
            if (typeof data != "undefined" && data['status'] == 1) {
                if (JSON.parse(data['data']).length > 0) {
                    _this.citasBuscador = JSON.parse(data['data']);
                }
                else {
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
    * 	Función que envía un E-mail a recepción para que estas
    *	inserten la cita desde el buscador.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    PedirCitaElegirPage.prototype.solicitarCita = function (item) {
        var _this = this;
        this.showLoading('Solicitando cita ...');
        this.restProvider.solicitarCita(item.fecha, item.hora, item.usuario, item.tratamiento).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.loading.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_reserva_pedir_cita_reserva__["a" /* PedirCitaReservaPage */], {
                    'item': item
                });
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
    PedirCitaElegirPage.prototype.showLoading = function (cont) {
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
    PedirCitaElegirPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PedirCitaElegirPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */]);
    };
    PedirCitaElegirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita-elegir',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-elegir/pedir-cita-elegir.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Elige tu cita</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p>Elige la cita que desees, y pulsa el botón reservar.</p> \n\n   \n    <ion-slides slidesPerView="1.3" spaceBetween="18" centeredSlides="true">\n    <ion-slide *ngFor="let item of citasBuscador">\n      <div class="fb-card -vcita -gradient">\n          <div class="card_row">\n              <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n                  <div class="card_subtitle -white" style="font-size: 1.4rem;">\n                      {{item.diaSemana}}\n                  </div>\n                  <div class="card_time -white">\n                      {{item.dia}}\n                      <span>\n                      {{item.mes}}\n                      </span>\n                  </div>\n                  <div class="card_subtitle -white" style="font-size:1rem;">\n                      {{item.ano}}\n                  </div>\n              </div>\n              <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n                  <div style="display:flex;flex-direction:column;align-items: flex-end;">\n                      <div class="card_time -white">\n                          {{item.hora}}\n                          <span style="display:inline;">\n                              H\n                          </span>\n                      </div>\n                      <div class="card_subtitle -white">\n                          Duración:\n                          <span>\n                              {{item.Duracion}}\'\n                          </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class="card_content -bg-white">\n              <div class="card_row">\n                  <div>\n                      <div class="card_label">\n                          Tratamiento\n                      </div>\n                      <div class="card_title">\n                         {{item.tratamiento}}\n                      </div>\n                  </div>\n              </div>\n              <div class="card_separator">\n              </div>\n              <div class="card_row">\n                  <div class="left">\n                      <div class="card_label">\n                          Profesional\n                      </div>\n                      <div class="card_container">\n                          <div class="avatar">\n                              <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n                          </div>\n                          <div class="card_title">\n                             {{item.usuario}}\n                          </div>\n                      </div>\n                  </div>\n                  <div class="right">\n                      <div class="card_label">\n                          Estado de la cita\n                      </div>\n                      <div class="card_estado">\n                          <a class="fb-btn -pill -confirmar" (click)="solicitarCita(item);">\n                            Reservar    \n                          </a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n    <p style=" text-align: center; margin: 2rem 0 0rem 0; font-size: 1rem;">3 de 4</p>\n\n    <ion-row style="max-height: 9%;    display: flex;    width: 50%;    margin: 0 auto;">\n		<ion-col><fb-button [name]="bAnterior" [class]="bAnterior.class" (click)="anterior()" ></fb-button></ion-col>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-elegir/pedir-cita-elegir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PedirCitaElegirPage);
    return PedirCitaElegirPage;
}());

//# sourceMappingURL=pedir-cita-elegir.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(21);
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

var PedirCitaReservaPage = /** @class */ (function () {
    function PedirCitaReservaPage(navCtrl, navParams, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.tituloSubtitulo = { titulo: "Cita reservada", subtitulo: "" };
        this.citasBuscador = [];
        this.bInicio = { name: 'Volver a inicio', svg: '', openPage: '', class: 'active login', tipo: '', gradiente: '' };
        this.citasBuscador.push(this.navParams.get('item'));
    }
    PedirCitaReservaPage.prototype.inicio = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    PedirCitaReservaPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chat_chat__["a" /* ChatPage */]);
    };
    PedirCitaReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita-reserva',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-reserva/pedir-cita-reserva.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Cita Reservada</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n	<div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p>Contrary to popular belief/opinion. Del Lonncontrary to popula</p>\n\n    <ion-slides spaceBetween="20" slidesPerView="1.3" centeredSlides="true" centerInsufficientSlides="true">\n	    <ion-slide *ngFor="let item of citasBuscador">\n	      <div class="fb-card -vcita -gradient">\n	          <div class="card_row">\n	              <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n	                  <div class="card_subtitle -white" style="font-size: 1.4rem;">\n	                      {{item.diaSemana}}\n	                  </div>\n	                  <div class="card_time -white">\n	                      {{item.dia}}\n	                      <span>\n	                      {{item.mes}}\n	                      </span>\n	                  </div>\n	                  <div class="card_subtitle -white" style="font-size:1rem;">\n	                      {{item.ano}}\n	                  </div>\n	              </div>\n	              <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n	                  <div style="display:flex;flex-direction:column;align-items: flex-end;">\n	                      <div class="card_time -white">\n	                          {{item.hora}}\n	                          <span style="display:inline;">\n	                              H\n	                          </span>\n	                      </div>\n	                      <div class="card_subtitle -white">\n	                          Duración:\n	                          <span>\n	                              {{item.Duracion}}\'\n	                          </span>\n	                      </div>\n	                  </div>\n	              </div>\n	          </div>\n	          <div class="card_content -bg-white">\n	              <div class="card_row">\n	                  <div>\n	                      <div class="card_label">\n	                          Tratamiento\n	                      </div>\n	                      <div class="card_title">\n	                         {{item.tratamiento}}\n	                      </div>\n	                  </div>\n	              </div>\n	              <div class="card_separator">\n	              </div>\n	              <div class="card_row">\n	                  <div class="left">\n	                      <div class="card_label">\n	                          Profesional\n	                      </div>\n	                      <div class="card_container">\n	                          <div class="avatar">\n	                              <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n	                          </div>\n	                          <div class="card_title">\n	                             {{item.usuario}}\n	                          </div>\n	                      </div>\n	                  </div>\n	                  <div class="right">\n	                      <div class="card_label">\n	                          Estado de la cita\n	                      </div>\n	                      <div class="card_estado">\n	                          Reservada\n	                      </div>\n	                  </div>\n	              </div>\n	          </div>\n	      </div>\n	    </ion-slide>\n 	</ion-slides>\n\n 	<p style=" text-align: center; margin: 2rem 0 0; font-size: 1rem;">4 de 4</p>\n\n	<ion-row style="max-height: 9%;    display: flex;    width: 50%;    margin: 0 auto;">\n		<ion-col><fb-button [name]="bInicio" [class]="bInicio.class" (click)="inicio()" ></fb-button></ion-col>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita-reserva/pedir-cita-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PedirCitaReservaPage);
    return PedirCitaReservaPage;
}());

//# sourceMappingURL=pedir-cita-reserva.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecallPasadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(21);
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
            selector: 'page-recall-pasadas',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/recall-pasadas/recall-pasadas.html"*/'<ion-content>\n	<ion-slides slidesPerView="1.3" spaceBetween="18" centeredSlides="true" *ngIf="infoR.fechaPasada == true">\n		<ion-slide *ngFor="let item of recall">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white" style="font-size:3.2rem;">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<div padding *ngIf="infoR.fechaPasada != true">\n		<fb-titulo-subtitulo [info]="infoR" ></fb-titulo-subtitulo>\n		<p>{{infoR.texto}}</p>\n		<br />\n		<p style=" max-height: 10rem;">\n			<fb-button-icon [name]="botonPedirCita" [class]="botonPedirCita.class" (click)="openPage(botonPedirCita.openPage,botonPedirCita.tipo)"> </fb-button-icon>\n		</p>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/recall-pasadas/recall-pasadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], RecallPasadasPage);
    return RecallPasadasPage;
}());

//# sourceMappingURL=recall-pasadas.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsejosDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
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
        this.tituloSubtitulo = { titulo: "", subtitulo: "" };
    }
    ConsejosDetailPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
        this.domSanitizer.bypassSecurityTrustUrl(this.data['Img']);
        this.tituloSubtitulo = { titulo: this.data['Doctor'], subtitulo: this.data['Tratamiento'] };
    };
    ConsejosDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consejos-detail',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consejos-detail/consejos-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Consejo de {{data.Doctor}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<ion-row>\n		<ion-col col-8 style="padding-top:4rem;">\n			<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n		</ion-col>\n		<ion-col col-4>\n			<img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(data.Img)" style="width:80%;border-radius:50%;"/>\n		</ion-col>\n	</ion-row>\n\n	<p><b>{{ data.Fecha }}</b></p>\n\n	<p [innerHTML]="domSanitizer.bypassSecurityTrustHtml(data.Texto)"></p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consejos-detail/consejos-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ConsejosDetailPage);
    return ConsejosDetailPage;
}());

//# sourceMappingURL=consejos-detail.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanEconomicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_plan_economico_detail_plan_economico_detail__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(20);
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
        if (info == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
        else
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
            selector: 'page-plan-economico',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/plan-economico/plan-economico.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Mis Domiciliaciones</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n    <div>\n    	<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n    <div *ngIf="cards?.length > 0; else notCards">\n        <p>A continuación, podrás tener acceso a todas tus domiciliaciones para consultarlas cuando desees.</p>\n    </div>\n    <ng-template #notCards>\n        <p>De momento, no existe ninguna domiciliación asociada a tu tratamiento.\n        </p>\n    </ng-template>\n	<div *ngFor="let card of cards">\n        <div class="fb-card -v2" (click)="openPage(card.numplan)">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title">\n                        {{card.numplan}} - {{card.titulo}}\n                    </div>\n                    <div class="card_subtitle">\n                       {{card.cuotas}}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_subtitle">\n                       {{card.fecha}}\n                    </div>\n                </div>\n            </div>\n            <div class="card_separator">\n            </div>\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -price">\n                        {{card.importe}} €\n                    </div>\n                    <div class="card_subtitle">\n                        pendiente: {{card.pendiente}} €\n                    </div>\n                </div>\n                <div class="right">\n                    <a class="fb-btn -rounded -bg-pink">\n                        <svg version="1.1" style="margin-left: 0.3rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\n						<path fill="#fff" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\n						</svg>\n                    </a>\n                </div>\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/plan-economico/plan-economico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], PlanEconomicoPage);
    return PlanEconomicoPage;
}());

//# sourceMappingURL=plan-economico.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanEconomicoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(20);
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
    PlanEconomicoDetailPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */]);
    };
    PlanEconomicoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plan-economico-detail',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/plan-economico-detail/plan-economico-detail.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Mis Domiciliaciones</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	\n	<div>\n     <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p>A continuación, podrás tener acceso a todos tus pagos realizados y pendientes. De esta manera, tendrás la posibilidad de consultar en cualquier momento la información económica sobre tu tratamiento.</p>\n\n    <div class="card_container">\n	    <div class="fb-card -vgraph">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle">\n	                Pagado\n	            </div>\n	            <div class="card_title">\n	                 {{ importes.pagado }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	        	<canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataPagado"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsPagado"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n	    <div class="fb-card -vgraph -bg-pink-light">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle -white">\n	                Pendiente\n	            </div>\n	            <div class="card_title -white">\n	               {{ importes.pendiente }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	            <canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataPendiente"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsPendiente"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n	    <div class="fb-card -vgraph">\n	        <div style="padding:0.5rem;">\n	            <div class="card_subtitle">\n	                Total\n	            </div>\n	            <div class="card_title">\n	                {{ importes.total }}€\n	            </div>\n	        </div>\n	        <div class="card_graph">\n	            <canvas baseChart width="300" height="400"\n                  [datasets]="lineChartDataTotal"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColorsTotal"\n                  [chartType]="lineChartType"></canvas>\n	        </div>\n	    </div>\n    </div>\n\n    <div class="fb-card -v3">\n    	<div *ngFor="let card of cards ; let i=last; let j=index">\n            <div class="card_row">\n                <div class="left">\n                    <div class="card_title -grey-medium">\n                        {{ card.numcuota }}\n                    </div>\n                </div>\n                <div class="center">\n                    <div class="card_title">\n                         {{ card.fecha }}\n                    </div>\n                    <div class="card_subtitle">\n                         {{ card.pagado }}\n                    </div>\n                </div>\n                <div class="right">\n                    <div class="card_title -blue" *ngIf="card.pagado == \'Pagado\'">\n                         {{ card.importe }} €\n                    </div>\n                    <div class="card_title -pink" *ngIf="card.pagado != \'Pagado\'">\n                         {{ card.importe }} €\n                    </div>\n                </div>\n            </div>\n            <div *ngIf="!i" class="card_separator">            	\n            </div>\n        </div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/plan-economico-detail/plan-economico-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], PlanEconomicoDetailPage);
    return PlanEconomicoDetailPage;
}());

//# sourceMappingURL=plan-economico-detail.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_faq_detail_faq_detail__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqPage = /** @class */ (function () {
    function FaqPage(alertCtrl, events, loadingCtrl, restProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tituloSubtitulo = { titulo: "Preguntas frecuentes", subtitulo: "de tratamientos" };
        this.faq = [];
        this.showLoading();
        this.getFaq();
        this.events.publish("user:logged");
    }
    /**
    * 	Función que envia los parámetros a
    *	la página que muestra las preguntas de cada categoria
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    FaqPage.prototype.siguiente = function (f) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_faq_detail_faq_detail__["a" /* FaqDetailPage */], {
            'categoria': f.name
        });
    };
    /**
    * 	Función que obtiene todos las categorias
    * 	de las preguntas frecuentes.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    FaqPage.prototype.getFaq = function () {
        var _this = this;
        this.restProvider.getFaq().then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.faq = data['data'];
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
    FaqPage.prototype.showLoading = function (cont) {
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
    FaqPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: ['OK']
        });
        alert.present();
    };
    FaqPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */]);
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/faq/faq.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Preguntas Frecuentes</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<div style=" margin: 2rem;">\n        <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p style=" margin: 2rem;">A continuación, podrás consultar las preguntas y respuestas más frecuentes acerca de nuestros tratamientos principales.</p>\n\n    <div class="row" id="listadoFaq">\n	    <div *ngFor="let f of faq" col-6 >\n			<fb-button-icon [name]="f" [class]="f.class" (click)="siguiente(f)"> </fb-button-icon>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqDetailPage = /** @class */ (function () {
    function FaqDetailPage(alertCtrl, events, loadingCtrl, restProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tituloSubtitulo = { titulo: "", subtitulo: "" };
        this.faq = [];
        this.tituloSubtitulo.titulo = "Preguntas de " + this.capitalizeFirstLetter(this.navParams.get('categoria').toLowerCase());
        this.showLoading();
        this.getFaqDetail(this.navParams.get('categoria'));
        this.events.publish("user:logged");
    }
    /**
    * 	Función que pone la primera letra en mayuscula
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    FaqDetailPage.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    /**
    * 	Función que abre y cierra los cards
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    FaqDetailPage.prototype.expandItem = function (item) {
        this.faq.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    /**
    * 	Función que obtiene todos las categorias
    * 	de las preguntas frecuentes.
    *
    * 	@param None
    *
    * 	@author Jesús Río <jesusriobarrilero@gmail.com>
    * 	@return None
    */
    FaqDetailPage.prototype.getFaqDetail = function (c) {
        var _this = this;
        this.restProvider.getFaqDetail(c).then(function (data) {
            if (typeof data != "undefined" && data['status'] == 1) {
                _this.faq = data['data'];
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
    FaqDetailPage.prototype.showLoading = function (cont) {
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
    FaqDetailPage.prototype.showError = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: ['OK']
        });
        alert.present();
    };
    FaqDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq-detail',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/faq-detail/faq-detail.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Preguntas frecuentes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<div style=" margin: 2rem;">\n        <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n  </div>\n\n	<div (click)="expandItem(item)" ion-item no-lines class="fb-card" *ngFor="let item of faq" style=" padding: .8rem 2rem;">\n  	<p style=" white-space: normal;" [class.collaps]="item.expanded">\n      {{ item.pregunta }} \n    </p>    \n  	<expandable \n      [expandHeight]="auto" \n      [expanded]="item.expanded" \n      [respuesta]="item.respuesta">\n  	</expandable>\n	</div>\n\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/faq-detail/faq-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], FaqDetailPage);
    return FaqDetailPage;
}());

//# sourceMappingURL=faq-detail.js.map

/***/ }),

/***/ 240:
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

/***/ 273:
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
webpackEmptyAsyncContext.id = 273;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acceso-resultados/acceso-resultados.module": [
		848,
		0
	],
	"../pages/change-password/change-password.module": [
		849,
		36
	],
	"../pages/chat/chat.module": [
		850,
		35
	],
	"../pages/consejos-detail/consejos-detail.module": [
		851,
		34
	],
	"../pages/consejos-personalizados/consejos-personalizados.module": [
		852,
		33
	],
	"../pages/doc-firmados/doc-firmados.module": [
		853,
		32
	],
	"../pages/documentos-contables/documentos-contables.module": [
		854,
		31
	],
	"../pages/faq-detail/faq-detail.module": [
		855,
		30
	],
	"../pages/faq/faq.module": [
		856,
		29
	],
	"../pages/instrucciones/instrucciones.module": [
		857,
		28
	],
	"../pages/login-error-pin/login-error-pin.module": [
		858,
		27
	],
	"../pages/login-input/login-input.module": [
		859,
		26
	],
	"../pages/login-olvido/login-olvido.module": [
		860,
		25
	],
	"../pages/login-recibir-pin/login-recibir-pin.module": [
		861,
		24
	],
	"../pages/login-reenviar/login-reenviar.module": [
		862,
		23
	],
	"../pages/login-registro/login-registro.module": [
		863,
		22
	],
	"../pages/login-tab/login-tab.module": [
		864,
		21
	],
	"../pages/login-ya-registrado/login-ya-registrado.module": [
		865,
		20
	],
	"../pages/login/login.module": [
		866,
		19
	],
	"../pages/mi-perfil/mi-perfil.module": [
		867,
		18
	],
	"../pages/mi-salud/mi-salud.module": [
		868,
		17
	],
	"../pages/mis-citas/mis-citas.module": [
		869,
		16
	],
	"../pages/mis-documentos/mis-documentos.module": [
		870,
		15
	],
	"../pages/pedir-cita-elegir/pedir-cita-elegir.module": [
		871,
		14
	],
	"../pages/pedir-cita-preferencias/pedir-cita-preferencias.module": [
		872,
		13
	],
	"../pages/pedir-cita-reserva/pedir-cita-reserva.module": [
		873,
		12
	],
	"../pages/pedir-cita/pedir-cita.module": [
		874,
		11
	],
	"../pages/plan-economico-detail/plan-economico-detail.module": [
		875,
		10
	],
	"../pages/plan-economico/plan-economico.module": [
		876,
		9
	],
	"../pages/popover/popover.module": [
		877,
		8
	],
	"../pages/presupuestos/presupuestos.module": [
		878,
		7
	],
	"../pages/profile/profile.module": [
		879,
		6
	],
	"../pages/recall-pasadas/recall-pasadas.module": [
		880,
		5
	],
	"../pages/recall/recall.module": [
		881,
		4
	],
	"../pages/sugerencias/sugerencias.module": [
		882,
		3
	],
	"../pages/tab-higienes/tab-higienes.module": [
		883,
		2
	],
	"../pages/tabConsultarCitas/tabConsultarCitas.module": [
		884,
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
webpackAsyncContext.id = 314;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCitas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_higienes_tab_higienes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(21);
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/ConsultarCitas/ConsultarCitas.html"*/'<ion-content>\n	<ion-slides slidesPerView="1.3" spaceBetween="18" centeredSlides="true">\n		<ion-slide *ngFor="let item of citas">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row" style="margin-bottom: 1rem;">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white" style="font-size:3.2rem;">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>			        \n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<ion-row style="max-height: 9%;    display: flex;    margin: 2rem 2rem 0 2rem;">\n		<ion-col><fb-button [name]="bPedirCita" [class]="bPedirCita.class" (click)="openPage(bPedirCita.openPage,bPedirCita.tipo)"></fb-button></ion-col>\n		<ion-col><fb-button [name]="bHigienes" [class]="bHigienes.class" (click)="openPage(bHigienes.openPage,bHigienes.tipo)"></fb-button></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/ConsultarCitas/ConsultarCitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ConsultarCitas);
    return ConsultarCitas;
}());

//# sourceMappingURL=ConsultarCitas.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarCitasFuturasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_popover_popover__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_higienes_tab_higienes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
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
    function ConsultarCitasFuturasPage(navParams, app, toastCtrl, domSanitizer, events, alertCtrl, popoverCtrl, calendar, navCtrl, restProvider, loadingCtrl, plt) {
        var _this = this;
        this.navParams = navParams;
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
    ConsultarCitasFuturasPage.prototype.goToSlide = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideTo(_this.navParams.data);
        }, 500);
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
                _this.goToSlide();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slidesCitas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], ConsultarCitasFuturasPage.prototype, "slides", void 0);
    ConsultarCitasFuturasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consultar-citas-futuras/consultar-citas-futuras.html"*/'<ion-content>\n	<ion-slides #slidesCitas slidesPerView="1.3" spaceBetween="18" centeredSlides="true">\n		<ion-slide *ngFor="let item of citas">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row" style="margin-bottom: 1rem;">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white" style="font-size:3rem;">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Dirección\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <ion-icon name="fb-location" item-right></ion-icon>\n			                    </div>\n			                    <div class="card_subtitle">\n			                        C/Caleruega, 67\n			                        3ª Planta A\n			                        <br />\n			                        28033 - Madrid\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Calendario\n			                </div>\n			                <div class="card_container" (click)="addEvent(item.timestampINI,item.timestampFIN)">\n			                    <div class="avatar">\n			                        <ion-icon name="fb-calendar" item-right></ion-icon>\n			                    </div>\n			                    <div class="card_subtitle">\n			                        Haz\n			                        <span class="-pink">\n			                            click\n			                        </span>\n			                        para añadir\n			                        la cita a tu calendario\n			                    </div>\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div style="width:100%;">\n			                <div class="card_label" style="margin-top:1rem;">\n			                    Gestiona tu cita\n			                </div>\n			                <div class="card_container" style="display:flex;justify-content: space-evenly;align-items: center;">\n			                    <a class="fb-btn -pill -anular" (click)="presentConfirm(\'anular\', item.fechaDecimal, item.horaDecimal);">\n			                        Anular\n			                    </a>\n			                    <a *ngIf="item.confirmar == \'0\'" class="fb-btn -pill -confirmar" (click)="presentConfirm(\'confirmar\', item.fechaDecimal, item.horaDecimal);">\n			                        Confirmar\n			                    </a>			                    \n			                    <a class="fb-btn -pill -cambiar" (click)="presentConfirm(\'cambiar\', item.fechaDecimal, item.horaDecimal);">\n			                        Cambiar\n			                    </a>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<ion-row style="display: flex;    margin: 0rem 2rem 0 2rem;">\n		<ion-col><fb-button [name]="bPedirCita" [class]="bPedirCita.class" (click)="openPage(bPedirCita.openPage,bPedirCita.tipo)"></fb-button></ion-col>\n		<ion-col><fb-button [name]="bHigienes" [class]="bHigienes.class" (click)="openPage(bHigienes.openPage,bHigienes.tipo)"></fb-button></ion-col>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/consultar-citas-futuras/consultar-citas-futuras.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */]])
    ], ConsultarCitasFuturasPage);
    return ConsultarCitasFuturasPage;
}());

//# sourceMappingURL=consultar-citas-futuras.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedirCitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_preferencias_pedir_cita_preferencias__ = __webpack_require__(147);
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
        this.tratamientos = []; // Array donde se almacenan todos los tratamientos asociados a ese doctor.
        this.ttoSelect = "HIGREC"; // String donde se almacena el tratamiento seleccionado.
        this.bSiguiente = { name: 'Siguiente', svg: '', openPage: '', class: 'active login', tipo: '', gradiente: '' };
        this.tituloSubtitulo = { titulo: "Elige el tratamiento", subtitulo: "de la cita" };
        this.showLoading();
        this.getTratamientos();
        this.events.publish("user:logged");
    }
    PedirCitaPage.prototype.selectTto = function (e) {
        if (e.IdOpc == "OTRO") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */], {
                message: "Escríbenos con el tratamiento que deseas pedir cita."
            });
            return;
        }
        for (var x in this.tratamientos) {
            if (this.tratamientos[x].IdOpc == e.IdOpc)
                //this.tratamientos[x].class = "active";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_preferencias_pedir_cita_preferencias__["a" /* PedirCitaPreferenciasPage */], {
                    'tto': this.ttoSelect
                });
            else
                this.tratamientos[x].class = "";
        }
        this.ttoSelect = e.IdOpc;
    };
    PedirCitaPage.prototype.siguiente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pedir_cita_preferencias_pedir_cita_preferencias__["a" /* PedirCitaPreferenciasPage */], {
            'tto': this.ttoSelect
        });
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
    PedirCitaPage.prototype.getTratamientos = function () {
        var _this = this;
        this.restProvider.getTratamientos().then(function (data) {
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
    PedirCitaPage.prototype.openPage = function (page) {
        if (page == "chat")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */]);
    };
    PedirCitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedir-cita',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita/pedir-cita.html"*/'<ion-header no-border>\n	<ion-navbar>\n		<ion-title>Pedir nueva cita</ion-title>\n		  <ion-buttons right>\n			<button ion-button (click)="openPage(\'chat\')">\n				<ion-icon name="fb-chat"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- Gradiente -->\n	<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient5" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n	<!-- Fin Gradiente -->    \n	\n    <div>\n	   <fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n    </div>\n\n    <p>A continuación, podrás elegir cuando deseas concertar una visita para llevar a cabo tu tratamiento.</p> \n\n    <div class="row" id="listadoTratamientos">\n	    <div *ngFor="let t of tratamientos" col-6 style="height:12rem;">\n			<fb-button-icon id="{{ t.IdOpc }}" [name]="t" [class]="t.class" (click)="selectTto(t)"> </fb-button-icon>\n		</div>\n	</div>\n\n	<p style=" text-align: center; margin: 2rem 0 -2rem 0; font-size: 1rem;">1 de 4</p>\n\n	<ion-row style="max-height: 9%; display: flex; margin: 2rem 0 0 0;">\n		<fb-button [name]="bSiguiente" [class]="bSiguiente.class" (click)="siguiente()" style="width: 100%;"></fb-button>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/pedir-cita/pedir-cita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PedirCitaPage);
    return PedirCitaPage;
}());

//# sourceMappingURL=pedir-cita.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(767);
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

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocFirmadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(17);
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
            selector: 'page-doc-firmados',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/doc-firmados/doc-firmados.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Documentos administrativos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<!-- this fab is placed at bottom right -->\n	 <ion-fab bottom right #fab1>\n	   <button ion-fab (click)="openPage(\'Chat\', \'page\')" >\n	   		<svg style="    width: 60%;    height: 60%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n	   			<g fill="white" stroke="none"> \n	   				<path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/>\n	   				<path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/>\n   				</g>\n   			</svg>	   	\n	   </button>	   \n	 </ion-fab>\n	<ion-list>	  \n		<button ion-item style="margin:0" *ngFor="let doc of docs" (click)="openPdf(doc.url)">		\n		<ion-avatar item-start>\n		  <i class="{{doc.icono}}" style="font-size: 4rem;color:#81a7d4;"></i>\n		</ion-avatar>		\n		<h2>{{doc.nombre}}</h2>    \n		<p>{{doc.descripcion}}</p>		\n	  </button>	  \n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/doc-firmados/doc-firmados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], DocFirmadosPage);
    return DocFirmadosPage;
}());

//# sourceMappingURL=doc-firmados.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(661);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mi_salud_mi_salud__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_perfil_mi_perfil__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mis_documentos_mis_documentos__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mis_citas_mis_citas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sugerencias_sugerencias__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_password_change_password__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__documentos_contables_documentos_contables__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__presupuestos_presupuestos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recall_recall__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__consejos_personalizados_consejos_personalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__instrucciones_instrucciones__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__faq_faq__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(97);
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
        this.bPedirCita = {
            name: 'PEDIR CITA',
            svg: '',
            openPage: 'PedirCita',
            class: 'active',
            tipo: 'page',
            gradiente: ''
        };
        //this.showLoading();
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
    HomePage.prototype.goToCitas = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */], {
            'tab': i
        });
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
            else if (page == "PreguntasFrecuentes")
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__faq_faq__["a" /* FaqPage */]);
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
                //this.loading.dismiss();
            }
            else if (data.status == 401) {
                _this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.showError("¡Atención!", "<p>" + data['message'] + "<br/><br/>[Code: " + data['code'] + "]</p>");
            }
        }).catch(function (e) {
            //this.loading.dismiss();
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/home/home.html"*/'<div class="back"> \n	<ion-header no-border>\n  		<ion-navbar class="navWhite">\n    		<ion-buttons left>\n	    		<button ion-button menuToggle>\n	      			<ion-icon name="menu"></ion-icon>\n    			</button>\n    		</ion-buttons>\n    		<ion-title>Ferrus & Bratos</ion-title>\n\n    		<ion-buttons right>\n	    		<button ion-button (click)="callClinica()">\n	      			<ion-icon name="fb-telephone"></ion-icon>\n	    		</button>\n    		</ion-buttons>\n\n  		</ion-navbar>\n	</ion-header>\n\n	<h1 style="margin-bottom:0rem;color:white;font-weight:bold;">Próximas citas</h1> \n\n	<ion-slides pager style="" slidesPerView="1.3" spaceBetween="18" centeredSlides="true" *ngIf="cards?.length > 0" >\n  		<ion-slide class="slide" *ngFor="let card of cards; let i = index" (click)="goToCitas(i)" >\n			<div class="cardCita">\n				<div class="cardCita__left">\n					<div class="cardCita__date">\n						<div class="cardCita__day">\n							{{card.dia}}\n						</div>\n						<div class="cardCita__month">\n							{{card.mes}}\n						</div>\n					</div>\n					<div class="cardCita__hour">\n						{{card.hora}}\n					</div>\n				</div>\n				<div class="cardCita__right">\n					<div class="cardCita__tto tratamiento">\n						{{card.tratamiento}}\n					</div>\n					<div class="cardCita__dr">\n						<div class="cardCita__avatar">\n							<img [src]="domSanitizer.bypassSecurityTrustUrl(card.imagen)" style=" border-radius: 50%;"/>\n						</div>\n						<div class="cardCita__drname">\n							{{card.doctor}}\n						</div>\n					</div>\n				</div>\n			</div>\n	  	</ion-slide>\n	</ion-slides>\n	<div *ngIf="cards?.length <= 0" style=" max-height: 10rem; max-width: 77%; display: block;">\n  		<p> Actualmente no tienes citas </p>\n	</div>\n</div>\n\n\n<div class="menu">\n	<ion-row style="display:flex;align-items:center;">\n		<h1 col-9 style="padding:0px;margin-bottom: 0;margin-top:0;font-weight: bold;">Menú</h1>\n		<p col-3 style="text-align:right;padding:0px;font-size:1.3rem;margin:0px;" (click)="next()">Ver más</p>\n	</ion-row>\n	<ion-row class="square">\n		<ion-slides #slides pager>\n			<div *ngFor="let c of cardsMenu; let i=index">\n				<ion-slide class="slide" style="padding:0" *ngIf="i == 0">\n					<ion-row style="padding:0 4%;">\n						<div *ngFor="let c of cardsMenu| slice:0:6 ; let j=index" col-4>\n							<fb-button-icon *ngIf="j<6" [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n						</div>\n					</ion-row>\n				</ion-slide>\n				<ion-slide class="slide" style="padding:0" *ngIf="i == 5">\n					<ion-row style="padding:0 4%;">\n						<div *ngFor="let c of cardsMenu | slice:6; let j=index" col-4>\n							<fb-button-icon [name]="c" [class]="c.class" (click)="openPage(c.openPage,c.tipo)"> </fb-button-icon>\n						</div>\n					</ion-row>\n				</ion-slide>\n			</div>			\n		</ion-slides>	\n	</ion-row>\n	\n</div>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ConsultarCitas_ConsultarCitas__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_faq_faq__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_detail_faq_detail__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pedir_cita_preferencias_pedir_cita_preferencias__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pedir_cita_elegir_pedir_cita_elegir__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_reserva_pedir_cita_reserva__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tab_higienes_tab_higienes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_consultar_citas_futuras_consultar_citas_futuras__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_calendar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_popover_popover__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_instrucciones_instrucciones__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_doc_firmados_doc_firmados__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_emoji_emoji__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_emoji_picker_emoji_picker_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sugerencias_sugerencias__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_mi_salud_mi_salud__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_mi_perfil_mi_perfil__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_mis_citas_mis_citas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_mis_documentos_mis_documentos__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_login_input_login_input__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_login_registro_login_registro__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_login_tab_login_tab__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_login_recibir_pin_login_recibir_pin__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_login_error_pin_login_error_pin__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_login_ya_registrado_login_ya_registrado__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_login_reenviar_login_reenviar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_login_olvido_login_olvido__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_recall_recall__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_recall_pasadas_recall_pasadas__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_consejos_detail_consejos_detail__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_documentos_contables_documentos_contables__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_presupuestos_presupuestos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_plan_economico_plan_economico__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_plan_economico_detail_plan_economico_detail__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_fcm__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ionic_img_viewer__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_file__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_file_opener__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_photo_viewer__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_fb_button_icon_fb_button_icon__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_fb_button_fb_button__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_fb_titulo_subtitulo_fb_titulo_subtitulo__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_expandable_expandable__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_call_number__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_charts__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_ng2_charts__);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pedir_cita_preferencias_pedir_cita_preferencias__["a" /* PedirCitaPreferenciasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pedir_cita_elegir_pedir_cita_elegir__["a" /* PedirCitaElegirPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_reserva_pedir_cita_reserva__["a" /* PedirCitaReservaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tab_higienes_tab_higienes__["a" /* TabHigienesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_doc_firmados_doc_firmados__["a" /* DocFirmadosPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_recall_recall__["a" /* RecallPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_recall_pasadas_recall_pasadas__["a" /* RecallPasadasPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_consejos_detail_consejos_detail__["a" /* ConsejosDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_login_input_login_input__["a" /* LoginInputPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_login_tab_login_tab__["a" /* LoginTabPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_login_registro_login_registro__["a" /* LoginRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_error_pin_login_error_pin__["a" /* LoginErrorPinPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_login_ya_registrado_login_ya_registrado__["a" /* LoginYaRegistradoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_login_reenviar_login_reenviar__["a" /* LoginReenviarPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_login_olvido_login_olvido__["a" /* LoginOlvidoPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_plan_economico_detail_plan_economico_detail__["a" /* PlanEconomicoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mi_salud_mi_salud__["a" /* MiSaludPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mis_citas_mis_citas__["a" /* MisCitasPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_59__components_fb_button_icon_fb_button_icon__["a" /* FbButtonIconComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_fb_titulo_subtitulo_fb_titulo_subtitulo__["a" /* FbTituloSubtituloComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_fb_button_fb_button__["a" /* FbButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_detail_faq_detail__["a" /* FaqDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_64_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_55_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'fb-left',
                    iconMode: 'md',
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/acceso-resultados/acceso-resultados.module#AccesoResultadosPageModule', name: 'AccesoResultadosPage', segment: 'acceso-resultados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-detail/consejos-detail.module#ConsejosDetailPageModule', name: 'ConsejosDetailPage', segment: 'consejos-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consejos-personalizados/consejos-personalizados.module#ConsejosPersonalizadosPageModule', name: 'ConsejosPersonalizadosPage', segment: 'consejos-personalizados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doc-firmados/doc-firmados.module#DocFirmadosPageModule', name: 'DocFirmadosPage', segment: 'doc-firmados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentos-contables/documentos-contables.module#DocumentosContablesPageModule', name: 'DocumentosContablesPage', segment: 'documentos-contables', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq-detail/faq-detail.module#FaqDetailPageModule', name: 'FaqDetailPage', segment: 'faq-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instrucciones/instrucciones.module#InstruccionesPageModule', name: 'InstruccionesPage', segment: 'instrucciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-error-pin/login-error-pin.module#LoginErrorPinPageModule', name: 'LoginErrorPinPage', segment: 'login-error-pin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-input/login-input.module#LoginInputPageModule', name: 'LoginInputPage', segment: 'login-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-olvido/login-olvido.module#LoginOlvidoPageModule', name: 'LoginOlvidoPage', segment: 'login-olvido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-recibir-pin/login-recibir-pin.module#LoginRecibirPinPageModule', name: 'LoginRecibirPinPage', segment: 'login-recibir-pin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-reenviar/login-reenviar.module#LoginReenviarPageModule', name: 'LoginReenviarPage', segment: 'login-reenviar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-registro/login-registro.module#LoginRegistroPageModule', name: 'LoginRegistroPage', segment: 'login-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-tab/login-tab.module#LoginTabPageModule', name: 'LoginTabPage', segment: 'login-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-ya-registrado/login-ya-registrado.module#LoginYaRegistradoPageModule', name: 'LoginYaRegistradoPage', segment: 'login-ya-registrado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-perfil/mi-perfil.module#MiPerfilPageModule', name: 'MiPerfilPage', segment: 'mi-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-salud/mi-salud.module#MiSaludPageModule', name: 'MiSaludPage', segment: 'mi-salud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-citas/mis-citas.module#MisCitasPageModule', name: 'MisCitasPage', segment: 'mis-citas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-documentos/mis-documentos.module#MisDocumentosPageModule', name: 'MisDocumentosPage', segment: 'mis-documentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-cita-elegir/pedir-cita-elegir.module#PedirCitaElegirPageModule', name: 'PedirCitaElegirPage', segment: 'pedir-cita-elegir', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-cita-preferencias/pedir-cita-preferencias.module#PedirCitaPreferenciasPageModule', name: 'PedirCitaPreferenciasPage', segment: 'pedir-cita-preferencias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedir-cita-reserva/pedir-cita-reserva.module#PedirCitaReservaPageModule', name: 'PedirCitaReservaPage', segment: 'pedir-cita-reserva', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_30__pages_mi_salud_mi_salud__["a" /* MiSaludPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ConsultarCitas_ConsultarCitas__["a" /* ConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pedir_cita_preferencias_pedir_cita_preferencias__["a" /* PedirCitaPreferenciasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pedir_cita_elegir_pedir_cita_elegir__["a" /* PedirCitaElegirPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_reserva_pedir_cita_reserva__["a" /* PedirCitaReservaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_consultar_citas_futuras_consultar_citas_futuras__["a" /* ConsultarCitasFuturasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tab_higienes_tab_higienes__["a" /* TabHigienesPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_doc_firmados_doc_firmados__["a" /* DocFirmadosPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_mi_salud_mi_salud__["a" /* MiSaludPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_mis_citas_mis_citas__["a" /* MisCitasPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_recall_recall__["a" /* RecallPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_recall_pasadas_recall_pasadas__["a" /* RecallPasadasPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_consejos_personalizados_consejos_personalizados__["a" /* ConsejosPersonalizadosPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_consejos_detail_consejos_detail__["a" /* ConsejosDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_documentos_contables_documentos_contables__["a" /* DocumentosContablesPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_presupuestos_presupuestos__["a" /* PresupuestosPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_plan_economico_plan_economico__["a" /* PlanEconomicoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_login_input_login_input__["a" /* LoginInputPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_login_registro_login_registro__["a" /* LoginRegistroPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_login_tab_login_tab__["a" /* LoginTabPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_login_recibir_pin_login_recibir_pin__["a" /* LoginRecibirPinPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_login_error_pin_login_error_pin__["a" /* LoginErrorPinPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_login_ya_registrado_login_ya_registrado__["a" /* LoginYaRegistradoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_login_reenviar_login_reenviar__["a" /* LoginReenviarPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_login_olvido_login_olvido__["a" /* LoginOlvidoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_plan_economico_detail_plan_economico_detail__["a" /* PlanEconomicoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_detail_faq_detail__["a" /* FaqDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_27__providers_emoji_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_52__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(17);
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
        this.data = { /*pass1: '', */ pass2: '', pass3: '' }; // Array con las tres contraseñas (antigua, 2 nuevas)
        this.bGuardar = { name: 'Guardar contraseña', svg: '', openPage: 'Login', class: 'active login', tipo: 'page', gradiente: '' };
        this.tituloSubtitulo = { titulo: "Cambia tu contraseña", subtitulo: "para acceder a la App" };
        this.isFirst = navParams.get('first');
        if (this.isFirst) {
            this.tituloSubtitulo.titulo = "Crea tu contraseña";
        }
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
        if ( /*this.data.pass1 == "" || */this.data.pass2 == "" || this.data.pass3 == "") {
            this.showError("ERROR", "Los campos no pueden estar vacios.");
            return;
            //}else if (this.data.pass1 == this.data.pass2){
            //	this.showError("ERROR","La nueva contraseña no puede ser igual que la anterior.");	
            //	return;
        }
        else if (this.data.pass3 != this.data.pass2) {
            this.showError("ERROR", "La nuevas nuevas contraseñas deben ser iguales.");
            return;
        }
        else {
            this.restProvider.actualizarPass(/*this.data.pass1,*/ this.data.pass2, this.data.pass3).then(function (data) {
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
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/change-password/change-password.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Crear contraseña</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<ion-list> \n		<!--<ion-item>\n			<ion-label color="primary" stacked>Contraseña antigua</ion-label>\n			<ion-input [(ngModel)]="data.pass1" type="password" placeholder="Contraseña antigua"></ion-input>\n		</ion-item>  -->\n		<ion-item>\n			<ion-label stacked>Contraseña</ion-label>\n			<ion-input [(ngModel)]="data.pass2" type="password" ></ion-input><ion-icon name="fb-password" item-right></ion-icon>\n		</ion-item>  \n		<ion-item>\n			<ion-label stacked>Repita contraseña</ion-label>\n			<ion-input [(ngModel)]="data.pass3" type="password" ></ion-input><ion-icon name="fb-password" item-right></ion-icon>\n		</ion-item>    \n	</ion-list>\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bGuardar" [class]="bGuardar.class" (click)="actualizarPass()"> </fb-button>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(44);
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
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/emoji-picker/emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRecibirPinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_error_pin_login_error_pin__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_ya_registrado_login_ya_registrado__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_reenviar_login_reenviar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_change_password_change_password__ = __webpack_require__(70);
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
    function LoginRecibirPinPage(platform, events, navCtrl, nav, restProvider, alertCtrl, loadingCtrl) {
        this.platform = platform;
        this.events = events;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { digitos: '' }; // Array con los campos del formulario
        this.data = Array();
        this.bCrear = { name: 'Siguiente', svg: '', openPage: 'PedirCita', class: 'active login', tipo: 'page', gradiente: '' };
        this.tituloSubtitulo = { titulo: "Introduce el PIN", subtitulo: "que te acabamos de enviar" };
        this.enviarPIN(this.nav.get("dni"));
    }
    LoginRecibirPinPage.prototype.ReadListSMS = function () {
        var _this = this;
        var filter = {
            box: 'inbox',
            indexFrom: 0,
            maxCount: 10,
            address: "Clinica F&B",
            body: "verificacion",
        };
        if (SMS) {
            SMS.listSMS(filter, function (ListSms) {
                _this.detectCode(ListSms);
            }, function (error) {
                console.log('error list sms: ' + error);
            });
        }
    };
    LoginRecibirPinPage.prototype.detectCode = function (ListSms) {
        for (var _i = 0, ListSms_1 = ListSms; _i < ListSms_1.length; _i++) {
            var data = ListSms_1[_i];
            var pin = data.body.substr((data.body.indexOf(": ") + 2), 6);
            this.checkPIN(this.nav.get("dni"), pin, true);
        }
    };
    LoginRecibirPinPage.prototype.checkPIN = function (dni, pin, auto) {
        var _this = this;
        if (auto === void 0) { auto = false; }
        if (!pin)
            pin = this.registerCredentials.digitos;
        this.restProvider.checkPIN(dni, pin).then(function (d) {
            if (typeof d != "undefined" && d['status'] == 1) {
                console.log(d);
                _this.registerCredentials.digitos = pin;
                _this.showLoading(true);
                clearInterval(_this.interval);
                window.localStorage.setItem("idPac", d['data']['idPac']);
                window.localStorage.setItem("token", d['data']['token']);
                window.localStorage.setItem("expires", d['data']['expires']);
                _this.events.publish("user:logged");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_change_password_change_password__["a" /* ChangePasswordPage */], {
                    'first': true,
                });
            }
            else if (typeof d != "undefined" && d['status'] == 2) {
                if (!auto)
                    _this.showError("ERROR", "El código introducido es incorrecto.");
            }
            else {
                if (typeof d['code'] != "undefined" && !auto)
                    _this.showError("ERROR " + d['code'], "Acceso Denegado");
                else if (!auto)
                    _this.showError("ERROR", "Acceso Denegado");
            }
        });
    };
    LoginRecibirPinPage.prototype.reEnviarPIN = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_reenviar_login_reenviar__["a" /* LoginReenviarPage */], { data: this.data });
    };
    LoginRecibirPinPage.prototype.enviarPIN = function (dni) {
        var _this = this;
        this.showLoading();
        this.restProvider.sendPIN(dni).then(function (d) {
            if (typeof d != "undefined" && d['status'] == 1) {
                _this.data = d['data'];
                _this.loading.dismiss();
                _this.ReadListSMS();
                _this.interval = setInterval(function () {
                    _this.ReadListSMS();
                }, 3000);
            }
            else if (typeof d != "undefined" && d['status'] == 2) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_error_pin_login_error_pin__["a" /* LoginErrorPinPage */]).then(function () {
                    var startIndex = _this.navCtrl.getActive().index - 1;
                    _this.navCtrl.remove(startIndex);
                });
                _this.loading.dismiss();
            }
            else if (typeof d != "undefined" && d['status'] == 3) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_ya_registrado_login_ya_registrado__["a" /* LoginYaRegistradoPage */], { dni: _this.nav.get("dni") }).then(function () {
                    var startIndex = _this.navCtrl.getActive().index - 1;
                    _this.navCtrl.remove(startIndex);
                });
                _this.loading.dismiss();
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
    LoginRecibirPinPage.prototype.showLoading = function (dismiss) {
        if (dismiss === void 0) { dismiss = false; }
        this.loading = this.loadingCtrl.create({
            content: 'Cargando información...',
            dismissOnPageChange: dismiss,
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
    LoginRecibirPinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-recibir-pin',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-recibir-pin/login-recibir-pin.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Introduce el PIN</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div>\n		<fb-titulo-subtitulo *ngIf="tituloSubtitulo" [info]="tituloSubtitulo" ></fb-titulo-subtitulo>\n	</div>\n	<p>\n		Introduce el pin de 6 dígitos que te hemos enviado por {{ data.tipo }}: <span>{{ data.direccion }}</span>\n	</p>\n	<br />\n	<ion-list>\n		<ion-item>\n			<ion-label stacked>PIN</ion-label>\n			<ion-input type="number" [(ngModel)]="registerCredentials.digitos"></ion-input><ion-icon name="fb-pin" item-right></ion-icon>\n		</ion-item>\n		<p class="olvido">Nº de 6 dígitos</p>		\n	</ion-list>\n	<div style="max-height:5rem; width: 80%; margin: 0 auto;">\n		<fb-button [name]="bCrear" [class]="bCrear.class" (click)="checkPIN(data.dni, false, false)"></fb-button>\n	</div>\n	<ion-footer>\n		<p style="text-align: center;">\n			No lo he recibido.<br/>\n			<a (click)="reEnviarPIN()">Reenviar PIN</a>\n		</p>\n	</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/login-recibir-pin/login-recibir-pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], LoginRecibirPinPage);
    return LoginRecibirPinPage;
}());

//# sourceMappingURL=login-recibir-pin.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(21);
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
            selector: 'page-recall',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/recall/recall.html"*/'<ion-content padding>\n\n	<ion-slides slidesPerView="1.3" spaceBetween="18" centeredSlides="true" *ngIf="infoR.fechaFutura == true">\n		<ion-slide *ngFor="let item of recall">\n			<div class="fb-card -vcita -gradient">\n			    <div class="card_row" style="margin-bottom: 1rem;">\n			        <div class="left" style="flex: 0;border:none;padding:0;align-items: center;">\n			            <div class="card_subtitle -white" style="font-size: 1rem;">\n			                {{item.diaSemana}}\n			            </div>\n			            <div class="card_time -white" style="font-size:3.2rem;">\n			                {{item.dia}}\n			                <span>\n			                {{item.mes}}\n			                </span>\n			            </div>\n			            <div class="card_subtitle -white" style="font-size:1rem;">\n			                {{item.ano}}\n			            </div>\n			        </div>\n			        <div class="right" style="flex: 1;align-items: flex-end;justify-content: center;padding:0;">\n			            <div style="display:flex;flex-direction:column;align-items: flex-end;">\n			                <div class="card_time -white">\n			                    {{item.hora}}\n			                    <span style="display:inline;">\n			                        H\n			                    </span>\n			                </div>\n			                <div class="card_subtitle -white">\n			                    Duración:\n			                    <span>\n			                        {{item.Duracion}}\'\n			                    </span>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			    <div class="card_content -bg-white">\n			        <div class="card_row">\n			            <div>\n			                <div class="card_label">\n			                    Tratamiento\n			                </div>\n			                <div class="card_title">\n			                   {{item.tratamiento}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Profesional\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <img alt="" [src]="domSanitizer.bypassSecurityTrustUrl(item.Img)" />\n			                    </div>\n			                    <div class="card_title">\n			                       {{item.usuario}}\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Estado de la cita\n			                </div>\n			                <div class="card_estado">\n			                     {{item.situacion}}\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div class="left">\n			                <div class="card_label">\n			                    Dirección\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <ion-icon name="fb-location" item-right></ion-icon> \n			                    </div>\n			                    <div class="card_subtitle">\n			                        C/Caleruega, 67\n			                        3ª Planta A\n			                        <br />\n			                        28033 - Madrid\n			                    </div>\n			                </div>\n			            </div>\n			            <div class="right">\n			                <div class="card_label">\n			                    Calendario\n			                </div>\n			                <div class="card_container">\n			                    <div class="avatar">\n			                        <ion-icon name="fb-calendar" item-right></ion-icon>\n			                    </div>\n			                    <div class="card_subtitle" (click)="addEvent(item.timestampINI,item.timestampFIN)">\n			                        Haz\n			                        <span class="-pink">\n			                            click\n			                        </span>\n			                        para añadir\n			                        la cita a tu calendario\n			                    </div>\n			                </div>\n			            </div>\n			        </div>\n			        <div class="card_separator">\n			        </div>\n			        <div class="card_row">\n			            <div style="width:100%;">\n			                <div class="card_label" style="margin-top:1rem;">\n			                    Gestiona tu cita\n			                </div>\n			                <div class="card_container" style="display:flex;justify-content: space-evenly;align-items: center;">\n			                    <a class="fb-btn -pill -anular" (click)="presentConfirm(\'anular\', item.fechaDecimal, item.horaDecimal);">\n			                        Anular\n			                    </a>\n			                    <a *ngIf="item.confirmar == \'0\'" class="fb-btn -pill -confirmar" (click)="presentConfirm(\'confirmar\', item.fechaDecimal, item.horaDecimal);">\n			                        Confirmar\n			                    </a>			                    \n			                    <a class="fb-btn -pill -cambiar" (click)="presentConfirm(\'cambiar\', item.fechaDecimal, item.horaDecimal);">\n			                        Cambiar\n			                    </a>\n			                </div>\n			            </div>\n			        </div>\n			    </div>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	<div padding *ngIf="infoR.fechaFutura != true">\n		<fb-titulo-subtitulo [info]="infoR" ></fb-titulo-subtitulo>\n		<p>{{infoR.texto}}</p>\n		<br />\n		<p style=" max-height: 10rem;">\n			<fb-button-icon [name]="botonPedirCita" [class]="botonPedirCita.class" (click)="openPage(botonPedirCita.openPage,botonPedirCita.tipo)"> </fb-button-icon>\n		</p>\n	</div>\n	<div *ngIf="infoR.Footer == true">\n	<div class="fb-card -v4">\n	    <div class="left">\n	        <div class="avatar">\n	        	\n	        	<!-- Gradiente -->\n				<svg enable-background="new 0 0 64 64" height="0px" viewBox="0 0 64 64" width="0px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"> <defs> <linearGradient gradientUnits="userSpaceOnUse" id="fb-shadow-gradient3" x1="0" x2="100%" y1="0" y2="100%"> <stop offset="0" stop-color="#81a8d9"> </stop> <stop offset="1" stop-color="#f3a7c9"> </stop> </linearGradient> </defs> </svg>\n				<!-- Fin Gradiente -->\n\n	            <svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> \n	            	<g fill="url(#fb-shadow-gradient3)" stroke="none">\n	            		<defs>\n	            			<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n	            		</defs>\n	            		<clipPath id="b">\n	            			<use xlink:href="#a" overflow="visible"/>\n	            		</clipPath>\n	            		<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/>\n	            		</g>\n	            	</svg>\n	        </div>\n	    </div>\n	    <div class="center" style="justify-content: space-evenly;">\n	        <div class="card_title">\n	            {{infoR.tituloFooter}}\n	        </div>\n	        <div class="card_subtitle">\n	           {{infoR.subTituloFooter}}\n	        </div>\n	    </div>\n	    <div class="right">\n	        <div class="card_time">\n	            {{infoR.mesesFooter}}\n	            <span>\n	                meses\n	            </span>\n	        </div>\n	    </div>\n	</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/pages/recall/recall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]])
    ], RecallPage);
    return RecallPage;
}());

//# sourceMappingURL=recall.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mis_citas_mis_citas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_change_password_change_password__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabConsultarCitas_tabConsultarCitas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_pedir_cita__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_documentos_contables_documentos_contables__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_presupuestos_presupuestos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_recall_recall__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_consejos_personalizados_consejos_personalizados__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_instrucciones_instrucciones__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_firebase__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(408);
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
    function MyApp(menuCtrl, alertCtrl, fcm, events, platform, restProvider, statusBar, splashScreen, loadingCtrl) {
        this.menuCtrl = menuCtrl;
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
        this.bAyuda = { name: 'Ayuda', svg: '', openPage: 'Chat', class: 'active', tipo: false, gradiente: '' };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [{
                title: 'Inicio',
                icon: 'fb-home',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            }, {
                title: 'Mi salud',
                icon: 'fb-heart',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_mi_salud_mi_salud__["a" /* MiSaludPage */]
            }, {
                title: 'Pedir cita',
                icon: 'fb-pedircita',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_16__pages_pedir_cita_pedir_cita__["a" /* PedirCitaPage */]
            }, {
                title: 'Mis citas',
                icon: 'fb-calendar',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_15__pages_tabConsultarCitas_tabConsultarCitas__["a" /* TabConsultarCitas */]
            }, {
                title: 'Mis documentos',
                icon: 'fb-documents',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_mis_documentos_mis_documentos__["a" /* MisDocumentosPage */]
            }, {
                title: 'Mi perfil',
                icon: 'fb-profile',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */]
            }, {
                title: 'Chat',
                icon: 'fb-chat',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */]
            }, {
                title: 'Sugerencias',
                icon: 'fb-suggest',
                color: 'primary',
                component: __WEBPACK_IMPORTED_MODULE_12__pages_sugerencias_sugerencias__["a" /* SugerenciasPage */]
            }];
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
            buttons: [{
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () { }
                }, {
                    text: textButton,
                    role: textButton,
                    handler: function () {
                        setTimeout(function () {
                            _this.openPageStrig(page, false);
                        }, 500);
                    }
                }]
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
            if (typeof data != "undefined" && data['status'] == 1) { }
            else if (data.status == 401) { }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/app/app.html"*/'<ion-menu [content]="content">\n	<ion-content>\n		<div class="imgTop">\n			<div class="imgPerfilDiv">\n				<img onError="this.src=\'assets/imgs/person.png\';this.style.borderRadius=\'50%\';" src="https://ui-avatars.com/api/?name={{ menuData.nombre }} {{ menuData.inicial }}&size=256&rounded=true&background={{ menuData.color }}" class="imgPerfil" />\n				<div class="container">\n				<p class="pPerfil" >{{ menuData.nombre }} {{ menuData.apellidos }}</p>\n				<p class="iPerfil"><i>{{ menuData.email }}</i></p>\n				</div>\n			</div>\n		</div>\n		<ion-list>\n			<button menuClose ion-item detail-none *ngFor="let p of pages" (click)="openPage(p)">\n				<!-- <i class="{{p.icon}} {{p.color}} marginRight" aria-hidden="true"></i> {{p.title}} -->\n				<ion-icon name="{{p.icon}}" item-left></ion-icon> {{p.title}}\n			</button>\n			<button menuClose ion-item detail-none (click)="clickLogout()">\n				<ion-icon name="fb-exit" item-left></ion-icon> Salir\n			</button>\n		</ion-list>\n		<fb-button [name]="bAyuda" [class]="bAyuda.class" (click)="openPageStrig(bAyuda.openPage,bAyuda.tipo);menuCtrl.toggle();"></fb-button>\n	</ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbButtonIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('name'),
        __metadata("design:type", Object)
    ], FbButtonIconComponent.prototype, "name", void 0);
    FbButtonIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fb-button-icon',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-button-icon/fb-button-icon.html"*/'<!-- Generated template for the FbButtonIconComponent component -->\n<button [class]="name.class" style="height: 100%;">\n	<p *ngIf="name.svg == \'citas\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M59 6h-8V4.4c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6V6H16.1V4.4c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6V6H5C2.4 6 .2 8.1.2 10.8v44.4C.3 57.9 2.4 60 5 60h54c2.6 0 4.8-2.1 4.8-4.8V10.8C63.8 8.2 61.6 6 59 6zM5 9.2h7.9V14c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6V9.2h31.8V14c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6V9.2H59c.9 0 1.6.7 1.6 1.6v7.9H3.4v-7.9c0-.9.7-1.6 1.6-1.6zm54 47.6H5c-.9 0-1.6-.7-1.6-1.6V21.9h57.2v33.3c0 .9-.7 1.6-1.6 1.6z"/><path d="M24.1 31.4h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6-.1.9-.8 1.6-1.6 1.6zM33.6 31.4h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM43.1 31.4h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM52.6 31.4h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM14.5 37.8h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM24.1 37.8h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.6 1.6zM33.6 37.8h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM43.1 37.8h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM52.6 37.8h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM14.5 44.1h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM24.1 44.1h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6-.1.9-.8 1.6-1.6 1.6zM33.6 44.1h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM43.1 44.1h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM52.6 44.1h-3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM14.5 50.5h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM24.1 50.5h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.6 1.6zM33.6 50.5h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM43.1 50.5h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zM52.6 50.5h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6z"/></g></svg>\n	</p>\n\n	<p *ngIf="name.svg == \'perfil\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M30.4 35.3c-9.6 0-17.5-7.8-17.5-17.5S20.8.4 30.4.4s17.5 7.8 17.5 17.5S40 35.3 30.4 35.3zm0-31.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3S38.3 3.6 30.4 3.6zm6.4 60.3H5c-2.6 0-4.8-2.1-4.8-4.8 0-.2 0-5.3 3.9-10.5 2.2-3 5.3-5.4 9.1-7 4.6-2.1 10.4-3.1 17.2-3.1 1.1 0 2.2 0 3.3.1.9.1 1.5.8 1.5 1.7-.1.9-.8 1.5-1.7 1.5-1-.1-2-.1-3.1-.1-11.1 0-19.2 3-23.6 8.8-3.3 4.3-3.4 8.7-3.4 8.7 0 .9.7 1.6 1.6 1.6h31.7c.9 0 1.6.7 1.6 1.6 0 .8-.7 1.5-1.5 1.5zm12.7 0c-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.3-14.3 14.3 6.4 14.3 14.3-6.5 14.3-14.3 14.3zm0-25.4c-6.1 0-11.1 5-11.1 11.1s5 11.1 11.1 11.1 11.1-5 11.1-11.1-5-11.1-11.1-11.1zm6.3 9.5H51v-4.8c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6V48H43c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h4.8V56c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-4.8h4.8c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6z"/></g></svg>\n	</p>\n	\n	<p *ngIf="name.svg == \'chat\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g stroke="none"> <path d="M2 60.9c-.8 0-1.4-.5-1.6-1.2-.2-.7.1-1.5.8-1.9 5.6-3.4 8-8.3 8.8-10.6C3.9 42.5.4 36 .4 29.2c0-3.4.9-6.8 2.6-9.9 1.6-3 3.9-5.7 6.9-8 6-4.6 13.9-7.2 22.3-7.2s16.3 2.6 22.3 7.2c2.9 2.3 5.3 5 6.9 8 1.7 3.1 2.6 6.5 2.6 9.9s-.9 6.8-2.6 9.9c-1.6 3-3.9 5.7-6.9 8-6 4.6-13.9 7.2-22.3 7.2-3.4 0-6.8-.4-10.1-1.3-1.4 1-4.1 2.6-7.3 4.2-5.1 2.5-9.4 3.7-12.8 3.7zM32 7.5c-15.7 0-28.4 9.7-28.4 21.7 0 6.1 3.4 11.9 9.2 16 .6.4.8 1.1.7 1.8-.4 1.5-1.7 5.5-5.3 9.3 4.3-1.5 9-4.2 12.5-6.5.4-.3.9-.4 1.4-.2 3.2.9 6.5 1.4 9.9 1.4 15.7 0 28.4-9.7 28.4-21.7S47.7 7.5 32 7.5zm0 30c-.9 0-1.7-.7-1.7-1.7v-6.7c0-.9.7-1.7 1.7-1.7 2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5c0 .9-.7 1.7-1.7 1.7s-1.7-.7-1.7-1.7c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3c0 4-2.9 7.4-6.7 8.2v5.2c.2 1-.6 1.7-1.5 1.7zm0 6.7c-.4 0-.9-.2-1.2-.5s-.5-.7-.5-1.2c0-.4.2-.9.5-1.2.3-.3.7-.5 1.2-.5.4 0 .9.2 1.2.5.3.3.5.7.5 1.2 0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5z"/></g></svg>\n	</p>\n\n	<p *ngIf="name.svg == \'salud\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> \n			<g  stroke="none">\n				<defs>\n					<path id="a" d="M.5 2h63.7v60.4H.5z"/>\n				</defs>\n				<clipPath id="b">\n					<use xlink:href="#a" overflow="visible"/>\n				</clipPath>\n				<path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)" />\n			</g>\n		</svg>\n	</p>\n\n	<p *ngIf="name.svg == \'documentos\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M53.8 64H10.4c-2.8 0-5-2.2-5-5V5.5c0-2.8 2.2-5 5-5h43.4c2.8 0 5 2.2 5 5V59c0 2.8-2.2 5-5 5zM10.4 3.8c-.9 0-1.7.7-1.7 1.7V59c0 .9.7 1.7 1.7 1.7h43.4c.9 0 1.7-.7 1.7-1.7V5.5c0-.9-.7-1.7-1.7-1.7H10.4zm30.1 10.1H17.1c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h23.4c.9 0 1.7.7 1.7 1.7-.1.9-.8 1.7-1.7 1.7zm6.6 6.7h-30c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7h30.1c.9 0 1.7.7 1.7 1.7s-.8 1.7-1.8 1.7zm0 6.6h-30c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7h30.1c.9 0 1.7.7 1.7 1.7s-.8 1.7-1.8 1.7zm-13.3 6.7H17.1c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h16.7c.9 0 1.7.7 1.7 1.7-.1 1-.8 1.7-1.7 1.7zm13.3 13.4h-30c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h30.1c.9 0 1.7.7 1.7 1.7-.1.9-.8 1.7-1.8 1.7zM40.5 54H17.1c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h23.4c.9 0 1.7.7 1.7 1.7-.1.9-.8 1.7-1.7 1.7z"/></g></svg>\n	</p>\n\n	<p *ngIf="name.svg == \'preguntas\'">\n	<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M16.3 36H3.6c-.5 0-1-.4-1-1V3.9c0-.5.4-1 1-1h48.3L43.8 11c-.2.2-.3.4-.3.7v12.7h1.9V12.1l9.4-9.4c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1H3.6C2 1 .7 2.3.7 3.9v31.2C.7 36.7 2 38 3.6 38h12.7v-2z"/><path d="M60.1 26.3h-39c-1.6 0-2.9 1.3-2.9 2.9v23l-9.4 9.4c-.2.2-.3.4-.3.7 0 .5.4 1 1 1h50.6c1.6 0 2.9-1.3 2.9-2.9V29.2c0-1.6-1.3-2.9-2.9-2.9zm1 34.1c0 .5-.4 1-1 1H11.8l8.1-8.1c.2-.2.3-.4.3-.7V29.2c0-.5.4-1 1-1h38.9c.5 0 1 .4 1 1v31.2zM33.8 23.4v-7.8c0-4.8-3.9-8.8-8.8-8.8-4.8 0-8.8 3.9-8.8 8.8v9.7h1.9v-5.8h13.6v3.9h2.1zm-15.6-5.9v-1.9c0-3.8 3.1-6.8 6.8-6.8s6.8 3.1 6.8 6.8v1.9H18.2z"/><path d="M49.4 47.7v-5.8c0-4.8-3.9-8.8-8.8-8.8-4.8 0-8.8 3.9-8.8 8.8v5.8c0 4.8 3.9 8.8 8.8 8.8 1.5 0 2.8-.4 4.1-1 1.4.6 3.3 1 5.7 1v-1.9c-1.5 0-2.7-.2-3.7-.4 1.6-1.7 2.7-4 2.7-6.5zm-8.8 6.8c-3.8 0-6.8-3.1-6.8-6.8v-5.8c0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8v5.8c0 2.3-1.1 4.3-2.9 5.5-2.9-1.7-3-4.4-3-4.6h-2c0 .1.1 3.3 2.9 5.6-.5.2-1.1.3-1.8.3zM4.6 29.2v3.9c0 .5.4 1 1 1h3.9v-1.9h-3v-2.9H4.6zM57.2 57.5h-2.9v1.9h3.9c.5 0 1-.4 1-1v-3.9h-1.9v3z"/></g></svg>\n	</p>\n	\n	<p *ngIf="name.svg == \'web\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M10.2 12.5c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6zm6.3 0c0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6zm6.2 0c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6zm35.8-7.8h-53C3 4.7.9 6.8.9 9.3v37.4c0 .9.7 1.6 1.6 1.6S4 47.6 4 46.7V20.2h23.4c2.6 0 4.7-2.1 4.7-4.7 0-.9.7-1.6 1.6-1.6h15.6c.9 0 1.6.7 1.6 1.6 0 2.6 2.1 4.7 4.7 4.7h4.7V56c0 .9-.7 1.6-1.6 1.6H14.9c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h43.6c2.6 0 4.7-2.1 4.7-4.7V9.3c0-2.5-2.1-4.6-4.7-4.6zm-3.1 12.4c-.9 0-1.6-.7-1.6-1.6 0-2.6-2.1-4.7-4.7-4.7H33.6c-2.6 0-4.7 2.1-4.7 4.7 0 .9-.7 1.6-1.6 1.6H4V9.3c0-.9.7-1.6 1.6-1.6h53c.9 0 1.6.7 1.6 1.6v7.8h-4.8zM24.2 35.8h-9.3c-.9 0-1.6.7-1.6 1.6S14 39 14.9 39h5.6l-16 16c-.6.6-.6 1.6 0 2.2.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l16-16v5.6c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-9.3c-.1-1-.8-1.7-1.7-1.7z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'comollegar\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M32.4 63.4c-.5 0-.9-.2-1.2-.6-.2-.2-4.4-5.7-8.7-13.7-2.5-4.7-4.6-9.4-6-13.8-1.8-5.6-2.8-10.8-2.8-15.6C13.7 9.4 22.1 1 32.4 1s18.7 8.4 18.7 18.7c0 4.8-.9 10.1-2.8 15.6-1.5 4.4-3.5 9.1-6 13.8-4.3 8-8.6 13.5-8.7 13.7-.3.4-.7.6-1.2.6zm0-59.3c-8.6 0-15.6 7-15.6 15.6 0 10.2 4.6 20.8 8.4 27.9 2.8 5.2 5.6 9.4 7.2 11.6 1.6-2.2 4.4-6.4 7.2-11.6 3.8-7.1 8.4-17.8 8.4-27.9 0-8.6-7-15.6-15.6-15.6z"/><path d="M32.4 29.1c-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4-4.2 9.4-9.4 9.4zm0-15.6c-3.4 0-6.2 2.8-6.2 6.2S29 26 32.4 26s6.2-2.8 6.2-6.2-2.8-6.3-6.2-6.3z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'sugerencias\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M61 35.6c1.4-1.6 2.2-4.3 2.2-6.8 0-1.7-.4-3.1-1-4.2-.9-1.4-2.3-2.2-4-2.2H50C54.4 14.1 55.5 8 53.2 4 51.6 1.2 48.7.2 46.8.2c-.8 0-1.5.6-1.6 1.4-.6 4.2-3.7 9.1-8.7 13.6-4.7 4.3-10.6 7.8-16.6 9.8-.8-1.6-2.4-2.7-4.3-2.7H6.2c-2.6 0-4.7 2.1-4.7 4.7v28.3c0 2.6 2.1 4.7 4.7 4.7h9.4c2 0 3.7-1.2 4.4-3 6.2.8 8.5 2 10.8 3.2 2.8 1.5 5.5 2.9 14.2 2.9 2.3 0 4.4-.6 6-1.7 1.6-1 2.6-2.5 2.9-4.2 1.3-.5 2.4-1.7 3.2-3.4.8-1.7 1.4-3.9 1.4-5.5 0-.3 0-.6-.1-.9.8-.6 1.5-1.5 2.1-2.7.9-1.7 1.4-3.9 1.4-5.8 0-1.3-.2-2.4-.7-3.3-.1.1-.1 0-.2 0zM15.6 56.9H6.1c-.9 0-1.6-.7-1.6-1.6V27c0-.9.7-1.6 1.6-1.6h9.4c.9 0 1.6.7 1.6 1.6v28.3c.1.9-.6 1.6-1.5 1.6zm43.6-24.3c-.5 1-1 1.3-1.2 1.3-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.1 0 .2 0 .4.2.2.4.3 1 .3 1.8 0 1.4-.4 3.1-1 4.4-.6 1.3-1.3 1.7-1.5 1.7-.9 0-1.6.7-1.6 1.6 0 .6.3 1 .7 1.3.1 1-.4 3.7-1.6 5.4-.5.7-.9 1-1.3 1-.9 0-1.6.7-1.6 1.6 0 2.8-3.1 4-5.9 4-7.9 0-10.1-1.2-12.7-2.6-2.4-1.3-5.1-2.7-11.9-3.6V28.2c6.6-2.2 13.1-5.9 18.3-10.6 5-4.5 8.3-9.4 9.4-13.9.9.3 1.8.9 2.4 1.9 1.1 1.9 1.8 6.6-4.7 17.5-.3.5-.3 1.1 0 1.6s.8.8 1.4.8h11c.6 0 1 .2 1.4.7.4.6.6 1.5.6 2.6-.1 1.3-.4 2.7-.9 3.8z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'pedircita\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M58.8 6.6H51V5c0-.9-.7-1.6-1.6-1.6s-1.6.8-1.6 1.6v1.6H16.4V5c0-.9-.7-1.6-1.6-1.6s-1.5.8-1.5 1.6v1.6H5.5C2.9 6.6.8 8.7.8 11.3v43.9c0 2.6 2.1 4.7 4.7 4.7h53.3c2.6 0 4.7-2.1 4.7-4.7V11.3c0-2.6-2.1-4.7-4.7-4.7zM5.5 9.7h7.8v4.7c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V9.7h31.4v4.7c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V9.7h7.8c.9 0 1.6.7 1.6 1.6v7.8H3.9v-7.8c0-.9.7-1.6 1.6-1.6zm53.3 47.1H5.5c-.9 0-1.6-.7-1.6-1.6V22.3h56.5v32.9c0 .9-.7 1.6-1.6 1.6zm-31.4-7.9c-.4 0-.8-.2-1.1-.5L20 42.2c-.6-.6-.6-1.6 0-2.2s1.6-.6 2.2 0l5.2 5.2L42 30.6c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2L28.5 48.5c-.3.3-.7.4-1.1.4z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'mishigienes\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><defs><path id="a" d="M6 2h53v61H6z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M8.1 9.3L10 52c.1 2.2 1.9 3.9 4.1 3.9h2.2l.6 4.5c.2 1.5 1.5 2.6 3 2.6h2.6c1.5 0 2.8-1.1 3-2.6l.6-4.5h2.2c2.2 0 4-1.7 4.1-3.9l1.9-42.7 1.9-4.7c.2-.6.1-1.3-.3-1.8s-1-.9-1.7-.9H8.1c-.6.1-1.3.4-1.7.9-.3.6-.4 1.3-.2 1.9l1.9 4.6zm6.6 25.3c1.2-.6 2.3-1.4 3.2-2.4 1.2-1.2 2.3-2.5 3.3-3.8 2.1-2.7 3.2-4 7.3-4 1.1 0 2.2.1 3.3.4l-.1 2.4c-3.4 1.1-5.1 3.3-6.6 5.3-1.6 2.1-3 4-6.4 4.6-2.4.4-4.9.3-7.2-.6v-.7c1-.3 2.1-.7 3.2-1.2zm8.9 25.5c-.1.5-.5.9-1 .9H20c-.5 0-.9-.4-1-.9l-.6-4.2h5.8l-.6 4.2zm7-8.2c-.1 1.1-1 2-2.1 1.9H14.1c-1.1 0-2-.8-2.1-1.9l-.6-13.2c1.5.4 3.1.7 4.6.7 1 0 1.9-.1 2.9-.3 4.2-.8 6-3.1 7.7-5.4 1.2-1.9 2.9-3.4 4.9-4.3l-.9 22.5zm4-48l-2 4.8v.4L32 22.7c-1.1-.2-2.2-.3-3.4-.3-5.1 0-6.7 2-8.9 4.8-1 1.3-2 2.5-3.2 3.7-.8.8-1.7 1.5-2.7 2-.8.4-1.6.7-2.5.9l-1.1-23.6h19.3c.6 0 1-.5 1-1 0-.6-.5-1-1-1H9.8L8.1 4l26.5-.1zm0 0" clip-path="url(#b)"/><path d="M45.7 41.8v17.1c0 2.2 1.8 4.1 4.1 4.1 2.2 0 4.1-1.8 4.1-4.1v-18c0-.6-.1-1.2-.4-1.7l-4.7-10.4v-.5h8.1c1.1 0 2-.9 2-2V8.1c0-1.1-.9-2-2-2h-8.1C48.8 3.9 47 2 44.7 2c-2.2 0-4.1 1.8-4.1 4.1v23.7c0 .6.1 1.2.4 1.7l4.7 10.3zM56.9 8.1v2h-5.1c-.6 0-1 .5-1 1 0 .6.5 1 1 1h5.1v6.1h-5.1c-.6 0-1 .5-1 1 0 .6.5 1 1 1h5.1v6.1h-8.1v-2h5.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-5.1v-6.1h5.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-5.1V8.1h8.1zM42.7 6c0-1.1.9-2 2-2s2 .9 2 2v23.1c0 .1 0 .3.1.4l4.8 10.6c.1.3.2.6.2.8v17.9c0 1.1-.9 2-2 2s-2-.9-2-2V41.6c0-.1 0-.3-.1-.4l-4.8-10.6c-.1-.3-.2-.6-.2-.8V6zm0 0"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'misconsejos\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M3.3 60c-.7 0-1.4-.5-1.6-1.2-.2-.7.1-1.4.7-1.8 5.5-3.2 7.7-7.9 8.5-10C5 42.6 1.6 36.4 1.6 30c0-3.2.8-6.4 2.5-9.4 1.6-2.8 3.8-5.4 6.6-7.5 5.8-4.4 13.4-6.8 21.5-6.8s15.7 2.4 21.5 6.8c2.8 2.2 5.1 4.7 6.6 7.5 1.6 3 2.5 6.1 2.5 9.4s-.8 6.4-2.5 9.4c-1.6 2.8-3.8 5.4-6.6 7.5-5.8 4.4-13.4 6.8-21.5 6.8-3.3 0-6.6-.4-9.7-1.2-1.4.9-4 2.5-7.1 4C10.8 58.8 6.6 60 3.3 60zm29-50.5C17.2 9.5 4.9 18.7 4.9 30c0 5.7 3.2 11.2 8.9 15.1.6.4.8 1.1.6 1.7-.4 1.4-1.7 5.2-5.1 8.8 4.2-1.4 8.7-3.9 12.1-6.2.4-.3.9-.3 1.4-.2 3.1.9 6.3 1.3 9.6 1.3 15.1 0 27.4-9.2 27.4-20.5S47.5 9.5 32.3 9.5zm11.3 29.9c0-.5-.2-2.9-1.4-5.3-.8-1.6-2.2-3.4-4.5-4.5 1.6-1.4 2.7-3.5 2.7-5.9 0-4.4-3.6-7.9-8.1-7.9s-8.1 3.5-8.1 7.9c0 2.3 1 4.4 2.7 5.9-2.3 1.1-3.7 2.9-4.5 4.5-1.4 2.7-1.4 5.3-1.4 5.4 0 .9.7 1.6 1.6 1.6H42c.9 0 1.6-.7 1.6-1.6v-.1zM27.5 23.7c0-2.6 2.2-4.7 4.8-4.7s4.8 2.1 4.8 4.7-2.2 4.7-4.8 4.7-4.8-2.1-4.8-4.7zm-3 14.2c.2-.7.4-1.6.9-2.5 1.3-2.5 3.7-3.8 7-3.8s5.7 1.3 7 3.8c.5.9.7 1.8.9 2.5H24.5z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'misinstrucciones\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M53.8 64H9.4c-2.6 0-4.8-2.1-4.8-4.8V14.8c0-2.6 2.1-4.8 4.8-4.8h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6H9.4c-.9 0-1.6.7-1.6 1.6v44.4c0 .9.7 1.6 1.6 1.6h44.5c.9 0 1.6-.7 1.6-1.6V14.8c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c2.6 0 4.8 2.1 4.8 4.8v44.4c-.1 2.7-2.2 4.8-4.9 4.8zm-9.5-47.6H18.9c-.9 0-1.6-.7-1.6-1.6 0-3.2 1.4-5.7 4.1-7 .9-.4 1.7-.7 2.4-.8.7-3.7 3.9-6.5 7.8-6.5s7.1 2.8 7.8 6.5c.7.1 1.6.4 2.4.8 2.6 1.3 4 3.7 4.1 6.9v.1c0 .9-.7 1.6-1.6 1.6zm-23.6-3.2h21.8c-.3-1.1-1-2-2-2.5C39.3 10 38 10 38 10c-.9 0-1.6-.7-1.6-1.6 0-2.6-2.1-4.8-4.8-4.8s-4.8 2.1-4.8 4.8c0 .9-.7 1.6-1.6 1.6 0 0-1.3 0-2.5.7-1 .5-1.7 1.4-2 2.5zM31.6 10c-.4 0-.8-.2-1.1-.5s-.5-.6-.5-1.1.2-.8.5-1.1c.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.3.3.5.7.5 1.1s-.2.9-.5 1.2c-.3.3-.7.4-1.1.4zm15.9 15.9H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm-6.4 9.5H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h25.4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm6.4 6.4H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm0 6.3H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm-15.9 6.4H15.7c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h15.9c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'mispresupuestos\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M45.7 61.9H4.9c-2.6 0-4.7-2.1-4.7-4.7V6.9c0-2.6 2.1-4.7 4.7-4.7h40.9c2.6 0 4.7 2.1 4.7 4.7v6.3c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6V6.9c0-.9-.7-1.6-1.6-1.6H4.9c-.9 0-1.6.7-1.6 1.6v50.3c0 .9.7 1.6 1.6 1.6h40.9c.9 0 1.6-.7 1.6-1.6V44.6c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v12.6c-.2 2.6-2.3 4.7-4.9 4.7zM33.1 14.8h-22c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h22c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm6.3 6.3H11.1c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h28.3c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zm-3.1 6.2H11.1c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h25.1c.9 0 1.6.7 1.6 1.6.1.9-.6 1.6-1.5 1.6zm-9.4 6.3H11.1c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h15.7c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.5 1.6zm0 18.9c-.4 0-.8-.2-1.1-.5-.4-.4-.5-1-.4-1.5l3.1-11c.1-.3.2-.5.4-.7l23.6-23.6c.6-.6 1.6-.6 2.2 0l7.9 7.9c.6.6.6 1.6 0 2.2L39 49.3c-.2.2-.5.4-.7.4l-11 2.7c-.2.1-.3.1-.4.1zm4.5-11.8l-2.3 8 7.9-1.9 22.2-22.6-5.6-5.6-22.2 22.1zM20.6 52.5h-9.4c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h9.4c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.6 1.6z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'contables\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M53.8 64H9.4c-2.6 0-4.8-2.1-4.8-4.8V14.8c0-2.6 2.1-4.8 4.8-4.8h3.2c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6H9.4c-.9 0-1.6.7-1.6 1.6v44.4c0 .9.7 1.6 1.6 1.6h44.5c.9 0 1.6-.7 1.6-1.6V14.8c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h3.2c2.6 0 4.8 2.1 4.8 4.8v44.4c-.1 2.7-2.2 4.8-4.9 4.8zm-9.5-47.6H18.9c-.9 0-1.6-.7-1.6-1.6 0-3.2 1.4-5.7 4.1-7 .9-.4 1.7-.7 2.4-.8.7-3.7 3.9-6.5 7.8-6.5s7.1 2.8 7.8 6.5c.7.1 1.6.4 2.4.8 2.6 1.3 4 3.7 4.1 6.9v.1c0 .9-.7 1.6-1.6 1.6zm-23.6-3.2h21.8c-.3-1.1-1-2-2-2.5C39.3 10 38 10 38 10c-.9 0-1.6-.7-1.6-1.6 0-2.6-2.1-4.8-4.8-4.8s-4.8 2.1-4.8 4.8c0 .9-.7 1.6-1.6 1.6 0 0-1.3 0-2.5.7-1 .5-1.7 1.4-2 2.5zM31.6 10c-.4 0-.8-.2-1.1-.5s-.5-.6-.5-1.1.2-.8.5-1.1c.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.3.3.5.7.5 1.1s-.2.9-.5 1.2c-.3.3-.7.4-1.1.4zm15.9 15.9H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm-6.4 9.5H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h25.4c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm6.4 6.4H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm0 6.3H15.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6zm-15.9 6.4H15.7c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h15.9c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'domiciliaciones\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M56.8 63.1c-.2 0-.5-.1-.7-.2l-5.5-2.8-5.5 2.9c-.4.2-.9.2-1.4 0l-5.5-2.8-5.5 2.8c-.4.2-.9.2-1.4 0l-5.5-2.8-5.5 2.8c-.4.2-.9.2-1.4 0l-5.5-2.8L7.9 63c-.5.2-1.1.2-1.5-.1-.5-.3-.7-.8-.7-1.3V5.8c0-.6.3-1.1.9-1.4l6.2-3.1c.4-.2.9-.2 1.4 0L19.6 4l5.5-2.8c.4-.2.9-.2 1.4 0L32 4l5.5-2.8c.4-.2.9-.2 1.4 0L44.4 4l5.5-2.8c.4-.2.9-.2 1.4 0l6.2 3.1c.5.3.9.8.9 1.4v55.8c0 .5-.3 1-.7 1.3-.3.2-.6.3-.9.3zm-18.6-6.2c.2 0 .5.1.7.2l5.5 2.8 5.5-2.8c.4-.2.9-.2 1.4 0l4 2V6.7l-4.7-2.3-5.5 2.8c-.4.2-.9.2-1.4 0l-5.5-2.8-5.5 2.8c-.4.2-.9.2-1.4 0l-5.5-2.8-5.5 2.8c-.4.2-.9.2-1.4 0l-5.5-2.8-4.7 2.3V59l4-2c.4-.2.9-.2 1.4 0l5.5 2.8 5.5-2.8c.4-.2.9-.2 1.4 0l5.5 2.8 5.5-2.8c.2 0 .5-.1.7-.1zm0-15.5H27.3v-3.1h10.9c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-4.7v-1.6c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v1.6h-4.7c-.9 0-1.6.7-1.6 1.6V43c0 .9.7 1.6 1.6 1.6h10.9v3.1H25.8c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h4.7v1.6c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-1.6h4.7c.9 0 1.6-.7 1.6-1.6V43c-.3-.9-1-1.6-1.8-1.6zm3.1-24.8H22.7c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h18.6c.9 0 1.6.7 1.6 1.6-.1.9-.8 1.6-1.6 1.6zm6.2 6.2h-31c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h31c.9 0 1.6.7 1.6 1.6-.1.9-.8 1.6-1.6 1.6zm0 6.2h-31c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6h31c.9 0 1.6.7 1.6 1.6s-.8 1.6-1.6 1.6z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'blanqueamiento\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><defs><path id="a" d="M3.7.5h56.5v63H3.7z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><path d="M58 12.7c-.9-3.3-3.5-6.5-7.3-9C46 .7 39.4.4 33.4 2.8l-.1.2c-.1 0-.2.1-.3.1-.5.2-.9.3-1.2.4-1 .4-1 .4-2.6-.1C24.5 2.1 18.6.7 14 2.3 7.8 4.5 2.3 11.8 4 23c.2 1.3.4 2.7.6 4 1.4 9.7 2.9 19.7 6.6 28.8l.1.3c.9 2.3 2.5 6.1 5.2 6.1h.2l.2-.1c2.5-1.1 3.4-3.5 4.1-5.2.5-1.2.9-2.4 1.3-3.5 1-2.9 1.9-5.7 3.6-8.2 1.3-1.9 4.8-6 9.2-3.3 3 1.8 3.9 5.3 4.8 8.8.3 1 .5 2 .8 3 1.3 4 3 8.2 5.7 8.4 1.4.1 2.7-.8 3.9-2.8 2.1-3.7 3-7.8 3.9-11.8l.3-1.4c.3-1.5.7-3.1 1.1-4.8 2.3-9.2 4.8-19.6 2.4-28.6zm-4.4 28c-.4 1.6-.8 3.2-1.1 4.8l-.3 1.4c-.8 3.8-1.7 7.8-3.7 11.2-.7 1.2-1.3 1.8-1.8 1.8-.5-.1-1.9-.8-3.8-7-.3-.9-.5-1.8-.8-2.8-1-3.7-2.1-7.9-5.8-10.1-4.1-2.4-8.7-.9-12.1 4-1.9 2.7-2.9 5.8-3.9 8.7-.4 1.1-.8 2.3-1.2 3.5-.7 1.8-1.3 3.2-2.7 3.9-1.2-.3-2.5-3.5-3-4.7l-.1-.4c-3.7-8.8-5.1-18.7-6.5-28.3-.2-1.4-.4-2.7-.6-4C5.1 15.4 7.3 7 14.7 4.4c1.2-.4 2.6-.6 4-.6 3.3 0 6.9.9 9.7 1.7 6.9 3.9 6.9 5.6 6.9 12.7v1.4c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-1.4c0-6.2 0-9.1-4.9-12.6.3-.1.7-.3 1.1-.4.1-.1.3-.2.5-.2l.2-.1c5.3-2.2 11.1-1.9 15.2.7 3.3 2.2 5.6 4.9 6.3 7.7 2.3 8.5-.1 18.5-2.3 27.4zm0 0" clip-path="url(#b)"></path><path d="M23.5 13.1h-1.7l-2.6-2.6V8.8c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v1.7l-2.6 2.6h-1.7c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h1.7l2.6 2.6v1.7c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-1.7l2.6-2.6h1.7c.6 0 1.1-.5 1.1-1.1-.1-.6-.5-1.1-1.1-1.1zm-5.4 2.8l-1.7-1.7 1.7-1.7 1.7 1.7-1.7 1.7zm0 0M51.5 32.5h-1.7l-2.6-2.6v-1.7c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v1.7l-2.6 2.6h-1.7c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h1.7l2.6 2.6V39c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-1.7l2.6-2.6h1.7c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm-5.4 2.8l-1.7-1.7 1.7-1.7 1.7 1.7-1.7 1.7zm0 0"></path></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'carillas\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M63.8 22.9c-.1-.3-.3-.5-.5-.6-20.4-10.4-28.5-6.7-31.1-4.6-2.5-2.1-10.7-5.8-31.1 4.6-.2.1-.4.3-.5.6s0 .6.1.8c.1.2 3 5.2 8.3 10.3 7 6.9 15 10.6 23.2 10.9 8.1-.3 16.1-4.1 23.2-10.9 5.3-5.1 8.2-10.1 8.3-10.3.1-.2.1-.5.1-.8zm-31.6 20C16.1 42.3 5.5 27.5 3 23.6c22.1-10.9 28.1-4.1 28.4-3.8.2.2.5.4.8.4s.6-.1.8-.4c.2-.3 6.3-7.2 28.4 3.8-2.6 3.9-13.2 18.7-29.2 19.3z"/><path d="M51.4 25.2c-.2-.4-.6-.7-1-.6-.1 0-12.3 1-18.3 1s-18.1-1-18.3-1c-.4 0-.9.2-1 .6-.2.4 0 .9.3 1.2.4.3 9.6 7.3 19 7.3s18.6-7 19-7.3c.3-.3.5-.8.3-1.2zm-19.3 6.5c-5.5 0-11.2-2.8-14.6-4.8 4.1.3 10.6.7 14.6.7 3.9 0 10.4-.4 14.6-.7-3.4 2-9.1 4.8-14.6 4.8zm8.2 12.8c-.4-.4-1-.5-1.4-.1-.9.8-3.4 1.6-6.8 1.6-3.6 0-6.1-.9-6.9-1.7-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 1.4 1.4 4.6 2.3 8.4 2.3 3.5 0 6.6-.8 8.1-2 .3-.4.4-1 0-1.5z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'cirugíaortognática\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M61.6 5.9c-.1-1.7-.9-3.2-2.1-4.3-2.3-1.9-5.9-1.7-8.1.5l-32.9 33c-.4.4-.6.8-.6 1.4s.2 1 .6 1.4c.4.4.4 1.1 0 1.5l-2.8 2.8c-.4.4-1.1.4-1.5 0-.8-.8-2-.8-2.7 0l-6.1 6.1c-2.1 2.1-3.2 4.8-3.2 7.7 0 2.9 1.1 5.6 3.2 7.7.2.2.4.3.7.3s.5-.1.7-.3L60 10.5c1-1.3 1.6-2.9 1.6-4.6zm-3.1 3.2L6 61.6C4.7 60 4 58 4 55.9c0-2.4.9-4.7 2.6-6.4l6.1-6.1c1.1 1.1 3 1.1 4.1 0l2.8-2.8c1.1-1.1 1.1-3 0-4.1l33.1-33c1.5-1.5 4-1.7 5.6-.4.9.7 1.4 1.8 1.5 2.9-.1 1.2-.5 2.3-1.3 3.1z"/><path d="M11.7 50.3l-4.3 4.3c-.4.4-.4 1 0 1.3.2.2.4.3.7.3.2 0 .5-.1.7-.3l4.3-4.3c.4-.4.4-1 0-1.3-.5-.4-1-.4-1.4 0zm3.5-3.5l-.7.7c-.4.4-.4 1 0 1.3.2.2.4.3.7.3s.5-.1.7-.3l.7-.7c.4-.4.4-1 0-1.3-.4-.4-1-.4-1.4 0zm9.5-11c-.4-.4-1-.4-1.3 0-.4.4-.4 1 0 1.3l1.4 1.4c.2.2.4.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.3l-1.5-1.4zm2.8-2.8c-.4-.4-1-.4-1.3 0-.4.4-.4 1 0 1.3l1.4 1.4c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.3L27.5 33zm2.8-2.8c-.4-.4-1-.4-1.3 0-.4.4-.4 1 0 1.3l1.4 1.4c.2.2.4.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.3l-1.5-1.4z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'higienebucodental\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><defs><path id="a" d="M6 2h53v61H6z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M8.1 9.3L10 52c.1 2.2 1.9 3.9 4.1 3.9h2.2l.6 4.5c.2 1.5 1.5 2.6 3 2.6h2.6c1.5 0 2.8-1.1 3-2.6l.6-4.5h2.2c2.2 0 4-1.7 4.1-3.9l1.9-42.7 1.9-4.7c.2-.6.1-1.3-.3-1.8s-1-.9-1.7-.9H8.1c-.6.1-1.3.4-1.7.9-.3.6-.4 1.3-.2 1.9l1.9 4.6zm6.6 25.3c1.2-.6 2.3-1.4 3.2-2.4 1.2-1.2 2.3-2.5 3.3-3.8 2.1-2.7 3.2-4 7.3-4 1.1 0 2.2.1 3.3.4l-.1 2.4c-3.4 1.1-5.1 3.3-6.6 5.3-1.6 2.1-3 4-6.4 4.6-2.4.4-4.9.3-7.2-.6v-.7c1-.3 2.1-.7 3.2-1.2zm8.9 25.5c-.1.5-.5.9-1 .9H20c-.5 0-.9-.4-1-.9l-.6-4.2h5.8l-.6 4.2zm7-8.2c-.1 1.1-1 2-2.1 1.9H14.1c-1.1 0-2-.8-2.1-1.9l-.6-13.2c1.5.4 3.1.7 4.6.7 1 0 1.9-.1 2.9-.3 4.2-.8 6-3.1 7.7-5.4 1.2-1.9 2.9-3.4 4.9-4.3l-.9 22.5zm4-48l-2 4.8v.4L32 22.7c-1.1-.2-2.2-.3-3.4-.3-5.1 0-6.7 2-8.9 4.8-1 1.3-2 2.5-3.2 3.7-.8.8-1.7 1.5-2.7 2-.8.4-1.6.7-2.5.9l-1.1-23.6h19.3c.6 0 1-.5 1-1 0-.6-.5-1-1-1H9.8L8.1 4l26.5-.1zm0 0" clip-path="url(#b)"/><path d="M45.7 41.8v17.1c0 2.2 1.8 4.1 4.1 4.1 2.2 0 4.1-1.8 4.1-4.1v-18c0-.6-.1-1.2-.4-1.7l-4.7-10.4v-.5h8.1c1.1 0 2-.9 2-2V8.1c0-1.1-.9-2-2-2h-8.1C48.8 3.9 47 2 44.7 2c-2.2 0-4.1 1.8-4.1 4.1v23.7c0 .6.1 1.2.4 1.7l4.7 10.3zM56.9 8.1v2h-5.1c-.6 0-1 .5-1 1 0 .6.5 1 1 1h5.1v6.1h-5.1c-.6 0-1 .5-1 1 0 .6.5 1 1 1h5.1v6.1h-8.1v-2h5.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-5.1v-6.1h5.1c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-5.1V8.1h8.1zM42.7 6c0-1.1.9-2 2-2s2 .9 2 2v23.1c0 .1 0 .3.1.4l4.8 10.6c.1.3.2.6.2.8v17.9c0 1.1-.9 2-2 2s-2-.9-2-2V41.6c0-.1 0-.3-.1-.4l-4.8-10.6c-.1-.3-.2-.6-.2-.8V6zm0 0"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'implantesdentales\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M41.7.6c-1.3 0-2.6.3-3.8.8-3.4 1.4-7.2 1.4-10.6 0-5-2.1-10.7.2-12.8 5.1-.5 1.2-.8 2.5-.8 3.8 0 4.1.9 8.1 2.7 11.7l1.5 5.1c.1.4.5.7 1 .7h3.2v5.3c0 .6.5 1.1 1.1 1.1h3.2v2.4l-3-.3-.4 2.2 3.3.4V43l-3-.3-.3 2.1 3.3.4v4.2l-3-.3-.3 2 3.3.4v4.2l-3-.3-.3 2 3.3.4 2.1 5.3c.2.4.5.7 1 .7h6.3c.4 0 .8-.3 1-.7l1.6-4 3.6.4.2-2.1-3.2-.4v-4.2l3 .3.2-2.1-3.3-.4v-4.2l3 .3.2-2.1-3.3-.4V40l3 .3.2-2.1-3.3-.4V34H42c.6 0 1.1-.5 1.1-1.1v-5.3h3.2c.5 0 .9-.3 1-.8l1.5-5.1c1.8-3.6 2.7-7.7 2.7-11.7 0-5-4.4-9.4-9.8-9.4zm-6.7 61h-4.9L28.7 58l7.4.8-1.1 2.8zm1.8-4.8l-8.4-.9v-4.2l8.4.9v4.2zm0-6.3l-8.4-.9v-4.2l8.4.9v4.2zm0-6.3l-8.4-.9V39l8.4.9v4.3zm0-6.3l-8.4-.9v-2.7h8.4v3.6zm4.2-5.7H24.2V28H41v4.2zm5.8-10.9c0 .1 0 .1-.1.2l-1.3 4.4H19.7l-1.3-4.4c0-.1 0-.1-.1-.2-1.7-3.4-2.6-7.1-2.6-10.9 0-4.2 3.4-7.7 7.7-7.7 1 0 2.1.2 3 .6 3.9 1.7 8.3 1.7 12.3 0 3.9-1.7 8.4.1 10.1 4 .4 1 .6 2 .6 3 0 3.9-.9 7.6-2.6 11zM-97.5-195c-4.1 2.2-6.7 6.4-6.8 11v2.3h3.9v-2.3c.1-3.2 2-6.1 4.8-7.6l-1.9-3.4z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'odontologíaconservadora\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><style>.st0{fill:none}</style><path class="st0" d="M18.2 37.6h2.5v24h-2.5z"/><circle class="st0" cx="19.5" cy="10.5" r="8.7"/><path d="M29.7 10.5C29.7 4.9 25.1.3 19.5.3S9.3 4.8 9.3 10.5c0 5.4 4.2 9.8 9.5 10.2v15.5h-2v27h5.5v-27h-2V20.7c5.2-.4 9.4-4.9 9.4-10.2zm-9 51.1h-2.5v-24h2.5v24zm-9.9-51.1c0-4.8 3.9-8.7 8.7-8.7 4.8 0 8.7 3.9 8.7 8.7 0 4.8-3.9 8.7-8.7 8.7-4.8 0-8.7-3.9-8.7-8.7z"/><path class="st0" d="M43.7 37.6h2.5v24h-2.5z"/><path d="M55.2 10.5C55.2 4.9 50.6.3 45 .3h-.1v1.5h.1c4.8 0 8.7 3.9 8.7 8.7 0 4.8-3.9 8.7-8.7 8.7h-.8v16.9h-2v27h5.5v-27h-2V20.7c5.3-.4 9.5-4.9 9.5-10.2zm-9 51.1h-2.5v-24h2.5v24z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'ortodoncia\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M23.6 55.7h-8.5c-9.4 0-9.6-8.4-9.6-8.5v-5.3c0-.3.3-5 2.1-9.9 2.4-6.7 6.5-10.3 11.7-10.3 5.3 0 9.3 3.5 11.7 10.3 1.8 4.9 2 9.7 2.1 9.9v5.4s-.1 8.4-9.5 8.4zm-4.2-31.8C8.8 23.9 7.7 41.8 7.7 42v5.2c0 .3.1 6.4 7.4 6.4h8.5c7.3 0 7.4-6.1 7.4-6.4v-5.3c0-.1-1.1-18-11.6-18z"/><path d="M49.1 55.7h-8.5c-9.4 0-9.6-8.4-9.6-8.5v-5.3c0-.3.3-5 2.1-9.9 2.4-6.7 6.5-10.3 11.7-10.3 5.3 0 9.3 3.5 11.7 10.3 1.8 4.9 2 9.7 2.1 9.9v5.4s-.1 8.4-9.5 8.4zm-4.3-31.8c-10.5 0-11.7 17.9-11.7 18.1v5.2c0 .3.1 6.4 7.4 6.4H49c7.3 0 7.4-6.1 7.4-6.4v-5.3c.1-.1-1-18-11.6-18z"/><path d="M32.7 38.7h-1.1c-.5 0-.9-.4-1-.9-1-5.2-3.8-14-11.1-14-6.7 0-9.6 7.1-10.9 13-.1.3-.3.6-.6.7-.3.1-.6.1-.9 0C3 35.6.4 31.4.4 27v-6.4C.3 14.3 5.5 9 11.9 9h40.3c6.4 0 11.7 5.2 11.7 11.7v6.4c0 4.5-2.6 8.6-6.7 10.5-.3.1-.6.1-.9 0-.3-.1-.5-.4-.6-.7-1.3-5.9-4.2-13-10.9-13-7.4 0-10.1 8.8-11.1 14-.1.5-.5.8-1 .8zM19.4 21.8c7.9 0 11.3 7.7 12.7 13.5 1.5-5.8 4.9-13.5 12.7-13.5 6 0 10.5 4.7 12.7 13.3 2.7-1.7 4.3-4.8 4.3-8v-6.4c0-5.3-4.3-9.5-9.6-9.5H11.9c-5.3 0-9.6 4.3-9.6 9.6v6.4c0 3.2 1.7 6.2 4.3 8 2.3-8.7 6.7-13.4 12.8-13.4z"/><path d="M17.2 47.2H13c-.6 0-1.1-.5-1.1-1.1v-8.5c0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1v8.5c0 .7-.5 1.1-1.1 1.1zM14 45.1h2.1v-6.4H14v6.4zm11.7 2.1h-4.2c-.6 0-1.1-.5-1.1-1.1v-8.5c0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1v8.5c0 .7-.5 1.1-1.1 1.1zm-3.2-2.1h2.1v-6.4h-2.1v6.4z"/><path d="M13 43H6.6c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1H13c.6 0 1.1.5 1.1 1.1-.1.6-.5 1.1-1.1 1.1zm19.1 0h-6.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h6.4c.6 0 1.1.5 1.1 1.1-.1.6-.5 1.1-1.1 1.1zm-10.6 0h-4.2c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1-.1.6-.5 1.1-1.1 1.1zm21.2 4.2h-4.2c-.6 0-1.1-.5-1.1-1.1v-8.5c0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1v8.5c0 .7-.5 1.1-1.1 1.1zm-3.2-2.1h2.1v-6.4h-2.1v6.4zm11.7 2.1H47c-.6 0-1.1-.5-1.1-1.1v-8.5c0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1v8.5c0 .7-.5 1.1-1.1 1.1zM48 45.1h2.1v-6.4H48v6.4z"/><path d="M38.5 43h-6.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h6.4c.6 0 1.1.5 1.1 1.1-.1.6-.6 1.1-1.1 1.1zm19.1 0h-6.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h6.4c.6 0 1.1.5 1.1 1.1-.1.6-.6 1.1-1.1 1.1zm-10.7 0h-4.2c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h4.2c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'periodoncia\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M51.9 13.2c-.9-2.8-2.6-4.7-5-5.3-1.3-.3-2.6-.1-3.8.1-1.1.2-2.1.4-3 .2-.8-.2-1.6-.9-2.4-1.6-1-.8-2-1.7-3.2-2-4.7-1.3-9.5 2.9-11.4 9.9-1.1 3.9-4.8 27 1.1 28.6 2 .5 3.4-2.5 5.7-7 1-2.1 3.8-7.7 4.8-7.4 1.4.4.9 6.3.6 9.4-.4 4.7-.7 7.8 1.3 8.3.2 0 .4.1.7.1 1.3 0 4-1.1 8.4-9.7 2.8-5.4 5.3-11.6 6.1-14.7.8-3.2.9-6.4.1-8.9zm-2.1 8.4c-.8 3-3.2 9.2-5.9 14.3-3.5 6.8-5.8 8.5-6.7 8.5-.4-.8-.1-4 .1-6.2.5-5.3.9-10.7-2.1-11.6-2.6-.7-4.7 3.6-7.2 8.5-1.1 2.2-2.7 5.4-3.5 5.9-2.6-1.2-1.7-18.1.5-26.1 1.5-5.8 5.4-9.4 8.9-8.5.8.2 1.6.9 2.4 1.6 1 .8 2 1.7 3.2 2 1.3.3 2.6.1 3.8-.1 1.1-.2 2.1-.4 2.9-.2 2.2.6 3.2 2.5 3.6 4 .8 2.3.8 5 0 7.9z"/><path d="M34.8 7.8c-3.4-.9-6.8 1.1-7.7 4.5-.1.6.2 1.1.7 1.3h.3c.5 0 .9-.3 1-.8.6-2.2 2.9-3.6 5.1-3 .6.2 1.1-.2 1.3-.7.2-.5-.2-1.1-.7-1.3zM63 39c-.3-.1-6.3-2.1-14.7.4-2.2.7-4.3 2.1-6.6 3.6-3.2 2.1-6.4 4.3-9.5 4.3-3.1 0-6.4-2.2-9.5-4.3-2.3-1.5-4.5-3-6.6-3.6-8.5-2.5-14.5-.5-14.8-.4-.4.1-.7.5-.7 1v22.4c0 .6.5 1.1 1.1 1.1h61c.6 0 1.1-.5 1.1-1.1V40c-.1-.5-.4-.9-.8-1zm-1.4 22.3H2.7V40.8c1.8-.4 6.6-1.2 12.7.7 1.9.6 3.9 1.9 6.1 3.4 3.4 2.3 6.9 4.6 10.7 4.6s7.3-2.3 10.7-4.6c2.2-1.4 4.2-2.8 6.1-3.4 6.1-1.8 10.9-1.1 12.7-.7l-.1 20.5z"/><path d="M22.3 53.3l-5.2-5.2c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l5.2 5.2c.2.2.5.3.7.3s.5-.1.7-.3c.5-.4.5-1.1.1-1.5z"/><path d="M22.3 48.1c-.4-.4-1.1-.4-1.5 0l-5.2 5.2c-.4.4-.4 1.1 0 1.5.2.2.5.3.7.3.3 0 .5-.1.7-.3l5.2-5.2c.5-.4.5-1 .1-1.5zM37 56.5l-5.2-5.2c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l5.2 5.2c.2.2.5.3.7.3.3 0 .5-.1.7-.3.5-.5.5-1.1.1-1.5z"/><path d="M37 51.3c-.4-.4-1.1-.4-1.5 0l-5.2 5.2c-.4.4-.4 1.1 0 1.5.2.2.5.3.7.3.3 0 .5-.1.7-.3l5.2-5.2c.5-.4.5-1.1.1-1.5z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'prótesisdentales\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M63.2 38.6l-10.2-3c-1.5-.4-3.1-.3-4.5.3.4-1.2.7-2.3.9-3.5.1-.6-.2-1.1-.8-1.3h-3.8L43.2 25c-.4-1.4-1.6-2.4-3.1-2.4H24.4c-1.5 0-2.7 1-3.1 2.4l-1.5 6.1h-3.6c-.6 0-1.1.5-1.1 1.1v.2c.3 1.2.6 2.4 1 3.5-1.4-.6-3-.7-4.6-.3l-10.2 3c-.5.1-.8.5-.8 1v23.3c0 .6.5 1.1 1.1 1.1H63c.6 0 1.1-.5 1.1-1.1V39.6c-.1-.5-.4-.9-.9-1zm-42.6-5.4c.5 0 .9-.3 1-.8l1.7-6.9c.1-.5.5-.8 1-.8H40c.5 0 .9.3 1 .8l1.4 5.5H23.8v2.1H47c-.3 1.4-.7 2.7-1.2 4l-.7 2c0 .1-.1.2-.1.3l-.9 15.7c-.1 1.4-1.2 2.4-2.6 2.3h-.3c-1.1-.2-1.9-1.1-2-2.2L37 40.4c-.2-1.3-.9-2.4-2-3.2-.8-.6-1.7-.9-2.7-.9-.3 0-.7 0-1 .1-2 .4-3.5 2.1-3.7 4.1l-2.2 14.9c-.2 1.3-1.4 2.2-2.7 2.1-1.2-.2-2.2-1.2-2.2-2.5l-.9-15.6c0-.1 0-.2-.1-.3l-.7-2c-.5-1.3-.9-2.6-1.2-4l3 .1zm41.3 28.6H2.6V40.4l9.5-2.7c2.1-.6 4.3.3 5.3 2.2l.8 15.3c0 2.5 2.1 4.5 4.6 4.5 2.3 0 4.2-1.7 4.5-3.9l2.2-14.9c.1-1.1 1-2.1 2.1-2.3 1.4-.3 2.8.6 3.1 2v.2l2.2 14.9c.3 2 1.8 3.6 3.8 4 2.5.4 4.8-1.3 5.3-3.8 0-.2 0-.3.1-.5l.9-15.5c1-1.9 3.3-2.8 5.3-2.2l9.5 2.7v21.4zM41.3.4c-1.2 0-2.4.2-3.5.7-3.5 1.5-7.5 1.5-11 0-4.5-2-9.8.2-11.8 4.7-.5 1.1-.7 2.3-.7 3.5 0 2.8.3 5.5.9 8.2.1.5.5.8 1 .8h32.2c.5 0 .9-.3 1-.8.6-2.7.9-5.4.9-8.2 0-4.9-4.1-8.9-9-8.9zm6.2 15.9H17c-.4-2.3-.7-4.6-.7-6.9 0-3.8 3.1-6.8 6.9-6.8.9 0 1.8.2 2.7.6 4 1.7 8.6 1.7 12.7 0 3.5-1.5 7.5.1 9 3.6.4.9.6 1.8.6 2.7-.1 2.2-.3 4.5-.7 6.8z"/><path d="M22.2 4.8c-2.2 1.2-3.6 3.5-3.7 6V12h2.1v-1.3c.1-1.8 1.1-3.4 2.6-4.2l-1-1.7z"/></g></svg>\n	</p>\n	<p *ngIf="name.svg == \'sedaciónconsciente\'">\n		<svg style="height: 3rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g stroke="none"><path d="M29.7 11.9h-5.1c-.6 0-1 .5-1 1s.5 1 1 1h4.1v21.3c0 .6.5 1 1 1 .6 0 1-.5 1-1V12.9c0-.5-.5-1-1-1z"/><path d="M34.8 26.3h-4.1c-.6 0-1 .5-1 1 0 .6.5 1 1 1h4.1c.6 0 1-.5 1-1 .1-.5-.4-1-1-1zM19.4 6.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm41.1 32c-.2-.8-.8-1.4-1.5-1.8L34.8 34.7c-.1-.1-.3-.1-.5-.1H22L10.8 18.3c-1-1.4-2.9-1.7-4.3-.8-1.4 1-1.7 2.9-.8 4.3l12.8 18.4c.2.3.5.4.8.4h13.8L56 52.5c.4.2.9.4 1.4.4.3 0 .6 0 .9-.1.8-.2 1.4-.8 1.8-1.5.5-.7.6-1.5.4-2.3zm-2.1 1.4c-.1.2-.3.4-.6.5-.2.1-.5.1-.8-.1l-23.2-12c-.1-.1-.3-.1-.5-.1H19.9l-12.5-18c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l11.5 16.7c.2.3.5.4.8.4H34L58 49c.2.1.4.3.5.6.1.3.1.6-.1.8z"/><path d="M45.1 23.2H34.8c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h10.3c.6 0 1-.5 1-1v-6.2c.1-.5-.4-1-1-1zm-1 6.2h-8.2v-4.1h8.2v4.1z"/><path d="M37.9 26.3c-.6 0-1 .5-1 1v5.1c0 .6.5 1 1 1 .6 0 1-.5 1-1v-5.1c.1-.5-.4-1-1-1zm4.1 0c-.6 0-1 .5-1 1v5.1c0 .6.5 1 1 1s1-.5 1-1v-5.1c.1-.5-.4-1-1-1zm-9.4 23.1L29 43.9l3.5-3.6c.3-.3.4-.7.2-1.1-.2-.4-.5-.6-.9-.6H19.4c-.3 0-.7.2-.8.5-.2.3-.2.7 0 1l5.1 10.3c.2.3.5.6.9.6h7.2c.4 0 .7-.2.9-.5.1-.4.1-.8-.1-1.1zm-7.4-.4L21 40.7h8.4L27 43.1c-.3.3-.4.9-.1 1.2l3 4.6h-4.7z"/><path d="M31.7 49H19.4c-.2 0-.5.1-.6.2l-9.3 7.2c-.3.3-.5.7-.3 1.1.1.4.5.7 1 .7h21.6c.6 0 1-.5 1-1V50c0-.6-.5-1-1.1-1zm-1 7.2H13.1l6.6-5.1h11v5.1z"/><path d="M62.6 56.2H1.9c-.6 0-1 .5-1 1s.5 1 1 1h60.7c.6 0 1-.5 1-1s-.4-1-1-1z"/></g></svg>\n	</p>\n\n	<p [class]="name.class" >{{ name.name }}</p>\n</button>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-button-icon/fb-button-icon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], FbButtonIconComponent);
    return FbButtonIconComponent;
}());

//# sourceMappingURL=fb-button-icon.js.map

/***/ }),

/***/ 800:
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
            selector: 'fb-button',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-button/fb-button.html"*/'<!-- Generated template for the FbButtonIconComponent component -->\n<button [class]="name.class">\n	<p [class]="name.class">{{ name.name }}</p>\n</button>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-button/fb-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FbButtonComponent);
    return FbButtonComponent;
}());

//# sourceMappingURL=fb-button.js.map

/***/ }),

/***/ 801:
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
            selector: 'fb-titulo-subtitulo',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-titulo-subtitulo/fb-titulo-subtitulo.html"*/'\n  <h1>{{ object.titulo }}</h1>\n  <h2>{{ object.subtitulo }}</h2>\n'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/fb-titulo-subtitulo/fb-titulo-subtitulo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FbTituloSubtituloComponent);
    return FbTituloSubtituloComponent;
}());

//# sourceMappingURL=fb-titulo-subtitulo.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
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

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('respuesta'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "respuesta", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/expandable/expandable.html"*/'<p #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded" [innerHTML]="respuesta"></p>'/*ion-inline-end:"/Users/isaaccubas/WEBS/App-fb/appfb/src/components/expandable/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 420,
	"./af.js": 420,
	"./ar": 421,
	"./ar-dz": 422,
	"./ar-dz.js": 422,
	"./ar-kw": 423,
	"./ar-kw.js": 423,
	"./ar-ly": 424,
	"./ar-ly.js": 424,
	"./ar-ma": 425,
	"./ar-ma.js": 425,
	"./ar-sa": 426,
	"./ar-sa.js": 426,
	"./ar-tn": 427,
	"./ar-tn.js": 427,
	"./ar.js": 421,
	"./az": 428,
	"./az.js": 428,
	"./be": 429,
	"./be.js": 429,
	"./bg": 430,
	"./bg.js": 430,
	"./bm": 431,
	"./bm.js": 431,
	"./bn": 432,
	"./bn.js": 432,
	"./bo": 433,
	"./bo.js": 433,
	"./br": 434,
	"./br.js": 434,
	"./bs": 435,
	"./bs.js": 435,
	"./ca": 436,
	"./ca.js": 436,
	"./cs": 437,
	"./cs.js": 437,
	"./cv": 438,
	"./cv.js": 438,
	"./cy": 439,
	"./cy.js": 439,
	"./da": 440,
	"./da.js": 440,
	"./de": 441,
	"./de-at": 442,
	"./de-at.js": 442,
	"./de-ch": 443,
	"./de-ch.js": 443,
	"./de.js": 441,
	"./dv": 444,
	"./dv.js": 444,
	"./el": 445,
	"./el.js": 445,
	"./en-au": 446,
	"./en-au.js": 446,
	"./en-ca": 447,
	"./en-ca.js": 447,
	"./en-gb": 448,
	"./en-gb.js": 448,
	"./en-ie": 449,
	"./en-ie.js": 449,
	"./en-il": 450,
	"./en-il.js": 450,
	"./en-nz": 451,
	"./en-nz.js": 451,
	"./eo": 452,
	"./eo.js": 452,
	"./es": 453,
	"./es-do": 454,
	"./es-do.js": 454,
	"./es-us": 455,
	"./es-us.js": 455,
	"./es.js": 453,
	"./et": 456,
	"./et.js": 456,
	"./eu": 457,
	"./eu.js": 457,
	"./fa": 458,
	"./fa.js": 458,
	"./fi": 459,
	"./fi.js": 459,
	"./fo": 460,
	"./fo.js": 460,
	"./fr": 461,
	"./fr-ca": 462,
	"./fr-ca.js": 462,
	"./fr-ch": 463,
	"./fr-ch.js": 463,
	"./fr.js": 461,
	"./fy": 464,
	"./fy.js": 464,
	"./gd": 465,
	"./gd.js": 465,
	"./gl": 466,
	"./gl.js": 466,
	"./gom-latn": 467,
	"./gom-latn.js": 467,
	"./gu": 468,
	"./gu.js": 468,
	"./he": 469,
	"./he.js": 469,
	"./hi": 470,
	"./hi.js": 470,
	"./hr": 471,
	"./hr.js": 471,
	"./hu": 472,
	"./hu.js": 472,
	"./hy-am": 473,
	"./hy-am.js": 473,
	"./id": 474,
	"./id.js": 474,
	"./is": 475,
	"./is.js": 475,
	"./it": 476,
	"./it.js": 476,
	"./ja": 477,
	"./ja.js": 477,
	"./jv": 478,
	"./jv.js": 478,
	"./ka": 479,
	"./ka.js": 479,
	"./kk": 480,
	"./kk.js": 480,
	"./km": 481,
	"./km.js": 481,
	"./kn": 482,
	"./kn.js": 482,
	"./ko": 483,
	"./ko.js": 483,
	"./ku": 484,
	"./ku.js": 484,
	"./ky": 485,
	"./ky.js": 485,
	"./lb": 486,
	"./lb.js": 486,
	"./lo": 487,
	"./lo.js": 487,
	"./lt": 488,
	"./lt.js": 488,
	"./lv": 489,
	"./lv.js": 489,
	"./me": 490,
	"./me.js": 490,
	"./mi": 491,
	"./mi.js": 491,
	"./mk": 492,
	"./mk.js": 492,
	"./ml": 493,
	"./ml.js": 493,
	"./mn": 494,
	"./mn.js": 494,
	"./mr": 495,
	"./mr.js": 495,
	"./ms": 496,
	"./ms-my": 497,
	"./ms-my.js": 497,
	"./ms.js": 496,
	"./mt": 498,
	"./mt.js": 498,
	"./my": 499,
	"./my.js": 499,
	"./nb": 500,
	"./nb.js": 500,
	"./ne": 501,
	"./ne.js": 501,
	"./nl": 502,
	"./nl-be": 503,
	"./nl-be.js": 503,
	"./nl.js": 502,
	"./nn": 504,
	"./nn.js": 504,
	"./pa-in": 505,
	"./pa-in.js": 505,
	"./pl": 506,
	"./pl.js": 506,
	"./pt": 507,
	"./pt-br": 508,
	"./pt-br.js": 508,
	"./pt.js": 507,
	"./ro": 509,
	"./ro.js": 509,
	"./ru": 510,
	"./ru.js": 510,
	"./sd": 511,
	"./sd.js": 511,
	"./se": 512,
	"./se.js": 512,
	"./si": 513,
	"./si.js": 513,
	"./sk": 514,
	"./sk.js": 514,
	"./sl": 515,
	"./sl.js": 515,
	"./sq": 516,
	"./sq.js": 516,
	"./sr": 517,
	"./sr-cyrl": 518,
	"./sr-cyrl.js": 518,
	"./sr.js": 517,
	"./ss": 519,
	"./ss.js": 519,
	"./sv": 520,
	"./sv.js": 520,
	"./sw": 521,
	"./sw.js": 521,
	"./ta": 522,
	"./ta.js": 522,
	"./te": 523,
	"./te.js": 523,
	"./tet": 524,
	"./tet.js": 524,
	"./tg": 525,
	"./tg.js": 525,
	"./th": 526,
	"./th.js": 526,
	"./tl-ph": 527,
	"./tl-ph.js": 527,
	"./tlh": 528,
	"./tlh.js": 528,
	"./tr": 529,
	"./tr.js": 529,
	"./tzl": 530,
	"./tzl.js": 530,
	"./tzm": 531,
	"./tzm-latn": 532,
	"./tzm-latn.js": 532,
	"./tzm.js": 531,
	"./ug-cn": 533,
	"./ug-cn.js": 533,
	"./uk": 534,
	"./uk.js": 534,
	"./ur": 535,
	"./ur.js": 535,
	"./uz": 536,
	"./uz-latn": 537,
	"./uz-latn.js": 537,
	"./uz.js": 536,
	"./vi": 538,
	"./vi.js": 538,
	"./x-pseudo": 539,
	"./x-pseudo.js": 539,
	"./yo": 540,
	"./yo.js": 540,
	"./zh-cn": 541,
	"./zh-cn.js": 541,
	"./zh-hk": 542,
	"./zh-hk.js": 542,
	"./zh-tw": 543,
	"./zh-tw.js": 543
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
webpackContext.id = 829;

/***/ })

},[546]);
//# sourceMappingURL=main.js.map