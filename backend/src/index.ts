import express from 'express';
import http from 'http';
import { config } from './conf';
import Setting from './conf/settings';
import Database from './db';
import router from './routes';

config();
const app = express();
const port = Setting.PORT;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', router);

server.listen(port, async () => {
    console.log(`Server is listning at http://localhost:${port}`);
    Database.connect();
});

