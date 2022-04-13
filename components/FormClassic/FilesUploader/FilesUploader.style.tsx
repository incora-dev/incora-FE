import styled from "styled-components";
import themeGet from "@styled-system/theme-get";
import {theme} from "../../../styles/theme";

interface IShowFiles {
  showFiles: string;
  formTheme: boolean;
}

interface IUploadFile {
  padding: string;
  formTheme: boolean;
}

interface ILabel {
  formTheme: boolean;
}

interface IInput {
  formTheme: boolean;
  height: string;
}

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 20px;
   
   margin-top: 10px;
   max-width: 400px;
 `;

export const UploadFile = styled.div`
   box-sizing: border-box;
   height: max-content;
   position: relative;
   border: 1px solid ${themeGet("colors.grey2")};
   
   cursor: pointer;
   
   label {
     position: absolute;
     top: 50%;
     left: 50%;
     padding: ${({ padding}:IUploadFile ) => padding};
     width: 100%;
     transform: translate(-50%, -50%);
     cursor: pointer;
     color: ${({ formTheme }: ILabel) =>
    formTheme ? themeGet("colors.white") : themeGet("colors.black")};
     font-style: normal;
     font-weight: 600;
     font-size: var(--fs-12);
     line-height: 18px;
     text-align: center;
     letter-spacing: 0.05em;
     div {
       span {
         color: ${themeGet("colors.yellow2")};
         &:hover {
           color: ${themeGet("colors.yellow4")};
         }
       }
     }
     
     p {
       padding: 0 30px;
       font-style: normal;
       font-weight: normal;
       font-size: 11px;
       line-height: 16px;
       text-align: center;
       letter-spacing: 0.1em;
       color: #BCBCC0;
     }
   }
 `;


export const SelectedFile = styled.p`
   text-align: left;
   font-style: normal;
   font-weight: 600;
   font-size: var(--fs-12);
   line-height: 18px;
 `;

export const FilesSelected = styled.div`
   display: ${({ showFiles }: IShowFiles) => showFiles};
   color: ${({ formTheme }: IShowFiles) =>
    formTheme ? themeGet("colors.white") : themeGet("colors.black")};
 `;

export const Input = styled.input`
   padding-top: 5px;
   height: ${({ height}:IInput ) => height};
   width: 100%;
   opacity: 0;
   cursor: pointer;
   box-sizing: content-box;
   padding-bottom: 2px;
   display: inline-block;
   background-color: ${({ formTheme }: IInput) =>
    formTheme ? themeGet("colors.black") : themeGet("colors.white")};
   font-style: normal;
   font-weight: 500;
   font-size: var(--fs-12);
   line-height: 18px;
   letter-spacing: 0.03em;
   text-transform: capitalize;
   margin: 0;
   text-decoration: none;
   border: none;
   border-radius: 0;
   border-bottom: 1px solid #9ca3a7;
   /* box-shadow: inset 0 -1px 0 0 #9ca3a7; */
   -webkit-transition: ease-in-out 0.4s;
   -moz-transition: ease-in-out 0.4s;
   transition: all ease-in-out 0.4s;
   @media only screen and (max-width: ${theme.breakpoints.mobile}) {
     width: 100%;
   }
 `;
