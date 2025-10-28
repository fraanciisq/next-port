"use client";
import React from "react";
import Link from "next/link";

const education = [
  {
    name: "UST - Legazpi",
    icon: "/icons/ust-logo.png",
    details: "BS Computer Engineering, 2024 GWA: 95.9",
  },
];

const projects = [
  {
    name: "ICPEP.Se RV",
    icon: "/icons/icpep.webp",
    details: "Internal Vice President - ICPeP USTL 2021",
  },
];

export default function Education() {
  return (
    <div className="relative space-y-6 pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Education and Affliation </h3>

      {/* Education Section */}
      <div className="space-y-2">
        {education.map((edu) => (
          <div
            key={edu.name}
            className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 overflow-hidden">
              <img
                src={edu.icon}
                alt={edu.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-medium">{edu.name}</p>
              <p className="text-xs text-gray-500">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Section — positioned closer */}
      <div className="space-y-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 overflow-hidden">
              <img
                src={project.icon}
                alt={project.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-medium">{project.name}</p>
              <p className="text-xs text-gray-500">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
