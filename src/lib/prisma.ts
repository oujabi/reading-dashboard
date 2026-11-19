import { PrismaClient } from '@prisma/client';

// PrismaClient est instancié une seule fois et réutilisé
// pour éviter les connexion multiples à la base de données
const prisma = new PrismaClient();

export default prisma;
