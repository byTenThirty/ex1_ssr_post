import express from 'express';
import serverRenderer from './middleware/serverRenderer';

const PORT = 3333;
const path = require('path');

const app = express();
// const router = express.Router();

app.get('/', serverRenderer);
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.listen(PORT, () => console.log(`listening on: ${PORT}`));
