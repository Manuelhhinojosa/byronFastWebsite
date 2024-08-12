import React from "react";

// data
import projectsData from "../assets/data/ProjectsData";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {projectsData.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt="Project image"
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.type}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <a href="{project.link}" className="mb-2 text-neutral-100">
                Visit post.
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
