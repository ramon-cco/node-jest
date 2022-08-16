import express from 'express';
import { routes } from './routes'

const server = express();
server.use(express.json())
server.use(routes);

server.listen(5001, ()=>{
console.log('-->servidor on, na porta 5001 <--')
})