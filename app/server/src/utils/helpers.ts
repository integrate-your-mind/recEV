import each from 'lodash/each';

export function processData<T>(data: T[], props: string[]): T[] {
  const processedData = each(data, (dataObject) => {
    each(Object.keys(dataObject), (key) => {
      if (props.includes(key)) {
        console.log(key.valueOf());
        // TODO: Hash Table?
        // let value = each(Object.values(dataObject), val =>{

        // })
      }
    });
  });

  return processedData;
}
