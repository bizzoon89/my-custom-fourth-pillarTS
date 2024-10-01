import { Link } from 'react-router-dom';

import styles from "./Logo.module.scss";

import { IImage } from '../../types';

export interface ILogo extends IImage {
  positionFooter: boolean;
  url: string;
}

const Logo = ({ positionFooter, url, img, alt }: ILogo) => {
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