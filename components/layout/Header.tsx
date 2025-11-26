"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HomeIcon, FileUserIcon, FolderCodeIcon, UserIcon } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "", icon: HomeIcon },
  { name: "À propos", href: "", icon: UserIcon },
  { name: "Projets", href: "", icon: FolderCodeIcon },
  { name: "CV", href: "", icon: FileUserIcon },
];

type NavItemsProps = {
  mobile?: boolean;
};

function NavItems({ mobile = true }: NavItemsProps) {
  return (
    <>
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center gap-2 ${
                mobile ? "" : "group relative w-max"
              }`}
            >
              <Icon></Icon>
              {link.name}
              {!mobile && (
                <span className="bg-teal-500 h-1 w-0 rounded-full absolute -bottom-1.5 left-0 group-hover:w-full transition-all ease-out duration-300"></span>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`w-full sticky top-0 left-0 z-50 transition-all ease-out duration-300 h-16 ${
        isScrolled ? "bg-black backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="h-full w-full bg-black lg:bg-transparent py-10 flex items-center justify-around">
        {/* h1 qui fait office de logo */}
        <Link href="/">
          <h1 className="text-5xl lg:text-6xl font-[Dancing_Script] text-teal-500">
            At.
          </h1>
        </Link>

        {/* Bouton hamburger */}
        <button
          onClick={handleClick}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`burger-line ${
              isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
            }`}
          ></span>
          <span
            className={`burger-line ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`burger-line ${
              isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
            }`}
          ></span>
        </button>

        {/* Navbar mobile */}
        <ul
          className={`absolute top-19 bg-black left-0 z-50 w-full flex justify-center items-center flex-col gap-6 transition-all ease-out duration-300 overflow-hidden lg:hidden ${
            isOpen ? "h-48" : "h-0"
          }`}
        >
          <NavItems mobile={true} />
        </ul>

        {/* Navbar desktop */}
        <ul className="hidden lg:flex gap-18 items-center justify-center">
          <NavItems mobile={false} />
        </ul>
      </nav>
    </header>
  );
}
