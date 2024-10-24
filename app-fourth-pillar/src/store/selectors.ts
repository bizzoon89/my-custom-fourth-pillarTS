import { RootState } from '../store';

export const selectServiceList = (state: RootState) => state.services.serviceList;
export const selectClientList = (state: RootState) => state.clients.clientList;
export const selectNewsList = (state: RootState) => state.news.newsList;

export const selectServiceStatus = (state: RootState) => state.services.status;
export const selectClientsStatus = (state: RootState) => state.clients.status;
export const selectNewsStatus = (state: RootState) => state.news.status;
