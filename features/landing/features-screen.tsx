import {
  AnimationIcon,
  AuthenticationIcon,
  ComponentsIcon,
  DatabaseIcon,
  HostingIcon,
  NextIcon,
  ReactIcon,
  SubscriptionsIcon,
  TranslationsIcon,
} from "@/components/ui/feature-icons";

const features = [
  {
    id: crypto.randomUUID(),
    name: "Drag and Drop Flip Cards", // Main feature, what you are here for.
    description: "Complex, fully-featured Drag and Drop.",
  },
  {
    id: crypto.randomUUID(),
    name: "App Feel", // Showcase skill.
    description: "Page Transitions. Smooth animations.",
  },
  {
    id: crypto.randomUUID(),
    name: "Free to Use. Fair Play Guarantee", // Openness, showcase without lock-in
    description: "Completely free to use with no pay-to-win elements.",
  },
  {
    id: crypto.randomUUID(),
    name: "Achievement-Based Progression", // Sign in, auth, user handling, persistence.
    description:
      "Unlock additional visual themes through dedicated play and earn milestone achievements. Using local storage and personal account.",
  },
  {
    id: crypto.randomUUID(),
    name: "Global Contribution", // Real-time muliplayer
    description:
      "Every flip joins the worldwide counter, visible to all players in real-time",
  },
];

const technologies = [
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
    name: "Neon",
    description: "Open-source Postgres database.",
    icon: <DatabaseIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Components",
    description: "Custom and shadcn/ui components. Styled with Tailwind CSS.",
    icon: <ComponentsIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Auth.js",
    description: "Authentication and middlewares.",
    icon: <AuthenticationIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Motion",
    description: "Smooth, high-performance animations.",
    icon: <AnimationIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Vercel",
    description:
      "Hsting. Scalable infrastructure, secure data handling and automated deployment process.",
    icon: <HostingIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Languine",
    description:
      "Automated localization, brand voice and tone consistency. Coming soon...",
    icon: <TranslationsIcon />,
  },
  {
    id: crypto.randomUUID(),
    name: "Polar",
    description: "Free and paid subscriptions. Coming soon...",
    icon: <SubscriptionsIcon />,
  },
];

export async function FeaturesScreen() {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Jam packed with features
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Well, maybe not. This project is a playground application. Built for
          fun. List of features are coming soon...we think.
        </p>
      </article>
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Technologies
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Everything here is a work in progress and subject to change. It's
          built in the same spirit as shadcn's{" "}
          <a
            href="https://tx.shadcn.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Taxonomy
          </a>
          , check that out if you’re into this kind of thing.
        </p>
      </article>
      <article className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {technologies.map(({ id, icon, name, description }) => {
          return (
            <article
              className="relative overflow-hidden rounded-lg border bg-background p-2"
              key={id}
            >
              <div className="flex flex-col justify-between rounded-md p-6">
                {icon}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
}
