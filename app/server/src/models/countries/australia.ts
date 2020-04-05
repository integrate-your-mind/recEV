import { Int, Field } from 'type-graphql';
import { Charity } from '../charity.interface';

export class Australia extends Charity {
    @Field((type) => Int)
    abn: number;
    territoryACT: boolean;
    territoryNSW: string;
    territoryNT: boolean;
    territoryQLD: boolean;
    territorySA: boolean;
    territoryTAS: boolean;
    territoryVIC: boolean;
    territoryWA: boolean;
}
