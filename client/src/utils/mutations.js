import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PLANT = gql`
  mutation addPlant($input: savedPlants!) {
    addPlant(input: $input) {
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

export const REMOVE_PLANT = gql`
  mutation removePlant($plantId: ID!) {
    removePlant(plantId: $plantId) {
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