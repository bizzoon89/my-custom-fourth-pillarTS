import Hero from '../components/Hero';
import CardList from '../components/CardList';

import { ETypeCards } from '../types';

import { heroData } from '../mocks/clients';

const Clients = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <CardList
        type={ETypeCards.Client}
        limit={12}
      />
    </main>
  )
}

export default Clients;