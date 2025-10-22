import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Francis Tamondong | AI Engineer & Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of John Francis Tamondong — AI Engineer, Full Stack Developer, and Tech Innovator specializing in LLMs, automation, and modern web solutions."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center px-6">
        {/* Hero Section */}
        <section className="max-w-4xl text-center mt-24">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-600">John Francis Tamondong</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I build intelligent systems and modern web applications — combining
            AI, automation, and clean design to solve real-world problems.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-3xl text-center mt-24">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I’m an aspiring <strong>AI Engineer</strong> and <strong>Full Stack Developer</strong> 
            passionate about building systems that bridge data, design, and intelligence. 
            From developing AI-powered chatbots to building dashboards with React, 
            I focus on creating impactful tools that automate and innovate.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mt-24 w-full">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Pinecone-Powered Pest Control AI Agent</h3>
              <p className="text-gray-600">
                A RAG-based AI system leveraging OpenAI embeddings and Pinecone for
                intelligent knowledge retrieval in pest control management.
              </p>
            </div>

            {/* Project 2 */}
            <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Custom AI Chatbot (FastAPI + OpenAI)</h3>
              <p className="text-gray-600">
                A conversational AI backend built with FastAPI and OpenAI API — 
                designed for scalable chatbot integrations with memory and context handling.
              </p>
            </div>

            {/* Project 3 */}
            <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">React Dashboard for Queue System</h3>
              <p className="text-gray-600">
                A WinForms-inspired React dashboard that manages ticket queues, counters, 
                and cashier operations — blending clean UI with efficient logic.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center mt-24 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p className="text-gray-600 mb-6">
            I’m open to internship or AI development opportunities. Let’s build something impactful.
          </p>
          <a
            href="mailto:johnfrancistamondong@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}
