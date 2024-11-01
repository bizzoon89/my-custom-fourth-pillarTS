import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

interface IButton {
  url: string;
  buttonText: string;
  buttonColor?: string;
}

export const Button = ({ url, buttonText, buttonColor }: IButton) => {
  return (
    <Link
      to={url}
      className={buttonColor ? `${styles.btn} ${styles.btnArrow} ${styles[buttonColor]}` : `${styles.btn} ${styles.btnArrow}`}
    >
      {buttonText}
    </Link>
  );
};
