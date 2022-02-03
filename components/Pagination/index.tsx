import Arrow from "../../public/SVG/paginationArrow.svg";
import { Div, NumberBlock, LeftArrow, RightArrow } from "./Pagination.style";
import ReactPaginate from "react-paginate";

interface IPagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChanged: Function;
}

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChanged,
}: IPagination) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const leftChangeColorCondition = currentPage === 0;
  const rightChangeColorCondition = currentPage === totalPageCount;

  return (
    <>
      <Div>
        <NumberBlock>
          <ReactPaginate
            previousLabel={
              <LeftArrow changeColor={leftChangeColorCondition}>
                <Arrow />
              </LeftArrow>
            }
            className={"paginator"}
            activeClassName={"active"}
            pageCount={totalPageCount}
            breakLabel="..."
            pageRangeDisplayed={3}
            onPageChange={(page) => onPageChanged(page.selected + 1)}
            nextLabel={
              <RightArrow changeColor={rightChangeColorCondition}>
                <Arrow />
              </RightArrow>
            }
          />
        </NumberBlock>
      </Div>
    </>
  );
};

export default Pagination;
