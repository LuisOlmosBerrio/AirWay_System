import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthCompaniPageRoutingModule } from './auth-compani-routing.module';

import { AuthCompaniPage } from './auth-compani.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
   SharedModule,
    AuthCompaniPageRoutingModule
  ],
  declarations: [AuthCompaniPage]
})
export class AuthCompaniPageModule {}
