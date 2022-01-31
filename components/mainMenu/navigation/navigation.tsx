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
import Link from "next/link";
import { theme } from "../../../styles/theme";
import { MenuContext } from "../../../services/context/mainMenu";

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
  const [isMobile, setIsMobile] = useState<boolean>();
  const { toggleHoverMenuMode  } = useContext(MenuContext);

  useEffect(() => {
    const width = window.outerWidth;
    const mobileWidth = +theme.breakpoints.tablet.replace('px', '');
    console.log(width, mobileWidth)
    const isMobile = mobileWidth >= width;
    setIsMobile(isMobile);
  },[]);

  useEffect(() => {
    setUrlTitle(titles.find((title) => window.location.pathname.includes(title.toLowerCase())));
  }, [])

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
                onMouseEnter={() => {
                  setOnHoverElement(title);
                  setSelectedTitle(title);
                  toggleHoverMenuMode();
                }}
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
            />
          );
        }

        return (
          <Ul
            shouldAddLine={shouldAddLine}
            key={index}
            onMouseEnter={() => {
              setOnHoverElement(title);
              setSelectedTitle(title);
              toggleHoverMenuMode();
            }}

            onMouseLeave={() => setOnSelectedMenu(null)}
          >
            <Li>
              <Link href={`/${title.toLowerCase()}`}>
                {title}
              </Link>
              </Li>
          </Ul>
        );
      })}
    </Nav>
  )
}

export default Navigation;
