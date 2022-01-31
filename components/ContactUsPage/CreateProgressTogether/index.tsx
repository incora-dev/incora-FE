import {
  Div,
  Wrapper,
  MainBLock,
  H2,
  PositionHexagon,
  FormPosition,
  PositionSemiCircle
} from "./CreateProgressTogether.style";
import { firstLetterBig } from "../../../utils";
import Form from "../../FormClassic";
import Hexagon from "../../../public/hexBig.svg";
import SemiCircle from "../../../public/blackSemicircle.svg"

interface ICreateProgressTogether {
  title: string;
}
const optionsSelect = [
  'Project from scratch',
  'Estimation & Proposal',
  'Team extension',
  'Partnership development',
  'Business analysis & Tech consultancy',
  'Job offering',
  'Other'
];

const uploadFilesLabel = () =>
    <>
      <div><span>Upload your Project Description</span> or anything that might be valuable for our cooperation</div>
    </>

const CreateProgressTogether = ({ title }: ICreateProgressTogether) => {
  const titleFirstLetterBig = firstLetterBig(title);

  return (
    <Div>
      <Wrapper>
        <MainBLock>
          <H2>{titleFirstLetterBig}</H2>
          <FormPosition>
            <Form
              dropListLabels={optionsSelect}
              formBlack={false}
              buttonLabel={'send'}
              isUploadFiles={true}
              linkedIn={true}
              dropList={true}
              uploadFilesLabel={uploadFilesLabel()}
            />
          </FormPosition>
        </MainBLock>

        <PositionHexagon>
          <Hexagon
            width={391}
            height={450}
            viewBox="0 0 261 300"
          />
        </PositionHexagon>

        <PositionSemiCircle>
          <SemiCircle/>
        </PositionSemiCircle>
      </Wrapper>
    </Div>
  )
}

export default CreateProgressTogether;
