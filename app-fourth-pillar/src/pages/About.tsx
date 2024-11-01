import Hero from '../components/Hero';
import JoinBox from '../components/JoinBox';
import { AboutBox } from '../components/AboutBox';

import { heroData, joinBoxData, aboutData } from '../mocks/about';

export const About = () => {
  return (
    <>
      <Hero {...heroData} />
      <AboutBox {...aboutData} />
      <JoinBox
        {...joinBoxData}
        buttonColor={'btnWhite'}
      />
    </>
  )
}