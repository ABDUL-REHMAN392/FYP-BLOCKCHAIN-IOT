import React from "react";
import { motion } from "framer-motion";
import {
  framerMotion,
  ganache,
  java,
  metamask,
  node,
  python,
  reactjs,
  routerLogo,
  tailwind,
} from "../assets/images";

const logos = [
  framerMotion,
  ganache,
  metamask,
  java,
  node,
  python,
  routerLogo,
  reactjs,
  tailwind,
];

const ToolsSlider = () => (
  <section className="pt-4 pb-8 overflow-hidden bg-black">
    <motion.div
      className="flex gap-12"
      style={{ whiteSpace: "nowrap" }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...logos, ...logos].map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`logo-${idx}`}
          className="h-16 mx-6 grayscale hover:grayscale-0 transition"
        />
      ))}
    </motion.div>
  </section>
);

export default ToolsSlider;
