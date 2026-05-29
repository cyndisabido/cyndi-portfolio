import Image from "next/image";
import { Languages, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Technical depth, product mindset"
          description="I help healthcare teams ship models, platforms, and workflows that hold up in production—not just in notebooks."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name} — professional headshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-primary dark:text-secondary">
                <Sparkles className="h-5 w-5" />
                <h3 className="font-semibold text-text">What I focus on</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted">
                <li>Feature Template Engine & LLM-powered Template Store</li>
                <li>End-to-end ML: GLP-1 utilization & opioid risk models</li>
                <li>AI enablement demos and guided workflows</li>
                <li>Healthcare analytics & operational reporting</li>
                <li>Translating between engineers and business partners</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-primary dark:text-secondary">
                <Languages className="h-5 w-5" />
                <h3 className="font-semibold text-text">Languages</h3>
              </div>
              <ul className="space-y-2">
                {profile.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium text-text">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
