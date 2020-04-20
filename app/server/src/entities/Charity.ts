import { Field, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Charity {
  @Field()
  readonly id!: ObjectId;

  @Field()
  @Property({ unique: true, index: true })
  charityLegalName!: string;

  @Field()
  @Property()
  imageURL!: string;

  @Field()
  @Property()
  charityWebsite!: string;

  @Field()
  @Property()
  smallDescription!: string;

  @Field({ nullable: true })
  @Property()
  longDescription?: string;

  @Field()
  @Property()
  addressLine1!: string;

  @Field()
  @Property()
  city!: string;

  @Field()
  @Property()
  state!: string;

  @Field()
  @Property()
  country!: string;

  @Field({ nullable: true })
  @Property()
  postcode!: string;

  @Field()
  @Property({ required: true })
  isActive!: boolean;

  @Field()
  @Property({ required: true })
  dateCreated!: Date;

  @Field()
  @Property({ required: true })
  lastModified!: Date;

  //TODO: Add optional parameter to decorator
  // @Field(() => [String], { nullable: true })
  // cause?: string[];
}
