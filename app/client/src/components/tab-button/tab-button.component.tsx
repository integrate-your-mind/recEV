import React from 'react';
import { IonTabButton, IonLabel, IonIcon } from '@ionic/react';

import { Props } from '../../models/components/tab-button';

export const TabButtonComponent: React.FC<Props> = ({ icon, label, tab, link }) => (
    <IonTabButton tab={tab} href={link}>
        <IonIcon icon={icon} />
        <IonLabel>{label}</IonLabel>
    </IonTabButton>
);
