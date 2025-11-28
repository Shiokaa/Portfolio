"use client";
import { projects } from "../../data/projects";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleLeftClick = () => {
    setCurrentProject((prev) => {
      if (prev === 0) {
        return projects.length;
      }
      return prev - 1;
    });
  };

  const handleRightClick = () => {
    setCurrentProject((prev) => {
      if (prev === projects.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section id="projects" className="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-center gap-14">
        <div className="flex items-center justify-around w-full">
          <h2 className="border-b-4 border-teal-500 py-2 px-3 rounded-2xl">
            Mes projets !
          </h2>
          <div className="flex items-center gap-6">
            <button
              onClick={handleLeftClick}
              className={`w-12 h-12 flex items-center justify-center rounded-full hover:bg-teal-500/50 hover:scale-110 transition-all ease-out duration-300 cursor-pointer ${
                currentProject === 0 ? "bg-stone-950/20" : "bg-zinc-950"
              }`}
            >
              <MdKeyboardArrowLeft className="text-3xl" />
            </button>
            <button
              onClick={handleRightClick}
              className={`w-12 h-12 flex items-center justify-center rounded-full hover:bg-teal-500/50 hover:scale-110 transition-all ease-out duration-300 cursor-pointer ${
                currentProject === projects.length - 1
                  ? "bg-stone-950/20"
                  : "bg-zinc-950"
              }`}
            >
              <MdKeyboardArrowRight className="text-3xl" />
            </button>
          </div>
        </div>
        <ul className="w-full h-full flex flex-col items-center justify-center gap-6 md:flex-row">
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className={`relative w-[350px] md:w-[100px] flex items-center justify-center overflow-hidden rounded-lg transition-all ease-out duration-600 ${
                  currentProject === project.id - 1
                    ? "h-[280px] md:w-[350px] lg:w-[500px] lg:h-[400px] "
                    : "h-[70px] md:h-[280px] lg:h-[400px]"
                }`}
                onClick={() => setCurrentProject(project.id - 1)}
                onMouseEnter={() => setCurrentProject(project.id - 1)}
                onMouseLeave={() => setCurrentProject(project.id - 1)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center blur-[3px]"
                  style={{ backgroundImage: `url(${project.images[0]})` }}
                />
                <div
                  className={
                    currentProject === project.id - 1
                      ? "absolute inset-0 bg-black/30"
                      : "absolute inset-0 bg-black/60"
                  }
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <h3
                    className={`font-bold ${
                      currentProject === project.id - 1 ? "" : "md:-rotate-90"
                    }`}
                  >
                    {project.name}
                  </h3>
                  {currentProject === project.id - 1 && (
                    <button className="bg-teal-600 rounded-full px-6 py-1">
                      <Link href={`/projects/${project.id}`}>
                        <span className="text-lg font-bold">
                          Voir le projet
                        </span>
                      </Link>
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
