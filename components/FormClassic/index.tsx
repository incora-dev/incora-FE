import { IForm } from "@interfaces";
import {
  Container,
  FormContainer,
  InputBlock,
  Input
} from "./Form.style";
import { ChangeEvent, FormEvent, useState } from "react";
import CreateFormSelect from "./FormSelect";
import SubmitButton from "./SubmitButton";
import FilesUploader from "./FilesUploader";
import { sendCandidateRequest } from "../../pages/api/hello";
import {IMAGES_LINK} from "../../constants";
import img from "../../public/navButtonArrow.svg"

function FormClassic({
  dropListLabels,
  buttonLabel = 'send',
  linkedIn = false,
  dropList = false,
  formBlack = false,
  isUploadFiles = false,
  uploadFilesLabel = <></>,
  selectedFiles,
  }: IForm) {

  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPhoneNumberValue, setInputPhoneNumberValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputLinkedInValue, setInputLinkedInValue] = useState('');
  const [inputMainGoalsValue, setInputMainGoalsValue] = useState('');
  const [inputSelectedPurpose, setSelectedPurpose] = useState('');
  const [inputSelectedFile, setSelectedFile] = useState('');

  function inputNameOnChange(event: ChangeEvent<HTMLInputElement>) {
    const currentInputNameValue = event.target.value.replace(/[^a-zA-Z ]/g, '');

    setInputNameValue(currentInputNameValue);
  };

  function formSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const request = new XMLHttpRequest();

    const files: any = inputSelectedFile || selectedFiles;

    const formData = new FormData();

    const dataValues = {
      name: inputNameValue,
      phoneNumber: inputPhoneNumberValue,
      email: inputEmailValue,
      goals: inputMainGoalsValue,
      linkedin: inputLinkedInValue,
      purpose: inputSelectedPurpose
    }

    Object.values(files).forEach((file: any) => formData.append(`files.content`, file, file.name));
    formData.append('data', JSON.stringify(dataValues));

    // formData.append('data.name', inputNameValue);
    // formData.append('data.phoneNumber', inputPhoneNumberValue);
    // formData.append('data.email', inputEmailValue);
    // formData.append('data.goal', inputMainGoalsValue);
    // formData.append('linkedIn', inputLinkedInValue);
    // formData.append('purpose', inputSelectedPurpose);
    // formData.append('content', files);

    request.open('POST', `${IMAGES_LINK}/api/client-responses`);
    request.send(formData);
    // sendCandidateRequest('client-responses' , formData);
  };

  return (
      <Container>
        <InputBlock>
          <FormContainer
              onSubmit={formSubmit}
          >
            <Input
                formTheme={formBlack}
                type={'text'}
                placeholder={'Name'}
                name={'name'}
                value={inputNameValue}
                onChange={inputNameOnChange}
                required
            />

            <Input
                formTheme={formBlack}
                type={'number'}
                placeholder={'Phone Number'}
                value={inputPhoneNumberValue}
                name={'phone Number'}
                onChange={({ target }) => setInputPhoneNumberValue(target.value)}
                required
            />

            <Input
                formTheme={formBlack}
                type={'email'}
                placeholder={'Email'}
                value={inputEmailValue}
                onChange={({ target }) => setInputEmailValue(target.value)}
                required
            />

            { linkedIn &&
              <Input
                formTheme={formBlack}
                type={'text'}
                placeholder={'linkedIn'}
                value={inputLinkedInValue}
                onChange={({ target }) => setInputLinkedInValue(target.value)}
              />
            }

            <Input
                formTheme={formBlack}
                type={'text'}
                placeholder={'what is your main goal?'}
                name={'main goal'}
                value={inputMainGoalsValue}
                onChange={({ target }) => setInputMainGoalsValue(target.value)}
            />

            { dropListLabels && dropList &&
              <CreateFormSelect
                fields={dropListLabels}
                formTheme={formBlack}
                setSelectedPurpose={setSelectedPurpose}
              />
            }

            { isUploadFiles &&
              <FilesUploader
                padding={'15px 35px'}
                inputHeight={'65px'}
                filesLabel={uploadFilesLabel}
                formTheme={formBlack}
                setSelectedFile={setSelectedFile}
              />
            }

            <SubmitButton text={buttonLabel}/>
          </FormContainer>
        </InputBlock>
      </Container>
  );
}

export default FormClassic;
