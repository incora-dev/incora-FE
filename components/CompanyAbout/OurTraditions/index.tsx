import {
  OurTraditionsTextWrap,
  OurTraditionsWrapper,
  Paragraphs,
  Photos,
  TextWrap,
  PhotosBlock,
} from "./style";
import Image from "next/image";
import { IMAGES_LINK, scrollPhotosBlockPX } from "../../../constants";
import {
  GetAboutPage_aboutPage_data_attributes_ourTraditions,
  GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data,
} from "../../../graphql/companyAbout/__generated__/GetAboutPage";
import { useCallback, useEffect, useRef, useState } from "react";

interface IOurTraditions {
  ourTraditions: GetAboutPage_aboutPage_data_attributes_ourTraditions;
}

const OurTraditions = ({ ourTraditions }: IOurTraditions) => {
  const [onEnterBlock, setOnEnterBlock] = useState(false);
  const [galleryOneMaxWidth, setGalleryOneMaxWidth] = useState(0);
  const [galleryTwoMaxWidth, setGalleryTwoMaxWidth] = useState(0);
  const [positionScrollGalleryOne, setPositionScrollGalleryOne] =
    useState(false);
  const [positionScrollGalleryTwo, setPositionScrollGalleryTwo] =
    useState(false);

  const refGalleryOne = useRef<any>(null);
  const refGalleryTwo = useRef<any>(null);

  function changeGalleriesOnePosition(
    gallery: any,
    positionScrollGallery: boolean,
    galleryMaxWidth: number,
    setPositionGallery: Function
  ) {
    if (positionScrollGallery) {
      gallery.current.scrollLeft -= scrollPhotosBlockPX;
    } else {
      gallery.current.scrollLeft += scrollPhotosBlockPX;
    }

    if (
      gallery.current.scrollLeft === galleryMaxWidth &&
      !positionScrollGallery
    ) {
      setPositionGallery(true);
    }

    if (gallery.current.scrollLeft === 0 && positionScrollGallery) {
      setPositionGallery(false);
    }
  }

  function changeGalleriesTwoPosition(
    gallery: any,
    positionScrollGallery: boolean,
    galleryMaxWidth: number,
    setPositionGallery: Function
  ) {
    if (positionScrollGallery) {
      gallery.current.scrollLeft += scrollPhotosBlockPX;
    } else {
      gallery.current.scrollLeft -= scrollPhotosBlockPX;
    }

    if (gallery.current.scrollLeft === 0 && !positionScrollGallery) {
      setPositionGallery(true);
    }

    if (
      gallery.current.scrollLeft === galleryMaxWidth &&
      positionScrollGallery
    ) {
      setPositionGallery(false);
    }
  }

  const handleWheel = useCallback(
    (event: any) => {
      if (onEnterBlock) {
        event.preventDefault();

        changeGalleriesOnePosition(
          refGalleryOne,
          positionScrollGalleryOne,
          galleryOneMaxWidth,
          setPositionScrollGalleryOne
        );
        changeGalleriesTwoPosition(
          refGalleryTwo,
          positionScrollGalleryTwo,
          galleryTwoMaxWidth,
          setPositionScrollGalleryTwo
        );
      }
    },
    [
      galleryOneMaxWidth,
      galleryTwoMaxWidth,
      onEnterBlock,
      positionScrollGalleryOne,
      positionScrollGalleryTwo,
    ]
  );

  useEffect(() => {
    const wheelElement = document.getElementById("OurTraditionsWrapper");

    wheelElement && (wheelElement.onwheel = handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    refGalleryTwo.current.scrollLeft = 100000;
    setGalleryOneMaxWidth(refGalleryTwo.current.scrollLeft);
    setGalleryTwoMaxWidth(refGalleryTwo.current.scrollLeft);
  }, []);

  const title = ourTraditions.title;
  const text = ourTraditions.text;
  const gallery = ourTraditions.gallery.data;
  const slicedGallery = (
    gallery: Array<any>,
    firstNum: number,
    secondNum: number
  ) => gallery.slice(firstNum, secondNum);

  const checkGalleryLength = (gallery: Array<any>) => {
    if (gallery.length % 2 === 0) {
      return gallery.length / 2;
    } else {
      return (gallery.length - 1) / 2;
    }
  };

  const galleryLength = checkGalleryLength(gallery);
  const galleryOne = slicedGallery(gallery, 0, galleryLength);
  const galleryTwo = slicedGallery(gallery, galleryLength, gallery.length);

  let textArray: string[] = [];

  const photos = (
    gallery: GetAboutPage_aboutPage_data_attributes_ourTraditions_gallery_data[]
  ) =>
    gallery &&
    gallery.map((photo, index) => {
      const src = IMAGES_LINK + photo.attributes?.url;
      return (
        <img
          src={src}
          width={327}
          height={220}
          key={index}
          alt="team photo"
        />
      );
    });

  if (text) {
    const sectionLength = Math.ceil(text.length / 2);
    for (let index = 0; index < text.length; index += sectionLength) {
      textArray.push(text.slice(index, index + sectionLength));
    }
  }

  return (
    <OurTraditionsWrapper>
      <OurTraditionsTextWrap>
        <TextWrap>
          <h2>{title}</h2>
          <Paragraphs>
            <p>{textArray[0]}</p>
            <p>{textArray[1]}</p>
          </Paragraphs>
        </TextWrap>
      </OurTraditionsTextWrap>

      <PhotosBlock
        id={"OurTraditionsWrapper"}
        onMouseEnter={() => setOnEnterBlock(true)}
        onMouseLeave={() => setOnEnterBlock(false)}
      >
        <Photos ref={refGalleryOne}>{photos(galleryOne)}</Photos>
        <Photos ref={refGalleryTwo}>{photos(galleryTwo)}</Photos>
      </PhotosBlock>
    </OurTraditionsWrapper>
  );
};

export default OurTraditions;
