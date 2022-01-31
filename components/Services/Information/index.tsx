import React from "react";
import {
  TextBlock,
  P,
  H2,
  H3,
  EstimatedTimeAndOutcomesBlock,
  Text,
  Package,
  Block,
  PositionButtonWithArrow
} from "./Information.style";
import { IInfoBlock, IInformationComponent } from "@interfaces";
import OutcomesIcon from "../../../public/SVG/estimatedTimeIco.svg"
import EstimatedTimeIcon from "../../../public/SVG/OutcomesLogo.svg"
import ButtonWithArrow from "../../ButtonWithArrow";
import { GetServicesPage_servicesPage_data_attributes_services_data } from "../../../graphql/services/__generated__/GetServicesPage";

const InformationComponent = ({ slide }: IInformationComponent) => {

  const getEstimatedTimeInfo = (slide: GetServicesPage_servicesPage_data_attributes_services_data) => {
    const title = slide?.estimated_time?.find(({title}: any ) => title);
    const text = slide?.estimated_time?.find(({text}: any) => text);

    return (
      <Block>
        <EstimatedTimeIcon/>
        <Package>
          <H3>{title?.title}</H3>
          <Text>{text?.text}</Text>
        </Package>
      </Block>
    )
  }

  const getOutcomesInfo = (slide: IInfoBlock) => {
    const title = slide?.outcomes.find(({title}: any) => title);
    const text = slide?.outcomes.find(({text}: any) => text);

    return (
        <Block>
          <OutcomesIcon/>
          <Package>
            <H3>{title?.title}</H3>
            <Text>{text?.text}</Text>
          </Package>
        </Block>
    )
  }

  const getBlockInformation = (slide: IInfoBlock) => (
    <>
      <H2>{slide?.title}</H2>
      <P>{slide?.text}</P>
      <EstimatedTimeAndOutcomesBlock>
        {getEstimatedTimeInfo(slide)}
        {getOutcomesInfo(slide)}
      </EstimatedTimeAndOutcomesBlock>
    </>
  );

  return (
    <TextBlock>
      {getBlockInformation(slide)}
      <PositionButtonWithArrow>
        <ButtonWithArrow
          buttonLabel={'read more'}
          redirectTo={`/services/${slide?.title}`}
          padding={'23px 35px;'}
        />
      </PositionButtonWithArrow>
    </TextBlock>
  );
}

export default InformationComponent;
