import { IForm } from "@interfaces";
import {
  Container,
  FormContainer,
  InputBlock,
  Input,
  FormInputFile,
  // SelectBlock
} from "./Form.style";
import ButtonWithArrow from "../ButtonWithArrow";
import { ReactElement, useState } from "react";

const optionsSelect = [
  'What\'s your purpose?\'',
  'Project from scratch',
  'Estimation & Proposal',
  'Team extension',
  'Partnership development',
  'Business analysis & Tech consultancy',
  'Job offering',
  'Other'
];

// function createFormSelect(fields: string[], formBlack = false) {
//   return (
//     <SelectBlock>
//       <select>
//         {fields.map((label, index) => {
//           return (
//             <option value={label} key={index}>{label}</option>
//           );
//         })}
//       </select>
//     </SelectBlock>
//   );
// }

function createFormFields(fields: string[], formBlack = false) {
  return (
    <FormContainer>
      {fields.map((label, index) => {
        const type = index === 2 ? "email" : "text";

        return (
          <Input
            formBlack={formBlack}
            type={type}
            placeholder={label}
            key={index}
          />
        );
      })}
    </FormContainer>
  );
}

function CreateUploadFilesInput(LabelComponent: ReactElement, formBlack = false) {
  const [labelText, setLabelText]  = useState(LabelComponent)

  const handleOnchange = ({ target }: any) => {
    if (target.files) {
      setLabelText(target.files[0].name);
    }

    target.value = null;
  };

  return (
    <FormInputFile>
      <Input
        formBlack={formBlack}
        type={'file'}
        id={'inputUploadFiles'}
        onChange={handleOnchange}
      />
      <label htmlFor={'inputUploadFiles'}>{labelText}</label>
    </FormInputFile>
  )
}

function Form({ fieldsLabels, buttonLabel, formBlack, isUploadFiles = false, uploadFilesLabel = <></> }: IForm) {
  const inputs = createFormFields(fieldsLabels, formBlack);
  const uploadFiles = isUploadFiles && CreateUploadFilesInput(uploadFilesLabel, formBlack);
  // const formSelect = createFormSelect(optionsSelect, formBlack)

  return (
    <Container>
      <InputBlock>{inputs}</InputBlock>
      {/*{ formSelect }*/}
      { uploadFiles }
      <ButtonWithArrow buttonLabel={buttonLabel} redirectTo={buttonLabel} />
    </Container>
  );
}

export default Form;
