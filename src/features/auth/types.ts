export interface AuthState {
  token: string | null;
}

export interface AuthResponse {
  token: string;
  role : string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  city: string;
  phone: string;
  services: string[];
  experienceLevel: string;
}

export interface RegisterResponse {
  message: string;
}
