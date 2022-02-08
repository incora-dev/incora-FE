import {
  Component,
  Position,
  Div,
  PositionTextBlock,
  H2,
  Label,
  Labels,
  P,
  PositionLoading,
  PositionHexagonOne,
  PositionHexagonTwo,
  PositionHexagonThree,
  PositionHexagonFour,
  PositionHexagonFive,
  PositionHexagonSix,
  PositionHexagonSeven,
  PositionHexagonEight,
  PositionHexagonNine,
  PositionCube1,
  PositionCube2,
  PositionCube3,
  PositionCube4,
  PositionCube5,
  Sphere,
} from "./styles";
import Loading from "../../../public/loading.svg";
import { useEffect, useState } from "react";
import Cube1 from "../../../public/SVG/Cube1.svg";
import Cube2 from "../../../public/SVG/Cube2.svg";
import Cube3 from "../../../public/SVG/Cube3.svg";
import HexagonBordered from "../../../public/hexagonBordered.svg";
import HexagonFilled from "../../../public/hexagonFilled.svg";
import { theme } from "../../../styles/theme";
import { useIsMobile } from "../../../services/hooks";
import { GetHomepage_homePage_data_attributes_services_services_data } from "../../../graphql/homepage/__generated__/GetHomepage";
import { ROUTES } from "../../../constants/routes";
import Link from "next/link";

interface IServices {
  title: string;
  text: string;
  labels: GetHomepage_homePage_data_attributes_services_services_data[];
}

function ServicesComponent({ title, text, labels }: IServices) {
  const [onEnterBlock, setOnEnterBlock] = useState(false);
  const [newLabels, setNewLabels] = useState<GetHomepage_homePage_data_attributes_services_services_data[]>(labels);
  const { isMobile, isTablet, isSmallTablet } = useIsMobile();

  function createNewLabels() {
    const mobileApplicationDevelopment: GetHomepage_homePage_data_attributes_services_services_data =
      newLabels.find((label) => label.attributes?.name === 'Mobile Application Development')
        || {} as GetHomepage_homePage_data_attributes_services_services_data;

    const webApplicationDevelopment: GetHomepage_homePage_data_attributes_services_services_data =
      newLabels.find((label) => label.attributes?.name === 'Web Application Development')
        || {} as GetHomepage_homePage_data_attributes_services_services_data;

    const helperArr: GetHomepage_homePage_data_attributes_services_services_data[] = [];

    labels.forEach((label, index) => {
      if (label.id === mobileApplicationDevelopment?.id
          || label.id === webApplicationDevelopment?.id) {
        return;
      }

      helperArr.push(label);
    })

    helperArr.push(mobileApplicationDevelopment);
    helperArr.push(webApplicationDevelopment);

    setNewLabels(helperArr)
  }


  useEffect(() => {
    createNewLabels();
  }, []);

  const label = newLabels.map((label, index) => {
    const id = label.id;
    const url = ROUTES.SERVICES + `${label.attributes?.url}/${id}`;
    const name = label.attributes?.name;

    return (
      <Link href={url} key={id} passHref>
        <Label>{name}</Label>
      </Link>
    );
  });

  return (
    <Component onMouseEnter={() => setOnEnterBlock(true)}>
      {onEnterBlock && (
        <PositionLoading>
          <Loading />
        </PositionLoading>
      )}

      <Position>
        <Div>
          <PositionTextBlock>
            <Div>
              <H2>{title}</H2>
              <P>{text}</P>

              <Labels>{label}</Labels>
            </Div>
          </PositionTextBlock>
          <PositionHexagonOne>
            <HexagonBordered />
          </PositionHexagonOne>

          <PositionHexagonTwo>
            <HexagonFilled />
          </PositionHexagonTwo>

          <PositionHexagonThree>
            <HexagonBordered />
          </PositionHexagonThree>

          <PositionHexagonFour>
            <HexagonFilled />
          </PositionHexagonFour>

          <PositionHexagonFive>
            <HexagonBordered />
          </PositionHexagonFive>

          <PositionHexagonSix>
            <HexagonBordered />
          </PositionHexagonSix>

          <PositionHexagonSeven>
            <HexagonBordered />
          </PositionHexagonSeven>

          <PositionHexagonEight>
            <HexagonFilled />
          </PositionHexagonEight>

          <PositionHexagonNine>
            <HexagonBordered />
          </PositionHexagonNine>
        </Div>

        {!isMobile && !isTablet && !isSmallTablet && (
          <>
            <PositionCube2>
              <Cube1 />
            </PositionCube2>

            <PositionCube3>
              <Cube2 />
            </PositionCube3>

            <PositionCube5>
              <Cube3 />
            </PositionCube5>

            <Sphere>
              <PositionCube1>
                <Cube1 />
              </PositionCube1>

              <PositionCube4>
                <Cube3 />
              </PositionCube4>
            </Sphere>
          </>
        )}

        {/*<PositionCube2>*/}
        {/*  <Cube2/>*/}
        {/*</PositionCube2>*/}
      </Position>
    </Component>
  );
}

export default ServicesComponent;
