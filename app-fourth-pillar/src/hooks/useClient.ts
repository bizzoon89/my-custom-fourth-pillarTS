import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../store';
import { selectClientList, selectClientsStatus } from '../store/selectors';
import { EClientSliceStatus } from '../types/clientSliceType';
import { fetchClient } from '../store/slices/clientSlice';

const LIMIT = 12;

export const useClient = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const clientList = useSelector(selectClientList);
  const clientStatus = useSelector(selectClientsStatus);

  useEffect(() => {
    if (clientStatus !== EClientSliceStatus.Success) {
      dispatch(fetchClient(LIMIT));
    }
  }, [dispatch, clientStatus]);

  return { clientList, clientStatus };
};
