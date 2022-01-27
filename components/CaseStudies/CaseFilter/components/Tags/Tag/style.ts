import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface ITagsWrapper {
  currentIndex: number;
  index: number;
}

export const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 34px;
  padding: 0 15px;
  border: 1px solid ${themeGet("colors.grey")};
  background-color: ${({ currentIndex, index }: ITagsWrapper) =>
    currentIndex === index
      ? themeGet("colors.black")
      : themeGet("colors.white")};

  span {
    font-weight: 600;
    font-size: var(--fs-12);
    line-height: 18px;
    letter-spacing: 0.05em;
    color: ${({ currentIndex, index }) =>
      currentIndex === index
        ? themeGet("colors.white")
        : themeGet("colors.black")};
  }
`;
