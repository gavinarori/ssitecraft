import { cn } from "@/utils/cn";
import Marquee from "@/app/components/ui/marquee";

const reviews = [
  {
    body:
      "This agency transformed our online presence! Their professionalism and expertise resulted in a beautiful, user-friendly website that has significantly boosted our business.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
  },
  {
    body:
      "Working with this agency was a fantastic experience. They delivered everything on time, and the quality of their work exceeded our expectations. Highly recommended!",
    name: "John Smith",
    title: "Marketing Director, Creative Solutions",
  },
  {
    body:
      "The team's attention to detail and commitment to customer satisfaction were outstanding. Our new website has received rave reviews from our clients, and we couldn't be happier!",
    name: "Alice Johnson",
    title: "Founder, Health & Wellness Co.",
  },
  {
    body:
      "From start to finish, the process was smooth and stress-free. The final product is not only visually appealing but also functional and easy to navigate. We are thrilled with the results!",
    name: "Michael Brown",
    title: "Owner, Brown's Bakery",
  },
  {
    body:
      "Their innovative approach and creative solutions helped us stand out in a crowded market. The new site has increased our traffic and conversions substantially. Excellent work!",
    name: "Sarah Williams",
    title: "Marketing Manager, Fashion Forward",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  name,
  title,
  body,
}: {
  name: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-auto w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)] cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-lg font-medium dark:text-white">
          {name}
        </figcaption>
        <p className="text-sm font-medium dark:text-white/40">{title}</p>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full  flex-col overflow-hidden rounded-lg border bg-background ">
       <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don't just take our word for it. Here's what{" "}
        <strong>real people</strong> are saying about ssiteCraft.
      </h3>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        <div className="flex flex-wrap justify-center w-full gap-2">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </Marquee>
     
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
