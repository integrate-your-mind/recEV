import React, { Suspense } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import './Donate.css';
import CharityList from '../components/charity-list/charity-list.component';
{
  /* const CharityList = React.lazy(() => import('../components/charity-list/charity-list.components')); */
}

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

        {/* <Suspense */}
        {/*   fallback={ */}
        {/*     <IonPage> */}
        {/*       <IonHeader>Loading</IonHeader> */}
        {/*       <IonContent> */}
        {/*         <IonSpinner name="crescent" /> */}
        {/*       </IonContent> */}
        {/*     </IonPage> */}
        {/*   } */}
        {/* > */}
        <CharityList />

        {/* </Suspense> */}
      </IonContent>
    </IonPage>
  );
};

export default Donate;
