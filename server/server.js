import { createServer } from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

server.listen(8001, () => {
    console.log('Server running at http://localhost:8001');
});
