import React from "react";
import Grid from "./partials/Grid";
import { motion } from "framer-motion";
import skills from "../Constant/Skills.json";

function NameAndGrid({ openState }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen w-screen font-borney"
      initial={{
        y: 0,
        skewX: -48,
        skewY: 15,
      }}
      animate={{
        y: openState === "about me" ? "-105%" : 0,
        skewX: openState === "about me" ? 0 : -48,
        skewY: openState === "about me" ? 0 : 15,
      }}
      exit={{
        y: openState === "about me" ? "-105%" : 0,
        skewX: openState === "about me" ? 0 : -48,
        skewY: openState === "about me" ? 0 : 15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.45, 0, 0.55, 1],
      }}
    >
      <Grid openState={openState} />
      <div
        id="text"
        className="absolute inset-0 -translate-x-[10%] sm:translate-x-[2%] translate-y-[-5%] flex flex-col items-center justify-center text-white text-center"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[50vw] h-[25vw] rounded-full bg-black z-[0] blur-[20rem]" />
        <h1 className="relative text-[20vw] md:text-[16vw] z-[9] text-shadow-glow">
          Aditya
        </h1>
        <h2 className="relative text-[3.5vw] sm:text-[3.5vw] md:text-[2.5vw] tracking-[0.6rem] z-[9] ml-9 opacity-70 -mt-10 md:-mt-12">
          Software Engineer
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-[200vh] sm:mt-[175vh] relative"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-[75%] -translate-y-[50%] w-[55vw] h-[55vw] rounded-full bg-black z-[0] blur-[100rem]" />
        <div className="black-scrollbar relative grid grid-cols-2 sm:grid-cols-3 gap-6 text-left w-[90%] h-[60vh] sm:w-full sm:h-[60vh] mt-[20vh] p-5 overflow-y-scroll overflow-x-hidden">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-xl"
            >
              <h3 className="text-2xl text-white font-bold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <li key={skill} className="text-zinc-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg sm:text-xl text-white">
                  Bachelor of Engineering in Artificial Intelligence & Data Science
                </p>
                <p className="text-zinc-400 font-['kollektif']! font-bold">
                  Dr. D. Y. Patil Institute of Technology
                </p>
                <p className="text-zinc-500 font-['kollektif']!">2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NameAndGrid;
