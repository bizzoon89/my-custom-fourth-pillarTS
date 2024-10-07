import Hero from '../components/Hero';

import { heroData } from '../mocks/contact';

const Contact = () => {
  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroContact'}
      />
    </>
  )
}

export default Contact;