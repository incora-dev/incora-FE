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
  PositionButtonWithArrow,
} from "./Information.style";
import OutcomesIcon from "../../../public/SVG/estimatedTimeIco.svg";
import EstimatedTimeIcon from "../../../public/SVG/OutcomesLogo.svg";
import ButtonWithArrow from "../../ButtonWithArrow";
import {
  GetServicesPage_servicesPage_data_attributes_services_data,
  GetServicesPage_servicesPage_data_attributes_services_data_attributes,
} from "../../../graphql/services/__generated__/GetServicesPage";

export interface IInformationComponent {
  slide: GetServicesPage_servicesPage_data_attributes_services_data;
}

const InformationComponent = ({ slide }: IInformationComponent) => {
  const { attributes } = slide;

  const getEstimatedTimeInfo = (
    slide: GetServicesPage_servicesPage_data_attributes_services_data_attributes
  ) => {
    return (
      <Block>
        <EstimatedTimeIcon />
        <Package>
          <H3>{"estimated time"}</H3>
          <Text>{slide.estimatedTime}</Text>
        </Package>
      </Block>
    );
  };

  const getOutcomesInfo = (
    slide: GetServicesPage_servicesPage_data_attributes_services_data_attributes
  ) => {
    return (
      <Block>
        <OutcomesIcon />
        <Package>
          <H3>{"outcomes"}</H3>
          <Text>{slide.outcomes}</Text>
        </Package>
      </Block>
    );
  };

  const getBlockInformation = (
    slide: GetServicesPage_servicesPage_data_attributes_services_data_attributes
  ) => (
    <>
      <H2>{slide.name}</H2>
      <P>{slide.descriptionForServicesPage}</P>
      <EstimatedTimeAndOutcomesBlock>
        {getEstimatedTimeInfo(slide)}
        {getOutcomesInfo(slide)}
      </EstimatedTimeAndOutcomesBlock>
    </>
  );

  return (
    <>
      {attributes && (
        <TextBlock>
          {getBlockInformation(attributes)}
          <PositionButtonWithArrow>
            <ButtonWithArrow
              buttonLabel={"read more"}
              redirectTo={`/services/${attributes.url}`}
              padding={"23px 35px;"}
            />
          </PositionButtonWithArrow>
        </TextBlock>
      )}
    </>
  );
};

export default InformationComponent;
