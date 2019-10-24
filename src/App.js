import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo/:id" component={Detail} />
        </Switch>
    </BrowserRouter>
);

export default App;
