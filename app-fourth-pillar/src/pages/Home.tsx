import { useState } from 'react';
import Hero from '../components/Hero';
import InfoText from '../components/InfoText';
import AnimatedSquare from '../components/AnimatedSquare';

import { heroData, infoTextData } from '../mocks/home';

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroHome'}
      />
      <InfoText {...infoTextData}>
        <AnimatedSquare positionClass={'square01'} />
      </InfoText>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default Home;