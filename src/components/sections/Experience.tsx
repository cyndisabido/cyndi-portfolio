import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Fourteen years in healthcare tech"
          description="From Software Engineering and Quality Assurance to Machine Learning, AI Enablement & Product Development—always close to the people using the systems."
        />

        <div className="relative space-y-8 before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-border sm:before:left-[15px]">
          {experience.map((item) => (
            <article key={item.id} className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-secondary bg-background sm:h-8 sm:w-8">
                <Briefcase className="h-3 w-3 text-secondary sm:h-3.5 sm:w-3.5" />
              </span>

              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{item.role}</h3>
                    <p className="text-primary dark:text-secondary">{item.company}</p>
                  </div>
                  <div className="mt-1 text-sm text-muted sm:mt-0 sm:text-right">
                    <p>
                      {item.startDate} – {item.endDate}
                    </p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.slice(0, 48)} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
