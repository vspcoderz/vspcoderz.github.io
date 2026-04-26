import React from "react";

export default function Hero() {
  return (
    <section className="w-full h-screen  grid grid-cols-2">
      <div className="flex items-end justify-start p-8 pb-12">
        <div className=" flex flex-col w-lg gap-4">
          <span className="text-6xl font-semibold w-full">
            Hello, I am Vspcoderz
          </span>
          <span className="font-manrope">
            I'm Vspcoderz, a 17-year-old full-stack developer passionate about
            building modern web applications, creating games, and integrating AI
            into real-world software solutions.
          </span>
        </div>
      </div>
      <div className="flex items-end justify-end"></div>
    </section>
  );
}
