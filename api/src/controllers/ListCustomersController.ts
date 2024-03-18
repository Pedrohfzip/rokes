import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersServices } from "../services/ListCustomersService";

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomersServices();

        const customers = await listCustomerService.execute();

        reply.send(customers)
    }
}

export { ListCustomersController }