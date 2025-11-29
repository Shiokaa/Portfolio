"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero w-full flex items-center lg:px-20">
      <div className="w-full h-full flex flex-col lg:flex-row gap-50 lg:gap-0">
        <div className="w-full h-1/2 flex flex-col items-center justify-center lg:h-full">
          <div className="flex gap-4 flex-col items-center lg:items-start lg:min-w-[550px]">
            <h1>
              Salut <span className="font-[Dancing_Script]">! 👋</span>
            </h1>
            <h3>
              Je suis <span className="text-teal-500">AMARU TOM</span>
            </h3>
            <br />
            <div className="text-2xl md:text-3xl lg:text-3xl">
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
            width={600}
            height={640}
            quality={100}
            priority
            className="rounded-2xl relative z-10 w-[250px] h-[250px] lg:w-[300px] lg:h-[320px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
