import dotenv from 'dotenv';

dotenv.config()
module.exports = {
  migrationFolder: './migrations',
  direction: 'up',
  databaseUrl: process.env.DATABASE_URL,
  dir: 'migrations',
  migrationsTable: 'pgmigrations',
  schema: 'public',
};