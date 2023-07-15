import fastify from "fastify";

import { prisma } from "./lib/prisma";

import { ZodError, z } from "zod";
import { appRoutes } from "./http/routes";
import { env } from "./env";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.log(error);
  } else {
  }
  return reply.status(500).send({ message: "Internal server error" });
});
