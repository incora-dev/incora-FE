import Link from "next/link";
import {
  GetProjectPage_projects_data_attributes_industry_data_attributes,
  GetProjectPage_projects_data_attributes_location_data_attributes,
  GetProjectPage_projects_data_attributes_mainInfo,
  GetProjectPage_projects_data_attributes_services,
  GetProjectPage_projects_data_attributes_technologies,
} from "../../../graphql/caseStudies/__generated__/GetProjectPage";
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

interface ICaseDescription {
  mainInfo: GetProjectPage_projects_data_attributes_mainInfo;
  location: GetProjectPage_projects_data_attributes_location_data_attributes;
  technologies: GetProjectPage_projects_data_attributes_technologies;
  services: GetProjectPage_projects_data_attributes_services;
  industry: GetProjectPage_projects_data_attributes_industry_data_attributes;
}

const CaseDescription = ({
  mainInfo,
  location,
  technologies,
  services,
  industry,
}: ICaseDescription) => {
  const info = mainInfo.item.map((item, index) => {
    if (index !== 0) {
      return (
        <>
          <h2>{item?.title}</h2>
          <p>{item?.description}</p>
        </>
      );
    }
  });

  const locationTag = location && (
    <TagBox>
      <span>
        {location.city}, {location.country}
      </span>
    </TagBox>
  );

  const technologiesTags = technologies.data.map(({ id, attributes }) => (
    <Link href={attributes?.url || ""} passHref key={id}>
      <TagBox>
        <span>{attributes?.name}</span>
      </TagBox>
    </Link>
  ));

  const servicesTags = services.data.map(({ id, attributes }) => (
    <Link href={attributes?.url || ""} passHref key={id}>
      <TagBox>
        <span>{attributes?.name}</span>
      </TagBox>
    </Link>
  ));

  return (
    <CaseDescriptionWrapper>
      <ContentWrapper>
        <TextWrap>{info}</TextWrap>

        <TagsWrap>
          <LocationAndIndustryWrap>
            <TagsCategory>
              <TagsHeading>location</TagsHeading>
              {locationTag}
            </TagsCategory>

            <TagsCategory>
              <TagsHeading>industry</TagsHeading>

              <Link href={industry.url || ""} passHref>
                <TagBox>
                  <span>{industry.name}</span>
                </TagBox>
              </Link>
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
