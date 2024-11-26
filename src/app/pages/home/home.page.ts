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
  
  public minDate!: string; 
  public maxDate!: string; 
  
  selectedDate: string;
  public vehicleType: string = ''; 
  public searchCriteria = {
    type: 'transportation',
    origin: '',
    destination: '',
    departure_date: '',
  };

  onDateChange(event: any) {
    const selectedDate = event.detail.value; 
    this.searchCriteria.departure_date = selectedDate.split('T')[0]; 
  }
  

  constructor(private readonly httpSrv: HttpService, private readonly router: Router) {
    this.selectedDate = '';
    const today = new Date();
    this.minDate = today.toISOString() 
    const sixMonthsLater = new Date(
      today.setMonth(today.getMonth() + 6)
    ).toISOString() 
    this.maxDate = sixMonthsLater;
  }

  isFormValid(): boolean {
   
    return (
      !!this.vehicleType &&
      !!this.searchCriteria.type &&
      !!this.searchCriteria.origin &&
      !!this.searchCriteria.destination &&
      !!this.searchCriteria.departure_date
    );
  }
  
  
  searchOffers() {
   
    if (
      this.vehicleType &&
      this.searchCriteria.type &&
      this.searchCriteria.origin &&
      this.searchCriteria.destination &&
      this.searchCriteria.departure_date
    ) {
      
      if(this.vehicleType==='hotel'){
        this.searchCriteria.type = 'hotel'
      }
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
