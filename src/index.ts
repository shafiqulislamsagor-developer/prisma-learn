import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: "Sample Post",
    //         content: "This is a sample post content.",
    //         author: "shafiqul islam sagor"
    //     }
    // })

    const getAllFromPrisma = await prisma.post.findMany()
    console.log(getAllFromPrisma)
}

main()