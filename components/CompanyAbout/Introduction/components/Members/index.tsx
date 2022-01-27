import HexagonsBackground from "../../../../HexagonsBackground";
import MemberCard from "./components/Member";
import NumbersHeading from "./components/NumbersHeader";
import {
  ContentWrapper,
  MembersPhotosWrap,
  MembersWrapper,
  NumbersWrap,
} from "./style";
import { useQuery } from "@apollo/client";
import { GetMembers } from "../../../../../graphql/companyAbout/__generated__/GetMembers";
import { IMAGES_LINK } from "../../../../../constants";
import {
  GetAboutPage_aboutPage_data_attributes_mainInfo_incora_workers,
  GetAboutPage_aboutPage_data_attributes_mainInfo,
} from "../../../../../graphql/companyAbout/__generated__/GetAboutPage";

interface IMembers {
  mainInfo: GetAboutPage_aboutPage_data_attributes_mainInfo;
}

const Members = ({ mainInfo }: IMembers) => {
  const statistics = mainInfo?.statistics;
  const members = mainInfo?.incora_workers?.data;

  const statisticsNumbers =
    statistics &&
    statistics.map((item) => (
      <NumbersHeading
        key={item?.id}
        number={item?.number}
        label={item?.label}
      />
    ));

  const membersCards =
    members &&
    members.map((item, index) => {
      const id = item.id;
      const member = item.attributes;
      const photo = IMAGES_LINK + member?.profilePhoto.data?.attributes?.url;

      if (member) {
        return (
          <MemberCard
            key={id}
            photo={photo}
            name={member.name}
            position={member.position}
            facebook={member.facebook}
            linkedin={member.linkedin}
          />
        );
      }
    });

  return (
    <MembersWrapper>
      <HexagonsBackground />
      <ContentWrapper>
        <NumbersWrap>{statisticsNumbers}</NumbersWrap>

        <MembersPhotosWrap>{membersCards}</MembersPhotosWrap>
      </ContentWrapper>
    </MembersWrapper>
  );
};

export default Members;
