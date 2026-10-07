import Section from "./Section";
import Reveal from "./Reveal";
import { profile, education, certifications } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="space-y-4 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph, i) => (
          <Reveal key={paragraph} delay={i * 100}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
            <h3 className="flex items-center gap-2 font-medium">
              <span className="text-xl">🎓</span> Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.school}>
                  <p className="font-medium">{item.school}</p>
                  <p className="text-sm text-muted">{item.degree}</p>
                  <p className="mt-1 font-mono text-xs text-accent">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120} className="h-full">
          <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100">
            <h3 className="flex items-center gap-2 font-medium">
              <span className="text-xl">🏅</span> Certifications
            </h3>
            <ul className="mt-5 space-y-5">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
