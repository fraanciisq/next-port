import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
};

type Props = { projects: Project[] };

const ProjectsCard: React.FC<Props> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
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
  );
};

export default ProjectsCard;
