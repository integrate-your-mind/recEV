import React, { Suspense } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import './Donate.css';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import CharityItem from '../components/charity-item/charity-item.component';
=======
>>>>>>> feature

const CharityList = React.lazy(() => import('../components/charity-list/charity-list.components'));

const Donate = () => {
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
        {/* {organizations.map(organization => 
                    <CharityItem key = {organization.charityID} charityName = {organization.charityName} tags = {organization.tags} charityID = {organization.charityID} charityShortDescription = {organization.charityShortDescription}/>
                )} */}
        {/* <CharityItem charityName="Red Cross" tags={redCrossTags} charityID={1} /> */}

        <Suspense
          fallback={
            <IonPage>
              <IonHeader>Loading</IonHeader>
              <IonContent>
                <IonSpinner name="crescent" />
              </IonContent>
            </IonPage>
          }
        >
          <CharityList />

<<<<<<< HEAD
<<<<<<< HEAD
                    { console.log('Yup in donate')}
                </Suspense>
            </IonContent>
        </IonPage>
    );
>>>>>>> feature
=======
=======
>>>>>>> feature
          {console.log('Yup in donate')}
        </Suspense>
      </IonContent>
    </IonPage>
  );
<<<<<<< HEAD
>>>>>>> feature
=======
>>>>>>> feature
};

export default Donate;
