import Link from "next/link";
import { ROUTES } from '../../../constants/routes';
import {
  GetProjectPage_project_data_attributes_industry,
  GetProjectPage_project_data_attributes_location_data_attributes,
  GetProjectPage_project_data_attributes_mainInfo,
  GetProjectPage_project_data_attributes_services,
  GetProjectPage_project_data_attributes_technologies,
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
  mainInfo: GetProjectPage_project_data_attributes_mainInfo;
  location: GetProjectPage_project_data_attributes_location_data_attributes;
  technologies: GetProjectPage_project_data_attributes_technologies;
  services: GetProjectPage_project_data_attributes_services;
  industry: GetProjectPage_project_data_attributes_industry;
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
  console.log(industry);

  const locationTag = location && (
    <TagBox>
      <span>
        {location.city}, {location.country}
      </span>
    </TagBox>
  );

  const technologiesTags = technologies.data.map(({ id, attributes }) => (
    <Link href={`${ROUTES.EXPERTISE.TECHNOLOGIES}/${attributes?.url}/${id}` || ""} passHref key={id}>
      <TagBox>
        <span>{attributes?.Technology_name}</span>
      </TagBox>
    </Link>
  ));

  const servicesTags = services.data.map(({ id, attributes }) => (
    <Link href={`${ROUTES.SERVICES}/${attributes?.url}/${id}` || ""} passHref key={id}>
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
              <TagFlexBox>{locationTag}</TagFlexBox>
            </TagsCategory>

            <TagsCategory>
              <TagsHeading>industry</TagsHeading>

              <Link href={`${ROUTES.EXPERTISE.INDUSTRIES}/${industry.data?.attributes?.url}/${industry.data?.id}` || ""} passHref>
              <TagFlexBox>
                <TagBox>
                  <span>{industry.data?.attributes?.name}</span>
                </TagBox>
              </TagFlexBox>
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
