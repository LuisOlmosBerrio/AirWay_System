import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  
  public minDate!: string; // Fecha mínima (hoy)
  public maxDate!: string; // Fecha máxima (hoy + 6 meses)
  
  selectedDate: string;
  public vehicleType: string = ''; // Tipo de vehículo seleccionado
  public searchCriteria = {
    type: 'transportation',
    origin: '',
    destination: '',
    departure_date: '',
  };

  constructor(private readonly httpSrv: HttpService, private readonly router: Router) {
    this.selectedDate = '';
    const today = new Date();
    this.minDate = today.toISOString() // Fecha actual
    const sixMonthsLater = new Date(
      today.setMonth(today.getMonth() + 6)
    ).toISOString() // Fecha + 6 meses
    this.maxDate = sixMonthsLater;
  }

  openDatePopover() {
  

     
  }

  isFormValid(): boolean {
    // Validar que todos los campos estén llenos
    return (
      !!this.vehicleType &&
      !!this.searchCriteria.origin &&
      !!this.searchCriteria.destination &&
      !!this.searchCriteria.departure_date
    );
  }
  
  
  searchOffers() {
    // Validar que todos los campos requeridos estén llenos
    if (
      this.vehicleType &&
      this.searchCriteria.origin &&
      this.searchCriteria.destination &&
      this.searchCriteria.departure_date
    ) {
      // Redirigir a la página de ofertas pasando los datos
      this.router.navigate(['/ofertas'], {
        queryParams: {
          vehicleType: this.vehicleType,
          ...this.searchCriteria,
        },
      });
    } else {
      alert('Por favor complete todos los campos antes de buscar.');
    }
  }
}
