import HexagonsBackground from "../../../../HexagonsBackground";
import MemberCard from "./components/Member";
import NumbersHeader from "./components/NumbersHeader";
import {
  ContentWrapper,
  MembersPhotosWrap,
  MembersWrapper,
  NumbersWrap,
} from "./style";
import memberPhoto1 from "../../../../../public/memberPhoto1.png";
import memberPhoto2 from "../../../../../public/memberPhoto2.png";
import memberPhoto3 from "../../../../../public/memberPhoto3.png";
import memberPhoto4 from "../../../../../public/memberPhoto4.png";

const members = [
  {
    photo: memberPhoto1,
    name: "bohdan vasylkiv",
    position: "CEO",
    facebook: "",
    instagram: "",
  },
  {
    photo: memberPhoto2,
    name: "tetiana stoyko",
    position: "CtO",
    facebook: "",
    instagram: "",
  },
  {
    photo: memberPhoto3,
    name: "julia pokolodna",
    position: "head of sales",
    facebook: "",
    instagram: "",
  },
  {
    photo: memberPhoto4,
    name: "yurii chaika",
    position: "project coordinator",
    facebook: "",
    instagram: "",
  },
];

const Members = () => {
  const membersCards = members.map((member, index) => (
    <MemberCard
      key={index * Math.random()}
      photo={member.photo.src}
      name={member.name}
      position={member.position}
      facebook={member.facebook}
      instagram={member.instagram}
    />
  ));

  return (
    <MembersWrapper>
      <HexagonsBackground />
      <ContentWrapper>
        <NumbersWrap>
          <NumbersHeader number={50} text={"members"} />
          <NumbersHeader number={39} text={"projects"} />
        </NumbersWrap>

        <MembersPhotosWrap>{membersCards}</MembersPhotosWrap>
      </ContentWrapper>
    </MembersWrapper>
  );
};

export default Members;
