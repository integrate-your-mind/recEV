import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { IAustralianCharityProperties, australian_charities } from '../../data/charity-data-per-country/AUCharityData';
import AUCharityProperties from '../../schemas/countries/AUCharityProperties';

@Resolver((of) => AUCharityProperties)
export default class {
    //TODO: Document this query, used for search functionality 
    @Query((returns) => AUCharityProperties, { nullable: true })
    charityByName(@Arg('charityLegalName') charityLegalName: string): IAustralianCharityProperties | undefined {
        return australian_charities.find((charity) => charity.charityLegalName === charityLegalName);
    }

    //TODO: Setup Query to fetch last 50 charities 
}
