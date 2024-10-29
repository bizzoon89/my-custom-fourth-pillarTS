import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

import { heroData } from '../mocks/contact';

const Contact = () => {
  return (
    <>
      <Hero
        {...heroData}
        optionClass={'heroContact'}
      />
      <ContactForm />
    </>
  );
}

export default Contact;