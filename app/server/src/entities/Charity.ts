import { Field, ObjectType } from 'type-graphql';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Charity {
  //TODO: Add mongo id to decorator?
  @Field()
  readonly id!: ObjectId;

  @Field()
  charityLegalName!: string;

  @Field({ nullable: true })
  imageURL?: string;

  @Field()
  charityWebsite!: string;

  @Field()
  smallDescription!: string;

  @Field({ nullable: true })
  longDescription?: string;

  @Field()
  addressLine1!: string;

  @Field()
  city!: string;

  @Field()
  state!: string;

  @Field()
  country!: string;

  @Field({ nullable: true })
  postcode!: string;

  @Field()
  isActive!: boolean;

  @Field()
  dateCreated!: Date;

  @Field()
  lastModified!: Date;

  //TODO: Add optional parameter to decorator
  // @Field(() => [String], { nullable: true })
  // cause?: string[];
}
