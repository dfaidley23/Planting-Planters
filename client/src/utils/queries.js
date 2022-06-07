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