import {
  Container,
  Div,
  TextBlock,
  H1,
  Strong,
  PositionDots,
  PositionLoaderBagelTrimmed,
  PositionCube1,
  PositionCube2,
  PositionCube3,
} from "./Services.styles";
import Loader from "../../public/loading3.svg";
import LoaderBagelTrimmed from "../../public/loading1.svg";
import { theme } from "../../styles/theme";
import Dots from "../Homepage/Cooperate/elements/dots/dots";
import { useState } from "react";
import Cube1 from "../../public/SVG/cubes/Cube1.svg";
import Cube2 from "../../public/SVG/cubes/Cube2.svg";
import Cube3 from "../../public/SVG/cubes/Cube3.svg";
import { GetServicesPage_servicesPage_data_attributes_banner } from "../../graphql/services/__generated__/GetServicesPage";

interface IServicesComponent {
  banner: GetServicesPage_servicesPage_data_attributes_banner;
}

const ServicesComponent = ({ banner }: IServicesComponent) => {
  const { title, description } = banner;

  const blackColor = theme.colors.black;
  const [animation, setAnimation] = useState(false);

  return (
    <Div onMouseEnter={() => setAnimation(true)}>
      <Container>
        <TextBlock>
          <H1>{title}</H1>
          <Strong>{description}</Strong>
        </TextBlock>
      </Container>

      <Container>
        <Loader width={338} height={338} viewBox="0 0 187 187" />
        <PositionDots>
          <Dots numberOfDots={18} dotColor={blackColor} animation={animation} />
        </PositionDots>

        <PositionCube1>
          <Cube1 />
        </PositionCube1>

        <PositionCube2>
          <Cube2 />
        </PositionCube2>

        <PositionCube3>
          <Cube3 />
        </PositionCube3>

        {animation && (
          <PositionLoaderBagelTrimmed color={blackColor} animation={animation}>
            <LoaderBagelTrimmed width={63} heigh={63} viewBox="0 0 96 96" />
          </PositionLoaderBagelTrimmed>
        )}
      </Container>
    </Div>
  );
};

export default ServicesComponent;
