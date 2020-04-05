import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';

import { RouteComponentProps } from 'react-router';

interface HomeIdParams {
    id: string
}

const CharityModal = ({ match }: RouteComponentProps<HomeIdParams>) => {
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