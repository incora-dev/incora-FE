import { useEffect, useState } from "react";
import { SwitchWrap, YellowButton } from "./style";

interface ISwitch {
  left: string;
  right: string;
  handleValue: (value: boolean) => void;
  backgroundColor?: string;
}

const Switch = ({ left, right, handleValue, backgroundColor }: ISwitch) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    handleValue(toggle);
  }, [toggle]);

  return (
    <SwitchWrap
      toggle={toggle}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <YellowButton toggle={toggle} />
      <span className="left">{left}</span>
      <span className="right">{right}</span>
    </SwitchWrap>
  );
};

export default Switch;
