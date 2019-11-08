import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => (
    <StaticRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo/:id" component={Detail} />
        </Switch>
    </StaticRouter>
);

export default App;
