import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import {IMAGES_LINK, titles} from "../../constants";
import { theme } from "../../styles/theme";
import HeaderPrivacyPolicy from "../../components/PrivacyPolicyPage/HeaderPrivacyPolicy";
import MainInfo from "../../components/PrivacyPolicyPage/MainInfo";
import FooterComponent from "../../components/Footer";

interface IPrivacyPolicy {
  title: string;
  text: string;
}

const title = 'privacy policy';
const text = 'Incora values the confidentiality of your information that is why our privacy policy is oriented at the client’s data safety. We protect the information provided through this website according to the following stances of Incora privacy policy.'

const PrivacyPolicyText = () => {
  return (
      <>
        <h2>What data is collected during the client visit?</h2>
        <div>
          <p>While browsing our site – www.incorainc.com, we may collect three types of data:</p>
          <ul>
            <li>Aggregate consumer data – number of visits per web page or per week.</li>
            <li>Customer data directly provided by the very client (contact information and name) in the fill-in forms and filled out forms in e-mail messages.</li>
            <li>The web pages that you open while navigating the site.</li>
          </ul>
        </div>
        <h3>Incora cares about the customer’s information</h3>
        <p>All information that you indicate at the site is provided directly to the Incora exclusively with no third parties.</p>
        <h5>Cookies</h5>
        <p>Like any other website, we use ‘cookies’. Cookies are used to store information about visitors’ preferences, and the pages on the website that the visitor accessed. Collected information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.        </p>
        <p>For more general information on cookies, please read
          <a href={'https://www.google.com/search?q=cookies'}> What Are Cookies.</a>
        </p>
        <h4>What do we do with your information?</h4>
        <p>Incora does not share any information provided by the client with the third parties. This is how Incora uses your information:</p>
        <p>We use the information that you provide directly to respond to your requests.</p>
        <p>All information that we take from the e-mail communication, along with the clicks from the hyperlinks and subscriptions, is used to reconstruct the further communication to your preferences.</p>
        <p>Such data as the one collected from the website visits per week and per month is used by our developers to refine the user experience.</p>
        <h5>External links on Incora website</h5>
        <p>Our site contains the links to the external websites that belong to the third parties and do not fall under the Incora governance. Any information you provide to the external link websites would fall under their own principles of the privacy policy. Incora does not claim any responsibility for the procedures related to the data handling on the independent sites.</p>
        <h3>Privacy policy revisions</h3>
        <strong>The Incora privacy policy is regularly revised and the company can modify it with no prior notification.</strong>
        <p>The changes turn effective as soon as they are posted on this page. Using the Incora website, you indicate that you accept and understand the terms and conditions of the Incora privacy policy posted at the time of use.</p>
      </>
  )
}

const PrivacyPolicy = ({ title, text }: IPrivacyPolicy) => {
  const seoTitle = 'Privacy Policy — Incora Software Development';
  const seoKeywords = 'Incora, privacy policy, Incora Website, Cookies';
  const seoDescription = 'Incora values the confidentiality of your information that is why our privacy policy is oriented at the client’s data safety.';
  const seoImage = `${IMAGES_LINK}`

  return (
    <>
      <Head>
        <Head>
          { seoTitle && <title>{seoTitle}</title> }
          <meta property="og:site_name" content="Incora - European software development company" />
          <meta property="og:type" content="article" />
          { seoDescription && <meta name="description" content={seoDescription}/> }
          { seoKeywords && <meta name="keywords" content={seoKeywords} /> }
          { seoTitle && <meta property="og:title" content={seoTitle} /> }
          { seoDescription && <meta property="og:description" content={seoDescription} /> }
          { seoImage && <meta property="og:url" content={seoImage}/> }
        </Head>
      </Head>
      <>
        <MainMenu
            backgroundColor={theme.colors.black}
            titlesColor={theme.colors.white}
            titles={titles}
        >
          <HeaderPrivacyPolicy title={title} text={text}/>
          <MainInfo PrivacyPolicyText={PrivacyPolicyText}/>
        </MainMenu>
        <FooterComponent />
      </>
    </>
  )
}

PrivacyPolicy.getInitialProps = () => {
  return {
    title,
    text
  };
}

export default PrivacyPolicy;
