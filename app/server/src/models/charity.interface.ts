import { Field, InterfaceType, ID } from 'type-graphql';

@InterfaceType()
export abstract class Charity {
    @Field(type => ID)
    id: string;

    @Field()
    charityLegalName: string;
    
    @Field({ nullable: true })
    imageURL?: string;

    @Field()
    smallDescription: string;

    @Field({ nullable: true })
    longDescription?: string;

    @Field()
    addressLine1: string;

    @Field()
    townCity: string;

    @Field()
    state: string;

    @Field()
    postcode: number;

    @Field()
    country: string;

    @Field()
    charityWebsite: string;

    @Field({ nullable: true })
    education?: boolean;

    @Field({ nullable: true })
    health?: string;

    @Field({ nullable: true })
    chronicIllness?: boolean;

    @Field({ nullable: true })
    disabilities?: boolean;

    @Field({ nullable: true })
    homelessness?: string;

    @Field({ nullable: true })
    unemployment?: boolean;

    @Field({ nullable: true })
    veterans?: boolean;
}
