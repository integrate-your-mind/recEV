/* eslint no-use-before-define: 0 */ // --> OFF
import { Float, Field, ObjectType } from 'type-graphql';
import { Charity } from './Charity';

@ObjectType()
class prop {
  @Field()
  member!: string;

  @Field()
  values!: string;
}

@ObjectType()
export default class AUCharity extends Charity {
  @Field((type) => [prop])
  props?: prop[];
}
