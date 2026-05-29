import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-text">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-primary dark:hover:text-secondary"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </Link>
          {profile.resumePath && (
            <Link
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-secondary dark:text-secondary dark:hover:text-primary"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted sm:px-6 lg:px-8">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
