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
import React from "react";
import ClutchLogo from "../../public/SVG/logoClutchco.svg"
import { clutchLink } from "../../constants";
import Link from "next/link";

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
         <A target={'_blank'} href={`${redirectTo}`} key={index}>
           <el.icon viewBox={"0 0 1"}/>
         </A>
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
                  <Link href={page.toLowerCase()}>
                    <a>
                      {page}
                    </a>
                  </Link>

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

          <Link href={clutchLink} >
            <a target="_blank" rel="noopener noreferrer">
              <ClutchLogo/>
            </a>
          </Link>
        </FollowUsBlock>
      </Position>
    </Container>
  )
}

export default FooterComponent;
