import {
  ClientInfoWrap,
  ClientsFeedbackWrapper,
  FeedbackWrap,
  HeadingWrap,
} from "./style";
import Quotes from "../../../public/icons/Quotes.svg";
import Image from "next/image";
import clientPhoto from "../../../public/images/clientPhoto2.png";
import { GetProjectPage_project_data_attributes_feedback_data_attributes } from "../../../graphql/caseStudies/__generated__/GetProjectPage";
import { IMAGES_LINK } from "../../../constants";

interface IClientFeedBack {
  feedback: GetProjectPage_project_data_attributes_feedback_data_attributes;
}

const ClientsFeedback = ({ feedback }: IClientFeedBack) => {
  const { text, clientName, clientPhoto, clientPosition } = feedback;
  const src = IMAGES_LINK + clientPhoto.data?.attributes?.url;

  return (
    <ClientsFeedbackWrapper>
      <HeadingWrap>
        <h2>{"client's feedback"}</h2>
      </HeadingWrap>
      <FeedbackWrap>
        <Quotes />
        <p>{text}</p>
        <ClientInfoWrap>
          <Image
            loader={() => src}
            src={src}
            width={53}
            height={53}
            alt="client photo"
          />
          <div>
            <h3>{clientName}</h3>
            <span>{clientPosition}</span>
          </div>
        </ClientInfoWrap>
      </FeedbackWrap>
    </ClientsFeedbackWrapper>
  );
};

export default ClientsFeedback;
