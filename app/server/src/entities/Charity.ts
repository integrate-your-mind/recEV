import { Field, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Charity {
  //TODO: Add mongo id to decorator?
  @Field()
  readonly id!: ObjectId;

  @Field()
  @Property({ required: true })
  charityLegalName!: string;

  @Field()
  @Property({ required: true })
  imageURL!: string;

  @Field()
  @Property({ required: true })
  charityWebsite!: string;

  @Field()
  @Property({ required: true })
  smallDescription!: string;

  @Field({ nullable: true })
  @Property()
  longDescription?: string;

  @Field()
  @Property({ required: true })
  addressLine1!: string;

  @Field()
  @Property({ required: true })
  city!: string;

  @Field()
  @Property({ required: true })
  state!: string;

  @Field()
  @Property({ required: true })
  country!: string;

  @Field({ nullable: true })
  @Property({ required: true })
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
