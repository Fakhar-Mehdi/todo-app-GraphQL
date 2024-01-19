import { DateTimeResolver } from "graphql-scalars";
import { Query } from "./Query";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query,
};
