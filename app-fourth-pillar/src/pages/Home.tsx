import Hero from '../components/Hero';
import InfoText from '../components/InfoText';
import AnimatedSquare from '../components/AnimatedSquare';
import ContactForm from '../components/ContactForm';
import CardList from '../components/CardList';

import { ETypeCards } from '../types';

import { heroData, infoTextData } from '../mocks/home';

const Home = () => {
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
        type={ETypeCards.Service}
        limit={6}
      />
      <ContactForm />
    </main>
  )
}

export default Home;