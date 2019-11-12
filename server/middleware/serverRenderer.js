import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import App from '../../src/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  const indexHtml = fs.readFileSync(filePath, 'utf8');
  const html = ReactDOMServer.renderToString(
      <StaticRouter>
        <App />
      </StaticRouter>
  );

  return res.send(
      indexHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  );
};
