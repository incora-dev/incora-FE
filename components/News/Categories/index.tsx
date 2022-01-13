import {Div, P} from "./Categories.style";

const Categories = ({ categories }) => {
  return (
    <Div>
      {categories.map((category: string, index: number) => {
        return (
            <a key={index} href={category}>
              <P>{category}{(categories.length - 1 !== index) && ','}</P>
            </a>
        )
      })}
    </Div>
  )
};

export default Categories;
