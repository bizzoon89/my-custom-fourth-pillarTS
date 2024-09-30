import { HeaderProps } from "../components/Header/Header"

export const headerData = {
  logoData: {
    positionFooter: false,
    url: '/',
    img: '/images/logo.svg',
    alt: 'Fourth pillar',
  },
  menuData: [
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
  addMenuData: [
    {
      label: 'Privacy Policy',
      url: '/privacyPolicy'
    },
    {
      label: 'Cookie Policy',
      url: '/cookiepolicy'
    }
  ]
} as HeaderProps;