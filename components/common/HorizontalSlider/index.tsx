import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AbsoluteRect,
  Slide,
  Slider,
  ImageContainer,
  Title,
  Content,
  ArrowButton,
  Controls,
  ControlsText,
  Line,
  ImageBlock,
  RightBlock,
  RightContent,
} from "./style";
import ArrowRight from "../../../public/SVG/ArrowRightYellow.svg";
import { GetProjectPage_project_data_attributes_gallery_pictures_data } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import { IMAGES_LINK } from "../../../constants";

interface HorizontalSliderProps {
  intro: string;
  slides: GetProjectPage_project_data_attributes_gallery_pictures_data[];
  maxWidth?: number;
}

const HorizontalSlider = ({
  intro,
  slides,
  maxWidth,
}: HorizontalSliderProps) => {
  const [horizontalSlides, setHorizontalSlides] = useState(slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftPos, setLeftPos] = useState(0);

  useEffect(() => {
    setHorizontalSlides(slides);
  }, [slides]);

  useEffect(() => {
    const [first, second] = horizontalSlides;
    setHorizontalSlides([...horizontalSlides, first, second]);
  }, []);

  useEffect(() => {
    const slider = document.getElementById("horizontal-slider");
    if (slider) {
      slider.ontransitionend = () => {
        if (currentSlide === 0) {
          slider?.scrollTo({ left: 0 });
          setLeftPos(0);
        }
      };
    }
  }, [currentSlide, horizontalSlides]);

  const handleHorizontalScroll = () => {
    const slider = document.getElementById("horizontal-slider");
    if (slider) {
      const slideWidth =
        document.getElementsByClassName("horizontal-slide")[0].scrollWidth;
      setLeftPos(leftPos + slideWidth);
      slider.scrollTo({ left: leftPos + slideWidth, behavior: "smooth" });
      (
        document.getElementsByClassName("horizontal-slide")[
          currentSlide + 1
        ] as HTMLElement
      ).style.transform = "none";
      (
        document.getElementsByClassName("horizontal-slide")[
          currentSlide + 2
        ] as HTMLElement
      ).style.transform = "scale(0.85)";
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
      if (currentSlide === slides.length - 1) {
        (
          document.getElementsByClassName("horizontal-slide")[1] as HTMLElement
        ).style.transform = "scale(0.85)";
      }
    }
  };

  return (
    <Slider id="horizontal-slider" maxWidth={maxWidth}>
      {horizontalSlides.map((slide, index) => {
        const id = slide.id;
        const src = IMAGES_LINK + slide.attributes?.url;

        return (
          <Slide key={`slide-${id}-${index}`} className="horizontal-slide">
            <Content>
              <ImageContainer>
                <ImageBlock>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="image"
                    width={657}
                    height={377}
                    layout="responsive"
                    className="image"
                  />
                  <AbsoluteRect />
                </ImageBlock>
              </ImageContainer>
              <RightBlock>
                <RightContent>
                  <div>
                    <Title>{intro}</Title>
                    <ArrowButton onClick={() => handleHorizontalScroll()}>
                      <ArrowRight />
                    </ArrowButton>
                  </div>
                  <Controls>
                    <ControlsText>
                      {currentSlide < 9
                        ? `0${currentSlide + 1}`
                        : currentSlide + 1}
                    </ControlsText>
                    <Line />
                    <ControlsText>
                      {slides.length < 10 ? `0${slides.length}` : slides.length}
                    </ControlsText>
                  </Controls>
                </RightContent>
              </RightBlock>
            </Content>
          </Slide>
        );
      })}
    </Slider>
  );
};

export default HorizontalSlider;
