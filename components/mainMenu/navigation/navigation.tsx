import Link from "next/link";
import {
  Nav,
  Ul,
  Li,
  A,
  Arrow,
} from "./styles";
import { INavigation } from "@interfaces";
import ButtonWithArrow from "../../ButtonWithArrow";

function Navigation(props: INavigation) {
  const { titles } = props;

  return (
    <Nav>
      {titles.map((title: string, index: number) => {
        if (title === 'Services' || title === 'Expertise' || title === 'Company') {
          return (
              <Ul key={index}>
                <Li>{title}</Li>
                <Arrow/>
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
