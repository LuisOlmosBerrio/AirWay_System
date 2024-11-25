export interface Vuelos {
    offer:  Offer;
    status: number;
}

export interface Offer {
    company_id:      string;
    room_id:         number;
    price_per_night: number;
    available_from:  Date;
    available_until: Date;
    updated_at:      Date;
    created_at:      Date;
    id:              number;
}
