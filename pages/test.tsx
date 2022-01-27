import { useState } from "react";
import Selector from "../components/Selector";
import SmallStar from "../public/SmallStar.svg";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const Test = () => {
  const [currentValue, setCurrentValue] = useState();

  return (
    <Selector
      value={currentValue}
      setValue={setCurrentValue}
      placeholder={"specialty"}
      options={options}
      icon={SmallStar}
    />
  );
};

export default Test;
