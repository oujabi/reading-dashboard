import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `;
    
    console.log('\n=== TABLES DANS POSTGRES ===\n');
    if (Array.isArray(tables) && tables.length > 0) {
      tables.forEach((t: any) => {
        console.log(`  ✓ ${t.table_name}`);
      });
    } else {
      console.log('  (Aucune table trouvée)');
    }
    console.log('\n===============================\n');
    
    // Vérifions aussi les colonnes de la table User
    const userColumns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'user' 
      ORDER BY ordinal_position
    `;
    
    console.log('\n=== COLONNES DE LA TABLE User ===\n');
    if (Array.isArray(userColumns) && userColumns.length > 0) {
      userColumns.forEach((col: any) => {
        console.log(`  ${col.column_name}: ${col.data_type}`);
      });
    }
    
  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
