import { CharityItem, CharityItemModel } from '../entities/CharityItem';
import each from 'lodash/each';

export async function postData(data: CharityItem[]): Promise<void> {
  //FIXME: Set 'lastModified' property to only update when charity information updates
  //FIXME: Set 'isActive' property to properly update when charities shut down or are no longer active
  //FIXME: Set 'dateCreated' property to only trigger when a charity is added to the database, if it already exists this property should not be updated.
  each(data, (charity) => {
    charity.isActive = true;
    charity.lastModified = new Date();
    charity.dateCreated = new Date();
  });

  console.log(data);
  // await CharityItemModel.create
  try {
    const charityData = await CharityItemModel.create(data as CharityItem[]);
    console.log(charityData);
  } catch (error) {
    return Promise.reject(new Error(error));
  }
}
