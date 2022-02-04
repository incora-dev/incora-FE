import {FunctionComponent, useEffect, useRef, useState} from "react";
import {
  DropList,
  Option,
  SelectBlock,
  SelectOption,
  SelectPlaceholder,
  Label,
  ArrowWrapper
} from "./FormSelect.style";
import Arrow from "../../../public/navArrow.svg";

interface ICreateFormSelect {
  fields: string[];
  formTheme?: boolean;
  setSelectedPurpose: Function;
  placeHolder: string | null;
  width?: string;
  Icon?: FunctionComponent | null;
}

const CreateFormSelect = ({ fields, formTheme = false, setSelectedPurpose, placeHolder, width = '100%', Icon = null }: ICreateFormSelect) => {
  const [shouldShowDropList, setShouldShowDropList] = useState('none');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const DropListPlaceholder = selectedOption && <p>{selectedOption}</p>;
  const DropListLabel = DropListPlaceholder
    || <SelectPlaceholder formTheme={formTheme}>{placeHolder}</SelectPlaceholder>;

  const dropList = useRef(null);

  useEffect(() => {
    if (shouldShowDropList === 'none') return;
    function handleClick(event: MouseEvent) {
      if (dropList.current && !dropList.current.contains(event.target)) {
        setShouldShowDropList('none');
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [shouldShowDropList]);

  return (
    <SelectBlock formTheme={formTheme} width={width}>
      <SelectOption
        formTheme={formTheme}
        onClick={() => setShouldShowDropList('flex')}
      >
        <Label className={'svgYellow'}>
          {Icon && <Icon/>}

          {DropListLabel}
        </Label>

        <ArrowWrapper formTheme={formTheme}>
          <Arrow
            width="10.5"
            height="6"
            viewBox="0 0 10 5"
          />
        </ArrowWrapper>
      </SelectOption>

      <DropList display={shouldShowDropList} formTheme={formTheme} ref={dropList}>
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
