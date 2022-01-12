import Image from "next/image";
import {
  MemberInfoWrap,
  MemberWrapper as MemberCardWrapper,
  Name,
  SocialLinks,
} from "./style";

import FacebookIcon from "../../../../../../../public/SVG/socialNetwork/facebookWhite.svg";
import LinkedInIcon from "../../../../../../../public/SVG/socialNetwork/linkedInWhite.svg";

interface IMemberCard {
  photo: string;
  name: string;
  position: string;
  facebook: string;
  instagram: string;
}

const MemberCard = ({
  photo,
  name,
  position,
  facebook,
  instagram,
}: IMemberCard) => {
  return (
    <MemberCardWrapper>
      <Image src={photo} width={236} height={236} alt="member photo" />

      <MemberInfoWrap>
        <Name>
          <h5>{name}</h5>
          <span>{position}</span>
        </Name>

        <SocialLinks>
          <FacebookIcon />
          <LinkedInIcon />
        </SocialLinks>
      </MemberInfoWrap>
    </MemberCardWrapper>
  );
};

export default MemberCard;
