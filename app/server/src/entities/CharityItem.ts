/* eslint no-use-before-define: 0 */ // --> OFF
import { Field, ObjectType } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { Charity } from './Charity';

@ObjectType()
class prop {
  @Field()
  member!: string;

  @Field()
  values!: string;
}

@ObjectType()
export class CharityItem extends Charity {
  @Field((type) => [prop])
  props?: prop[];
}

export const CharityItemModel = getModelForClass(CharityItem);
