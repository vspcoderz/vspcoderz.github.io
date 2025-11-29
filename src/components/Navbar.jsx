"use client";

import Image from "next/image";
import React from "react";
import NavLink from "@/components/NavLink";



const Navbar = () => {
  return (
      <nav className="sticky top-0 max-h-18 w-full flex gpa-4 justify-between font-space-grotesk p-4 ">
        <div className="flex gap-4 items-center">
          <h1 className="font-space-mono text-2xl uppercase font-bold ml-4">Zenodev</h1>
        </div>
        <div className="flex gap-4 items-center">
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#projects">My Projects </NavLink>
          <NavLink href="#clients">Testomials</NavLink>
          <NavLink href="myass" >Contact Me</NavLink>

        </div>
      </nav>
  );
};

export default Navbar;
