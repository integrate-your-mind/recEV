import React, { useState, useEffect } from 'react';

import CharityItem from '../charity-item/charity-item.component';

import Charity from '../../models/business/charity';
import { IonContent } from '@ionic/react';

const CharityList = () => {
    const [organizations, setOrganizations] = useState<Array<Charity>>([]);

    useEffect(() => {
        setOrganizations([
            {
                charityName: 'Red Cross',
                tags: ['Food', 'Clothes', 'Spidey'],
                charityID: 1,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'This is the red cross, you know it',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 2,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Greek',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 3,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Greek, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 4,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 5,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 6,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 7,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 8,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
            {
                charityName: 'Roman',
                tags: ['Weapon', 'Crossbow', 'Spidey'],
                charityID: 9,
                charityImageURL: 'helpTheRedCross.jpg',
                charityShortDescription: 'Roman, proof that it works',
                charityLongDescription: 'This is also the redcross, you better know it lmao',
            },
        ]);
    }, []);

    return (
        <IonContent>
            {organizations.map((organization) => (
                <CharityItem
                    key={organization.charityID}
                    charityName={organization.charityName}
                    tags={organization.tags}
                    charityID={organization.charityID}
                    charityShortDescription={organization.charityShortDescription}
                />
            ))}
        </IonContent>
    );
};

export default CharityList;
