import { IForm } from "@interfaces";
import { Container, FormContainer, InputBlock, Input } from "./Form.style";
import ButtonWithArrow from "../ButtonWithArrow";

function createFormFields(fields: string[]) {
  return (
    <FormContainer>
      {fields.map((label, index) => {
        const type = index === 2 ? 'email' : 'text';

        return (
          <Input
            type={type}
            placeholder={label}
            key={index}
          />
        )
      })}
    </FormContainer>
  )
};

function Form({ fieldsLabels, buttonLabel }: IForm) {
  const inputs = createFormFields(fieldsLabels);

  return (
    <Container>
      <InputBlock>
        {inputs}
      </InputBlock>
      <ButtonWithArrow buttonLabel={buttonLabel} redirectTo={buttonLabel} />
    </Container>
  )
}

export default Form;
