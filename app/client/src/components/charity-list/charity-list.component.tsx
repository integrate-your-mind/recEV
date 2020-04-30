import React from 'react';
import ICharityState from '../../models/business/charity';
import { IonContent } from '@ionic/react';
import map from 'lodash/map';

interface IProps {
  getCharityRequestStart: () => ICharityState;
}

const CharityList: React.FC<IProps> = (props) => {
  const data = props.getCharityRequestStart;
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
