/**
 * Created by sami on 14.2.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};