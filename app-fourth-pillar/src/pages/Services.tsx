import Hero from '../components/Hero';
import CardList from '../components/CardList';
import BlockquoteSlider from '../components/BlockquoteSlider';

import { ETypeCards } from '../types';

import { heroData, slideData } from '../mocks/services';

const Services = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <CardList
        type={ETypeCards.Service}
        limit={6}
      />
      <BlockquoteSlider slideData={slideData} />
    </main>
  )
}

export default Services;