import { PrismaClient } from "@prisma/client"

// This sets up a singleton for the PrismaClient,
// that works with the globalThis object so that
// hot reloading works in dev.
// See https://medium.com/@truongtronghai/globalthis-declare-global-and-the-solution-of-singleton-prisma-client-7706a769c9d3

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = db
}
