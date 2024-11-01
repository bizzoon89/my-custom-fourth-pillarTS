import { Hero } from '../components/Hero';
import { InfoText } from '../components/InfoText';
import { AnimatedSquare } from '../components/AnimatedSquare';
import { ContactForm } from '../components/ContactForm';
import { CardList } from '../components/CardList';
import { ServiceCards } from '../components/CardList/ServiceCards';

import { useService } from '../hooks/useService';
import { EServiceSliceStatus } from '../types/serviceSliceType';

import { heroData, infoTextData } from '../mocks/home';

export const Home = () => {
  const { serviceList, serviceStatus } = useService();
  
  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroHome'}
      />
      <InfoText {...infoTextData}>
        <AnimatedSquare positionClass={'square01'} />
      </InfoText>
      <CardList
        titleSection={'Our services'}
        isLoading={serviceStatus === EServiceSliceStatus.Loading}
      >
        <ServiceCards posts={serviceList}></ServiceCards>
      </CardList>
      <ContactForm />
    </>
  );
};
