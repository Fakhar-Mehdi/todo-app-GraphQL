import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { DateTimeResolver } from "graphql-scalars";

console.log("Welcome to this Todo App by Fakhar Mehdi, made by GraphQL");

const tasks = [
  {
    id: "1",
    title: "remove space with colon",
    date: Date.now(),
    isCompleted: true,
  },
];

const typeDefs = `
scalar DateTime

type Task {
    id: ID!
    title: String
    date: DateTime
    isCompleted: Boolean
}

type Query {
    tasks: [Task!]!
}
`;

const resolvers = {
  DateTime: DateTimeResolver,

  Query: {
    tasks: () => tasks,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});
console.log(`Server is listening at ${url}`);
