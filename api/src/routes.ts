import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import fastify from 'fastify';

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions ){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true}
    })

    
}