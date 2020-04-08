/* eslint no-use-before-define: 0 */ // --> OFF
import { Query, Resolver } from 'type-graphql';
import { CharityProps, charities } from '../data';
import AUCharity from '../schemas/AUCharity';

@Resolver((of) => AUCharity)
export default class {
  //TODO: Document this query, used for search functionality
  // @Query((returns) => AUCharity, { nullable: true })
  // auCharityByName(@Arg('charityLegalName') charityLegalName: string): CharityData | undefined {
  //     return australian_charities.find((charity) => charity.charityLegalName === charityLegalName);
  // }

  @Query((returns) => [AUCharity])
  fetchCharities(): object[] {
    return charities;
  }
}
