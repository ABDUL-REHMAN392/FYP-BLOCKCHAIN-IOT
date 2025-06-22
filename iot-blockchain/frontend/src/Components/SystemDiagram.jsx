import React from "react";
import systemDiagram from "../assets/images/SystemDiagram.png";

const SystemDiagram = () => {
  return (
    <section
      id="system-diagram"
      className="bg-black pt-8 pb-4 md:pt-12 md:pb-6 px-4 md:px-16 md:min-h-screen"
    >
      {/* Heading + Description */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl font-bold text-[#5479f7] mb-4">
          System Architecture
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          The diagram below illustrates the complete flow of data, control, and
          smart contract interaction between devices, frontend, Python scripts,
          and the blockchain.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={systemDiagram}
          alt="System Diagram"
          className="max-w-full h-auto border border-gray-700 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default SystemDiagram;
