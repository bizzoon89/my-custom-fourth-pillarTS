import Hero from '../components/Hero';
import JoinBox from '../components/JoinBox';
import AboutBox from '../components/AboutBox';

import { heroData, joinBoxData, aboutData } from '../mocks/about';

const About = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <AboutBox {...aboutData} />
      <JoinBox
        {...joinBoxData}
        buttonColor={'btnWhite'}
      />
    </main>
  )
}

export default About;