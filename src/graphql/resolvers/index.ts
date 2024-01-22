import { DateTimeResolver } from "graphql-scalars";
import { Query } from "./Query.js";
import { Mutation } from "./Mutation.js";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query,
  Mutation,
};
