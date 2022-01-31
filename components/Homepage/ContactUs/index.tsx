import {
  Container,
  H2,
  H4,
  Titles,
  Block,
  PositionLoading
} from "./ContactUs.style";
import { IContactUs } from "@interfaces";
import Form from "../../FormClassic";
import Addresses from "./Addresses";
import Loading from "../../../public/loading1.svg";


function ContactUsComponent({ title, text, addresses, buttonLabel }: IContactUs) {
  return (
    <Block>
      <Container>
        <div>
          <Titles>
            <H2>{title}</H2>
            <H4>{text}</H4>
          </Titles>

          <Form buttonLabel={buttonLabel}/>
        </div>

        <Addresses addresses={addresses}/>

        <PositionLoading>
          <Loading/>
        </PositionLoading>
      </Container>
    </Block>
  )
}

export  default ContactUsComponent;
