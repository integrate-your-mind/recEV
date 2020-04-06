import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Map.scss';

import mapImage from './img/google-map.jpg'

const Tab3: React.FC = () => {
<<<<<<< HEAD
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 3 page" /> */}
      </IonContent>
    </IonPage>
  );
=======

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Map</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Map</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <img src={mapImage} />
                <IonButton color="primary" href="/profile">Profile</IonButton>
            </IonContent>
        </IonPage>
    );
>>>>>>> feature
};

export default Tab3;
