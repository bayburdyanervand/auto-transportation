export interface VinResponse {
  vin: string;
  make: string;
  model: string;
  modelYear: string;
  manufacturer: string;
  vehicleType: string;
  bodyClass: string;
  errorMessage: string | null;
}