import Hero from '../components/Hero';
import CardList from '../components/CardList';

import { heroData } from '../mocks/сlients';

const Clients = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <CardList
        type={'clientCards'}
        limit={12}
      />
    </main>
  )
}

export default Clients;