export interface ICharity {
    charityLegalName: string;
    imageURL?: string;
    smallDescription: string;
    longDescription?: string;
    addressLine1: string;
    townCity?: string;
    state: string;
    homelessness?: string;
    health?: string;
    country: string;
    charityWebsite: string;
    education?: boolean;
    chronicIllness?: boolean;
    disabilities?: boolean;
    unemployment?: boolean;
    veterans?: boolean;
    postcode: number;
}
