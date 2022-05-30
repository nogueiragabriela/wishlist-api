import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index.js';
import dotenv from 'dotenv';
import { errorMiddleware } from './src/middleware/errorMiddleware/index.js';

dotenv.config();
const PORT = process.env.PORT

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}.`)
})
