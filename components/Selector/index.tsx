import { Input, SelectorWrapper } from "./style";
import SelectSearch from "react-select-search-nextjs";
import ArrowBlackDown from "../../public/SVG/ArrowDownBlack.svg";
import { Dispatch, SetStateAction, useRef } from "react";

interface IOptions {
  value: string;
  name: string;
}

interface ISelector {
  placeholder: string;
  options: IOptions[];
  icon: React.ComponentClass<any>;
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
}

const Selector = ({
  placeholder,
  options,
  icon,
  value,
  setValue,
}: ISelector) => {
  const Icon = icon;
  const inputRef = useRef<any>();

  const Select = (valueProps: any) => {
    return (
      <SelectorWrapper>
        <Icon className="icon" />
        <ArrowBlackDown className="arrow" />
        <Input {...valueProps} ref={inputRef} />
      </SelectorWrapper>
    );
  };

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <SelectSearch
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      renderValue={Select}
      options={options}
    />
  );
};

export default Selector;
