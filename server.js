const express = require('express');
const express_graphql = require('express-graphql');

const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    message: String
    date: String
  }
`);

const root = {
  message: () => 'Hello World!',
  date: () => new Date(),
};

const app = express();

app.use('/graphql', express_graphql({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));