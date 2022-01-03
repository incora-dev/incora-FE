import Link from "next/link";
import {
  Div,
  H3,
  H2,
  Text,
  Button,
  Label,
  Arrow,
  PositionArrow,
  PositionH2,
  PositionH3,
  PositionText
} from './styles'
import { ISliderInfo } from "@interfaces";

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

      <Link href={redirectTo}>
        <Button>
          <Label>{buttonLabel}</Label>

          <PositionArrow>
            <Arrow/>
          </PositionArrow>

        </Button>
      </Link>
    </Div>
  )
}

export default InfoBlock;
