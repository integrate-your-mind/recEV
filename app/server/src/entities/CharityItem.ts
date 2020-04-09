/* eslint no-use-before-define: 0 */ // --> OFF
import { Field, ObjectType } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { Charity } from './Charity';

@ObjectType()
class Prop {
  @Field()
  key!: string;

  @Field()
  value!: string;
}

@ObjectType()
export class CharityItem extends Charity {
  @Field((type) => [Prop])
  props?: Prop[];
}

export const CharityItemModel = getModelForClass(CharityItem);
