import { Component } from "@angular/core";
import { RestProvider } from "../../providers/rest/rest";
import {
  NavController,
  Loading,
  ToastController,
  IonicPage,
  LoadingController,
  AlertController,
  Events,
  Platform
} from "ionic-angular";
import { HomePage } from "../../pages/home/home";
import { ChangePasswordPage } from "../../pages/change-password/change-password";
import { LoginTabPage } from "../../pages/login-tab/login-tab";
import { FCM } from "@ionic-native/fcm";
import { TranslateService } from "@ngx-translate/core";
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  registerCredentials = { email: "", password: "" }; // Array con los campos del formulario
  bCrearCuenta = {
    name: "Crear cuenta",
    svg: "",
    openPage: "Registro",
    class: "active login",
    tipo: "page",
    gradiente: ""
  };
  bIniciarSesion = {
    name: "Iniciar sesión",
    svg: "",
    openPage: "Login",
    class: "login",
    tipo: "page",
    gradiente: ""
  };

  constructor(
    public menuCtrl: MenuController,
    public platform: Platform,
    private fcm: FCM,
    private toastCtrl: ToastController,
    public events: Events,
    private nav: NavController,
    public restProvider: RestProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService
  ) {
    var timeNow = new Date(2100, 12, 31, 23, 59, 59, 0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.
    var expires = new Date(2100, 12, 31, 23, 59, 59, 0); // Obtengo una fecha en el futuro por si la API no devuelve fecha.

    //Quito el menú lateral
    this.menuCtrl.enable(false,'myMenu');

    // Compruebo si la fecha de expiración es posterior
    // a la fecha actual del sistema, si es así redirijo
    // a la página de home.
    this.restProvider.getTimeServer().then(data => {
      if (typeof data != "undefined" && data["status"] == 1) {
        timeNow = new Date(Number(data["timeStamp"]));
        expires = new Date(Number(data["expires"]));
      }

      if (expires > timeNow) {
        this.events.publish("user:logged");
        this.nav.setRoot(HomePage);
      }
    });
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

  openPage(page, tipo) {
    if (tipo === "page") {
      if (page == "Login") this.nav.push(LoginTabPage, { pageDefault: "0" });
      else if (page == "Registro") this.nav.push(LoginTabPage, { pageDefault: "1" });
      else this.presentToast(this.translate.instant("LOGIN.PAGINA_NO_DISPONIBLE"));
    } else if (tipo == "web") {
      window.open(page, "_system", "location=yes");
    } else {
      this.presentToast("La página '" + page + "' de tipo '" + tipo + "' no está disponible.");
    }
  }

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
  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000,
      position: "bottom",
      showCloseButton: true,
      closeButtonText: "OK"
    });
    toast.present();
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

  public login() {
    var user = this.registerCredentials.email;
    var pass = this.registerCredentials.password;

    if (user == "" || pass == "") return;

    this.showLoading();
    this.restProvider.login(user, pass).then(data => {
      if (typeof data != "undefined" && data["status"] == 1) {
        window.localStorage.setItem("idPac", data["idPac"]);
        window.localStorage.setItem("token", data["token"]);
        window.localStorage.setItem("expires", data["expires"]);

        this.events.publish("user:logged");

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

        if (data["isDefault"] == 1) this.nav.push(ChangePasswordPage, { first: true });
        else this.nav.setRoot(HomePage);
      } else {
        if (typeof data["code"] != "undefined")
          this.showError(
            this.translate.instant("GENERICAS.ERROR") + data["code"],
            this.translate.instant("LOGIN.ACCESO_DENEGADO")
          );
        else
          this.showError(
            this.translate.instant("GENERICAS.ERROR"),
            this.translate.instant("LOGIN.ACCESO_DENEGADO")
          );
      }
    });
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
      content: this.translate.instant("GENERICAS.CARGANDO_INFORMACION"),
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
  showError(title, text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present();
  }
}
