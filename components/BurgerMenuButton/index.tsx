import React, { useContext } from 'react';
import { MenuContext } from '../../services/context/mainMenu';
import { Bar, MenuButton } from './styles';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
    document.body.style.position = 'fixed';
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Open main menu"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar noMargin />
    </MenuButton>
  );
};

export default HamburgerButton;