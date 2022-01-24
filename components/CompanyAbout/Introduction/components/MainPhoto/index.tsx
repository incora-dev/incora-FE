import Image from "next/image";
import { MainPhotoWrapper } from "./style";
import { useQuery } from "@apollo/client";

import AboutMainPhoto from "../../../../../public/images/AboutMainPhoto.png";
import { GetBannerImage } from "../../../../../graphql/companyAbout/__generated__/GetBannerImage";
import { GET_BANNER_IMAGE } from "../../../../../graphql/companyAbout/queries";
import { IMAGES_LINK } from "../../../../../constants";
import loader from "../../../../../public/project3.jpg";

const MainPhoto = () => {
  const { data, loading } = useQuery<GetBannerImage>(GET_BANNER_IMAGE);
  const bannerImage =
    IMAGES_LINK +
      data?.aboutPage?.data?.attributes?.bannerImage.data?.attributes?.url ||
    "";

  return (
    <>
      {!loading && (
        <MainPhotoWrapper>
          <Image
            loader={() => bannerImage}
            src={bannerImage}
            width={1366}
            height={460}
            layout="responsive"
            alt="main photo"
          />
        </MainPhotoWrapper>
      )}
    </>
  );
};

export default MainPhoto;
