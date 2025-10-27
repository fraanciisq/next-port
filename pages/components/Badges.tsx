import React from "react";

const badges = [
  "Python",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "RAG Systems",
  "n8n Automation",
  "Supabase",
  "MongoDB",
  "Pinecone",
  "DeepSeek",
];

export default function Badges() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 space-y-3">
      <div className="flex items-center gap-2">
      
        <h3 className="text-sm font-semibold text-gray-800">Badges</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
