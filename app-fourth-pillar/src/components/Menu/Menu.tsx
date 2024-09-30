import { NavLink } from 'react-router-dom';

import styles from "./Menu.module.scss";

export interface IMenuItem {
  label: string;
  url: string;
  btnContact?: boolean;
}

interface IMenu  {
  menuData: IMenuItem[],
};

const Menu = ({menuData}: IMenu) => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.nav}>
        {
          menuData.map((menuItem, index) => (
            <li
              key={index}
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
