import {
  Nav,
  Ul,
  Li,
  PositionArrow
} from "./styles";
import { INavigation } from "@interfaces";
import ButtonWithArrow from "../../ButtonWithArrow";
import Arrow from "../../../public/navArrow.svg"
import { useState } from "react";
import Link from "next/link";

function Navigation({ titles, titlesColor, setOnHoverElement, onSelectedMenu, setOnSelectedMenu }: INavigation) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <Nav color={titlesColor}>
      {titles.map((title: string, index: number) => {
        const shouldAddLine = selectedTitle === title && onSelectedMenu === title;

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
