import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/portfolio";

const icons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Languages: "💻",
  Databases: "🗄️",
  "Core CS": "🧠",
  Tools: "🛠️",
};

export default function Skills() {
  return (
    <Section id="skills" number="04" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <Reveal key={skill.group} delay={(i % 2) * 100} className="h-full">
            <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <h3 className="flex items-center gap-2 font-medium">
                <span className="inline-block text-lg transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125">
                  {icons[skill.group] ?? "✨"}
                </span>
                {skill.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-border bg-background px-3 py-1 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
