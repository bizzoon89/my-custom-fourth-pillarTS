import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Founder from '../components/Founder/Founder';
import { NotFound } from './NotFound';

import { IFounder } from '../components/Founder/Founder';
  
import { heroData, dataFounders } from '../mocks/founders';

export interface IPerson {
  name: string;
  position: string;
}

export interface FounderProps {
  userId: string;
  person: IPerson;
  post: IFounder;
}

export const Founders = () => {
  const { id } = useParams<{ id: string }>();

  const findFounderByUserId = (userId: string): FounderProps | undefined => {
    return dataFounders.find(founder => founder.userId === userId);
  };
  
  const founder = id ? findFounderByUserId(id) : undefined;
  
  if (!founder) {
    return <NotFound />;
  }
  
  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroAlt'}
        heroPerson={founder.person}
      />
      <Founder {...founder.post} />
    </>
  )
}