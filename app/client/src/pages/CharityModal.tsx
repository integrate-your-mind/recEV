import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';

import { RouteComponentProps } from 'react-router';

interface CharityIdParams {
    id: string
}

const CharityModal = ({ match }: RouteComponentProps<CharityIdParams>) => {
    const id = match.params.id;

    return (
      <IonPage>
          <IonHeader>
              The charity
          </IonHeader>
          <IonContent>
              Charity ID: {id}
          </IonContent>
      </IonPage>  
    );
}

export default CharityModal;