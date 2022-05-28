import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}.`)
})
