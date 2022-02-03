import BenefitsAndSolutions from "../../BenefitsAndSolutions";
import { OurBenefitsWrapper } from "./style";
import ScheduleIcon from "../../../public/SVG/Schedule.svg";
import Image from "next/image";
import { GetCareersPage_careersPage_data_attributes_ourBenefits } from "../../../graphql/careers/__generated__/GetCareersPage";

const gridData = [
  { title: "Flexible working schedule", icon: ScheduleIcon },
  { title: "Free English classes", icon: ScheduleIcon },
  { title: "Internal knowledge sharing talks", icon: ScheduleIcon },
  { title: "Awesome team events and activities", icon: ScheduleIcon },
  { title: "Corporate bookshelf", icon: ScheduleIcon },
  {
    title: "Comfortable and cozy office in the city center",
    icon: ScheduleIcon,
  },
  {
    title: "Compensation of educational and sports activities",
    icon: ScheduleIcon,
  },
];

interface IOurBenefits {
  ourBenefits: GetCareersPage_careersPage_data_attributes_ourBenefits;
}

const OurBenefits = ({ ourBenefits }: IOurBenefits) => {
  return (
    <OurBenefitsWrapper>
      <BenefitsAndSolutions
        header={ourBenefits.intro}
        gridData={ourBenefits.items}
        gridItemWidth={199}
        rowGap={60}
      />
    </OurBenefitsWrapper>
  );
};

export default OurBenefits;
