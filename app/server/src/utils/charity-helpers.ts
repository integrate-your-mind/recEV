import { CharityItem, CharityItemModel } from '../entities/CharityItem';

export async function postData(data: object[]): Promise<void> {
  await CharityItemModel.create(data as CharityItem[]);
}
