import React from "react";
import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link href={props.href}>
      <button
        type="button"
        className="group relative inline-flex items-center text-white font-normal text-lg font-space-mono uppercase cursor-pointer border-0 bg-transparent py-6 px-4 text-2xl font-semibold w-[200px] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] focus:outline-none hover:text-black active:opacity-20 overflow-hidden"
      >
        <span className="absolute inset-0 bg-white -z-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"></span>

        <span className="relative z-10 font-space-grotesk text-sm">
          {props.children}
        </span>

        {props.arrow && (
          <span className="ml-2.5 relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-[0.9em] h-[1em] fill-current text-neutral-500 transition-transform duration-500 ease-out -rotate-[45deg] group-hover:rotate-0 group-hover:text-black"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </span>
        )}
      </button>
    </Link>
  );
};

export default NavLink;
