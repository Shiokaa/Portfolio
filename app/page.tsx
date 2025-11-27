"use client";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center gap-50 lg:gap-80">
        <Hero />
        <About />
      </main>
    </>
  );
}
