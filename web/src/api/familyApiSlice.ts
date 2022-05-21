import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { CreateFamilyDto, Family } from '../generated';

const baseUrl = 'http://localhost:4000/';

enum Tags {
  Family = 'Families',
}

const tags = {
  family: ({ id }: Family) => ({ type: Tags.Family, id } as const),
  familyList: () => ({ type: Tags.Family, id: 'LIST' } as const),
};

export const familyApiSlice = createApi({
  reducerPath: 'familyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [Tags.Family],
  endpoints: (build) => ({
    getFamilies: build.query<Family[], void>({
      query: () => 'family',
      providesTags: (result) =>
        result
          ? [...result.map(tags.family), tags.familyList()]
          : [tags.familyList()],
    }),
    createFamily: build.mutation<Family, CreateFamilyDto>({
      query: (body) => ({ url: `family`, method: 'POST', body }),
      invalidatesTags: [tags.familyList()],
    }),
  }),
});

export const { useGetFamiliesQuery, useCreateFamilyMutation } = familyApiSlice;
