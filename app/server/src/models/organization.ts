export interface Organization {
    abn: number;
    charityLegalName: string;
    imageURL: string;
    smallDescription: string;
    longDescription: string;
    addressLine1: string;
    townCity: string;
    state: string;
    postcode: number;
    country: string;
    charityWebsite: string;
    territoryACT: boolean;
    territoryNSW: string;
    territoryNT: boolean;
    operatesInQLD: boolean;
    operatesInSA: boolean;
    operatesInTAS: boolean;
    operatesInVIC: boolean;
    operatesInWA: boolean;
    education: boolean;
    health: string;
    chronicIllness: boolean;
    disabilities: boolean;
    homelessness: string;
    unemployment: boolean;
    veterans: boolean;
}
