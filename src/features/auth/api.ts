// features/auth/api.ts
import { api } from '../../services/api';
import { LoginRequest, AuthResponse } from './types';
import { EndpointBuilder } from '@reduxjs/toolkit/query';

export interface UserData {
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

export const authApi = api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body: LoginRequest) => ({
        url: '/api/auth/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, UserData>({
      query: (body: UserData) => ({
        url: '/api/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;