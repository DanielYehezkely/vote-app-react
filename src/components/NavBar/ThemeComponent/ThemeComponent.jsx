import React from 'react';

import { useTheme } from '../../../theme/ThemeContext';

import './ThemeComponent.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`ThemeButton ${theme === 'light' ? '' : 'dark-mode'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;