import ServicesHoverElement from "./ServicesHoverElement";
import ExpertiseHoverElements from "./ExpertiseHoverElements";
import CompanyHoverElement from "./CompanyHoverElement";

interface IHoverElements {
  title: string | null;
  titleColor: string;
  setOnHoverElement: Function;
  setOnSelectedMenu: Function
}

function getElement(title: string | null, titleColor: string, setOnHoverElement: Function, setOnSelectedMenu: Function) {
  if (title?.toLowerCase() === 'services') {
    setOnSelectedMenu(title);

    return (
      <ServicesHoverElement
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'services'}
      />
    )
  } else if (title?.toLowerCase() === 'expertise') {
    setOnSelectedMenu(title);

    return (
      <ExpertiseHoverElements
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'expertise'}
      />
    )
  } else if (title?.toLowerCase() === 'company') {
    setOnSelectedMenu(title);

    return (
      <CompanyHoverElement
        titleColor={titleColor}
      />
    )
  }

  if (title?.toLowerCase() === 'case studies' || title?.toLowerCase() === 'insights') {
    setOnHoverElement(null);
    setOnSelectedMenu(title);
  }
}

const HoverElements = ({ title, titleColor, setOnHoverElement, setOnSelectedMenu }: IHoverElements) => {
  const element = getElement(title, titleColor, setOnHoverElement, setOnSelectedMenu);

  return (
    <>{element}</>
  )
}

export default HoverElements;
