import { Dispatch, SetStateAction, useContext } from "react";
import { TagWrapper } from "./style";

interface ITag {
  label: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setCurrentIndustryTag: Dispatch<SetStateAction<string>>;
}

const Tag = ({
  label,
  index,
  currentIndex,
  setCurrentIndex,
  setCurrentIndustryTag,
}: ITag) => {
  const onClick = () => {
    setCurrentIndustryTag(label);
    setCurrentIndex(index);
  };

  return (
    <TagWrapper currentIndex={currentIndex} index={index} onClick={onClick}>
      <span>{label}</span>
    </TagWrapper>
  );
};

export default Tag;
