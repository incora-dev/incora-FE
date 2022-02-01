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
  FollowUs
} from "./Footer.style";
import IncoraLogo from "../../public/logo.svg"
import { IFollowUs, IFooter} from "../../interfaces/footer.interface";
import React from "react";
import ClutchLogo from "../../public/SVG/logoClutchco.svg"
import { clutchLink } from "../../constants";
import Link from "next/link";
import Facebook from "../../public/SVG/socialNetwork/FacebookSVG.svg";
import LinkedIn from "../../public/SVG/socialNetwork/LinkedInSvg.svg";
import Instagram from "../../public/SVG/socialNetwork/InstagramSvg.svg";

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

const footer: IFooter = {
  policies: ["privacy policy"],
  offices: [
    { "ukrainian office": "2 Horodotska Str.,\n" + "Lviv 75001 Ukraine" },
    { "Usa office": "16192 Coastal Hwy, Lewes,\n" + "DE 19958 USA" },
  ],
  pages: ["Services", "Case Studies", "company", "Insights"],
  followUs: [
    { icon: Facebook, redirectTo: "https://www.facebook.com/incorainc" },
    { icon: LinkedIn, redirectTo: "https://www.linkedin.com/company/incorainc" },
    { icon: Instagram, redirectTo: "https://www.instagram.com/incorainc" },
  ],
  copyright: "© 2015-2022 Incora LLC",
};

function createFollowUsBlock(followUs: IFollowUs[]) {
  return followUs.map((el, index) => {
    const { redirectTo } = el;

     return (
         <Link href={`${redirectTo}`} key={index}>
           <a target={'_blank'}>
             <el.icon viewBox={"0 0 1"}/>
           </a>
         </Link>
      )
    }
  )
}

function FooterComponent() {
  const { policies, offices, followUs, pages, copyright } = footer;

  const officesBlock = createOfficesBlock(offices);
  const followUsBlock = createFollowUsBlock(followUs);

  return (
    <Container>
      <Position>
        <LogoBlock>
          <Link href={'/'}>
            <IncoraLogo/>
          </Link>

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
              pages.map((page, index) => {
                const href =
                  page.toLowerCase() === 'company'
                  ? `/company/about`
                  : `/${page.toLowerCase().replace(' ', '_')}`;

                return (
                  <Page key={index}>
                    <Link href={href}>{page}</Link>
                  </Page>
                )
              })
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
