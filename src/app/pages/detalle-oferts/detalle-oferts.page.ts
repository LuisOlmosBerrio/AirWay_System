import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesApiServiceService } from 'src/app/core/services/services-api-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalle-oferts',
  templateUrl: './detalle-oferts.page.html',
  styleUrls: ['./detalle-oferts.page.scss'],
})
export class DetalleOfertsPage implements OnInit {

  id!: number;
  offer: any = null;
  veiculo: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ServicesApiServiceService
  ) {}

  async ngOnInit() {
    // Obtener el ID desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });

    // Llamada a la API para obtener los datos de la oferta
    try {
      const response = await this.apiService.get<any>(`${environment.URL_BASE}transport_offers/${this.id}`);
      if (response && response.offers && response.offers.length > 0) {
        this.offer = response.offers[0];
        const viculoresponse = await this.apiService.get<any>(`${environment.URL_BASE}vehicles/${this.offer.id_vehicle}`);
        this.veiculo = viculoresponse.Vehicles[0];
      } else {
        console.warn(`No se encontró información para el id: ${this.id}`);
      }
    } catch (error) {
      console.error('Error al obtener la información de la oferta:', error);
    }
  }
}
