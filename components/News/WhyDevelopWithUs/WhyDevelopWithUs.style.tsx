import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../styles/theme";

interface IBlockReason {
  isLastChild: boolean;
}

export const Div = styled.div`
  overflow: hidden;
  
  background-color: ${themeGet("colors.grey3")};
`;

export const Wrapper = styled.div`
  max-width: 1006px;
  padding: 120px 0;
  margin: 0 auto;
`;

export const TextBlock = styled.div`
  display: flex;
  column-gap: 107px;
`;

export const H2 = styled.h2`
  max-width: 294px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-64);
  line-height: 96px;
  letter-spacing: 0.05em;
`;

export const H3 = styled.h3`
  margin-left: 40px;

  max-width: 450px;

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-21);
  line-height: 27px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const Text = styled.p`
  margin-left: 40px;

  max-width: 394px;

  font-style: normal;
  font-weight: 500;
  font-size: var(--fs-14);
  line-height: 21px;

  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const TextRotated = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-12);
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: ${themeGet("colors.black")};

  transform: rotate(-90deg);
`;

export const PositionTextRotated1 = styled.div`
  position: absolute;
  top: 47.5%;
  right: -123px;
  
  p {
    max-width: 122px;
  }
`;

export const PositionTextRotated2 = styled.div`
  position: absolute;
  top: 50%;
  right: -227px;
`;

export const ReasonsWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 27px;
`;

export const BlockReason = styled.div`
  position: relative;

  width: 559px;
  height: 144px;
  
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  
  justify-content: center;

  background-color: ${({ isLastChild }: IBlockReason) =>
    isLastChild
    ? theme.colors.yellow2
    : theme.colors.yellow3
  };
`;

export const PositionNumberBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
`;

export const PositionPointsLarge = styled.div`
  svg {
    position: absolute;
    top: 50%;
    right: -155px;

    transform: translate(-50%, -50%);
  }
`;

export const PositionPointsSmall = styled.div`
  svg {
    position: absolute;
    top: 50%;
    right: -50px;

    transform: translate(-50%, -50%);
  }
`;

export const NumberBlock = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 50px;
  height: 50px;
  
  border-radius: 50%;
  
  background-color: ${themeGet("colors.black")};
`;

export const Number = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);

  font-style: normal;
  font-weight: 800;
  font-size: var(--fs-23);
  line-height: 34px;

  text-align: center;
  letter-spacing: 0.05em;
  
  color: ${themeGet("colors.yellow3")};
`;
