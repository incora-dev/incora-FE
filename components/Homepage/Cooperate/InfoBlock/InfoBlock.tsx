import {
  Div,
  H3,
  H2,
  Text,
  PositionH2,
  PositionH3,
  PositionText,
} from "./styles";
import { ISliderInfo } from "@interfaces";
import ButtonWithArrow from "../../../ButtonWithArrow";
import {
  GetHomepage_homePage_data_attributes_coopSteps_button,
  GetHomepage_homePage_data_attributes_coopSteps_steps,
} from "../../../../graphql/homepage/__generated__/GetHomepage";

interface IInfoBlock {
  slide: GetHomepage_homePage_data_attributes_coopSteps_steps;
  button: GetHomepage_homePage_data_attributes_coopSteps_button;
}

function InfoBlock({ slide, button }: IInfoBlock) {
  const { title, description } = slide;
  const { label, url } = button;

  return (
    <Div>
      <PositionH3>
        <H3>{"How to cooperate?"}</H3>
      </PositionH3>

      <PositionH2>
        <H2>{title}</H2>
      </PositionH2>

      <PositionText>
        <Text>{description}</Text>
      </PositionText>

      <ButtonWithArrow
        buttonLabel={label}
        redirectTo={url}
        padding={"23px 35px"}
      />
    </Div>
  );
}

export default InfoBlock;
