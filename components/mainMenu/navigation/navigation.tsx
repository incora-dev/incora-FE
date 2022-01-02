import Link from "next/link";
import {
  Nav,
  Ul,
  UlButton,
  Li,
  A,
  Arrow,
  ButtonArrow
} from "./styles";
import { INavigation } from "@interfaces";

function Navigation(props: INavigation) {
  const { titles } = props;

  return (
    <Nav>
      {titles.map((title: string, index: number) => {
        if (title === 'Services' || title === 'Expertise' || title === 'Company') {
          return (
              <Ul key={index}>
                <Li key={index}>{title}</Li>
                <Arrow/>
              </Ul>
          );
        }

        if (title === 'Contact Us') {
          return (
            <UlButton key={index}>
              <Link href={'/ContactUs'}>
                <A>
                  <Li key={index}>{title}</Li>
                  <ButtonArrow/>
                </A>
              </Link>
            </UlButton>
          );
        }

        return (
          <Ul key={index}>
            <Li key={index}>{title}</Li>
          </Ul>
        );
      })}
    </Nav>
  )
}

export default Navigation;
