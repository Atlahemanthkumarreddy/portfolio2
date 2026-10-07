import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <ol className="relative space-y-8 border-l border-border">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 120} className="group relative pl-8">
            <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent ring-4 ring-blue-100 transition-transform duration-300 group-hover:scale-125" />
            <div className="rounded-2xl border border-transparent p-5 transition-all duration-300 group-hover:border-border group-hover:bg-card group-hover:shadow-lg group-hover:shadow-stone-200/60">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">
                  {job.role} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="rounded-full bg-stone-100 px-3 py-0.5 font-mono text-xs text-muted">
                  {job.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 text-accent">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
