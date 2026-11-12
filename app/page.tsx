import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
