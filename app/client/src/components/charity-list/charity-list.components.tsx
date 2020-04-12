import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import CharityItem from '../charity-item/charity-item.component';
import organizations from '../../graphql/queries/charities';
import ICharity from '../../models/business/charity';
import { IonContent } from '@ionic/react';
import * as _ from 'lodash';

interface ICharityData {
  charities: ICharity[];
}

const CharityList = () => {
  const { loading, error, data } = useQuery<ICharityData>(organizations);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <IonContent>
      {data &&
        _.map(data, (charity) => {
          console.log(charity);
        })}
    </IonContent>
  );
};

export default CharityList;
