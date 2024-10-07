import Hero from '../components/Hero';
import JoinBox from '../components/JoinBox';

import { heroData, joinBoxData } from '../mocks/people';

const People = () => {
  return (
    <main className='main' id='main'>
      <Hero {...heroData} />
      <JoinBox
        {...joinBoxData}
        align={'textCenter'}
        buttonColor={'btnWhite'}
      />
    </main>
  )
}

export default People;