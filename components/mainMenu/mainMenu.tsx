import { IMenu } from "@interfaces";
import Navigation from "./navigation/navigation";
import { Wrapper, Block, HoverMenu, Div, IncoraLogo, ContentWrapper, CloseBtn, MenuWrapper } from "./styles";
import { theme } from "../../styles/theme";
import React, { useContext, useEffect, useRef, useState} from "react";
import HoverElements from "./HoverElements";
import Link from "next/link";
import HamburgerButton from "../BurgerMenuButton";
import { SideMenu } from "./sideMainMenu";
import { MenuContext } from "../../services/context/mainMenu";
import { useIsMobile } from "../../services/hooks";


function getLogo(titlesColor: string) {
  if (titlesColor === theme.colors.white) return <IncoraLogo src="/logo.svg" alt="Incora logo"/>;
  if (titlesColor === theme.colors.black) return <IncoraLogo src="/logoBlack.svg" alt="Incora logo" />;
};

export default function MainMenu(props: IMenu) {
  const [onHoverElement, setOnHoverElement] = useState<null | string>(null);
  const [onSelectedMenu, setOnSelectedMenu] = useState<null | string>(null);
  const { titles, backgroundColor = '#fffff', titlesColor, children, positionType = 'sticky' } = props;
  const logo = getLogo(titlesColor);
  const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  const node = useRef<any>();
  const { isMenuOpen, toggleMenuMode, isHoverMenuOpen, toggleHoverMenuMode  } = useContext(MenuContext);
  const nodeHoverMenu = useRef();

  const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

  const closeHoverMenu = () => {
    toggleHoverMenuMode();
    setOnHoverElement(null);
    setOnSelectedMenu(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent): void {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        closeHoverMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Div>
      <Wrapper
        backgroundColor={backgroundColor}
        positionType={positionType}
        titlesColor={titlesColor}
      >
        {(isMenuOpen || isHoverMenuOpen) && (
          <CloseBtn
            onClick={() => {
              if (isMenuOpen && !isHoverMenuOpen) {
                toggleMenuMode();
              }
              if (isHoverMenuOpen) {
                toggleHoverMenuMode();
                setOnHoverElement(null);
              }
            }}
          >
            &#9587;
          </CloseBtn>
        )}
        <ContentWrapper>
          <MenuWrapper ref={wrapperRef}>
            <Block>
              <Link href={'/'}>
                {logo}
              </Link>
              {isMobile || isTablet || isSmallTablet ? (
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
          </MenuWrapper>

          <HoverMenu
            isShow={isMobile  || isTablet
              ? (Boolean(onHoverElement) && isHoverMenuOpen) 
              : Boolean(onHoverElement)}
            titlesColor={titlesColor}
            onMouseLeave={() => {
              if ((!isMobile || !isTablet || !isSmallTablet) && isHoverMenuOpen) {
                closeHoverMenu();
              }
            }}
            >
            <HoverElements
              ref={nodeHoverMenu}
              title={onHoverElement}
              titleColor={titlesColor}
              setOnHoverElement={setOnHoverElement}
              setOnSelectedMenu={setOnSelectedMenu}
              backgroundColor={backgroundColor}
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

