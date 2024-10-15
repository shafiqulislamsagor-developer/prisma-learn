import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createDatabase = async () => {

    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "nurnobi",
    //         email: "nurnobi@gmail.com",
    //         role: UserRole.user
    //     }
    // })
    // await prisma.profile.create({
    //     data: {
    //         userId: 6,
    //         bio: "I am a middle level huzur",

    //     }
    // })
    // await prisma.category.createMany({
    //     data: [
    //         { name: "Web Developer" }, { name: "Alem Ulamaye keram" }, { name: "Students" }
    //     ]
    // })
    await prisma.post.create({
        data: {
            title: 'Enrollment web development course',
            content: 'We are offering a web development course for beginners with 30 hours of video tutorials. The course will cover HTML, CSS, JavaScript, Node.js, and React.js.',
            authorId: 1,
            postCategory: {
                create: {
                    categoryId: 1
                }
            }
        }
    })

}

createDatabase()