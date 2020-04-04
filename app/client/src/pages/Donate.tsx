import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Donate.css';
import CharityItem from '../components/CharityItem';

const Donate: React.FC = () => {

  let redCrossTags: string[] = ['Food', 'Clothes', 'Spidey'];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Donate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Donate</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <CharityItem charityName = 'Red Cross' tags = {redCrossTags} charityID = {1} />
        {/* <CharityItem charityName = 'Mar' />
        <CharityItem charityName = 'Kevin' />
        <CharityItem charityName = 'Superman' /> */}


      </IonContent>
    </IonPage>
  );
};

export default Donate;
