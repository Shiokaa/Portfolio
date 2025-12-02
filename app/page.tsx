"use client";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center gap-36 lg:gap-66 py-24 lg:py-65 flex-1">
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
