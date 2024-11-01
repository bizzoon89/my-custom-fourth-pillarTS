import { HeroProps } from '../components/Hero/Hero';
import { JoinBoxProps } from '../components/JoinBox/JoinBox';
import { AboutBoxProps } from '../components/AboutBox';

export const heroData = {
  title: 'ABOUT US',
  text: 'We are the only strategic communications firm providing specialist corporate and financial PR advice to the music business internationally.',
} as HeroProps;

export const aboutData = {
  title: 'What we do',
  image: {
    src: 'images/imageAbout01.jpg',
    alt: 'What we do',
  },
  paragraphs: [
    'We have a unique blend of experience in music and international capital markets that no other PR firm offers.',
    'Our mission is to help organizations achieve their goals and deliver results that resonate with their audiences.We provide critical insight and valuable perspective to our clients, cutting through the complexity of the music business to deliver informed strategic communications advice.',
    'Clients immediately benefit from our combined expertise and expansive network of media contacts, stakeholders and opinion formers to provide a trusted service, which encompasses corporate PR, financial PR, internal communications, reputation management, and ESG and cultural strategy.',
  ],
} as AboutBoxProps;

export const joinBoxData = {
  title: 'Interested in joining our award winning team?',
  buttonText: 'Contact Us',
  url: '/contact',
} as JoinBoxProps;
