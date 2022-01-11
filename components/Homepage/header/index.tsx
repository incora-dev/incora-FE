import {
  Cover,
  Container,
  Div,
  Titles,
  Title1,
  Title2,
  TitleContainer,
  Title3,
  Title4,
  ScrollContainer,
  Line,
  ScrollText
} from './styles'

function HeaderComponent() {
  return (
    <Cover>
      <Container>
        <Div>
          <Titles>
            <Title1>Deepen to</Title1>
            <Title2>the Core</Title2>
            <TitleContainer>
              <Title3>of Idea</Title3>
              <Title4>of Idea</Title4>
            </TitleContainer>
          </Titles>

          <ScrollContainer>
            <Line/>
            <ScrollText>scroll</ScrollText>
          </ScrollContainer>
        </Div>
      </Container>
    </Cover>
  )
}

export default HeaderComponent;
