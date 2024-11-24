import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedDate: string;

  constructor() {
    this.selectedDate = ''; // Inicializa la fecha seleccionada
  }

  openDatePopover() {
    // Aquí puedes manejar cualquier lógica adicional si es necesario
  }
}