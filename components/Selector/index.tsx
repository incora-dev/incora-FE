import { Input, SelectorWrapper } from "./style";
import SelectSearch, { ValueProps } from "react-select-search-nextjs";
import ArrowBlackDown from "../../public/SVG/ArrowDownBlack.svg";
import Image from "next/image";
import { useRef } from "react";

interface IOptions {
  value: string;
  name: string;
}

interface ISelector {
  placeholder: string;
  options: IOptions[];
  icon: React.ComponentClass<any>;
}

const Selector = ({ placeholder, options, icon }: ISelector) => {
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

  return (
    <SelectSearch
      placeholder={placeholder}
      renderValue={Select}
      options={options}
    />
  );
};

export default Selector;
