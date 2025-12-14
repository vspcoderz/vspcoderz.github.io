import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
