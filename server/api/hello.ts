import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const data = await prisma.post.findMany({
    where: {
      id: 1
    },
    select: {
      content: true,
      id: true
    }
  })
  return data
})