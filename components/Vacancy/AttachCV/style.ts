import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

interface IAttachCvWrapper {
  big?: boolean;
}

export const AttachCvWrapper = styled.div`
  width: 100%;

  h3 {
    font-weight: 800;
    font-size: ${({ big }: IAttachCvWrapper) => (big ? "24px" : "18px")};
    line-height: 27px;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
    color: ${({ big }: IAttachCvWrapper) =>
      big ? themeGet("colors.white") : "black"};

    @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
      font-size: 16px;
    }
  }

  .attach {
    margin-top: ${({ big }: IAttachCvWrapper) => (big ? "51px" : "30px")};
    margin-bottom: ${({ big }: IAttachCvWrapper) => (big ? "51px" : "30px")};
  }

  .personal {
    margin-top: ${({ big }: IAttachCvWrapper) => (big ? "51px" : "30px")};
    margin-bottom: ${({ big }: IAttachCvWrapper) => (big ? "16px" : "11px")};
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    display: flex;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    flex-direction: column;
  }
`;

export const DragAndDropBox = styled.div`
  width: 100%;
  height: ${({ big }: IAttachCvWrapper) => (big ? "136px" : "103px")};
  border: 1px solid ${themeGet("colors.grey2")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ big }: IAttachCvWrapper) => (big ? "50px" : "0")};
  margin-bottom: ${({ big }: IAttachCvWrapper) => (big ? "75px" : "30px")};

  @media only screen and (max-width: ${themeGet("breakpoints.mobile")}) {
    margin-bottom: 10px;
  }

  > span {
    font-weight: 600;
    font-size: ${({ big }: IAttachCvWrapper) => (big ? "14px" : "12px")};
    line-height: ${({ big }: IAttachCvWrapper) => (big ? "21px" : "18px")};
    letter-spacing: 0.05em;
  }

  .clickable {
    color: ${themeGet("colors.yellow")};
    margin-right: 5px;
  }

  .non_clickable {
    color: ${themeGet("colors.black")};
  }

  p {
    width: 167.8px;
    font-size: var(--fs-11);
    line-height: 16px;
    text-align: center;
    color: ${themeGet("colors.font1")};
  }
`;

export const Block = styled.div`
  :nth-child(1) {
    @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
      padding-right: 20px;
    }
  }

  @media only screen and (max-width: ${themeGet("breakpoints.smallDesk")}) {
    width: 50%;
  }

  @media only screen and (max-width: ${themeGet("breakpoints.tablet")}) {
    width: 100%;
  }
`;
