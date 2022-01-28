import { Div, P } from "./Categories.style";
import Link from "next/link";
import { GetArticlesList_articles_data_attributes_industries_data } from "../../../graphql/insights/__generated__/GetArticlesList";

interface ICategories {
  categories: GetArticlesList_articles_data_attributes_industries_data[];
}

const Categories = ({ categories }: ICategories) => {
  return (
    <Div>
      {categories.map(({ id, attributes }, index) => {
        const url = attributes?.url;
        const name = attributes?.name;

        return (
          <Link href={`/technologies/${url}`} key={id}>
            <a>
              <P>
                {name}
                {categories.length - 1 !== index && ","}
              </P>
            </a>
          </Link>
        );
      })}
    </Div>
  );
};

export default Categories;
