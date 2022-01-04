import { IProjectTechnologies } from "@interfaces";
import { Strong, Div, Container } from "./Technologies.style";

function Technologies(props: IProjectTechnologies) {

  return (
    <Container>
      {
        props.technologies.map((technology, index) =>
          <Div key={index}>
            <Strong key={index}>{technology}</Strong>
          </Div>
        )
      }
    </Container>
  )
}

export default Technologies;
