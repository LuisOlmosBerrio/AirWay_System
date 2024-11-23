import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { EstadisticCardComponent } from './components/estadistic-card/estadistic-card.component';

const COMPONENTS = [
  InputComponent,
  ButtomComponent,
  EstadisticCardComponent,
];

const MODULES = [
  CommonModule, 
  FormsModule, 
  IonicModule, 
  ReactiveFormsModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
