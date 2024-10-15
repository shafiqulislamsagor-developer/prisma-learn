import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const deleteData = async () => {
    // const result = await prisma.post.delete({
    //     where: {
    //         id: 3
    //     }
    // })

    const result = await prisma.post.deleteMany({
        where: {
            title: 'Sample Post c'
        }
    })
}

deleteData()