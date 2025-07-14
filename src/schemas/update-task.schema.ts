export const UpdateTaskSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' },
    },
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      completed: { type: 'boolean' },
    },
    minProperties: 1,
    additionalProperties: false,
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        description: { type: 'string' },
        completed: { type: 'boolean' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
      },
    },
  },
};
