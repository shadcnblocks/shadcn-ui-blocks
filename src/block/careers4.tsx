import { Button } from "@/components/ui/button";

interface JobOpening {
  title: string;
  location: string;
  url: string;
}

interface JobCategory {
  category: string;
  openings: JobOpening[];
}

interface Careers4Props {
  heading?: string;
  jobs?: JobCategory[];
}

const Careers4 = ({
  heading = "Job Openings",
  jobs = [
    {
      category: "Engineering",
      openings: [
        {
          title: "Senior Frontend Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "UI/UX Designer",
          location: "San Francisco",
          url: "#",
        },
        {
          title: "React Developer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Technical Lead",
          location: "London",
          url: "#",
        },
      ],
    },
    {
      category: "Design",
      openings: [
        {
          title: "Product Designer",
          location: "Remote",
          url: "#",
        },
        {
          title: "Visual Designer",
          location: "Berlin",
          url: "#",
        },
      ],
    },
  ],
}: Careers4Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-xl">
          <div className="text-center lg:text-left">
            <h1 className="text-left text-3xl font-medium md:text-4xl">
              {heading}
            </h1>
          </div>
          <div className="mx-auto mt-6 flex flex-col gap-16 md:mt-14">
            {jobs.map((jobCategory) => (
              <div key={jobCategory.category} className="grid">
                <h2 className="border-b pb-4 text-xl font-bold">
                  {jobCategory.category}
                </h2>
                {jobCategory.openings.map((job) => (
                  <div
                    key={job.title}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <a href={job.url} className="font-semibold hover:underline">
                      {job.title}
                    </a>
                    <Button
                      variant="outline"
                      size="sm"
                      className="pointer-events-none rounded-full"
                    >
                      {job.location}
                    </Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Careers4 };
