import Button from '../../Button';
import { Platforms } from '../AppEstimations.types';
import {
  Container,
  MainContainer,
  PlatformsBlock,
  PlatformsContainer,
  PlatformsTitle,
  Text,
  Title,
} from './Header.style';

interface IHeaderProps {
  title: string,
  text: string,
  platform: Platforms,
  setPlatform: (platform: Platforms) => void,
};

const Header = ({ platform, title, text, setPlatform }: IHeaderProps) => (
  <MainContainer>
    <Container>
      <div>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <PlatformsContainer>
          <PlatformsTitle>Choose your platform:</PlatformsTitle>
          <PlatformsBlock>
            {Object.values(Platforms).map((platform) => <Button
              key={platform}
              label={platform}
              width={210}
              height={67}
              link=''
            />)}
          </PlatformsBlock>
        </PlatformsContainer>
      </div>
    </Container>
  </MainContainer>
);

export default Header;