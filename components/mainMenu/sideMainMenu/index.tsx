import React, { forwardRef, useContext } from 'react';
import { MenuContext } from '../../../services/context/mainMenu';
import { IMenu, INavigation } from '@interfaces';
import { Menu } from './styles';
import Navigation from '../navigation/navigation';

const titles = [
  "Services",
  "Expertise",
  "Case Studies",
  "Company",
  "Insights",
  "Contact Us",
];

export interface ISideMenu {
  backgroundColor: string;
  titlesColor: string;
  children?: any;
  titles: string[];
  positionType?: string;
}

export const SideMenu = forwardRef(({ 
    backgroundColor, 
    titlesColor,
    titles,
    setOnHoverElement,
    onSelectedMenu,
    setOnSelectedMenu,
}:ISideMenu & INavigation, ref ) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <Menu ref={ref as any} backgroundColor={backgroundColor} open={isMenuOpen}>
        <Navigation
            titles={titles}
            titlesColor={titlesColor}
            setOnHoverElement={setOnHoverElement}
            onSelectedMenu={onSelectedMenu}
            setOnSelectedMenu={setOnSelectedMenu}
            backgroundColor={backgroundColor}
            />
    </Menu>
    );
});
