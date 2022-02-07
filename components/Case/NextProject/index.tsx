import {
  ContentWrap,
  ImageWrap,
  NextProjectButton,
  NextProjectWrapper,
  TextWrap,
} from "./style";
import project from "../../../public/project3.jpg";
import Image from "next/image";

import DecorOne from "../../../public/nextProjectBtnDecor1.svg";
import DecorTwo from "../../../public/nextProjectBtnDecor2.svg";
import DecorThree from "../../../public/nextProjectBtnDecor3.svg";
import ArrowRight from "../../../public/SVG/ArrowRightBig.svg";
import { useState } from "react";
import { GetProjectPage_project_data_attributes_nextProjectButton } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import { IMAGES_LINK } from "../../../constants";
import Link from "next/link";

interface INextProject {
  nextProjectButton: GetProjectPage_project_data_attributes_nextProjectButton;
}

const NextProject = ({ nextProjectButton }: INextProject) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const { intro, project } = nextProjectButton;
  const projectEntry = project?.data?.attributes;
  const url = projectEntry?.url;
  const src =
    IMAGES_LINK + projectEntry?.mainInfo.item[0]?.image?.data?.attributes?.url;

  const onMouseEnter = () => {
    setIsAnimate(true);
  };

  const onMouseLeave = () => {
    setIsAnimate(false);
  };

  return (
    <>
      {projectEntry && url && (
        <NextProjectWrapper>
          <Link href={`/case-studies/${projectEntry.url}`} passHref>
            <NextProjectButton
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <ContentWrap>
                <ImageWrap isAnimate={isAnimate}>
                  <DecorOne className="one" />
                  <DecorTwo className="two" />
                  <DecorThree className="three" />
                  <Image
                    loader={() => src}
                    src={src}
                    width={141}
                    height={108.17}
                    alt="next project image"
                  />
                </ImageWrap>

                <TextWrap>
                  <span>{intro}</span>
                  <h3>{projectEntry?.name}</h3>
                </TextWrap>

                <ArrowRight />
              </ContentWrap>
            </NextProjectButton>
          </Link>
        </NextProjectWrapper>
      )}
    </>
  );
};

export default NextProject;
