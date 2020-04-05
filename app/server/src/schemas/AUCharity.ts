/* eslint no-use-before-define: 0 */  // --> OFF
import { Int, Field, ObjectType } from 'type-graphql';
import { Charity } from './Charity';

@ObjectType()
export default class AUCharity extends Charity {
    @Field((type) => Int)
    abn!: number;

    @Field()
    territoryNSW!: boolean;

    @Field()
    territoryACT!: boolean;

    @Field()
    territoryNT!: boolean;

    @Field()
    territoryQLD!: boolean;

    @Field()
    territorySA!: boolean;

    @Field()
    territoryTAS!: boolean;

    @Field()
    territoryVIC!: boolean;

    @Field()
    territoryWA!: boolean;
}
