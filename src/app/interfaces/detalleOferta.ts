interface detalleOferta {
    id: number;
    id_vehicle: string;
    origin: string;
    destination: string;
    departure_date: string; // Formato ISO 8601 (YYYY-MM-DD)
    arrival_date: string;   // Formato ISO 8601 (YYYY-MM-DD)
    departure_time: string; // Formato HH:mm:ss
    arrival_time: string;   // Formato HH:mm:ss
    price: string;          // Puede ser un número, pero se mantiene como string por el formato
    previous_price: string; // Igual que el precio actual
    additional_information?: string | null; // Puede ser opcional y nulo
    created_at?: Date | null; // Opcional y puede ser nulo
    updated_at?: Date | null; // Opcional y puede ser nulo
}