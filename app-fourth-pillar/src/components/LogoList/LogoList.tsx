import { v4 as uuidv4 } from 'uuid';

import styles from './LogoList.module.scss';

import { IIcon } from '../../types';

export interface LogoListProps {
  url: string;
  target: string;
  icon: IIcon;
}

interface ILogoList {
  logoList: LogoListProps[];
}

export const LogoList = ({ logoList }: ILogoList) => {
  return (
    <ul className={styles.logoList}>
      {logoList.map(item => (
        <li key={uuidv4()}>
          <a
            href={item.url}
            target={item.target}
          >
            <img
              src={item.icon.src}
              width={item.icon.width}
              height={item.icon.src}
              alt={item.icon.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};