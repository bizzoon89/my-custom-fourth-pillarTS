import { RootState } from '../store';

export const selectServiceList = (state: RootState) => state.services.serviceList;
export const selectClientList = (state: RootState) => state.clients.clientList;
export const selectNewsList = (state: RootState) => state.news.newsList;