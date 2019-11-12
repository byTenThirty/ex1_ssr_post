import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => (
    <div id="container">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={Detail} />
        </Switch>
    </div>
);

export default App;
