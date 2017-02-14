/**
 * Created by sami on 9.2.2017.
 */

import React from 'react';
import { Route, Indexroute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ArtistPage from './components/ArtistPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="artist/:id" component={ArtistPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;