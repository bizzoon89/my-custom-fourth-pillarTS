import { FooterProps } from "../components/Footer/Footer"

export const footerData = {
  logoData: {
    positionFooter: true,
    url: '/',
    img: '/images/logo.svg',
    alt: 'Fourth pillar',
  },
  contactInfo: {
    text: 'Registered address:',
    address: '303 The Pill Box \n 115 Coventry Road London \n E2 6GH, United Kingdom.',
    title: 'Follow us',
    copyright: '© The Fourth Pillar'
  },
  footerMenu: [
    {
      url: '/about',
      text: 'About'
    },
    {
      url: '/services',
      text: 'Services'
    },
    {
      url: '/people',
      text: 'Our People'
    },
    {
      url: '/clients',
      text: 'Clients'
    },
    {
      url: '/contact',
      text: 'Contact'
    },
    {
      url: '/news',
      text: 'News'
    }
  ],
  servicesMenu: {
    title: 'Services',
    menuItems: [
      {
        url: '',
        text: 'Financial and investor communications'
      },
      {
        url: '',
        text: 'Media and stakeholder campaigns'
      },
      {
        url: '',
        text: 'Messaging, positioning and thought leadership'
      },
      {
        url: '',
        text: 'Reputation and issues management'
      },
      {
        url: '',
        text: 'ESG and cultural strategy'
      },
      {
        url: '',
        text: 'Media and presentation training'
      }
    ]
  },
  addFooterMenu: {
    title: 'Legal',
    menuItems: [
      {
        url: '/privacy-policy',
        text: 'Privacy Policy'
      },
      {
        url: '/cookie-policy',
        text: 'Cookie Policy'
      }
    ]
  }
} as FooterProps;

