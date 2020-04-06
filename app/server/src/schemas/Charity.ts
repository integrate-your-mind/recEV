import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class Charity {

    @Field()
    charityLegalName!: string;

    @Field({ nullable: true })
    imageURL?: string;

    @Field()
    smallDescription!: string;

    @Field({ nullable: true })
    longDescription?: string;

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
