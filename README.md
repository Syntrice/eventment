# Eventment

![image](https://github.com/user-attachments/assets/d634f097-35e1-4cd9-92b2-9862d62bead6)

An exercise in [next.js](https://nextjs.org/) to create an events listing and RSVP platform.

## Features

- [x] GitHub and credentials based authentication using [auth.js](https://authjs.dev/)
- [x] Password hashing, salting, and verification using [bcrypt](https://www.npmjs.com/package/bcrypt)
- [x] Validation using [zod](https://zod.dev/)
- [x] [Prisma](https://www.prisma.io/) + SQLite data persistence layer
- [x] Robust TypeScript code
- [x] Responsive design with TailwindCSS + React
- [x] Posting and viewing of events
- [ ] Maps API integration (TBC)

## Setup

```bash
# 1. Clone the Repository
git clone https://github.com/Syntrice/eventment.git

# 2. Resolve dependencies
cd eventment
npm install

# 3. Set the following environment variables in .env
DATABASE_URL="file:./data/dev.db"
AUTH_SECRET="" # A long secret key for use by auth.js
AUTH_GITHUB_ID="" # github OAuth ID, required for github authentication
AUTH_GITHUB_SECRET="" # github OAuth secret, required for github authentication
AUTH_TRUST_HOST=true

# 4. Create SQLite database
npm run db:reset

# 5. Run or build project
npm run dev # run in watch mode
npm run build # build only
npm run start # run normally
```

## Licence

This project is licenced under MIT.
