import { useState } from 'react';

import Hero from '../components/Hero';
import InfoText from '../components/InfoText';
import AnimatedSquare from '../components/AnimatedSquare';
import ContactForm from '../components/ContactForm';
import CardList from '../components/CardList';

import { heroData, infoTextData } from '../mocks/home';

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <main className='main' id='main'>
      <Hero
        {...heroData}
        optionClass={'heroHome'}
      />
      <InfoText {...infoTextData}>
        <AnimatedSquare positionClass={'square01'} />
      </InfoText>
      <CardList
        titleSection={'Our services'}
        type={'serviceCards'}
        limit={6}
      />
      <ContactForm />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </main>
  )
}

export default Home;