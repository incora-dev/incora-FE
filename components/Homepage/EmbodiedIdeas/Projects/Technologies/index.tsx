import { IProjectTechnologies } from "@interfaces";
import { Strong, A, Container, ButtonContainer } from "./Technologies.style";

function Technologies({ technologies, textTagsColor, bgTagsColor }: IProjectTechnologies) {

  return (
    <Container>
      {
        technologies.map((technology, index) => {
          return (
            <A href={technology} bgColor={bgTagsColor} color={textTagsColor} key={index}>
              <ButtonContainer>
                <Strong>{technology}</Strong>
              </ButtonContainer>
            </A>
          )
        })
      }
    </Container>
  )
}

export default Technologies;
