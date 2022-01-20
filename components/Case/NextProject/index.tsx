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

const NextProject = () => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsAnimate(true);
  };

  const onMouseLeave = () => {
    setIsAnimate(false);
  };

  return (
    <NextProjectWrapper>
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
              src={project.src}
              width={141}
              height={108.17}
              alt="next project image"
            />
          </ImageWrap>

          <TextWrap>
            <span>next project</span>
            <h3>HealthApp</h3>
          </TextWrap>

          <ArrowRight />
        </ContentWrap>
      </NextProjectButton>
    </NextProjectWrapper>
  );
};

export default NextProject;
