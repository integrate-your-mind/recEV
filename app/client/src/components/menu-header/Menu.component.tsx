import React from 'react';

import {
    IonMenu,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon
} from '@ionic/react';
import { mapOutline } from 'ionicons/icons';

const Header: React.FC<{ title: string }> = (props) => {
    return (
        <IonMenuToggle autoHide = {false}>
            <IonMenu type = "overlay">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{props.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Login/Register</IonItem>
                        <IonItem>Log Out</IonItem>
                        <IonItem>Profile</IonItem>
                        <IonItem>
                            <IonIcon slot="start" icon={mapOutline} />
                            About
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </IonMenuToggle>
    );
};

export default Header;
