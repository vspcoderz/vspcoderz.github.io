import Image from "next/image";
import React from "react";

const skillsData = [
  { name: "HTML", src: "/skills/html.svg", rating: 5 },
  { name: "CSS", src: "/skills/css.svg", rating: 5 },
  { name: "Javascript", src: "/skills/js.svg", rating: 4.5 },
  { name: "Typescript", src: "/skills/ts.svg", rating: 4.5 },
  { name: "Node.js", src: "/skills/nodejs.svg", rating: 3.5 },
  { name: "React.js", src: "/skills/react.svg", rating: 4.5 },
  { name: "Next.js", src: "/skills/nextjs.svg", rating: 5 },
  { name: "PHP", src: "/skills/php.svg", rating: 2.5 },
  { name: "Python", src: "/skills/python.svg", rating: 2 },
  { name: "Java", src: "/skills/java.svg", rating: 4 },
  { name: "Bash", src: "/skills/bash.svg", rating: 5 },
];

const toolsData = [
  { alt: "Windows 10", src: "/skills/windows.svg" },
  { alt: "I use Arch btw", src: "/skills/arch-linux.svg" },
  { alt: "Black And White Penguin", src: "/skills/linux.svg" },
  { alt: "Intellij Idea", src: "/skills/intellij-idea.svg" },
  { alt: "Figma", src: "/skills/figma.svg" },
  { alt: "Canva", src: "/skills/canva.svg" },
  { alt: "Bootstrap", src: "/skills/bootstrap.svg" },
];

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, i) => {
        if (i < fullStars) {
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.375-2.455a1 1 0 00-1.175 0l-3.375 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          );
        } else if (i === fullStars && halfStar) {
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id="half-grad">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half-grad)"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.375-2.455a1 1 0 00-1.175 0l-3.375 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.974z"
              />
            </svg>
          );
        } else {
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118l-3.375-2.455a1 1 0 00-1.175 0l-3.375 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.974z"
              />
            </svg>
          );
        }
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="w-full px-4 md:px-16 py-8 bg-neutral-900 text-white">


      <div>
        <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl uppercase px-6 py-12">
          My Skills
        </h2>
      </div>

      <main className="mx-4 py-5 px-4 gap-6 bg-zinc-900 rounded-lg shadow-md w-full flex flex-col items-center">
        <div className="flex flex-col justify-center items-center py-4 w-full">
          <span className="font-space-mono font-semibold text-2xl pb-2 mb-4 border-b border-zinc-400">
            Languages I Use
          </span>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
            {skillsData.map(({ name, src, rating }) => (
              <div key={name} className="perspective flip-card cursor-pointer min-w-36">
                <div className="flip-inner">
                  <div className="flip-front">
                    <Image src={src} height={32} width={32} alt={name} />
                    <span className="mt-1 text-base">{name}</span>
                  </div>
                  <div className="flip-back">
                    <Stars rating={rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-4 w-full">
          <span className="font-space-mono font-semibold text-2xl pb-2 mb-4 border-b border-zinc-400">
            Tools I Use
          </span>
          <div className="flex flex-row gap-4 justify-center items-center flex-wrap max-w-3xl">
            {toolsData.map(({ alt, src }) => (
              <div
                key={alt}
                className="bg-neutral-900 border border-neutral-600 px-3 py-5 rounded-md text-center flex items-center justify-center font-space-grotesk gap-2"
              >
                <Image src={src} height={32} width={32} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
