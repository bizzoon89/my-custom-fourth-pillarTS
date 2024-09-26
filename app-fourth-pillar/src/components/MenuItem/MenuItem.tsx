import React from 'react';
import { NavLink } from 'react-router-dom';

interface IMenuItem {
  children: React.ReactNode;
  btnContact?: boolean;
  toLink: string;
}

const MenuItem = ({ children, btnContact, toLink }: IMenuItem) => {
  return <li
    className={`${btnContact ? "btnContact" : ""}`}>
    <NavLink to={toLink}>
      {children}
    </NavLink>
  </li>
}

export default MenuItem;
