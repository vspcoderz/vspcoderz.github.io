import React from "react";

export default function Navbar() {
  return (
    <section className="absolute top-0 left-0 w-full z-50">
      <nav className=" flex gap-3 items-center justify-around py-4 backdrop-blur-lg">
        <div className=" text-2xl">Vspcoderz</div>
        <div className="flex items-center justify-center gap-4">
          <span>About</span>
          <span>Skills</span>
          <span>Project</span>
          <span className="cursor-pointer border border-neutral-900 py-2 px-4 hover:bg-neutral-900 hover:text-neutral-200 transition-all duration-200">
            Idk
          </span>
        </div>
      </nav>
    </section>
  );
}
