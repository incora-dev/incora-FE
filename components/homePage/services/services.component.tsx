import {Component, Position, Div, H2, Label, Labels, P} from "./styles";
import { IServices } from "@interfaces";

function ServicesComponent(props: IServices) {
  const { title, text, labels } = props;
  return (
    <Component>
      <Position>
        <Div>
          <H2>{title}</H2>
          <P>{text}</P>

          <Labels>
            {labels.map((label, index) => <Label key={index}>{label}</Label>)}
          </Labels>
        </Div>
      </Position>
    </Component>
  )
}

export default ServicesComponent;
