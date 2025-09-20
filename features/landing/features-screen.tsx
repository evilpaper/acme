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
  },
  {
    id: crypto.randomUUID(),
    name: "React",
    description: "Server and Client Components. Use hook.",
  },
  {
    id: crypto.randomUUID(),
    name: "Neon",
    description: "Serverless Postgres database.",
  },
  {
    id: crypto.randomUUID(),
    name: "shadcn/ui",
    description:
      "Customized and extendable components built using Radix UI and styled with Tailwind CSS.",
  },
  {
    id: crypto.randomUUID(),
    name: "Auth.js",
    description: "Runtime agnostic authentication based on standard Web APIs.",
  },
  {
    id: crypto.randomUUID(),
    name: "Motion",
    description: "Smooth, high-performance animations.",
  },
  {
    id: crypto.randomUUID(),
    name: "Vercel",
    description:
      "Scalable infrastructure and hosting. Secure data handling and automated deployment process.",
  },
  {
    id: crypto.randomUUID(),
    name: "Polar",
    description: "Free and paid subscriptions. Coming soon...",
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
          Everything here is by it's nature subjected to change. Built in the
          same spirit as shadcn's{" "}
          <a
            href="https://tx.shadcn.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Taxonomy
          </a>
          . Will try to use modern technologies. At least try to.
        </p>
      </article>
      <article className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {technologies.map(({ id, name, description }) => {
          return (
            <article
              className="relative overflow-hidden rounded-lg border bg-background p-2"
              key={id}
            >
              <div className="flex flex-col justify-between rounded-md p-6">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
}
