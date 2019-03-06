import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRegistroPage } from './login-registro';

@NgModule({
  declarations: [
    LoginRegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRegistroPage),
  ],
})
export class LoginRegistroPageModule {}
