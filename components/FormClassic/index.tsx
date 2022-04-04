import { IForm } from "@interfaces";
import {
  Container,
  FormContainer,
  InputBlock,
  Input,
  Notification
} from "./Form.style";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CreateFormSelect from "./FormSelect";
import SubmitButton from "./SubmitButton";
import FilesUploader from "./FilesUploader";
import { IMAGES_LINK } from "../../constants";
import { useRouter } from "next/router"
import {EMAIL_REGEX, EMAIL_VALID, NAME_REGEX} from "../../constants/regex";

function FormClassic({
  dropListLabels,
  buttonLabel = 'send',
  linkedIn = false,
  dropList = false,
  formBlack = false,
  isUploadFiles = false,
  uploadFilesLabel = <></>,
  selectedFiles,
  inputVacancy = null
  }: IForm) {

  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPhoneNumberValue, setInputPhoneNumberValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputLinkedInValue, setInputLinkedInValue] = useState('');
  const [inputMainGoalsValue, setInputMainGoalsValue] = useState('');
  const [inputSelectedPurpose, setSelectedPurpose] = useState('');
  const [inputSelectedFile, setSelectedFile] = useState('');
  const [notification, setNotification] = useState(false);
  const url = useRouter().pathname;

  useEffect(() => {
    setInputNameValue('');
    setInputPhoneNumberValue('');
    setInputEmailValue('');
    setInputMainGoalsValue('');
  }, [inputVacancy]);

  function inputNameOnChange(event: ChangeEvent<HTMLInputElement>) {
    const currentInputNameValue = event.target.value.replace(NAME_REGEX, '');

    setInputNameValue(currentInputNameValue);
  };

  function formSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const request = new XMLHttpRequest();
    const files: any = inputSelectedFile || selectedFiles || null;
    const vacancy: any = inputVacancy;

    const sendUrl =
      url.includes('/career') || url.includes('/send-cv') || url.includes('company')
      ? `${IMAGES_LINK}/api/candidate-responses`
      : `${IMAGES_LINK}/api/client-responses`;

    const formData = new FormData();

    const dataValues = {
      name: inputNameValue,
      phoneNumber: inputPhoneNumberValue,
      email: inputEmailValue,
      goals: inputMainGoalsValue,
      linkedin: inputLinkedInValue,
      purpose: inputSelectedPurpose,
      vacancy
    }

    if (files) {
      Object.values(files).forEach((file: any) => formData.append(`files.content`, file, file.name));
    }

    formData.append('data', JSON.stringify(dataValues));

    request.open('POST', sendUrl);
    request.send(formData);
    request.onload = (() => {
      if (request.status === 200) {
        setNotification(true);
      }
    })
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
                type={'text'}
                placeholder={'Email'}
                value={inputEmailValue}
                onChange={({ target }) => {
                  const currentEmailValue = target.value.replace(EMAIL_REGEX, '');

                  setInputEmailValue(currentEmailValue);
                }}
                pattern={EMAIL_VALID}
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
                placeHolder={`What\'s your purpose?`}
                width={'403px'}
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

            { notification &&
              <Notification>
                Your message has been delivered successfully!
              </Notification>
            }

            <SubmitButton text={buttonLabel}/>
          </FormContainer>
        </InputBlock>
      </Container>
  );
}

export default FormClassic;
