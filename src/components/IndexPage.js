/**
 * Created by sami on 5.2.2017.
 */

'use strict';

import React from 'react';
import ArtistPreview from './ArtistPreview';
import artists from '../data/artists';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="artists-selector">
                    {artists.map(artistData => <ArtistPreview key={artistData.id} {...artistData} />)}
                </div>
            </div>
        );
    }
}