import { FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Skills = [
  { title: "Python", icon: FaPython },
  { title: "Golang", icon: FaGolang },
  { title: "Next.js", icon: RiNextjsFill },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "PostgreSQL", icon: BiLogoPostgresql },
  { title: "MySQL", icon: TbBrandMysql },
  { title: "Docker", icon: FaDocker },
  { title: "GitHub", icon: FaGithub },
];

const AboutText = [
  "Je m'appelle Tom AMARU et je suis étudiant en 2ème année de Bachelor Informatique à Ynov Campus Aix-en-Provence.",
  "Curieux et rigoureux, je conçois le développement comme un travail d'équipe où la communication est aussi importante que le code. Mon profil polyvalent me permet de travailler en totale autonomie tout en m'intégrant facilement à des environnements existants.",
  "Je suis actuellement à la recherche d'un stage de 2 mois (disponible de juin à août) pour valider mon année, ainsi que d'une alternance pour la rentrée de septembre (Bac+3).",
];

export default function About() {
  return (
    <section className="about w-full h-full flex flex-col items-center justify-center">
      <div className="container mx-auto h-full w-[95%] lg:w-[75%] flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-16  py-10 px-10 rounded-3xl bg-black/20 shadow-black shadow-[0_0_60px_15px_rgba(0,0,0,0.3)]">
        <h2 className="border-l-4 border-teal-500 px-2">À propos de moi</h2>
        <div className="w-full lg:w-[80%] flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-10">
          {AboutText.map((text) => (
            <p className="text-center">{text}</p>
          ))}
        </div>
        <h2 className="border-l-4 border-teal-500 px-2">Compétences</h2>
        <IconContext.Provider value={{ color: "white" }}>
          <ul className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-4">
            {Skills.map((Skill) => (
              <li
                key={Skill.title}
                className="p-2 rounded-xl bg-teal-500/20 hover:scale-110 transition-all ease-out duration-300"
              >
                <Skill.icon
                  title={Skill.title}
                  className="text-4xl md:text-6xl lg:text-7xl"
                />
              </li>
            ))}
          </ul>
        </IconContext.Provider>
      </div>
    </section>
  );
}
