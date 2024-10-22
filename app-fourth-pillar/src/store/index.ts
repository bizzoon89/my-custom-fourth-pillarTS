import { configureStore } from '@reduxjs/toolkit';

import serviceSlice from './slices/serviceSlice';

const store = configureStore({
  reducer: {
    services: serviceSlice,
  },
  //middleware: getDefaultMiddleware => getDefaultMiddleware(),
  //devTools: process.env.NODE_ENV !== 'production'
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch