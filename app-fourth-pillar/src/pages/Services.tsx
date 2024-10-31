import Hero from '../components/Hero';
import CardList from '../components/CardList';
import BlockquoteSlider from '../components/BlockquoteSlider';

import { heroData, slideData } from '../mocks/services';
import { AppDispatch } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { selectServiceList, selectServiceStatus } from '../store/selectors';
import { useEffect } from 'react';
import { EServiceSliceStatus } from '../types/serviceSliceType';
import { fetchServices } from '../store/slices/serviceSlice';
import ServiceCards from '../components/CardList/ServiceCards';

const LIMIT = 6

const Services = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const serviceList = useSelector(selectServiceList)
  const serviceStatus = useSelector(selectServiceStatus)

  useEffect(() => {
    if (
      serviceStatus !== EServiceSliceStatus.Success
    ) {
      dispatch(fetchServices(LIMIT))
    }
  }, [dispatch, serviceStatus])
  
  return (
    <>
      <Hero {...heroData} />
      <CardList isLoading={serviceStatus === EServiceSliceStatus.Loading}>
        <ServiceCards posts={serviceList} />
      </CardList>
      <BlockquoteSlider slideData={slideData} />
    </>
  )
};

export default Services;
