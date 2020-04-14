export interface ICharity {
  // readonly id: ObjectId;
  charityLegalName: string;
  charityWebsite: string;
  imageURL?: string;
  smallDescription: string | any;
  longDescription?: string | any;
  addressLine1: string;
  city?: string;
  postcode: number;
  state: string;
  country: string;
  // cause?: string[];
  // isActive: Nullable<boolean>;
  // lastModified: Nullable<Date>;
  // dateCreated: Nullable<Date>;
}
export interface IProp {
  key: string;
  value: any;
}

export default interface ICharityItem extends ICharity {
  props: IProp[];
}
