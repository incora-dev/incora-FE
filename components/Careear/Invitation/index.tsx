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
import Image from "next/image";
import CareerSteps from "../../../public/SVG/careerSteps.svg";
import CareerDots from "../../../public/SVG/careerDots.svg";
import Dots from "../../Homepage/Cooperate/elements/dots/dots";
import { theme } from "../../../styles/theme";
import { useState } from "react";
import Semicircle from "../../../public/loading4.svg";
import Semicircle2 from "../../../public/loading5.svg";
import {
  GetCareersPage_careersPage_data_attributes_banner,
  GetCareersPage_careersPage_data_attributes_process,
} from "../../../graphql/careers/__generated__/GetCareersPage";
import Link from "next/link";
import { IMAGES_LINK } from "../../../constants";

interface Invitation {
  banner: GetCareersPage_careersPage_data_attributes_banner;
  process: GetCareersPage_careersPage_data_attributes_process;
}

const Invitation = ({ banner, process }: Invitation) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const { title, description, button, image } = banner;
  const { intro, items } = process;

  const bannerImage = IMAGES_LINK + image.data?.attributes?.url;

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
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href={button.url} passHref>
            <span>{button.label}</span>
          </Link>
          <Rectangle />
        </TextBlock>

        <PhotoWrap>
          <Semicircle2 className="semicircle2" />
          <Image
            loader={() => bannerImage}
            src={bannerImage}
            width={503}
            height={456}
            alt="photo"
          />
        </PhotoWrap>
      </CareersWrap>

      <ProcessWrap>
        <HeaderWrap>
          <h1>{intro}</h1>
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
