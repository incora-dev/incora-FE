import { Div, Wrapper, TextBlock, H1, Text, PositionIcon } from "../../../pages/services/service.style";
import GetIcon from "../GetIcon";
import { IHeaderService } from "@interfaces";


const HeaderService = ({ title, text }: IHeaderService) => {
  const icon = GetIcon(title);

  return (
      <Div>
        <Wrapper>
          <TextBlock>
            <H1>{title}</H1>
            <Text>{text}</Text>
          </TextBlock>
          <PositionIcon>
            {icon}
          </PositionIcon>


        </Wrapper>
      </Div>
  )
}

export default HeaderService;
