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
import Form from "../../Form";
import Hexagon from "../../../public/hexBig.svg";
import SemiCircle from "../../../public/blackSemicircle.svg"

interface ICreateProgressTogether {
  title: string;
}

const formLabels = ['name', 'phone number', 'email', 'linkedIn link', 'Tell us about your goals?', 'What\'s your purpose?'];
const uploadFilesLabel = () =>
    <>
      <span style={{color: '#FEC506'}}>Upload your Project Description</span> or anything that might be valuable for our cooperation
    </>

const CreateProgressTogether = ({ title }: ICreateProgressTogether) => {
  return (
    <Div>
      <Wrapper>
        <MainBLock>
          <H2>{firstLetterBig(title)}</H2>
          <FormPosition>
            <Form
                fieldsLabels={formLabels}
                buttonLabel={'send'}
                isUploadFiles={true}
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
