import React from "react";

const badges = [

{ name: "MongoDB", icon: "/icons/mongodb-icon.jpg" },
 
];

export default function Badges() {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Badges</h3>

      <div className="space-y-2">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 overflow-hidden">
              {badge.icon ? (
                <img src={badge.icon} alt={badge.name} className="w-5 h-5 object-cover rounded-full" />
              ) : (
                <span className="text-gray-500 text-xs">•</span>
              )}
            </div>

            <span className="text-sm text-gray-700 font-medium">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
