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
}

const HeaderPrivacyPolicy = ({ title, text }: IHeaderPrivacyPolicy) => {
  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H1>{title}</H1>
          <Text>{text}</Text>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default HeaderPrivacyPolicy;
