"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full">
      <nav
        className={`h-16 w-full fixed top-0 left-0 z-50 py-10 flex items-center justify-around transition-all ease-out duration-300 ${
          isOpen ? "bg-black" : ""
        }`}
      >
        <a href="">
          <Logo />
        </a>
        <button
          onClick={handleClick}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
            }`}
          ></span>
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block h-0.5 w-6 rounded-sm transition-all ease-out duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
            }`}
          ></span>
        </button>
        <ul
          className={`fixed top-20 left-0 z-50 w-full flex justify-center items-center flex-col gap-6 transition-all ease-out duration-300 overflow-hidden lg:hidden ${
            isOpen ? "h-48 bg-black" : "h-0"
          }`}
        >
          <li>
            <Link href="" className="flex items-center gap-2 ">
              <img src="svg/home.svg" alt="home" /> Accueil
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center gap-2">
              <img src="svg/about.svg" alt="about" /> À propos
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center gap-2">
              <img src="svg/project.svg" alt="projects" /> Projets
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center gap-2">
              <img src="svg/resume.svg" alt="resume" />
              CV
            </Link>
          </li>
        </ul>

        <ul className="hidden lg:flex gap-18 items-center justify-center">
          <li>
            <Link
              href=""
              className="flex items-center gap-2 group relative w-max"
            >
              <img src="svg/home.svg" alt="home" /> Accueil
              <span className="bg-teal-500 h-1 w-0 rounded-full absolute -bottom-1.5 left-0 group-hover:w-full transition-all ease-out duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 group relative w-max"
            >
              <img src="svg/about.svg" alt="about" /> À propos
              <span className="bg-teal-500 h-1 w-0 rounded-full absolute -bottom-1.5 left-0 group-hover:w-full transition-all ease-out duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 group relative w-max"
            >
              <img src="svg/project.svg" alt="projects" /> Projets
              <span className="bg-teal-500 h-1 w-0 rounded-full absolute -bottom-1.5 left-0 group-hover:w-full transition-all ease-out duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-2 group relative w-max"
            >
              <img src="svg/resume.svg" alt="resume" /> CV
              <span className="bg-teal-500 h-1 w-0 rounded-full absolute -bottom-1.5 left-0 group-hover:w-full transition-all ease-out duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
