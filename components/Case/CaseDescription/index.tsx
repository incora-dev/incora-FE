import {
  CaseDescriptionWrapper,
  ContentWrapper,
  LocationAndIndustryWrap,
  TagBox,
  TagFlexBox,
  TagsCategory,
  TagsHeading,
  TagsWrap,
  TextWrap,
} from "./style";

const technologies = [
  "JavaScript",
  "React",
  "Node.js",
  "WebRTC",
  "MySQL",
  "PostgreSQL",
  "PHP",
  "WooCommerce",
  "AWS",
];

const services = ["frontend", "backend"];

const CaseDescription = () => {
  const technologiesTags = technologies.map((technology, index) => (
    <TagBox key={index * Math.random()}>
      <span>{technology}</span>
    </TagBox>
  ));

  const servicesTags = services.map((service, index) => (
    <TagBox key={index * Math.random()}>
      <span>{service}</span>
    </TagBox>
  ));

  return (
    <CaseDescriptionWrapper>
      <ContentWrapper>
        <TextWrap>
          <h2>{"Challenges"}</h2>
          <p className="first">
            {
              "To eliminate different business risks, verification methods should be constantly updated and improved. Widget’s goal was to enhance the functionality and add new verification options to fit the needs of both small and big enterprises."
            }
          </p>
          <h2>{"scope of work"}</h2>
          <p>
            {
              "The client provided us with detailed requirements and specific design. Our team enlarged the widget’s functionality on admin’s and clients side. Our developers were responsible for integration of social networks, adding multiple features, and verification options. Moreover, we enhanced the widget’s design for mobile users and added different widget icons to match each client’s taste."
            }
          </p>
        </TextWrap>

        <TagsWrap>
          <LocationAndIndustryWrap>
            <TagsCategory>
              <TagsHeading>location</TagsHeading>
              <TagBox>
                <span>Chicago, USA</span>
              </TagBox>
            </TagsCategory>

            <TagsCategory>
              <TagsHeading>industry</TagsHeading>

              <TagBox>
                <span>legal services</span>
              </TagBox>
            </TagsCategory>
          </LocationAndIndustryWrap>

          <TagsCategory>
            <TagsHeading>technologies</TagsHeading>
            <TagFlexBox>{technologiesTags}</TagFlexBox>
          </TagsCategory>

          <TagsCategory>
            <TagsHeading>services</TagsHeading>
            <TagFlexBox>{servicesTags}</TagFlexBox>
          </TagsCategory>
        </TagsWrap>
      </ContentWrapper>
    </CaseDescriptionWrapper>
  );
};

export default CaseDescription;
