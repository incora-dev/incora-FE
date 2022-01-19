import { IForm } from "@interfaces";
import { Container, FormContainer, InputBlock, Input } from "./Form.style";
import ButtonWithArrow from "../ButtonWithArrow";

function createFormFields(fields: string[], formBlack = false) {
  return (
    <FormContainer>
      {fields.map((label, index) => {
        const type = index === 2 ? "email" : "text";

        return (
          <Input
            formBlack={formBlack}
            type={type}
            placeholder={label}
            key={index}
          />
        );
      })}
    </FormContainer>
  );
}

function Form({ fieldsLabels, buttonLabel, formBlack }: IForm) {
  const inputs = createFormFields(fieldsLabels, formBlack);

  return (
    <Container>
      <InputBlock>{inputs}</InputBlock>
      <ButtonWithArrow buttonLabel={buttonLabel} redirectTo={buttonLabel} />
    </Container>
  );
}

export default Form;
