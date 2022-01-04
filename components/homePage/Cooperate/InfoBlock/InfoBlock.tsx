import Link from "next/link";
import {
  Div,
  H3,
  H2,
  Text,
  PositionH2,
  PositionH3,
  PositionText
} from './styles'
import { ISliderInfo } from "@interfaces";
import ButtonWithArrow from "../../../ButtonWithArrow";

function InfoBlock(props: ISliderInfo) {
  const { title, mainTitle, text, redirectTo, buttonLabel = 'Learn More'} = props;

  return (
    <Div>
      <PositionH3>
        <H3>{title}</H3>
      </PositionH3>

      <PositionH2>
        <H2>{mainTitle}</H2>
      </PositionH2>

      <PositionText>
        <Text>
          {text}
        </Text>
      </PositionText>

      <ButtonWithArrow buttonLabel={buttonLabel} redirectTo={redirectTo} />
    </Div>
  )
}

export default InfoBlock;
