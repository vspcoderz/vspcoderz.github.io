"use client";

import React from "react";
import NavLink from "@/components/NavLink";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen w-72 flex flex-col bg-neutral-950 border-r border-neutral-800 z-40 selection:bg-white selection:text-black">
      <div className="px-8 pt-10 pb-8 ">
        <div className="flex items-center justify-center flex-col gap-4 my-2 ">

            {/* <img alt="User Avatar" className="rounded-full mr-3 size-32 bg-slate-600 rounded-lg border-zinc-800 border" src="/terminal.gif" /> */}
        </div>
        <h1 className="font-space-mono text-2xl font-bold text-white flex items-center tracking-tight">

          <span className="text-neutral-600 mr-3 select-none">./</span>
          {/* 40,31 */}
            <img alt="User Avatar" className="rounded-full mr-3 size-6" src={`https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/${Math.floor(Math.random() * 100)}.jpg`} />
          Zenodev
          <div className="ml-2 w-3 h-6 bg-white animate-terminal-blink" />
        </h1>
        <p className="text-left font-space-mono text-xs text-neutral-500 mt-2 pl-8 border-l border-neutral-800">
          Full Stack Developer
        </p>
      </div>

      <nav className="flex flex-col flex-1 px-6 gap-2 overflow-y-auto">
        <div className="px-2 mb-2">
          <span className="font-space-mono text-[10px] uppercase tracking-widest text-neutral-500">
            Directory
          </span>
        </div>
        
        <NavLink href="#about" arrow>About Me</NavLink>
        <NavLink href="#projects" arrow>Projects</NavLink>
        <NavLink href="#skills" arrow>Skills</NavLink>
        <NavLink href="#contact" arrow>Contact</NavLink>
      </nav>

      <div className="p-8 mt-auto border-t border-neutral-800 bg-neutral-950">
        <div className="flex items-center justify-between font-space-mono text-[10px] uppercase tracking-wider text-neutral-500">
          <span className="text-green-400">Status: Online</span>
          <span>v2.0.25</span>
        </div>
        <p className="font-space-mono text-xs text-neutral-600 mt-2">
          Dream It, Deisgn It, Build It.
        </p>
      </div>

      <style jsx global>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-terminal-blink {
          animation: terminal-blink 1s step-end infinite;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
