const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPlant(input: savedPlants!): User
    removePlant(plantId: ID!): User
  }
  type User {
    _id: ID!
    username: String
    email: String
    plantCount: Int
    savedPlants: [Plant]
  }
  type Plant {
    plantId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input savedPlants {
    description: String
    title: String
    plantId: String
    image: String
    link: String
    authors: [String]
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;