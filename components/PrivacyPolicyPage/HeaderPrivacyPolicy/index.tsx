import {
  Div,
  Wrapper,
  TextBlock,
  H1,
  Text
} from "./HeaderPrivacyPolicy.style";
interface IHeaderPrivacyPolicy {
  title: string;
  text: string;
  secondText: string;
}

const HeaderPrivacyPolicy = ({ title, text, secondText }: IHeaderPrivacyPolicy) => {
  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          <Text>{text}</Text>
          <Text>{secondText}</Text>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default HeaderPrivacyPolicy;
