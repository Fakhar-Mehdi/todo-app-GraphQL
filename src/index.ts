import { ApolloServer } from "@apollo/server";
import { resolvers } from "graphql/resolvers";
import { typeDefs } from "graphql/schema/task";
import { connectServer } from "utils/helper";
import { startStandaloneServer } from "@apollo/server/standalone";

console.log("Welcome to this Todo App by Fakhar Mehdi, made by GraphQL");

const server = new ApolloServer({ typeDefs, resolvers });

const url = connectServer(server);
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 3000 },
// });

console.log(`Server is listening at ${url}`);
