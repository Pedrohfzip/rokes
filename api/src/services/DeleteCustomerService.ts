import prismaClient from "../prisma";
interface DeleteCustomerProps{
    id: string,
}
class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){

        if(!id){
            throw Error("Soliçitação invalida.")
        }

        const findCustomer:(any) = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return {message: "Deleted"}

    }
}

export {DeleteCustomerService}