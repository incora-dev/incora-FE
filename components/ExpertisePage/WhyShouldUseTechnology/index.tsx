import {
  Div,
  Wrapper,
  InfoBlock,
  H1,
  ArgumentsBlock,
  TechnologyWrapper,
  H3,
  Text
} from "./WhyShouldUseTechnology.style";
import { firstLetterBig } from "../../../utils";

interface ITechnology {
  title: string;
  text: string;
}

const aboutTechnology: ITechnology[] = [
  { title: 'Decreased development time', text: 'React.js allows you to create reusable UI components, which cuts down on development time. By modifying just one page chunk at a time, you omit reloading the full page for each update.'},
  { title: 'Support from the majority of browsers', text: 'React.js is compatible with all major browsers, namely Internet Explorer 9, Chrome, Firefox and others. As soon as a new version of React.js is released, they enhance their engines.'},
  { title: 'Smooth performance despite complex operations', text: 'React.js has its own virtual DOM and since it is much faster than the browser’s one, it deals even with moderately complicated underlying operations or database queries.'},
]

const getArguments = (technology: ITechnology[]) => {
  return technology.map(({ title, text}, index) =>
    <TechnologyWrapper key={index}>
      <H3>{title}</H3>
      <Text>{text}</Text>
    </TechnologyWrapper>
  )
}

const WhyShouldUseTechnology = ({ title, bgColor, titleColor }) => {
  const h1Title = firstLetterBig('why should you use ') + firstLetterBig(title) +'?';
  const argumentsTechnology = getArguments(aboutTechnology);

  return (
    <Div bgColor={bgColor}>
      <Wrapper>
        <InfoBlock>
          <H1 color={titleColor}>{h1Title}</H1>
          <ArgumentsBlock>
            {argumentsTechnology}
          </ArgumentsBlock>
        </InfoBlock>
      </Wrapper>
    </Div>
  )
}

export default WhyShouldUseTechnology;
