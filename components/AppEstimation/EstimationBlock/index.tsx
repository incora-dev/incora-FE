import {
  Button,
  Content,
  Label,
  TimeBlock,
  TimeValue,
  Title,
} from './EstimationBlock.style';

interface IEstimation {
  optimistic: number,
  pessimistic: number,
};

interface IEstimationsBlockProps {
  estimations: IEstimation,
}

const EstimationBlock = ({ estimations }: IEstimationsBlockProps) => (
  <>
    <Title>Your Title Here</Title>
    <Content>
      {Object.keys(estimations).map((key) => <TimeBlock key={key}>
        <Label>{key}</Label>
        <TimeValue>{estimations[key as keyof IEstimation]}h</TimeValue>
      </TimeBlock>)}
      <Button>Calculate</Button>
    </Content>
  </>
);

export default EstimationBlock;
