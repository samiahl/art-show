/**
 * Created by sami on 5.2.2017.
 */

'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className="logo" src=""/>
                    </Link>
                </header>

                <div className="app-content">{this.props.children}</div>

                <footer>
                    <p>
                        This is not a real site. I'm just learning node and react with this here thingy.
                    </p>
                </footer>
            </div>
        );
    }
}