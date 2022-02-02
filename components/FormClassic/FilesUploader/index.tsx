import {ChangeEvent, FormEvent, ReactElement, useState} from "react";
import {
  FilesSelected,
  Input,
  SelectedFile,
  UploadFile,
  Wrapper
} from "./FilesUploader.style";

interface IFilesUploader {
  filesLabel: ReactElement;
  formTheme: boolean;
  setSelectedFile: Function;
  padding: string;
  inputHeight: string;
}

const FilesUploader = ({ filesLabel, formTheme = false, setSelectedFile, padding = '15px 35px', inputHeight = '41px'}: IFilesUploader) => {
  const [uploadFilesName, setUploadFilesName]  = useState<JSX.Element[]>([]);

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = event;

    if (files) {
      const filesName = () =>
          Object.values(files).map(({ name }: File, index) =>
              <SelectedFile key={index}>
                {index + 1}. {name}
              </SelectedFile>
          )

      setSelectedFile(files);
      setUploadFilesName(filesName);
    }
  };

  return (
      <Wrapper>
        <UploadFile padding={padding} formTheme={formTheme}>
          <Input
            height={inputHeight}
            formTheme={formTheme}
            type={'file'}
            id={'inputUploadFiles'}
            multiple={true}
            onChange={handleOnchange}
          />

          <label htmlFor={'inputUploadFiles'}>{filesLabel}</label>
        </UploadFile>

        <FilesSelected
            formTheme={formTheme}
            showFiles={uploadFilesName.length !== 0 ? 'block' : 'none'}
        >
          {uploadFilesName}
        </FilesSelected>
      </Wrapper>
  )
}

export default FilesUploader;
