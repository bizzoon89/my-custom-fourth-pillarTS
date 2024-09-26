import React from 'react'

//import styles from "./NavList.module.scss";
//import "./NavList.scss";

interface IMenu {
  children: React.ReactNode; 
}

const Menu = ({ children }: IMenu) => {
  //const { mainNav, nav} = styles;

  return (
    <nav className="mainNav">
      <ul className="nav">{children}</ul>
    </nav>
  )
}

export default Menu;
