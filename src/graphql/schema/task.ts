export const typeDefs = `
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
