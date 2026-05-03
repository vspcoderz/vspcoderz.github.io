export default function Home() {
  return (
    <main className="p-2">
      <section className="py-4 px-2 flex flex-col">
        <div className="mb-6">
          <a
            href="http://github.com/vspcoderz"
            target="_blank"
            className="text-blue-900"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          /{" "}
          <a
            href="http://polafy.com"
            target="_blank"
            className="text-blue-900"
            rel="noopener noreferrer"
          >
            Server Hosting
          </a>{" "}
          /{" "}
          <a
            href="http://veizstudio.com"
            target="_blank"
            className="text-blue-900"
            rel="noopener noreferrer"
          >
            Game Studio
          </a>
        </div>
        <div>I'm Vspcoderz, Full Stack Developer And Game Developer</div>
      </section>
      <section className="py-4 px-2 flex flex-col gap-6">
        {/* Polafy the goat */}
        <div className="flex gap-4 items-center justify-start">
          <span className="size-12 rounded-lg bg-neutral-300">
            <img
              src="https://polafy.com/favicon.ico"
              className="w-full h-full"
              alt="Polafy Hosting"
            />
          </span>
          <div className="flex flex-col gap-1 items-start justify-center">
            <span>Polafy Hosting</span>
            <span className=" text-sm text-neutral-700/80">
              CEO - Dec 25 To Current{" "}
            </span>
          </div>
        </div>
        {/* Veiz Studio Man */}
        <div className="flex gap-4 items-center justify-start">
          <span className="size-12 rounded-lg bg-neutral-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag_Pj2Tv81f-ajPRZO8p5hD4m3ExrSg2l4g&sF"
              className="w-full h-full"
              alt="Polafy Hosting"
            />
          </span>
          <div className="flex flex-col gap-1 items-start justify-center">
            <span>Veiz Studio</span>
            <span className=" text-sm text-neutral-700/80">
              Founder & CEO - Feb 26 To Current{" "}
            </span>
          </div>
        </div>
      </section>
      Hello
    </main>
  );
}
