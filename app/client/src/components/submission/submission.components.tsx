import React from "react";

import {
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from "@ionic/react";

// Ion Icons Imports
import { paperPlaneOutline, refreshOutline } from "ionicons/icons";

const Submissions: React.FC<{
  onSubmit: () => void;
  onReset: () => void;
}> = props => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onSubmit}>
          <IonIcon slot="start" icon={paperPlaneOutline} />
          Submit
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default Submissions;