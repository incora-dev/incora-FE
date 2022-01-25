import Head from "next/head";
import React from "../../public/SVG/technologies/react.svg";
import MainMenu from "../../components/mainMenu/mainMenu";
import {theme} from "../../styles/theme";
import { titles } from "../../constants";
import { useEffect, useState } from "react";
import HeaderArticleTemplate from "../../components/ArticleTemplatePage/HeaderArticleTemplate";
import TetianaStoyko from "../../public/images/TetianaStoyko.svg";
import ArticleInfo from "../../components/ArticleTemplatePage/ArticleInfo";
import FacebookSVG from "../../public/SVG/socialNetwork/FacebookSVG.svg";
import InstagramSVG from "../../public/SVG/socialNetwork/InstagramSvg.svg";

const headerData = {
  category: 'category',
  title: 'Intro to Microservices Communication [With the Use of Apache Kafka]',
  publishedDate: "November 25th, 2021",
  viewed: 34,
  articleOwner : {
    img: <TetianaStoyko/>,
    name: 'Tetiana Stoyko',
    role: 'CTO'
  },
};






const ArticleText = () => {
  return (
      <>
        <p>When developing a new product, the first thing that comes to mind is how to structure code. There is a battle going on in this regard: monolithic vs microservices. It has been going on for a while since software developers and company owners are still trying to figure out which architectural style is ideal for their applications. The scalability, efficiency, and competitiveness of the product are determined by the strategy used – monolithic vs microservices. While monolithic systems have been used for a while, microservices are a comparatively modern form of software system structure. Indeed, a slew of technologies emerged under the DevOps mindset, allowing us to design scalable, distributed systems based on microservices.</p>
        <p>One of the main advantages of a microservice architecture is that it makes it simpler to select the technological stack (programming languages, databases, etc.) that is most suited for the desired functionality (service) rather than being forced to take a more conventional, one-size-fits-all approach.</p>
        <p>  Even though such an innovational approach has its benefits, it doesn’t mean that it would be the best solution for each and every application. So let’s sort out in which cases deploying microservice architecture would be the right decision.</p>

        <h3>Microservices Use Cases</h3>

        <p>The difficulties that this technique overcomes are frequently not present while building the first version of an application. Furthermore, implementing a complex, distributed design will stymie progress. This may be a significant issue for startups, whose main task is frequently how to fast change the business model and associated application. However, when it comes to scaling and you need to employ functional deconstruction, the knotted interactions may make it tough to break down your monolithic application into a group of services.</p>
        <p> On the other side, when your aim is to develop a sophisticated and scalable application – microservice architecture is what you need. Adopting new sophisticated tech stacks will be your greatest answer in the future if you want to add new functionality to your application and modernize it. The microservices strategy will come to your aid in this regard, particularly in gaining a competitive advantage.</p>

        <h3>How does Microservices Communication work?</h3>

        <p>The microservices design focuses on categorizing potentially huge and unwieldy programs. Every microservice is meant to solve a certain feature and function of an application, such as logging, data search, etc. Several of these microservices work together to produce a single efficient application.</p>
        <p>Because it is typical for each service instance to operate as a distinct process, services must communicate via a process communication protocol. The strategies could be HTTP, AMQP, or a binary TCP protocol. It depends on the nature of your app.</p>
        <p>Here is the division in a nutshell:</p>

        <div>
          <ul>
            <li>Depending on the protocol type</li>
          </ul>
          <p><strong>Synchronous:</strong>stranded sub-processes, the system involves isolating each microservice as much as feasible.</p>
          <p><strong>Asynchronous:</strong>unlocked sub-processes and protocols that are interoperable with a wide range of operating systems and cloud settings are employed.</p>
        </div>

        <div>
          <ul>
            <li>Depending on the receivers number</li>
          </ul>
          <p><strong>Single –</strong>each request will be processed by a separate receiver or service.</p>
          <p><strong>Many – </strong>the structure of event-driven microservices is used.</p>
        </div>

        <p>But this is all theory, let’s move to the practice. Below we shared our insights on how to apply microservices communication with the use of Apache Kafka.</p>

        <h3>Practical Application of Microservices Communication using Apache Kafka</h3>

        <p>Apache Kafka is a considerably different choice since it is a message broker, it supports asynchronous message-based communication. Rather than performing synchronous HTTP requests and waiting for a response, we could simply consume an Apache Kafka.</p>

        <h6>Running Apache Kafka instance locally (Using Docker images)</h6>
        <p>In order to start an Apache Kafka server, first, we will need to start a Zookeeper server. But there is one way to make it simpler, for that we should create a simple Docker composition. Let’s create a folder called Apache Kafka with a single docker-compose.yml in it. Here is the code sample, that you need to write inside the file ‘docker-compose.yml’.</p>
      </>
  )
}

const socialTitles = [FacebookSVG, InstagramSVG];
const scrollLabels = ['Microservices Use Cases', 'How does Microservices Communication work?', 'Practical Application of Microservices Communication using Apache Kafka', 'Running Apache Kafka instance locally (Using Docker images)'];
const tags = ['tagtitle', 'tagtitle', 'tagtitle name', 'tag', 'tag', 'tagtitle'];

const ArticleTemplate = () => {
  const [menuColor, setMenuColor] = useState('none');
  const handleScroll = () => {
    window.scrollY >= 20
        ? setMenuColor(theme.colors.black)
        : setMenuColor('none')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <Head>
        <title>Insights | </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MainMenu
          backgroundColor={menuColor}
          titlesColor={theme.colors.white}
          titles={titles}
         >
          <HeaderArticleTemplate {...headerData}/>
          <ArticleInfo
            mainText={ArticleText()}
            scrollLabels={scrollLabels}
            socialTitles={socialTitles}
            tags={tags}
          />
        </MainMenu>
      </>
    </>
  )
}

export default ArticleTemplate;

ArticleTemplate.getInitialProps = async ({ query }) => {
  const title = await query;

  return {
    title
  }
}
