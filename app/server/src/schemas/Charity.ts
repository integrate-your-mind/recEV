import { Field, ObjectType } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class Charity {
  @Field()
  public charityLegalName!: string;

  @Field({ nullable: true })
  public imageURL?: string;

  @Field()
  public smallDescription!: string;

  @Field({ nullable: true })
  public longDescription?: string;

  @Field()
  addressLine1!: string;

  @Field()
  townCity!: string;

  @Field()
  state!: string;

  @Field()
  country!: string;

  @Field()
  charityWebsite!: string;

  @Field({ nullable: true })
  health?: boolean;

  @Field({ nullable: true })
  homelessness?: boolean;

  @Field({ nullable: true })
  postcode!: number;

  @Field({ nullable: true })
  education?: boolean;

  @Field({ nullable: true })
  chronicIllness?: boolean;

  @Field({ nullable: true })
  disabilities?: boolean;

  @Field({ nullable: true })
  unemployment?: boolean;

  @Field({ nullable: true })
  veterans?: boolean;
}

const charityModel = getModelForClass(Charity);
