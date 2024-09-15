import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserData } from '../interfaces';
import { BASE_URL } from '../variables';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getUsers: builder.query<IUserData[], string>({
      query: users => `${users}`,
    }),
  }),
});

export const { useGetUsersQuery } = api;
