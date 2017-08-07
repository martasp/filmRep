import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MovieAdd } from './components/MovieAdd';
import { Movies } from './components/Movies';
export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/MovieAdd' component={MovieAdd} />
    <Route path='/Movies' component={Movies} />
</Layout>;
