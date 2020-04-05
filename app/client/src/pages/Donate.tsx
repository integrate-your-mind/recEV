import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Donate.css';
import CharityItem from '../components/charity-item/charity-item.component';

import Charity from '../models/business/charity';

const Donate = () => {
    const [organizations, setOrganizations] = useState<Array<Charity>>([]);

    // charityName: string;
    // tags: Array<string>;
    // charityID: number;
    // charityImageURL: string;
    // charityShortDescription: string;
    // charityLongDescription: string;

    useEffect(() => {
        setOrganizations([{
            charityName: 'Red Cross',
            tags: ['Food', 'Clothes', 'Spidey'],
            charityID: 1,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'This is the red cross, you know it',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        },
        {
            charityName: 'Roman',
            tags: ['Weapon', 'Crossbow', 'Spidey'],
            charityID: 2,
            charityImageURL: 'helpTheRedCross.jpg',
            charityShortDescription: 'Roman, proof that it works',
            charityLongDescription: 'This is also the redcross, you better know it lmao'
        }
    ])
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Donate</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Donate</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {organizations.map(organization => 
                    <CharityItem charityName = {organization.charityName} tags = {organization.tags} charityID = {organization.charityID} charityShortDescription = {organization.charityShortDescription}/>
                )}
                {/* <CharityItem charityName="Red Cross" tags={redCrossTags} charityID={1} /> */}

            </IonContent>
        </IonPage>
    );
};

export default Donate;
