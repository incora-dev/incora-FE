module.exports = {
  client: {
    name: "incora",
    url: "https://admin.incora.software/graphql",
    includes: [
      "./graphql/companyAbout/queries.ts",
      "./graphql/homepage/queries.ts",
      "./graphql/careers/queries.ts",
      "./graphql/caseStudies/queries.ts",
      "./graphql/insights/queries.ts",
      "./graphql/industries/queries.ts",
      "./graphql/technologies/queries.ts",
      "./graphql/services/queries.ts",
      "./graphql/insights/mutations.ts"
    ],
    tagName: "gql",
    addTypename: true,
  },
};
