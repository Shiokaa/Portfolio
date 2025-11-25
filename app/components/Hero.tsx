"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen py-16 lg:px-20">
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full h-1/2 flex flex-col items-center justify-center lg:h-full">
          <div className="flex gap-4 flex-col items-center lg:items-start lg:min-w-[550px]">
            <h2>
              Salut <span className="font-[Dancing_Script]">! 👋</span>
            </h2>
            <p>
              Je suis <span className="text-teal-500">AMARU TOM</span>
            </p>
            <br />
            <div className="text-3xl">
              <Typewriter
                options={{
                  strings: [
                    "Étudiant à Ynov Aix Campus",
                    "Développeur Junior",
                    "Toujours prêt à apprendre",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center relative lg:h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full animate-flashing lg:w-[330px] lg:h-[350px]"></div>
          <Image
            src="/images/hero.jpg"
            alt="hero"
            width={250}
            height={250}
            className="rounded-2xl relative z-10 lg:w-[300px] lg:h-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
