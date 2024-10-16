import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).Post() // fluent api call > just user post show
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
    const publishedPostUser = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            Post: {
                where: {
                    published: false
                }
            }
        }
    })
    console.dir(publishedPostUser, { depth: Infinity })
}

relationalQueries()