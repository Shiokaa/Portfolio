"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const ResumePage = dynamic(() => import("@/components/resume/ResumePage"), {
  ssr: false,
});

export default function Resume() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ResumePage />
      </main>
      <Footer />
    </>
  );
}
