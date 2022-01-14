import {
  Nav,
  Ul,
  Li,
  PositionArrow
} from "./styles";
import { INavigation } from "@interfaces";
import ButtonWithArrow from "../../ButtonWithArrow";
import Arrow from "../../../public/navArrow.svg"

function Navigation({ titles, titlesColor }: INavigation) {
  return (
    <Nav color={titlesColor}>
      {titles.map((title: string, index: number) => {
        if (
          title === "Services" ||
          title === "Expertise" ||
          title === "Company"
        ) {
          return (
              <Ul key={index}>
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
              redirectTo={'Contact Us'}
              padding={'11.5px 14.5px;'}
            />
          );
        }

        return (
          <Ul key={index}>
            <Li>{title}</Li>
          </Ul>
        );
      })}
    </Nav>
  )
}

export default Navigation;
