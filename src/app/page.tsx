import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { EducationSection } from "@/components/sections/EducationSection";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <Skills />
      <EducationSection />
      <Contact />
    </>
  );
}
