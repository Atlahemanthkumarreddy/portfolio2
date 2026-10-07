import Image from "next/image";
import { profile } from "@/data/portfolio";

// Brush-stroke shapes painted over the left (poster) half of the photo
function PaintStrokes({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 400" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="14" />
        </filter>
      </defs>
      <g filter={`url(#${id})`} strokeLinecap="round" fill="none">
        <path d="M120 40 L170 150" stroke="#f472b6" strokeWidth="34" />
        <path d="M60 110 L150 250" stroke="#facc15" strokeWidth="40" />
        <path d="M150 90 L110 230" stroke="#2dd4bf" strokeWidth="30" />
        <path d="M40 200 L120 330" stroke="#60a5fa" strokeWidth="36" />
        <path d="M170 200 L150 340" stroke="#f87171" strokeWidth="26" />
        <path d="M90 300 L180 380" stroke="#a78bfa" strokeWidth="32" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-dots absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-6xl px-6 pt-10 md:pt-14">
        <h1 className="text-center font-mono text-sm text-muted animate-fade-up">
          Hi, I&apos;m <span className="font-semibold text-foreground">{profile.name}</span>
        </h1>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-6 gap-y-10 md:grid-cols-[1fr_auto_1fr]">
          {/* Left: frontend */}
          <div className="group animate-slide-left [animation-delay:300ms] md:pl-4">
            <p className="text-[1.75rem] font-bold tracking-tighter transition-colors duration-300 group-hover:text-accent sm:text-6xl lg:text-7xl">
              frontend
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted sm:text-base">
              Front End Engineer who builds responsive, user-friendly interfaces with React.js and Material UI.
            </p>
          </div>

          {/* Center: split photo */}
          <div className="relative order-first col-span-2 mx-auto w-72 animate-fade-up sm:w-80 md:order-none md:col-span-1 lg:w-[400px]">
            {/* Paint splashes behind the photo */}
            <PaintStrokes id="brush-back" className="absolute -bottom-6 -left-24 h-48 w-40 -rotate-12 opacity-80" />

            <div className="photo-mask group relative aspect-[3/4]">
              {/* Right half: the normal photo */}
              <Image
                src={profile.photo}
                alt={`Photo of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 400px, 320px"
                className="object-cover"
              />
              {/* Left half: high-contrast poster with paint strokes multiplied on top */}
              <div className="absolute inset-0 [clip-path:inset(0_50%_0_0)] transition-[clip-path] duration-700 ease-out group-hover:[clip-path:inset(0_100%_0_0)]">
                <Image
                  src={profile.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, 320px"
                  className="object-cover [filter:grayscale(1)_contrast(3.2)_brightness(1.25)]"
                />
                <PaintStrokes id="brush-face" className="absolute inset-0 h-full w-full opacity-90 mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Right: <coder> */}
          <div className="group relative animate-slide-right [animation-delay:300ms] md:pl-6">
            <p className="font-mono text-[1.6rem] font-bold tracking-tighter transition-colors duration-300 group-hover:text-accent sm:text-6xl lg:text-7xl">
              &lt;coder&gt;
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted sm:text-base">
              Full-stack developer working with Node.js, Express and MongoDB, focused on clean, efficient code.
            </p>
          </div>
        </div>

        {/* Pills, buttons and stats under the photo */}
        <div className="mt-6 flex flex-col items-center gap-8 pb-16 animate-fade-up [animation-delay:500ms]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to front-end roles
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted shadow-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {profile.location}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-blue-500/30"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground"
              >
                Resume
              </a>
            )}
          </div>

          <dl className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
