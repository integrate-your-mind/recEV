import each from 'lodash/each';

//Value interface *
//Type interface *
//instantiate object of type Type
//use string interpolation to dynamically add the key values to the new object

export interface IValue {
  prop: string;
}

export interface IType {
  [name: string]: IValue;
}

export function processData<T>(data: T[], props: string[]): T[] {
  const dynamicObject: IType = {}; //t['field1'] = { prop: null };

  const processedData = each(data, (dataObject) => {
    each(Object.keys(dataObject), (key) => {
      if (props.includes(key)) {
        dynamicObject[`${key}`] = ((dataObject as unknown) as { [key: string]: unknown })[`${key}`] as IValue;
        console.log(dynamicObject);
      } else {
        // console.log(
        //   /** Ignore this error */
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   //@ts-ignore
        //   'Other Value Found: \n' + 'Key: [' + key + ']' + '\nValue:' + '[' + dataObject[key.toString()] + ']',
        // );
      }
    });
  });

  return processedData;
}
