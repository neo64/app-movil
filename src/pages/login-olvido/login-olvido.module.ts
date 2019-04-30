import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOlvidoPage } from './login-olvido';

@NgModule({
  declarations: [
    LoginOlvidoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOlvidoPage),
  ],
})
export class LoginOlvidoPageModule {}
