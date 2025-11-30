"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-24 bg-zinc-950">
      <div className="w-full h-full flex items-center justify-between px-14 md:px-20 lg:px-28">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-teal-500">AMARU Tom</span>
        </p>
        <IconContext.Provider value={{ color: "white" }}>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://github.com/Shiokaa">
              <FaGithub className="text-2xl md:text-3xl lg:text-4xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/tom-amaru-0875a4389/">
              <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
