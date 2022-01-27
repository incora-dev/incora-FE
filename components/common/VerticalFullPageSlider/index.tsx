import { ReactNode, useCallback, useEffect, useState } from 'react';
import ScrollSlider from '../../Homepage/Cooperate/scrollSlider/scrollSlider';
import { MENU_HEIGHT } from '../../../constants/global';
import { SlideSS, SliderContent } from './style';

interface IVerticalFullPageSliderProps<T> {
  slides: Array<T>;
  renderSlide: (slide: T, index: number) => ReactNode;
}

function VerticalFullPageSlider<T>({ slides, renderSlide }: IVerticalFullPageSliderProps<T>) {
  const position = `calc((100vh - ${MENU_HEIGHT}px) / 2 - 55px)`;

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollBlockPosition, setScrollBlockPosition] = useState('absolute');
  
  const handleScroll = useCallback((event) => {
      const allSlides = document.querySelectorAll('.slide');

      const offset = window.pageYOffset;
      const direction = lastScrollTop < offset ? 'down' : 'up';

      const scrollTopPosition = allSlides[currentSection].getBoundingClientRect().top;

      if ((currentSection === 0 && scrollTopPosition > MENU_HEIGHT) || (currentSection === allSlides.length - 1 && scrollTopPosition < MENU_HEIGHT)) {
        setScrollBlockPosition('absolute');
      } else {
        setScrollBlockPosition('fixed');
      }
      if (direction === 'down' && allSlides[currentSection + 1] && allSlides[currentSection + 1].getBoundingClientRect().top < 250) {
        setCurrentSection(Math.min(currentSection + 1, allSlides.length - 1));
      }
      if (direction === 'up' && allSlides[currentSection - 1] && allSlides[currentSection - 1].getBoundingClientRect().top > -250) {
        setCurrentSection(Math.max(currentSection - 1, 0));
      }
      setLastScrollTop(offset);
    }, [currentSection, lastScrollTop]
    )
  useEffect(() => {
    window.onscroll = handleScroll;
  }, [handleScroll]);

  return (
    <div>
      <SliderContent>
        <div style={{
          position: scrollBlockPosition,
          bottom: scrollBlockPosition === 'fixed' ? position : currentSection === slides.length - 1 ? position : 'auto',
          top: scrollBlockPosition === 'fixed' ? 'auto' : currentSection === slides.length - 1 ? 'auto' : position
        }}>
          <ScrollSlider currentNumber={currentSection + 1} numberOfSlides={slides.length} />
        </div>
        <div>
          {slides.map((slide, index) => (
            <div key={`slide-${index}`} className="slide">
              <SlideSS>
                {renderSlide(slide, index)}
              </SlideSS>
            </div>
          ))}
        </div>
      </SliderContent>
    </div>
  )
}

export default VerticalFullPageSlider;