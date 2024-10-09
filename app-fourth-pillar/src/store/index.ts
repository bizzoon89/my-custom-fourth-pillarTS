import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  //devTools: process.env.NODE_ENV !== 'production'
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch