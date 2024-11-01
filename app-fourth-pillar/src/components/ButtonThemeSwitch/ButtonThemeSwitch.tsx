import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

import styles from './ButtonThemeSwitch.module.scss';

export const ButtonThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`
        ${styles.btnThemeSwitch} 
        ${theme === 'dark' ? styles.btnDark : ''}
      `}
      onClick={toggleTheme}
    >
      Light / Dark
    </button>
  );
};
