import { useState } from 'react';
import { Platforms } from '../AppEstimations.types';
import CheckboxesGroup from '../CheckboxesGroup';
import { ICheckboxesGroup } from '../CheckboxesGroup/CheckboxesGroup.types';
import EstimationBlock from '../EstimationBlock';
import {
  Container,
  Content,
  LeftColumn,
  RightColumn,
  Title,
} from './MainContent.style';

const categories: ICheckboxesGroup[] = [
  {
    name: "Admin Features",
    features: [
      {
        id: 1,
        name: "Custom Reporting",
        platforms: [
          {
            id: 1,
            name: "Apple iOS",
            min: 10,
            max: 20,
          },
          {
            id: 2,
            name: "Web",
            min: 3,
            max: 5
          }
        ]
      },
      {
        id: 2,
        name: "Ready-made Admin",
        platforms: [
          {
            id: 3,
            name: "Apple iOS",
            min: 13,
            max: 40
          },
          {
            id: 4,
            name: "Web",
            min: 2,
            max: 4
          }
        ]
      }
    ]
  },
  {
    name: "Content Generation",
    features: [
      {
        id: 3,
        name: "Content creation",
        platforms: [
          {
            id: 5,
            name: "Apple iOS",
            min: 4,
            max: 5
          },
          {
            id: 6,
            name: "Android",
            min: 6,
            max: 7
          }
        ]
      },
      {
        id: 4,
        name: "Forum",
        platforms: [
          {
            id: 7,
            name: "Apple iOS",
            min: 4,
            max: 7
          },
          {
            id: 8,
            name: "Android",
            min: 7,
            max: 8
          }
        ]
      }
    ]
  }
];

const initialEstimationTime = {
  optimistic: 0,
  pessimistic: 0,
};

interface IMainContentProps {
  platform: Platforms;
};

const MainContent = ({ platform }: IMainContentProps) => {
  const [checkedFeatures, setCheckedFeatures] = useState<number[]>([]);
  const [estimationTime, setEstimationTime] = useState(initialEstimationTime);

  const onCheckboxChange = (id: number) => {
    const ids = checkedFeatures;
    const index = ids.indexOf(id);
    if (index > -1) {
      ids.splice(index, 1);
    } else {
      ids.push(id);
    }
    setCheckedFeatures([...ids]);
    categories.map((category) => {
      const addedFeature = category.features.find((feature) => feature.id === id);
      if (!addedFeature) return;
      const selectedPlatform = addedFeature.platforms.find((pl) => pl.name.toLowerCase() === platform);
      if (!selectedPlatform) return;
      setEstimationTime({
        optimistic: estimationTime.optimistic + selectedPlatform?.min,
        pessimistic: estimationTime.pessimistic + selectedPlatform?.max,
      });
    })
  };

  return <Container>
    <Title>Choose Your App’s Features</Title>
    <Content>
      <LeftColumn>
        {categories.map((group) => <CheckboxesGroup key={group.name} group={group} checkedFeatures={checkedFeatures} onChange={onCheckboxChange} />)}
      </LeftColumn>
      <RightColumn>
        <EstimationBlock estimations={estimationTime} />
      </RightColumn>
    </Content>
  </Container>;
};

export default MainContent;
