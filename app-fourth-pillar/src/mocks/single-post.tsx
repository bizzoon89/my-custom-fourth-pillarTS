import { ISocialLinks } from '../components/SocialNetworks';

export const socialLinkData = [
  {
    url: 'https://www.linkedin.com/company/the-fourth-pillar',
    ariaLabel: 'Go to linkedin page',
    target: '_blank',
    name: 'Instagram',
    icon: {
      src: '/images/linkedin.svg',
      alt: 'LinkedIn',
    },
  },
  {
    url: 'https://mailto:test@test.com',
    ariaLabel: 'Go to mail',
    target: '_self',
    name: 'mail',
    icon: {
      src: '/images/mail.svg',
      alt: 'mail',
    },
  },
] as ISocialLinks[];
