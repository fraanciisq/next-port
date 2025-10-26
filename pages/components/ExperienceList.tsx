// components/ExperienceList.tsx
import React from "react";

export type Experience = { title: string; org: string; year: string };

type Props = { items: Experience[] };

export const ExperienceList: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative pl-8"> 
      {/* vertical line */}
      <span className="absolute left-10.5 top-0 bottom-0 w-px bg-gray-200" aria-hidden="true" />

      <div className="space-y-6">
        {items.map((exp, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* left column: dot aligned with the vertical line */}
            <div className="w-6 flex flex-col items-center">
              {/* dot - latest (idx === 0) is filled black, others are white with border */}
              <span
                className={
                  "relative z-10 flex items-center justify-center w-3 h-3 rounded-full " +
                  (idx === 0
                    ? "bg-black border border-black"
                    : "bg-white border border-gray-300")
                }
                aria-hidden="true"
              />
            </div>

            {/* content */}
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
    </div>
  );
};