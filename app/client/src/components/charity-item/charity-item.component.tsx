import React from 'react';

import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';

import './charity-item.styles.scss';

const CharityItem: React.FC<{
  charityName: string;
  tags: Array<string>;
  charityID: number;
  charityShortDescription: string;
}> = (props) => {
  const imageFolder = '../images';

  const renderTags = () => {
    let listOfTags = '';

    for (const tag of props.tags) {
      listOfTags = listOfTags + tag + ', ';
    }

    return listOfTags.substring(0, listOfTags.length - 2);
  };

  return (
    <IonCard button routerLink={`/charity/${props.charityID}`}>
      <IonCardHeader>
        {/* <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tabs/speakers/${speaker.id}`}> */}
        <IonItem>
          <IonAvatar slot="start">
            <img src={`${imageFolder}/kevinxu.jpg`} />
          </IonAvatar>
          <IonLabel>
            <h2>{props.charityName}</h2>
            <p>{renderTags()}</p>
          </IonLabel>
        </IonItem>
      </IonCardHeader>

      <IonCardContent>
        <IonList lines="none">
          <IonItem>
            <IonLabel>
              <h3>{props.charityShortDescription}</h3>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default CharityItem;
