import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, category }) {
  return (
    <div className="w-[100%] md:w-[47%] text-zinc-800 p-5 aspect-square rounded-lg bg-neutral-200 flex flex-col justify-between">
      <h3 className="">{project.name}</h3>
      {project?.imageSrc ? (
        <img src={project.imageSrc} alt={project.name}></img>
      ) : (
        <div className="w-full aspect-video rounded bg-zinc-900 text-zinc-300 flex flex-wrap content-center justify-center gap-1 p-2 overflow-hidden">
          {project.techs.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-white/10 rounded-full text-[0.65rem]">
              {tech}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm mt-1">{project.desc}</p>
      <div className="flex items-center justify-between">
        <Link
          to={`/projects/${project.id}`}
          className={`
            ${
              category === "Frontend" || project.name === "NSFW Detector"
                ? "hidden"
                : "block"
            }
          relative w-[49%]
          overflow-hidden 
          rounded-lg 
          px-6 py-1 mt-2
          text-lg 
          font-medium 
          text-zinc-300 
          hover:text-zinc-200 
          flex 
          justify-center
        `}
          style={{
            background:
              "linear-gradient(to bottom, rgb(39 39 42), rgb(24 24 27))",
            boxShadow:
              "inset 0 -2px 4px 1px rgba(0,0,0,0.4), inset 0 2px 2px 1px rgba(255,255,255,0.1)",
            transition: "all 200ms ease-out",
          }}
        >
          details
        </Link>
        <a
          className={`
          relative ${
            category === "Frontend" || project.name === "NSFW Detector"
              ? "w-full"
              : "w-[49%]"
          }
          overflow-hidden 
          rounded-lg 
          px-6 py-1 mt-2
          text-lg 
          font-medium 
          text-zinc-300 
          hover:text-zinc-200 
          flex 
          justify-center
        `}
          style={{
            background:
              "linear-gradient(to bottom, rgb(39 39 42), rgb(24 24 27))",
            boxShadow:
              "inset 0 -2px 4px 1px rgba(0,0,0,0.4), inset 0 2px 2px 1px rgba(255,255,255,0.1)",
            transition: "all 200ms ease-out",
          }}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          visit
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
