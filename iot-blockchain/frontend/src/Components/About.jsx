import React from "react";
import AboutImg from '../assets/images/AboutImg.jpeg';
const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto p-6 gap-8 md:mt-10">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={AboutImg}
          alt="IoT device management"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-[#5479f7]">
          About This Project
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          This project demonstrates a secure and decentralized IoT device management system powered by Blockchain and integrated with real-time dashboards using Node-RED.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Traditional IoT systems rely on centralized servers, which can be vulnerable to attacks and lack transparency. This project aims to solve these issues by using smart contracts on Ethereum to control access, data, and devices without a central authority.
        </p>
      </div>
    </div>
  );
};

export default About;
