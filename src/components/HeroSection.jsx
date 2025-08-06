import Image from "next/image";
import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="w-full h-screen bg-neutral-900">
        <section className="min-h-screen w-full flex items-center bg-neutral-900">
          <main className="w-full flex flex-col items-center justify-center pt-24 pb-16 border-y-2 border-dashed border-gray-600 ">
            {/* Accent Graphic */}
            <span className="rounded-2xl bg-white/10 shadow-lg p-3 flex items-center justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Hero Logo"
                width={72}
                height={72}
                className="h-14 w-14 object-cover rounded-2xl"
                priority
              />
            </span>
            {/* Bold Headline */}
            <div className="flex flex-col items-center gap-2 ">
              <h1 className="text-5xl flex items-center justify-center sm:text-7xl font-space-mono font-extrabold uppercase tracking-tight text-white text-center">
                I am
                <div className="flex items-center justify-center ml-8">
                  <Image
                    src="/terminal.gif"
                    alt="Title GIF"
                    width={72}
                    height={72}
                    className="h-14 w-14 object-cover mr-4 rounded-2xl"
                    priority
                  />
                  <span className="text-primary"> Vspcoderz.</span>
                </div>
              </h1>
            </div>
            {/* Subtitle / Role */}
            <div className="mt-6 mb-2">
              <WordRotate
                className="text-lg sm:text-2xl text-gray-400 tracking-wide text-center"
                duration={1300}
                words={[
                  "Full-Stack Devloper",
                  "DSA Student",
                  "Minecraft Modder",
                  "Curious About Tech",
                ]}
              />
            </div>
            {/* Buttons */}
            <div className="flex gap-5 mt-10 flex-wrap justify-center">
              <button className="px-8 py-3 bg-white text-black text-lg rounded-full font-semibold shadow-lg hover:bg-gray-300/90 transition">
                <Link href="/project">My Work</Link>
              </button>
              <button className="px-8 py-3 bg-neutral-900 text-white text-lg rounded-full font-semibold shadow border border-white/10 hover:bg-neutral-800 transition">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </main>
          {/* Modern Bottom Divider */}
          <div className="w-full flex justify-center mt-16 absolute bottom-12 left-0">
            <div className="h-2 w-32 rounded-full bg-white/10 shadow-md" />
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
