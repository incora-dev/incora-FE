import { ReactNode, useCallback, useEffect, useState } from "react";
import { MENU_HEIGHT } from "../../../constants/global";
import NumberElement from "./NumberElement";
import TextElement from "./TextElement";
import { ScrollListTypes } from "./types";
import { Slide, SliderContent, SliderContainer } from "./style";
import { GetServicesPage_servicesPage_data_attributes_services_data } from "../../../graphql/services/__generated__/GetServicesPage";
import { theme } from "../../../styles/theme";

interface IVerticalFullPageSliderProps<T> {
  slides: GetServicesPage_servicesPage_data_attributes_services_data[];
  scrollListType?: ScrollListTypes;
  renderSlide: (
    slide: GetServicesPage_servicesPage_data_attributes_services_data,
    index: number
  ) => ReactNode;
  bgColor?: string;
  stickyTopPosition?: number;
  maxWidth?: number;
}

function VerticalFullPageSlider<T>({
  slides,
  scrollListType = ScrollListTypes.NUMBER,
  renderSlide,
  bgColor,
  stickyTopPosition,
  maxWidth,
}: IVerticalFullPageSliderProps<T>) {
  const [scrollItemHeight, setScrollItemHeight] = useState(0);
  const position =
    stickyTopPosition ||
    `calc((100vh - ${MENU_HEIGHT}px) / 2 - ${scrollItemHeight / 2}px)`;

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollBlockPosition, setScrollBlockPosition] = useState("absolute");

  const handleScroll = useCallback(
    (event) => {
      const allSlides = document.querySelectorAll(".slide");
      setScrollItemHeight(
        document.getElementById("scroll-item")?.getBoundingClientRect()
          .height || 0
      );

      const offset = window.pageYOffset;
      const direction = lastScrollTop < offset ? "down" : "up";

      const scrollTopPosition =
        allSlides[currentSection]?.getBoundingClientRect().top;

      if (
        (currentSection === 0 && scrollTopPosition > MENU_HEIGHT) ||
        (currentSection === allSlides.length - 1 &&
          scrollTopPosition < MENU_HEIGHT)
      ) {
        setScrollBlockPosition("absolute");
      } else {
        setScrollBlockPosition("fixed");
      }
      if (
        direction === "down" &&
        allSlides[currentSection + 1]?.getBoundingClientRect().top < 250
      ) {
        setCurrentSection(Math.min(currentSection + 1, allSlides.length - 1));
      }
      if (
        direction === "up" &&
        allSlides[currentSection - 1]?.getBoundingClientRect().top > -250
      ) {
        setCurrentSection(Math.max(currentSection - 1, 0));
      }
      setLastScrollTop(offset);
    },
    [currentSection, lastScrollTop]
  );

  useEffect(() => {
    window.onscroll = handleScroll;
  }, [handleScroll]);

  const renderScrollItem = () => {
    switch (scrollListType) {
      case ScrollListTypes.NUMBER:
        return (
          <NumberElement
            currentNumber={currentSection + 1}
            numberOfSlides={slides.length}
          />
        );

      case ScrollListTypes.STRING:
        return (
          <TextElement
            currentSlide={currentSection}
            labels={slides}
            bgColor={theme.colors.black}
          />
        );

      default:
        return (
          <NumberElement
            currentNumber={currentSection + 1}
            numberOfSlides={slides.length}
          />
        );
    }
  };

  const getTopPosition = () => {
    if (stickyTopPosition && scrollBlockPosition === "fixed")
      return `${stickyTopPosition + MENU_HEIGHT}px`;
    if (scrollBlockPosition === "fixed" || currentSection === slides.length - 1)
      return "auto";
    return position;
  };

  const getBottomPosition = () => {
    if (scrollBlockPosition === "fixed") return position;
    if (currentSection === slides.length - 1) {
      if (stickyTopPosition)
        return `calc(100vh - ${
          stickyTopPosition + MENU_HEIGHT + scrollItemHeight
        }px)`;
      return position;
    }
    return "auto";
  };

  return (
    <SliderContainer bgColor={bgColor}>
      <SliderContent maxWidth={maxWidth}>
        <div
          style={{
            position: scrollBlockPosition === "absolute" ? "absolute" : "fixed",
            bottom: getBottomPosition(),
            top: getTopPosition(),
          }}
        >
          <div id="scroll-item">{renderScrollItem()}</div>
        </div>
        <div>
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide">
              <Slide>{renderSlide(slide, index)}</Slide>
            </div>
          ))}
        </div>
      </SliderContent>
    </SliderContainer>
  );
}

export default VerticalFullPageSlider;
