import { ModeSwitch } from "@/components/ui/mode-switch";

export function Footer() {
  return (
    <footer className="container mt-auto flex flex-col items-center justify-between gap-6 p-6 md:flex-row">
      <section>
        <p className="text-center text-sm">
          Built by{" "}
          <a
            href="https://evilpaper.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            evilpaper.
          </a>{" "}
          Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel.
          </a>{" "}
          The source code is available on{" "}
          <a
            href="https://github.com/evilpaper/acme"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub.
          </a>
        </p>
      </section>
      <ModeSwitch />
    </footer>
  );
}
