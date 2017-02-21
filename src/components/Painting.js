/**
 * Created by sami on 5.2.2017.
 */

import React from 'react';

const typeMap = {
    'W': 'Watercolor',
    'O': 'Oil',
    'P': 'Pencil'
};

export default class Painting extends React.Component {
    render() {
        return (
            <li className="painting">
                <span className="picture"> TO DO </span>
                <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
                <span className="year">{this.props.year}</span>
                <span className="name"> {this.props.name}</span>
            </li>
        );
    }
}
