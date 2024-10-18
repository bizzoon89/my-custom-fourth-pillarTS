import { useState, useEffect } from 'react';

import Menu from '../Menu';
import Logo from '../Logo';
import ButtonThemeSwitch from '../ButtonThemeSwitch';
import LinkList from '../LinkList';

import { ILogo } from '../Logo/Logo';
import { IMenuItem } from '../Menu/Menu';
import { ILink } from '../../types';

import styles from './Header.module.scss';

export interface HeaderProps {
  logoData: ILogo;
  menuItems: IMenuItem[];
  addMenuItems: ILink[];
}

const Header = ({ logoData, menuItems, addMenuItems }: HeaderProps) => {

  const HEADER_MARGIN: number = 1

  const [navState, setNavState] = useState<boolean>(false);

  const handleNavToggle = (): void => {
    setNavState(!navState);
    if (navState) {
      document.body.style.overflow = 'auto';
      document.body.classList.remove(`${styles.navActive}`);
    } else {
      document.body.classList.add(`${styles.navActive}`);
      document.body.style.overflow = 'hidden';
    }
  }

  const isSticky = (): void => {
    const header = document.querySelector('header') as HTMLElement | null;
    
    const scrollTop: number = window.scrollY;
    const sticky = HEADER_MARGIN <= scrollTop;

    if (header) {
      if (sticky) {
        header.classList.add(`${styles.fixedHeader}`);
      } else {
        header.classList.remove(`${styles.fixedHeader}`);
      }
    }
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo {...logoData}/>
        <div className={styles.dropNav}>
          <Menu menuItems={menuItems}/>
          <LinkList
            classList={styles.addLink}
            linkItem={addMenuItems}
          />
          <ButtonThemeSwitch />
        </div>
        <button
          className={styles.navOpener}
          onClick={handleNavToggle}
          aria-expanded={navState}
          aria-haspopup='true'>
          <em>menu</em>
        </button>
      </div>
    </header>
  )
}

export default Header;