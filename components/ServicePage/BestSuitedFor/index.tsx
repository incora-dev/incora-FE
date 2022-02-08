import {
  Div,
  H2,
  Wrapper,
  Text,
  Content,
  ContentWrapper,
  PositionDots,
} from "./BestSuitedFor.style";
import Loader from "../../../public/loading1.svg";
import { firstLetterBig } from "../../../utils";
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import { GetService_service_data_attributes_bestSuitedFor_items } from "../../../graphql/services/__generated__/GetService";

interface IBestSuitedFor {
  title: string;
  info: (GetService_service_data_attributes_bestSuitedFor_items | null)[];
}

interface IGetContent {
  labels: (GetService_service_data_attributes_bestSuitedFor_items | null)[];
  onBlockEnter: boolean;
}

const GetContent = ({ labels, onBlockEnter = false }: IGetContent) => {
  const createLabels = labels.map((label, index) => {
    return (
      <ContentWrapper
        key={label?.id}
        // animation={onBlockEnter}
        // delay={index * 200}
      >
        <PositionDots>
          <Dots
            numberOfDots={5}
            dotColor={theme.colors.white}
            animation={onBlockEnter}
            rowGap={"7px"}
          />
        </PositionDots>
        <>
          <Loader width="87" height="87" viewBox="0 0 96 96" />
          <Text>{label?.title}</Text>
        </>
      </ContentWrapper>
    );
  });

  return <>{createLabels}</>;
};

const BestSuitedFor = ({ title, info }: IBestSuitedFor) => {
  const [onBlock, setOnBlock] = useState(false);
  const titleFirstLetterBig = firstLetterBig(title);

  return (
    <Div onMouseEnter={() => setOnBlock(true)}>
      <Wrapper>
        <H2>{titleFirstLetterBig}</H2>
        <Content>
          <GetContent labels={info} onBlockEnter={onBlock} />
        </Content>
      </Wrapper>
    </Div>
  );
};

export default BestSuitedFor;
