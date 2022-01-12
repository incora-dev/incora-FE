import Link from "next/link";
import { Nav, Ul, Li, A, Arrow } from "./styles";
import { INavigation } from "@interfaces";
import ButtonWithArrow from "../../ButtonWithArrow";
import { theme } from "../../../styles/theme";
import ArrowBlack from "../../../public/SVG/ArrowDownBlack.svg";

function Navigation(props: INavigation) {
  const { titles, backgroundColor } = props;

  return (
    <Nav backgroundColor={backgroundColor}>
      {titles.map((title: string, index: number) => {
        if (
          title === "Services" ||
          title === "Expertise" ||
          title === "Company"
        ) {
          return (
            <Ul key={index}>
              <Li>{title}</Li>
              {backgroundColor === theme.colors.black ? (
                <Arrow />
              ) : (
                <ArrowBlack className="arrow-black" />
              )}
            </Ul>
          );
        }

        if (title === "Contact Us") {
          return (
            <ButtonWithArrow
              key={index}
              buttonLabel={"Contact Us"}
              redirectTo={"Contact Us"}
              padding={"11.5px 14.5px;"}
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
  );
}

export default Navigation;
