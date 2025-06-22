import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import Work from "../Components/Work";
import SystemDiagram from "../Components/SystemDiagram";
import ToolsSlider from "../Components/ToolsSlider";
import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQSection from "../Components/FAQSection";

function Home() {
  return (
    <div className="bg-[#060010]">
      <HeroSection />
      <Features />
      <Work />
      <SystemDiagram />
      <ToolsSlider />
      <FAQSection />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
