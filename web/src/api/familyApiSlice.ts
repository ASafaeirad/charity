import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:4000/';

export const familyApiSlice = createApi({
  reducerPath: 'familyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    families: builder.query<any, void>({
      query: () => '/family',
    }),
  }),
});

export const { useFamiliesQuery } = familyApiSlice;
