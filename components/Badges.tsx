"use client";
import React from "react";
import Link from "next/link";

const badges = [
  { 
    name: "MongoDB AI Vector Search", 
    icon: "/icons/mongodb-icon.jpg",
    link: "https://www.credly.com/badges/c923039f-1afb-4335-afe1-e71e59b4e0e7/public_url"
  },
  { 
    name: "Building RAG Apps with MongoDB", 
    icon: "/icons/mongodb-white.jpg",
    link: "https://www.credly.com/badges/ed956c02-444f-4b8c-abd4-716abbf96cd2/public_url"
  },
  { 
    name: "Python Badge", 
    icon: "/icons/python-logo.png",
    link: "https://www.credly.com/badges/f2ed9278-26df-403a-b7a1-1be18049a60e/public_url"
  }
];

export default function Badges() {
  return (
    <div className="relative space-y-3 pb-8">
      <h3 className="text-lg font-semibold text-gray-800">Badges</h3>

      <div className="space-y-2">
        {badges.map((badge) => (
          <a
            key={badge.name}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 overflow-hidden">
              <img
                src={badge.icon}
                alt={badge.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <span className="text-sm text-gray-700 font-medium">
              {badge.name}
            </span>
          </a>
        ))}
      </div>

      {/* Centered black "Show More" button */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Link
          href="https://www.linkedin.com/in/francis-tamondong/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
