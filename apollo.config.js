module.exports = {
  client: {
    name: "incora",
    url: "https://incora-be.herokuapp.com/graphql",
    includes: [
      "./graphql/companyAbout/queries.ts",
      "./graphql/homepage/queries.ts",
    ],
    tagName: "gql",
    addTypename: true,
  },
};
