import { IMenu } from "@interfaces";
import Navigation from "./navigation/navigation";
import { Wrapper, Block } from "./styles";
import {theme} from "../../styles/theme";

export default function MainMenu(props: IMenu) {
  const { titles, backgroundColor, titlesColor, children } = props;
  const colorBlack = theme.colors.black;
  const colorWhite = theme.colors.white;

  const getLogo = () => {
    if (backgroundColor === colorBlack) {
      return (
        <img src="/logo.svg" alt="Incora logo" />
      )
    }

    if (backgroundColor === colorWhite) {
      return (
        <img src="/logoBlack.svg" alt="Incora logo" />
      )
    }
  }

  const logo = getLogo();

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Block>
          {logo}

          <Navigation titles={titles} titlesColor={titlesColor}/>
        </Block>
      </Wrapper>
      { children }
    </>
  )
}
