import React, { useState, useEffect } from 'react';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { personCircleOutline, walletOutline, mapOutline } from 'ionicons/icons';

import Profile from './pages/Profile';
import Login from './pages/Login';
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
  uri: 'http://localhost:4000',
});

// This is a test to make sure we are able to fetch data from our node/gql server.
client
  .query({
    query: gql`
      {
        fetchCharities {
          charityLegalName
        }
      }
    `,
  })
  .then((result) => console.log(result));

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setLoggedIn(false);
  }, []);

  return (
    <ApolloProvider client={client}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
                <Route 
                  exact
                  path='/dashboard'
                  render = {() => {
                    return loggedIn ? <Profile/> : <Login />;
                  }}
                />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/donate" component={Donate} exact />
                <Route path="/map" component={Map} exact />
                <Redirect exact from="/" to="/profile" />
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
};

export default App;
