import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleOfertsPageRoutingModule } from './detalle-oferts-routing.module';

import { DetalleOfertsPage } from './detalle-oferts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleOfertsPageRoutingModule
  ],
  declarations: [DetalleOfertsPage]
})
export class DetalleOfertsPageModule {}
