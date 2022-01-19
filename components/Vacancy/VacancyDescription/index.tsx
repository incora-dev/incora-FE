import AttachCv from "../AttachCV";
import {
  AttachCvWrap,
  ContentWrap,
  Description,
  DescriptionAndCv,
  VacancyDescriptionWrapper,
} from "./style";

const VacancyDescription = () => {
  return (
    <VacancyDescriptionWrapper>
      <ContentWrap>
        <h2>{"sales & marketing"}</h2>
        <h1>{"business development manager"}</h1>
        <DescriptionAndCv>
          <Description>
            <p>
              We are looking for a strong Leader to join our Front-end team and
              develop innovative projects using JavaScript, React/Angular 2+,
              HTML5, CSS3, and different databases.
            </p>
            <br />
            <p>
              You will drive the team of developers and find a challenging work
              environment with smart, proactive colleagues, get opportunities to
              demonstrate your abilities and learn new skills.
            </p>
            <br />
            <h3>{"requirements"}</h3>
            <br />
            <ul>
              <li>5+ years of commercial experience with JS development</li>
              <li>
                1+ year of experience leading a team of 3 or more Front-end
                Developers
              </li>
              <li>Strong HTML5/CSS3 knowledge</li>
              <li>2+ years of experience with Angular 2+/React is a must</li>
              <li>
                Knowledge of front-end development best practices and OOP design
                patterns
              </li>
              <li>
                Git knowledge including Git-flow development approach
                (branching, revert, rebase, cherry-pick)
              </li>
              <li>English level — Upper-Intermediate or higher</li>
              <li>Understanding of SDLC, Agile/Scrum principles</li>
              <li>Experience of building a project from scratch</li>
              <li>Strong leadership skills</li>
            </ul>
            <br />
            <h3>responsibilities</h3>
            <br />
            <ul>
              <li>Lead a Front-end development team</li>
              <li>
                Distribute the FE work on the project by assigning tasks between
                FE Engineers in the team, provide monitoring and control of
                development activities, provide FE status updates (when
                necessary), etc.
              </li>
              <li>
                Motivate team members and participate in evaluation of their
                professional achievements and performance
              </li>
              <li>
                Participate in groomings, estimation and planning sessions
              </li>
              <li>Plan and implement change requests</li>
              <li>Be accountable for new release deployments</li>
              <li>Manage technical debt</li>
              <li>Take part in code review and refactoring</li>
              <li>
                Collaborate with other team members (incl. Back-end Team Lead,
                TDM, BSA, Architect, etc.).
              </li>
            </ul>
          </Description>

          <AttachCvWrap>
            <AttachCv />
          </AttachCvWrap>
        </DescriptionAndCv>
      </ContentWrap>
    </VacancyDescriptionWrapper>
  );
};

export default VacancyDescription;
