import {
  CareersWrap,
  DotsWrap,
  HeaderWrap,
  InvitationWrapper,
  PhotoWrap,
  ProcessWrap,
  Rectangle,
  SchemeWrap,
  TextBlock,
} from "./style";
import careerPhoto from "../../../public/careerPhoto.png";
import Image from "next/image";
import CareerSteps from "../../../public/SVG/careerSteps.svg";
import CareerDots from "../../../public/SVG/careerDots.svg";
import Dots from "../../homePage/Cooperate/elements/dots/dots";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import Semicircle from "../../../public/loading4.svg";
import Semicircle2 from "../../../public/loading5.svg";

const Invitation = () => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const semicircleCondition = isAnimate && (
    <Semicircle className="semicircle" />
  );

  const onMouseEnter = () => {
    setIsAnimate(true);
  };

  return (
    <InvitationWrapper onMouseEnter={onMouseEnter}>
      <DotsWrap>
        <Dots
          numberOfDots={3}
          dotColor={theme.colors.white}
          animation={isAnimate}
        />
      </DotsWrap>
      {semicircleCondition}

      <CareersWrap>
        <TextBlock>
          <h1>Careers</h1>
          <p>
            We welcome proficient talents, who strive to do more and be more
          </p>
          <span>Join the team of diligent minds!</span>
          <Rectangle />
        </TextBlock>

        <PhotoWrap>
          <Semicircle2 className="semicircle2" />
          <Image src={careerPhoto.src} width={503} height={456} alt="photo" />
        </PhotoWrap>
      </CareersWrap>

      <ProcessWrap>
        <HeaderWrap>
          <h1>How the process goes?</h1>
        </HeaderWrap>
        <SchemeWrap>
          <div>
            <CareerSteps className="steps" />
            <CareerDots className="dots" />
          </div>
        </SchemeWrap>
      </ProcessWrap>
    </InvitationWrapper>
  );
};

export default Invitation;
