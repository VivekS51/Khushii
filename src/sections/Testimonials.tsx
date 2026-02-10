import { reviews } from "@/constants";
import { cn } from "@/lib/utils";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 hover-animation" style={{
      borderColor: "hsl(var(--border))",
      background: "linear-gradient(135deg, hsl(var(--indigo)), hsl(var(--storm)))",
    }}>
      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "hsl(var(--royal) / 0.5)" }}>
          {name[0]}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-muted-foreground">{body}</blockquote>
    </figure>
  );
};

const Marquee = ({
  children,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("flex overflow-hidden [--gap:1rem] gap-[var(--gap)]", className)}>
      <div className={cn(
        "flex shrink-0 gap-[var(--gap)] min-w-full justify-around",
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      )} style={{ "--duration": "30s" } as React.CSSProperties}>
        {children}
        {children}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="c-space mt-24 md:mt-36">
      <h2 className="text-heading">Hear From My Clients</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden gap-4">
        <Marquee className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
      </div>
    </section>
  );
};

export default Testimonials;
