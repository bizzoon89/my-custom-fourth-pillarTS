import Hero from '../components/Hero';
import CardList from '../components/CardList';

import { ETypeCards } from '../types';

import { heroData } from '../mocks/clients';

const Clients = () => {
  return (
    <>
      <Hero {...heroData} />
      <CardList
        type={ETypeCards.Client}
        limit={12}
      />
    </>
  )
}

export default Clients;