import { Dispatch, SetStateAction, useState } from "react";
import { GetIndustriesNames_industries, GetIndustriesNames_industries_data } from "../../../../../graphql/caseStudies/__generated__/GetIndustriesNames";
import { TagsWrapper } from "./style";
import Tag from "./Tag";

interface ITags {
  labels: GetIndustriesNames_industries_data[];
  setCurrentIndustryTag: Dispatch<SetStateAction<string>>;
}

const Tags = ({ labels, setCurrentIndustryTag }: ITags) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const tagsArray = labels.map((label) => {
    const id = label.id;
    const name = label.attributes?.name;

    return {
      id,
      name,
    };
  });

  tagsArray.unshift({ id: "0", name: "all" });

  const tags = tagsArray.map((label, index) => {
    return (
      <>
        {label.name && (
          <Tag
            key={label.id}
            label={label.name}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setCurrentIndustryTag={setCurrentIndustryTag}
          />
        )}
      </>
    );
  });

  return <TagsWrapper>{tags}</TagsWrapper>;
};

export default Tags;
