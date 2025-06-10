import React, { useState, useEffect } from "react";
import FloatingDock from "../components/FloatingDock";
import NameAndGrid from "../components/NameAndGrid";
import Card from "../components/Card";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../Constant/ProjectsData.json";

const HomePage = () => {
  const [openState, setOpenState] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const handleOverlayClick = () => {
    if (selectedCard !== null) {
      setSelectedCard(null);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden fixed">
      <div
        style={{
          maskImage:
            "radial-gradient(circle at center, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 55%, transparent 100%)",
        }}
        className="h-[100vh] w-[100vw] overflow-hidden "
      >
        <NameAndGrid openState={openState} />
      </div>
      <AnimatePresence mode="wait">
        {openState === "projects" && (
          <motion.div
            className="w-screen h-screen absolute bg-black/20"
            onClick={handleOverlayClick}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <div
              onClick={() => setOpenState("")}
              className="w-12 h-12 absolute bg-zinc-800 right-10 top-10 flex items-center justify-center rounded-full cursor-pointer"
            >
              <IconX className="text-[4rem] text-white" />
            </div>
            <div className="w-[18rem] mx-auto sm:w-full h-full">
              <AnimatePresence>
                {projectsData.map((project, index) => (
                  <Card
                    key={`card-${index}`}
                    projectData={project}
                    index={index}
                    totalCards={projectsData.length}
                    isSelected={selectedCard === index}
                    onSelect={() => setSelectedCard(index)}
                    setOpenState={setOpenState}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
        {openState === "experience" && (
          <motion.div
            className="w-screen h-screen absolute bg-black/20 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div
              onClick={() => setOpenState("")}
              className="w-12 h-12 absolute bg-zinc-800 right-10 top-10 flex items-center justify-center rounded-full cursor-pointer"
            >
              <IconX className="text-[4rem] text-white" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="bg-zinc-900/90 rounded-2xl p-10 max-w-xl w-full mx-4 shadow-2xl text-white">
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
                <div className="mb-2">
                  <span className="font-semibold">Backend Developer Intern</span> <br/>
                  <span>Smartcard Ai</span> <br/>
                  <span className="text-zinc-400">February 2025 - April 2025</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 mt-2 text-zinc-200">
                  <li>Developed and integrated LLM-based APIs using Flask and Python to enable AI-powered functionalities.</li>
                  <li>Optimized Electron.js frontend performance and streamlined API integration for smoother user interactions.</li>
                  <li>Conducted API testing and debugging using Postman, ensuring reliability and performance.</li>
                  <li>Processed structured/unstructured datasets for LLM queries to enhance model accuracy and response quality.</li>
                  <li>Collaborated with frontend developers to ensure seamless backend integration and feature delivery.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingDock openState={openState} setOpenState={setOpenState} />
    </div>
  );
};

export default HomePage;
