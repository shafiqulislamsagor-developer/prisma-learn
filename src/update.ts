import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const updates = async () => {
    // const result = await prisma.post.update({
    //     where: {
    //         id: 5
    //     },
    //     data: {
    //         title: "Updated Post Title",
    //         content: "This is an updated post content.",
    //     }
    // })

    const updateMany = await prisma.post.updateMany({
        where: {
            id: 3
        },
        data: {
            title: "Updated Post Title",
            content: "This is an updated post content.",
        }
    })
}

updates()