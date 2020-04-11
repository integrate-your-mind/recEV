import React, { useRef, useState, useEffect } from 'react';
import {
  IonApp,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonIcon,
} from '@ionic/react';
import './Profile.css';

<<<<<<< HEAD
const Tab1: React.FC = () => {
<<<<<<< HEAD
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
=======
=======
import InputControl from '../components/input-control/input-control.component';
import Submission from '../components/submission/submission.components';
import Menu from '../components/menu-header/Menu.component';
// import { reorderThreeOutline } from 'ionicons/icons';

const Profile = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    // window.location.reload(false)
    console.log('Looking at profile');

    const usernameInputRef = useRef<HTMLIonInputElement>(null);
    const passwordInputRef = useRef<HTMLIonInputElement>(null);
    const [error, setError] = useState<string>();
    const [status, setStatus] = useState<'Login' | 'Register'>('Login');

    const setStatusHandler = (selectedType: 'Login' | 'Register') => {
        setStatus(selectedType);
    };

    const submitHandler = () => {
        const enteredUsername = usernameInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;

        if (!enteredUsername || !enteredPassword) {
            setError('Please submit a valid username or password');

            return;
        }

        //post request, post the submission
    };

    const resetHandler = () => {
        usernameInputRef.current!.value = '';
        passwordInputRef.current!.value = '';
    };

    const clearError = () => {
        setError('');
    };

>>>>>>> feature
    return (
        <React.Fragment>
            <IonAlert
                isOpen={!!error}
                message={error}
                buttons={[
                    {
                        text: 'Okay',
                        handler: () => {
                            return clearError;
                        },
                    },
                ]}
            />

            <IonApp>
                <Menu title="profile" />
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <InputControl selectedValue={status} onSelectValue={setStatusHandler} />
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">
                                        Username
                                        {console.log('Here in Profile Username, status is ', status)}
                                    </IonLabel>
                                    <IonInput type="text" ref={usernameInputRef}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput type="text" ref={passwordInputRef}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <Submission onSubmit={submitHandler} onReset={resetHandler} />
                    </IonGrid>
                </IonContent>
            </IonApp>
        </React.Fragment>
    );
>>>>>>> feature
=======
=======
>>>>>>> feature
  // window.location.reload(false)
  console.log('Looking at profile');

  const usernameInputRef = useRef<HTMLIonInputElement>(null);
  const passwordInputRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<'Login' | 'Register'>('Login');

  const setStatusHandler = (selectedType: 'Login' | 'Register') => {
    setStatus(selectedType);
  };

  const submitHandler = () => {
    const enteredUsername = usernameInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if (!enteredUsername || !enteredPassword) {
      setError('Please submit a valid username or password');

      return;
    }

    //post request, post the submission
  };

  const resetHandler = () => {
    usernameInputRef.current!.value = '';
    passwordInputRef.current!.value = '';
  };

  const clearError = () => {
    setError('');
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: 'Okay',
            handler: () => {
              return clearError;
            },
          },
        ]}
      />

      <IonApp>
        <Menu title="profile" />
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={status} onSelectValue={setStatusHandler} />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Username
                    {console.log('Here in Profile Username, status is ', status)}
                  </IonLabel>
                  <IonInput type="text" ref={usernameInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="text" ref={passwordInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <Submission onSubmit={submitHandler} onReset={resetHandler} />
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
<<<<<<< HEAD
>>>>>>> feature
=======
>>>>>>> feature
};

export default Profile;
