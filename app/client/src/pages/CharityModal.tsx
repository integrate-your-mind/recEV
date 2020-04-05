import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './CharityModal.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';


interface StateProps {};

interface DispatchProps {};

interface CharityIdParams {
    id: string;
}

const SpeakerDetail = ({ match }: RouteComponentProps<CharityIdParams>) => {
    const id = match.params.id;
    const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openContact() {
    setActionSheetButtons([
      {
        text: `https://www.redcross.org/`,
      }
    ]);
    setActionSheetHeader('Here is the Website of the Charity');
    setShowActionSheet(true);
  }


  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Donate" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick = {() => openContact()}>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="speaker-background">
          <img src='./img/redCross.png' alt='redCross.png'/>
          <h2>This is the Title of the Charity</h2>
        </div>

        <div className="ion-padding speaker-detail">
          <p>Here is the description of the charity. The Id is {id}</p>

          <hr/>

        </div>
      </IonContent>
        <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};


export default SpeakerDetail;