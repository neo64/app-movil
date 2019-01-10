import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanEconomicoPage } from './plan-economico';

@NgModule({
  declarations: [
    PlanEconomicoPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanEconomicoPage),
  ],
})
export class PlanEconomicoPageModule {}
