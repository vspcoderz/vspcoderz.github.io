"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      
    </>
  );
};

export default Home;
