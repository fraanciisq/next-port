import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
 
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link?: string;
}
 
const ALL_PROJECTS: Project[] = [
  {
    title: "HR Agent for AI Resume Screening",
    description:
      "An AI-powered HR assistant that automates resume screening and candidate shortlisting. Parses resumes, scores applicants against job descriptions, and ranks candidates — reducing manual review time drastically.",
    image: "/images/hr-ai.jpg",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
    category: "AI Agents",
  },
  {
    title: "RAG Agent Vectorizing Files",
    description:
      "Designed to help clients and companies develop an AI agent tailored to their internal knowledge base. Vectorizes documents into Supabase pgvector, enabling domain-specific Q&A and knowledge retrieval at scale.",
    image: "/images/rag-supabase.jpg",
    tags: ["Supabase", "OpenAI", "LangChain", "pgvector"],
    category: "RAG Systems",
  },
  {
    title: "Dental Clinic AI Agent using ElevenLabs",
    description:
      "A voice AI appointment scheduling agent for a dental clinic. Built with ElevenLabs, Google Calendar API, and n8n workflows to handle bookings, reminders, and patient queries hands-free.",
    image: "/images/dental-ai.jpg",
    tags: ["ElevenLabs", "n8n", "Google Calendar", "Voice AI"],
    category: "Automation",
  },
  {
    title: "Pinecone AI RAG Agent",
    description:
      "An intelligent RAG agent for Eco Pro Pest Management Services. Indexes SOPs, product manuals, and service guides into Pinecone so staff can query internal knowledge instantly.",
    image: "/images/pinecone-rag.jpg",
    tags: ["Pinecone", "OpenAI", "Python", "LangChain"],
    category: "RAG Systems",
  },
  {
    title: "HubSpot CRM Automation",
    description:
      "End-to-end CRM automation using n8n and Zapier with HubSpot. Automates lead capture, follow-up sequences, deal stage updates, and data sync across the full sales pipeline.",
    image: "/images/hr-ai.jpg",
    tags: ["HubSpot", "n8n", "Zapier", "CRM"],
    category: "Automation",
  },
  {
    title: "ClickUp & Jira Workflow Automation",
    description:
      "Automated project workflows between ClickUp, Jira, and Slack. Eliminates manual status updates, ticket creation, and cross-team notifications using smart triggers.",
    image: "/images/rag-supabase.jpg",
    tags: ["ClickUp", "Jira", "Slack", "n8n"],
    category: "Automation",
  },
];
 
const CATEGORIES = ["All", ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category)))];
const ALL_TAGS = Array.from(new Set(ALL_PROJECTS.flatMap((p) => p.tags)));
 
const CATEGORY_COLORS: Record<string, string> = {
  "AI Agents": "bg-violet-100 text-violet-700",
  "RAG Systems": "bg-blue-100 text-blue-700",
  Automation: "bg-emerald-100 text-emerald-700",
};
 
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [search, setSearch] = useState("");
 
  const filtered = ALL_PROJECTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchTag = !activeTag || p.tags.includes(activeTag);
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchTag && matchSearch;
  });
 
  return (
    <>
      <Head>
        <title>Projects — Francis Tamondong</title>
      </Head>
 
      <div className="min-h-screen bg-gray-50">
        {/* Top nav */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Portfolio
            </Link>
            <span className="text-xs text-gray-400">
              {ALL_PROJECTS.length} projects total
            </span>
          </div>
        </div>
 
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Projects &amp; Case Studies
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              AI agents, RAG systems, and automation workflows built for real
              clients.
            </p>
          </div>
 
          {/* Filters */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by title, description, or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-50"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
 
            {/* Category tabs */}
            <div>
              <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium transition ${
                      activeCategory === cat
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
 
            {/* Tag filters */}
            <div>
              <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
                Tech Stack{" "}
                {activeTag && (
                  <span className="text-blue-500 normal-case">
                    — click again to clear
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`text-xs px-2.5 py-1 rounded-md border transition ${
                      activeTag === tag
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
 
          {/* Result count + clear */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs text-gray-400">
              {filtered.length === ALL_PROJECTS.length
                ? `All ${ALL_PROJECTS.length} projects`
                : `${filtered.length} of ${ALL_PROJECTS.length} projects`}
            </p>
            {(search || activeTag || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveTag(null);
                }}
                className="text-xs text-blue-500 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
 
          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm">No projects match your filters.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveTag(null);
                }}
                className="mt-4 text-xs text-blue-500 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/600x300/f3f4f6/9ca3af?text=${encodeURIComponent(
                          project.category
                        )}`;
                      }}
                    />
                  </div>
 
                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
                        CATEGORY_COLORS[project.category] ??
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.category}
                    </span>
 
                    <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug">
                      {project.title}
                    </h3>
 
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">
                      {project.description}
                    </p>
 
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() =>
                            setActiveTag(activeTag === tag ? null : tag)
                          }
                          className={`text-xs px-2 py-0.5 rounded-full transition ${
                            activeTag === tag
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
 
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs text-blue-500 hover:underline flex items-center gap-1"
                      >
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}