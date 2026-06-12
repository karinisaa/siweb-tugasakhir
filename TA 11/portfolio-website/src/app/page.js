import Hero from "@/components/Hero";
import Link from "next/link";
import prisma from "@/lib/prisma";
import ProjectCard from "@/components/ProjectCard";

export default async function HomePage() {
  // Fetch latest 3 projects for the home page
  let projects = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique
              challenge and learning experience.
            </p>
          </div>

          {/* Project Cards */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects available yet.</p>
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-pink-500/50 text-gray-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 group"
            >
              View All Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="bg-gray-900/30 py-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Technologies I{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Work With
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Sys Analysis", icon: "📊" },
              { name: "HTML/CSS", icon: "🌐" },
              { name: "Laravel", icon: "🔥" },
              { name: "Flutter", icon: "📱" },
              { name: "MySQL", icon: "🐬" },
              { name: "Figma", icon: "🎨" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 text-center hover:border-pink-500/30 transition-all hover:-translate-y-1 group"
              >
                <span className="text-2xl block mb-2">{tech.icon}</span>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-pink-600/10 to-cyan-500/10 border border-pink-500/20 rounded-3xl p-10 sm:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Interested in collaborating or have a project in mind? I&apos;d
                love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/about"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-cyan-500 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-pink-500/25 transition-all hover:-translate-y-0.5 text-center"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto border border-gray-700 hover:border-pink-500/50 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 text-center"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
