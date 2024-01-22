import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./graphql/schema/task.js";
import { connectServer } from "./utils/helper.js";
import { resolvers } from "./graphql/resolvers/index.js";

const server = new ApolloServer({ typeDefs, resolvers });

const url = await connectServer(server);

console.log(`Server is listening at ${url}`);
