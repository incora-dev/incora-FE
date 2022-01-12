import { IMenu } from "@interfaces";
import Image from "next/image";
import { theme } from "../../styles/theme";
import Navigation from "./navigation/navigation";
import { Wrapper, Block } from "./styles";
import LogoWhite from "../../public/SVG/LogoWhite.svg";

export default function MainMenu(props: IMenu) {
  const { titles, backgroundColor, children } = props;

  const logoColorCondition =
    backgroundColor === theme.colors.black ? "/logo.svg" : "/LogoWhite.svg";

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Block>
          <img src={logoColorCondition} alt="Incora logo" />

          <Navigation backgroundColor={backgroundColor} titles={titles} />
        </Block>
      </Wrapper>
      {children}
    </>
  );
}
