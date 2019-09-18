import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  AlertController,
  LoadingController,
  Events,
  Platform
} from "ionic-angular";
import { RestProvider } from "../../providers/rest/rest";
import { FCM } from "@ionic-native/fcm";
import { LoginPage } from "../../pages/login/login";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-change-password",
  templateUrl: "change-password.html"
})
export class ChangePasswordPage {
  isFirst = false; // Indica si es la primera vez que entra en la App, y debe cambiar la contraseña
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  data = { /*pass1: '', */ pass2: "", pass3: "" }; // Array con las tres contraseñas (antigua, 2 nuevas)
  bGuardar = {
    name: "",
    svg: "",
    openPage: "Login",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };
  tituloSubtitulo = {
    titulo: "",
    subtitulo: ""
  };

  constructor(
    public events: Events,
    private loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    private alertCtrl: AlertController,
    public platform: Platform,
    private fcm: FCM,
    public navCtrl: NavController,
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.bGuardar.name = translate.instant("CHANGE_PASSWORD.GUARDAR_CONTRASENA");
    this.tituloSubtitulo.titulo = translate.instant("CHANGE_PASSWORD.TITULO");
    this.tituloSubtitulo.subtitulo = translate.instant("CHANGE_PASSWORD.SUBTITULO");

    this.isFirst = navParams.get("first");
    if (this.isFirst) {
      this.tituloSubtitulo.titulo = translate.instant("CHANGE_PASSWORD.CREA_TU_CONTRASENA");
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
  actualizarPass() {
    this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación

    if (this.data.pass2 === "") {
      this.showError("ERROR", "El campo contraseña no puede estar vacio");
      return;
    }

    if (this.data.pass3 === "") {
      this.showError("ERROR", "El campo repetir contraseña no puede estar vacio");
      return;
    }

    if (this.data.pass2.length < 8) {
      this.showError("¡Atención!", "La contraseña debe tener un mínimo de 8 caracteres");
      return;
    }
    if (!this.validatePassword(this.data.pass2)) {
      this.showError("¡Atención!", "La contraseña debe incluir letras y números");
      return;
    }

    if (this.data.pass3 != this.data.pass2) {
      this.showError("ERROR", "La nuevas nuevas contraseñas deben ser iguales.");
      return;
    } else {
      this.restProvider
        .actualizarPass(/*this.data.pass1,*/ this.data.pass2, this.data.pass3)
        .then(data => {
          if (typeof data != "undefined" && data["status"] == 1) {
            if (data["error"] == 0) {
              //Si la contraseña se guarda bien llamo a show Error con el parametro true para que redirija a la pagina de login
              this.showError(
                this.translate.instant("GENERICAS.ATENCION"),
                "La contraseña ha sido cambiada con éxito",
                true
              );
            } else {
              this.showError(
                "¡Atención!",
                "<p>" + data["message"] + "<br/><br/>[Code: " + data["code"] + "]</p>"
              );
            }
          } else if (data.status == 401) {
            this.showError("¡Atención!", "Se ha perdido la sesión, por favor vuelva a iniciar.");
            this.navCtrl.setRoot(LoginPage);
          } else {
            this.showError(
              "¡Atención!",
              "<p>" + data["message"] + "<br/><br/>[Code: " + data["code"] + "]</p>"
            );
          }
        });
    }
  }

  /**
   * 	Función que muestra el ProgressBar cuando alguna acción
   *	se está ejecutando en primer plano.
   *
   * 	@param None
   *
   * 	@author Jesús Río <jesusriobarrilero@gmail.com>
   * 	@return None
   */

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando información...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

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
  showError(title, text, redirect = false) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: "OK",
          role: "OK",
          handler: () => {
            //Notifications
            if (this.platform.is("cordova")) {
              this.fcm.getToken().then(token => {
                //alert(token);
                //Compruebo si el token esta en la bbdd y si no lo guarda
                this.enviarTokenNotifications(token);
              });
              this.fcm.onTokenRefresh().subscribe(token => {
                this.enviarTokenNotifications(token);
              });
            }

            if (redirect) this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * 	Función que almacena el token de Firebase para las notificaciones.
   *
   * 	@param None
   *
   * 	@author Jesús Río <jesusriobarrilero@gmail.com>
   * 	@return None
   */
  enviarTokenNotifications(token) {
    this.restProvider.enviarTokenNotifications(token).then(data => {
      if (typeof data != "undefined" && data["status"] == 1) {
      } else if (data.status == 401) {
      } else {
        this.showError("ERROR", data["message"]);
      }
    });
  }

  validatePassword(password) {
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
      return false;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();

    //matchedCase.push("[A-Z]"); // Uppercase Alpabates
    matchedCase.push("[0-9]"); // Numbers
    matchedCase.push("[a-z,A-Z]"); // Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
        ctr++;
      }
    }

    switch (ctr) {
      case 0:
        return false;
      case 1:
        return false;
      case 2:
        return true;
      default:
        return false;
    }
  }
}
