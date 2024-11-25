import { Component, OnInit, Input } from '@angular/core';
import { IFlightOffer } from 'src/app/interfaces/flight-offer';


@Component({
  selector: 'app-ofercard',
  templateUrl: './ofercard.component.html',
  styleUrls: ['./ofercard.component.scss'],
})
export class OfercardComponent implements OnInit {

  @Input() offer: IFlightOffer | null = null;  // Recibimos una sola oferta

  constructor() {}

  ngOnInit() {}

}
