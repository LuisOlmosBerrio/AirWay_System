import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CarruselComponent } from 'src/app/carrusel/carrusel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, HttpClientModule ],
  declarations: [HomePage, CarruselComponent],
})
export class HomePageModule {}
