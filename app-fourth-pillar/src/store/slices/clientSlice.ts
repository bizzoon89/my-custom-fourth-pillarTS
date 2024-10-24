import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../services/getPosts';
import { _URL_CLIENTS } from '../../constants/apiUrl';

import { IClientSlice, IClientCards, EClientSliceStatus } from '../../types/clientSliceType';

const initialState: IClientSlice = {
  clientList: [],
  status: EClientSliceStatus.Loading,
};

export const fetchClient = createAsyncThunk<IClientCards[], number | undefined>(
  'clients/fetchClient',
  async (limit = 3) => {
    return await request(`${_URL_CLIENTS}?_limit=${limit}`);
  }
);

const clientSlice = createSlice({
  name: 'clientSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchClient.pending, state => {
        state.clientList = [];
        state.status = EClientSliceStatus.Loading;
      })
      .addCase(fetchClient.fulfilled, (state, action) => {
        state.clientList = action.payload;
        state.status = EClientSliceStatus.Success;
      })
      .addCase(fetchClient.rejected, state => {
        state.clientList = [];
        state.status = EClientSliceStatus.Error;
      })
      .addDefaultCase(() => {});
  },
});

export default clientSlice.reducer;
