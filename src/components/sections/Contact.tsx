import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-primary/[0.04] py-20 dark:bg-primary/10 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to data science, ML platform, and AI enablement conversations—especially in healthcare and cross-functional product settings."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={`mailto:${profile.email}`}
            className="group flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-colors hover:border-secondary/50"
          >
            <Mail className="mb-3 h-6 w-6 text-secondary" />
            <span className="text-sm font-semibold text-text">Email</span>
            <span className="mt-1 break-all text-xs text-muted group-hover:text-primary dark:group-hover:text-secondary">
              {profile.email}
            </span>
          </Link>

          {profile.social.linkedin && (
            <Link
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-colors hover:border-secondary/50"
            >
              <Linkedin className="mb-3 h-6 w-6 text-secondary" />
              <span className="text-sm font-semibold text-text">LinkedIn</span>
              <span className="mt-1 text-xs text-muted group-hover:text-primary dark:group-hover:text-secondary">
                /in/cyndisabido
              </span>
            </Link>
          )}

          <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
            <Phone className="mb-3 h-6 w-6 text-secondary" />
            <span className="text-sm font-semibold text-text">Phone</span>
            <span className="mt-1 text-xs text-muted">{profile.phone}</span>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
            <MapPin className="mb-3 h-6 w-6 text-secondary" />
            <span className="text-sm font-semibold text-text">Location</span>
            <span className="mt-1 text-xs text-muted">{profile.location}</span>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          Prefer a PDF?{" "}
          <Link
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline dark:text-secondary"
          >
            Download my resume
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
