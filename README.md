# Athenate Take Home Project

A Next.js application for managing user profiles with a modern UI and server-side functionality.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd athenate-take-home
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the database:

```bash
# Create a .env file in the root directory
echo "DATABASE_URL=\"file:./dev.db\"" > .env

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

- `/src/app` - Next.js app directory containing pages and components
- `/prisma` - Database schema and migrations
- `/generated` - Generated Prisma client
- `/public` - Static assets

### Key Features

- Server-side rendering with Next.js
- SQLite database with Prisma ORM
- Server Actions for form handling
- Modern UI with Tailwind CSS
- TypeScript for type safety

### Available Routes

- `/create` - Create a new profile
- `/profiles` - View all profiles (if implemented)

### Database Schema

The application uses a SQLite database with the following schema:

```prisma
model Profile {
  id       Int    @id @default(autoincrement())
  name     String
  location String?
  image    String?
  headline String?
  aboutMe  String?

  @@map("profiles")
}
```

### Development

- The project uses TypeScript for type safety
- Tailwind CSS for styling
- Prisma for database operations
- Next.js 14 with App Router

### Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed
2. Verify the database is properly set up
3. Check that the `.env` file exists with the correct DATABASE_URL
4. Ensure you're using a compatible Node.js version
