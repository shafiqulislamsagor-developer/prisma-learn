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

    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Sample Posta",
                content: "This is a sample post content.",
                author: "shafiqul islam"
            },
            {
                title: "Sample Post b",
                content: "This is another sample post content.",
                author: "shafiqul islam"
            },
            {
                title: "Sample Post c",
                content: "This is a third sample post content.",
                author: "shafiqul islam"
            }
        ]
    })


    console.log(createMany)
}

main()