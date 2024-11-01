import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

import { IImage } from '../../types';

export interface ILogo extends IImage {
  url: string;
}

interface Logo extends ILogo {
  positionFooter?: boolean;
}

export const Logo = ({ positionFooter, url, src, alt }: Logo) => {
  const { logo, footerLogo } = styles;

  return (
    <div className={`${positionFooter ? footerLogo : logo}`}>
      <Link to={url}>
        <img
          src={src}
          alt={alt}
        />
      </Link>
    </div>
  );
};