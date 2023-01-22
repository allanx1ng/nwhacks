const { PrismaClient, PrismaClientRequestError } = require('@prisma/client')
const prisma = new PrismaClient()

exports.handler = async (event, context, callback) => {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {
              number: 'asc'
            }
          })
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courses)
        }
      } catch (error) {
        console.error(error)
        return {
          statusCode: 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(error)
        }
      }
}