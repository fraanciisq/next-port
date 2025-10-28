"use client";
import React, { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
};

type Props = { projects: Project[] };

const ProjectsCard: React.FC<Props> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)} // Open modal
            className="group bg-white rounded-xl shadow-sm border overflow-hidden cursor-pointer hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full h-32 sm:h-40 bg-gray-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)} // Close when clicking background
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full mx-4"
          >
            {/* Image */}
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-gray-600">{selectedProject.description}</p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
