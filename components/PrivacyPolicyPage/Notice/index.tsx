import { Div, TextBlock, Wrapper, H3, Button } from "./Notice.style";
import { useState } from "react";

const Notice = () => {
  const [shouldClose, setShouldClose] = useState(false);

  return (
    <Div shouldShowNotice={shouldClose}>
      <Wrapper>
        <TextBlock>
          <H3>This site uses cookies to improve your user experience.
            <a href={'https://www.google.com/search?q=cookies'}>Read More</a>
          </H3>
          <Button onClick={() => setShouldClose(true)}>
            <a>Accept</a>
          </Button>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default Notice;
