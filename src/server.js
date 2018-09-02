import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema/schema';

import config from './config/express';
import constants from './lib/constants';

dotenv.config();

const { DB_URI } = constants;

const app = express();
config(app);

mongoose.connect(
  DB_URI,
  { useNewUrlParser: true },
);

mongoose.connection.on('open', () => {
  console.log('connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.log('Could not connect to the database');
  return err;
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send({ message: 'heya again' });
});

export default app;
