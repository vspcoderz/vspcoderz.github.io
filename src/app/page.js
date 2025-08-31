import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
