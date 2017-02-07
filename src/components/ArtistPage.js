/**
 * Created by sami on 5.2.2017.
 */

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistMenu from './ArtistMenu';
import Medal from './Medal';
import Flag from './Flag';
import artists from '../data/artists';

export default class ArtistPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const artist = artists.filter((artist) => artist.id === id)[0];
        if(!artist) {
            return <NotFoundPage/>;
        }
    }
}