module.exports = {
  client: {
    name: "incora",
    url: "http://35.171.193.21:1337/graphql",
    includes: [
      "./graphql/companyAbout/queries.ts",
      "./graphql/homepage/queries.ts",
      "./graphql/careers/queries.ts",
      "./graphql/caseStudies/queries.ts",
      "./graphql/insights/queries.ts",
      "./graphql/services/queries.ts",
      "./graphql/industries/queries.ts",
      "./graphql/technologies/queries.ts",
    ],
    tagName: "gql",
    addTypename: true,
  },
};
