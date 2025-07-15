// src/features/auth/api/authApi.ts
import { api } from '../../../services/api'

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({
        url: 'api/auth/login',
        method: 'POST',
        body,
      }),
    }),
    getMe: builder.query<any, void>({
      query: () => 'user',
    }),
  }),
})

export const { useLoginMutation, useGetMeQuery } = authApi
