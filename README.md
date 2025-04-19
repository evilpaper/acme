# ACME

An open source application built using the app router, server components and all goodies in Next.js.

> **Warning**
> This app is a work in progress. Building this in public.
> See the roadmap below.

## About this project

This project as an experiment to see how a modern app with features like authentication, subscriptions, API routes, static pages ...etc would work in Next.js and server components. Started out as a copy paste of shadcn's Taxonomy.
Thought it to be a good way to test out new technologies, practice concepts etc. Have no clear direction, just trying out stuff.

## Features

- `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, caching and mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- Database on **Vercel Postgres**
- UI Components built using **shadnc/ui**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Roadmap

- [ ] Save quiz in database
- [ ] Subscriptions using Stripe

## Known Issues

- [ ] fetchInvoiceById throw an error if id isn't an UUID. A bit crud to show error, better show custom bad request or something.

## Setup

1. Setting up a database

This project is built on the premise of using a PostgreSQL database for keepting data. If you're already familiar with PostgreSQL and would prefer to use your own database provider, you can skip this chapter and set it up on your own.

2. Create a Postgres database

3. Seed the database

Now that your database has been created, let's seed it with some initial data.

We've included an API you can access in the browser, which will run a seed script to populate the database with an initial set of data.

The script uses SQL to create the tables, and the data from placeholder-data.ts file to populate them after they've been created.

Ensure your local development server is running with pnpm run dev and navigate to localhost:3000/seed in your browser. When finished, you will see a message "Database seeded successfully" in the browser. Once completed, you can delete this file.

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## Issues experienced and how to resolve them

Needed to rebuild bcrypt (a compiled binary) after changing Node.js version. In case you get an error saying something like "Error: Cannot find module...bcrypt...node" chances are you experienced the same.
If so, run `pnpm rebuild` to fix it.

## License

Licensed under the MIT license.
