import React, { createContext, FC, useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenuMode: () => {},
});

const NavState = ({ children }: {children: React.ReactElement[]}) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
        {children}
    </MenuContext.Provider>
  );
};

export default NavState;