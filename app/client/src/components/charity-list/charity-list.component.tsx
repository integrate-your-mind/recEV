import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import CharityItem from '../charity-item/charity-item.component';
import organizations from '../../graphql/queries/charities';
import ICharity from '../../models/business/charity';
import { IonContent } from '@ionic/react';
import map from 'lodash/map';

interface Props {
  charityCollection: ICharity[];
}

//eslint-disable-next-line
//@ts-ignore
export const CharityList = (props) => {
  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>Error :(</p>;
  return (
    <IonContent>
      {props.data &&
        map(props.data, (charity) => {
          console.log(charity);
        })}
    </IonContent>
  );
};

export default CharityList;
