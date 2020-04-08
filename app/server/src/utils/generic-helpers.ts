import each from 'lodash/each';

export function processData<T>(data: T[], props: string[]): T[] {
  const processedData = each(data, (dataObject) => {
    each(Object.keys(dataObject), (key) => {
      if (props.includes(key)) {
        // console.log(key.valueOf());
        /** Ignore this error */
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        console.log('Key Found: \n' + 'Key: [' + key + ']' + '\nValue:' + '[' + dataObject[key.toString()] + ']');
      } else {
        console.log(
          /** Ignore this error */
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          'Other Value Found: \n' + 'Key: [' + key + ']' + '\nValue:' + '[' + dataObject[key.toString()] + ']',
        );
      }
    });
  });

  return processedData;
}
