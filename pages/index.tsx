// pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import { ProfileHeader } from "./components/ProfileHeader";
import { Card } from "./components/Card";
import { ExperienceList, Experience } from "./components/ExperienceList";

const experiences: Experience[] = [
  { title: "Principal AI Engineer", org: "Standard Chartered", year: "2025" },
  { title: "AI Ops Engineer", org: "Centre of Excellence for GenAI, Cambridge", year: "2025" },
  { title: "Senior Full-Stack Developer", org: "Core Technology, Cambridge", year: "2024" },
  { title: "Software Engineering Lead", org: "PocketDevs", year: "2022" },
  { title: "Lead Application Developer", org: "Bluewind Asia", year: "2021" },
  { title: "Software Engineer", org: "GCM", year: "2020" },
  { title: "BS Information Technology", org: "University of San Carlos", year: "2019" },
  { title: "Hello World!", org: "Wrote my first line of code", year: "2015" },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader name="John Francis Tamondong" location="Legazpi City, Philippines" title="AI Engineer | Automation Specialist" avatarSrc="/avatar.jpg" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-sm text-gray-600">
                {/* Replace with real about text */}
                Brief about text here...
              </p>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
              <div className="text-sm text-gray-600">JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Python ...</div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-4">Experience</h2>
              <ExperienceList items={experiences} />
            </Card>

            <Card>
              <div className="text-sm text-gray-500">Additional widgets or links</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;