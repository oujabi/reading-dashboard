import prisma from './prisma';

// ============================================
// EXEMPLES DE REQUETES PRISMA POUR READING-DASHBOARD
// ============================================

// 1. CRUD POUR User
// -----------------

export async function createUser(email: string, name?: string) {
  return await prisma.user.create({
    data: {
      email,
      name,
    },
  });
}

export async function getAllUsers() {
  return await prisma.user.findMany({
    include: {
      books: true,
      sessions: true,
    },
  });
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      books: {
        include: {
          sessions: true,
        },
      },
    },
  });
}

// 2. CRUD POUR Book
// -----------------

export async function createBook(userId: string, data: {
  title: string;
  author: string;
  description?: string;
  pageCount: number;
  isbn?: string;
  coverImage?: string;
}) {
  return await prisma.book.create({
    data: {
      ...data,
      userId,
    },
  });
}

export async function getBooksByUser(userId: string) {
  return await prisma.book.findMany({
    where: { userId },
    include: {
      sessions: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getBookById(bookId: string) {
  return await prisma.book.findUnique({
    where: { id: bookId },
    include: {
      sessions: {
        orderBy: {
          date: 'desc',
        },
      },
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function updateBookStatus(bookId: string, status: any) {
  return await prisma.book.update({
    where: { id: bookId },
    data: { status },
  });
}

export async function deleteBook(bookId: string) {
  return await prisma.book.delete({
    where: { id: bookId },
  });
}

// 3. CRUD POUR ReadingSession
// -------------------------

export async function createReadingSession(data: {
  bookId: string;
  userId: string;
  startPage: number;
  endPage: number;
  duration?: number;
  notes?: string;
  date?: Date;
}) {
  return await prisma.readingSession.create({
    data,
  });
}

export async function getSessionsByBook(bookId: string) {
  return await prisma.readingSession.findMany({
    where: { bookId },
    include: {
      book: {
        select: {
          title: true,
          author: true,
        },
      },
    },
    orderBy: {
      date: 'desc',
    },
  });
}

export async function getSessionsByUser(userId: string) {
  return await prisma.readingSession.findMany({
    where: { userId },
    include: {
      book: true,
    },
    orderBy: {
      date: 'desc',
    },
  });
}

// 4. REQUETES COMPLEXES
// ---------------------

// nombre total de pages lues par un utilisateur
export async function getTotalPagesReadByUser(userId: string) {
  const sessions = await prisma.readingSession.findMany({
    where: { userId },
    select: {
      startPage: true,
      endPage: true,
    },
  });

  return sessions.reduce((total, session) => {
    return total + (session.endPage - session.startPage + 1);
  }, 0);
}

// livres les plus lus (par nombre de sessions)
export async function getMostReadBooks(userId: string, limit: number = 5) {
  return await prisma.book.findMany({
    where: { userId },
    include: {
      _count: {
        select: { sessions: true },
      },
    },
    orderBy: {
      sessions: {
        _count: 'desc',
      },
    },
    take: limit,
  });
}

// Statistiques de lecture par mois
export async function getReadingStatsByMonth(userId: string, year: number) {
  return await prisma.readingSession.groupBy({
    by: ['date'],
    where: {
      userId,
      date: {
        gte: new Date(year, 0, 1),
        lte: new Date(year, 11, 31),
      },
    },
    _sum: {
      duration: true,
    },
    _count: {
      _all: true,
    },
  });
}

// 5. REQUETES AVEC TRANSACTIONS
// ----------------------------

export async function createBookWithFirstSession(
  userId: string,
  bookData: {
    title: string;
    author: string;
    pageCount: number;
    startPage: number;
    endPage: number;
    duration?: number;
  }
) {
  return await prisma.$transaction(async (tx) => {
    const book = await tx.book.create({
      data: {
        title: bookData.title,
        author: bookData.author,
        pageCount: bookData.pageCount,
        userId,
      },
    });

    const session = await tx.readingSession.create({
      data: {
        bookId: book.id,
        userId,
        startPage: bookData.startPage,
        endPage: bookData.endPage,
        duration: bookData.duration,
        date: new Date(),
      },
    });

    return { book, session };
  });
}
