import {Div, P} from "./Categories.style";
import Link from "next/link"


const Categories = ({ categories }: any) => {
  return (
    <Div>
      {categories.map((category: string, index: number) => {
        return (
          <Link href={`/technologies/${category}`} key={index}>
            <a>
              <P>{category}{(categories.length - 1 !== index) && ','}</P>
            </a>
          </Link>
        )
      })}
    </Div>
  )
};

export default Categories;
