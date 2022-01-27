import {
  Div,
  Wrapper,
  MainBlock,
  IconBlock,
  TextBlock,
  Text
} from "./Header404.style";
import Icon404 from "../../../public/SVG/404.svg"

const Header404 = () => {
  return (
    <Div>
      <Wrapper>
        <MainBlock>
          <IconBlock>
            <Icon404/>
          </IconBlock>
          <TextBlock>
            <Text>Something’s missing.
              <span onClick={() => history.back()}> Go back</span>
            </Text>
          </TextBlock>
        </MainBlock>
      </Wrapper>
    </Div>
  )
}

export default Header404;
