import Arrow from "../../public/SVG/paginationArrow.svg";
import {
  Div,
  NumberBlock,
  Number,
  LeftArrow,
  RightArrow,
} from "./Pagination.style";
import { useEffect, useMemo, useState } from "react";
import { maxSlideNumber, minSlideNumber } from "../../utils";

const numbers = ["1", "2", "3", "...", "8", "9", "10"];

interface IPagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChanged: (page: number) => void;
  siblingCount?: number;
}

const getNUmberButtons = (
  numbers: (string | number)[],
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

interface IUsePagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IUsePagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const range = (start: number, end: number) => {
      let length = end - start + 1;

      return Array.from({ length }, (_, idx) => idx + start);
    };

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, "...", totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, "...", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChanged,
  siblingCount,
}: IPagination) => {
  const [select, setSelect] = useState(0);

  const paginationRange = usePagination({
    totalCount,
    currentPage,
    pageSize,
    siblingCount,
  });

  const onNext = () => {
    onPageChanged(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChanged(currentPage - 1);
  };

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  useEffect(() => {
    console.log(paginationRange);
  });

  return (
    <>
      {paginationRange && (
        <Div>
          <NumberBlock>
            <LeftArrow changeColor={select === 0} onClick={onPrevious}>
              <Arrow />
            </LeftArrow>
            {getNUmberButtons(paginationRange, select, setSelect)}
            <RightArrow
              changeColor={select === numbers.length - 1}
              onClick={onNext}
            >
              <Arrow />
            </RightArrow>
          </NumberBlock>
        </Div>
      )}
    </>
  );
};

export default Pagination;

// () => setSelect(maxSlideNumber(select))

// () => setSelect(maxSlideNumber(select))
