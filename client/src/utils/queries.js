import gql from "graphql-tag";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      plantCount
      savedPlants {
        name
        scientificName
        category
        hardiness
        sun
        lifeSpan
        medianLifespang
        firstHarvest
        lastHarvest
        height
        spread
        image
      }
    }
  }
`;

export const GET_PLANT = gql`
query plant($name: String!) {
  plant(name: $name) {
    plantId
    name
    scientificName
    category
    hardiness
    sun
    lifeSpan
    medianLifespan
    firstHarvest
    lastHarvest 
    height
    spread
    image
  }
}`