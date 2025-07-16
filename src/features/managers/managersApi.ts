import { api } from "@/services/api";

export interface Manager {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  imageUrl: string | null;
}

export interface ManagerCallRequestDTO {
  fullName: string;
  phone: string;
  email: string;
  city: string;
}

export const managerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getManagers: build.query<Manager[], void>({
      query: () => "/api/manager/",
    }),

    requestCall: build.mutation<
      string,
      { managerId: number; data: ManagerCallRequestDTO }
    >({
      query: ({ managerId, data }) => ({
        url: `/api/manager-call/${managerId}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetManagersQuery, useRequestCallMutation } = managerApi;
