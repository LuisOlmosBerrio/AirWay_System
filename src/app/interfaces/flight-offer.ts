export interface IFlightOffer {
    id: number;
    id_vehicle: string;
    origin: string;
    destination: string;
    departure_date: string;
    arrival_date: string;
    departure_time: string;
    arrival_time: string;
    price: string;
    previous_price: string;
    additional_information: string | null;
    created_at: string | null;
    updated_at: string | null;
  }
  