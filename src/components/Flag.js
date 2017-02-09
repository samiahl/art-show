/**
 * Created by sami on 5.2.2017.
 */

import React from 'react';

const data = {
    'fi': {
        'name': 'Finland',
        'icon': 'flag-fi.png'
    },
    'se': {
        'name': 'Sweden',
        'icon': 'flag-se.png'
    },
    'sp': {
        'name': 'Spain',
        'icon': 'flag-se.png'
    }
};

export default class Flag extends React.component {
    render() {
        const name = data[this.props.code].name;
        const icon = data[this.props.code].icon;
        return (
            <span className="flag">
                <img className="icon" title={name} src={`/img/${icon}`}/>
                {this.props.showName && <span className="name"> {name}</span>}
            </span>
        );
    }
}