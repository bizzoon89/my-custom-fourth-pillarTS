import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Founder from '../components/Founder/Founder';
import NotFound from './NotFound';

import { IFounder } from '../components/Founder/Founder';
  
import { heroData, dataFounders } from '../mocks/founders';

export interface IPerson {
  name: string;
  position: string;
}

interface FounderProps {
  userId: string;
  person: IPerson;
  post: IFounder;
}

export interface FoundersProps {
  [propName: string]: FounderProps;
} 

const Founders = () => {
  const { id } = useParams<{ id: string }>();

  const findFounderByUserId = (userId: string): FounderProps | undefined => {
    return Object.values(dataFounders).find(founder => founder.userId === userId);
  };
  
  let founder: FounderProps | undefined;

  if (id) {
    founder = findFounderByUserId(id);
  }
  
  if (!founder) {
    return <NotFound />;
  }
  
  return (
    <main className='main' id='main'>
      <Hero
        {...heroData}
        optionClass={'heroAlt'}
        heroPerson={founder.person}
      />
      <Founder {...founder.post} />
    </main>
  )
}

export default Founders;