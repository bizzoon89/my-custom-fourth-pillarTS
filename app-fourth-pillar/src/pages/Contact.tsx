import Hero from '../components/Hero';

import { heroData } from '../mocks/contact';

const Contact = () => {
  return (
    <main className='main' id='main'>
      <Hero
        {...heroData}
        optionClass={'heroContact'}
      />
    </main>
  )
}

export default Contact;