import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const HeroSection = () => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-24 left-1/4 w-1/2 h-96 flex items-center justify-center z-0">
          <TextHoverEffect text="Hello!" />
        </div>

        <div className="relative z-10  flex flex-col gap-2 items-center">
          <h1 className="text-8xl font-space-mono">Hi I am Vspcoderz.</h1>
          <span className="text-8xl font-space-grotesk">Coder. Minecraft</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
