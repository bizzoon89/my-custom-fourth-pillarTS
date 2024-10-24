import { HeaderProps } from '../components/Header/Header';

export const headerData = {
  logoData: {
    url: '/',
    src: '/images/logo.svg',
    alt: 'Fourth pillar',
  },
  menuItems: [
    {
      label: 'About',
      url: '/about',
      btnContact: false,
    },
    {
      label: 'Services',
      url: '/services',
      btnContact: false,
    },
    {
      label: 'Our People',
      url: '/people',
      btnContact: false,
    },
    {
      label: 'Clients',
      url: '/clients',
      btnContact: false,
    },
    {
      label: 'News',
      url: '/news',
      btnContact: false,
    },
    {
      label: 'Contact',
      url: '/contact',
      btnContact: true,
    },
  ],
  addMenuItems: [
    {
      url: '/privacy-policy',
      text: 'Privacy Policy',
    },
    {
      url: '/cookie-policy',
      text: 'Cookie Policy',
    },
  ],
} as HeaderProps;
