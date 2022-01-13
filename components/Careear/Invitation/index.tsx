import {
  CareersWrap,
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

const Invitation = () => {
  return (
    <InvitationWrapper>
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
