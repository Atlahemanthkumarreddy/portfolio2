import Image from "next/image";
import Reveal from "./Reveal";
import { profile, projects } from "@/data/portfolio";

// ---------- Illustrated covers (used until real screenshots are added) ----------

function TasksCover() {
  const columns = [
    { name: "To do", dot: "bg-amber-400", tasks: [70, 50, 85] },
    { name: "Doing", dot: "bg-blue-500", tasks: [60, 80] },
    { name: "Done", dot: "bg-emerald-500", tasks: [75, 55, 65] },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#d3d2a5]">
      <div className="w-[68%] -rotate-3 rounded-xl bg-white p-3 shadow-2xl shadow-stone-700/30 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-3 h-2 w-20 rounded-full bg-stone-200" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {columns.map((col) => (
            <div key={col.name} className="rounded-lg bg-stone-100 p-2">
              <p className="mb-2 flex items-center gap-1 text-[9px] font-semibold text-stone-500 sm:text-[10px]">
                <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} /> {col.name}
              </p>
              <div className="space-y-1.5">
                {col.tasks.map((w, i) => (
                  <div key={i} className="rounded-md bg-white p-1.5 shadow-sm">
                    <div className="h-1.5 rounded-full bg-stone-300" style={{ width: `${w}%` }} />
                    <div className="mt-1 h-1.5 w-1/3 rounded-full bg-stone-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TravelCover() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#9a6a46] via-[#7a5236] to-[#3f2a1c]">
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute right-[12%] top-[14%] h-14 w-14 rounded-full bg-amber-200/90 shadow-[0_0_60px_rgba(253,230,138,0.7)]" />
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M0 220 Q 90 170 160 200 T 400 170 L400 260 L0 260Z" fill="#2c1d13" opacity="0.55" />
        <path
          d="M60 190 C 120 90, 200 210, 250 120 S 340 60, 350 90"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          className="transition-all duration-1000 group-hover:[stroke-dashoffset:-60]"
        />
        {[
          [60, 190],
          [250, 120],
          [350, 90],
        ].map(([x, y]) => (
          <g key={x} transform={`translate(${x - 9} ${y - 24})`}>
            <path d="M9 0a9 9 0 0 1 9 9c0 7-9 15-9 15S0 16 0 9a9 9 0 0 1 9-9z" fill="#f97316" />
            <circle cx="9" cy="9" r="3.5" fill="white" />
          </g>
        ))}
      </svg>
      <div className="absolute left-[10%] top-[16%] rounded-xl bg-white/95 px-3 py-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-1.5">
        <p className="text-[10px] font-semibold text-stone-800 sm:text-xs">Goa, India</p>
        <p className="text-[9px] text-stone-500 sm:text-[10px]">★ 4.8 · 3 days</p>
      </div>
      <p className="absolute inset-x-0 top-[44%] text-center font-serif text-3xl italic text-white drop-shadow-lg sm:text-4xl">
        Travel Guide
      </p>
    </div>
  );
}

function CurrencyCover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b6470] to-[#163c44]">
      <div className="absolute h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="relative w-[64%] rotate-6 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105">
        <div className="relative aspect-[2.2/1] overflow-hidden rounded-lg bg-gradient-to-br from-[#d8d3c4] to-[#b9b3a2] p-3 shadow-2xl shadow-black/40">
          <div className="absolute right-[12%] top-1/2 h-[62%] aspect-square -translate-y-1/2 rounded-full border-2 border-stone-500/30" />
          <p className="font-mono text-lg font-bold text-stone-700 sm:text-xl">₹500</p>
          <div className="mt-2 space-y-1">
            <div className="h-1 w-1/2 rounded bg-stone-500/30" />
            <div className="h-1 w-1/3 rounded bg-stone-500/30" />
          </div>
          <div className="absolute bottom-2 left-3 h-3 w-16 rounded-sm bg-[repeating-linear-gradient(90deg,#78716c_0_2px,transparent_2px_4px)] opacity-40" />
          {/* Scan line */}
          <div className="absolute inset-x-0 h-0.5 bg-cyan-300 shadow-[0_0_12px_3px_rgba(103,232,249,0.8)] animate-scan" />
        </div>
        <span className="absolute -bottom-3 -right-4 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white shadow-lg sm:text-xs">
          ✓ Genuine · 89%
        </span>
      </div>
    </div>
  );
}

const covers: Record<string, () => React.ReactElement> = {
  tasks: TasksCover,
  travel: TravelCover,
  currency: CurrencyCover,
};

// ---------- Tile ----------

type TileProps = {
  href?: string;
  cover: React.ReactNode;
  title: string;
  meta: string;
  description?: string;
};

function Tile({ href, cover, title, meta, description }: TileProps) {
  const body = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden rounded-[10px]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          {cover}
        </div>
      </div>
      {/* Caption: always shown on phones, slides up on hover on larger screens */}
      <div className="mt-1.5 rounded-[8px] bg-white px-4 py-3 md:absolute md:inset-x-1.5 md:bottom-1.5 md:mt-0 md:translate-y-3 md:opacity-0 md:shadow-lg md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-medium">{title}</h3>
          <p className="shrink-0 text-xs text-stone-600">{meta}</p>
        </div>
        {description && <p className="mt-1 line-clamp-2 text-sm text-stone-500">{description}</p>}
      </div>
    </>
  );

  const className =
    "group relative block rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-400/40";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  );
}

// ---------- Section ----------

export default function Projects() {
  return (
    <section id="projects" className="bg-stone-200/50 px-3 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-stone-100 px-5 py-16 shadow-xl shadow-stone-300/40 ring-8 ring-white sm:px-12 sm:py-20">
        <Reveal>
          <h2 className="bg-gradient-to-b from-stone-950 from-30% to-stone-950/0 bg-clip-text text-center text-[clamp(3.2rem,14vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-transparent">
            Projects
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-stone-400">
            A showcase of <span className="text-stone-900">full-stack apps</span>,{" "}
            <span className="text-stone-900">responsive web experiences</span> and image-processing work,
            each built to <span className="text-stone-900">solve a real problem.</span>
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="rounded-md bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/20 transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-blue-500/30"
          >
            Work with me
          </a>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {projects.map((project, i) => {
            const Cover = covers[project.cover];
            return (
              <Reveal key={project.title} delay={(i % 2) * 120}>
                <Tile
                  href={project.live || project.github || undefined}
                  title={project.title}
                  meta={`${project.tag} • ${project.tech.slice(0, 3).join(", ")}`}
                  description={project.description}
                  cover={
                    project.image ? (
                      <Image src={project.image} alt={project.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                    ) : Cover ? (
                      <Cover />
                    ) : (
                      <div className="absolute inset-0 bg-stone-300" />
                    )
                  }
                />
              </Reveal>
            );
          })}

          <Reveal delay={(projects.length % 2) * 120}>
            <Tile
              href={profile.github}
              title="More on GitHub"
              meta="Code • Experiments"
              description="See the source code and other things I'm building."
              cover={
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e0662a] to-[#b8410f] text-white">
                  <svg viewBox="0 0 24 24" className="h-16 w-16 transition-transform duration-500 group-hover:rotate-[360deg]" fill="currentColor" aria-hidden>
                    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
                  </svg>
                  <p className="font-serif text-3xl italic drop-shadow sm:text-4xl">More on GitHub</p>
                </div>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
