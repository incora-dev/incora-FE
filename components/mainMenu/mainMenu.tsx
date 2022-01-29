import { IMenu } from "@interfaces";
import Navigation from "./navigation/navigation";
import { Wrapper, Block, HoverMenu, Div, IncoraLogo, ContentWrapper } from "./styles";
import { theme } from "../../styles/theme";
import React, { useContext, useEffect, useRef, useState} from "react";
import HoverElements from "./HoverElements";
import Link from "next/link";
import HamburgerButton from "../BurgerMenuButton";
import { SideMenu } from "./sideMainMenu";
import { MenuContext } from "../../services/context/mainMenu";
import {useOnClickOutside} from '../../services/hooks';


function getLogo(titlesColor: string) {
  const colorBlack = theme.colors.black;
  const colorWhite = theme.colors.white;
    if (titlesColor === colorWhite) {
      return (
        <IncoraLogo src="/logo.svg" alt="Incora logo"/>
      )
    }

    if (titlesColor === colorBlack) {
      return (
        <IncoraLogo src="/logoBlack.svg" alt="Incora logo" />
      )
    }
};

export default function MainMenu(props: IMenu) {
  const [onHoverElement, setOnHoverElement] = useState<null | string>(null);
  const [onSelectedMenu, setOnSelectedMenu] = useState<null | string>(null);
  const { titles, backgroundColor, titlesColor, children, positionType = 'sticky' } = props;
  const logo = getLogo(titlesColor);
  const [isMobile, setIsMobile] = useState<boolean>();

  const node = useRef<any>();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  useEffect(() => {
    const width = window.innerWidth;
    const mobileWidth = +theme.breakpoints.mobile.replace('px', '');
    const isMobile = mobileWidth > width;
    setIsMobile(isMobile);
  },[]);

  return (
    <Div>
      <Wrapper
        backgroundColor={backgroundColor}
        positionType={positionType}
        titlesColor={titlesColor}
      >
      <ContentWrapper>
        <Block>
          <Link href={'/'}>
            {logo}
          </Link>
          {isMobile ? (
            <>
              <HamburgerButton/>
              <SideMenu 
                backgroundColor={backgroundColor} 
                titlesColor={titlesColor} 
                titles={titles} 
                setOnHoverElement={setOnHoverElement} 
                onSelectedMenu={onSelectedMenu} 
                setOnSelectedMenu={setOnSelectedMenu}
                ref={node} />
            </>
          ) 
          : (
            <Navigation
              titles={titles}
              titlesColor={titlesColor}
              setOnHoverElement={setOnHoverElement}
              onSelectedMenu={onSelectedMenu}
              setOnSelectedMenu={setOnSelectedMenu}
              backgroundColor={backgroundColor}
              />
          )}
        </Block>

        <HoverMenu
          isShow={Boolean(onHoverElement)}
          titlesColor={titlesColor}
          onMouseLeave={() => {
            setOnHoverElement(null);
            setOnSelectedMenu(null);
          }}
        >
          <HoverElements
            title={onHoverElement}
            titleColor={titlesColor}
            setOnHoverElement={setOnHoverElement}
            setOnSelectedMenu={setOnSelectedMenu}
          />
        </HoverMenu>
      </ContentWrapper>
      </Wrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Div>
  );
}

