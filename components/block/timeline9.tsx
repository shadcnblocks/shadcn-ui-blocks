import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "1956",
    title: "The Birth of AI",
    content:
      "The term 'Artificial Intelligence' was coined at the Dartmouth Conference, marking the official beginning of AI as a field. John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon organized this seminal event, setting the stage for decades of research and development.",
  },
  {
    date: "1966-1973",
    title: "Early Optimism and First AI Winter",
    content:
      "The early years saw significant optimism with programs like ELIZA (the first chatbot) and SHRDLU (a natural language understanding system). However, by the early 1970s, funding dried up as researchers faced the limitations of early computing power and the complexity of human intelligence.",
  },
  {
    date: "1980-1987",
    title: "Expert Systems and Revival",
    content:
      "AI experienced a revival with the development of expert systems like MYCIN (for medical diagnosis) and DENDRAL (for chemical analysis). These systems used rule-based approaches to mimic human decision-making in specific domains, leading to renewed interest and funding in AI research.",
  },
  {
    date: "1997",
    title: "Deep Blue Defeats Chess Champion",
    content:
      "IBM's Deep Blue became the first computer system to defeat a reigning world chess champion, Garry Kasparov, in a six-game match. This milestone demonstrated AI's potential to outperform humans in complex strategic games and captured the public's imagination.",
  },
];

const Timeline9 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-6xl">
          The History of Artificial Intelligence
        </h1>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="absolute top-4 left-2 bg-muted"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
              <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md top-3 -left-34 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline9 };
