import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../store';
import { selectServiceList, selectServiceStatus } from '../store/selectors';
import { EServiceSliceStatus } from '../types/serviceSliceType';
import { fetchServices } from '../store/slices/serviceSlice';

const LIMIT = 6;

export const useService = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const serviceList = useSelector(selectServiceList);
  const serviceStatus = useSelector(selectServiceStatus);

  useEffect(() => {
    if (serviceStatus !== EServiceSliceStatus.Success) {
      dispatch(fetchServices(LIMIT));
    }
  }, [dispatch, serviceStatus]);
  
  return { serviceList, serviceStatus };
};
