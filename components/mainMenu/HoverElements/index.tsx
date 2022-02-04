import ServicesHoverElement from "./ServicesHoverElement";
import ExpertiseHoverElements from "./ExpertiseHoverElements";
import CompanyHoverElement from "./CompanyHoverElement";
import { forwardRef } from "react";

interface IHoverElements {
  title: string | null;
  titleColor: string;
  setOnHoverElement: Function;
  setOnSelectedMenu: Function;
  backgroundColor: string;
}

function getElement(
  title: string | null, 
  titleColor: string, 
  setOnHoverElement: Function, 
  setOnSelectedMenu: Function, 
  ref: any, 
  backgroundColor: string) {
  if (title?.toLowerCase() === 'services') {
    setOnSelectedMenu(title);

    return (
      <ServicesHoverElement
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'services'}
        backgroundColor={backgroundColor}
        ref={ref}
      />
    )
  } else if (title?.toLowerCase() === 'expertise') {
    setOnSelectedMenu(title);

    return (
      <ExpertiseHoverElements
        titleColor={titleColor}
        backgroundColor={backgroundColor}
        isShow={title?.toLowerCase() === 'expertise'}
        ref={ref}
      />
    )
  } else if (title?.toLowerCase() === 'company') {
    setOnSelectedMenu(title);

    return (
      <CompanyHoverElement
        titleColor={titleColor}
        backgroundColor={backgroundColor}
        ref={ref}
      />
    )
  }

  if (title?.toLowerCase() === 'case studies' || title?.toLowerCase() === 'insights') {
    setOnHoverElement(null);
    setOnSelectedMenu(title);
  }
}

// eslint-disable-next-line react/display-name
const HoverElements = forwardRef(({ 
  title, 
  titleColor, 
  setOnHoverElement, 
  setOnSelectedMenu, 
  backgroundColor }: IHoverElements, ref) => {
  const element = getElement(title, titleColor, setOnHoverElement, setOnSelectedMenu, ref, backgroundColor);

  return (
    <>{element}</>
  )
});

export default HoverElements;
