import { Award, GraduationCap, Medal } from "lucide-react";
import { awards, certifications, education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background"
          title="Education & Certifications"
          description="Formal training in computer systems engineering, plus applied data science certification and early product-building experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
              <GraduationCap className="h-4 w-4" />
              Education
            </h3>
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
              >
                <p className="font-semibold text-text">{item.credential}</p>
                <p className="mt-1 text-primary dark:text-secondary">{item.institution}</p>
                <p className="mt-2 text-sm text-muted">
                  {item.period} · {item.location}
                </p>
                {item.details && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.details}</p>
                )}
              </article>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary">
              <Award className="h-4 w-4" />
              Certifications
            </h3>
            {certifications.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
              >
                <p className="font-semibold text-text">{item.name}</p>
                <p className="mt-1 text-sm text-primary dark:text-secondary">{item.issuer}</p>
                {item.details && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.details}</p>
                )}
              </article>
            ))}

            <h3 className="flex items-center gap-2 pt-2 text-sm font-semibold uppercase tracking-wider text-secondary">
              <Medal className="h-4 w-4" />
              Awards
            </h3>
            {awards.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
              >
                <p className="font-semibold text-text">{item.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.organization} · {item.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
