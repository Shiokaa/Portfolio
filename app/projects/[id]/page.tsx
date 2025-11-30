import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectIdPage from "@/components/projects/ProjectIdPage";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <>
      <Header />
      <main className="flex-1 w-full h-full py-8">
        <ProjectIdPage id={Number(id)} />
      </main>
      <Footer />
    </>
  );
}
