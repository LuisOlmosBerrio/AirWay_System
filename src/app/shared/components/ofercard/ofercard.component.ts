import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IFlightOffer } from 'src/app/interfaces/flight-offer';


@Component({
  selector: 'app-ofercard',
  templateUrl: './ofercard.component.html',
  styleUrls: ['./ofercard.component.scss'],
})
export class OfercardComponent  {

  @Input() offer: IFlightOffer | null = null;  

  constructor(private router: Router) {}

  goToDetalle(id: number){
    this.router.navigate([`detalle-oferts/${id}`]);
  }
}
