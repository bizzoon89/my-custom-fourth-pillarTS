import { useState, useEffect } from 'react';

import Menu from "../Menu";
import Logo from "../Logo";
import LinkList from '../LinkList';

import { ILogo } from "../Logo/Logo";
import { IMenuItem } from "../Menu/Menu";
import { ILink } from "../../types";

import styles from "./Header.module.scss";

export interface HeaderProps {
  logoData: ILogo;
  menuItems: IMenuItem[];
  addMenuItems: ILink[];
}

const Header = ({ logoData, menuItems, addMenuItems }: HeaderProps) => {

  const [navState, setNavState] = useState<boolean>(false);

  const handleNavToggle = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
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
    const headerHeightWithMargin: number = 1; // Add your custom margin here if needed.
    const sticky = headerHeightWithMargin <= scrollTop;

    if (sticky) {
      header?.classList.add(`${styles.fixedHeader}`);
    } else {
      header?.classList.remove(`${styles.fixedHeader}`);
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
        </div>
        <a
          href="#"
          className={styles.navOpener}
          onClick={handleNavToggle}
          aria-expanded={`${navState ? true : false}`}
          aria-haspopup="true">
          <em>menu</em>
        </a>
      </div>
    </header>
  )
}

export default Header;