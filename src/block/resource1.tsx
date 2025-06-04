import { Book, Download, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const Resource1 = () => {
  return (
    <section className="py-32">
      <div className="container grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="order-last md:order-none md:col-span-4 lg:col-span-3">
          <aside className="flex flex-col gap-2">
            <div className="mb-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/50 px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Book className="mr-2.5 size-3.5 text-muted-foreground" />
                  Whitepaper
                </h3>
              </div>
              <div className="p-5">
                <div className="gap-4 text-lg leading-snug font-semibold text-foreground">
                  <p>The Complete Guide to Launching Your Startup</p>
                </div>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/50 px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Download className="mr-2.5 size-3.5 text-muted-foreground" />
                  Download Options
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enjoy this guide? Download it for offline reading or
                    sharing.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Button
                      className="w-full justify-between"
                      variant="default"
                    >
                      PDF Format
                      <Download className="ml-2 size-4" />
                    </Button>
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                    >
                      Print Version
                      <Download className="ml-2 size-4" />
                    </Button>
                  </div>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Read time: 5 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/50 px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Share2 className="mr-2.5 size-3.5 text-muted-foreground" />
                  Share this guide
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex items-center gap-2">
                  <li>
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted"
                      aria-label="Share on Instagram"
                    >
                      <img
                        src="https://shadcnblocks.com/images/block/logos/instagram-icon.svg"
                        alt="Instagram"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted"
                      aria-label="Share on LinkedIn"
                    >
                      <img
                        src="https://shadcnblocks.com/images/block/logos/linkedin-icon.svg"
                        alt="LinkedIn"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted"
                      aria-label="Share on Product Hunt"
                    >
                      <img
                        src="https://shadcnblocks.com/images/block/logos/producthunt-icon.svg"
                        alt="Product Hunt"
                        className="size-5"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted"
                      aria-label="Share on Twitter"
                    >
                      <img
                        src="https://shadcnblocks.com/images/block/logos/twitter-icon.svg"
                        alt="Twitter"
                        className="size-5"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <div className="md:col-span-7 md:col-start-5 lg:col-start-6">
          <article className="prose prose-sm">
            <h1>White Paper: The Complete Guide to Launching Your Startup</h1>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <h2>The King&apos;s Plan</h2>
            <p>
              The king thought long and hard, and finally came up with{" "}
              <a href="#">a brilliant plan</a>: he would tax the jokes in the
              kingdom.
            </p>
            <blockquote>
              &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
              joke, so it&apos;s only fair that they should pay for the
              privilege.&rdquo;
            </blockquote>
            <h3>The Joke Tax</h3>
            <p>
              The king&apos;s subjects were not amused. They grumbled and
              complained, but the king was firm:
            </p>
            <ul>
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell
              into a gloom. But there was one person who refused to let the
              king&apos;s foolishness get him down: a court jester named
              Jokester.
            </p>
            <h3>Jokester&apos;s Revolt</h3>
            <p>
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king&apos;s
              pillow, in his soup, even in the royal toilet. The king was
              furious, but he couldn&apos;t seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the
              jokes left by Jokester were so funny that they couldn&apos;t help
              but laugh. And once they started laughing, they couldn&apos;t
              stop.
            </p>
            <h3>The People&apos;s Rebellion</h3>
            <p>
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again, and soon the entire kingdom
              was in on the joke.
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>King&apos;s Treasury</th>
                    <th>People&apos;s happiness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empty</td>
                    <td>Overflowing</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Modest</td>
                    <td>Satisfied</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td>Full</td>
                    <td>Ecstatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. Jokester was declared
              a hero, and the kingdom lived happily ever after.
            </p>
            <p>
              The moral of the story is: never underestimate the power of a good
              laugh and always be careful of bad ideas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export { Resource1 };
