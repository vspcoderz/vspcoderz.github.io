import React from "react";
import Link from "next/link";

const ThaYT = (props) => {
  return (
    <Link href={props.href}>
      <button
        type="button"
        className="relative inline-flex items-center text-gray-500 font-normal text-lg font-poppins cursor-pointer border-0 bg-transparent transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] focus:outline-none hover:text-white focus:text-white group"
      >
        <span className="relative font-space-grotesk uppercase text-sm font-bold">
          {props.name}
          <span className="absolute bottom-[-7px] left-0 h-[1px] bg-white w-0 group-hover:w-full group-focus:w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"></span>
        </span>

        {props.arrow && (
          <span className="ml-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-[0.9em] h-[0.8em] fill-current text-gray-500 transition-transform duration-500 ease-out -rotate-[45deg] group-hover:rotate-0 group-hover:text-white group-focus:rotate-0 group-focus:text-white"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </span>
        )}
      </button>
    </Link>
  );
};

export default ThaYT;
