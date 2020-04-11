/* eslint no-use-before-define: 0 */ // --> OFF
import { Field, ObjectType } from 'type-graphql';
import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { Charity } from './Charity';

@ObjectType()
class Prop {
  @Field()
  @Property({ required: true })
  key!: string;

  //TODO: Write a custom scalar to handle multiple types (boolean || string || number)
  @Field()
  @Property({ required: true })
  value!: string;
}

@ObjectType()
export class CharityItem extends Charity {
  @Field((type) => [Prop])
  @Property()
  props?: Prop[];
}

export const CharityItemModel = getModelForClass(CharityItem);
