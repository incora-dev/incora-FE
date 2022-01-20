import {
  Div,
  Wrapper,
  TextBlock,
  TextWrapper,
  H2,
  Text
} from "./MainInfo.style";

interface IMainInfo {
  info: IInfo[]
}

interface IInfo {
  title: string;
  text: string;
}

const getInfo = (info: IInfo[]) =>
  <TextWrapper>
    {
      info.map(({ title, text}, index) =>
        <TextBlock key={index}>
          <H2>{title}</H2>
          <Text>{text}</Text>
        </TextBlock>
      )
    }
  </TextWrapper>;

const MainInfo = ({ info }: IMainInfo) => {
  const infos = getInfo(info);

  return (
    <Div>
      <Wrapper>
        {infos}
      </Wrapper>
    </Div>
  )
}

export default MainInfo;
