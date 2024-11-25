import { Component, OnInit } from '@angular/core';
import { ServicesApiServiceService } from 'src/app/core/services/services-api-service.service';
import { IFlightOffer } from 'src/app/interfaces/flight-offer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  public offers: IFlightOffer[] = []; // Ofertas iniciales
  public vehicleType: string = ''; // Tipo de vehículo seleccionado
  public searchCriteria = {
    type: 'transportation',
    origin: 'cartagena',
    destination: 'bogota',
    departure_date: '2024-11-25',
  };

  constructor(private apiService: ServicesApiServiceService) {}

  async ngOnInit() {
    await this.searchOffers();
    this.vehicleType = 'avion'; // Tipo de vehículo predeterminado
    await this.filterOffersByVehicleType(); // Filtrar ofertas al iniciar
  }

  // Buscar ofertas desde la API
  async searchOffers() {
    const url = `${environment.URL_BASE}search-offers`;
    try {
      const response = await this.apiService.post<any>(url, this.searchCriteria);
      this.offers = response.data || [];
      console.log('Ofertas recibidas:', this.offers);
    } catch (error) {
      console.error('Error fetching flight offers:', error);
    }
  }

  // Filtrar ofertas según el tipo de vehículo seleccionado y actualizar this.offers
  async filterOffersByVehicleType() {
    if (!this.vehicleType) {
      console.warn('No se ha seleccionado un tipo de vehículo.');
      return; // Si no hay tipo de vehículo seleccionado, no se filtra
    }

    const filteredOffers: IFlightOffer[] = [];
    for (const offer of this.offers) {
      try {
        // Consultar el vehículo asociado a la oferta
        const vehicleResponse = await this.apiService.get<any>(`${environment.URL_BASE}vehicles/${offer.id_vehicle}`);
        const vehicleData = vehicleResponse?.Vehicles?.[0];

        if (!vehicleData) {
          console.warn(`No se encontró información de vehículo para id: ${offer.id_vehicle}`);
          continue;
        }

        // Filtrar ofertas según el tipo de vehículo seleccionado
        if (vehicleData.vehicle_type.toLowerCase() === this.vehicleType.toLowerCase()) {
          filteredOffers.push(offer);
        }
      } catch (error) {
        console.error(`Error verificando vehículo para id: ${offer.id_vehicle}`, error);
      }
    }

    // Actualizar this.offers con las ofertas filtradas
    this.offers = filteredOffers;
    console.log('Ofertas filtradas:', this.offers);
  }
}