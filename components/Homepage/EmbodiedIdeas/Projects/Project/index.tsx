import Link from "next/link";
import Technologies from "../Technologies";
import PictureWithAnimation from "../PictureWithAnimation";
import { Container, Text, Block, H3, P, H4 } from "../Projects.style";
import { IMAGES_LINK } from "../../../../../constants";
import { useState } from "react";

const Project = ({ id, project, index, elementsColor}: any) => {
  const [shouldHover, setShouldHover] = useState(-1);
  
  const flexDirection = (index + 1) % 10 !== 2 ? "row" : "row-reverse";
  const marginText =
    (index + 1) % 10 !== 2 ? "81px 0 0 180px;" : "81px 180px 0 0";

  const url = project?.url;
  const technologies = project?.technologies;
  const mainInfoEntry = project?.mainInfo.item[0];
  const imageEntry = mainInfoEntry?.image?.data?.attributes;
  const image = IMAGES_LINK + imageEntry?.url;

  return <>
    {mainInfoEntry && imageEntry && technologies && (
      <Container key={id} flexDirection={flexDirection}>
        <Text>
          <Link href={`/case_studies/case/${url}`} passHref>
            <H3
              onMouseEnter={() => setShouldHover(index)}
              onMouseLeave={() => setShouldHover(-1)}
            >
              {mainInfoEntry.title}
            </H3>
          </Link>
          <P
            onMouseEnter={() => setShouldHover(index)}
            onMouseLeave={() => setShouldHover(-1)}
          >
            {mainInfoEntry.description}
          </P>

          <Block
            onMouseEnter={() => setShouldHover(index)}
            onMouseLeave={() => setShouldHover(-1)}
          >
            {technologies.data.length > 0 && (
              <>
                <H4>Technologies</H4>
                <Technologies technologies={technologies} />
              </>
            )}
          </Block>
        </Text>

        <PictureWithAnimation
          id={id}
          img={image}
          width={imageEntry.width || 0}
          height={imageEntry.height || 0}
          index={index}
          elementsColor={elementsColor}
          shouldHover={shouldHover}
          setShouldHover={setShouldHover}
          url={url}
        />
      </Container>
    )}
  </>
};

export default Project;