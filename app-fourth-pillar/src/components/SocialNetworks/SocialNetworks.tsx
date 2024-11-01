import { v4 as uuidv4 } from 'uuid';

import { IImage } from '../../types';

import styles from './SocialNetworks.module.scss';

export interface ISocialLinks {
  url: string;
  ariaLabel: string;
  target: string;
  name: string;
  icon: IImage;
}

interface SocialNetworks {
  contentPosition?: boolean;
  socialLinkList: ISocialLinks[];
}

export const SocialNetworks = ({ contentPosition, socialLinkList }: SocialNetworks) => {
  return (
    <ul className={
      contentPosition
        ? `${styles.socialNetworks} ${styles.contentPosition}`
        : `${styles.socialNetworks}`
    }>
      {socialLinkList.map(social => (
        <li key={uuidv4()}>
          <a
            href={social.url}
            aria-label={social.ariaLabel}
            target={social.target}
          >
            <img
              src={social.icon.src}
              alt={social.icon.alt}
            />
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
