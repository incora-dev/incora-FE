import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const Checkboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const CheckboxesGroupContainer = styled.div`
  margin: 25px 0;
`;

export const Title = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 34px;
  font-weight: 800;
  font-size: 21px;
  line-height: 31.5px;
  text-transform: uppercase;
  letter-spacing: calc(1em / 20);

  &:after {
    content: '';
    position: absolute;
    right: -19px;
    bottom: 2px;
    width: 97%;
    height: 13px;
    background-color: ${themeGet("colors.yellow")};
    z-index: -1;
  }
`;
