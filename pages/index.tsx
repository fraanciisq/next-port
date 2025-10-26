// pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import { ProfileHeader } from "./components/ProfileHeader";
import { Card } from "./components/Card";
import { ExperienceList, Experience } from "./components/ExperienceList";

const experiences: Experience[] = [
  { title: "AI Engineer", org: "Racutech", year: "2025" },
  { title: "Software Engineer", org: "Argon Software", year: "2024" },
  { title: "Full-Stack Developer", org: "MindConcept Solutions", year: "2023" },

];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader
          name="John Francis Tamondong"
          location="Legazpi City, Philippines"
          title="AI Engineer | Automation Specialist"
          avatarSrc="/avatar.jpg"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT column on lg (Experience) */}
          <div className="order-2 lg:order-1 lg:col-span-1 space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-4">Experience</h2>
              <ExperienceList items={experiences} />
            </Card>

            <Card>
              <div className="text-sm text-gray-500">Additional widgets or links</div>
            </Card>
          </div>

          {/* RIGHT column on lg (Main content) */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-sm text-gray-600">
                Hi! I'm Francis, a passionate and driven AI Engineer with a strong focus on AI automation and Retrieval-Augmented Generation (RAG) system development. Leveraging tools like DeepSeek, n8n, LangChain, Supabase and MongoDB Atlas, I design intelligent solutions that combine cutting-edge AI with scalable automation workflows.
              </p>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
              <div className="text-sm text-gray-600">
                JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Python ...
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;