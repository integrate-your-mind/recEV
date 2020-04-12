import React from 'react';

import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';

import './charity-item.styles.scss';

const CharityItem: React.FC<{
  charityLegalName: string;
  smallDescription: string;
}> = (props) => {
  const imageFolder = '../images';

  {
    /* const renderTags = () => { */
  }
  {
    /*   let listOfTags = ''; */
  }

  {
    /*   for (const tag of props.tags) { */
  }
  {
    /*     listOfTags = listOfTags + tag + ', '; */
  }
  {
    /*   } */
  }

  {
    /*   return listOfTags.substring(0, listOfTags.length - 2); */
  }
  {
    /* }; */
  }

  return (
    <IonCard button routerLink={`/charity/${props.charityLegalName}`}>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img src={`${imageFolder}/kevinxu.jpg`} />
          </IonAvatar>
          <IonLabel>
            <h2>{props.charityLegalName}</h2>
            {/* <p>{renderTags()}</p> */}
          </IonLabel>
        </IonItem>
      </IonCardHeader>

      <IonCardContent>
        <IonList lines="none">
          <IonItem>
            <IonLabel>
              <h3>{props.smallDescription}</h3>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default CharityItem;
