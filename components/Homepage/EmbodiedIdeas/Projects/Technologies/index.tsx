import { IProjectTechnologies } from "@interfaces";
import { Strong, A, Container, ButtonContainer } from "./Technologies.style";
import Link from "next/link";

function Technologies({ technologies }: IProjectTechnologies) {

  return (
    <Container>
      {
        technologies.map((technology, index) =>
          <Link href={technology} key={index}>
            <A>
              <ButtonContainer>
                <Strong>{technology}</Strong>
              </ButtonContainer>
            </A>
          </Link>

        )
      }
    </Container>
  )
}

export default Technologies;
