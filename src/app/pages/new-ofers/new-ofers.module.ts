import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOfersPageRoutingModule } from './new-ofers-routing.module';

import { NewOfersPage } from './new-ofers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOfersPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NewOfersPage]
})
export class NewOfersPageModule {}
