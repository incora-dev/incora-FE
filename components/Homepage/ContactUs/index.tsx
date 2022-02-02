import {
  Container,
  H2,
  H4,
  Titles,
  Block
} from "./ContactUs.style";
import { IContactUs } from "@interfaces";
import Form from "../../Form";
import Addresses from "./Addresses";


function ContactUsComponent({ title, text, formLabels, addresses, buttonLabel }: IContactUs) {
  return (
    <Block>
      <Container>
        <div>
          <Titles>
            <H2>{title}</H2>
            <H4>{text}</H4>
          </Titles>

          <Form fieldsLabels={formLabels} buttonLabel={buttonLabel}/>
        </div>

        <Addresses addresses={addresses}/>
      </Container>
    </Block>
  )
}

export  default ContactUsComponent;
