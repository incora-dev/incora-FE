import { ImageWrap, OurPhotosWrap, PhotosWrap } from "./style";
import incoraLogoPhoto from "../../../public/incoraLogoPhoto.png";
import Image from "next/image";
import teamPhoto1 from "../../../public/teamPhoto1.jpg";
import teamPhoto2 from "../../../public/teamPhoto2.jpg";
import teamPhoto3 from "../../../public/teamPhoto3.jpg";
import teamPhoto4 from "../../../public/teamPhoto4.jpg";

const photos = [teamPhoto1, teamPhoto2, teamPhoto3, teamPhoto4];

const OurPhotos = () => {
  const photoItems = photos.map((photo, index) => (
    <Image
      key={index * Math.random()}
      width={474}
      height={319}
      src={photo.src}
      alt="team photo"
    />
  ));

  return (
    <OurPhotosWrap>
      <ImageWrap>
        <Image
          src={incoraLogoPhoto.src}
          width={1125}
          height={671}
          alt="incora logo photo"
        />
      </ImageWrap>

      <PhotosWrap>{photoItems}</PhotosWrap>
    </OurPhotosWrap>
  );
};

export default OurPhotos;
