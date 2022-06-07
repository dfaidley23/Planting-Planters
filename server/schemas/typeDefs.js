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
    name: String
    scientificName: String
    category: String
    hardiness: String
    sun: String
    lifeSpan: String
    medianLifespan: String
    firstHarvest: String
    lastHarvest: String
    height: String
    spread: String
    image: String
  }
  input savedPlants {
    name: String
    scientificName: String
    category: String
    hardiness: String
    sun: String
    lifeSpan: String
    medianLifespan: String
    firstHarvest: String
    lastHarvest: String
    height: String
    spread: String
    image: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;