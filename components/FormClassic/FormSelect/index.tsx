import { useState } from "react";
import {
  DropList,
  Option,
  SelectBlock,
  SelectOption,
  SelectPlaceholder
} from "./FormSelect.style";
import Arrow from "../../../public/navArrow.svg";

interface ICreateFormSelect {
  fields: string[];
  formTheme?: boolean;
  setSelectedPurpose: Function;
}

const CreateFormSelect = ({ fields, formTheme = false, setSelectedPurpose }: ICreateFormSelect) => {
  const [shouldShowDropList, setShouldShowDropList] = useState('none');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const DropListPlaceholder = selectedOption && <p>{selectedOption}</p>;
  const DropListLabel = DropListPlaceholder
    || <SelectPlaceholder formTheme={formTheme}>What&#39;s your purpose?</SelectPlaceholder>;

  return (
    <SelectBlock formTheme={formTheme}>
      <SelectOption
        formTheme={formTheme}
        onClick={() => setShouldShowDropList('flex')}
      >
        {DropListLabel}

        <Arrow
          width="10.5"
          height="6"
          viewBox="0 0 10 5"
        />
      </SelectOption>

      <DropList display={shouldShowDropList} formTheme={formTheme}>
        {
          fields.map((label, index) =>
            <Option
              onClick={() => {
                setSelectedOption(label);
                setShouldShowDropList('none');
                setSelectedPurpose(label);
              }}
              formTheme={formTheme}
              key={index}
            >
              {label}
            </Option>
          )
        }
      </DropList>
    </SelectBlock>
  );
}

export default CreateFormSelect;
