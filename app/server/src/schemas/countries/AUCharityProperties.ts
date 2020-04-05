import { Int, Field } from 'type-graphql';
import { Charity } from '../charity.interface';

export class AUCharityProperties extends Charity {
    @Field((type) => Int)
    abn: number;

    @Field()
    territoryNSW: boolean;

    @Field()
    territoryACT: boolean;

    @Field()
    territoryNT: boolean;

    @Field()
    territoryQLD: boolean;

    @Field()
    territorySA: boolean;

    @Field()
    territoryTAS: boolean;

    @Field()
    territoryVIC: boolean;

    @Field()
    territoryWA: boolean;
}
