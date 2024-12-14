// import { PrismaClient } from "@prisma/client";

// declare global {
//   let prisma: PrismaClient | undefined;
// }

// export const prisma = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

import { PrismaClient } from "@prisma/client";

// Vérifiez si une instance existe déjà sur globalThis
const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

// Créez une nouvelle instance ou réutilisez l'existante
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Optionnel : activez les logs si vous le souhaitez
  });

// En mode développement, attachez Prisma à globalThis
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
