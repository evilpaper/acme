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

## Running Locally

1. Install dependencies using npm:

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

Note: Unlike create-react-app, we need to run the dev command, not start. The start command is used to run a production server.

## Issues experienced and how to resolve them

Needed to rebuild bcrypt (a compiled binary) after changing Node.js version. In case you get an error saying something like "Error: Cannot find module...bcrypt...node" chances are you experienced the same.
If so, run `pnpm rebuild` to fix it.

## License

Licensed under the MIT license.
