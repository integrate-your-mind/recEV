/* eslint no-use-before-define: 0 */ // --> OFF
import { Query, Resolver } from 'type-graphql';
import { ICharityItem } from '../data';
import { CharityItem } from '../entities/CharityItem';

// TODO: Fetch data from MongoDB here.
const uk_charities: ICharityItem[] = [];

@Resolver((of) => CharityItem)
export default class {
  //TODO: Document this query, used for search functionality
  // @Query((returns) => AUCharity, { nullable: true })
  // auCharityByName(@Arg('charityLegalName') charityLegalName: string): CharityData | undefined {
  //     return australian_charities.find((charity) => charity.charityLegalName === charityLegalName);
  // }

  @Query((returns) => [CharityItem])
  fetchCharities(): ICharityItem[] {
    return uk_charities as ICharityItem[];
  }
}
