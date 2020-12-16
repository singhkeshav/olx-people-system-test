import gql from "graphql-tag";

//>> For Get Single Continents Details type......
export const GET_CONTINENT_DETAILS = gql`
query continent($code: ID!) {
  continent(code: $code) {
      name,
      code,
      countries {
          name,
           code,
           native,
           languages {
             name,
             code
           }
      }
  }
}
`;

//Get Contentinents Type....
export const GET_CONTINENTS = gql`
{
  continents {
     code
      name,
      countries {
      name,
       code,
       native
      }
    }
  }`;


