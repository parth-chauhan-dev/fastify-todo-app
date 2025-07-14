export const CreateTaskSchema = {
  body: {
    type: "object",
    required: ["title", "description"],
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      completed: { type: "boolean", default: false },
    },
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: { type: "number" },
        title: { type: "string" },
        description: { type: "string" },
        completed: { type: "boolean" },
        createdAt: { type: "string" },
        updatedAt: { type: "string" },
      },
    },
  },
};
