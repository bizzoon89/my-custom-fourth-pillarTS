import Hero from '../components/Hero';
import CardList from '../components/CardList';

import { heroData } from '../mocks/services';

const Services = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <CardList
        type={'serviceCards'}
        limit={6}
      />
    </main>
  )
}

export default Services;