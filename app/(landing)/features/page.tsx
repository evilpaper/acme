import {
  AuthenticationIcon,
  ComponentsIcon,
  DatabaseIcon,
  NextIcon,
  ReactIcon,
  SubscriptionsIcon,
} from "@/components/ui/feature-icons";

const features = [
  {
    id: crypto.randomUUID(),
    name: "Next.js",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    icon: <NextIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "React",
    description: "Server and Client Components. Use hook.",
    icon: <ReactIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Database",
    description:
      "Vercel Postgres: Scalable SQL for the web, deployed on Vercel.",
    icon: <DatabaseIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Components",
    description:
      "UI components built using shadcn/ui and styled with Tailwind CSS.",
    icon: <ComponentsIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Authentication",
    description: "Authentication using Auth.js and middlewares.",
    icon: <AuthenticationIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Subscriptions",
    description: "Free and paid subscriptions using Stripe. Coming soon...",
    icon: <SubscriptionsIcon />,
  },
];

export default function Page() {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Jam packed with features
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Well. maybe not. This project is an experiment to see how a modern
          app, with features like auth, subscriptions, API routes, and static
          pages would work in a Next.js app.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => {
          return (
            <article
              className="relative overflow-hidden rounded-lg border bg-background p-2"
              key={feature.id}
            >
              <div className="flex flex-col justify-between rounded-md p-6">
                {feature.icon}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
