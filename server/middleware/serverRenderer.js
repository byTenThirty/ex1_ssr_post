import React from 'react';
import ReactDOMServer from 'react-dom/server';

// import our main App component
import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  const indexHtml = fs.readFileSync(filePath, 'utf8');
  const html = ReactDOMServer.renderToString(<App />);

  return res.send(
      indexHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
};
