export const typeDefs = `
scalar DateTime

type Task {
    id: ID!
    title: String!
    date: DateTime!
    isCompleted: Boolean!
}

type Query {
    tasks(input : PaginationInput): [Task!]
}

type Query {
    taskById(id: ID!): Task
}

type Mutation {
    addTask(input: AddTaskInput!): Task!
}

type Mutation {
    deleteTask(id: ID!): Task
}

input AddTaskInput {
    title: String!
    isCompleted: Boolean!
}

input PaginationInput {
    page: Int!
    limit: Int!
}
`;
