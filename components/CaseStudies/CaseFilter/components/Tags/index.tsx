import { useState } from "react";
import { TagsWrapper } from "./style";
import Tag from "./Tag";

interface ITags {
  labels: string[];
}

const Tags = ({ labels }: ITags) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const tags = labels.map((label, index) => (
    <Tag
      key={index * Math.random()}
      label={label}
      index={index}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  ));

  return <TagsWrapper>{tags}</TagsWrapper>;
};

export default Tags;
