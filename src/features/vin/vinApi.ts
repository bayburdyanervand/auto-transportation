import { VinResponse } from "@/types/VinResponse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vinApi = createApi({
  reducerPath: "vinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/vin",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    decodeVin: builder.query<VinResponse, string>({
      query: (vin) => `/decode/${vin}`,
    }),
  }),
});

export const { useDecodeVinQuery } = vinApi;
