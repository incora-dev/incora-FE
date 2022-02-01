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
import Facebook from "../../public/SVG/socialNetwork/facebook.svg";
import LinkedIn from "../../public/SVG/socialNetwork/linkedIn.svg";
import Instagram from "../../public/SVG/socialNetwork/instagram.svg";

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

const footer: IFooter = {
  policies: ["privacy policy"],
  offices: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  pages: ["Services", "expertise", "Case Studies", "Company", "Insights"],
  followUs: [
    { icon: Facebook, redirectTo: "Facebook" },
    { icon: LinkedIn, redirectTo: "LinkedIn" },
    { icon: Instagram, redirectTo: "Instagram" },
  ],
  copyright: "© 2015-2022 Incora LLC",
};

function FooterComponent() {
  const { policies, offices, followUs, pages, copyright } = footer;

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
                <Link href={`/${policy.replace(' ', '_')}`} key={index}>
                    <PolicyLabel>{policy}</PolicyLabel>
                </Link>
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
