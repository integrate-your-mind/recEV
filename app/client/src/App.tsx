import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, walletOutline, mapOutline } from 'ionicons/icons';
import Profile from './pages/Profile';
import Donate from './pages/Donate';
import Map from './pages/Map';
import CharityModal from './pages/CharityModal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
// or you can use `import gql from 'graphql-tag';` instead

const client = new ApolloClient({
    //TODO: Setup uri to the gql endpoint
    uri: 'SET SOME URI HERE PLEASE TO THE END POINT',
});

// client
//     .query({
//         query: gql`
//      BUILD GQL QUERY HERE FROM graphiQL
//     `,
//     })
//     .then((result) => console.log(result));

const App: React.FC = () => (
    <ApolloProvider client={client}>
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/profile" component={Profile} exact={true} />
                    <Route path="/donate" component={Donate} exact={true} />
                    <Route path="/map" component={Map} />
                    <Route path="/" render={() => <Redirect to="/profile" />} exact={true} />
                    <Route path="/charity/:id" component={CharityModal} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="profile" href="/profile">
                        <IonIcon icon={personCircleOutline} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="donate" href="/donate">
                        <IonIcon icon={walletOutline} />
                        <IonLabel>Donate</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="map" href="/map">
                        <IonIcon icon={mapOutline} />
                        <IonLabel>Map</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
    </ApolloProvider>
);

export default App;
