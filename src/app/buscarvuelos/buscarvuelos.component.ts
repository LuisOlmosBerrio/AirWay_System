import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-buscarvuelos',
  templateUrl: './buscarvuelos.component.html',
  styleUrls: ['./buscarvuelos.component.scss'],
})
export class FlightSearchComponent implements OnInit {

  flights: any[] = []; 

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getFlights().subscribe((data) => {
      this.flights = data;  
    });
  }
}
