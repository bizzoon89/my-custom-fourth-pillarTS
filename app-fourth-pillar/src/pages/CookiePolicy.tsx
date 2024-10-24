import Hero from '../components/Hero';
import TextContent from '../components/TextContent';
import AnimatedSquare from '../components/AnimatedSquare';

import { heroData, contentData } from '../mocks/cookie-policy';

const CookiePolicy = () => {
  return (
    <>
      <Hero
        {...heroData}
      />
      <TextContent
        {...contentData}
      >
        <AnimatedSquare positionClass={'square04'} />
      </TextContent>
    </>
  )
}

export default CookiePolicy;