import fp from "fastify-plugin";
import mercurius from "mercurius";
import { FastifyInstance } from "fastify";
import { typeDefs } from "../graphql/schema";
import { resolvers } from "../graphql/resolvers";

export default fp(async function graphqlPlugin(fastify: FastifyInstance) {
  await fastify.register(mercurius, {
    schema: typeDefs, // ✅ now it's just a string
    resolvers,
    graphiql: true,
    path: "/graphql",
    context: (request, reply) => ({
      req: request,
      reply,
    }),
  });
});
