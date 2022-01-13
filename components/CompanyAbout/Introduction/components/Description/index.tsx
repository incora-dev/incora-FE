import { DescriptionWrapper, Paragraphs, HeaderText, TextWrap } from "./style";

const headerText =
  "We are a talented software development company that helps business build, launch, and grow outstanding software products.";

const Description = () => {
  return (
    <DescriptionWrapper>
      <TextWrap>
        <HeaderText>
          <h1>{headerText}</h1>
        </HeaderText>

        <Paragraphs>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptate minima ex labore nisi itaque tempore deleniti perspiciatis
            suscipit in, placeat veritatis odio maxime! Quam veniam accusantium
            enim ex non adipisci repellat. Aspernatur ad quos cupiditate
            voluptatum molestiae et est recusandae fugiat sapiente atque
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            libero nesciunt sapiente dignissimos ducimus obcaecati! Commodi,
            reiciendis quod. Sequi perferendis nesciunt quae nobis facere
            excepturi eligendi quod? Enim cupiditate voluptate magnam officia
            nisi vitae voluptatem culpa iure tenetur dolore, dignissimos
            cum.
          </p>
        </Paragraphs>
      </TextWrap>
    </DescriptionWrapper>
  );
};

export default Description;
