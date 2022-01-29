import ServicesHoverElement from "./ServicesHoverElement";
import ExpertiseHoverElements from "./ExpertiseHoverElements";
import CompanyHoverElement from "./CompanyHoverElement";
import { forwardRef } from "react";

interface IHoverElements {
  title: string | null;
  titleColor: string;
  setOnHoverElement: Function;
  setOnSelectedMenu: Function
}

function getElement(title: string | null, titleColor: string, setOnHoverElement: Function, setOnSelectedMenu: Function, ref: any) {
  if (title?.toLowerCase() === 'services') {
    setOnSelectedMenu(title);

    return (
      <ServicesHoverElement
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'services'}
        ref={ref}
      />
    )
  } else if (title?.toLowerCase() === 'expertise') {
    setOnSelectedMenu(title);

    return (
      <ExpertiseHoverElements
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'expertise'}
        ref={ref}
      />
    )
  } else if (title?.toLowerCase() === 'company') {
    setOnSelectedMenu(title);

    return (
      <CompanyHoverElement
        titleColor={titleColor}
        ref={ref}
      />
    )
  }

  if (title?.toLowerCase() === 'case studies' || title?.toLowerCase() === 'insights') {
    setOnHoverElement(null);
    setOnSelectedMenu(title);
  }
}

const HoverElements = forwardRef(({ title, titleColor, setOnHoverElement, setOnSelectedMenu }: IHoverElements, ref) => {
  const element = getElement(title, titleColor, setOnHoverElement, setOnSelectedMenu, ref);

  return (
    <>{element}</>
  )
});

export default HoverElements;
