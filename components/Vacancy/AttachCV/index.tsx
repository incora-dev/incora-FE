import { IContactUs } from "../../../interfaces/contactUs.interface";
import Form from "../../Form";
import { AttachCvWrapper, DragAndDropBox } from "./style";

const contactUs: IContactUs = {
  title: "contact us",
  text: "Let’s create progress together!",
  formLabels: ["name", "phone number", "email", "city"],
  addresses: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  buttonLabel: "Join Us",
};

const AttachCv = () => {
  return (
    <AttachCvWrapper>
      <h3>{"1. Attach Your CV"}</h3>
      <DragAndDropBox>
        <span className="clickable">
          {"Upload a file "}{" "}
          <span className="non_clickable">{"or drag and drop here"}</span>
        </span>

        <p>{"We accept PDF, DOC, DOCX, JPG and PNG files."}</p>
      </DragAndDropBox>
      <h3 className="personal" >{"2. Personal information"}</h3>
      <Form
        fieldsLabels={contactUs.formLabels}
        buttonLabel={contactUs.buttonLabel}
      />
    </AttachCvWrapper>
  );
};

export default AttachCv;
