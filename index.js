const express = require('express');
const app = express();
const mongoose = require('mongodb').MongoClient;
const graphqlHTTP = require('express-graphql');
const schema = require('./routes/api');
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
module.exports = app;
if (require.main === module) {
  mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
  app.listen(3000, () => console.log('Server started on port 3000'));
}