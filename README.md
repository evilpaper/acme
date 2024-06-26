# ACME

An open source application built using the app router, server components and all goodies in Next.js.

> **Warning**
> This app is a work in progress. I'm building this in public.
> See the roadmap below.

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js and server components. Heavenly inspired by shadcn's Taxonomy. You call also call it i rip off. Anyway, I fins it to be a good way to test out new technologies, practice concepts etc.

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

- [x] Add a component layer for importing and exposing icons
- [x] Use shadcn/ui for all components
- [ ] Login using Swedish BankID
- [ ] Payment using Swedish Swish
- [ ] Subscriptions using Stripe
- [ ] Dark mode

## Known Issues

A list of things not working right now:

## Running Locally

1. Install dependencies using npm:

```sh
npm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
npm run dev
```

Note: Unlike create-react-app, we need to run the dev command, not start. The start command is used to run a production server.

## License

Licensed under the MIT license.
