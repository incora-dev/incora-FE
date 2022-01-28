import {
  CheckboxContainer,
  HiddenCheckbox,
  Label,
  StyledCheckbox,
} from './Checkbox.style';
import { ICheckbox } from '../CheckboxesGroup.types';
import TickIcon from '../../../../public/icons/Tick.svg';

interface ICheckboxProps {
  item: ICheckbox,
  checked: boolean,
  onChange: (id: number) => void,
}

const Checkbox = ({ item, checked, onChange }: ICheckboxProps) => {
  const { name } = item;

  const onChangeCheckbox = (id: number) => {
    onChange(id);
  };

  return <CheckboxContainer checked={checked}>
    <Label>{name}</Label>
    <HiddenCheckbox
      key={item.id}
      checked={checked}
      onChange={() => onChangeCheckbox(item.id)}
    />
    <StyledCheckbox checked={checked}>
      {checked && <TickIcon />}
    </StyledCheckbox>
  </CheckboxContainer>;
};

export default Checkbox;
