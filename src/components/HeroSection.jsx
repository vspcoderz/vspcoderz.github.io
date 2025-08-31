import Image from "next/image";
import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-900 px-4 sm:px-8">
      <main className="w-full max-w-7xl flex flex-col items-center bg-neutral-900">
        <div className="w-full infinite-dashed-border" />

        <main className="w-full flex flex-col items-center justify-center pt-16 sm:pt-24 pb-12 sm:pb-16 px-2 sm:px-0 max-w-4xl mx-auto">
          <span className="rounded-2xl bg-white/10 shadow-lg p-3 flex items-center justify-center mb-6 sm:mb-8">
            <Image
              src="/logo.png"
              alt="Hero Logo"
              width={72}
              height={72}
              className="h-10 w-10 sm:h-14 sm:w-14 object-cover rounded-2xl"
            />
          </span>

          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl flex items-center justify-center font-space-mono font-extrabold uppercase tracking-tight text-white text-center">
              I am
              <div className="flex items-center justify-center ml-4 sm:ml-8">
                <Image
                  src="/terminal.gif"
                  alt="Title GIF"
                  width={56}
                  height={56}
                  className="h-10 w-10 sm:h-14 sm:w-14 object-cover mr-2 sm:mr-4 rounded-2xl"
                  priority
                />
                <span className="text-primary text-2xl sm:text-4xl">Vspcoderz.</span>
              </div>
            </h1>
          </div>

          <div className="mt-4 sm:mt-6 mb-2">
            <WordRotate
              className="text-base sm:text-xl md:text-2xl text-gray-400 tracking-wide text-center"
              duration={1300}
              words={[
                "Freelancer Developer",
                "Full-Stack Developer",
                "DSA Student",
                "Minecraft Modder",
                "Curious About Tech",
                "Hardware Administrator",
                "Software & Hardware Expert",
                "Linux Friendly",
                "Minecraft Player",
                "Minecraft Server's Developer",
              ]}
            />
          </div>

          <div className="flex gap-4 sm:gap-5 mt-8 sm:mt-10 flex-wrap justify-center">
            <Link href="/project" passHref>
              <button className="px-6 sm:px-8 py-3 bg-white text-black text-base sm:text-lg rounded-full font-semibold shadow-lg hover:bg-gray-300/90 transition w-max">
                My Work
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="px-6 sm:px-8 py-3 bg-neutral-900 text-white text-base sm:text-lg rounded-full font-semibold shadow border border-white/10 hover:bg-neutral-800 transition w-max">
                Contact
              </button>
            </Link>
          </div>
        </main>

        <div className="w-full infinite-dashed-border mt-6 sm:mt-8" />
      </main>
      <div className="w-full flex justify-center mt-12 sm:mt-16 px-4">
        <div className="h-2 w-24 sm:w-32 rounded-full bg-white/10 shadow-md" />
      </div>
    </section>
  );
};

export default HeroSection;
