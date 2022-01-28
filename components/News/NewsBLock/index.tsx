import { Container }  from "./NewsBlock.styles";
import createNews from "../CreatePosts";
import CreateNews from "../CreatePosts";

const NewsBLock = ({ news }: any) => {
  return (
    <Container number={news.length}>
      <CreateNews id={""} title={""} url={""} tags={[]} categories={[]} image={""} />
    </Container>
  )
}

export default NewsBLock;
