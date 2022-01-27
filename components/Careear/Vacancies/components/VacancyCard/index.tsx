import Button from "../../../../Button";
import { TextWrap, VacancyCardWrapper } from "./style";

interface IVacancyCard {
  technology: string;
  specialty: string;
  url: string;
  isHot: boolean;
}

const VacancyCard = ({ technology, specialty, url, isHot }: IVacancyCard) => {
  const isHotCondition = isHot && <>&#128293; </>;

  return (
    <VacancyCardWrapper>
      <TextWrap>
        <span>{technology}</span>
        <h3>
          {isHotCondition}
          {specialty}
        </h3>
      </TextWrap>

      <Button width={180} height={67} link={url} label={"view job"} />
    </VacancyCardWrapper>
  );
};

export default VacancyCard;
