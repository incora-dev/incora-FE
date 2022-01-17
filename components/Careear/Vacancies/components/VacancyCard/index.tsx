import Button from "../../../../Button";
import { TextWrap, VacancyCardWrapper } from "./style";

interface IVacancyCard {
  department: string;
  title: string;
  link: string;
  isHot: boolean;
}

const VacancyCard = ({ department, title, link, isHot }: IVacancyCard) => {
  const isHotCondition = isHot && <>&#128293; </>;

  return (
    <VacancyCardWrapper>
      <TextWrap>
        <span>{department}</span>
        <h3>
          {isHotCondition}
          {title}
        </h3>
      </TextWrap>

      <Button width={180} height={67} link={link} label={"view job"} />
    </VacancyCardWrapper>
  );
};

export default VacancyCard;
