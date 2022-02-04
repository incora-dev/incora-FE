import Vacancies from "../../Careear/Vacancies";
import { CheckAlsoWrapper } from "./style";
import Hex from "../../../public/hexBig.svg";
import HexCropped from "../../../public/hexSmallCropped.svg";
import {
  GetVacancy_filterSpecialities,
  GetVacancy_filterTechnologies,
  GetVacancy_vacancy_data_attributes_currentVacancies,
} from "../../../graphql/careers/__generated__/GetVacancy";

interface ICheckAlso {
  currentVacancies: GetVacancy_vacancy_data_attributes_currentVacancies;
  specialties: GetVacancy_filterSpecialities;
  technologies: GetVacancy_filterTechnologies;
}

const CheckAlso = ({
  currentVacancies,
  specialties,
  technologies,
}: ICheckAlso) => {
  return (
    <CheckAlsoWrapper>
      <Vacancies
        specialties={specialties}
        technologies={technologies}
        currentVacancies={currentVacancies}
      />
      <Hex className="hex" />
      <HexCropped className="hex_cropped" />
    </CheckAlsoWrapper>
  );
};

export default CheckAlso;
