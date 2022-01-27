module.exports = {
  client: {
    name: "incora",
    url: "https://incora-be.herokuapp.com/graphql",
    includes: [
      "./graphql/companyAbout/queries.ts",
      "./graphql/homepage/queries.ts",
      "./graphql/careers/queries.ts",
      "./graphql/caseStudies/queries.ts",
    ],
    tagName: "gql",
    addTypename: true,
  },
};
