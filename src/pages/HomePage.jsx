import React, { useState, useEffect } from "react";
import FloatingDock from "../components/FloatingDock";
import NameAndGrid from "../components/NameAndGrid";
import Card from "../components/Card";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../Constant/ProjectsData.json";

const openSourceHighlights = [
  {
    repo: "eclipse-vertx/vertx-sql-client",
    href: "https://github.com/eclipse-vertx/vertx-sql-client/pull/1692",
    summary: "fixed a PostgreSQL array bind parameter with a null element that hung the query.",
  },
  {
    repo: "keycloak/keycloak",
    href: "https://github.com/keycloak/keycloak/pull/51840",
    summary: "password policies are now evaluated in the configured order.",
  },
  {
    repo: "DependencyTrack/dependency-track",
    href: "https://github.com/DependencyTrack/dependency-track/pull/7262",
    summary: "resolved the project parent first in updateProject to stop a database constraint violation.",
  },
  {
    repo: "ClickHouse/clickhouse-kafka-connect",
    href: "https://github.com/ClickHouse/clickhouse-kafka-connect/pull/835",
    summary: "stopped the buffered sink duplicating records after a retriable insert failure.",
  },
  {
    repo: "alibaba/fastjson2",
    href: "https://github.com/alibaba/fastjson2/pull/7836",
    summary: "fixed an ArrayIndexOutOfBoundsException in field-name decoding.",
  },
];

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
              <div className="bg-zinc-900/90 rounded-2xl p-10 max-w-xl w-full mx-4 shadow-2xl text-white max-h-[85vh] overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4">Experience</h2>
                <div className="mb-2">
                  <span className="font-semibold">AWS Intern</span> <br/>
                  <span>Cognizant</span> <br/>
                  <span className="text-zinc-400">March 2026 - June 2026 | Kochi, Kerala, India</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 mt-2 text-zinc-200">
                  <li>Built an AWS ETL pipeline using Amazon Redshift and DynamoDB, reducing data processing time by 30%.</li>
                  <li>Processed and validated 50K+ records using Python, SQL, and PySpark.</li>
                  <li>Completed 10+ AWS labs covering EC2, S3, IAM, networking, and cloud security.</li>
                  <li>Applied Git, GitHub Copilot, SDLC, and Agile practices, improving development efficiency by 20%.</li>
                </ul>

                <div className="border-t border-zinc-700 my-6"></div>

                <div className="mb-2">
                  <span className="font-semibold">Backend Developer Intern</span> <br/>
                  <span>Smartcard Ai</span> <br/>
                  <span className="text-zinc-400">February 2025 - April 2025 | Remote</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 mt-2 text-zinc-200">
                  <li>Integrated OpenAI and Gemini LLM APIs into production backend services with prompt-driven workflows.</li>
                  <li>Engineered REST APIs using Python and Flask, improving application response time by 25%.</li>
                  <li>Designed reusable JSON response models, reducing backend integration effort by 35%.</li>
                  <li>Debugged and validated API and LLM outputs using Postman, reducing debugging effort by 40%.</li>
                </ul>

                <div className="border-t border-zinc-700 my-6"></div>

                <div className="mb-2">
                  <span className="font-semibold">Open Source Contributor</span> <br/>
                  <span>GitHub</span> <br/>
                  <span className="text-zinc-400">2026 | 44 merged pull requests across 39 projects</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 mt-2 text-zinc-200">
                  {openSourceHighlights.map((pr) => (
                    <li key={pr.href}>
                      <a href={pr.href} target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-500 hover:decoration-white">
                        {pr.repo}
                      </a>
                      {": "}
                      {pr.summary}
                    </li>
                  ))}
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
