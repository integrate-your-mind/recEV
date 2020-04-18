import { processData } from './utils/generic-helpers';
import { postData } from './utils/charity-helpers';
import { CharityItem } from './entities/CharityItem';
import { ObjectId } from 'mongodb';
import { Nullable } from './global';

/* eslint no-use-before-define: 0 */
export interface ICharity {
  readonly id: ObjectId;
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
  cause?: string[];
  isActive: Nullable<boolean>;
  lastModified: Nullable<Date>;
  dateCreated: Nullable<Date>;
}

export interface IProp {
  key: string;
  value: any;
}

export interface ICharityItem extends ICharity {
  props: IProp[];
}

const charityProps = [
  'charityLegalName',
  'imageURL',
  'smallDescription',
  'longDescription',
  'addressLine1',
  'city',
  'postcode',
  'state',
  'country',
  'charityWebsite',
];

const http = require('follow-redirects').http;

var options = {
  method: 'GET',
  hostname: 'pokeapi.co',
  path: '/api/v2/pokemon/ditto/',
  maxRedirects: 20,
};

// var options = {
//   method: 'GET',
//   hostname: 'localhost',
//   port: 5000,
//   path: '/api/uk_data',
//   headers: {},
//   maxRedirects: 20,
// };

try {
  const req = http.request(options, function (res: {
    on: (arg0: string, arg1: { (chunk: any): void; (chunk: any): void; (error: any): void }) => void;
  }) {
    var chunks: any[] = [];

    res.on('data', function (chunk: any) {
      chunks.push(chunk);
    });

    res.on('end', async function (chunk: any) {
      // let body = Buffer.concat(chunks);
      // let uk_charities: Object[] = JSON.parse(body.toString());
      // let processedCharities: object[] = processData(uk_charities, charityProps);
      // postData(processedCharities as CharityItem[]);
      // debugger;
    });

    res.on('error', function (error: any) {
      Promise.reject(new Error(error));
    });
  });
  req.end();
} catch (err) {
  Promise.reject(new Error(err));
}

export const uk_charities: Object[] = [
  {
    charityLegalName: 'Cinnamon Trust - Helping Elderly and Terminally ill People and their Pets',
    imageURL:
      'https://www.charitychoice.co.uk/media/profile/c/cinnamon-trust-helping-elderly-people-and-pets-1075/cinnamontrust.jpg',
    charityWebsite: 'http://www.cinnamon.org.uk',
    smallDescription:
      "We recognise the importance of the treasured relationship between people and pets and we recognise that this relationship is, more often than not seriously threatened by infirmity and frailty. We step in to ensure that any problem encountered in the day to day care of a pet can be overcome and all the benefits of owning a pet can be preserved. Our aims are achieved by tasking a national network of over 6,000 volunteers to provide any assistance required including walking dogs and pet fostering. We operate a national register of 752 care homes/sheltered housing for the elderly that will accept pets. A principal concern for elderly and terminally ill pet owners is the long term care of beloved pets. We provide lifetime care for pets whose owners have died either in our unique home from home sanctuaries or in long term foster homes. We rely entirely on donations and legacies. We make no charge for our services. 'Peace of mind and practical help for people - love, care and safety for their pets.'",
    longDescription:
      "We recognise the importance of the treasured relationship between people and pets and we recognise that this relationship is, more often than not seriously threatened by infirmity and frailty. We step in to ensure that any problem encountered in the day to day care of a pet can be overcome and all the benefits of owning a pet can be preserved. Our aims are achieved by tasking a national network of over 6,000 volunteers to provide any assistance required including walking dogs and pet fostering. We operate a national register of 752 care homes/sheltered housing for the elderly that will accept pets. A principal concern for elderly and terminally ill pet owners is the long term care of beloved pets. We provide lifetime care for pets whose owners have died either in our unique home from home sanctuaries or in long term foster homes. We rely entirely on donations and legacies. We make no charge for our services. 'Peace of mind and practical help for people - love, care and safety for their pets.'",
    addressLine1: '10 Market Square',
    city: 'Hayle',
    state: 'Cornwall',
    country: 'UK',
    postcode: 'TR274HE',
    telephone: '+441736757900',
    charityNumber: '1134680',
  },
  {
    charityLegalName: 'Cinnamon Trust - Helping Elderly and Terminally ill People and their Pets',
    imageURL:
      'https://www.charitychoice.co.uk/media/profile/c/cinnamon-trust-helping-elderly-people-and-pets-1075/cinnamontrust.jpg',
    charityWebsite: 'http://www.cinnamon.org.uk',
    smallDescription:
      "We recognise the importance of the treasured relationship between people and pets and we recognise that this relationship is, more often than not seriously threatened by infirmity and frailty. We step in to ensure that any problem encountered in the day to day care of a pet can be overcome and all the benefits of owning a pet can be preserved. Our aims are achieved by tasking a national network of over 6,000 volunteers to provide any assistance required including walking dogs and pet fostering. We operate a national register of 752 care homes/sheltered housing for the elderly that will accept pets. A principal concern for elderly and terminally ill pet owners is the long term care of beloved pets. We provide lifetime care for pets whose owners have died either in our unique home from home sanctuaries or in long term foster homes. We rely entirely on donations and legacies. We make no charge for our services. 'Peace of mind and practical help for people - love, care and safety for their pets.'",
    longDescription:
      "We recognise the importance of the treasured relationship between people and pets and we recognise that this relationship is, more often than not seriously threatened by infirmity and frailty. We step in to ensure that any problem encountered in the day to day care of a pet can be overcome and all the benefits of owning a pet can be preserved. Our aims are achieved by tasking a national network of over 6,000 volunteers to provide any assistance required including walking dogs and pet fostering. We operate a national register of 752 care homes/sheltered housing for the elderly that will accept pets. A principal concern for elderly and terminally ill pet owners is the long term care of beloved pets. We provide lifetime care for pets whose owners have died either in our unique home from home sanctuaries or in long term foster homes. We rely entirely on donations and legacies. We make no charge for our services. 'Peace of mind and practical help for people - love, care and safety for their pets.'",
    addressLine1: '10 Market Square',
    city: 'Hayle',
    state: 'Cornwall',
    country: 'UK',
    postcode: 'TR274HE',
    telephone: '+441736757900',
    charityNumber: '1134680',
  },
];

let processedCharities: object[] = processData(uk_charities, charityProps);

postData(processedCharities as CharityItem[]);
