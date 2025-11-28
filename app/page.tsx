"use client";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center gap-36 lg:gap-66">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
