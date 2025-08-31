import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full px-4 md:px-16 py-8">
      <div>
        <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl uppercase p-4">
          About Me
        </h2>
      </div>
      <main className="bg-zinc-900 rounded-md min-h-[400px] md:min-h-[592px] border border-neutral-700 p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-2 justify-between">
        <div className="p-4 bg-zinc-800 rounded-md w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://placehold.co/512x512"
            alt="Placeholder Image"
            className="rounded-md shadow-md max-w-full h-auto object-cover"
          />
        </div>
        <div className="p-4 bg-zinc-800 rounded-md w-full md:w-1/2 flex flex-col justify-between">
          <main className="py-4 font-space-mono">
            <h2 className="font-semibold text-xl md:text-2xl">
              Hi!, I am Vedant Pakwane
            </h2>
            <span className="text-white/40 text-sm md:text-md">
              (Vspcoderz)
            </span>
            <p className="text-xs md:text-sm py-4 px-1 md:px-2 leading-relaxed">
              I’m a friendly, curious developer who likes coding, playing games,
              building projects, and chatting with friends. I enjoy learning new
              things and trying out new tech. I found Discord and Minecraft in
              2023, which got me into tech. In 2024, I started coding. At first,
              I used AI to help me experiment, but then I began learning from
              YouTube and other resources. Now I’m a full‑stack learner focused
              on Java, DSA, and Minecraft modding (I love Minecraft). I use AI
              as a helper—for ideas, quick prototypes, code reviews, and
              debugging—but I write the main code myself. This way, my projects
              are clear, reliable, and built by me. I like learning by doing and
              turning ideas into real projects.
            </p>
          </main>
          <div className="flex gap-2 mt-auto">
            <Link
              href="https://github.com/vspcoderz"
              className="flex-grow  w-1/2 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex w-full gap-3 flex text-center items-center justify-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </button>
            </Link>
            <Link
              href="https://discord.com"
              className="flex-grow w-1/2 items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex w-full gap-3 flex text-center items-center justify-center cursor-pointer text-white font-semibold bg-gradient-to-r from-[#5865F2] to-[#7289DA] px-7 py-3 rounded-full border border-[#5865F2] hover:scale-105 duration-200 hover:text-[#D0D8FF] hover:border-[#4752C4] hover:from-[#4752C4] hover:to-[#5865F2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
                Discord
              </button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
