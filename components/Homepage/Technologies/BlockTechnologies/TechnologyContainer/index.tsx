import Vector1 from "../../../../../public/SVG/Vector1.svg";
import Vector2 from "../../../../../public/SVG/Vector2.svg";
import { Div, PositionOne, PositionTwo, Container, P, Block } from "./TechnologyContainer";
import React from "../../../../../public/SVG/technologies/react.svg"
import Angular from "../../../../../public/SVG/technologies/angular.svg"
import NodeJs from "../../../../../public/SVG/technologies/nodeJs.svg"
import Python from "../../../../../public/SVG/technologies/python.svg"
import Django from "../../../../../public/SVG/technologies/django.svg"
import Flask from "../../../../../public/SVG/technologies/flask.svg"
import PostgreSQL from "../../../../../public/SVG/technologies/postgreSQL.svg"
import MySQL from "../../../../../public/SVG/technologies/mySQL.svg"
import MongoDB from "../../../../../public/SVG/technologies/mongoDB.svg"
import Apollo from "../../../../../public/SVG/technologies/apollo.svg"
import Redis from "../../../../../public/SVG/technologies/redis.svg"
import Ionic from "../../../../../public/SVG/technologies/ionic.svg"
import Docker from "../../../../../public/SVG/technologies/docker.svg"
import Kubernetes from "../../../../../public/SVG/technologies/kubernetes.svg"
import AmazonECS from "../../../../../public/SVG/technologies/amazonECS.svg"
import AmazonWebServices from "../../../../../public/SVG/technologies/amazonWebServices.svg"
import GoogleCloudPlatform from "../../../../../public/SVG/technologies/googleCloudPlatform.svg"
import MicrosoftAzure from "../../../../../public/SVG/technologies/microsoftAzure.svg"
import DigitalOcean from "../../../../../public/SVG/technologies/digitalOcean.svg"



interface ITechnologyContainer {
  icons: JSX.Element[];
  text: string[];
}

function TechnologyContainer( props: ITechnologyContainer,) {
  const technologies = () => {
   return (
     <Container>
       {props.text.map((label, index) => {
           let icon;

           if (label === 'React') {
             icon = <React/>;
           }

         if (label === 'Angular2') {
           icon = <Angular/>;
         }

         if (label === 'Node.js') {
           icon = <NodeJs/>;
         }

         if (label === 'Python') {
           icon = <Python/>;
         }

         if (label === 'Django') {
           icon = <Django/>;
         }

         if (label === 'Flask') {
           icon = <Flask/>;
         }

         if (label === 'PostgreSQL') {
           icon = <PostgreSQL/>;
         }

         if (label === 'MySQL') {
           icon = <MySQL/>;
         }

         if (label === 'MongoDB') {
           icon = <MongoDB/>;
         }

         if (label === 'Apollo') {
           icon = <Apollo/>;
         }

         if (label === 'Redis') {
           icon = <Redis/>;
         }

         if (label === 'React Native') {
           icon = <React/>;
         }

         if (label === 'Ionic') {
           icon = <Ionic/>;
         }

         if (label === 'Docker') {
           icon = <Docker/>;
         }

         if (label === 'Kubernetes') {
           icon = <Kubernetes/>;
         }

         if (label === 'Amazon ECS') {
           icon = <AmazonECS/>;
         }

         if (label === 'Amazon Web Services') {
           icon = <AmazonWebServices/>;
         }

         if (label === 'Google Cloud Platform') {
           icon = <GoogleCloudPlatform/>;
         }

         if (label === 'Microsoft Azure') {
           icon = <MicrosoftAzure/>;
         }

         if (label === 'DigitalOcean') {
           icon = <DigitalOcean/>;
         }

           return (
             <Block key={index}>
               {icon}
               <P>{label}</P>
             </Block>
           )
         }
       )}
     </Container>
   )
  }

  return (
    <Div>
      {technologies()}
      <PositionOne>
        <Vector1/>
      </PositionOne>

      <PositionTwo>
        <Vector2/>
      </PositionTwo>
    </Div>
  )
}

export default TechnologyContainer;
