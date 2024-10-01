import { HeaderProps } from "../components/Header/Header"

export const headerData = {
  logoData: {
    positionFooter: false,
    url: '/',
    img: '/images/logo.svg',
    alt: 'Fourth pillar',
  },
  menuItems: [
    {
      label: 'Home',
      url: '/',
      btnContact: false
    },
    {
      label: 'About',
      url: '/about',
      btnContact: false
    },
    {
      label: 'Contact',
      url: '/contact',
      btnContact: true
    }
  ],
  addMenuItems: [
    {
      url: '/privacy-policy',
      text: 'Privacy Policy'
    },
    {
      url: '/cookie-policy',
      text: 'Cookie Policy'
    }
  ]
} as HeaderProps;