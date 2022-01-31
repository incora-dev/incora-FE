import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

interface IDisplay {
  isVisible: boolean;
}

export const Wrapper = styled.div`
  position: fixed;

  opacity: ${({ isVisible }: IDisplay) => isVisible ? 1 : 0};
  
  bottom: 50px;
  right:  50px;
  
  cursor: pointer;
  pointer-events: ${({ isVisible }: IDisplay) => isVisible ? 'auto' : 'none'};

  transition: all ${themeGet("transition.button")};
  
  &:hover {
    transform: scale(1.2);
  }

  @media only screen and (max-width: ${themeGet('breakpoints.mobile')}) {
    bottom: 20px;
    right:  20px;
 }
`;
