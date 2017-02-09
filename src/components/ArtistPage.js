/**
 * Created by sami on 5.2.2017.
 */

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ArtistMenu from './ArtistMenu';
import Painting from './Painting';
import Flag from './Flag';
import artists from '../data/artists';

export default class ArtistPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const artist = artists.filter((artist) => artist.id === id)[0];
        if(!artist) {
            return <NotFoundPage/>;
        }
        const headerStyle = { backgroundImage: `url(/img/${artist.cover})`};
        return (
            <div className="artist-full">
                <ArtistMenu/>
                <div className="artist">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${artist.image}`}/>
                        <h2 className="name">{artist.name}</h2>
                    </div>
                    <section className="description">
                        Artist from <strong><Flag code={artist.country} showName="true"/></strong>,
                        born in {artist.birth} (Find out more on <a href={artist.link} target="_blank">Asdasda</a>)
                    </section>
                    <section className="paintings">
                        <p>Showing <strong>{artist.paintings.length}</strong> paintings</p>
                        <ul>{
                            artist.paintings.map((painting, i) => <Painting key={i} {...painting}/>)
                        }</ul>
                    </section>
                </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
            </div>
        );
    }
}