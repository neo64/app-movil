import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController, Events, ActionSheetController, Platform } from 'ionic-angular';
import { ChatPage } from '../../pages/chat/chat';

// Proveedor de API
import { RestProvider } from "../../providers/rest/rest";

// Páginas para redirección
import { LoginPage } from "../../pages/login/login";
import { ProfilePage } from "../profile/profile";
import { ChangePasswordPage } from "../change-password/change-password";

import { DomSanitizer } from "@angular/platform-browser";

import { Camera, CameraOptions } from "@ionic-native/camera";

import { File } from "@ionic-native/file";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-mi-perfil",
  templateUrl: "mi-perfil.html"
})
export class MiPerfilPage {
  data: any = {}; // Array para almacenar los valores del perfil.
  loading: Loading; // Variable de tipo Loading para mostrar el ProgressBar cuando la página está cargando.
  loadingPresented = false; // Variable de tipo booleano para saber si el ProgressBar está o no ejecutandose.
  cameraImage: string; // Foto de la camara que se desea envíar
  existe = false; // Si existe la foto en memoria
  base64 = "";

  dPersonales = {
    name: "DATOS PERSONALES",
    svg: "citas",
    openPage: "perfil",
    class: "active btn-large",
    tipo: "page",
    gradiente: "fb-shadow-gradient1"
  };
  cPassword = {
    name: "CAMBIAR CONTRASEÑA",
    svg: "citas",
    openPage: "password",
    class: "btn-large",
    tipo: "page",
    gradiente: "fb-shadow-gradient1"
  };

  constructor(
    private platform: Platform,
    private file: File,
    private _CAMERA: Camera,
    public actionSheetCtrl: ActionSheetController,
    private domSanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    public events: Events,
    private alertCtrl: AlertController,
    public restProvider: RestProvider,
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.checkFileExistence(window.localStorage.getItem("idPac") + ".jpeg");
    this.showLoading(); // Mostramos el ProgressBar al iniciar la aplicación
    this.getProfile(); // Llamada a la funcion para obtener el perfil del paciente
    this.events.publish("user:logged");
  }

  openPage(page) {
    if (page == "perfil") this.navCtrl.push(ProfilePage);
    else if (page == "chat") this.navCtrl.push(ChatPage);
    else this.navCtrl.push(ChangePasswordPage);
  }

  /**
	* 	Función que selecciona si es desde galeria o camara
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  openChooseImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.translate.instant("CHAT.ELIGE_OPCION"),
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          text: this.translate.instant("CHAT.CAMARA"),
          role: "destructive",
          //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.selectImage(1);
          }
        },
        {
          text: this.translate.instant("CHAT.GALERIA"),
          role: "destructive",
          //icon: !this.plt.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.selectImage(0);
          }
        }
      ]
    });
    actionSheet.present();
  }

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

  getProfile() {
    this.restProvider
      .getProfile()
      .then(data => {
        if (typeof data != "undefined" && data["status"] == 1) {
          if (this.existe) data["data"]["Imagen"] = this.base64;

          this.data = data["data"];
          this.loading.dismiss();
        } else if (data.status == 401) {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            this.translate.instant("GENERICAS.ERROR_SIN_SESION")
          );
          this.navCtrl.setRoot(LoginPage);
        } else {
          this.showError(
            this.translate.instant("GENERICAS.ATENCION"),
            "<p>" + data["message"] + "<br/><br/>[Code: " + data["code"] + "]</p>"
          );
        }
      })
      .catch(e => {
        this.loading.dismiss();
        console.log(e);
      });
  }

  public getContentType(base64Data: any) {
    let block = base64Data.split(";");
    let contentType = block[0].split(":")[1];
    return contentType;
  }

  //here is the method is used to convert base64 data to blob data
  public base64toBlob(b64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 512;
    let byteCharacters = atob(b64Data.replace(/^data:image\/(png|jpeg|jpg);base64,/, ""));
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }

  /**
	* 	Función que guarda la imagen de perfil en el teléfono
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
    public writeFile(base64Data: any, folderName: string, fileName: any) {  
        let contentType = this.getContentType(base64Data);  
        let DataBlob 	= this.base64toBlob(base64Data, contentType);  
        let filePath 	= null;
		
		if (this.platform.is('ios')) {
			filePath = this.file.dataDirectory + folderName;
		} else {
			filePath = this.file.externalRootDirectory + folderName;
		}

        this.file.writeFile(filePath, fileName, DataBlob, contentType).then((success) => {  
            //console.log("File Writed Successfully", success);  
            //console.log(filePath + fileName);
            this.data.Imagen = base64Data;
            this.loading.dismiss();
        }).catch((err) => {  
			this.showError("ERROR", "Error Occured While Writing File");
			console.log(err);
			this.loading.dismiss();  
        })  
    }

    public checkFileExistence(fileName: string) {
		if (this.platform.is('ios')) {
			return this.file.checkFile(this.file.dataDirectory, fileName).then(() => {
				this.file.readAsDataURL(this.file.dataDirectory, fileName).then(result => {
					this.existe 		= true;
					this.base64 		= result;
					this.data.Imagen 	= result;
				}, (err) => {
					//console.log(err);
				});
			}, (error) => {
				//console.log(error);
			})
		} else {
			return this.file.checkFile(this.file.externalRootDirectory, fileName).then(() => {
					this.file.readAsDataURL(this.file.externalRootDirectory, fileName).then(result => {
						this.existe 		= true;
						this.base64 		= result;
						this.data.Imagen 	= result;
					}, (err) => {
						//console.log(err);
					});
			}, (error) => {
				//console.log(error);
			})
		}
  	}

  /**
	* 	Función que envía una imagen a Firebase
	*
	* 	@param None
	*
	* 	@author Jesús Río <jesusriobarrilero@gmail.com>
	*
	*/
  selectImage(x): Promise<any> {
    this.showLoading(this.translate.instant("MI_PERFIL.GUARDANDO_IMAGEN"));

    return new Promise(resolve => {
      let cameraOptions: CameraOptions = {
        sourceType: x,
        destinationType: this._CAMERA.DestinationType.DATA_URL,
        quality: 50,
        allowEdit: true,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        cameraDirection: 1,
        encodingType: this._CAMERA.EncodingType.JPEG
      };

      this._CAMERA
        .getPicture(cameraOptions)
        .then(data => {
          this.writeFile(
            "data:image/jpeg;base64," + data,
            "",
            window.localStorage.getItem("idPac") + ".jpeg"
          );
        })
        .catch(e => {
          if (e == 20) {
            this.showError(
              this.translate.instant("GENERICAS.ERROR"),
              this.translate.instant("MI_PERFIL.ERROR_ENVIO_IMG")
            );
          } else {
            this.showError(this.translate.instant("GENERICAS.ERROR"), e);
            this.loading.dismiss();
          }
        });
    }).catch(e => {
      this.showError(
        this.translate.instant("GENERICAS.ERROR"),
        this.translate.instant("MI_PERFIL.ERROR_ENVIO_IMG")
      );
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

  showLoading(txt = "Cargando información...") {
    this.loading = this.loadingCtrl.create({
      content: txt,
      dismissOnPageChange: false
    });
    this.loading.present();
    this.loadingPresented = true;
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
