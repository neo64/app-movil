import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginInputPage } from './login-input';

@NgModule({
  declarations: [
    LoginInputPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginInputPage),
  ],
})
export class LoginInputPageModule {}
