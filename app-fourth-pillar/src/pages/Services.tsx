import { Hero } from '../components/Hero';
import { CardList } from '../components/CardList';
import { BlockquoteSlider } from '../components/BlockquoteSlider';
import { ServiceCards } from '../components/CardList/ServiceCards';

import { useService } from '../hooks/useService';
import { EServiceSliceStatus } from '../types/serviceSliceType';

import { heroData, slideData } from '../mocks/services';

export const Services = () => {
  const { serviceList, serviceStatus } = useService();

  return (
    <>
      <Hero {...heroData} />
      <CardList
        isLoading={serviceStatus === EServiceSliceStatus.Loading}
      >
        <ServiceCards posts={serviceList}></ServiceCards>
      </CardList>
      <BlockquoteSlider slideData={slideData} />
    </>
  );
};
