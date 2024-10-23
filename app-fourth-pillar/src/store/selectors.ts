import { RootState } from '../store';

export const selectServiceList = (state: RootState) => state.services.serviceList;