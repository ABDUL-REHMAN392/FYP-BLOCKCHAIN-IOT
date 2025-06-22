import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 px-6 md:px-20 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Project Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">DecentraSense</h3>
          <p className="text-sm leading-relaxed">
            A decentralized platform that combines IoT with blockchain to enable secure device control,
            real-time monitoring, and transparent data logging via smart contracts.
          </p>
        </div>

        {/* Middle - Navigation */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#features" className="hover:text-white transition">Key Features</a></li>
            <li><a href="#system-diagram" className="hover:text-white transition">System Diagram</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#add-device" className="hover:text-white transition">Add Device</a></li>
          </ul>
        </div>

        {/* Right - Contact & Social */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Connect with Us</h4>
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/ABDUL-REHMAN392/FYP-BLOCKCHAIN-IOT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-4 text-sm">Email: <a href="mailto:your-email@example.com" className="hover:text-white">your-email@example.com</a></p>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DecentraSense — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
