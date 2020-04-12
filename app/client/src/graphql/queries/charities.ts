import { gql } from 'apollo-boost';
const organizations = gql`
  {
    fetchCharities {
      charityLegalName
      smallDescription
    }
  }
`;

export default organizations;
