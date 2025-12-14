import Image from "next/image";
import React from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";
import LinkButton from "./LinkButton";

const HeroSection = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col bg-neutral-950">
        <div className="bg-white text-neutral-800 h-18 w-full font-space-mono uppercase font-bold text-4xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-2 shadow-lg">
          //:Portfolio
        </div>

        <div className="h-2 bg-gradient-to-r from-white via-gray-300 to-transparent w-full"></div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-2 sm:px-4 py-6 sm:py-12 gap-4">
          <span className="font-anton text-white text-4xl font-bold">👋 Hello World,</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
