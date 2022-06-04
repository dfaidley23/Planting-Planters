import gql from "graphql-tag";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      plantCount
      savedPlants {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;