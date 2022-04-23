import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Family } from '../generated';

const baseUrl = 'http://localhost:4000/';

export const familyApiSlice = createApi({
  reducerPath: 'familyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    families: builder.query<Family[], void>({
      query: () => '/family',
    }),
  }),
});

export const { useFamiliesQuery } = familyApiSlice;
