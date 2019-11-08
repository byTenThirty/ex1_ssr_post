import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const isServer = process.env.IS_SERVER;

if (isServer) {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
