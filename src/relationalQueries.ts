import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        }
    }).Post() // fluent api call > just user post show
    // user ar  post and profile include diye ber kora
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         Post: true,
    //         profile: true
    //     }
    // })
    console.log(result)
}

relationalQueries()