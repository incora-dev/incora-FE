import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import { theme } from "../../../styles/theme";

interface IDropList {
  display: string;
  formTheme: boolean;
}

interface IDropListBlock{
  formTheme: boolean;
  width: string;
}

interface IInput {
  formTheme: boolean;
}

export const DropListBlock = styled.div`
   position: relative;
   padding-bottom: 2px;
   display: inline-block;
   height: 41px;
   background-color: ${({ formTheme }: IDropListBlock) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
   font-style: normal;
   font-weight: 500;
   font-size: var(--fs-12);
   line-height: 18px;
   
   cursor: pointer;
   letter-spacing: 0.03em;
   text-transform: capitalize;
   margin: 0;
   text-decoration: none;
   border: none;
   box-shadow: inset 0 -1px 0 0 #9ca3a7;
   -webkit-transition: ease-in-out 0.4s;
   -moz-transition: ease-in-out 0.4s;
   transition: all ease-in-out 0.4s;
   @media only screen and (max-width: ${theme.breakpoints.mobile}) {
     width: 100%;
   }
`;

export const SelectBlock = styled.div`
   position: relative;
   width: ${({ width }: IDropListBlock) => width};
   margin: 0;
   padding-bottom: 2px;
   display: flex;
   height: 41px;
   background-color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
   font-style: normal;
   font-weight: 500;
   font-size: var(--fs-12);
   line-height: 18px;
   
   cursor: pointer;
   letter-spacing: 0.03em;
   text-transform: capitalize;
   user-select: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   
   text-decoration: none;
   border: none;
   box-shadow: inset 0 -1px 0 0 #9ca3a7;
   -webkit-transition: ease-in-out 0.4s;
   -moz-transition: ease-in-out 0.4s;
   transition: all ease-in-out 0.4s;
   @media only screen and (max-width: ${theme.breakpoints.mobile}) {
     width: 100%;
   }
`;

export const Label = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SelectPlaceholder = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.03em;

   color: ${({formTheme}: IInput) =>
     formTheme ? themeGet("colors.font2") : themeGet("colors.grey2")};
`;

export const SelectOption = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   
   width: 100%;
   height: 100%;
   
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   font-style: normal;
   font-weight: 500;
   font-size: var(--fs-12);
   line-height: 18px;
   letter-spacing: 0.03em;
   text-transform: capitalize;
   color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.white") : themeGet("colors.black")};
   
   p {
     margin-bottom: 12px;
   }
`;

export const ArrowWrapper = styled.div`
   svg {
     margin-bottom: 18px;
     path {
       fill: ${({ formTheme }: IInput) =>
        formTheme ? themeGet("colors.white") : themeGet("colors.black")};
     }
   }
`;

export const DropList = styled.div`
   z-index: 4;
   position: absolute;
   top: 0;
   
   width: 100%;
   padding: 16px 13px;
   
   display: ${({ display }: IDropList) => display};
   flex-direction: column;
   row-gap: 6px;
   
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 18px;
   letter-spacing: 0.03em;
   
   color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
   background-color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
   
   -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
   -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
   box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Option = styled.option`
   padding: 8px 12px;
   color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.white") : themeGet("colors.black")};
   
   &:hover {
     color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
     background-color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.white") : themeGet("colors.black")};
   }
`;
