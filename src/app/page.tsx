export default async function Page() {
  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <img src="/images/block/block-1.svg" alt="logo" className="h-16" />
            <div>
              <h1 className="mb-4 text-pretty text-2xl font-medium lg:text-4xl">
                Shadcnblocks.com blocks library
              </h1>
              <p className="inline-flex items-center gap-x-2 text-muted-foreground lg:text-xl">
                Browse the categories in the navbar our visit{" "}
                <code className="rounded-sm bg-muted px-2 py-1 font-mono text-sm text-primary">
                  /block/:id
                </code>{" "}
                for individual blocks. For example try{" "}
                <a href="/block/hero1" className="underline">
                  Hero1
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
