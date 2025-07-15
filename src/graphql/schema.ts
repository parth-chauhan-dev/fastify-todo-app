export const typeDefs = `
  type Task {
    id: Int!
    title: String!
    description: String!
    completed: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(title: String!, description: String!, completed: Boolean): Task
    updateTask(id: Int!, title: String, description: String, completed: Boolean): Task
    deleteTask(id: Int!): Boolean
  }
`;
