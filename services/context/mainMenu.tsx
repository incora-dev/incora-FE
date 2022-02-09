import React, { createContext, FC, useState } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenuMode: () => {},
  isHoverMenuOpen: true,
  toggleHoverMenuMode: () => {},
});

const NavState = ({ children }: { children: React.ReactElement[] }) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isHoverMenuOpen, toggleHoverMenu] = useState(false);

  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
  };
  const toggleHoverMenuMode = () => {
    toggleHoverMenu(!isHoverMenuOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenuMode,
        isHoverMenuOpen,
        toggleHoverMenuMode,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default NavState;
