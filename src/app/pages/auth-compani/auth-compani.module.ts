import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthCompaniPageRoutingModule } from './auth-compani-routing.module';

import { AuthCompaniPage } from './auth-compani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthCompaniPageRoutingModule
  ],
  declarations: [AuthCompaniPage]
})
export class AuthCompaniPageModule {}
