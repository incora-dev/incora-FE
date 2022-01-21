import {
  ClientInfoWrap,
  ClientsFeedbackWrapper,
  FeedbackWrap,
  HeadingWrap,
} from "./style";
import Quotes from "../../../public/icons/Quotes.svg";
import Image from "next/image";
import clientPhoto from "../../../public/images/clientPhoto2.png";

const ClientsFeedback = () => {
  return (
    <ClientsFeedbackWrapper>
      <HeadingWrap>
        <h1>{"client's feedback"}</h1>
      </HeadingWrap>
      <FeedbackWrap>
        <Quotes />
        <p>
          Incora supports our web development projects that involve Ruby on
          Rails and Node. They assign us a project manager, product manager, and
          two full stack developers per project. Incora is one of the fastest
          teams we’ve worked with. Incora is meeting our demanding requirements,
          and we’re very happy with them. Our communication has worked well so
          far.
        </p>
        <ClientInfoWrap>
          <Image
            src={clientPhoto.src}
            width={53}
            height={53}
            alt="client photo"
          />
          <div>
            <h3>ralph wutscher</h3>
            <span>COO and Chief Legal Officer at Incubator LLC</span>
          </div>
        </ClientInfoWrap>
      </FeedbackWrap>
    </ClientsFeedbackWrapper>
  );
};

export default ClientsFeedback;
