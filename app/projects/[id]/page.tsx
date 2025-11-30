import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectIdPage from "@/components/projects/ProjectIdPage";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
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
