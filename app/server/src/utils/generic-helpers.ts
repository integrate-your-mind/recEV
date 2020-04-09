import each from 'lodash/each';
import { IProp } from '../data';

export interface IValue {
  prop: string;
}

export interface IType {
  [name: string]: IValue;
}

export function processData<T>(data: T[], props: string[]): T[] {
  const dynamicObject: IType = { ['props']: ([] as unknown) as IValue }; //t['field1'] = { prop: null };
  const propsArr: IProp[] = [];
  const processedData = each(data, (dataObject) => {
    each(Object.keys(dataObject), (key) => {
      if (props.includes(key)) {
        dynamicObject[`${key}`] = ((dataObject as unknown) as { [key: string]: unknown })[`${key}`] as IValue;
        // console.log(dynamicObject);
      } else {
        //FIXME: Set values being passed into the props array to be of IProp accordingly
        propsArr.push(((dataObject as unknown) as { [key: string]: unknown })[`${key}`] as IValue);
      }
    });
  });
  dynamicObject['props'] = (propsArr as unknown) as IValue;
  return processedData;
}
