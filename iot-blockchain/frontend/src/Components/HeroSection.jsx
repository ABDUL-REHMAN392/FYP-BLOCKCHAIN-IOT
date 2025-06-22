import { NavLink } from "react-router-dom";
import heroImage from "../assets/images/HeroSection.svg"; // Make sure this SVG has transparent BG

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:mt-28">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-[#5479f7]">
          Secure. Decentralized. Real-Time Monitoring.
        </h1>
        <p className="text-gray-400 text-lg">
          A secure, blockchain-powered system to manage and monitor IoT devices
          with real-time data charts.
        </p>
        <NavLink
          to="/dashboard"
          className="inline-block bg-[#5479f7] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Get Started
        </NavLink>
      </div>

      {/* Right Side - SVG Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src={heroImage}
          alt="IoT Monitoring"
          className="max-w-full h-auto"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
