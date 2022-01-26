import ServicesHoverElement from "./ServicesHoverElement";
import ExpertiseHoverElements from "./ExpertiseHoverElements";
import CompanyHoverElement from "./CompanyHoverElement";

interface IHoverElements {
  title: string | null;
  titleColor: string;
  setOnHoverElement: Function;
}

function getElement(title: string | null, titleColor: string, setOnHoverElement: Function) {
  if (title?.toLowerCase() === 'services') {
    return (
      <ServicesHoverElement
        titleColor={titleColor}
        // className={title?.toLowerCase() === 'services' && 'selected'}
        isShow={title?.toLowerCase() === 'services'}
      />
    )
  } else if (title?.toLowerCase() === 'expertise') {
    return (
      <ExpertiseHoverElements
        titleColor={titleColor}
        isShow={title?.toLowerCase() === 'expertise'}
      />
    )
  } else if (title?.toLowerCase() === 'company') {
    return (
      <CompanyHoverElement
        titleColor={titleColor}
      />
    )

  }

  if (title?.toLowerCase() === 'case studies' || title?.toLowerCase() === 'insights') {
    setOnHoverElement(null);
  }
}

const HoverElements = ({ title, titleColor, setOnHoverElement }: IHoverElements) => {
  const element = getElement(title, titleColor, setOnHoverElement);

  return (
    <>{element}</>
  )
}

export default HoverElements;
