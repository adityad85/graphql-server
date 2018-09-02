import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import config from './config/express';

dotenv.config();

const app = express();
config(app);

app.use('/graphql', graphqlHTTP({

}));

app.get('/', (req, res) => {
  res.send({ message: 'heya again' });
});

export default app;
