import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[200px_1fr]">
        <Reveal>
          <div className="md:sticky md:top-28">
            <p className="font-mono text-xs text-accent">{number}</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h2>
            <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-accent to-violet-500" />
          </div>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
