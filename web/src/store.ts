import { configureStore } from '@reduxjs/toolkit';

import { familyApiSlice } from './api/familyApiSlice';

export const store = configureStore({
  reducer: {
    [familyApiSlice.reducerPath]: familyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(familyApiSlice.middleware),
});
