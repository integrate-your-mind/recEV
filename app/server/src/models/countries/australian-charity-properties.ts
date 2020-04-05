import { Int, Field } from 'type-graphql';
import { Charity } from '../charity.interface';

export class AustralianCharityProperties extends Charity {
    @Field((type) => Int)
    abn: number;

    @Field()
    territoryNSW: string;

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
