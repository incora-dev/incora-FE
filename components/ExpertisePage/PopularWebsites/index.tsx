import { Div, Wrapper, TextBlock, H2, IconsBlock } from "./PopularWebsites.style";
import React from "react";
import Link from "next/link";
import {firstLetterBig} from "../../../utils";

interface IPopularWebsites {
  title: string;
  webSites: React.FunctionComponent[];
}

const getIcons = (icons: React.FunctionComponent[]) => {
  return icons.map(( Icon , index) =>
    <React.Fragment key={index + 3000}>
      <Link href={`${index}`}>
        <Icon/>
      </Link>
    </React.Fragment>
  )
}

const PopularWebsites = ({ title, webSites}: IPopularWebsites) => {
  const icons = getIcons(webSites);
  const H2title = firstLetterBig('popular websites that use ') + firstLetterBig(title) +'?';

  return (
    <Div>
      <Wrapper>
        <TextBlock>
          <H2>{H2title}</H2>
          <IconsBlock>
            {icons}
          </IconsBlock>
        </TextBlock>
      </Wrapper>
    </Div>
  )
}

export default PopularWebsites;
