const { PrismaClient, PrismaClientRequestError } = require('@prisma/client')
const prisma = new PrismaClient()

class CourseEntry {
  department = string;
  number = string;
}

exports.handler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body)
    const createdCourse = await prisma.course.create({ 
      data: {
        department: createdCourse.department,
        number: parseInt(createdCourse.number)
      }
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createdCourse)
    }
  } catch (e) {
    if (e instanceof PrismaClientRequestError) {
      if (e.code === 'P2002') {
        return {
          statusCode: 409,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            error: 'A course with this code already exists'
          })
        }
      }
    }

    console.error(e)
    return { statusCode: 500 }
  }
}