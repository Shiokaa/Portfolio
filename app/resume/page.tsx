import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResumePage from "@/components/resume/ResumePage";

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
