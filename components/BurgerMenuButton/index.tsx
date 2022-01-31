import React, { useContext } from 'react';
import { MenuContext } from '../../services/context/mainMenu';
import { Bar, MenuButton } from './styles';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Open main menu"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;