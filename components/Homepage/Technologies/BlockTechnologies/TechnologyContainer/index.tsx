import Image from "next/image";
import Link from "next/link";
import { IMAGES_LINK } from "../../../../../constants";
import { ROUTES } from "../../../../../constants/routes";
import { GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data } from "../../../../../graphql/homepage/__generated__/GetHomepage";
import Vector1 from "../../../../../public/SVG/Vector1.svg";
import Vector2 from "../../../../../public/SVG/Vector2.svg";
import {
  Div,
  PositionOne,
  PositionTwo,
  Container,
  P,
  Block,
} from "./TechnologyContainer";

interface ITechnologyContainer {
  techArray: GetHomepage_homePage_data_attributes_technologies_tech_stacks_data_attributes_technologies_data[];
}

function TechnologyContainer({ techArray }: ITechnologyContainer) {
  const technologies = () => {
    return (
      <Container>
        {techArray.map((tech) => {
          const { id, attributes } = tech;
          const name = attributes?.name;
          const url =
            ROUTES.EXPERTISE.TECHNOLOGIES + `${attributes?.url}/${id}`;
          const icon = attributes?.iconForOtherPages?.data?.attributes;
          const src = IMAGES_LINK + icon?.url;
          const width = icon?.width;
          const height = icon?.height;

          const renderCondition = width && height;

          return (
            <>
              {renderCondition && (
                <Link key={id} href={url} passHref>
                  <Block>
                    <Image
                      loader={() => src}
                      width={29.2}
                      height={26}
                      src={src}
                      alt="technology icon"
                    />
                    <P>{name}</P>
                  </Block>
                </Link>
              )}
            </>
          );
        })}
      </Container>
    );
  };

  return (
    <Div>
      {technologies()}
      <PositionOne>
        <Vector1 />
      </PositionOne>

      <PositionTwo>
        <Vector2 />
      </PositionTwo>
    </Div>
  );
}

export default TechnologyContainer;
