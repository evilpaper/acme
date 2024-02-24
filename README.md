# ACME

An open source application built using the new router, server components and everything new in Next.js.

> **Warning**
> This app is a work in progress. I'm building this in public.
> See the roadmap below.

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js 13 and server components.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- Database on **Vercel Postgres**
- UI Components built using **shadnc/ui**
- Documentation and blog using **MDX**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Roadmap

- [x] Add a component layer for importing and exposing icons
- [ ] Use shadcn/ui for all components and move components to own folder
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
