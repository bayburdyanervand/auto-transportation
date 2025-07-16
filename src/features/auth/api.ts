import { api } from '../../services/api';
import {
  AuthRequest,
  AuthResponse,
  RegisterRequest,
  RegisterResponse,
} from './types';
import { EndpointBuilder } from '@reduxjs/toolkit/query/react';

export const authApi = api.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    authorize: builder.mutation<AuthResponse, AuthRequest>({
      query: (body) => ({
        url: '/api/auth/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/api/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAuthorizeMutation, useRegisterUserMutation } = authApi;
