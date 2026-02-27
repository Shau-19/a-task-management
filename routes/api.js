const { gql } = require('apollo-server-express');
const { GraphQLSchema } = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const coreService = require('../services/core');
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
});
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => coreService.getUser(args.id)
    }
  })
});
const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => coreService.createUser(args.name)
    }
  })
});
const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
module.exports = schema;