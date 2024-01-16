import express from 'express';
import http from 'http';
import { config } from './conf';
import Setting from './conf/settings';

config();
const app = express();

const port = Setting.PORT;

const server = http.createServer(app);

server.listen(port, async () => {
    console.log(`Server is listning at http://localhost:${port}`);
});

