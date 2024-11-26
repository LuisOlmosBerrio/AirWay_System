import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-buscarvuelos',
  templateUrl: './buscarvuelos.component.html',
  styleUrls: ['./buscarvuelos.component.scss'],
})
export class FlightSearchComponent implements OnInit {

  flights: any[] = [];  // Array para almacenar los vuelos obtenidos de la API

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // Llamamos al servicio para obtener los vuelos al cargar el componente
    this.httpService.getFlights().subscribe((data) => {
      this.flights = data;  // Asignamos los vuelos a la variable 'flights'
    });
  }
}
