"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0, 0, 0.2, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/[0.06] via-background to-background pt-28 pb-20 dark:from-primary/20 sm:pt-32 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-surface px-3 py-1 text-sm font-medium text-primary dark:text-secondary"
            >
              {profile.tagline}
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              {profile.heroHeadline}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              {profile.heroSubheadline}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light dark:bg-secondary dark:text-primary dark:hover:bg-secondary/90"
              >
                View selected work
              </Link>
              <Link
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-secondary/50"
              >
                <Download className="h-4 w-4" />
                Download resume
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:text-secondary dark:text-secondary dark:hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-secondary" />
                {profile.location}
              </span>
              <span>Bilingual: English & Spanish</span>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-14 hidden sm:flex"
            >
              <Link
                href="#about"
                aria-label="Scroll to about section"
                className="inline-flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-secondary"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
                Explore
              </Link>
            </motion.div>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-lg ring-4 ring-secondary/10">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} — professional headshot`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
