import Image from "next/image";
import { MainPhotoWrapper } from "./style";

import { IMAGES_LINK } from "../../../../../constants";
import { GetAboutPage_aboutPage_data_attributes_bannerImage } from "../../../../../graphql/companyAbout/__generated__/GetAboutPage";

interface IBannerImage {
  bannerImage: GetAboutPage_aboutPage_data_attributes_bannerImage;
}

const MainPhoto = ({ bannerImage }: IBannerImage) => {
  const src = IMAGES_LINK + bannerImage.data?.attributes?.url;

  return (
    <MainPhotoWrapper>
      <Image
        loader={() => src}
        src={src}
        width={1366}
        height={460}
        layout="responsive"
        alt="main photo"
      />
    </MainPhotoWrapper>
  );
};

export default MainPhoto;
