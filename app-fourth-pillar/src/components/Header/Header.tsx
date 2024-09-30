import Menu from "../Menu";
import Logo from "../Logo";

import { ILogo } from "../Logo/Logo";
import { IMenuItem } from "../Menu/Menu";

import styles from "./Header.module.scss";

export interface HeaderProps {
  logoData: ILogo;
  menuData: IMenuItem[];
}

const Header = ({ logoData, menuData }: HeaderProps) => {
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo {...logoData}/>
        <div className={styles.dropNav}>
          <Menu menuData={menuData}/>
        </div>
        {/* <a
          href="#"
          className={styles.navOpener}
          onClick={handleNavToggle}
          aria-expanded={`${navState ? true : false}`}
          aria-haspopup="true">
          <em>menu</em>
        </a> */}
      </div>
    </header>
  )
}

export default Header;