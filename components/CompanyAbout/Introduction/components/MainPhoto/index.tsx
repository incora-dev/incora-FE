import Image from "next/image";
import { MainPhotoWrapper } from "./style";
import AboutMainPhoto from "../../../../../public/images/AboutMainPhoto.png";

const MainPhoto = () => {
  return (
    <MainPhotoWrapper>
      <Image
        src={AboutMainPhoto.src}
        width={1366}
        height={460}
        layout="responsive"
        alt="main photo"
      />
    </MainPhotoWrapper>
  );
};

export default MainPhoto;
