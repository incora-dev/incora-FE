import Image from "next/image";
import {
  MemberInfoWrap,
  MemberWrapper as MemberCardWrapper,
  Name,
  SocialLinks,
} from "./style";

import FacebookIcon from "../../../../../../../public/SVG/socialNetwork/facebookWhite.svg";
import LinkedInIcon from "../../../../../../../public/SVG/socialNetwork/linkedInWhite.svg";
import Link from "next/link";

interface IMemberCard {
  photo: string;
  name: string;
  position: string;
  facebook: string | null;
  linkedin: string | null;
}

const MemberCard = ({
  photo,
  name,
  position,
  facebook,
  linkedin,
}: IMemberCard) => {
  return (
    <MemberCardWrapper>
      <Image
        loader={() => photo}
        src={photo}
        width={236}
        height={236}
        alt="member photo"
      />

      <MemberInfoWrap>
        <Name>
          <h5>{name}</h5>
          <span>{position}</span>
        </Name>

        <SocialLinks>
          {facebook && (
            <Link href={facebook} passHref>
              <FacebookIcon />
            </Link>
          )}

          {linkedin && (
            <Link href={linkedin} passHref>
              <LinkedInIcon />
            </Link>
          )}
        </SocialLinks>
      </MemberInfoWrap>
    </MemberCardWrapper>
  );
};

export default MemberCard;
