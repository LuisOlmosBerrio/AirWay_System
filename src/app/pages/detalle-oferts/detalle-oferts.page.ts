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
  offerDetails: any = null; // Detalles de la oferta con vehículo asociado

  constructor(
    private route: ActivatedRoute,
    private apiService: ServicesApiServiceService
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      this.id = +params.get('id')!;
      await this.loadOfferDetails();
    });
  }

  private async loadOfferDetails() {
    try {
      const offerResponse = await this.apiService.get<any>(`${environment.URL_BASE}transport_offers/${this.id}`);
      const offerData = offerResponse?.offers?.[0];

      if (!offerData) {
        console.warn('No se encontró la oferta.');
        return;
      }

      const vehicleResponse = await this.apiService.get<any>(`${environment.URL_BASE}vehicles/${offerData.id_vehicle}`);
      const vehicleData = vehicleResponse?.Vehicles?.[0];

      this.offerDetails = {
        ...offerData,
        vehicle: vehicleData || {},
      };

      console.log('Detalles cargados:', this.offerDetails);
    } catch (error) {
      console.error('Error al cargar los detalles de la oferta:', error);
    }
  }

  buyOffer() {
    console.log('Compra iniciada para la oferta:', this.offerDetails?.id);
    // Lógica para procesar la compra
  }
}
