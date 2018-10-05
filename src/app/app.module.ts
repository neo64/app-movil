import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { Vibration } from '@ionic-native/vibration';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ConsultarCitas } from '../pages/ConsultarCitas/ConsultarCitas';
import { PedirCitaPage } from '../pages/pedir-cita/pedir-cita';
import { TabConsultarCitas } from '../pages/tabConsultarCitas/tabConsultarCitas';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ConsultarCitasFuturasPage } from '../pages/consultar-citas-futuras/consultar-citas-futuras';
import { Calendar } from '@ionic-native/calendar';
import { PopoverPage } from '../pages/popover/popover';
import { ChatPage } from '../pages/chat/chat';
import { DocFirmadosPage } from '../pages/doc-firmados/doc-firmados';
//import { AccesoResultadosPage } from '../pages/acceso-resultados/acceso-resultados';
import { ProfilePage } from '../pages/profile/profile';
import { EmojiProvider } from '../providers/emoji/emoji';
import { EmojiPickerComponentModule } from "../components/emoji-picker/emoji-picker.module";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { FCM } from '@ionic-native/fcm';
import { Camera } from '@ionic-native/camera';

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultarCitas,
	PedirCitaPage,
    TabConsultarCitas,
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
	LoginPage,
	DocFirmadosPage,
	ProfilePage,
//	AccesoResultadosPage,
	ChatPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	EmojiPickerComponentModule,
	IonicImageViewerModule,
    IonicModule.forRoot(MyApp),	
  ],
  exports: [
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
    HomePage,
    ConsultarCitas,
	PedirCitaPage,
	ConsultarCitasFuturasPage,
	ChangePasswordPage,
	PopoverPage,
    TabConsultarCitas,
	DocFirmadosPage,
	ProfilePage,
//	AccesoResultadosPage,
	ChatPage
  ],
  providers: [
	NativeStorage ,
	FCM,
	EmojiProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
	Calendar,
	Vibration,
	File,
	Camera,
    FileOpener
	
  ]
})
export class AppModule {}
