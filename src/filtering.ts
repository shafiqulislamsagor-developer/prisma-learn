import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const filteringData = async () => {
    const addFilteringData = await prisma.post.findMany({
        where: {
            // AND: [
            //     {
            //         title: {
            //             contains: 'course '
            //         },
            //         published: false
            //     }
            // ]
            OR: [
                {
                    title: {
                        contains: 'course'
                    },

                },
                {
                    published: true
                }
            ]
        }
    })
    console.log(addFilteringData)
}

filteringData()