import { IMenu } from "@interfaces";
import Navigation from "./navigation/navigation";
import { Wrapper, Block } from "./styles";

export default function MainMenu(props: IMenu) {
  const { titles, backgroundColor, children } = props;

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Block>
          <img src="/logo.svg" alt="Incora logo"/>

          <Navigation titles={titles}/>
        </Block>
      </Wrapper>
      { children }
    </>
  )
}
