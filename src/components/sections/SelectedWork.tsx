"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary dark:bg-secondary/15 dark:text-secondary">
          {project.category}
        </span>
      </div>

      <dl className="flex flex-1 flex-col gap-4 text-sm">
        <div>
          <dt className="mb-1 font-semibold text-text">Business problem</dt>
          <dd className="leading-relaxed text-muted">{project.businessProblem}</dd>
        </div>
        <div>
          <dt className="mb-1 font-semibold text-text">What I built</dt>
          <dd className="leading-relaxed text-muted">{project.built}</dd>
        </div>
        <div>
          <dt className="mb-1 font-semibold text-text">Impact</dt>
          <dd className="leading-relaxed text-muted">{project.impact}</dd>
        </div>
        <div>
          <dt className="mb-2 font-semibold text-text">Tools</dt>
          <dd className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="mb-2 font-semibold text-text">Key skills</dt>
          <dd className="flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-secondary"
              >
                {skill}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </motion.article>
  );
}

export function SelectedWork() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.category === active),
    [active],
  );

  const filters: Array<ProjectCategory | "All"> = ["All", ...projectCategories];

  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Platform, ML, AI enablement, and analytics projects drawn from healthcare and pharmacy operations."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === category
                  ? "bg-primary text-white dark:bg-secondary dark:text-primary"
                  : "border border-border bg-surface text-muted hover:border-secondary/40 hover:text-text",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
