"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrolling = ({ children }) => {
  const lenis = useRef();

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1, // smoothness
      duration: 1.5, // duration of scroll
      smoothTouch: true, // smooth on touch devices
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrolling;
