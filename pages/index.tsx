// pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import { ProfileHeader } from "./components/ProfileHeader";
import { Card } from "./components/Card";
import { ExperienceList, Experience } from "./components/ExperienceList";
import ProjectsCard from "./components/Projects";
import Badges from "./components/Badges";

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
          title="AI Engineer | Automation Specialist | Python Developer"
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
              <Badges />
            </Card>
          </div>

          {/* Projects Section */}
          
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-sm text-gray-600 text-justify">
                Hi! I'm Francis, a passionate and driven AI Engineer with a strong focus on AI automation and Retrieval-Augmented Generation (RAG) system development. Leveraging tools like DeepSeek, n8n, LangChain, Supabase and MongoDB Atlas, I design intelligent solutions that combine cutting-edge AI with scalable automation workflows.
              </p>
            </Card>

        <Card>
  <h2 className="text-lg font-semibold mb-4">Projects and Case Studies</h2>
  <div className="text-sm text-gray-600 mb-4">
    DeepSeek, OpenAI, N8N, Python, FastAPI, LangChain, Pinecone, Supabase, MongoDB ...
  </div>

  <ProjectsCard
    projects={[
      {
        title: "HR Agent for AI Resume Screening",
        description: "Built an AI-powered appointment scheduling system for a dental clinic using ElevenLabs AI Agent, Google Calendar, and n8n.",
        image: "/images/hr-ai.jpg",
      },
      {
        title: "RAG Agent Vectorizing Files",
        description: "The solution is designed to help both clients and companies develop an AI agent tailored to their internal context, allowing the system to provide more accurate, domain-specific responses while streamlining automation and knowledge management.",
        image: "/images/rag-supabase.jpg",
      },
      {
        title: "Dental Clinic AI Agent using ElevenLabs",
        description: "Built an AI-powered appointment scheduling system for a dental clinic using ElevenLabs AI Agent, Google Calendar, and n8n.",
        image: "/images/dental-ai.jpg",
      },
      {
        title: "Pinecone AI RAG Agent",
        description: "An intelligent Retrieval-Augmented Generation (RAG) agent designed for Eco Pro Pest Management Services.",
        image: "/images/pinecone-rag.jpg",
      },
    ]}
  />
</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;