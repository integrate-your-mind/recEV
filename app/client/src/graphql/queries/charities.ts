import { gql } from 'apollo-boost';

export const fetchCharities = gql`
  {
    fetchCharities {
      charityLegalName
      smallDescription
    }
  }
`;
