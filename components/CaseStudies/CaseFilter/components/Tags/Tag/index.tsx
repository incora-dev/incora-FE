import { Dispatch, SetStateAction } from "react";
import { TagWrapper } from "./style";

interface ITag {
  label: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Tag = ({ label, index, currentIndex, setCurrentIndex }: ITag) => {
  const onClick = () => {
    setCurrentIndex(index);
  };

  return (
    <TagWrapper currentIndex={currentIndex} index={index} onClick={onClick}>
      <span>{label}</span>
    </TagWrapper>
  );
};

export default Tag;
