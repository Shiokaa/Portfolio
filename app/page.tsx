"use client";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center gap-36 lg:gap-66 py-14 lg:py-50">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
