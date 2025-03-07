// Placeholder for the DB type to avoid type issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DbType = any;

// For development, use a mock database client
export const db: DbType = {
  query: {
    users: {
      findFirst: async () => null,
    },
  },
  select: () => ({
    from: () => ({
      where: () => Promise.resolve([]),
      limit: () => Promise.resolve([]),
    }),
  }),
  insert: () => ({
    values: () => ({
      returning: () => Promise.resolve([{
        id: "mock-id",
        name: "Test User",
        email: "test@example.com",
        role: "user",
        password: "hashed-password",
        createdAt: new Date(),
        updatedAt: new Date(),
      }]),
    }),
  }),
};

// When ready to restore database connectivity, use this:
/*
// Check if we're in a production environment
const connectionString = process.env.DATABASE_URL!;

// Create a PostgreSQL connection
const client = postgres(connectionString);

// Create a Drizzle ORM instance
export const db = drizzle(client, { schema });
*/

// Export schema for use in other files
export * from "./schema"; 