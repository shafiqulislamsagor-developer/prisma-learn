import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "Sample Posta",
    //         content: "This is a sample post content.",
    //         author: "shafiqul islam"
    //     }
    // })

    const getAllFromPrisma = await prisma.post.findMany()

    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            id: 1
        }
    })

    const findUniqe = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })

    // console.log(getAllFromPrisma)
}

main()