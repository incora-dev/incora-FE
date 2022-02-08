import {
  ImageContainer,
  OurPhotosWrap,
  PhotosWrap,
  Player,
  PlayerPosition,
  PositionPlaySVG,
  PosterVideoPosition,
  VideoBLock,
  VideoContainer} from "./style";
import incoraLogoPhoto from "../../../public/incoraLogoPhoto.png";
import Image from "next/image";
import teamPhoto1 from "../../../public/teamPhoto1.png";
import teamPhoto2 from "../../../public/teamPhoto2.png";
import teamPhoto3 from "../../../public/teamPhoto3.png";
import teamPhoto4 from "../../../public/teamPhoto4.png";
import { CAREER_PAGE_VIDEO_LINK } from "../../../constants";
import PlaySVG from "../../../public/Player/Play.svg";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../../services/hooks";

const photos = [teamPhoto1, teamPhoto2, teamPhoto3, teamPhoto4];

const OurPhotos = () => {
  const [play, setPlay] = useState(false);
  const {isMobile, isTablet, isSmallTablet} = useIsMobile();

  useEffect(() => {
    const player = document.getElementById("youTubeVideo") as HTMLIFrameElement;

    if (play) {
      player && (player.src += "?autoplay=1");
    }
  }, [play]);

  const iframeHeight = isTablet && !isMobile && !isSmallTablet
      ? '500px'
      : isMobile
          ? '250px'
          : isSmallTablet ? '325px' : '671px';

  const imgHeight = isTablet && !isSmallTablet
      ? '500px'
      : isSmallTablet && !isMobile
          ? '325px'
          : isMobile
              ? '250px'
              : 'unset';

  const photoItems = photos.map((photo, index) => (
    <ImageContainer key={index * Math.random()}>
      <Image
        key={index * Math.random()}
        width={474}
        height={319}
        src={photo.src}
        alt="team photo"
        className="image"
        layout="responsive"
      />
    </ImageContainer>
  ));

  return (
    <OurPhotosWrap>
        <VideoContainer>
          <VideoBLock onClick={() => setPlay(true)}>
            <PosterVideoPosition display={play}>
              <img style={{height: imgHeight}} src={incoraLogoPhoto.src}></img>
            </PosterVideoPosition>
            <iframe
                id={'youTubeVideo'}
                width={isMobile || isTablet || isSmallTablet ? '100%' : '1122px'}
                height={iframeHeight}
                src={CAREER_PAGE_VIDEO_LINK}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
            <PlayerPosition display={play}>
              <Player>
                <PositionPlaySVG>
                  <PlaySVG/>
                </PositionPlaySVG>
              </Player>
            </PlayerPosition>
          </VideoBLock>
        </VideoContainer>

      <PhotosWrap>{photoItems}</PhotosWrap>
    </OurPhotosWrap>
  );
};

export default OurPhotos;
