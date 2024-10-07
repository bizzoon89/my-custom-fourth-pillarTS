import { Link } from 'react-router-dom';

import styles from "./Logo.module.scss";

import { IImage } from '../../types';

export interface ILogo extends IImage {
  url: string;
}

interface Logo extends ILogo {
  positionFooter?: boolean;
}

const Logo = ({ positionFooter, url, img, alt }: Logo) => {
  const { logo, footerLogo } = styles;

  return (
    <div className={`${positionFooter ? footerLogo : logo}`}>
      <Link to={url} >
        <img src={img} alt={alt} />
      </Link>
    </div>
  )
}

export default Logo;