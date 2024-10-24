import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../services/getPosts';
import { _URL_SERVICE } from '../../constants/apiUrl';

import { IServiceSlice, IServiceCards, EServiceSliceStatus } from '../../types/serviceSliceType';

const initialState: IServiceSlice = {
  serviceList: [],
  status: EServiceSliceStatus.Loading,
};

export const fetchServices = createAsyncThunk<IServiceCards[], number | undefined>(
  'services/fetchService',
  async (limit = 6) => {
    return await request(`${_URL_SERVICE}?_limit=${limit}`);
  }
);

const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.serviceList = [];
        state.status = EServiceSliceStatus.Loading;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.serviceList = action.payload;
        state.status = EServiceSliceStatus.Success;
      })
      .addCase(fetchServices.rejected, state => {
        state.serviceList = [];
        state.status = EServiceSliceStatus.Error;
      })
      .addDefaultCase(() => {});
  },
});

export default serviceSlice.reducer;
