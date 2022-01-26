import { IMenu } from "@interfaces";
import Navigation from "./navigation/navigation";
import { Wrapper, Block, HoverMenu, Div } from "./styles";
import { theme } from "../../styles/theme";
import { useState } from "react";
import HoverElements from "./HoverElements";
import Link from "next/link";

function getLogo(titlesColor: string) {
  const colorBlack = theme.colors.black;
  const colorWhite = theme.colors.white;

  if (titlesColor === colorWhite) {
    return (
        <img src="/logo.svg" alt="Incora logo"/>
    )
  }

  if (titlesColor === colorBlack) {
    return (
        <img src="/logoBlack.svg" alt="Incora logo" />
    )
  }
};

export default function MainMenu(props: IMenu) {
  const [onHoverElement, setOnHoverElement] = useState<null | string>(null);
  const { titles, backgroundColor, titlesColor, children, positionType = 'sticky' } = props;
  const logo = getLogo(titlesColor);

  return (
    <Div>
      <Wrapper
        backgroundColor={backgroundColor}
        positionType={positionType}
        titlesColor={titlesColor}
      >
        <Block>
          <Link href={'/'}>
            {logo}
          </Link>
          <Navigation
            titles={titles}
            titlesColor={titlesColor}
            setOnHoverElement={setOnHoverElement}
            onHoverElement={onHoverElement}
          />
        </Block>

        <HoverMenu
          isShow={Boolean(onHoverElement)}
          titlesColor={titlesColor}
          onMouseLeave={() => setOnHoverElement(null)}
        >
          <HoverElements
            title={onHoverElement}
            titleColor={titlesColor}
            setOnHoverElement={setOnHoverElement}
          />
        </HoverMenu>
      </Wrapper>
      {children}
    </Div>
  );
}
