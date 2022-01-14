import { IProjectTechnologies } from "@interfaces";
import { Strong, A, Container, ButtonContainer } from "./Technologies.style";

function Technologies({ technologies, textTagsColor, bgTagsColor }: IProjectTechnologies) {

  return (
    <Container>
      {
        technologies.map((technology, index) => {
          return (
            <A href={technology} bgColor={bgTagsColor} key={index}>
              <ButtonContainer>
                <Strong color={textTagsColor} >{technology}</Strong>
              </ButtonContainer>
            </A>
          )
        })
      }
    </Container>
  )
}

export default Technologies;
