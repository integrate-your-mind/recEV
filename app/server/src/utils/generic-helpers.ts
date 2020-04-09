/* eslint-disable @typescript-eslint/ban-ts-ignore */
import each from 'lodash/each';
// import { IProp } from '../data';

export interface IValue {
  prop: string;
}

export interface IType {
  [name: string]: IValue;
}

export function processData<T>(data: T[], props: string[]): IType[] {
  const processedData: IType[] = [];
  each(data, (dataObject) => {
    const dynamicObject: IType = { props: ([] as unknown) as IValue }; //t['field1'] = { prop: null };
    // const propsArr: IValue[] = [];
    each(Object.keys(dataObject), (key) => {
      if (props.includes(key)) {
        dynamicObject[`${key}`] = ((dataObject as unknown) as { [key: string]: unknown })[`${key}`] as IValue;
        // console.log(dynamicObject);
      } else {
        //FIXME:
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        dynamicObject.props.push([
          `${key}`,
          ((dataObject as unknown) as { [key: string]: unknown })[`${key}`] as IValue,
        ]);
      }
    });
    // dynamicObject['props'] = (propsArr as unknown) as IValue;
    processedData.push(dynamicObject);
  });

  return processedData;
}
