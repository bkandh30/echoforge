import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { env } from "@/lib/env";

const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
});

// Singleton pattern to prevent multiple instances of the PrismaClient
// Prevents connection pool exhaustion during Next.js hot reloading
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({
    adapter
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };