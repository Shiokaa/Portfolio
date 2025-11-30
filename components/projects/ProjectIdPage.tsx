"use client";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function ProjectIdPage({ id }: { id: number }) {
  const project = projects.find((project) => project.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleLeftClick = () => {
    setCurrentImage((prev) => {
      if (prev === 0) {
        return project.images.length - 1;
      }
      return prev - 1;
    });
  };

  const handleRightClick = () => {
    setCurrentImage((prev) => {
      if (prev === project.images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h1 className="border-b-4 border-teal-500 py-2 px-3 rounded-2xl">
        {project.name}
      </h1>
      <div className="relative w-[95%] aspect-video max-h-[600px] rounded-lg overflow-hiddenshadow-lg">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${project.name} - ${index + 1}`}
            fill
            quality={90}
            priority={index === 0}
            className={`object-contain transition-all duration-700 ease-in-out absolute top-0 left-0 h-full w-full ${
              index === currentImage
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-95"
            }`}
          />
        ))}
      </div>

      {project.images.length > 1 && (
        <div className="flex items-center justify-center gap-6 py-2 pb-16">
          <button
            onClick={handleLeftClick}
            className={`w-12 h-12 flex items-center justify-center rounded-full hover:bg-teal-500/50 hover:scale-110 transition-all ease-out duration-300 cursor-pointer ${
              currentImage === 0 ? "bg-stone-950/20" : "bg-zinc-950"
            }`}
          >
            <MdKeyboardArrowLeft className="text-3xl" />
          </button>
          <div className="flex gap-2">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-teal-500 w-4" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleRightClick}
            className={`w-12 h-12 flex items-center justify-center rounded-full hover:bg-teal-500/50 hover:scale-110 transition-all ease-out duration-300 cursor-pointer ${
              currentImage === project.images.length - 1
                ? "bg-stone-950/20"
                : "bg-zinc-950"
            }`}
          >
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </div>
      )}
      <p className="text-center p-6 md:w-[80%] lg:w-[70%] rounded-3xl bg-black/20 shadow-black shadow-[0_0_60px_15px_rgba(0,0,0,0.3)]">
        {project.description}
        <br />
        <br />
        <span className="text-lg font-bold ">
          Projet réalisé en {project.year} avec{" "}
          {project.technologies.join(", ")}
        </span>
      </p>
      <div className="flex items-center justify-center gap-6 mt-2">
        <button className="bg-teal-500 rounded-full px-6 py-1 cursor-pointer hover:bg-teal-700 hover:scale-110 transition-all ease-out duration-300">
          <Link href={project.link}>
            <span className="text-lg font-bold">Voir le projet</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
