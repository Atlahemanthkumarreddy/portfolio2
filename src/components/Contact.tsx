import Section from "./Section";
import Reveal from "./Reveal";
import CopyEmailButton from "./CopyEmailButton";
import ContactForm from "./ContactForm";
import { profile, composeEmailUrl } from "@/data/portfolio";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: composeEmailUrl },
    ...(profile.showPhone
      ? [{ label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }]
      : []),
    { label: "LinkedIn", value: "atla-hemanth-kumar-reddy", href: profile.linkedin },
    { label: "GitHub", value: "Atlahemanthkumarreddy", href: profile.github },
  ];

  return (
    <Section id="contact" number="06" title="Contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500 bg-[length:200%_200%] p-8 text-white shadow-2xl shadow-violet-300/50 animate-gradient sm:p-10">
          <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl animate-blob" />
          <h3 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s work together.
          </h3>
          <p className="relative mt-4 max-w-lg text-lg text-white/85">
            I&apos;m looking for front-end roles. If you have an opportunity or just want to talk, my inbox is open.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            <a
              href={composeEmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Say hello
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <ContactForm />
      </Reveal>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {links.map((link, i) => (
          <Reveal as="li" key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 py-5 transition-all duration-300 hover:px-3"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-accent">
                {link.label}
              </span>
              <span className="flex min-w-0 items-center gap-2">
                <span className="truncate transition-colors group-hover:text-accent">{link.value}</span>
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                  ↗
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
