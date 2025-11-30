"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [Status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const ServiceID = "service_743r60i";
    const TemplateID = "template_ljedppl";
    const PublicKey = "fH-oPfJIEKrQjkqNW";

    emailjs
      .sendForm(ServiceID, TemplateID, form.current, {
        publicKey: PublicKey,
      })
      .then(() => {
        setStatus("Success");
      })
      .catch(() => {
        setStatus("Error");
      });
    form.current.reset();
  };

  return (
    <section id="contact" className="w-full h-full scroll-mt-24">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="w-[95%] h-full flex flex-col items-center justify-center gap-12">
          <h2 className="border-b-4 border-teal-500 py-2 px-3 rounded-2xl">
            Contactez moi !
          </h2>
          <p className="text-center">
            Vous avez un projet ou une question ? N'hésitez pas à me contacter !
          </p>
          <div className="info-contact flex flex-wrap items-center justify-center gap-6">
            <div className="info-item flex flex-col items-center justify-center gap-2">
              <strong className="text-teal-500">Email :</strong>
              <Link href="mailto:tom.amaru09@gmail.com">
                <span className="text-white text-base">
                  tom.amaru09@gmail.com
                </span>
              </Link>
            </div>
            <div className="info-item flex flex-col items-center justify-center gap-2">
              <strong className="text-teal-500">Téléphone :</strong>
              <Link href="tel:+33616587743">
                <span className="text-white text-base">+33 6 16 58 77 43</span>
              </Link>
            </div>
            <div className="info-item flex flex-col items-center justify-center gap-2">
              <strong className="text-teal-500">Localisation :</strong>
              <span className="text-white text-base">
                Aix-en-Provence, France
              </span>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[90%] md:w-[60%] lg:w-[40%] h-full flex flex-col gap-5"
        >
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded-xl bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Nom"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded-xl bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full p-2 rounded-xl bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 rounded-xl px-6 py-2 cursor-pointer hover:bg-teal-700 transition-all ease-out duration-300"
          >
            Envoyer
          </button>
          {Status === "Success" && (
            <p className="text-center text-teal-500">Message envoyé !</p>
          )}
          {Status === "Error" && (
            <p className="text-center text-red-500">Une erreur est survenue</p>
          )}
        </form>
      </div>
    </section>
  );
}
