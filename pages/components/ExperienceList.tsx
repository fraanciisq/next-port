// components/ExperienceList.tsx
import React from "react";

export type Experience = { title: string; org: string; year: string };

export const ExperienceList: React.FC<{ items: Experience[] }> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((exp, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full border border-gray-300 bg-white" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start gap-2">
              <div>
                <div className="font-medium text-gray-800">{exp.title}</div>
                <div className="text-sm text-gray-500">{exp.org}</div>
              </div>
              <div className="text-sm text-gray-400">{exp.year}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};