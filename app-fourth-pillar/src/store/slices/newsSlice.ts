import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../services/getPosts';
import { _URL_NEWS } from '../../constants/apiUrl';

import { INewsSlice, INewsCards, ENewsSliceStatus } from '../../types/newsSliceType';

const initialState: INewsSlice = {
  newsList: [],
  status: ENewsSliceStatus.Loading,
};

export const fetchNews = createAsyncThunk<INewsCards[], number | undefined>(
  'news/fetchNews',
  async (limit = 3) => {
    return await request(`${_URL_NEWS}?_limit=${limit}`);
  }
);

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.newsList = [];
        state.status = ENewsSliceStatus.Loading;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsList = action.payload;
        state.status = ENewsSliceStatus.Success;
      })
      .addCase(fetchNews.rejected, state => {
        state.newsList = [];
        state.status = ENewsSliceStatus.Error;
      })
      .addDefaultCase(() => {});
  },
});

export default newsSlice.reducer;
