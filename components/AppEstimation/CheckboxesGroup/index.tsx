import { ChangeEvent } from 'react';
import Checkbox from './Checkbox';
import { ICheckboxesGroup } from './CheckboxesGroup.types';
import {
  Checkboxes,
  CheckboxesGroupContainer,
  Title,
} from './CheckboxesGroup.style';

interface ICheckboxesGroupProps {
  group: ICheckboxesGroup,
  checkedFeatures: number[],
  onChange: (id: number) => void,
};

const CheckboxesGroup = ({ group, checkedFeatures, onChange }: ICheckboxesGroupProps) => <CheckboxesGroupContainer>
  <Title>{group.name}</Title>
  <Checkboxes>
    {group.features && group.features.length && group.features.map((feature) => {
      const checked = checkedFeatures.includes(feature.id);
      return <Checkbox key={feature.name} item={feature} checked={checked} onChange={onChange} />
    })}
  </Checkboxes>
</CheckboxesGroupContainer>;

export default CheckboxesGroup;
