import {
  Container,
  LogoBlock,
  PoliciesBlock,
  Copyright,
  PolicyLabel,
  OfficesBlock,
  H4,
  Offices,
  Position,
  Country,
  Address,
  PagesBlock,
  Pages,
  Page,
  FollowUsBlock,
  A,
  FollowUs
} from "./Footer.style";
import IncoraLogo from "../../public/logo.svg"
import { IFollowUs, IFooter} from "../../interfaces/footer.interface";
import  Link from "next/link";
import React from "react";
import ClutchcoLogo from "../../public/SVG/logoClutchco.svg"
import { clutchLink } from "../../constants";

function createOfficesBlock(offices: object[]) {
  return offices.map((office) =>
    Object.keys(office).map((country, index) =>
      Object.values(office).map((address) =>
        <div key={index}>
          <Country>{country}</Country>
          <Address>{address}</Address>
        </div>
      )
    )
  )
}

function createFollowUsBlock(followUs: IFollowUs[]) {
  return followUs.map((el, index) => {
    const { redirectTo } = el;

     return (
       <React.Fragment key={index}>
            <A href={redirectTo}>
              <el.icon/>
            </A>
        </React.Fragment>
      )
    }
  )
}

function FooterComponent( { policies, offices, followUs, pages, copyright }: IFooter) {
  const officesBlock = createOfficesBlock(offices);
  const followUsBlock = createFollowUsBlock(followUs);

  return (
    <Container>
      <Position>
        <LogoBlock>
          <IncoraLogo/>

          <PoliciesBlock>
            {
              policies.map((policy, index) =>
                <PolicyLabel key={index}>{policy}</PolicyLabel>
              )
            }
          </PoliciesBlock>

          <Copyright>{copyright}</Copyright>
        </LogoBlock>
        <OfficesBlock>
          <H4>offices</H4>

          <Offices>
            {officesBlock}
          </Offices>
        </OfficesBlock>
        <PagesBlock>
          <H4>pages</H4>
          <Pages>
            {
              pages.map((page, index) =>
                <Page key={index}>
                    <a href={page}>
                      {page}
                    </a>
                </Page>
              )
            }
          </Pages>
        </PagesBlock>
        <FollowUsBlock>
          <H4>follow us</H4>
          <FollowUs>
            {followUsBlock}
          </FollowUs>

            <a target="_blank" href={clutchLink} rel="noopener noreferrer">
              <ClutchcoLogo/>
            </a>
        </FollowUsBlock>
      </Position>
    </Container>
  )
}

export default FooterComponent;
