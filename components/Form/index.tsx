import { IForm } from "@interfaces";
import {
  Container,
  FormContainer,
  InputBlock,
  Input,
  FormInputFile,
  SelectedFile,
  FilesSelected
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

function CreateUploadFilesInput(filesLabel: ReactElement, formBlack = false) {
  const [uploadFilesName, setUploadFilesName]  = useState<JSX.Element[]>([]);

  const handleOnchange = ({ target }: any) => {
    console.log(target.files)

    if (target.files) {
      const filesName = () =>
        Object.values(target.files).map(({ name }: any, index) =>
          <SelectedFile key={index}>
            {index + 1}. {name}
          </SelectedFile>
        )

      setUploadFilesName(filesName);
    }

    // target.value = null;
  };

  return (
    <div>
      <FormInputFile>
        <Input
          formBlack={formBlack}
          type={'file'}
          id={'inputUploadFiles'}
          multiple={true}
          onChange={handleOnchange}
        />
        <label htmlFor={'inputUploadFiles'}>{filesLabel}</label>
      </FormInputFile>

      <FilesSelected>{uploadFilesName}</FilesSelected>
    </div>
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
