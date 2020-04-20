import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ICharity from '../../models/business/charity';
import { IonContent } from '@ionic/react';
import map from 'lodash/map';
import { ICharityState } from '../../redux/charity/types';

interface Props {
  charities: ICharityState;
}

const CharityList: React.FC<Props> = (props) => {
  const { loading, error, data } = props.getCharityRequestStart;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <IonContent>
      {data &&
        map(data, (charity) => {
          console.log(charity);
        })}
    </IonContent>
  );
};

export default CharityList;
