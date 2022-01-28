import Arrow from "../../public/SVG/paginationArrow.svg";
import {
  Div,
  NumberBlock,
  Number,
  LeftArrow,
  RightArrow,
} from "./Pagination.style";
import { useState } from "react";
import { maxSlideNumber, minSlideNumber } from "../../utils";

const numbers = ["1", "2", "3", "...", "8", "9", "10"];

interface IPagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChanged: (value: number) => void;
  siblingCount?: number;
}

const getNUmberButtons = (
  numbers: string[],
  select: number,
  setSelect: Function
) => {
  return (
    <>
      {numbers.map((number, index) => {
        const selected = select === index;

        return (
          <Number
            key={index}
            select={selected}
            onClick={() => setSelect(index)}
          >
            {number}
          </Number>
        );
      })}
    </>
  );
};

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChanged,
  siblingCount,
}: IPagination) => {
  const [select, setSelect] = useState(0);
  const totalPageCount = Math.ceil(totalCount / pageSize);

  return (
    <Div>
      <NumberBlock>
        <LeftArrow
          changeColor={select === 0}
          onClick={() => setSelect(maxSlideNumber(select))}
        >
          <Arrow />
        </LeftArrow>
        {getNUmberButtons(numbers, select, setSelect)}
        <RightArrow
          changeColor={select === numbers.length - 1}
          onClick={() => setSelect(minSlideNumber(select, numbers.length))}
        >
          <Arrow />
        </RightArrow>
      </NumberBlock>
    </Div>
  );
};

export default Pagination;
