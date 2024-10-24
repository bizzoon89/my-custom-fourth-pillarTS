import { configureStore } from '@reduxjs/toolkit';

import serviceSlice from './slices/serviceSlice';
import clientSlice from './slices/clientSlice';
import newsSlice from './slices/newsSlice';

const store = configureStore({
  reducer: {
    services: serviceSlice,
    clients: clientSlice,
    news: newsSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
