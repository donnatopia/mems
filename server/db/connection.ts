require('dotenv').config();
import { Client } from 'pg';

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  port: 5432,
  database: 'locations'
});

client
  .connect()
  .then(() => console.log('connected client'))
  .catch((err: Error) => console.log(err));

export default client;