"use client";

import Image from "next/image";
import React from "react";
import ThaYT from "@/components/ThaYT";

const navLinks = [
  { name: "Projects", href: "/projects", arrow: false },
  { name: "Skills", href: "/skills", arrow: false },
  { name: "About", href: "/about", arrow: false },
  { name: "Contact", href: "/contact", arrow: true },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full top-4 flex justify-center items-center z-50 px-4">
      <main className="bg-zinc-950/80 rounded-full shadow-lg py-3 flex items-center justify-between w-full max-w-6xl px-5">
        <div className="w-full flex justify-center md:justify-start">
          <span className="rounded-2xl px-4 font-space-mono font-bold text-lg flex items-center">
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

        {/* Navigation Links - visible only on md and larger */}
        <div className="hidden md:flex flex-row gap-3 justify-around items-center">
          {navLinks.map(({ name, href, arrow }) => (
            <ThaYT
              key={name}
              name={name}
              href={href}
              arrow={arrow}
              className="mr-3"
            />
          ))}
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
