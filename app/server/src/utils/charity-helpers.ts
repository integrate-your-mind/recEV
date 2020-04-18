import { CharityItem, CharityItemModel } from '../entities/CharityItem';
import each from 'lodash/each';

export async function postData(data: CharityItem[]): Promise<void> {
  //FIXME: Set 'lastModified' property to only update when charity information updates
  //FIXME: Set 'isActive' property to properly update when charities shut down or are no longer active
  //FIXME: Set 'dateCreated' property to only trigger when a charity is added to the database, if it already exists this property should not be updated.
  each(data, (charity) => {
    if (CharityItemModel.find()) {
      // TODO: Check if the charity website actually works and set it as active if not update the db accoordingly
      charity.isActive = true;
      // TODO: Add this property to the insertMany function or updateMany after any new inserts have been made
      charity.lastModified = new Date();
      // TODO: Set this to only add to new charities not exisiting ones. This may already be working but we need to test it
      charity.dateCreated = new Date();
    }
  });

  // console.log(data);
  // await CharityItemModel.create
  try {
    const charityData = await CharityItemModel.insertMany(data as CharityItem[]);
    console.log(charityData);
  } catch (error) {
    return Promise.reject(new Error(error));
  }
}
