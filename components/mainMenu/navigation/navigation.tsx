import router from "next/router";
import {
  Nav,
  Ul,
  Li,
  PositionArrow
} from "./styles";
import { INavigation } from "@interfaces";
import ButtonWithArrow from "../../ButtonWithArrow";
import Arrow from "../../../public/navArrow.svg"
import React, {useContext, useEffect, useState} from "react";
import { MenuContext } from "../../../services/context/mainMenu";
import { useIsMobile } from "../../../services/hooks";

function Navigation({ 
  titles, 
  titlesColor, 
  setOnHoverElement, 
  onSelectedMenu, 
  setOnSelectedMenu, 
  backgroundColor,
 }: INavigation) 
  {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const  [urlTitle, setUrlTitle] = useState<string | null | undefined>(null);
  const { toggleHoverMenuMode, toggleMenuMode } = useContext(MenuContext);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  useEffect(() => {
    setUrlTitle(titles.find((title) => window.location.pathname.includes(title.toLowerCase())));
  }, [])

  const toggleMenu = (pageTitle: string) => {
    console.log('toggleMenu', selectedTitle, pageTitle)
    // if (selectedTitle) {
    //   setOnHoverElement(pageTitle);
    //   setSelectedTitle(pageTitle);
    // } else {
      setOnHoverElement(null);
      setSelectedTitle(null);
      toggleMenuMode();
      toggleHoverMenuMode();
    // }
  }

  const toggleHoverMenu = (pageTitle: string) => {
    console.log('toggleHoverMenu', selectedTitle, onSelectedMenu)
    if (onSelectedMenu === null) {
      setOnHoverElement(pageTitle);
      setSelectedTitle(pageTitle);
    } else {
      if (selectedTitle && selectedTitle === pageTitle) {
        setOnHoverElement(null);
        setSelectedTitle(null);
      } else {
        setOnHoverElement(pageTitle);
      setSelectedTitle(pageTitle);
      }
    }
    // if (selectedTitle) {
    //   setOnHoverElement(null);
    //   setSelectedTitle(null);
    // } else {
    //   setOnHoverElement(pageTitle);
    //   setSelectedTitle(pageTitle);
    // }
    toggleHoverMenuMode();
  };

  const toggleMenuOnClick = (pageTitle: string) => {
    if (selectedTitle && selectedTitle === pageTitle) {
      setOnHoverElement(pageTitle);
      setSelectedTitle(pageTitle);
    }
    toggleHoverMenuMode();
  }

  const toggleHoverMenuDesktop = (pageTitle: string) => {
    console.log('toggleHoverMenuDesktop')
    if (!isMobile || !isTablet || !isSmallTablet) {
      toggleHoverMenu(pageTitle);
    }
  }

  return (
    <Nav color={titlesColor}>
      {titles.map((title: string, index: number) => {
        const shouldAddLine = selectedTitle === title && onSelectedMenu === title || title === urlTitle;

        if (
          title === "Services" ||
          title === "Expertise" ||
          title === "Company"
        ) {
            return (
              <Ul
                shouldAddLine={shouldAddLine}
                key={index}
                onClick={() => toggleMenuOnClick(title)}
                onMouseEnter={() => toggleHoverMenuDesktop(title)}
              >
                <Li>{title}</Li>
  
                <PositionArrow color={titlesColor}>
                  <Arrow/>
                </PositionArrow>
              </Ul>
            );
        }

        if (title === 'Contact Us') {
          return (
            <ButtonWithArrow
              key={index}
              buttonLabel={'Contact Us'}
              redirectTo={'/contacts'}
              padding={'11.5px 14.5px;'}
              // onClick={linkClickHandler}
            />
          );
        }

        return (
          <Ul
            shouldAddLine={shouldAddLine}
            key={index}
            onClick={() => toggleMenuOnClick(title)}
            onMouseEnter={() => toggleHoverMenuDesktop(title)}
            onMouseLeave={() => {
              if (!isMobile || !isTablet || !isSmallTablet) {
                toggleMenu(title)
              }
            }}
          >
            <Li>
              <a onClick={() => {
                toggleMenuMode();
                toggleHoverMenu(title);
                router.push(`/${title.toLowerCase().replace(' ', '_')}`)
              }}>{title}</a>
            </Li>
          </Ul>
        );
      })}
    </Nav>
  )
}

export default Navigation;
