import { HeroProps } from '../components/Hero/Hero';
import { JoinBoxProps } from '../components/JoinBox/JoinBox';
import { PeopleProps } from '../components/PeopleBox/PeopleBox';
import { PeopleListProps } from '../components/PeopleCard/PeopleCard';
import { LogoListProps } from '../components/LogoList/LogoList';

export const heroData = {
  title: 'Our \n people',
  text: 'Headquartered in London and operating globally, our talented team works with a range of companies across music, media and public and private capital',
} as HeroProps;

export const joinBoxData = {
  title: 'Let\'s work together',
  buttonText: 'Contact Us',
  url: '/contact'
} as JoinBoxProps;

export const peopleData = {
  title: 'Our combined expertise brings together a wealth of knowledge and experience gained in corporate communications, financial PR, journalism, politics and public affairs.',
  paragraphs: [
    'This complementary set of skills and experience allows our clients to benefit from a deep understanding of the music business and complex landscape for intellectual property rights, as well as a quality, personalised service delivered by a highly professional team that puts its clients first.',
    'Fourth Pillar was founded by Lynne Best and Claire Turvey to deliver a complete offering to meet the growing demand for specialist corporate and financial communications from across the music industry.'
  ]
} as PeopleProps;

export const peopleListData = [
  {
    name: 'Lynne Best',
    image: {
      src: 'images/image-card-01.jpg',
      alt: 'Lynne Best is a renowned music industry spokesperson and PR expert.',
    },
    link: {
      url: '/people/lynne-best',
      text: 'Read more'
    }
  },
  {
    name: 'Claire Turvey',
    image: {
      src: 'images/image-card-02.jpg',
      alt: 'Claire Turvey is a highly respected PR and communications consultant with a strong background in politics and public affairs.',
    },
    link: {
      url: '/people/claire-turvey',
      text: 'Read more'
    }
  }
] as PeopleListProps[];

export const logoListData = [
  {
    url: 'https://www.google.com/',
    target: '_blank',
    icon: {
      src: 'images/img-logo-01.png',
      alt: 'Logo 1',
      width: 176,
      height: 84
    }
  },
  {
    url: 'https://www.google.com/',
    target: '_blank',
    icon: {
      src: 'images/img-logo-02.png',
      alt: 'Logo 2',
      width: 112,
      height: 95
    }
  },
] as LogoListProps[];