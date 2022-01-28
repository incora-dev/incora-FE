import { Input, SelectorWrapper, Option, OptionButton } from "./style";
import SelectSearch from "react-select-search-nextjs";
import ArrowBlackDown from "../../public/SVG/ArrowDownBlack.svg";
import { Dispatch, SetStateAction, useRef } from "react";
import Select from "react-select";
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

const Selector = ({ placeholder, options, icon, value, setValue }: any) => {
  const onChange = (value: any) => {
    
    setValue(value);
  };

  return (
    <SelectorWrapper>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
      />
    </SelectorWrapper>
  );
};

export default Selector;
