import styled from "styled-components";
import { IBackgroundColor } from "@interfaces";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  background-color: ${(props: IBackgroundColor) => props.backgroundColor};
`

export const Block= styled.div`
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  max-width: 1166px;
`
