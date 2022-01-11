import { Component, Div, H2, PaddingTop, MarginTop } from "./Technologies.style";
import { ITechnologies } from "@interfaces";
import Arrow from "../../../public/SVG";
import BlockTechnologies from "./BlockTechnologies";
import Link from "next/link"

function TechnologiesComponent({ title, bgColor, labels }: ITechnologies) {

  return (
    <Component bgColor={bgColor}>
      <PaddingTop>
        <Div>
          <H2>{title}</H2>

          <Link href={title}>
            <a>
              <Arrow/>
            </a>
          </Link>
        </Div>
      </PaddingTop>

      <MarginTop>
        <BlockTechnologies technologies={labels}/>
      </MarginTop>
    </Component>
  )
}

export default TechnologiesComponent;
