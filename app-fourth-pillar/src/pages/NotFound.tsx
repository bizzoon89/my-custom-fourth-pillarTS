import Hero from '../components/Hero';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <main className='main' id='main'>
      <Hero
        title={'404'}
      >
        <p>Page not found.</p>
        <Button
          url={'/'}
          buttonText={'Go back to Homepage'}
          buttonColor={'btnWhite'}
        />
      </Hero>
    </main>
  )
}

export default NotFound;