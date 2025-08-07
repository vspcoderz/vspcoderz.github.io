import Image from "next/image";
import React from "react";
import ThaYT from "@/components/ThaYT";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-4 flex justify-center items-center ">
      <main className="bg-zinc-950/80 rounded-full shadow-lg py-3 justify-around w-6xl flex flex-row gap-5 items-center ">
        <div>
          <span className="rounded-2xl  px-4 font-space-mono font-bold text-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Hero Logo"
              width={72}
              height={72}
              className="h-14 w-14 object-cover rounded-2xl mr-2"
            />
            Vspcoderz
          </span>
        </div>
        <div className="flex flex-row gap-3 justify-around">
            <ThaYT name="Projects" href="/projects" arrow={false} className="mr-2"    />
            <ThaYT name="Skill" href="/skills" arrow={false}  className="mr-2"    />
            <ThaYT name="About Me" href="/about" arrow={false}  className="mr-2"    />
            <ThaYT name="Contact Me" href="/contact" arrow={true} className="mr-2"    />
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
