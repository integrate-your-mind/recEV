import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Map.scss';

//import mapImage from './img/google-map.jpg';

const Tab3: React.FC = () => {

  //Have info about charities from server side
  //used to create Markers, showing where charities are based
  //this will also provide more details about charities in <InfoWindow>


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
                <Map  google={google}
                      zoom={14}
                      initialCenter={{lat: 53.9585761, lng: -1.0803774}}>
                      <Marker
                        name={'York'}
                        title={'Cosmic Onions home town'}
                        position={{lat: 53.9585761, lng: -1.0803774}} />
                      <InfoWindow>
                        <div>
                          <h1>Charity info goes here</h1>
                        </div>
                      </InfoWindow>
                </Map>
            </IonContent>
        </IonPage>
    );

    // <IonButton color="primary" href="/profile">Profile</IonButton>
    // is this needed? as we have links at the bottom
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD8yTfwF_fIqDwcNBKh_ek6KfhITSvKuJU")
})(Tab3);
