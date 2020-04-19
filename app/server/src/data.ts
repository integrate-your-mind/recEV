import { processData } from './utils/generic-helpers';
import { postData } from './utils/charity-helpers';
import { CharityItem } from './entities/CharityItem';
import { ObjectId } from 'mongodb';
import { Nullable } from './global';
import * as _ from 'lodash';

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

// var options = {
//   method: 'GET',
//   hostname: 'pokeapi.co',
//   path: '/api/v2/pokemon/ditto/',
//   maxRedirects: 20,
// };

var options = {
  method: 'GET',
  hostname: 'localhost',
  port: 5000,
  path: '/api/uk_data',
  headers: {},
  maxRedirects: 20,
};

export const getUkCharityData = () => {
  try {
    const req = http.request(options, function (res: {
      on: (arg0: string, arg1: { (chunk: any): void; (chunk: any): void; (error: any): void }) => void;
    }) {
      var chunks: any[] = [];

      res.on('data', function (chunk: any) {
        chunks.push(chunk);
      });

      res.on('end', async function (chunk: any) {
        let body = await Buffer.concat(chunks);
        let uk_charities: Object[] = _.uniqWith(JSON.parse(body.toString()), _.isEqual);
        let processedCharities: object[] = processData(uk_charities, charityProps);
        postData(processedCharities as CharityItem[]);
      });

      res.on('error', function (error: any) {
        Promise.reject(new Error(error));
      });
    });
    req.end();
  } catch (err) {
    Promise.reject(new Error(err));
  }
};

// let processedCharities: object[] = processData(uk_charities, charityProps);

// postData(processedCharities as CharityItem[]);
