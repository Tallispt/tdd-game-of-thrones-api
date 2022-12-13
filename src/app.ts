import express from 'express';
import cors from 'cors';
import charactersRouter from './routers/charactersRouter';
import continentsRouter from './routers/continentsRouter';

const server = express();
server.use(express.json())
server.use(cors())

server.use(charactersRouter)
server.use(continentsRouter)

server.listen(4000)

export default server