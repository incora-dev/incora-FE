import Image from "next/image";
import { MainPhotoWrapper } from "./style";
import { useQuery } from "@apollo/client";

import AboutMainPhoto from "../../../../../public/images/AboutMainPhoto.png";
import { GetBannerImage } from "../../../../../graphql/companyAbout/__generated__/GetBannerImage";
import { GET_BANNER_IMAGE } from "../../../../../graphql/companyAbout/queries";

const MainPhoto = () => {
  const { data, loading } = useQuery<GetBannerImage>(GET_BANNER_IMAGE);
  const bannerImage =
    data?.aboutPage?.data?.attributes?.bannerImage.data?.attributes?.url || "";

  return (
    <>
      {!loading && (
        <MainPhotoWrapper>
          <Image
            src={AboutMainPhoto.src}
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
