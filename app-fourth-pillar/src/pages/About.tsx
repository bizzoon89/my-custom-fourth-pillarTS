import Hero from '../components/Hero';

import { heroData } from '../mocks/about';

const About = () => {
  return (
    <>
      <Hero {...heroData} />
    </>
  )
}

export default About;