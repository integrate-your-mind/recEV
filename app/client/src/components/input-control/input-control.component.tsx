import React from 'react';

import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{
    selectedValue: 'Login' | 'Register';
    onSelectValue: (value: 'Login' | 'Register') => void;
}> = (props) => {
    const inputChangeHandler = (event: CustomEvent) => {
        // Custom event is the type of an event being triggered
        props.onSelectValue(event.detail.value);
        //event.detail.value will either be 'mkg' or 'ftlbs'
    };

    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="Login">
                <IonLabel>Login</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Register">
                <IonLabel>Register</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;