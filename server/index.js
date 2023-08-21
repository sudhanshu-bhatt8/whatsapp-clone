import express from 'express';
import connection from './database/db.js';
import router from './Routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
connection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
