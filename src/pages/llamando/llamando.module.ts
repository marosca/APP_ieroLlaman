import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlamandoPage } from './llamando';

@NgModule({
  declarations: [
    LlamandoPage,
  ],
  imports: [
    IonicPageModule.forChild(LlamandoPage),
  ],
})
export class LlamandoPageModule {}
