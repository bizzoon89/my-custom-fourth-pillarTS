import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from "./Menu.module.scss";

export interface IMenuItem {
  label: string;
  url: string;
  btnContact?: boolean;
}

interface IMenu  {
  menuItems: IMenuItem[],
};

const Menu = ({ menuItems }: IMenu) => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.nav}>
        {
          menuItems.map(menuItem => (
            <li
              key={uuidv4()}
              className={`${menuItem.btnContact ? "btnContact" : ""}`}
            >
              <NavLink
                to={menuItem.url}
                className={({ isActive }: { isActive: boolean }): string | undefined => isActive ? `${styles.active}` : undefined}
                >
                {menuItem.label}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Menu;
